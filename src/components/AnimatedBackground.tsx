import { motion } from 'framer-motion';

export function AnimatedBackground() {
    return (
        <div className="absolute inset-0 z-[-20] overflow-hidden pointer-events-none bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
            {/* The Abstract Motion Gradient */}
            <motion.div
                animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-full h-full opacity-70 dark:opacity-100 mix-blend-normal"
                style={{
                    backgroundSize: "200% auto",
                    backgroundImage: `linear-gradient(
                        to right,
                        #E0F2FE 0%,    
                        #8CA5EF 8.33%, 
                        #1F33B4 16.66%,
                        #080A2D 25%, 
                        #1F33B4 33.33%,
                        #8CA5EF 41.66%,
                        #E0F2FE 50%, 
                        #8CA5EF 58.33%,
                        #1F33B4 66.66%,
                        #080A2D 75%,
                        #1F33B4 83.33%,
                        #8CA5EF 91.66%,
                        #E0F2FE 100%
                    )`
                }}
            />

            {/* Soft Grid Overlay for subtle texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_80%,transparent_100%)] mix-blend-overlay z-10" />

            {/* Cinematic blur overlay to smooth out the colors and make it relaxing */}
            <div className="absolute inset-0 bg-white/10 dark:bg-transparent backdrop-blur-[60px] z-[5]" />

            {/* 16 Glassy Vertical Panels - Placed on top (z-20) */}
            <div className="absolute inset-0 grid grid-cols-16 z-20">
                {Array.from({ length: 16 }).map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: i * 0.05,
                            ease: "easeOut"
                        }}
                        className="w-full h-full bg-white/10 dark:bg-white/5 backdrop-blur-md border-r border-white/20 dark:border-white/10 last:border-r-0"
                    />
                ))}
            </div>
        </div>
    );
}
