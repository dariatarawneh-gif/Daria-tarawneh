(function () {
  'use strict';

  var CMS_PASSWORD = 'daria2026';
  var TRIGGER_KEY = 'e';
  var active = false;
  var toolbar = null;
  var contextMenu = null;
  var imageModal = null;
  var currentTarget = null;

  /* ── KEYBOARD TRIGGER ─────────────────────────────────── */
  document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === TRIGGER_KEY) {
      if (active) { exitCMS(); } else { promptPassword(); }
    }
  });

  function promptPassword() {
    var pw = prompt('Enter CMS password:');
    if (pw === CMS_PASSWORD) { enterCMS(); }
    else if (pw !== null) { alert('Incorrect password.'); }
  }

  /* ── ENTER / EXIT ─────────────────────────────────────── */
  function enterCMS() {
    active = true;
    document.body.classList.add('cms-active');
    buildToolbar();
    document.addEventListener('click', dismissContextMenu);
    document.addEventListener('contextmenu', onContextMenu);
  }

  function exitCMS() {
    active = false;
    document.body.classList.remove('cms-active');
    document.removeEventListener('contextmenu', onContextMenu);
    document.removeEventListener('click', dismissContextMenu);
    if (toolbar) { toolbar.remove(); toolbar = null; }
    dismissContextMenu();
    closeImageModal();
    // remove any lingering contenteditable
    document.querySelectorAll('[data-cms-editing]').forEach(cancelEdit);
  }

  /* ── TOOLBAR ──────────────────────────────────────────── */
  function buildToolbar() {
    toolbar = document.createElement('div');
    toolbar.id = 'cms-toolbar';
    toolbar.innerHTML =
      '<span class="cms-tb-logo">CMS MODE</span>' +
      '<span class="cms-tb-hint">Right-click text or images to edit</span>' +
      '<button id="cms-download">⬇ Download HTML</button>' +
      '<button id="cms-exit">✕ Exit</button>';
    document.body.insertBefore(toolbar, document.body.firstChild);
    document.getElementById('cms-exit').addEventListener('click', exitCMS);
    document.getElementById('cms-download').addEventListener('click', downloadHTML);
  }

  /* ── CONTEXT MENU ─────────────────────────────────────── */
  function onContextMenu(e) {
    var el = e.target;
    var isImg = el.tagName === 'IMG' || el.closest('[data-cms-img]');
    var isText = !isImg && isEditableText(el);
    if (!isImg && !isText) return;

    e.preventDefault();
    dismissContextMenu();

    currentTarget = isImg ? (el.tagName === 'IMG' ? el : el.querySelector('img')) : el;

    contextMenu = document.createElement('div');
    contextMenu.id = 'cms-context';
    contextMenu.style.left = e.pageX + 'px';
    contextMenu.style.top = e.pageY + 'px';

    if (isImg) {
      contextMenu.innerHTML =
        '<button data-action="replace-img">Replace image</button>' +
        '<button data-action="scale-img">Scale / crop</button>';
    } else {
      contextMenu.innerHTML =
        '<button data-action="edit-text">Edit text</button>';
    }

    document.body.appendChild(contextMenu);
    contextMenu.querySelectorAll('button').forEach(function (btn) {
      btn.addEventListener('mousedown', function (e2) {
        e2.stopPropagation();
        e2.preventDefault();
        handleAction(btn.dataset.action);
        dismissContextMenu();
      });
    });
  }

  function dismissContextMenu() {
    if (contextMenu) { contextMenu.remove(); contextMenu = null; }
  }

  function handleAction(action) {
    if (action === 'edit-text') startTextEdit(currentTarget);
    if (action === 'replace-img') openImageModal('replace');
    if (action === 'scale-img') openImageModal('scale');
  }

  /* ── TEXT EDITING ─────────────────────────────────────── */
  function isEditableText(el) {
    var tag = el.tagName;
    var editable = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'SPAN', 'LI', 'BLOCKQUOTE', 'FIGCAPTION', 'TD', 'TH', 'LABEL', 'DIV'];
    if (editable.indexOf(tag) === -1) return false;
    // skip cms UI elements
    if (el.closest('#cms-toolbar, #cms-context, #cms-image-modal')) return false;
    return true;
  }

  function startTextEdit(el) {
    if (el.dataset.cmsEditing) return;
    el.dataset.cmsEditing = 'true';
    el.setAttribute('contenteditable', 'true');
    el.classList.add('cms-editing');
    el.focus();

    var bar = document.createElement('div');
    bar.className = 'cms-text-bar';
    bar.innerHTML =
      '<button class="cms-save-text">Save</button>' +
      '<button class="cms-cancel-text">Cancel</button>';
    bar.dataset.cmsBar = 'true';

    var orig = el.innerHTML;
    el.parentNode.insertBefore(bar, el.nextSibling);

    bar.querySelector('.cms-save-text').addEventListener('click', function () {
      el.removeAttribute('contenteditable');
      delete el.dataset.cmsEditing;
      el.classList.remove('cms-editing');
      bar.remove();
    });

    bar.querySelector('.cms-cancel-text').addEventListener('click', function () {
      el.innerHTML = orig;
      cancelEdit(el);
      bar.remove();
    });
  }

  function cancelEdit(el) {
    el.removeAttribute('contenteditable');
    delete el.dataset.cmsEditing;
    el.classList.remove('cms-editing');
    var bar = el.nextSibling;
    if (bar && bar.dataset && bar.dataset.cmsBar) bar.remove();
  }

  /* ── IMAGE MODAL ──────────────────────────────────────── */
  function openImageModal(mode) {
    closeImageModal();
    var img = currentTarget;
    if (!img || img.tagName !== 'IMG') return;

    // Read existing values
    var currentScale = parseFloat(img.dataset.cmsScale || '100');
    var currentPX = parseFloat(img.dataset.cmsPosX || '50');
    var currentPY = parseFloat(img.dataset.cmsPosY || '50');
    var newSrc = null;

    imageModal = document.createElement('div');
    imageModal.id = 'cms-image-modal';
    imageModal.innerHTML =
      '<div id="cms-modal-inner">' +
        '<div id="cms-modal-header">' +
          '<span>' + (mode === 'replace' ? 'Replace image' : 'Scale &amp; crop') + '</span>' +
          '<button id="cms-modal-close">✕</button>' +
        '</div>' +
        '<div id="cms-preview-crop">' +
          '<img id="cms-preview-img" src="' + img.src + '" alt="">' +
        '</div>' +
        (mode === 'replace'
          ? '<label id="cms-upload-label">Choose file<input type="file" id="cms-file-input" accept="image/*"></label>'
          : '') +
        '<div id="cms-sliders">' +
          '<label>Scale %<input type="range" id="cms-scale" min="100" max="300" value="' + currentScale + '"><span id="cms-scale-val">' + Math.round(currentScale) + '</span></label>' +
          '<label>Crop X<input type="range" id="cms-pos-x" min="0" max="100" value="' + currentPX + '"><span id="cms-px-val">' + Math.round(currentPX) + '</span></label>' +
          '<label>Crop Y<input type="range" id="cms-pos-y" min="0" max="100" value="' + currentPY + '"><span id="cms-py-val">' + Math.round(currentPY) + '</span></label>' +
        '</div>' +
        '<div id="cms-modal-actions">' +
          '<button id="cms-apply">Apply</button>' +
          '<button id="cms-modal-cancel">Cancel</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(imageModal);

    var previewImg = document.getElementById('cms-preview-img');
    var scaleSlider = document.getElementById('cms-scale');
    var posX = document.getElementById('cms-pos-x');
    var posY = document.getElementById('cms-pos-y');

    function applyPreview() {
      var s = scaleSlider.value / 100;
      var px = posX.value + '%';
      var py = posY.value + '%';
      previewImg.style.width = '100%';
      previewImg.style.height = '100%';
      previewImg.style.objectFit = 'cover';
      previewImg.style.objectPosition = px + ' ' + py;
      previewImg.style.transform = 'scale(' + s + ')';
      previewImg.style.transformOrigin = px + ' ' + py;
      document.getElementById('cms-scale-val').textContent = Math.round(scaleSlider.value);
      document.getElementById('cms-px-val').textContent = Math.round(posX.value);
      document.getElementById('cms-py-val').textContent = Math.round(posY.value);
    }

    applyPreview();
    scaleSlider.addEventListener('input', applyPreview);
    posX.addEventListener('input', applyPreview);
    posY.addEventListener('input', applyPreview);

    if (mode === 'replace') {
      document.getElementById('cms-file-input').addEventListener('change', function (e) {
        var file = e.target.files[0];
        if (!file) return;
        var reader = new FileReader();
        reader.onload = function (ev) {
          newSrc = ev.target.result;
          previewImg.src = newSrc;
        };
        reader.readAsDataURL(file);
      });
    }

    document.getElementById('cms-modal-close').addEventListener('click', closeImageModal);
    document.getElementById('cms-modal-cancel').addEventListener('click', closeImageModal);

    document.getElementById('cms-apply').addEventListener('click', function () {
      var s = scaleSlider.value / 100;
      var px = posX.value + '%';
      var py = posY.value + '%';

      if (newSrc) {
        img.src = newSrc;
        // Remove <source> elements so browser uses the <img src> we just set
        var pic = img.parentElement;
        if (pic && pic.tagName === 'PICTURE') {
          pic.querySelectorAll('source').forEach(function (s) { s.remove(); });
        }
      }

      img.style.objectFit = 'cover';
      img.style.objectPosition = px + ' ' + py;
      img.style.transform = 'scale(' + s + ')';
      img.style.transformOrigin = px + ' ' + py;
      // ensure the container clips
      var parent = img.parentElement;
      if (parent && getComputedStyle(parent).overflow === 'visible') {
        parent.style.overflow = 'hidden';
      }

      img.dataset.cmsScale = scaleSlider.value;
      img.dataset.cmsPosX = posX.value;
      img.dataset.cmsPosY = posY.value;
      closeImageModal();
    });

    imageModal.addEventListener('click', function (e) {
      if (e.target === imageModal) closeImageModal();
    });
  }

  function closeImageModal() {
    if (imageModal) { imageModal.remove(); imageModal = null; }
  }

  /* ── DOWNLOAD HTML ────────────────────────────────────── */
  function downloadHTML() {
    // clone the document, strip cms UI before serialising
    var clone = document.documentElement.cloneNode(true);

    // remove toolbar, context menus, modals, text-edit bars
    clone.querySelectorAll('#cms-toolbar, #cms-context, #cms-image-modal, .cms-text-bar').forEach(function (n) { n.remove(); });

    // remove contenteditable + cms classes
    clone.querySelectorAll('[contenteditable]').forEach(function (n) {
      n.removeAttribute('contenteditable');
    });
    clone.querySelectorAll('[data-cms-editing]').forEach(function (n) {
      delete n.dataset.cmsEditing;
      n.classList.remove('cms-editing');
    });
    clone.querySelectorAll('.cms-active').forEach(function (n) {
      n.classList.remove('cms-active');
    });

    var html = '<!DOCTYPE html>\n' + clone.outerHTML;
    var blob = new Blob([html], { type: 'text/html' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    // use current filename
    var filename = window.location.pathname.split('/').pop() || 'index.html';
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  /* ── STYLES ───────────────────────────────────────────── */
  var style = document.createElement('style');
  style.textContent = [
    'body.cms-active { padding-top: 48px !important; }',

    '#cms-toolbar {',
    '  position: fixed; top: 0; left: 0; right: 0; z-index: 99999;',
    '  height: 48px; background: #1a1a1a; display: flex; align-items: center;',
    '  gap: 16px; padding: 0 20px; font-family: sans-serif; font-size: 12px;',
    '}',
    '.cms-tb-logo { color: #e34c27; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; }',
    '.cms-tb-hint { color: rgba(255,255,255,0.4); flex: 1; }',
    '#cms-toolbar button {',
    '  background: #333; color: #fff; border: none; padding: 6px 14px;',
    '  font-size: 12px; cursor: pointer; border-radius: 4px;',
    '}',
    '#cms-download { background: #e34c27; }',
    '#cms-toolbar button:hover { opacity: 0.85; }',

    // context menu
    '#cms-context {',
    '  position: absolute; z-index: 99998; background: #fff;',
    '  border: 1px solid #ddd; border-radius: 6px; padding: 4px;',
    '  box-shadow: 0 4px 16px rgba(0,0,0,0.15); min-width: 160px;',
    '}',
    '#cms-context button {',
    '  display: block; width: 100%; text-align: left; padding: 8px 14px;',
    '  background: none; border: none; cursor: pointer; font-size: 13px;',
    '  border-radius: 4px;',
    '}',
    '#cms-context button:hover { background: #f5f5f5; }',

    // editable highlight
    '[data-cms-editing] { outline: 2px dashed #e34c27 !important; outline-offset: 2px; }',
    '.cms-text-bar {',
    '  display: flex; gap: 8px; margin: 4px 0 8px; z-index: 99997; position: relative;',
    '}',
    '.cms-text-bar button {',
    '  font-size: 11px; padding: 4px 12px; border: none; border-radius: 4px;',
    '  cursor: pointer; font-family: sans-serif;',
    '}',
    '.cms-save-text { background: #e34c27; color: #fff; }',
    '.cms-cancel-text { background: #eee; color: #333; }',

    // hover glow on editable elements
    'body.cms-active p:hover, body.cms-active h1:hover, body.cms-active h2:hover,',
    'body.cms-active h3:hover, body.cms-active h4:hover, body.cms-active span:hover,',
    'body.cms-active li:hover, body.cms-active blockquote:hover {',
    '  outline: 1px dashed rgba(227,76,39,0.4); cursor: text;',
    '}',
    'body.cms-active img:hover { outline: 2px dashed #e34c27; cursor: pointer; }',

    // image modal
    '#cms-image-modal {',
    '  position: fixed; inset: 0; z-index: 100000;',
    '  background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center;',
    '}',
    '#cms-modal-inner {',
    '  background: #fff; border-radius: 10px; padding: 24px; width: 540px; max-width: 95vw;',
    '  font-family: sans-serif; display: flex; flex-direction: column; gap: 16px;',
    '}',
    '#cms-modal-header { display: flex; justify-content: space-between; align-items: center; }',
    '#cms-modal-header span { font-weight: 600; font-size: 15px; }',
    '#cms-modal-close { background: none; border: none; font-size: 18px; cursor: pointer; }',
    '#cms-preview-crop {',
    '  width: 100%; height: 260px; overflow: hidden; background: #f0f0f0;',
    '  border-radius: 8px; position: relative;',
    '}',
    '#cms-preview-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.1s, object-position 0.1s; }',
    '#cms-upload-label {',
    '  display: inline-block; padding: 8px 16px; background: #f0f0f0;',
    '  border-radius: 6px; cursor: pointer; font-size: 13px; font-weight: 500;',
    '}',
    '#cms-upload-label input { display: none; }',
    '#cms-sliders { display: flex; flex-direction: column; gap: 8px; }',
    '#cms-sliders label {',
    '  display: flex; align-items: center; gap: 12px;',
    '  font-size: 12px; color: #555;',
    '}',
    '#cms-sliders label > span { min-width: 28px; text-align: right; font-variant-numeric: tabular-nums; }',
    '#cms-sliders input[type=range] { flex: 1; accent-color: #e34c27; }',
    '#cms-modal-actions { display: flex; gap: 10px; justify-content: flex-end; }',
    '#cms-apply { background: #e34c27; color: #fff; border: none; padding: 8px 20px; border-radius: 6px; cursor: pointer; font-size: 13px; }',
    '#cms-modal-cancel { background: #eee; border: none; padding: 8px 20px; border-radius: 6px; cursor: pointer; font-size: 13px; }',
  ].join('\n');
  document.head.appendChild(style);

})();
