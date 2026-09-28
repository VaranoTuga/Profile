var lbImages = [];
var lbIndex = 0;
var lbCaption = "";
var lbTrigger = null;

function probeImage(src) {
  return new Promise(function (resolve) {
    var img = new Image();
    img.onload = function () {
      resolve({ src: src, ok: true });
    };
    img.onerror = function () {
      resolve({ src: src, ok: false });
    };
    img.src = src;
  });
}

function openLightbox(card) {
  var raw = card.getAttribute("data-images");
  var allImages = raw ? JSON.parse(raw) : [card.getAttribute("data-src")];
  lbCaption = card.getAttribute("data-caption") || "";
  lbImages = [];
  lbIndex = 0;

  lbTrigger = document.activeElement;
  document.getElementById("lightbox").classList.add("open");
  document.body.style.overflow = "hidden";
  document.querySelector(".lightbox-close").focus();
  renderLightbox(); // show empty state immediately while probing

  Promise.all(allImages.map(probeImage)).then(function (results) {
    lbImages = results
      .filter(function (r) {
        return r.ok;
      })
      .map(function (r) {
        return r.src;
      });
    lbIndex = 0;
    renderLightbox();
  });
}

function renderLightbox() {
  var img = document.getElementById("lightbox-img");
  var missing = document.getElementById("lightbox-missing");
  var counter = document.getElementById("lightbox-counter");
  var prevBtn = document.querySelector(".lightbox-prev");
  var nextBtn = document.querySelector(".lightbox-next");

  document.getElementById("lightbox-caption").textContent = lbCaption;

  if (lbImages.length === 0) {
    img.style.display = "none";
    missing.style.display = "block";
    counter.textContent = "";
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    return;
  }

  img.src = lbImages[lbIndex];
  img.style.display = "block";
  missing.style.display = "none";
  counter.textContent =
    lbImages.length > 1 ? lbIndex + 1 + " / " + lbImages.length : "";

  var multi = lbImages.length > 1;
  prevBtn.style.display = multi ? "flex" : "none";
  nextBtn.style.display = multi ? "flex" : "none";
}

function navLightbox(dir) {
  if (lbImages.length <= 1) return;
  lbIndex = (lbIndex + dir + lbImages.length) % lbImages.length;
  renderLightbox();
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
  if (lbTrigger && lbTrigger.focus) lbTrigger.focus();
  lbTrigger = null;
}

document.addEventListener("keydown", function (e) {
  if (!document.getElementById("lightbox").classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") navLightbox(-1);
  if (e.key === "ArrowRight") navLightbox(1);
});

// ---------- Photo counts detected at runtime (never hardcoded) ----------
// Certificate thumbnail grid (Evidence section)
function updateEvidenceCounts() {
  document.querySelectorAll(".evidence-card").forEach(function (card) {
    var raw = card.getAttribute("data-images");
    var images = raw ? JSON.parse(raw) : [];
    var countEl = card.querySelector(".evidence-count");
    if (!countEl) return;
    if (images.length === 0) {
      countEl.remove();
      return;
    }

    Promise.all(images.map(probeImage)).then(function (results) {
      var okCount = results.filter(function (r) {
        return r.ok;
      }).length;
      if (okCount === 0) {
        countEl.remove();
      } else {
        countEl.textContent = okCount + (okCount === 1 ? " photo" : " photos");
      }
    });
  });
}

// "View documentation" buttons under each project (no thumbnails shown until clicked)
function updateDocLinkCounts() {
  document.querySelectorAll(".view-doc").forEach(function (btn) {
    var raw = btn.getAttribute("data-images");
    var images = raw ? JSON.parse(raw) : [];
    var countEl = btn.querySelector(".view-doc-count");
    if (!countEl || images.length === 0) return;

    Promise.all(images.map(probeImage)).then(function (results) {
      var okCount = results.filter(function (r) {
        return r.ok;
      }).length;
      countEl.textContent =
        okCount > 0
          ? "· " + okCount + (okCount === 1 ? " photo" : " photos")
          : "";
    });
  });
}

function initCounts() {
  updateEvidenceCounts();
  updateDocLinkCounts();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCounts);
} else {
  initCounts();
}

