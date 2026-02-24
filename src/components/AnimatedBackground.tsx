import { motion } from 'framer-motion';

export function AnimatedBackground() {
    return (
        <div className="fixed inset-0 z-[-20] overflow-hidden pointer-events-none">
            {/* Dark background base */}
            <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950 transition-colors duration-500" />

            {/* Animated Orbs */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] min-w-[300px] rounded-full bg-blue-400/20 dark:bg-blue-600/20 blur-[100px]"
            />

            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] min-w-[400px] rounded-full bg-indigo-400/20 dark:bg-indigo-600/10 blur-[120px]"
            />

            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, 50, 0],
                    scale: [1, 0.9, 1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[25vw] h-[25vw] min-w-[250px] rounded-full bg-sky-400/20 dark:bg-sky-500/10 blur-[90px]"
            />
        </div>
    );
}
