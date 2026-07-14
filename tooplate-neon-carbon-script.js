(function() {
  'use strict';

  const pitchData = [
    {
      city: 'Hyderabad',
      center: [17.4235, 78.3941],
      summary: {
        locations: 1629,
        screens: 8147,
        impressions: 163031400,
        audience: 775124,
        budget: 8470000,
        formats: ['Residential', 'Coworking', 'Corporate Park', 'Mall', 'Fitness', 'Office Coffee']
      },
      narrative: 'Strongest density across residential towers, office corridors, and destination retail pockets near Financial District, Gachibowli, and Tellapur.',
      sites: [
        { name: 'My Home Bhooja', category: 'Residential', zone: 'Manikonda', locality: 'Raidurg', impressions: 1404000, screens: 65, audience: 1544, audienceLabel: 'Households', budget: null, lat: 17.431641, lng: 78.37767 },
        { name: 'My Home Vihanga', category: 'Residential', zone: 'Gachibowli and Hitech City', locality: 'Gachibowli', impressions: 1296000, screens: 60, audience: 1996, audienceLabel: 'Households', budget: null, lat: 17.433823, lng: 78.332214 },
        { name: 'RAJAPUSHPA PROVINCIA', category: 'Residential', zone: 'Kokapet and Financial District', locality: 'Narsingi', impressions: 1209600, screens: 56, audience: 1908, audienceLabel: 'Households', budget: null, lat: 17.397106, lng: 78.354485 },
        { name: 'My Home Avatar', category: 'Residential', zone: 'Kokapet and Financial District', locality: 'Narsingi', impressions: 1188000, screens: 55, audience: 2780, audienceLabel: 'Households', budget: null, lat: 17.400528, lng: 78.356239 },
        { name: 'Aparna Cyberzon', category: 'Residential', zone: 'Serilingampally and Tellapur', locality: 'Tellapur', impressions: 1144800, screens: 53, audience: 1529, audienceLabel: 'Households', budget: null, lat: 17.473858, lng: 78.313248 },
        { name: 'Prestige High Fields', category: 'Residential', zone: 'Kokapet and Financial District', locality: 'Financial District', impressions: 1123200, screens: 52, audience: 2660, audienceLabel: 'Households', budget: null, lat: 17.414389, lng: 78.338943 }
      ]
    },
    {
      city: 'Mumbai',
      center: [19.076, 72.8777],
      summary: {
        locations: 1665,
        screens: 6579,
        impressions: 128520000,
        audience: 928391,
        budget: 360000,
        formats: ['Residential', 'Coworking', 'Corporate Park', 'Fitness', 'Office Coffee']
      },
      narrative: 'A strong spread across western and central suburbs, with standout office and residential inventory that can support both reach and repeated frequency.',
      sites: [
        { name: 'Runwal Greens', category: 'Residential', zone: 'Central Suburbs', locality: 'Mulund', impressions: 1339200, screens: 62, audience: 1346, audienceLabel: 'Households', budget: null, lat: 19.16098, lng: 72.94416 },
        { name: 'Alta Monte', category: 'Residential', zone: 'Western Suburbs', locality: 'Malad', impressions: 1036800, screens: 48, audience: 865, audienceLabel: 'Households', budget: null, lat: 19.18265, lng: 72.86086 },
        { name: 'The Summit Business Park Premises', category: 'Coworking', zone: 'Western Mumbai', locality: 'Andheri', impressions: 882000, screens: 70, audience: 6000, audienceLabel: 'Employees', budget: null, lat: 19.116499, lng: 72.857413 },
        { name: 'Dheeraj Dreams', category: 'Residential', zone: 'Central Suburbs', locality: 'Bhandup', impressions: 864000, screens: 40, audience: 1823, audienceLabel: 'Households', budget: null, lat: 19.147678, lng: 72.939445 },
        { name: 'Neelsidhi Amarante Chsl', category: 'Residential', zone: 'Navi Mumbai', locality: 'Kalamboli', impressions: 820800, screens: 38, audience: 990, audienceLabel: 'Households', budget: null, lat: 19.036946, lng: 73.102635 },
        { name: 'Green World Chsl', category: 'Residential', zone: 'Navi Mumbai', locality: 'Airoli', impressions: 626400, screens: 29, audience: 870, audienceLabel: 'Households', budget: null, lat: 19.18322, lng: 72.99394 }
      ]
    },
    {
      city: 'Bengaluru',
      center: [12.9716, 77.5946],
      summary: {
        locations: 2651,
        screens: 8675,
        impressions: 168312600,
        audience: 1452731,
        budget: 5505000,
        formats: ['Residential', 'Coworking', 'Corporate Park', 'Mall', 'Fitness', 'Office Coffee']
      },
      narrative: 'Deepest inventory mix across tech corridors, gated communities, and office routes, making Bengaluru the strongest cross-format city in the current sheet.',
      sites: [
        { name: 'Prestige Song Of The South', category: 'Residential', zone: 'Electronic City', locality: 'Akshayanagar', impressions: 1425600, screens: 66, audience: 2176, audienceLabel: 'Households', budget: null, lat: 12.864, lng: 77.610778 },
        { name: 'SNN Raj Serenity', category: 'Residential', zone: 'Electronic City', locality: 'Begur', impressions: 1296000, screens: 60, audience: 1890, audienceLabel: 'Households', budget: null, lat: 12.858982, lng: 77.612103 },
        { name: 'Sattva Anugraha', category: 'Residential', zone: 'Yeshwanthpur', locality: 'Vijayanagar', impressions: 1166400, screens: 54, audience: 2020, audienceLabel: 'Households', budget: null, lat: 12.98267, lng: 77.51887 },
        { name: 'Purva Venezia', category: 'Residential', zone: 'Yelahanka', locality: 'Yelahanka', impressions: 1123200, screens: 52, audience: 1332, audienceLabel: 'Households', budget: null, lat: 13.09676, lng: 77.57043 },
        { name: 'Prestige Ferns Residency', category: 'Residential', zone: 'Electronic City', locality: 'Harlur', impressions: 1080000, screens: 50, audience: 1485, audienceLabel: 'Households', budget: null, lat: 12.90329, lng: 77.66202 },
        { name: 'Prestige Lakeside Habitat', category: 'Residential', zone: 'Whitefield', locality: 'Gunjur Road', impressions: 972000, screens: 45, audience: 3699, audienceLabel: 'Households', budget: null, lat: 12.929853, lng: 77.737911 }
      ]
    },
    {
      city: 'Pune',
      center: [18.5204, 73.8567],
      summary: {
        locations: 782,
        screens: 3959,
        impressions: 80191800,
        audience: 497793,
        budget: 255000,
        formats: ['Residential', 'Coworking', 'Corporate Park', 'Fitness', 'Office Coffee']
      },
      narrative: 'Useful for a phased expansion story: strong housing clusters, coworking inventory, and tech-worker density around north and west Pune.',
      sites: [
        { name: 'Marvel Ganga Fria', category: 'Residential', zone: 'East', locality: 'Wagholi', impressions: 648000, screens: 30, audience: 622, audienceLabel: 'Households', budget: null, lat: 18.582903, lng: 73.970627 },
        { name: 'Pebbles Urbania', category: 'Residential', zone: 'West', locality: 'Bavdhan', impressions: 604800, screens: 28, audience: 683, audienceLabel: 'Households', budget: null, lat: 18.514261, lng: 73.770729 },
        { name: 'Antheia', category: 'Residential', zone: 'North', locality: 'Pimpri-Chinchwad', impressions: 561600, screens: 26, audience: 1440, audienceLabel: 'Households', budget: null, lat: 18.631446, lng: 73.806382 },
        { name: 'Kunal Icon', category: 'Residential', zone: 'North', locality: 'Pimple Saudagar', impressions: 561600, screens: 26, audience: 830, audienceLabel: 'Households', budget: null, lat: 18.593508, lng: 73.791415 },
        { name: 'Hubtown Countrywoods', category: 'Residential', zone: 'South', locality: 'Yewalewadi', impressions: 540000, screens: 25, audience: 1200, audienceLabel: 'Households', budget: null, lat: 18.442817, lng: 73.884074 },
        { name: 'Joyville Hinjewadi', category: 'Residential', zone: 'North', locality: 'Hinjewadi', impressions: 518400, screens: 24, audience: 1081, audienceLabel: 'Households', budget: null, lat: 18.569253, lng: 73.721424 }
      ]
    },
    {
      city: 'Chennai',
      center: [13.0827, 80.2707],
      summary: {
        locations: 572,
        screens: 3729,
        impressions: 76032000,
        audience: 716682,
        budget: 165000,
        formats: ['Residential', 'Coworking', 'Corporate Park', 'Fitness', 'Office Coffee']
      },
      narrative: 'Good coverage around dense residential belts and IT-growth areas, useful for combining premium housing with everyday commute adjacency.',
      sites: [
        { name: 'Alliance Orchid Springs', category: 'Residential', zone: 'Ambattur', locality: 'Korattur', impressions: 1339200, screens: 62, audience: 1648, audienceLabel: 'Households', budget: null, lat: 13.12587, lng: 80.19333 },
        { name: 'VGN Minerva', category: 'Residential', zone: 'Ambattur', locality: 'Mogappair West', impressions: 928800, screens: 43, audience: 572, audienceLabel: 'Households', budget: null, lat: 13.07223, lng: 80.16288 },
        { name: 'Casagrand Supremus', category: 'Residential', zone: 'Navalur', locality: 'Thazhambur', impressions: 648000, screens: 30, audience: 728, audienceLabel: 'Households', budget: null, lat: 12.84537, lng: 80.21454 },
        { name: 'Olympia Opaline', category: 'Residential', zone: 'Navalur', locality: 'Navalur', impressions: 626400, screens: 29, audience: 1838, audienceLabel: 'Households', budget: null, lat: 12.84807, lng: 80.228722 },
        { name: 'Jains Sudarsana', category: 'Residential', zone: 'Thirumudivakkam', locality: 'Selaiyur', impressions: 604800, screens: 28, audience: 420, audienceLabel: 'Households', budget: null, lat: 12.913841, lng: 80.15418 },
        { name: 'Prince Village II', category: 'Residential', zone: 'Tondiarpet', locality: 'Tondiarpet', impressions: 561600, screens: 26, audience: 464, audienceLabel: 'Households', budget: null, lat: 13.136186, lng: 80.28693 }
      ]
    },
    {
      city: 'Delhi',
      center: [28.6139, 77.209],
      summary: {
        locations: 284,
        screens: 933,
        impressions: 17740800,
        audience: 65251,
        budget: 495000,
        formats: ['Residential', 'Coworking', 'Fitness', 'Office Coffee']
      },
      narrative: 'Smaller current spread than the southern markets, but still useful for a premium NCR pilot or a focused gated-community activation story.',
      sites: [
        { name: 'E1 Vasant Kunj', category: 'Residential', zone: 'South Delhi', locality: 'Vasant Kunj', impressions: 518400, screens: 24, audience: 1214, audienceLabel: 'Households', budget: null, lat: 28.537497, lng: 77.132416 },
        { name: 'GPL Eden Heights', category: 'Residential', zone: 'Gurugram', locality: 'Sector 70, Gurugram', impressions: 518400, screens: 24, audience: 582, audienceLabel: 'Households', budget: null, lat: 28.393535, lng: 77.02156 },
        { name: 'Central Government Hospital', category: 'Residential', zone: 'South Delhi', locality: 'Sri Niwaspuri', impressions: 496800, screens: 23, audience: 413, audienceLabel: 'Households', budget: null, lat: 28.567689, lng: 77.254412 },
        { name: 'Golf Link Residency', category: 'Residential', zone: 'Dwarka', locality: 'Sector 18B', impressions: 475200, screens: 22, audience: 1500, audienceLabel: 'Households', budget: null, lat: 28.583663, lng: 77.036509 },
        { name: 'Umang Winter Hills', category: 'Residential', zone: 'Dwarka', locality: 'Dwarka Mor', impressions: 388800, screens: 18, audience: 360, audienceLabel: 'Households', budget: null, lat: 28.619005, lng: 77.035118 },
        { name: 'Ganga APT Apartments', category: 'Residential', zone: 'South Delhi', locality: 'Vasant Kunj', impressions: 367200, screens: 17, audience: 476, audienceLabel: 'Households', budget: null, lat: 28.523417, lng: 77.147881 }
      ]
    }
  ];

  const mainStage = document.getElementById('mainStage');
  const cityRail = document.getElementById('cityRail');
  const citySections = document.getElementById('citySections');
  const metricGrid = document.getElementById('metricGrid');
  const mapDrawer = document.getElementById('mapDrawer');
  const mapTitle = document.getElementById('mapTitle');
  const mapMeta = document.getElementById('mapMeta');
  const mapSiteList = document.getElementById('mapSiteList');
  const globalCities = document.querySelector('[data-global-cities]');
  const globalSites = document.querySelector('[data-global-sites]');
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav a');
  const revealEls = document.querySelectorAll('.reveal');

  let map;
  let mapMarkers;

  function formatNumber(value) {
    if (value === null || value === undefined || value === '') return 'Not listed';
    return new Intl.NumberFormat('en-IN').format(value);
  }

  function formatCurrency(value) {
    if (!value) return 'On request';
    return 'Rs ' + new Intl.NumberFormat('en-IN').format(value);
  }

  function buildMetricCards() {
    const totals = pitchData.reduce(function(acc, city) {
      acc.locations += city.summary.locations;
      acc.screens += city.summary.screens;
      acc.impressions += city.summary.impressions;
      acc.audience += city.summary.audience;
      return acc;
    }, { locations: 0, screens: 0, impressions: 0, audience: 0 });

    const metrics = [
      {
        label: 'Curated cities',
        value: String(pitchData.length).padStart(2, '0'),
        description: 'This first layout focuses on the strongest cities from the workbook for a launch-market story.'
      },
      {
        label: 'Mapped locations',
        value: formatNumber(totals.locations),
        description: 'A combined mix of residential, office, retail, fitness, and workplace formats from the sheet.'
      },
      {
        label: 'Monthly impressions',
        value: formatNumber(totals.impressions),
        description: 'Reach indicator from the available inventory rows already summarized into city-level opportunity.'
      },
      {
        label: 'Audience base',
        value: formatNumber(totals.audience),
        description: 'Households, employees, and footfall proxies depending on inventory type.'
      }
    ];

    metricGrid.innerHTML = metrics.map(function(metric) {
      return [
        '<article class="metric-card tech-bracket">',
        '<span class="metric-card-label">', metric.label, '</span>',
        '<div class="metric-card-value">', metric.value, '</div>',
        '<p>', metric.description, '</p>',
        '</article>'
      ].join('');
    }).join('');

    globalCities.textContent = String(pitchData.length).padStart(2, '0');
    globalSites.textContent = formatNumber(pitchData.reduce(function(acc, city) {
      return acc + city.sites.length;
    }, 0));
  }

  function buildCityRail() {
    cityRail.innerHTML = pitchData.map(function(city) {
      return [
        '<article class="city-card tech-bracket">',
        '<div class="city-card-header">',
        '<div>',
        '<span class="city-label">Launch cluster</span>',
        '<h3>', city.city, '</h3>',
        '</div>',
        '<span class="city-card-badge">', city.summary.formats.length, ' formats</span>',
        '</div>',
        '<div class="city-mini-stats">',
        statCell('Locations', formatNumber(city.summary.locations), 'mini'),
        statCell('Screens', formatNumber(city.summary.screens), 'mini'),
        statCell('Impressions', formatNumber(city.summary.impressions), 'mini'),
        statCell('Audience', formatNumber(city.summary.audience), 'mini'),
        '</div>',
        '<div class="city-card-actions">',
        '<button class="city-map-button" type="button" data-open-city="', city.city, '">Open map</button>',
        '<a class="btn-secondary" href="#city-', slugify(city.city), '">Jump to section</a>',
        '</div>',
        '</article>'
      ].join('');
    }).join('');
  }

  function buildCitySections() {
    citySections.innerHTML = pitchData.map(function(city) {
      return [
        '<section class="city-sheet tech-bracket" id="city-', slugify(city.city), '">',
        '<div class="city-sheet-header">',
        '<div>',
        '<p class="section-kicker">', city.city, '</p>',
        '<h3>', city.city, ' rollout view</h3>',
        '<p class="city-sheet-copy">', city.narrative, '</p>',
        '</div>',
        '<button class="city-view-button" type="button" data-open-city="', city.city, '">View city map</button>',
        '</div>',
        '<div class="city-sheet-stats">',
        statCell('Locations', formatNumber(city.summary.locations), 'sheet'),
        statCell('Screens', formatNumber(city.summary.screens), 'sheet'),
        statCell('Monthly impressions', formatNumber(city.summary.impressions), 'sheet'),
        statCell('Budget signals', formatCurrency(city.summary.budget), 'sheet'),
        '</div>',
        '<div class="city-sheet-sites">',
        city.sites.slice(0, 6).map(renderSiteCard).join(''),
        '</div>',
        '</section>'
      ].join('');
    }).join('');
  }

  function renderSiteCard(site) {
    return [
      '<article class="site-card">',
      '<div class="site-card-header">',
      '<div>',
      '<span class="city-label">', site.category, '</span>',
      '<h4>', site.name, '</h4>',
      '</div>',
      '<span class="site-badge">', site.zone || 'Zone', '</span>',
      '</div>',
      '<p class="site-location">', [site.locality, site.zone].filter(Boolean).join(' | '), '</p>',
      '<div class="site-metrics">',
      statCell('Impressions', formatNumber(site.impressions), 'site'),
      statCell('Screens', formatNumber(site.screens), 'site'),
      statCell(site.audienceLabel || 'Audience', formatNumber(site.audience), 'site'),
      statCell('Budget', formatCurrency(site.budget), 'site'),
      '</div>',
      '</article>'
    ].join('');
  }

  function renderMapSiteCard(site) {
    return [
      '<article class="map-site-card">',
      '<div class="map-site-card-header">',
      '<div>',
      '<span class="city-label">', site.category, '</span>',
      '<h4>', site.name, '</h4>',
      '</div>',
      '<span class="site-badge">', site.locality || site.zone || 'Location', '</span>',
      '</div>',
      '<p>', [site.zone, site.locality].filter(Boolean).join(' | '), '</p>',
      '<div class="site-metrics">',
      statCell('Impressions', formatNumber(site.impressions), 'site'),
      statCell('Screens', formatNumber(site.screens), 'site'),
      statCell(site.audienceLabel || 'Audience', formatNumber(site.audience), 'site'),
      statCell('Budget', formatCurrency(site.budget), 'site'),
      '</div>',
      '</article>'
    ].join('');
  }

  function statCell(label, value, kind) {
    return [
      '<div class="', kind, '-stat">',
      '<span class="', kind, '-stat-label">', label, '</span>',
      '<span class="', kind, '-stat-value">', value, '</span>',
      '</div>'
    ].join('');
  }

  function slugify(value) {
    return value.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  }

  function initMap() {
    if (map) return true;
    if (!window.L) return false;

    map = L.map('cityMap', {
      zoomControl: true,
      scrollWheelZoom: true
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; OpenStreetMap'
    }).addTo(map);

    mapMarkers = L.layerGroup().addTo(map);
    return true;
  }

  function openCityMap(cityName) {
    const city = pitchData.find(function(item) { return item.city === cityName; });
    if (!city) return;

    const hasMap = initMap();
    mapTitle.textContent = city.city + ' coverage map';
    mapMeta.innerHTML = [
      '<div class="map-meta-grid">',
      metaCard('Locations', formatNumber(city.summary.locations)),
      metaCard('Screens', formatNumber(city.summary.screens)),
      metaCard('Impressions', formatNumber(city.summary.impressions)),
      metaCard('Budget signals', formatCurrency(city.summary.budget)),
      '</div>'
    ].join('');
    mapSiteList.innerHTML = city.sites.map(renderMapSiteCard).join('');

    if (hasMap && mapMarkers) {
      mapMarkers.clearLayers();
    }

    const bounds = [];
    city.sites.forEach(function(site) {
      if (!hasMap || typeof site.lat !== 'number' || typeof site.lng !== 'number') return;
      const marker = L.circleMarker([site.lat, site.lng], {
        radius: 8,
        weight: 1,
        color: '#0d1b24',
        fillColor: '#6ff7ff',
        fillOpacity: 0.9
      }).bindPopup([
        '<strong>', site.name, '</strong><br>',
        site.category, '<br>',
        [site.locality, site.zone].filter(Boolean).join(' | '), '<br>',
        'Impressions: ', formatNumber(site.impressions), '<br>',
        'Screens: ', formatNumber(site.screens)
      ].join(''));

      marker.addTo(mapMarkers);
      bounds.push([site.lat, site.lng]);
    });

    mapDrawer.classList.add('open');
    mapDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    setTimeout(function() {
      if (!hasMap) return;
      map.invalidateSize();
      if (bounds.length > 1) {
        map.fitBounds(bounds, { padding: [40, 40] });
      } else {
        map.setView(city.center, 12);
      }
    }, 240);
  }

  function metaCard(label, value) {
    return [
      '<div class="map-meta-card">',
      '<span class="map-meta-label">', label, '</span>',
      '<span class="map-meta-value">', value, '</span>',
      '</div>'
    ].join('');
  }

  function closeMapDrawer() {
    mapDrawer.classList.remove('open');
    mapDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function bindGlobalEvents() {
    document.addEventListener('click', function(event) {
      const trigger = event.target.closest('[data-open-city]');
      if (trigger) {
        openCityMap(trigger.getAttribute('data-open-city'));
      }

      if (event.target.closest('[data-close-drawer]')) {
        closeMapDrawer();
      }
    });

    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        closeMapDrawer();
      }
    });

    if (hamburger) {
      hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('open');
        mobileNav.classList.toggle('open');
      });
    }

    mobileLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
      });
    });
  }

  function setupReveal() {
    if (!('IntersectionObserver' in window)) {
      revealEls.forEach(function(el) { el.classList.add('visible'); });
      return;
    }

    const revealObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { root: mainStage, threshold: 0.1 });

    revealEls.forEach(function(el) {
      revealObserver.observe(el);
    });
  }

  function setupSectionTracking() {
    const sections = ['hero', 'opportunity', 'cities', 'network', 'next-steps']
      .map(function(id) { return document.getElementById(id); })
      .filter(Boolean);

    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (!entry.isIntersecting) return;
        const href = '#' + entry.target.id;
        sidebarLinks.forEach(function(link) {
          link.classList.toggle('active', link.getAttribute('href') === href);
        });
      });
    }, { root: mainStage, threshold: 0.3 });

    sections.forEach(function(section) { observer.observe(section); });
  }

  buildMetricCards();
  buildCityRail();
  buildCitySections();
  bindGlobalEvents();
  setupReveal();
  setupSectionTracking();
})();