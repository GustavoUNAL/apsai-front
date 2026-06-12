export const carouselSlides = [
  {
    id: "video",
    type: "video" as const,
    poster:
      "https://static-assets.mapbox.com/www/videos/home/section_carousel-looping-background/poster.webp",
    video:
      "https://static-assets.mapbox.com/www/videos/home/section_carousel-looping-background/video@720p-nov2025.mp4",
    vimeoUrl:
      "https://vimeo.com/1132281493/96ba909cb6?share=copy&fl=sv&fe=ci",
  },
  {
    id: "3d-lanes",
    type: "card" as const,
    badge: "Product Update",
    title:
      "3D Lanes provide true-to-life road detail for in-vehicle and mobile navigation",
    link: "https://www.mapbox.com/3d-lanes",
    linkText: "Request access",
    image:
      "https://cdn.prod.website-files.com/6050a76fa6a633d5d54ae714/695e97ebf6b0e0f25164711a_Mapbox%203D%20Lanes%20-%20launch%20post.webp",
  },
  {
    id: "toyota",
    type: "card" as const,
    badge: "Partnership News",
    title: "Toyota's next-generation navigation system is built with Mapbox",
    link: "https://www.mapbox.com/press-releases/toyotas-next-generation-navigation-system-is-built-with-mapbox",
    linkText: "Read more",
    image:
      "https://cdn.prod.website-files.com/6050a76fa6a633d5d54ae714/695bf44f50123065656cc1a3_695be8a1ac215d86544551f4_Mapbox_TMNA_01052026_Navigation_Rav4_image1.webp",
  },
  {
    id: "standard",
    type: "card" as const,
    badge: "Product Update",
    title: "Mapbox style update: Beautiful, detailed building facades",
    link: "https://www.mapbox.com/blog/detailed-architecture-and-new-design-flexibility-enhance-the-latest-release-of-mapbox-standard",
    linkText: "Explore the latest version",
    image:
      "https://cdn.prod.website-files.com/6050a76fa6a633d5d54ae714/6937332d42604688a962cfb6_homepage-carousel_standard-v5.webp",
  },
  {
    id: "location-ai",
    type: "card" as const,
    badge: "NEW PRODUCT",
    title:
      "Give AI agents geospatial context to deliver accurate, location-aware answers",
    link: "https://www.mapbox.com/location-ai",
    linkText: "Learn more",
    image:
      "https://cdn.prod.website-files.com/6050a76fa6a633d5d54ae714/6883dbf2ab3adb2a061f807a_Blog%20cover%20-%20Mapbox%20MCP%20Server%20V2.webp",
  },
  {
    id: "newsletter",
    type: "card" as const,
    badge: "newsletter",
    title: "Subscribe to our newsletter",
    link: "https://www.mapbox.com/forms/mapbox-newsletter",
    linkText: "Sign up today",
    image:
      "https://cdn.prod.website-files.com/6050a76fa6a633d5d54ae714/699891fc5397e9597d62be3e_newsletter.avif",
  },
];

export const featureSections = [
  {
    title: "Bring location to life with beautiful maps",
    description:
      "Use Mapbox APIs and SDKs, ready-made map styles, and live updating data to build customizable maps for web, mobile, automotive and AR.",
    link: "https://www.mapbox.com/maps",
    linkLabel: "Mapbox Maps",
    mediaType: "video" as const,
    poster:
      "https://static-assets.mapbox.com/www/videos/home/section_beautiful-maps/poster.jpeg",
    video:
      "https://static-assets.mapbox.com/www/videos/home/section_beautiful-maps/video@720p.mp4",
    reverse: false,
  },
  {
    title: "Optimize routing with customized navigation",
    description:
      "Advanced routing engines, accurate traffic-aware travel times, and intuitive turn-by-turn directions for mobile and automotive.",
    link: "https://www.mapbox.com/navigation",
    linkLabel: "Mapbox Navigation",
    mediaType: "image" as const,
    image:
      "https://cdn.prod.website-files.com/6050a76fa6a633d5d54ae714/65bbb3b4e081d228a80d1146_img-navigation.webp",
    reverse: true,
  },
  {
    title: "Transform location features with search",
    description:
      "Mapbox powers location search for precise addresses, place names, and points of interest via easy-to-use APIs and SDKs.",
    link: "https://www.mapbox.com/search",
    linkLabel: "Mapbox Search",
    mediaType: "image" as const,
    image:
      "https://cdn.prod.website-files.com/6050a76fa6a633d5d54ae714/66abccf92c26a8f38e189257_651e8557b730b61ff947f814_homepage__search.webp",
    reverse: false,
  },
  {
    title: "Generate insights with comprehensive location data",
    description:
      "Build with global datasets for Boundaries, Traffic, and Movement, informed by over half a billion monthly active users.",
    link: "https://www.mapbox.com/data-products",
    linkLabel: "Mapbox Data",
    mediaType: "video" as const,
    poster:
      "https://static-assets.mapbox.com/www/videos/home/section_location-data/poster.jpeg",
    video:
      "https://static-assets.mapbox.com/www/videos/home/section_location-data/video@720p.mp4",
    reverse: true,
  },
];

