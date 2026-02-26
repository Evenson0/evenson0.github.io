(function(){
  const root = document.documentElement;
  const btn = document.getElementById('themeBtn');

  const saved = localStorage.getItem('theme');
  if(saved){ root.setAttribute('data-theme', saved); }

  function setIcon(){
    const t = root.getAttribute('data-theme') || 'dark';
    if(btn) btn.textContent = (t === 'light') ? '☀' : '☾';
  }
  setIcon();

  if(btn){
    btn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') || 'dark';
      const next = (current === 'dark') ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      setIcon();
    });
  }

  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  // Load latest posts (homepage)
  const latest = document.getElementById('latest');
  if(latest){
    fetch('/posts.json')
      .then(r => r.json())
      .then(posts => {
        posts.sort((a,b) => (a.date < b.date ? 1 : -1));
        const top = posts.slice(0,3);
        latest.innerHTML = top.map(p => `
          <a class="item" href="${p.url}">
            <div class="kicker">${p.series} · ${p.date}</div>
            <div class="title">${p.title}</div>
            <div class="desc">${p.description}</div>
          </a>
        `).join('');
      })
      .catch(()=>{ latest.innerHTML = '<div class="muted">Could not load posts.</div>'; });
  }
})();
