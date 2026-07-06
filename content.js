function isFindShortcut(event) {
  const key = event.key.toLowerCase();
  const isMac = navigator.platform.toUpperCase().includes('MAC');
  const modifierPressed = isMac ? event.metaKey : event.ctrlKey;
  return modifierPressed && key === 'f' && !event.shiftKey && !event.altKey;
}

window.addEventListener('keydown', function (event) {
  if (isFindShortcut(event)) {
    event.stopImmediatePropagation();
  }
}, true);
