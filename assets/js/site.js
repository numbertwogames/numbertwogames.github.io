(function () {
  // Remember an explicit language choice so the root redirect respects it.
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[data-lang]');
    if (!link) return;
    try { localStorage.setItem('lang', link.getAttribute('data-lang')); } catch (err) {}
  });

  // Close the language menu when clicking elsewhere or pressing Escape.
  var menu = document.querySelector('.lang-switch');
  if (menu) {
    document.addEventListener('click', function (e) {
      if (menu.open && !menu.contains(e.target)) menu.open = false;
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.open) {
        menu.open = false;
        menu.querySelector('summary').focus();
      }
    });
  }

  // Screenshot lightbox.
  var dialog = document.querySelector('dialog.lightbox');
  if (dialog && typeof dialog.showModal === 'function') {
    var img = dialog.querySelector('img');
    document.querySelectorAll('[data-lightbox]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var thumb = link.querySelector('img');
        img.src = link.href;
        img.alt = thumb ? thumb.alt : '';
        dialog.showModal();
      });
    });
    dialog.addEventListener('click', function (e) {
      if (e.target === dialog || e.target === img) dialog.close();
    });
  }
})();
