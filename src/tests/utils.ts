function defineWindowProperty(name: string, value: any): void {
  Object.defineProperty(window, name, { writable: true, value: value });
}

export function setWindowSize(width: number, height: number): void {
  defineWindowProperty('innerWidth', width);
  defineWindowProperty('innerHeight', height);
  window.dispatchEvent(new Event('resize'));
}

export function setScrollY(y: number): void {
  defineWindowProperty('scrollY', y);
  document.dispatchEvent(new Event('scroll'));
}
