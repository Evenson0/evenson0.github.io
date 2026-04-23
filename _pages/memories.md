---
title: "Memories"
permalink: /memories/
author_profile: true
---

<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
  integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
  crossorigin=""
/>

<style>
  .memories-shell {
    max-width: 1180px;
    margin: 2rem auto;
    padding: 2rem;
    border: 1px solid rgba(127,127,127,0.18);
    border-radius: 24px;
    background: linear-gradient(
      180deg,
      rgba(127,127,127,0.05),
      rgba(127,127,127,0.025)
    );
    box-shadow:
      0 14px 38px rgba(0,0,0,0.10),
      0 0 0 1px rgba(255,255,255,0.02) inset;
    color: inherit;
  }

  .memories-hero {
    text-align: center;
    margin-bottom: 2rem;
  }

  .memories-hero h1 {
    margin-bottom: 0.7rem;
  }

  .memories-hero p {
    max-width: 820px;
    margin: 0 auto;
    line-height: 1.9;
    opacity: 0.86;
  }

  .memories-quote {
    margin: 1.25rem auto 0 auto;
    max-width: 760px;
    text-align: center;
    font-size: 0.98rem;
    opacity: 0.72;
    font-style: italic;
  }

  .memories-toolbar {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin: 2rem 0 1.4rem 0;
  }

  .memories-filter {
    border: 1px solid rgba(127,127,127,0.20);
    background: rgba(127,127,127,0.05);
    color: inherit;
    padding: 0.65rem 1rem;
    border-radius: 999px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 0.95rem;
  }

  .memories-filter:hover,
  .memories-filter:focus {
    transform: translateY(-1px);
    border-color: rgba(59,130,246,0.45);
    box-shadow: 0 10px 24px rgba(0,0,0,0.08);
  }

  .memories-filter.active {
    background: rgba(37,99,235,0.12);
    border-color: rgba(37,99,235,0.45);
    color: #2563eb;
    font-weight: 600;
  }

  .memories-map-wrap {
    margin: 0 auto 2rem auto;
    border: 1px solid rgba(127,127,127,0.18);
    border-radius: 22px;
    overflow: hidden;
    box-shadow: 0 16px 34px rgba(0,0,0,0.10);
    background: rgba(127,127,127,0.04);
  }

  #memories-map {
    width: 100%;
    height: 560px;
  }

  .memories-legend {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem 1.5rem;
    margin: 1rem 0 1.2rem 0;
    font-size: 0.95rem;
    opacity: 0.84;
  }

  .memories-legend span {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
  }

  .memories-dot {
    width: 12px;
    height: 12px;
    display: inline-block;
  }

  .memories-dot-lived {
    background: #2563eb;
    border-radius: 999px;
  }

  .memories-dot-awaiting {
    background: #d97706;
    border-radius: 999px;
  }

  .memories-dot-pursued {
    background: #7c3aed;
    border-radius: 999px;
  }

  .memories-square {
    border-radius: 4px;
  }

  .memories-circle {
    border-radius: 999px;
  }

  .memories-section-title {
    text-align: center;
    margin: 0 0 1.4rem 0;
  }

  .memories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    gap: 1.2rem;
  }

  .memory-card {
    border: 1px solid rgba(127,127,127,0.16);
    border-radius: 20px;
    overflow: hidden;
    background: rgba(127,127,127,0.04);
    box-shadow: 0 12px 28px rgba(0,0,0,0.06);
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  }

  .memory-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 36px rgba(0,0,0,0.10);
    border-color: rgba(59,130,246,0.30);
  }

  .memory-card-image {
    width: 100%;
    height: 190px;
    object-fit: cover;
    display: block;
    background: rgba(127,127,127,0.08);
  }

  .memory-card-body {
    padding: 1rem 1rem 1.1rem 1rem;
  }

  .memory-card-meta {
    font-size: 0.9rem;
    opacity: 0.72;
    margin-bottom: 0.45rem;
  }

  .memory-card-title {
    margin: 0 0 0.55rem 0;
    font-size: 1.06rem;
    line-height: 1.45;
  }

  .memory-card-text {
    margin: 0 0 0.85rem 0;
    line-height: 1.7;
    opacity: 0.88;
    font-size: 0.96rem;
  }

  .memory-card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    margin-bottom: 0.85rem;
  }

  .memory-tag {
    display: inline-block;
    padding: 0.28rem 0.6rem;
    border-radius: 999px;
    font-size: 0.8rem;
    background: rgba(127,127,127,0.08);
    border: 1px solid rgba(127,127,127,0.12);
  }

  .memory-card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.8rem;
    flex-wrap: wrap;
  }

  .memory-status {
    display: inline-block;
    padding: 0.32rem 0.7rem;
    border-radius: 999px;
    font-size: 0.82rem;
    font-weight: 600;
    letter-spacing: 0.01em;
  }

  .memory-status-lived {
    background: rgba(37,99,235,0.12);
    color: #2563eb;
  }

  .memory-status-awaiting {
    background: rgba(217,119,6,0.12);
    color: #b45309;
  }

  .memory-status-pursued {
    background: rgba(124,58,237,0.12);
    color: #6d28d9;
  }

  .memory-link {
    color: #2563eb;
    text-decoration: none;
    font-weight: 600;
  }

  .memory-link:hover {
    text-decoration: underline;
  }

  .leaflet-popup-content-wrapper {
    border-radius: 16px;
  }

  .memory-popup {
    max-width: 250px;
  }

  .memory-popup-image {
    width: 100%;
    height: 120px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 0.7rem;
    display: block;
  }

  .memory-popup h3 {
    margin: 0 0 0.35rem 0;
    font-size: 1rem;
    line-height: 1.35;
  }

  .memory-popup p {
    margin: 0 0 0.55rem 0;
    font-size: 0.92rem;
    line-height: 1.55;
  }

  .memory-popup small {
    display: block;
    margin-bottom: 0.4rem;
    opacity: 0.72;
  }

  .memory-popup a {
    color: #2563eb;
    text-decoration: none;
    font-weight: 600;
  }

  .memory-popup a:hover {
    text-decoration: underline;
  }

  @media (max-width: 700px) {
    .memories-shell {
      padding: 1.2rem;
    }

    #memories-map {
      height: 430px;
    }
  }