export const customerStories = [
  {
    id: "automotive",
    label: "Automotive",
    title:
      "The Operating System 9 delivers all-new navigation built with Mapbox",
    description:
      "BMW and MINI set a new standard for in-vehicle navigation with an immersive 3D map style and sophisticated EV features.",
    link: "https://www.mapbox.com/automotive",
    linkLabel: "Discover Mapbox for Automotive",
    image:
      "https://cdn.prod.website-files.com/6050a76fa6a633d5d54ae714/6851e1e449941b794227a25b_homepage-customer-story_bmw.webp",
    logo: "bmw",
  },
  {
    id: "weather",
    label: "Weather",
    title: "Visualize 20 billion daily forecasts with high-performance maps",
    description:
      "The Weather Company provides real-time and forecasted weather for millions of people around the world with Mapbox for web and mobile.",
    link: "https://www.mapbox.com/weather",
    linkLabel: "Discover Mapbox for Weather",
    image:
      "https://cdn.prod.website-files.com/6050a76fa6a633d5d54ae714/65095d60103084de89b9af15_homepage__case_02.webp",
    logo: "weather",
  },
  {
    id: "fleets",
    label: "Fleets",
    title: "Reduce costs, enhance service delivery, and improve fleet efficiency",
    description:
      "Inform fleet optimization and dispatch with customizable routing, precision geocoding, and in-app navigation for field technicians, ride hail drivers, micromobility services and more.",
    link: "https://www.mapbox.com/showcase/kraken-technologies",
    linkLabel: "Discover Mapbox for Fleets",
    image:
      "https://cdn.prod.website-files.com/6050a76fa6a633d5d54ae714/6851daf609834bfdeba38d7b_homepage-customer-story_kraken.webp",
    logo: "kraken",
  },
  {
    id: "telecom",
    label: "Telecom",
    title: "Highlight superior 5G coverage with live maps",
    description:
      "T-Mobile coverage maps, built custom with Mapbox, enhance brand image and customer satisfaction with precise block-level detail and weekly data updates.",
    link: "https://www.mapbox.com/telco",
    linkLabel: "Discover Mapbox for Telecom",
    image:
      "https://cdn.prod.website-files.com/6050a76fa6a633d5d54ae714/65095d5feb74df805601b42a_homepage__case_04.webp",
    logo: "tmobile",
  },
  {
    id: "odl",
    label: "On-Demand Logistics",
    title: "Delight customers with reliable, on time arrivals",
    description:
      "Mapbox provides accurate estimated trip times, optimized routes, and enhanced visual maps, all deployed at scale for millions of deliveries.",
    link: "https://www.mapbox.com/on-demand-logistics",
    linkLabel: "Discover Mapbox for ODL",
    image:
      "https://cdn.prod.website-files.com/6050a76fa6a633d5d54ae714/6851db8b65ca553e170c9762_homepage-customer-story_doordash.webp",
    logo: "doordash",
  },
];

