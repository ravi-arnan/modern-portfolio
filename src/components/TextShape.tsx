import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function TextShape() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Move the repeating text backwards/upwards significantly as user scrolls down
    const yTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    // Generate a long repeating string for the background fill
    const repeatingString = Array(50).fill("// Ravi // Developer // Designer // Portfolio ").join(' ');

    return (
        <div ref={containerRef} className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-transparent select-none">
            <svg
                className="w-full h-full"
                viewBox="0 0 1000 400"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
            >
                <defs>
                    <mask id="raviMask">
                        {/* 
                            Black background = transparent mask 
                            White text = opaque element that lets the image behind pass through
                        */}
                        <rect width="100%" height="100%" fill="black" />
                        <text
                            x="50%"
                            y="50%"
                            textAnchor="middle"
                            dominantBaseline="central"
                            fontSize="280"
                            fontWeight="900"
                            fontFamily="system-ui, sans-serif"
                            fill="white"
                            className="tracking-tighter"
                        >
                            RAVI
                        </text>
                    </mask>
                </defs>

                {/* Apply the mask specifically to a group containing our animated moving text */}
                <g mask="url(#raviMask)">
                    {/* Dark rectangle to ensure base visibility inside the text boundary */}
                    <rect width="100%" height="100%" className="fill-slate-900 dark:fill-white" />

                    {/* The foreignObject allows us to use HTML motion.div to efficiently animate raw text */}
                    <foreignObject x="0" y="0" width="1000" height="2000">
                        <motion.div
                            style={{ y: yTransform }}
                            className="w-full text-slate-400/80 dark:text-slate-500/80 text-[18px] md:text-[22px] leading-relaxed font-mono font-bold uppercase tracking-widest break-words overflow-hidden"
                        >
                            {/* We output the giant string several times to fill the massive 2000px height block */}
                            {Array(20).fill(repeatingString).map((line, i) => (
                                <p key={i} className={`m-0 p-0 text-center ${i % 2 === 0 ? 'opacity-70' : 'opacity-100'}`}>
                                    {line}
                                </p>
                            ))}
                        </motion.div>
                    </foreignObject>
                </g>
            </svg>
        </div>
    );
}
