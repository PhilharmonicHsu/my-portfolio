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
            duration: 1.5,      // 根據需要調整動畫時間
            y: "-100%",      // 讓元素垂直移動到 -1100% 的位置
            ease: "power2.out", // 選擇適合的 easing 效果
            delay: step * 0.05
        });
    }, []);

    const randomLetter = () => {
        const chars = (isUpperCase)
            ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
            : 'abcdefghijklmnopqrstuvwxyz';

        return chars[Math.floor(Math.random() * chars.length)];
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
            <div class="originalText" aria-hidden="true" 
                style={{translate: 'none', rotate: 'none', scale: 'none', opacity: 1, visibility: 'inherit', transform: 'translate(0%, -1200%)'}}
            >
                &nbsp;
            </div>
            {letters.map(letter => {
                startPosition += 20;

                return <div aria-hidden="true" 
                    style={{translate: 'none', rotate: 'none', scale: 'none', opacity: 1, visibility: 'inherit', transform: `translate(0%, ${startPosition}%)`}}
                >
                    {targetLetter === ' ' ? '' : randomLetter()}
                </div>
            })}
            <div className="text-center"
                style={{translate: 'none', rotate: 'none', scale: 'none', opacity: 1, visibility: 'inherit', transform: 'translate(0%, 100%)'}}
            >
                {targetLetter}
            </div>
            <div 
                style={{translate: 'none', rotate: 'none', scale: 'none', opacity: 1, visibility: 'inherit', transform: 'translate(0%, 200%)'}}
            >-</div>
        </div>
    </div>
}