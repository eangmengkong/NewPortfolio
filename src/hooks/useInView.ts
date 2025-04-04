
import { useState, useEffect, useRef, MutableRefObject } from 'react';

interface IntersectionOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}

interface InViewHookReturn {
  ref: MutableRefObject<Element | null>;
  inView: boolean;
  entry: IntersectionObserverEntry | null;
}

export function useInView({
  root = null,
  rootMargin = '0px',
  threshold = 0,
  triggerOnce = false
}: IntersectionOptions = {}): InViewHookReturn {
  const [inView, setInView] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const ref = useRef<Element | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!window.IntersectionObserver || !ref.current) return;
    
    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const observerCallback: IntersectionObserverCallback = ([entry]) => {
      setInView(entry.isIntersecting);
      setEntry(entry);
      
      if (entry.isIntersecting && triggerOnce && observerRef.current) {
        observerRef.current.disconnect();
      }
    };

    observerRef.current = new IntersectionObserver(observerCallback, {
      root,
      rootMargin,
      threshold,
    });

    observerRef.current.observe(ref.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [root, rootMargin, threshold, triggerOnce]);

  return { ref, inView, entry };
}