</style>

<div class="memories-shell">

  <div class="memories-hero">
    <h1>Memories</h1>
    <p>
      Some places remain in memory longer than they remain in time. This page is where I keep the traces of journeys, landscapes, monuments, cities, and hikes that felt large enough to deserve remembrance.
    </p>
    <p class="memories-quote">
      A map of what I have lived, what I am still pursuing, and what still waits for me somewhere in the world.
    </p>
  </div>

  <div class="memories-toolbar">
    <button class="memories-filter active" data-filter="all">All</button>
    <button class="memories-filter" data-filter="place">Places</button>
    <button class="memories-filter" data-filter="hike">Hikes</button>
    <button class="memories-filter" data-filter="lived">Lived</button>
    <button class="memories-filter" data-filter="pursued">Pursued</button>
    <button class="memories-filter" data-filter="awaiting">Awaiting</button>
  </div>

  <div class="memories-map-wrap">
    <div id="memories-map"></div>
  </div>

  <div class="memories-legend">
    <span><i class="memories-dot memories-dot-lived memories-circle"></i> Lived</span>
    <span><i class="memories-dot memories-dot-pursued memories-circle"></i> Pursued</span>
    <span><i class="memories-dot memories-dot-awaiting memories-circle"></i> Awaiting</span>
    <span><i class="memories-dot memories-dot-lived memories-square"></i> Hike</span>
  </div>

  <h2 class="memories-section-title">Places and Trails</h2>
  <div id="memories-grid" class="memories-grid"></div>

</div>

<script
  src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
  integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
  crossorigin=""
></script>

