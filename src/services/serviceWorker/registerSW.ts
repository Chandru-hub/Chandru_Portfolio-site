type Config = {
  onSuccess?: (registration: ServiceWorkerRegistration) => void;
  onUpdate?: (registration: ServiceWorkerRegistration) => void;
};

/** Register SW in production, or when REACT_APP_SW=true. */
export function registerServiceWorker(config?: Config): void {
  if (!('serviceWorker' in navigator)) return;

  const shouldRegister =
    process.env.NODE_ENV === 'production' || process.env.REACT_APP_SW === 'true';

  if (!shouldRegister) return;

  window.addEventListener('load', () => {
    const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        registration.onupdatefound = () => {
          const installing = registration.installing;
          if (!installing) return;

          installing.onstatechange = () => {
            if (installing.state !== 'installed') return;
            if (navigator.serviceWorker.controller) {
              config?.onUpdate?.(registration);
            } else {
              config?.onSuccess?.(registration);
            }
          };
        };
      })
      .catch((error) => {
        console.error('Service worker registration failed:', error);
      });
  });
}

export function unregisterServiceWorker(): void {
  if (!('serviceWorker' in navigator)) return;
  navigator.serviceWorker.ready
    .then((registration) => registration.unregister())
    .catch((error) => console.error(error.message));
}
