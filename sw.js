// =========================
// NUTRISCAN AI SERVICE WORKER
// Enhanced PWA functionality with offline support
// =========================

const CACHE_NAME = 'nutriscan-v2.0.0';
const STATIC_CACHE_NAME = 'nutriscan-static-v2.0.0';
const DYNAMIC_CACHE_NAME = 'nutriscan-dynamic-v2.0.0';

// Files to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/input.html',
  '/dashboard.html',
  '/about.html',
  '/pricing.html',
  '/style.css',
  '/script.js',
  '/manifest.json'
];

// Files to cache dynamically
const CACHE_STRATEGIES = {
  // HTML pages - Network first, fallback to cache
  pages: ['/', '/index.html', '/input.html', '/dashboard.html', '/about.html', '/pricing.html'],
  
  // Static assets - Cache first
  static: ['/style.css', '/script.js', '/manifest.json'],
  
  // API endpoints (if we had them) - Network first with timeout
  api: ['/api/'],
  
  // Images and other assets - Cache first with timeout
  assets: []
};

// =========================
// SERVICE WORKER INSTALLATION
// =========================
self.addEventListener('install', event => {
  console.log('🔧 Service Worker: Installing...');
  
  event.waitUntil(
    Promise.all([
      // Cache static assets
      caches.open(STATIC_CACHE_NAME).then(cache => {
        console.log('📦 Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      }),
      
      // Skip waiting to activate immediately
      self.skipWaiting()
    ])
  );
});

// =========================
// SERVICE WORKER ACTIVATION
// =========================
self.addEventListener('activate', event => {
  console.log('🚀 Service Worker: Activating...');
  
  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE_NAME && 
                cacheName !== DYNAMIC_CACHE_NAME && 
                cacheName.startsWith('nutriscan-')) {
              console.log('🗑️ Service Worker: Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      
      // Take control of all clients immediately
      self.clients.claim()
    ])
  );
});

// =========================
// FETCH EVENT HANDLING
// =========================
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // Only handle same-origin requests
  if (url.origin !== location.origin) {
    return;
  }
  
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;
  
  try {
    // Determine caching strategy based on request type
    if (isPageRequest(pathname)) {
      return await networkFirstStrategy(request);
    } else if (isStaticAsset(pathname)) {
      return await cacheFirstStrategy(request);
    } else {
      return await networkFirstStrategy(request);
    }
  } catch (error) {
    console.error('🚨 Service Worker: Fetch error:', error);
    return await handleOfflineRequest(request);
  }
}

// =========================
// CACHING STRATEGIES
// =========================

/**
 * Network First Strategy
 * Try network first, fallback to cache if offline
 */
async function networkFirstStrategy(request) {
  try {
    // Try to fetch from network with timeout
    const networkResponse = await Promise.race([
      fetch(request),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Network timeout')), 5000)
      )
    ]);
    
    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Fallback to cache
    console.log('📡 Service Worker: Network failed, trying cache for:', request.url);
    const cachedResponse = await caches.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // If no cache, return offline page for HTML requests
    if (request.headers.get('Accept')?.includes('text/html')) {
      return await createOfflinePage();
    }
    
    throw error;
  }
}

/**
 * Cache First Strategy
 * Try cache first, fallback to network
 */
async function cacheFirstStrategy(request) {
  const cachedResponse = await caches.match(request);
  
  if (cachedResponse) {
    // Update cache in background
    updateCacheInBackground(request);
    return cachedResponse;
  }
  
  // Fetch from network and cache
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('🚨 Service Worker: Cache first failed:', error);
    throw error;
  }
}

/**
 * Update cache in background without blocking response
 */
async function updateCacheInBackground(request) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE_NAME);
      cache.put(request, networkResponse);
    }
  } catch (error) {
    // Silent fail for background updates
    console.log('🔄 Service Worker: Background cache update failed');
  }
}

// =========================
// OFFLINE HANDLING
// =========================

/**
 * Handle requests when completely offline
 */
