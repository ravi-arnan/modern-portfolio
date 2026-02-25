import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { AnimatedBackground } from './AnimatedBackground';

export function Hero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const glowBackground = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, rgba(59, 130, 246, 0.45), rgba(59, 130, 246, 0) 100%)`;

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <AnimatedBackground />
            <motion.div
                className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-500"
                style={{
                    background: glowBackground,
                    opacity: isHovered ? 1 : 0
                }}
            />
            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-400/20 dark:bg-indigo-600/10 rounded-full blur-[150px] -z-10" />

            <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center justify-center min-h-[80vh]">
                <div className="max-w-4xl mx-auto text-center mt-32 md:mt-48">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-6 px-5 py-2 rounded-full border border-white/40 dark:border-white/10 bg-white/30 dark:bg-slate-900/40 backdrop-blur-xl text-blue-700 dark:text-blue-300 font-medium text-sm shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]"
                    >
                        Welcome to my portfolio
                    </motion.div>

                    <div className="relative w-full">
                        {/* Profile Image Container - Behind Text, Fading out at bottom */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="absolute left-1/2 -top-36 md:-top-56 -translate-x-1/2 w-64 h-64 md:w-80 md:h-80 z-0 opacity-80 pointer-events-none"
                            style={{
                                WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                                maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
                            }}
                        >
                            {/* Replace with actual image source later */}
                            <div className="w-full h-full rounded-3xl bg-slate-300 dark:bg-slate-700 overflow-hidden shadow-2xl relative">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                                    alt="Ravi Arnan Irianto"
                                    className="w-full h-full object-cover object-center mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                                />
                                {/* Soft glow overlay inside the image container */}
                                <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay"></div>
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-slate-900 dark:text-white relative z-10 drop-shadow-lg"
                        >
                            My name is <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-sky-200 to-blue-500 dark:from-blue-400 dark:via-cyan-100 dark:to-blue-400 animate-gradient-x bg-[length:200%_auto]">
                                Ravi Arnan Irianto
                            </span>
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        I'm a cybersecurity enthusiast focused on building secure, reliable, and user-safe digital experiences. I specialize in identifying vulnerabilities and improving system defenses.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href="#projects"
                            className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors flex items-center justify-center gap-2 group rounded-full shadow-lg shadow-blue-500/25"
                        >
                            View My Work
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="w-full sm:w-auto px-8 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 font-medium transition-colors flex items-center justify-center gap-2 rounded-full"
                        >
                            Contact Me
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="mt-16 flex justify-center gap-6"
                    >
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 hover:-translate-y-1 transition-all duration-300">
                            <Github size={24} />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 hover:-translate-y-1 transition-all duration-300">
                            <Linkedin size={24} />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="mailto:hello@example.com" className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 hover:-translate-y-1 transition-all duration-300">
                            <Mail size={24} />
                            <span className="sr-only">Email</span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
