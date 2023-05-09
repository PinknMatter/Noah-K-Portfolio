import React from "react";
import gsap from "gsap"
import SplitTextJS from 'split-text-js';
import "../../Styles/FirstPage/Dfirst_anime.css";
import { useEffect } from 'react';


const Dfirst_anime = () => {

    useEffect(() => {
        const titles = gsap.utils.toArray('h2')
        const tl = gsap.timeline({ repeat: -1, repeatDelay: -0 / 9 });
        titles.forEach(title => {
            const splitTitle = new SplitTextJS(title);

            tl
                .from(splitTitle.chars, {
                    opacity: 0,
                    y: 30,
                    rotateX: -90,

                }, "<")

                .to(splitTitle.chars, {
                    opacity: 0,
                    y: -30,
                    rotateX: 90,

                }, "<2")

        })
    });

    return (
        <div className="greeting-container" >
            <h2 className="greeting-text">
                Hi, I'm Noah
            </h2>
            <h2 className="greeting-text">
                Hola, soy Noah
            </h2>
            <h2 className="greeting-text">
                Salut, je suis Noah
            </h2>
            <h2 className="greeting-text">
                Hallo, ich bin Noah
            </h2>
            <h2 className="greeting-text">
                こんにちは、私はノアです
            </h2>
            <h2 className="greeting-text">
                你好，我是诺亚
            </h2>
            <h2 className="greeting-text">
                안녕하세요, 저는 노아입니다
            </h2>
            <h2 className="greeting-text">
                Olá, eu sou o Noah
            </h2>
            <h2 className="greeting-text">
                مرحبًا، أنا نوح
            </h2>

        </div>
    );
};

export default Dfirst_anime;
