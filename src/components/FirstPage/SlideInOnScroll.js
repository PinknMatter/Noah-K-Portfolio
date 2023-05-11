import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SlideInOnScroll = ({ children, direction }) => {
    const ref = useRef(null);


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const target = entry.target;
                    if (entry.isIntersecting) {
                        // Animate the target element when it intersects
                        gsap.fromTo(
                            target,
                            { opacity: 0, x: direction === "right" ? 100 : -100 },
                            {
                                opacity: 1,
                                x: 0,
                                duration: 0.8,
                                ease: "power3.out",
                            }
                        );
                    } else {
                        // Animate the target element when it leaves the viewport
                        gsap.to(target, {
                            opacity: 0,
                            x: direction === "right" ? 100 : -100,
                            duration: 0.8,
                            ease: "power3.out",
                        });
                    }
                });
            },
            { root: null, rootMargin: "0px", threshold: 0.2 }
        );

        if (ref.current) {
            // Start observing the target element
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                // Stop observing the target element before it is unmounted
                observer.unobserve(ref.current);
            }
        };
    }, []);


    return <div ref={ref}>{children}</div>;
};

export default SlideInOnScroll;
