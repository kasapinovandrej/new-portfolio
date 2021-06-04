import { useEffect } from 'react'
import { useAnimation } from "framer-motion";

export const animateSection = (inView) => {
    const animation = useAnimation({
        threshold: 0.2,
    })
    useEffect(() => {
        if (inView) {
            animation.start({
                y: 0,
                opacity: 1,
                transition: { duration: 0.5 },
            });
        }
        if (!inView) {
            animation.start({
                y: 100,
                opacity: 0,
                transition: { duration: 0.5 },
            });
        }

    }, [inView]);
    return animation
}

