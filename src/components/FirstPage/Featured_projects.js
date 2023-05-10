import "../../Styles/FirstPage/Featured_projects.css"
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Featured_projects() {
    const cardsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const card = entry.target;
                    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

                    if (entry.isIntersecting) {
                        tl.fromTo(
                            card,
                            { opacity: 0, x: -300 },
                            { opacity: 1, x: 0, stagger: 1 }
                        );
                    } else {
                        tl.to(card, { opacity: 0, x: -300 });
                    }
                });
            },
            { root: null, rootMargin: "0px", threshold: 0.2 }
        );

        if (cardsRef.current) {
            const cards = Array.from(cardsRef.current.getElementsByClassName("card"));
            cards.forEach((card) => {
                observer.observe(card);
            });
        }

        return () => {
            if (cardsRef.current) {
                const cards = Array.from(cardsRef.current.getElementsByClassName("card"));
                cards.forEach((card) => {
                    observer.unobserve(card);
                });
            }
        };
    }, []);


    const handleMouseMove = (e) => {
        for (const card of cardsRef.current.getElementsByClassName("card")) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        }
    };

    useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div id="cards" ref={cardsRef}>
            <div className="card">
                <div className="card-border"></div>
                <div className="card-content">
                    <h3>CSSC Redesign</h3>
                    <p3>Case Study • UX • UI • IXD </p3>
                </div>
            </div>

            <div className="card">
                <div className="card-border"></div>
                <div className="card-content">
                    <h3>22:06:43</h3>
                    <p3>Project • Video Editing • AI</p3>
                </div>
            </div>

            <div className="card">
                <div className="card-border"></div>
                <div className="card-content">
                    <h3>Mythic Clash</h3>
                    <p3>Project • Programming • Game Dev</p3>
                </div>
            </div>
        </div>
    );
}

export default Featured_projects;