<script>
  const memories = [
    {
      title: "Montreal",
      slug: "montreal",
      country: "Canada",
      location: "Montreal, Quebec, Canada",
      lat: 45.5017,
      lng: -73.5673,
      status: "lived",
      category: "place",
      type: "city",
      excerpt: "A city that became part of my life.",
      image: "/images/memories/montreal.jpg",
      url: "/memories/montreal/"
    },
    {
      title: "New York City",
      slug: "new-york",
      country: "United States",
      location: "New York, New York, United States",
      lat: 40.7128,
      lng: -74.0060,
      status: "lived",
      category: "place",
      type: "city",
      excerpt: "The most beautiful city in the world.",
      image: "/images/memories/new-york.jpg",
      url: "/memories/new-york/"
    },
    {
      title: "San Diego",
      slug: "san-diego",
      country: "United States",
      location: "San Diego, California, United States",
      lat: 32.7157,
      lng: -117.1611,
      status: "lived",
      category: "place",
      type: "city",
      excerpt: "My first lived memory of California.",
      image: "/images/memories/san-diego.jpg",
      url: "/memories/san-diego/"
    },
    {
      title: "Los Angeles",
      slug: "los-angeles",
      country: "United States",
      location: "Los Angeles, California, United States",
      lat: 34.0522,
      lng: -118.2437,
      status: "pursued",
      category: "place",
      type: "city",
      excerpt: "The next California chapter.",
      image: "/images/memories/los-angeles.jpg",
      url: "/memories/los-angeles/"
    },
    {
      title: "Grande boucle du Pic de l’Ours",
      slug: "pic-de-l-ours",
      country: "Canada",
      location: "Parc national du Mont-Orford, Quebec, Canada",
      lat: 45.3080,
      lng: -72.2360,
      status: "lived",
      category: "hike",
      type: "trail",
      difficulty: "Hard",
      duration: "6.5–7.5 h",
      distance: "20 km loop",
      address: "Approximate point in Parc national du Mont-Orford",
      excerpt: "A long, demanding loop with a real mountain feel.",
      image: "/images/memories/pic-de-l-ours.jpg",
      url: "/memories/pic-de-l-ours/"
    },
    {
      title: "Sentier du Mont-Mégantic",
      slug: "mont-megantic",
      country: "Canada",
      location: "Observatoire sector, Notre-Dame-des-Bois, Quebec, Canada",
      lat: 45.4550,
      lng: -71.1540,
      status: "lived",
      category: "hike",
      type: "trail",
      difficulty: "Difficult",
      duration: "4–7 h",
      distance: "11.2 km loop",
      address: "189 Route du Parc, Notre-Dame-des-Bois, QC",
      excerpt: "A hike where mountain and sky belong to the same memory.",
      image: "/images/memories/mont-megantic.jpg",
      url: "/memories/mont-megantic/"
    },
    {
      title: "Mont Gosford",
      slug: "mont-gosford",
      country: "Canada",
      location: "Saint-Augustin-de-Woburn, Quebec, Canada",
      lat: 45.3000,
      lng: -70.8870,
      status: "lived",
      category: "hike",
      type: "trail",
      difficulty: "Difficult",
      duration: "6 h",
      distance: "17.4 km loop",
      address: "901 rang Tout-de-Joie, St-Augustin-de-Woburn, QC",
      excerpt: "The highest summit in southern Quebec, earned on foot.",
      image: "/images/memories/mont-gosford.jpg",
      url: "/memories/mont-gosford/"
    },
    {
      title: "Nahanni",
      slug: "nahanni",
      country: "Canada",
      location: "Northwest Territories, Canada",
      lat: 61.0560,
      lng: -123.3970,
      status: "awaiting",
      category: "place",
      type: "wilderness",
      excerpt: "A northern landscape of scale, silence, and raw power.",
      image: "/images/memories/nahanni.jpg",
      url: "/memories/nahanni/"
    },
    {
      title: "Yukon Aurora",
      slug: "yukon-aurora",
      country: "Canada",
      location: "Yukon, Canada",
      lat: 64.2823,
      lng: -135.0000,
      status: "awaiting",
      category: "place",
      type: "nature",
      excerpt: "A sky made strange, alive, and unforgettable.",
      image: "/images/memories/yukon-aurora.jpg",
      url: "/memories/yukon-aurora/"
    },
    {
      title: "Grand Canyon",
      slug: "grand-canyon",
      country: "United States",
      location: "Arizona, United States",
      lat: 36.1069,
      lng: -112.1129,
      status: "awaiting",
      category: "place",
      type: "landscape",
      excerpt: "A place vast enough to humble thought.",
      image: "/images/memories/grand-canyon.jpg",
      url: "/memories/grand-canyon/"
    },
    {
      title: "Petra",
      slug: "petra",
      country: "Jordan",
      location: "Petra, Jordan",
      lat: 30.3285,
      lng: 35.4444,
      status: "awaiting",
      category: "place",
      type: "historical site",
      excerpt: "A city carved out of stone and time.",
      image: "/images/memories/petra.jpg",
      url: "/memories/petra/"
    },
    {
      title: "Machu Picchu",
      slug: "machu-picchu",
      country: "Peru",
      location: "Cusco Region, Peru",
      lat: -13.1631,
      lng: -72.5450,
      status: "awaiting",
      category: "place",
      type: "historical site",
      excerpt: "One of the great unions of altitude, beauty, and history.",
      image: "/images/memories/machu-picchu.jpg",
      url: "/memories/machu-picchu/"
    },
    {
      title: "Galápagos Islands",
      slug: "galapagos",
      country: "Ecuador",
      location: "Galápagos, Ecuador",
      lat: -0.9538,
      lng: -90.9656,
      status: "awaiting",
      category: "place",
      type: "nature",
      excerpt: "A place where nature feels older and more original.",
      image: "/images/memories/galapagos.jpg",
      url: "/memories/galapagos/"
    },
    {
      title: "Torres del Paine",
      slug: "torres-del-paine",
      country: "Chile",
      location: "Patagonia, Chile",
      lat: -50.9423,
      lng: -73.4068,
      status: "awaiting",
      category: "place",
      type: "mountains",
      excerpt: "Granite towers, wind, glaciers, and distance.",
      image: "/images/memories/torres-del-paine.jpg",
      url: "/memories/torres-del-paine/"
    }
  ];

  const grid = document.getElementById("memories-grid");
  const filterButtons = document.querySelectorAll(".memories-filter");

  function getStatusClass(status) {
    if (status === "lived") return "memory-status-lived";
    if (status === "pursued") return "memory-status-pursued";
    return "memory-status-awaiting";
  }

  function getStatusLabel(status) {
    if (status === "lived") return "Lived";
    if (status === "pursued") return "Pursued";
    return "Awaiting";
  }

  function getMarkerColor(status) {
    if (status === "lived") return "#2563eb";
    if (status === "pursued") return "#7c3aed";
    return "#d97706";
  }

  function createMarkerIcon(color, category) {
    const shapeStyle = category === "hike"
      ? "border-radius:4px;"
      : "border-radius:50%;";

    return L.divIcon({
      className: "",
      html: `
        <div style="
          width: 16px;
          height: 16px;
          ${shapeStyle}
          background: ${color};
          border: 2px solid white;
          box-shadow: 0 0 0 3px rgba(0,0,0,0.12);
        "></div>
      `,
      iconSize: [16, 16],
      iconAnchor: [8, 8],
      popupAnchor: [0, -10]
    });
  }

  function buildTags(item) {
    const tags = [
      `<span class="memory-tag">${item.category === "hike" ? "Hike" : "Place"}</span>`,
      `<span class="memory-tag">${item.type}</span>`
    ];

    if (item.difficulty) {
      tags.push(`<span class="memory-tag">${item.difficulty}</span>`);
    }

    return tags.join("");
  }

  function buildPopupDetails(item) {
    let extra = "";

    if (item.distance) extra += `<small><strong>Distance:</strong> ${item.distance}</small>`;
    if (item.duration) extra += `<small><strong>Duration:</strong> ${item.duration}</small>`;
    if (item.difficulty) extra += `<small><strong>Difficulty:</strong> ${item.difficulty}</small>`;
    if (item.address) extra += `<small><strong>Start:</strong> ${item.address}</small>`;

    return extra;
  }

  function getFilteredItems(filter) {
    if (filter === "all") return memories;
    return memories.filter(item => item.status === filter || item.category === filter);
  }

  function renderGrid(items) {
    grid.innerHTML = items.map(item => `
      <article class="memory-card">
        <img class="memory-card-image" src="${item.image}" alt="${item.title}">
        <div class="memory-card-body">
          <div class="memory-card-meta">${item.location}</div>
          <h3 class="memory-card-title">${item.title}</h3>
          <p class="memory-card-text">${item.excerpt}</p>
          <div class="memory-card-tags">${buildTags(item)}</div>
          <div class="memory-card-footer">
            <span class="memory-status ${getStatusClass(item.status)}">${getStatusLabel(item.status)}</span>
            <a class="memory-link" href="${item.url}">Open memory</a>
          </div>
        </div>
      </article>
    `).join("");
  }

  const map = L.map("memories-map", {
    zoomControl: true,
    worldCopyJump: true
  }).setView([22, -15], 2);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  const markersLayer = L.layerGroup().addTo(map);

  function renderMarkers(items) {
    markersLayer.clearLayers();

    items.forEach(item => {
      const marker = L.marker([item.lat, item.lng], {
        icon: createMarkerIcon(getMarkerColor(item.status), item.category)
      });

      marker.bindPopup(`
        <div class="memory-popup">
          <img class="memory-popup-image" src="${item.image}" alt="${item.title}">
          <h3>${item.title}</h3>
          <small>${item.location}</small>
          ${buildPopupDetails(item)}
          <p>${item.excerpt}</p>
          <a href="${item.url}">Open memory</a>
        </div>
      `);

      markersLayer.addLayer(marker);
    });
  }

  function renderAll(filter) {
    const filtered = getFilteredItems(filter);
    renderGrid(filtered);
    renderMarkers(filtered);
  }

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      renderAll(button.dataset.filter);
    });
  });

  renderAll("all");
</script>
