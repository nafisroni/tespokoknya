import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

    // Daftar asset yang akan dicaching
    const assetsToCache = [
    './',
    './icons/happy (1).png',
    './icons/happy (2).png',
    './icons/happy (3).png',
    './icons/happy (4).png',
    './icons/happy (5).png',
    './icons/happy (6).png',
    './icons/happy (7).png',
    './icons/happy (8).png',
    './index.html',
    // './favicon.png',
    './app.bundle.js',
    './app.webmanifest',
    './sw.bundle.js',
    ];

    self.addEventListener('install', (event) => {
    event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
    });

    self.addEventListener('activate', (event) => {
    event.waitUntil(CacheHelper.deleteOldCache());
    });

    self.addEventListener('fetch', (event) => {
    event.respondWith(CacheHelper.revalidateCache(event.request));
    });