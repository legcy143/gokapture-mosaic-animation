// made by shiv

'use client';

import React, { useEffect, useRef } from 'react';
import { gsap, Power2, Power3,Power4 } from 'gsap';

function Page() {
    const items = useRef<HTMLDivElement[]>([]);

    const addToRefs = (el : HTMLDivElement) => {
        if (el && !items.current.includes(el)) {
            items.current.push(el);
        }
    };

    const handleStartAnimations = () => {
        const tl = gsap.timeline();

        items.current.forEach((item, index) => {
            tl.to(item, {
                duration: 1.5,
                css: { top: "40vh", right: `calc(45vw)`},
                ease: Power3.easeIn,
            })
            .to(item, {
                rotation: 45,
                duration: 0.3,
              })
            .to(item, {
                rotation: 0,
                duration: 2.7,
                ease: "elastic.out(1.5, 0.4)",
                transformOrigin: "left top",
              })
            .to(item, {
                duration: 1,
                scale: 0.3, 
                x: () => gsap.utils.random(-40, 40) + 'vw', 
                y: () => gsap.utils.random(-30, 30) + 'vh', 
                ease: Power3.easeInOut,
            });
        });
    };

    useEffect(() => {
      handleStartAnimations();
    }, []);

    return (
        <div className='flex w-screen h-screen justify-center items-center'>
            {[...Array(8)].map((_, index) => (
                <div
                    key={index}
                    className={`rotate-[45deg] rounded-lg absolute bottom-[110vh] right-[40vw] w-[150px] h-[150px]`}
                    style={{ backgroundColor: `hsl(${index * 72}, 100%, 50%)`, transformOrigin: 'left top', }} 
                    ref={addToRefs}
                ></div>
            ))}
        </div>
    );
}

export default Page;
