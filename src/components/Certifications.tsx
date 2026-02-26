import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

const certifications = [
    {
        title: "Google Cybersecurity Professional Certificate",
        issuer: "Coursera",
        date: "Dec 20, 2025",
        link: "https://coursera.org/share/b077575e599fadcf091657bc9b73e4e5",
        color: "from-blue-500 to-indigo-500"
    },
    {
        title: "Google AI Essentials",
        issuer: "Coursera",
        date: "Oct 10, 2025",
        link: "https://coursera.org/share/06c09677c6c05314b378ac357a2399ad",
        color: "from-emerald-500 to-teal-500"
    },
    {
        title: "Certificate of Completion 2023 - 2024 (Tech Buddy)",
        issuer: "Google Developer Student Club Universitas Udayana",
        date: "2024",
        link: "https://drive.google.com/file/d/1aJ_OZS01SjE34Q9P8DD-OknCzp-ZrYI9/view?usp=sharing",
        color: "from-amber-500 to-orange-500"
    },
    {
        title: "Learn the Basics of Data Science",
        issuer: "Dicoding",
        date: "Feb 17, 2024",
        link: "https://www.dicoding.com/certificates/N9ZOO0VRDZG5",
        color: "from-sky-500 to-blue-600"
    },
    {
        title: "Advanced React Patterns",
        issuer: "Frontend Masters",
        date: "Jan 15, 2024",
        link: "#",
        color: "from-purple-500 to-fuchsia-500"
    },
    {
        title: "AWS Certified Developer – Associate",
        issuer: "Amazon Web Services",
        date: "Nov 22, 2023",
        link: "#",
        color: "from-orange-500 to-yellow-500"
    },
    {
        title: "Advanced React Patterns",
        issuer: "Frontend Masters",
        date: "Jan 15, 2024",
        link: "#",
        color: "from-purple-500 to-fuchsia-500"
    },
    {
        title: "AWS Certified Developer – Associate",
        issuer: "Amazon Web Services",
        date: "Nov 22, 2023",
        link: "#",
        color: "from-orange-500 to-yellow-500"
    }
];

export function Certifications() {
    const [step, setStep] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const columnsCount = 11;
    const centerIndex = Math.floor(columnsCount / 2); // 5
    const cycleLength = centerIndex * 2; // 10

    useEffect(() => {
        const timer = setInterval(() => {
            setStep((s) => (s + 1) % cycleLength);
        }, 800); // Slower, smoother transition
        return () => clearInterval(timer);
    }, [cycleLength]);

    const getIntensity = (i: number, currentStep: number) => {
        const d = Math.abs(i - centerIndex);
        const wavePos = currentStep <= centerIndex ? currentStep : cycleLength - currentStep;
        const distFromWave = Math.abs(d - wavePos);

        // Smoother drop-off curve
        if (distFromWave === 0) return 0.8;
        if (distFromWave === 1) return 0.5;
        if (distFromWave === 2) return 0.25;
        if (distFromWave === 3) return 0.1;
        return 0.02;
    };

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -400 : 400;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id="certifications" className="py-24 relative overflow-hidden border-y border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#04061A]">
            {/* Glowing Columns Background Effect */}
            <div className="absolute inset-0 flex justify-center pointer-events-none z-0 overflow-hidden">
                {/* Add a global blur to soften the harsh column lines */}
                <div className="flex w-full h-full blur-xl scale-110">
                    {Array.from({ length: columnsCount }).map((_, i) => {
                        const intensity = getIntensity(i, step);
                        return (
                            <div
                                key={i}
                                className="flex-1 h-full border-r first:border-l border-slate-300/30 dark:border-white/5 border-dashed relative flex items-end"
                            >
                                <div
                                    className="w-full transition-all duration-1000 ease-in-out"
                                    style={{
                                        height: `${20 + intensity * 80}%`,
                                        opacity: intensity,
                                        background: `linear-gradient(to top, rgba(59, 130, 246, ${intensity}), transparent)`
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
                <div className="glass-card bg-white/40 dark:bg-slate-900/40 p-8 md:p-12 lg:p-16 rounded-[2rem] border border-white/40 dark:border-slate-800/50 relative overflow-hidden shadow-2xl shadow-blue-500/5">
                    <div className="flex items-center justify-between mb-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <Award className="w-10 h-10 text-blue-500" />
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">Certifications</h2>
                            </div>
                            <div className="w-20 h-1 bg-blue-500 rounded-full" />
                        </motion.div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => scroll('left')}
                                className="p-3 rounded-full bg-white/50 dark:bg-slate-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all border border-slate-200 dark:border-slate-700"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="p-3 rounded-full bg-white/50 dark:bg-slate-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all border border-slate-200 dark:border-slate-700"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>

                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 hide-scrollbar"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="snap-start shrink-0 w-[calc(100vw-4rem)] md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-6 md:p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group overflow-hidden relative"
                            >
                                {/* Decorative background gradient */}
                                <div className={cn(
                                    "absolute -top-16 -right-16 w-32 h-32 rounded-full bg-gradient-to-br opacity-5 dark:opacity-10 group-hover:scale-150 transition-transform duration-500",
                                    cert.color
                                )} />

                                <div className="relative z-10">
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                                        {cert.title}
                                    </h3>

                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="text-blue-600 dark:text-blue-400 font-medium">
                                            {cert.issuer}
                                        </span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                                        <span className="text-slate-500 dark:text-slate-400 text-sm">
                                            {cert.date}
                                        </span>
                                    </div>

                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link"
                                    >
                                        View Credential
                                        <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
