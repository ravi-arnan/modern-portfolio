import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Terminal, Shield, Layout, Server } from 'lucide-react';

const skillCategories = [
    {
        title: 'Frontend',
        icon: Layout,
        color: 'text-blue-500',
        bgColor: 'bg-blue-50 dark:bg-blue-500/10',
        borderColor: 'border-blue-200 dark:border-blue-500/30',
        skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Next.js']
    },
    {
        title: 'Backend',
        icon: Server,
        color: 'text-emerald-500',
        bgColor: 'bg-emerald-50 dark:bg-emerald-500/10',
        borderColor: 'border-emerald-200 dark:border-emerald-500/30',
        skills: ['Node.js', 'Python', 'PostgreSQL', 'REST APIs', 'GraphQL']
    },
    {
        title: 'Security',
        icon: Shield,
        color: 'text-rose-500',
        bgColor: 'bg-rose-50 dark:bg-rose-500/10',
        borderColor: 'border-rose-200 dark:border-rose-500/30',
        skills: ['Penetration Testing', 'Cryptography', 'OWASP Top 10', 'Network Security', 'Auth/IAM']
    }
];

export function Skills() {
    const containerRef = useRef<HTMLElement>(null);

    // Track scroll across the tall 300vh container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Main container zoom in (0-0.15), hold (0.15-0.85), zoom out (0.85-1.0)
    const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.1, 1, 1, 0.1]);
    const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

    // Draw SVG lines sequentially
    const pathLength = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

    // Pillar 1: Frontend (Left)
    const card1Opacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
    const card1Y = useTransform(scrollYProgress, [0.4, 0.5], [50, 0]);

    // Pillar 2: Backend (Center)
    const card2Opacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
    const card2Y = useTransform(scrollYProgress, [0.5, 0.6], [50, 0]);

    // Pillar 3: Security (Right)
    const card3Opacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
    const card3Y = useTransform(scrollYProgress, [0.6, 0.7], [50, 0]);

    const cardOpacities = [card1Opacity, card2Opacity, card3Opacity];
    const cardYs = [card1Y, card2Y, card3Y];

    return (
        <section
            id="skills"
            ref={containerRef}
            className="h-[300vh] relative bg-slate-50 dark:bg-[#080A2D] border-y border-slate-200 dark:border-slate-800"
        >
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ scale, opacity }}
                    className="container mx-auto px-6 md:px-12 relative z-10 w-full max-w-6xl"
                >
                    <div className="text-center mb-16 md:mb-24">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-blue-500" />
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">Technical Arsenal</h2>
                        </div>
                        <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
                    </div>

                    {/* Skill Tree Layout */}
                    <div className="relative w-full flex flex-col items-center">

                        {/* Central Node */}
                        <div className="relative z-20 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white dark:bg-slate-800 border-4 border-blue-500 shadow-xl shadow-blue-500/20 flex items-center justify-center mb-8 md:mb-16">
                            <Terminal className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />
                        </div>

                        {/* Connecting Lines SVG Background */}
                        <div className="absolute top-[4rem] md:top-[5rem] left-0 w-full h-40 md:h-48 pointer-events-none z-0 hidden md:block">
                            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                                {/* Line to Left (Frontend) */}
                                <motion.path
                                    d="M 50 0 C 50 50, 16.66 50, 16.66 100"
                                    className="stroke-blue-500/50 dark:stroke-blue-500/50"
                                    strokeWidth="0.5"
                                    strokeDasharray="2 2"
                                    fill="none"
                                    style={{ pathLength }}
                                />
                                {/* Line to Center (Backend) */}
                                <motion.path
                                    d="M 50 0 L 50 100"
                                    className="stroke-emerald-500/50 dark:stroke-emerald-500/50"
                                    strokeWidth="0.5"
                                    strokeDasharray="2 2"
                                    fill="none"
                                    style={{ pathLength }}
                                />
                                {/* Line to Right (Security) */}
                                <motion.path
                                    d="M 50 0 C 50 50, 83.33 50, 83.33 100"
                                    className="stroke-rose-500/50 dark:stroke-rose-500/50"
                                    strokeWidth="0.5"
                                    strokeDasharray="2 2"
                                    fill="none"
                                    style={{ pathLength }}
                                />
                            </svg>
                        </div>

                        {/* The 3 Pillars */}
                        <div className="grid md:grid-cols-3 gap-6 md:gap-8 w-full relative z-10">
                            {skillCategories.map((category, index) => {
                                const Icon = category.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        style={{
                                            opacity: cardOpacities[index],
                                            y: cardYs[index]
                                        }}
                                        className={`glass-card p-6 md:p-8 rounded-2xl border-t-4 ${category.borderColor} relative group hover:-translate-y-2 transition-transform duration-300 w-full`}
                                    >
                                        <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full ${category.bgColor} flex items-center justify-center border-2 ${category.borderColor} shadow-lg backdrop-blur-md`}>
                                            <Icon className={`w-6 h-6 ${category.color}`} />
                                        </div>

                                        <h3 className="text-xl font-bold mb-4 md:mb-6 mt-4 text-center text-slate-800 dark:text-white">
                                            {category.title}
                                        </h3>

                                        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                                            {category.skills.map((skill, skillIndex) => (
                                                <div
                                                    key={skillIndex}
                                                    className="px-3 py-1.5 md:px-4 md:py-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-lg md:rounded-xl text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm transition-all cursor-default"
                                                >
                                                    {skill}
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
