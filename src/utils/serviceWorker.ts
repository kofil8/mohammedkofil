/**
 * Register service worker for PWA support
 */
export function registerServiceWorker(): void {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log("SW registered:", registration);

          // Check for updates periodically (every minute)
          setInterval(() => {
            registration.update();
          }, 60000);
        })
        .catch((error) => {
          console.warn("SW registration failed:", error);
        });
    });
  }
}
