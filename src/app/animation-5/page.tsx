// made by shiv

'use client';

import React, { useEffect, useRef } from 'react';
import { gsap, Power2, Power3 } from 'gsap';

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
                duration: 0.6,
                css: { top: "50vh", right: `calc(50vw - 50px)`, opacity: 1 },
                ease: Power2.easeOut,
            })
            .to(item, {
                duration: 0.4,
                y: "-60",
                repeat: 2,
                yoyo: true,
                ease: Power2.easeInOut,
            })
            .to(item, {
                duration: 1,
                scale: 2.5,
                rotation: 360,
                ease: Power3.easeOut,
            })
            .to(item, {
                duration: 1.2,
                scale: 0.5, 
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
                    className={`rotate-[45deg] absolute bottom-[110vh] right-[50vw-50px] w-[100px] h-[100px]`}
                    style={{ backgroundColor: `hsl(${index * 72}, 100%, 50%)` }} 
                    ref={addToRefs}
                ></div>
            ))}
        </div>
    );
}

export default Page;
