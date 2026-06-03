import "@testing-library/jest-dom";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

Object.defineProperty(window, "ResizeObserver", {
  writable: true,
  value: ResizeObserverMock,
});

class IntersectionObserverMock {
  root = null;
  rootMargin = "";
  thresholds = [];

  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  value: IntersectionObserverMock,
});

Object.defineProperty(globalThis, "IntersectionObserver", {
  writable: true,
  value: IntersectionObserverMock,
});

Object.defineProperty(HTMLCanvasElement.prototype, "getContext", {
  writable: true,
  value: () => ({
    clearRect: () => {},
    beginPath: () => {},
    arc: () => {},
    fill: () => {},
    moveTo: () => {},
    lineTo: () => {},
    stroke: () => {},
    fillRect: () => {},
    scale: () => {},
    setTransform: () => {},
    createLinearGradient: () => ({
      addColorStop: () => {},
    }),
  }),
});
