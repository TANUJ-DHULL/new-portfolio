'use client';

import { useEffect } from 'react';

const targets = [
  '.section-top', '.work-heading', '.project', '.work-foot',
  '.about-margin', '.about-main h2', '.about-body', '.founder-note',
  '.education-intro', '.education-card', '.wall-heading', '.wall-item',
  '.learning-heading', '.achievement-card', '.learning-note',
  '.toolkit-layout > div:first-child', '.tool-row',
  '.contact-section > h2', '.contact-bottom',
].join(',');

export function useScrollReveal(enabled: boolean) {
  useEffect(() => {
    const root = document.getElementById('main');
    if (!root) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const compact = window.matchMedia('(max-width: 760px)');
    const elements = new Set<HTMLElement>();
    let frame = 0;
    let observer: MutationObserver | null = null;

    const reset = () => {
      elements.forEach(element => {
        element.style.removeProperty('transform');
        element.style.removeProperty('will-change');
        element.removeAttribute('data-scroll-3d');
      });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const scan = () => {
      root.querySelectorAll<HTMLElement>(targets).forEach(element => {
        if (elements.has(element)) return;
        elements.add(element);
        element.setAttribute('data-scroll-3d', '');
      });
      schedule();
    };
    const update = () => {
      frame = 0;
      if (!enabled || preference.matches) { reset(); return; }
      const height = window.innerHeight || 800;
      const compactScale = compact.matches ? 0.62 : 1;
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const centre = rect.top + rect.height / 2;
        const distance = Math.max(-1, Math.min(1, (centre - height * 0.54) / (height * 0.66)));
        const nearViewport = rect.bottom > -height * 0.12 && rect.top < height * 1.12;
        if (!nearViewport) {
          element.style.removeProperty('transform');
          element.style.removeProperty('will-change');
          return;
        }
        const y = distance * 28 * compactScale;
        const z = -Math.abs(distance) * 52 * compactScale;
        const rotate = -distance * 4.2 * compactScale;
        const scale = 1 - Math.abs(distance) * 0.018;
        element.style.willChange = 'transform';
        element.style.transform = 'perspective(1200px) translate3d(0,' + y.toFixed(2) + 'px,' + z.toFixed(2) + 'px) rotateX(' + rotate.toFixed(2) + 'deg) scale(' + scale.toFixed(4) + ')';
      });
    };
    const onScroll = () => schedule();
    const onResize = () => schedule();
    const onPreference = () => schedule();
    scan();
    observer = new MutationObserver(scan);
    observer.observe(root, { childList: true, subtree: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    preference.addEventListener('change', onPreference);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      observer?.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      preference.removeEventListener('change', onPreference);
      reset();
      elements.clear();
    };
  }, [enabled]);
}
