import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
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
    }
];

export function Certifications() {
    return (
        <section id="certifications" className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 right-0 w-[30rem] h-[30rem] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[120px] -z-10 -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <Award className="w-10 h-10 text-blue-500" />
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">Certifications</h2>
                    </div>
                    <div className="w-20 h-1 bg-blue-500 rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-6 md:p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group overflow-hidden relative"
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
        </section>
    );
}
