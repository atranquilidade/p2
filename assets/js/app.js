
async function registerSW() { 
  if ('serviceWorker' in navigator) { 
    try {
      await navigator.serviceWorker.register('./assets/js/sw.js'); 
    } catch (e) {
      alert('ServiceWorker registration failed. Sorry about that.'); 
    }
  } else {
    document.querySelector('.alert').removeAttribute('hidden'); 
  }
}

window.addEventListener('load', e => {
  new PWAConfApp();
  registerSW(); 
});