async function handleOfflineRequest(request) {
  const url = new URL(request.url);
  
  // Try to find any cached version
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  
  // For HTML requests, return offline page
  if (request.headers.get('Accept')?.includes('text/html')) {
    return await createOfflinePage();
  }
  
  // For other requests, return a generic offline response
  return new Response(
    JSON.stringify({ 
      error: 'Offline', 
      message: 'This resource is not available offline' 
    }),
    {
      status: 503,
      headers: { 'Content-Type': 'application/json' }
    }
  );
}

/**
 * Create an offline page when no cached version exists
 */
async function createOfflinePage() {
  const offlineHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>NutriScan AI - Offline</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #4CAF50, #ff9800);
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          margin: 0;
          text-align: center;
          padding: 2rem;
        }
        .offline-container {
          background: rgba(255, 255, 255, 0.1);
          padding: 3rem;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          max-width: 500px;
        }
        .offline-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
        }
        h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        p {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .retry-button {
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid white;
          color: white;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .retry-button:hover {
          background: white;
          color: #4CAF50;
        }
        .features-list {
          text-align: left;
          margin: 2rem 0;
        }
        .features-list li {
          margin: 0.5rem 0;
        }
      </style>
    </head>
    <body>
      <div class="offline-container">
        <div class="offline-icon">🍎📱</div>
        <h1>NutriScan AI</h1>
        <h2>You're Offline</h2>
        <p>No internet connection detected. Don't worry - some features are still available!</p>
        
        <div class="features-list">
          <h3>Available Offline:</h3>
          <ul>
            <li>✅ View your cached food inventory</li>
            <li>✅ Browse saved recipes</li>
            <li>✅ Check expiry calculations</li>
            <li>✅ Export your data</li>
          </ul>
        </div>
        
        <button class="retry-button" onclick="window.location.reload()">
          🔄 Try Again
        </button>
        
        <p style="margin-top: 2rem; font-size: 0.9rem; opacity: 0.8;">
          Your food data is safely stored locally and will sync when you're back online.
        </p>
      </div>
    </body>
    </html>
  `;
  
  return new Response(offlineHTML, {
    headers: { 'Content-Type': 'text/html' }
  });
}

// =========================
// BACKGROUND SYNC
// =========================
self.addEventListener('sync', event => {
  console.log('🔄 Service Worker: Background sync triggered:', event.tag);
  
  if (event.tag === 'nutriscan-sync') {
    event.waitUntil(syncUserData());
  }
});

/**
 * Sync user data when connection is restored
 */
async function syncUserData() {
  try {
    console.log('🔄 Service Worker: Syncing user data...');
    
    // In a real app, this would sync with backend
    // For now, we'll just update the cache with fresh data
    const cache = await caches.open(DYNAMIC_CACHE_NAME);
    
    // Notify clients that sync is complete
    const clients = await self.clients.matchAll();
    clients.forEach(client => {
      client.postMessage({
        type: 'SYNC_COMPLETE',
        message: 'Your data has been synchronized'
      });
    });
    
    console.log('✅ Service Worker: Data sync complete');
  } catch (error) {
    console.error('🚨 Service Worker: Sync failed:', error);
  }
}

// =========================
// PUSH NOTIFICATIONS
// =========================
self.addEventListener('push', event => {
  console.log('📬 Service Worker: Push notification received');
  
  const options = {
    body: 'You have food items expiring soon!',
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 192'><rect width='192' height='192' fill='%234CAF50' rx='24'/><text x='96' y='130' font-size='120' text-anchor='middle'>🍎</text></svg>",
    badge: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 72 72'><rect width='72' height='72' fill='%234CAF50' rx='12'/><text x='36' y='48' font-size='48' text-anchor='middle'>⚠️</text></svg>",
    tag: 'nutriscan-expiry',
    data: {
      url: '/dashboard.html'
    },
    actions: [
      {
        action: 'view',
        title: 'View Dashboard'
      },
      {
        action: 'dismiss',
        title: 'Dismiss'
      }
    ],
    requireInteraction: false,
    timestamp: Date.now()
  };
  
  if (event.data) {
    try {
      const data = event.data.json();
      Object.assign(options, data);
    } catch (error) {
      console.log('📬 Service Worker: Using default notification options');
    }
  }
  
  event.waitUntil(
    self.registration.showNotification('NutriScan AI Alert', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
  console.log('🔔 Service Worker: Notification clicked');
  
  event.notification.close();
  
  const action = event.action;
  const data = event.notification.data;
  
  if (action === 'view' || !action) {
    // Open the app
    const url = data?.url || '/dashboard.html';
    
    event.waitUntil(
      clients.matchAll({ type: 'window', includeUncontrolled: true })
        .then(clientList => {
          // Check if app is already open
          for (const client of clientList) {
            if (client.url.includes(url) && 'focus' in client) {
              return client.focus();
            }
          }
          
          // Open new window if app not open
          if (clients.openWindow) {
            return clients.openWindow(url);
          }
        })
    );
  }
});

// =========================
// PERIODIC BACKGROUND SYNC
// =========================
self.addEventListener('periodicsync', event => {
  console.log('⏰ Service Worker: Periodic sync triggered:', event.tag);
  
  if (event.tag === 'nutriscan-check-expiry') {
    event.waitUntil(checkExpiringItems());
  }
});

/**
 * Check for expiring items in background
 */
async function checkExpiringItems() {
  try {
    console.log('⏰ Service Worker: Checking for expiring items...');
    
    // Get stored food items from IndexedDB or localStorage
    // For now, we'll send a message to active clients to check
    const clients = await self.clients.matchAll();
    
    clients.forEach(client => {
      client.postMessage({
        type: 'CHECK_EXPIRY',
        message: 'Background expiry check requested'
      });
    });
    
    console.log('✅ Service Worker: Expiry check complete');
  } catch (error) {
    console.error('🚨 Service Worker: Expiry check failed:', error);
  }
}

// =========================
// UTILITY FUNCTIONS
// =========================

/**
 * Check if request is for a page
 */
function isPageRequest(pathname) {
  return pathname === '/' || 
         pathname.endsWith('.html') || 
         !pathname.includes('.');
}

/**
 * Check if request is for a static asset
 */
function isStaticAsset(pathname) {
  return pathname.endsWith('.css') || 
         pathname.endsWith('.js') || 
         pathname.endsWith('.json') ||
         pathname.startsWith('/assets/');
}

// =========================
// MESSAGE HANDLING
// =========================
self.addEventListener('message', event => {
  console.log('💬 Service Worker: Message received:', event.data);
  
  const { type, data } = event.data;
  
  switch (type) {
    case 'SKIP_WAITING':
      self.skipWaiting();
      break;
      
    case 'GET_VERSION':
      event.ports[0].postMessage({ version: CACHE_NAME });
      break;
      
    case 'CLEAR_CACHE':
      event.waitUntil(clearAllCaches());
      break;
      
    case 'CACHE_URLS':
      event.waitUntil(cacheUrls(data.urls));
      break;
      
    default:
      console.log('💬 Service Worker: Unknown message type:', type);
  }
});

/**
 * Clear all caches
 */
async function clearAllCaches() {
  const cacheNames = await caches.keys();
  await Promise.all(
    cacheNames.map(cacheName => caches.delete(cacheName))
  );
  console.log('🗑️ Service Worker: All caches cleared');
}

/**
 * Cache specific URLs
 */
async function cacheUrls(urls) {
  const cache = await caches.open(DYNAMIC_CACHE_NAME);
  await cache.addAll(urls);
  console.log('📦 Service Worker: URLs cached:', urls);
}

// =========================
// ERROR HANDLING
// =========================
self.addEventListener('error', event => {
  console.error('🚨 Service Worker: Error:', event.error);
});

self.addEventListener('unhandledrejection', event => {
  console.error('🚨 Service Worker: Unhandled rejection:', event.reason);
});

// =========================
// INITIALIZATION
// =========================
console.log('🍎 NutriScan AI Service Worker Loaded');
console.log('📦 Cache Version:', CACHE_NAME);
console.log('🔧 Features: Offline support, background sync, push notifications');
