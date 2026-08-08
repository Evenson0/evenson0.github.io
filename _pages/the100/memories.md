---
title: "Memories"
permalink: /memories/
author_profile: true
---

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
    border-color: rgba(4,120,87,0.45);
    box-shadow: 0 10px 24px rgba(0,0,0,0.08);
  }

  .memories-filter.active {
    background: rgba(4,120,87,0.12);
    border-color: rgba(4,120,87,0.45);
    color: #047857;
    font-weight: 600;
  }

  .memories-map-wrap {
    margin: 0 auto 2rem auto;
    border: 1px solid rgba(127,127,127,0.18);
    border-radius: 22px;
    overflow: hidden !important;
    box-shadow: 0 16px 34px rgba(0,0,0,0.10);
    background: rgba(127,127,127,0.04);
  }

  #memories-map {
    position: relative;
    width: 100%;
    height: 560px;
  }

  .memories-globe-canvas {
    display: block;
    width: 100%;
    height: 100%;
    cursor: grab;
    touch-action: none;
  }

  .memories-globe-canvas:active {
    cursor: grabbing;
  }

  .memories-globe-panel {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    width: min(280px, calc(100% - 2rem));
    padding: 0.9rem;
    border: 1px solid rgba(4,120,87,0.22);
    background: rgba(255,255,255,0.92);
    color: #17251d;
    font-family: "JetBrains Mono", Monaco, Consolas, "Lucida Console", monospace;
    pointer-events: none;
  }

  .memories-globe-panel h3 {
    margin: 0 0 0.35rem 0;
    color: #047857;
    font-size: 0.98rem;
    line-height: 1.35;
  }

  .memories-globe-panel p,
  .memories-globe-panel small {
    display: block;
    margin: 0;
    line-height: 1.55;
  }

  .memories-globe-panel small {
    margin-bottom: 0.45rem;
    color: #63776b;
    font-size: 0.78rem;
  }

  .memories-globe-fallback {
    display: grid;
    min-height: 100%;
    place-items: center;
    padding: 2rem;
    color: #63776b;
    font-family: "JetBrains Mono", Monaco, Consolas, "Lucida Console", monospace;
    text-align: center;
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

  .memories-dot-visited {
    background: #047857;
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

  .memories-triangle {
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 12px solid currentColor;
    display: inline-block;
  }

  .memories-triangle-visited {
    color: #047857;
  }

  .memories-triangle-pursued {
    color: #7c3aed;
  }

  .memories-triangle-awaiting {
    color: #d97706;
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
    margin-bottom: 0.95rem;
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

  .memory-status-visited {
    background: rgba(4,120,87,0.12);
    color: #047857;
  }

  .memory-status-awaiting {
    background: rgba(217,119,6,0.12);
    color: #b45309;
  }

  .memory-status-pursued {
    background: rgba(124,58,237,0.12);
    color: #6d28d9;
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
    margin: 0 0 0.7rem 0;
    font-size: 0.92rem;
    line-height: 1.55;
  }

  .memory-popup small {
    display: block;
    margin-bottom: 0.4rem;
    opacity: 0.72;
  }

  html[data-theme="dark"] .memories-globe-panel {
    border-color: rgba(52,211,153,0.32);
    background: rgba(2,4,3,0.82);
    color: #d7fbe8;
  }

  html[data-theme="dark"] .memories-globe-panel h3 {
    color: #34d399;
  }

  html[data-theme="dark"] .memories-globe-panel small,
  html[data-theme="dark"] .memories-globe-fallback {
    color: #8fbda3;
  }

  @media (max-width: 700px) {
    .memories-shell {
      padding: 1.2rem;
    }

    #memories-map {
      height: 430px;
    }

    .memories-globe-panel {
      right: 0.75rem;
      bottom: 0.75rem;
      padding: 0.75rem;
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
      A globe of what I have visited, what I am still pursuing, and what still waits for me somewhere in the world.
    </p>
  </div>

  <div class="memories-toolbar">
    <button class="memories-filter active" data-filter="all">All</button>
    <button class="memories-filter" data-filter="place">Places</button>
    <button class="memories-filter" data-filter="hike">Hikes</button>
    <button class="memories-filter" data-filter="visited">Visited</button>
    <button class="memories-filter" data-filter="pursued">Pursued</button>
    <button class="memories-filter" data-filter="awaiting">Awaiting</button>
  </div>

  <div class="memories-map-wrap">
    <div id="memories-map"></div>
  </div>

  <div class="memories-legend">
    <span><i class="memories-dot memories-dot-visited"></i> Visited place</span>
    <span><i class="memories-dot memories-dot-pursued"></i> Pursued place</span>
    <span><i class="memories-dot memories-dot-awaiting"></i> Awaiting place</span>
    <span><i class="memories-triangle memories-triangle-visited"></i> Completed hike</span>
    <!-- <span><i class="memories-triangle memories-triangle-pursued"></i> Pursued hike</span>
    <span><i class="memories-triangle memories-triangle-awaiting"></i> Awaiting hike</span> -->
  </div>

  <h2 class="memories-section-title">Places and Trails</h2>
  <div id="memories-grid" class="memories-grid"></div>

</div>

<script type="importmap">
  {
    "imports": {
      "three": "https://unpkg.com/three@0.160.0/build/three.module.js"
    }
  }
</script>

<script type="module">
  import * as THREE from "three";

  const memories = [
    {
      title: "Montreal",
      slug: "montreal",
      country: "Canada",
      location: "Montreal, Quebec, Canada",
      lat: 45.5017,
      lng: -73.5673,
      status: "visited",
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
      status: "visited",
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
      status: "visited",
      category: "place",
      type: "city",
      excerpt: "My first visited memory of California.",
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
      status: "visited",
      category: "place",
      type: "city",
      excerpt: "Another visited California chapter.",
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
      status: "visited",
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
      status: "visited",
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
      status: "visited",
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
    if (status === "visited") return "memory-status-visited";
    if (status === "pursued") return "memory-status-pursued";
    return "memory-status-awaiting";
  }

  function getStatusLabel(status) {
    if (status === "visited") return "Visited";
    if (status === "pursued") return "Pursued";
    return "Awaiting";
  }

  function getMarkerColor(status) {
    if (status === "visited") return "#047857";
    if (status === "pursued") return "#7c3aed";
    return "#d97706";
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

  function buildPopupMeta(item) {
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
      <a class="memory-card" href="${item.url}" aria-label="${item.title}">
        <img class="memory-card-image" src="${item.image}" alt="${item.title}">
        <div class="memory-card-body">
          <div class="memory-card-meta">${item.location}</div>
          <h3 class="memory-card-title">${item.title}</h3>
          <p class="memory-card-text">${item.excerpt}</p>
          <div class="memory-card-tags">${buildTags(item)}</div>
          <div class="memory-card-footer">
            <span class="memory-status ${getStatusClass(item.status)}">${getStatusLabel(item.status)}</span>
          </div>
        </div>
      </a>
    `).join("");
  }

  const globeRoot = document.getElementById("memories-map");
  let globeApi = null;

  function latLngToVector3(lat, lng, radius) {
    const phi = (90 - lat) * Math.PI / 180;
    const theta = (lng + 180) * Math.PI / 180;

    return new THREE.Vector3(
      -radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.sin(theta)
    );
  }

  function createRing(radius, latitude, material) {
    const points = [];
    for (let lng = -180; lng <= 180; lng += 4) {
      points.push(latLngToVector3(latitude, lng, radius));
    }
    return new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), material);
  }

  function createMeridian(radius, longitude, material) {
    const points = [];
    for (let lat = -90; lat <= 90; lat += 4) {
      points.push(latLngToVector3(lat, longitude, radius));
    }
    return new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), material);
  }

  function createEarthTexture() {
    const canvas = document.createElement("canvas");
    canvas.width = 2048;
    canvas.height = 1024;
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;

    function project(lat, lng) {
      return {
        x: ((lng + 180) / 360) * w,
        y: ((90 - lat) / 180) * h
      };
    }

    function drawPolygon(points, fill, stroke) {
      ctx.beginPath();
      points.forEach(([lat, lng], index) => {
        const point = project(lat, lng);
        if (index === 0) ctx.moveTo(point.x, point.y);
        else ctx.lineTo(point.x, point.y);
      });
      ctx.closePath();
      ctx.fillStyle = fill;
      ctx.fill();
      ctx.strokeStyle = stroke;
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    function drawLabel(text, lat, lng) {
      const point = project(lat, lng);
      ctx.save();
      ctx.translate(point.x, point.y);
      ctx.fillStyle = "rgba(199,249,221,0.82)";
      ctx.font = "700 20px JetBrains Mono, Monaco, Consolas, monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, 0, 0);
      ctx.restore();
    }

    ctx.fillStyle = "#020403";
    ctx.fillRect(0, 0, w, h);

    ctx.strokeStyle = "rgba(52,211,153,0.12)";
    ctx.lineWidth = 1;
    for (let lng = -180; lng <= 180; lng += 15) {
      const a = project(-90, lng);
      const b = project(90, lng);
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }
    for (let lat = -75; lat <= 75; lat += 15) {
      const a = project(lat, -180);
      const b = project(lat, 180);
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }

    const landFill = "rgba(52,211,153,0.34)";
    const landStroke = "rgba(110,231,183,0.8)";

    [
      // North America
      [[72,-168],[70,-138],[62,-122],[58,-105],[51,-96],[49,-80],[58,-63],[52,-52],[43,-62],[31,-81],[25,-97],[16,-99],[8,-84],[16,-105],[24,-112],[32,-124],[45,-128],[56,-140],[60,-158]],
      // South America
      [[12,-81],[9,-66],[-2,-51],[-15,-40],[-32,-52],[-55,-69],[-42,-75],[-18,-79],[-5,-81]],
      // Greenland
      [[84,-73],[82,-20],[72,-16],[60,-42],[63,-61],[73,-73]],
      // Europe
      [[71,-10],[64,28],[55,42],[44,31],[36,10],[43,-9],[54,-11]],
      // Africa
      [[36,-17],[32,31],[12,52],[-10,43],[-35,20],[-34,-10],[-5,-18],[16,-17]],
      // Asia
      [[72,28],[70,95],[58,145],[42,151],[22,122],[9,105],[18,78],[7,45],[31,31],[49,42],[58,60]],
      // Australia
      [[-11,113],[-16,154],[-39,147],[-43,116],[-26,112]],
      // Antarctica
      [[-64,-180],[-66,-90],[-68,0],[-66,90],[-64,180],[-82,180],[-82,-180]]
    ].forEach(points => drawPolygon(points, landFill, landStroke));

    drawLabel("CANADA", 58, -105);
    drawLabel("USA", 39, -98);
    drawLabel("MEXICO", 22, -102);
    drawLabel("PERU", -10, -75);
    drawLabel("ECUADOR", -1, -78);
    drawLabel("CHILE", -34, -71);
    drawLabel("JORDAN", 31, 36);

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 4;
    return texture;
  }

  function createGlobe() {
    if (!globeRoot || !window.WebGLRenderingContext) {
      globeRoot.innerHTML = '<div class="memories-globe-fallback">The interactive globe needs WebGL.</div>';
      return null;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0, 7);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.domElement.className = "memories-globe-canvas";
    globeRoot.innerHTML = "";
    globeRoot.appendChild(renderer.domElement);

    const panel = document.createElement("div");
    panel.className = "memories-globe-panel";
    globeRoot.appendChild(panel);

    const globeGroup = new THREE.Group();
    globeGroup.rotation.set(-0.18, -0.85, 0);
    scene.add(globeGroup);

    const earth = new THREE.Mesh(
      new THREE.SphereGeometry(2, 96, 64),
      new THREE.MeshPhongMaterial({
        color: 0xffffff,
        map: createEarthTexture(),
        emissive: 0x021108,
        shininess: 18,
        transparent: true,
        opacity: 0.96
      })
    );
    globeGroup.add(earth);

    const shell = new THREE.Mesh(
      new THREE.SphereGeometry(2.035, 96, 64),
      new THREE.MeshBasicMaterial({
        color: 0x34d399,
        wireframe: true,
        transparent: true,
        opacity: 0.16
      })
    );
    globeGroup.add(shell);

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x34d399,
      transparent: true,
      opacity: 0.2
    });

    [-60, -30, 0, 30, 60].forEach(lat => globeGroup.add(createRing(2.045, lat, lineMaterial)));
    [-150, -120, -90, -60, -30, 0, 30, 60, 90, 120, 150, 180].forEach(lng => globeGroup.add(createMeridian(2.045, lng, lineMaterial)));

    const ambient = new THREE.AmbientLight(0x7fffd4, 1.2);
    const key = new THREE.DirectionalLight(0xffffff, 1.35);
    key.position.set(3, 4, 5);
    scene.add(ambient, key);

    const markerGroup = new THREE.Group();
    globeGroup.add(markerGroup);

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const markers = [];
    let activeItems = memories;
    let selectedItem = memories[0];
    let dragging = false;
    let moved = false;
    let lastX = 0;
    let lastY = 0;

    function resize() {
      const rect = globeRoot.getBoundingClientRect();
      renderer.setSize(rect.width, rect.height, false);
      camera.aspect = rect.width / rect.height;
      camera.updateProjectionMatrix();
    }

    function updatePanel(item) {
      selectedItem = item;
      panel.innerHTML = `
        <h3>${item.title}</h3>
        <small>${item.location} · ${getStatusLabel(item.status)}</small>
        <p>${item.excerpt}</p>
      `;
    }

    function clearMarkers() {
      markers.splice(0).forEach(marker => {
        markerGroup.remove(marker);
        marker.geometry.dispose();
        marker.material.dispose();
      });
    }

    function renderMarkers(items) {
      clearMarkers();
      activeItems = items;

      items.forEach(item => {
        const geometry = item.category === "hike"
          ? new THREE.ConeGeometry(0.07, 0.16, 4)
          : new THREE.SphereGeometry(0.055, 18, 18);
        const material = new THREE.MeshBasicMaterial({ color: getMarkerColor(item.status) });
        const marker = new THREE.Mesh(geometry, material);
        marker.position.copy(latLngToVector3(item.lat, item.lng, 2.12));
        marker.lookAt(new THREE.Vector3(0, 0, 0));
        marker.userData.item = item;
        markers.push(marker);
        markerGroup.add(marker);
      });

      updatePanel(items[0] || memories[0]);
    }

    function pick(clientX, clientY) {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const hit = raycaster.intersectObjects(markers, false)[0];
      if (!hit) return;
      updatePanel(hit.object.userData.item);
    }

    function onPointerDown(event) {
      dragging = true;
      moved = false;
      lastX = event.clientX;
      lastY = event.clientY;
      renderer.domElement.setPointerCapture(event.pointerId);
    }

    function onPointerMove(event) {
      if (!dragging) return;
      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;
      if (Math.abs(dx) + Math.abs(dy) > 2) moved = true;
      globeGroup.rotation.y += dx * 0.006;
      globeGroup.rotation.x += dy * 0.004;
      globeGroup.rotation.x = Math.max(-1.1, Math.min(1.1, globeGroup.rotation.x));
      lastX = event.clientX;
      lastY = event.clientY;
    }

    function onPointerUp(event) {
      dragging = false;
      renderer.domElement.releasePointerCapture(event.pointerId);
      if (!moved) pick(event.clientX, event.clientY);
    }

    renderer.domElement.addEventListener("pointerdown", onPointerDown);
    renderer.domElement.addEventListener("pointermove", onPointerMove);
    renderer.domElement.addEventListener("pointerup", onPointerUp);
    renderer.domElement.addEventListener("pointercancel", () => { dragging = false; });
    renderer.domElement.addEventListener("dblclick", () => {
      if (selectedItem && selectedItem.url) window.location.href = selectedItem.url;
    });
    window.addEventListener("resize", resize);

    function animate() {
      requestAnimationFrame(animate);
      if (!dragging) globeGroup.rotation.y += 0.0014;
      markers.forEach(marker => {
        marker.scale.setScalar(marker.userData.item === selectedItem ? 1.55 : 1);
      });
      renderer.render(scene, camera);
    }

    resize();
    renderMarkers(memories);
    animate();

    return { renderMarkers, resize };
  }

  function renderAll(filter) {
    const filtered = getFilteredItems(filter);
    renderGrid(filtered);
    if (globeApi) globeApi.renderMarkers(filtered);
  }

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      renderAll(button.dataset.filter);
    });
  });

  globeApi = createGlobe();
  renderAll("all");
</script>
