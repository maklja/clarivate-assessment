import { useEffect, useState } from 'react';

export function useScrollThreshold(
    threshold = 100,
    onScroll?: (scrollPosition: number) => void
) {
    const [scrollToTopVisible, setScrollToTopVisible] = useState(false);

    useEffect(() => {
        const scrollHandler = () => {
            onScroll?.(window.scrollY);
            setScrollToTopVisible(window.scrollY > threshold);
        };
        window.addEventListener('scroll', scrollHandler);

        return () => window.removeEventListener('scroll', scrollHandler);
    }, [threshold, onScroll]);

    return scrollToTopVisible;
}