// ---------- v2 refresh ----------
(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Theme toggle
  var tt = document.getElementById("themeToggle");
  function syncTheme() {
    var light = root.dataset.theme === "light";
    tt.textContent = light ? "Dark" : "Light";
    tt.setAttribute("aria-pressed", String(light));
  }
  tt.addEventListener("click", function () {
    root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
    try {
      localStorage.setItem("theme", root.dataset.theme);
    } catch (e) {}
    syncTheme();
  });
  syncTheme();

  // Active nav link
  var links = document.querySelectorAll(".nav-links a");
  var secs = document.querySelectorAll(
    "header#home, section[id], footer#contact",
  );
  if ("IntersectionObserver" in window) {
    var navIO = new IntersectionObserver(
      function (es) {
        es.forEach(function (e) {
          if (!e.isIntersecting) return;
          links.forEach(function (a) {
            var on = a.getAttribute("href") === "#" + e.target.id;
            a.classList.toggle("active", on);
            if (on) a.setAttribute("aria-current", "true");
            else a.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    secs.forEach(function (s) {
      navIO.observe(s);
    });
  }

  // Project covers: first photo that loads becomes the card cover
  document.querySelectorAll(".proj-item").forEach(function (item) {
    var btn = item.querySelector(".view-doc");
    if (!btn) return;
    var imgs = JSON.parse(btn.getAttribute("data-images") || "[]");
    Promise.all(imgs.map(probeImage)).then(function (r) {
      var ok = r.filter(function (x) {
        return x.ok;
      })[0];
      if (!ok) return;
      var c = document.createElement("div");
      c.className = "proj-cover";
      c.setAttribute(
        "aria-label",
        "Open photos: " + item.querySelector(".proj-title").textContent.trim(),
      );
      c.innerHTML = '<img loading="lazy" alt="" src="' + ok.src + '" />';
      c.tabIndex = -1;
      item.insertBefore(c, item.firstChild);
    });
  });

  // Counters
  document.querySelectorAll("[data-count]").forEach(function (el) {
    var end = parseFloat(el.dataset.count),
      dec = +el.dataset.dec || 0;
    if (reduce || !("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (es) {
      if (!es[0].isIntersecting) return;
      io.disconnect();
      var t0 = performance.now();
      (function tick(t) {
        var p = Math.min((t - t0) / 900, 1);
        el.textContent = (end * (1 - Math.pow(1 - p, 3))).toFixed(dec);
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
    });
    io.observe(el);
  });

  // Scroll reveal
  if (!reduce && "IntersectionObserver" in window) {
    var rio = new IntersectionObserver(
      function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            rio.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    document
      .querySelectorAll(
        ".section-heading, .role, .proj-item, .evidence-card, table.bom, .edu-row, .contact-box",
      )
      .forEach(function (el) {
        el.classList.add("reveal");
        rio.observe(el);
      });
  }
})();

// Click an experience / project to see its photos (replaces "View documentation" buttons)
(function () {
  document.querySelectorAll(".proj-item, .role").forEach(function (card) {
    var btns = card.querySelectorAll(".view-doc");
    if (!btns.length) return;
    var all = [];
    btns.forEach(function (b) {
      all = all.concat(JSON.parse(b.getAttribute("data-images") || "[]"));
    });
    var titleEl = card.querySelector(".proj-title, .role-title");
    var cap =
      btns.length > 1
        ? titleEl.textContent.trim()
        : btns[0].getAttribute("data-caption");
    var data = document.createElement("div");
    data.setAttribute("data-images", JSON.stringify(all));
    data.setAttribute("data-caption", cap);
    Promise.all(all.map(probeImage)).then(function (r) {
      var n = r.filter(function (x) {
        return x.ok;
      }).length;
      if (!n) return;
      card.classList.add("has-photos");
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute(
        "aria-label",
        "View photos: " + titleEl.textContent.trim(),
      );
      var hint = document.createElement("span");
      hint.className = "photo-hint";
      hint.textContent = "View photos · " + n;
      (card.classList.contains("role") ? card.children[1] : card).appendChild(
        hint,
      );
      card.addEventListener("click", function () {
        openLightbox(data);
      });
      card.addEventListener("keydown", function (e) {
        if (e.target === card && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          openLightbox(data);
        }
      });
    });
  });
})();
