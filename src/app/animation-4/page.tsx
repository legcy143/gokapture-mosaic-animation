// made by Aniket
'use client';

import React, { useRef, useEffect, useState } from 'react';

import { TweenMax } from 'gsap';

const Page = () => {
  let divuContainer = useRef(null);
  const divu = useRef([]);

  const n = 16;
  const size = 50;
  const delay = 3;

  const handleReload = () => {
    TweenMax.to(divuContainer, 0, { css: { position: "relative" } })
    //@ts-ignore
    setTimeout(handleReload1(0), 1000);
  }

  const handleReload1 = (i: any) => {
    TweenMax.to(divu.current[i], delay, { css: { top: `${Math.floor((i / Math.sqrt(n))) * size}px`, right: `${(i % Math.sqrt(n)) * size}px`, opacity: "1", transform: "rotateZ(0) scale(1)" } });
    if (i < n) setTimeout(() => handleReload1(i + 1), delay * 1000);
  };

  useEffect(handleReload, []);

  function getRandomPair() {
    const randomValue = Math.random();
    let top, right;
    if (randomValue < 0.25) {
      top = 0;
      right = Math.floor(Math.random() * 101);
    } else if (randomValue < 0.5) {
      right = 0;
      top = Math.floor(Math.random() * 101);
    } else if (randomValue < 0.75) {
      top = 105;
      right = Math.floor(Math.random() * 101);
    } else {
      right = 105;
      top = Math.floor(Math.random() * 101);
    }
    return { top, right };
  }

  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(i);
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100vh", alignItems: "center" }}>
      <div style={{ width: `${Math.sqrt(n) * size}px`, height: `${Math.sqrt(n) * size}px` }}
        //@ts-ignore
        ref={e => divuContainer = e} >
        {result.map(i => <div style={{ position: "absolute", top: `${getRandomPair().top}vh`, right: `${getRandomPair().right}vw`, height: size, width: size, opacity: 0, border: "2px solid black", transform: "rotateZ(90deg) scale(2)" }} className={`divu divu${i}`}
          //@ts-ignore
          ref={e => divu.current[i] = e} />)}
      </div>
    </div>
  );
};

export default Page;