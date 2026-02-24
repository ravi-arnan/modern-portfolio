import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import asciiArt from '../assets/ascii-art-image-1771960056974.txt?raw';

export function TextShape() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Move the ASCII text backwards/upwards as user scrolls down
    const yTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

    return (
        <div ref={containerRef} className="relative w-full overflow-hidden bg-transparent select-none py-20 flex justify-center items-center">
            <motion.div
                style={{ y: yTransform }}
                className="w-full max-w-[100vw] overflow-hidden flex justify-center items-center glitch-container cursor-crosshair"
            >
                <div className="relative inline-block mx-auto text-center">
                    <pre
                        className="text-[6px] sm:text-[8px] md:text-[10px] lg:text-xs font-mono font-bold leading-[1.15] whitespace-pre text-slate-800 dark:text-slate-200 relative"
                    >
                        {asciiArt.split('').map((char, index) => {
                            if (char === ' ' || char === '\n') {
                                return <span key={index}>{char}</span>;
                            }
                            return (
                                <span
                                    key={index}
                                    className="text-slate-900 dark:text-slate-100 transition-colors duration-1000 hover:duration-0 hover:text-blue-500 hover:bg-slate-900 dark:hover:bg-white dark:hover:text-blue-600"
                                >
                                    {char}
                                </span>
                            );
                        })}
                    </pre>
                </div>
            </motion.div>
        </div>
    );
}
