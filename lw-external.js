(function(){
  // Minimal external script to prove LearnWorlds can load JS from GitHub Pages
  // It creates a banner, a button, and logs lifecycle events.
  const style = document.createElement('style');
  style.textContent = `
    .lw-ext-banner { 
      position: relative;
      padding: 12px 16px; margin: 10px 0;
      border: 1px solid #8fd3a9; background: #e7f7ed; color:#0a381c;
      border-radius: 12px; font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
    }
    .lw-ext-banner button {
      margin-left: 8px; padding:8px 12px; border:0; border-radius:8px; background:#111; color:#fff; cursor:pointer;
    }
  `;
  document.head.appendChild(style);

  const banner = document.createElement('div');
  banner.className = 'lw-ext-banner';
  banner.innerHTML = 'External script loaded from GitHub Pages. <button id="lwExtBtn">Click me</button>';
  document.body.prepend(banner);

  document.getElementById('lwExtBtn').addEventListener('click', function(){
    alert('External script is running ✅');
    console.log('[LW-EXT] Button clicked at', new Date().toISOString());
  });

  console.log('[LW-EXT] Script executed, DOM ready?', document.readyState);
})();
