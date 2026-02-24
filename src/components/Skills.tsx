import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const skillCategories = [
    {
        title: 'Frontend',
        skills: ['React', 'Vue', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    },
    {
        title: 'Backend',
        skills: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB']
    },
    {
        title: 'Tools & DevOps',
        skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'Jest']
    }
];

export function Skills() {
    return (
        <section id="skills" className="py-24 relative">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <Sparkles className="w-10 h-10 text-blue-500" />
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">Technical Skills</h2>
                    </div>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="glass-card p-8 rounded-2xl"
                        >
                            <h3 className="text-xl font-bold mb-6 text-center text-slate-800 dark:text-white">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap justify-center gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skillIndex}
                                        whileHover={{ scale: 1.05 }}
                                        className="px-4 py-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500 transition-all cursor-default"
                                    >
                                        {skill}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
