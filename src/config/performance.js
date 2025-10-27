// Configuration des performances
export const performanceConfig = {
  // Lazy loading
  lazyLoading: true,
  
  // Preload des ressources critiques
  criticalResources: [
    '/assets/logowhite.png',
    '/src/index.css'
  ],
  
  // Compression des images
  imageOptimization: {
    quality: 85,
    formats: ['webp', 'jpg', 'png'],
    sizes: [320, 640, 768, 1024, 1280, 1920]
  },
  
  // Cache
  cache: {
    static: '1y',
    images: '1M',
    fonts: '1y'
  },
  
  // Bundle splitting
  bundleSplitting: {
    vendor: true,
    pages: true,
    components: false
  }
}

// Configuration SEO avancée
export const advancedSeoConfig = {
  // Schema.org types
  schemaTypes: {
    organization: 'LocalBusiness',
    service: 'Service',
    person: 'Person'
  },
  
  // Rich snippets
  richSnippets: {
    breadcrumbs: true,
    reviews: true,
    faq: false,
    howTo: false
  },
  
  // Core Web Vitals
  coreWebVitals: {
    lcp: 2.5, // Largest Contentful Paint
    fid: 100, // First Input Delay
    cls: 0.1 // Cumulative Layout Shift
  }
}
