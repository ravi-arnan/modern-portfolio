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
    const containerRef = useRef<HTMLDivElement>(null);

    // Set up scroll tracking for the zoom effect
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"]
    });

    // Map scroll progress (0 to 1) to a scale value (e.g. 0.8 to 1)
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

    return (
        <section id="skills" ref={containerRef} className="py-32 relative overflow-hidden border-y border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#080A2D]">
            <motion.div
                style={{ scale, opacity }}
                className="container mx-auto px-6 md:px-12 relative z-10"
            >
                <div className="text-center mb-24">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <Sparkles className="w-10 h-10 text-blue-500" />
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">Technical Arsenal</h2>
                    </div>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
                </div>

                {/* Skill Tree Layout */}
                <div className="relative max-w-5xl mx-auto flex flex-col items-center">

                    {/* Central Node */}
                    <div className="relative z-20 w-20 h-20 rounded-full bg-white dark:bg-slate-800 border-4 border-blue-500 shadow-xl shadow-blue-500/20 flex items-center justify-center mb-16">
                        <Terminal className="w-8 h-8 text-blue-500" />
                    </div>

                    {/* Connecting Lines SVG Background */}
                    <div className="absolute top-10 left-0 w-full h-full pointer-events-none z-0 hidden md:block">
                        <svg className="w-full h-48" preserveAspectRatio="none">
                            <path
                                d="M 50% 0 L 16.66% 100"
                                className="stroke-slate-300 dark:stroke-slate-700"
                                strokeWidth="2"
                                strokeDasharray="6 6"
                                fill="none"
                            />
                            <path
                                d="M 50% 0 L 50% 100"
                                className="stroke-slate-300 dark:stroke-slate-700"
                                strokeWidth="2"
                                strokeDasharray="6 6"
                                fill="none"
                            />
                            <path
                                d="M 50% 0 L 83.33% 100"
                                className="stroke-slate-300 dark:stroke-slate-700"
                                strokeWidth="2"
                                strokeDasharray="6 6"
                                fill="none"
                            />
                        </svg>
                    </div>

                    {/* The 3 Pillars */}
                    <div className="grid md:grid-cols-3 gap-8 w-full relative z-10">
                        {skillCategories.map((category, index) => {
                            const Icon = category.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className={`glass-card p-8 rounded-2xl border-t-4 ${category.borderColor} relative group hover:-translate-y-2 transition-transform duration-300`}
                                >
                                    <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full ${category.bgColor} flex items-center justify-center border-2 ${category.borderColor} shadow-lg backdrop-blur-md`}>
                                        <Icon className={`w-6 h-6 ${category.color}`} />
                                    </div>

                                    <h3 className="text-xl font-bold mb-6 mt-4 text-center text-slate-800 dark:text-white">
                                        {category.title}
                                    </h3>

                                    <div className="flex flex-wrap justify-center gap-3">
                                        {category.skills.map((skill, skillIndex) => (
                                            <div
                                                key={skillIndex}
                                                className="px-4 py-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm transition-all cursor-default"
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
        </section>
    );
}
