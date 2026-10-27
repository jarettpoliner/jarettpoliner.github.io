// Figure lightbox. Figures work as plain images without this script.
(function () {
  var dlg = document.getElementById('lightbox');
  if (!dlg || typeof dlg.showModal !== 'function') return;
  var cap = dlg.querySelector('p');
  var img = document.createElement('img');
  cap.parentNode.insertBefore(img, cap);
  var opener = null;

  document.querySelectorAll('button.zoom').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var thumb = btn.querySelector('img');
      img.src = btn.dataset.full || thumb.currentSrc || thumb.src;
      img.alt = thumb.alt;
      var fc = btn.closest('figure') && btn.closest('figure').querySelector('figcaption');
      cap.textContent = fc ? fc.textContent.trim() : '';
      opener = btn;
      dlg.showModal();
    });
  });

  function close() { dlg.close(); }
  dlg.querySelector('.lb-close').addEventListener('click', close);
  dlg.addEventListener('click', function (e) { if (e.target === dlg) close(); });
  dlg.addEventListener('close', function () {
    if (!dlg.open) img.removeAttribute('src');
    if (opener) opener.focus();
  });
})();
