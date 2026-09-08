var lbImages = [];
var lbIndex = 0;
var lbCaption = '';

function probeImage(src){
  return new Promise(function(resolve){
    var img = new Image();
    img.onload = function(){ resolve({ src: src, ok: true }); };
    img.onerror = function(){ resolve({ src: src, ok: false }); };
    img.src = src;
  });
}

function openLightbox(card){
  var raw = card.getAttribute('data-images');
  var allImages = raw ? JSON.parse(raw) : [card.getAttribute('data-src')];
  lbCaption = card.getAttribute('data-caption') || '';
  lbImages = [];
  lbIndex = 0;

  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
  renderLightbox(); // show empty state immediately while probing

  Promise.all(allImages.map(probeImage)).then(function(results){
    lbImages = results.filter(function(r){ return r.ok; }).map(function(r){ return r.src; });
    lbIndex = 0;
    renderLightbox();
  });
}

function renderLightbox(){
  var img = document.getElementById('lightbox-img');
  var missing = document.getElementById('lightbox-missing');
  var counter = document.getElementById('lightbox-counter');
  var prevBtn = document.querySelector('.lightbox-prev');
  var nextBtn = document.querySelector('.lightbox-next');

  document.getElementById('lightbox-caption').textContent = lbCaption;

  if(lbImages.length === 0){
    img.style.display = 'none';
    missing.style.display = 'block';
    counter.textContent = '';
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    return;
  }

  img.src = lbImages[lbIndex];
  img.style.display = 'block';
  missing.style.display = 'none';
  counter.textContent = lbImages.length > 1 ? (lbIndex + 1) + ' / ' + lbImages.length : '';

  var multi = lbImages.length > 1;
  prevBtn.style.display = multi ? 'flex' : 'none';
  nextBtn.style.display = multi ? 'flex' : 'none';
}

function navLightbox(dir){
  if(lbImages.length <= 1) return;
  lbIndex = (lbIndex + dir + lbImages.length) % lbImages.length;
  renderLightbox();
}

function closeLightbox(){
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function(e){
  if(!document.getElementById('lightbox').classList.contains('open')) return;
  if(e.key === 'Escape') closeLightbox();
  if(e.key === 'ArrowLeft') navLightbox(-1);
  if(e.key === 'ArrowRight') navLightbox(1);
});

// ---------- Photo counts detected at runtime (never hardcoded) ----------
// Certificate thumbnail grid (Evidence section)
function updateEvidenceCounts(){
  document.querySelectorAll('.evidence-card').forEach(function(card){
    var raw = card.getAttribute('data-images');
    var images = raw ? JSON.parse(raw) : [];
    var countEl = card.querySelector('.evidence-count');
    if(!countEl) return;
    if(images.length === 0){ countEl.remove(); return; }

    Promise.all(images.map(probeImage)).then(function(results){
      var okCount = results.filter(function(r){ return r.ok; }).length;
      if(okCount === 0){
        countEl.remove();
      } else {
        countEl.textContent = okCount + (okCount === 1 ? ' photo' : ' photos');
      }
    });
  });
}

// "View documentation" buttons under each project (no thumbnails shown until clicked)
function updateDocLinkCounts(){
  document.querySelectorAll('.view-doc').forEach(function(btn){
    var raw = btn.getAttribute('data-images');
    var images = raw ? JSON.parse(raw) : [];
    var countEl = btn.querySelector('.view-doc-count');
    if(!countEl || images.length === 0) return;

    Promise.all(images.map(probeImage)).then(function(results){
      var okCount = results.filter(function(r){ return r.ok; }).length;
      countEl.textContent = okCount > 0 ? ('· ' + okCount + (okCount === 1 ? ' photo' : ' photos')) : '';
    });
  });
}

function initCounts(){
  updateEvidenceCounts();
  updateDocLinkCounts();
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', initCounts);
} else {
  initCounts();
}
