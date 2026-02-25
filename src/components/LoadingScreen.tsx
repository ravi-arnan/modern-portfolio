import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
    onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => {
                        onLoadingComplete();
                    }, 500); // Wait half a second at 100% before triggering completion
                    return 100;
                }
                // Randomly increment by 1 to 15 to simulate variable loading speed
                return prev + Math.floor(Math.random() * 15) + 1;
            });
        }, 150);

        return () => clearInterval(timer);
    }, [onLoadingComplete]);

    return (
        <AnimatePresence>
            <motion.div
                key="loading-screen"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }} // Smooth fade out with slight scale and blur
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
            >
                {/* Progress Text */}
                <div className="w-80 sm:w-96 mb-3 flex justify-end">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-white font-mono text-base tracking-wider"
                    >
                        {progress}%
                    </motion.span>
                </div>

                {/* Progress Bar Container */}
                <div className="w-80 sm:w-96 h-2 sm:h-2.5 bg-gray-900 rounded-full overflow-hidden relative border border-gray-800">
                    {/* The Animated Progress Bar */}
                    <motion.div
                        className="h-full bg-gradient-to-r from-blue-900 via-blue-500 to-white"
                        style={{ width: `${progress}%` }}
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "linear", duration: 0.2 }}
                    />

                    {/* Shine effect on the progress bar */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-full -translate-x-full animate-[shimmer_2s_infinite]" />
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

// Add this to your tailwind config or a global css file for the shimmer effect:
// @keyframes shimmer {
//   100% {
//     transform: translateX(100%);
//   }
// }
