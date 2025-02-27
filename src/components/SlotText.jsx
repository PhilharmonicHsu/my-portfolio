import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function SlotText({targetLetter, step, isUpperCase=false, width=20}) {
    const letters = [];
    const textRef = useRef(null);
    let startPosition = -1200; 

    for (let i=0 ; i < 65 ; i++) {
        letters.push(i);
    }

    useEffect(() => {
        gsap.to(textRef.current, {
            duration: 2,
            y: "-100%",
            ease: "power2.out",
            delay: step * 0.05
        });
    }, []);

    const randomLetter = () => {
        const chars = (isUpperCase)
            ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
            : 'abcdefghijklmnopqrstuvwxyz';

        return chars[Math.floor(Math.random() * chars.length)];
    }

    const letterStyle = (position) => {
        return {
            translate: 'none', 
            rotate: 'none', 
            scale: 'none', 
            opacity: 1, 
            visibility: 'inherit', 
            transform: `translate(0%, ${position}%)`
        }
    }

    return <div 
        className="mask" 
        style={{ 
            position: "relative", 
            overflow: "hidden", 
            height: "40px",
            width: `${width}px`
        }}
    >
        <div ref={textRef} className="slotText text-4xl mt-[40px]">
            <div class="originalText" 
                aria-hidden="true" 
                style={letterStyle(-1200)}
            >
                &nbsp;
            </div>
            {letters.map(_ => {
                startPosition += 20;

                return <div aria-hidden="true" style={letterStyle(startPosition)}>
                    {targetLetter === ' ' ? '' : randomLetter()}
                </div>
            })}
            <div className="text-center"
                style={letterStyle(100)}
            >
                {targetLetter}
            </div>
            <div 
                style={letterStyle(200)}
            >-</div>
        </div>
    </div>
}