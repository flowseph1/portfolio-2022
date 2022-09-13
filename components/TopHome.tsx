import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { BiDownArrowAlt } from 'react-icons/bi';
import fondo from '../assets/images/fondo.png';
import Redes from './Redes';
import pattern from '../assets/fondos/patternFondo.png';
import { gsap, Power3 } from 'gsap';

/* eslint-disable @next/next/no-img-element */
/* eslint-disable  react/no-unescaped-entities */

function TopHome() {
    const [ballPosition, setBallPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    const [showBall, setShowBall] = useState<boolean>(false);

    const divRef = useRef<HTMLImageElement>(null);
    const divContianer = useRef<HTMLDivElement>(null);
    const el = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        gsap.to(divContianer.current, { duration: 0, visibility: 'visible' });
        gsap.to(divRef.current, { duration: 1, y: -10, opacity: 1, ease: 'power3.inOut', delay: 0.5 });

        gsap.from(el.current, { y: 20 });
        gsap.to(el.current, { duration: 1, y: 0, ease: 'power3.inOut', opacity: 1 });
    }, []);

    return (
        <div className="flex w-full h-fit py-16 space-x-6 relative backdrop-blur-md" ref={divContianer}>
            <div className="flex w-[60em] mx-auto">
                <div className="flex flex-col flex-1  justify-center opacity-0" ref={el}>
                    <p className="text-2xl font-newake">👋 Hello, I'm</p>
                    <p className="font-bold text-6xl text-blue-700 font-newake tracking-wider">JOSE ACOSTA</p>
                    {/*                 <p className="text-lg mb-2 -mt-2">Computer Engineer · Front End Developer</p>
                     */}{' '}
                    <p className="text-sm mb-5 max-w-md text-zinc-500">
                        A computer engineer and Front-End developer with experience in JavaScript, TypeScript, React,
                        and React Native.
                    </p>
                    <div className="flex space-x-4">
                        <button className="boton">
                            <p className="text-[10px]">DOWNLOAD CV</p>
                            <BiDownArrowAlt className="h-5 w-5" />
                        </button>
                        <div className="flex items-end">
                            <Redes />
                        </div>
                    </div>
                </div>
                <div className="flex flex-1">
                    <div className="flex justify-center items-center relative cursor-none ">
                        <div ref={divRef} className="opacity-0">
                            <img src={fondo.src} alt="" className="" />
                        </div>
                        {/*  <div
                        className={`h-16 w-16 bg-red-500 rounded-full absolute -translate-x-[50%] -translate-y-[50%] ${
                            showBall ? 'opacity-1' : 'opacity-0'
                        }`}
                        style={{ transition: 'all 0.1s ease-in-out' }}
                    /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopHome;
