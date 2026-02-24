import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
    {
        degree: 'Master of Science in Computer Science',
        institution: 'Tech University',
        period: '2021 - 2023',
        description: 'Specialized in Artificial Intelligence and Machine Learning. Thesis on neural network optimization.',
    },
    {
        degree: 'Bachelor of Science in Software Engineering',
        institution: 'State College',
        period: '2017 - 2021',
        description: 'Graduated with First Class Honors. Led the university programming team.',
    }
];

export function Education() {
    return (
        <section id="education" className="py-24 relative">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <GraduationCap className="w-10 h-10 text-blue-500" />
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">Education</h2>
                    </div>
                    <div className="w-20 h-1 bg-blue-500 rounded-full" />
                </motion.div>

                <div className="space-y-8">
                    {education.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="glass-card p-8 rounded-2xl relative overflow-hidden group"
                        >
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />

                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 md:mb-0">
                                    {item.degree}
                                </h3>
                                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium">
                                    <Calendar size={18} />
                                    <span>{item.period}</span>
                                </div>
                            </div>

                            <h4 className="text-lg text-slate-700 dark:text-slate-300 font-semibold mb-3">
                                {item.institution}
                            </h4>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