export const navProducts = [
  {
    id: "maps",
    label: "Maps",
    links: [
      { title: "Maps", desc: "Smooth, fast, cross-platform maps", href: "https://www.mapbox.com/maps" },
      { title: "Mapbox GL JS", desc: "Immersive maps for web", href: "https://www.mapbox.com/mapbox-gljs" },
      { title: "Mobile Maps SDK", desc: "Powerful maps for iOS and Android", href: "https://www.mapbox.com/mobile-maps-sdk" },
      { title: "Studio", desc: "Beautiful, custom map designs", href: "https://www.mapbox.com/mapbox-studio" },
      { title: "Static Maps", desc: "Embed map images", href: "https://www.mapbox.com/static-maps" },
      { title: "Add Custom Data", desc: "With the Mapbox Tiling Service", href: "https://www.mapbox.com/mts" },
    ],
  },
  {
    id: "navigation",
    label: "Navigation",
    links: [
      { title: "Navigation", desc: "Custom navigation services", href: "https://www.mapbox.com/navigation" },
      { title: "Navigation SDK for Automotive", desc: "In-vehicle infotainment and navigation", href: "https://www.mapbox.com/automotive" },
      { title: "Navigation for Mobile", desc: "Routing and directions for iOS & Android", href: "https://www.mapbox.com/navigation-mobile" },
      { title: "Mapbox 3D Lanes", desc: "3D lane-level guidance", href: "https://www.mapbox.com/3d-lanes", tag: "New" },
    ],
  },
  {
    id: "search",
    label: "Search",
    links: [
      { title: "Search", desc: "Smart location data and search features", href: "https://www.mapbox.com/search-service" },
      { title: "Geocoding", desc: "Geolocate and validate addresses", href: "https://www.mapbox.com/geocoding" },
      { title: "Search Box", desc: "User-friendly search interface", href: "https://www.mapbox.com/search-box", tag: "New" },
    ],
  },
  {
    id: "ai",
    label: "AI",
    links: [
      { title: "Location AI", desc: "Integrate AI with geospatial data", href: "https://www.mapbox.com/location-ai" },
      { title: "Feedback Agent", desc: "Capture better real-time feedback", href: "https://www.mapbox.com/feedback-agent", tag: "New" },
      { title: "MapGPT", desc: "A location-intelligent AI assistant", href: "https://www.mapbox.com/mapgpt" },
    ],
  },
  {
    id: "data",
    label: "Data",
    links: [
      { title: "Data Products", desc: "Unique geospatial datasets", href: "https://www.mapbox.com/data-products" },
      { title: "Traffic Data", desc: "Live and typical traffic conditions", href: "https://www.mapbox.com/traffic-data" },
      { title: "Movement Data", desc: "Population patterns through space and time", href: "https://www.mapbox.com/movement-data" },
      { title: "Boundaries", desc: "Official boundaries around the world", href: "https://www.mapbox.com/boundaries" },
    ],
  },
  {
    id: "self-hosted",
    label: "Self-Hosted",
    links: [
      { title: "Atlas", desc: "On-premise or private cloud solutions", href: "https://www.mapbox.com/atlas" },
    ],
  },
];

export const navSolutions = [
  { title: "On-Demand Logistics", desc: "Boost customer satisfaction and delivery performance", href: "https://www.mapbox.com/on-demand-logistics" },
  { title: "Automotive", desc: "Integrated navigation experiences for in-vehicle apps", href: "https://www.mapbox.com/automotive" },
  { title: "Travel", desc: "Plan, book, and explore the world all in one place", href: "https://www.mapbox.com/industries/travel" },
  { title: "Business Intelligence", desc: "Enhance data analysis with location intelligence", href: "https://www.mapbox.com/business-intelligence" },
  { title: "Weather", desc: "Deliver accurate, real-time weather information", href: "https://www.mapbox.com/weather" },
  { title: "Telecommunications", desc: "Map real-time coverage and optimize network operations", href: "https://www.mapbox.com/telecom" },
  { title: "Outdoors", desc: "Detailed maps for athletes and adventures", href: "https://www.mapbox.com/industries/outdoors" },
  { title: "Retail", desc: "On-brand store locators and e-commerce solutions", href: "https://www.mapbox.com/retail" },
  { title: "Real Estate", desc: "Visualize property listings and market data", href: "https://www.mapbox.com/real-estate" },
  { title: "Drones & Robots", desc: "Visualize, monitor, and manage robotic fleets", href: "https://www.mapbox.com/drones-robots" },
];
