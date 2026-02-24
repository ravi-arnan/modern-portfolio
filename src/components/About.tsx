import { motion } from 'framer-motion';
import { Code2, Palette, Zap } from 'lucide-react';

const cards = [
    {
        icon: <Code2 className="w-8 h-8 text-blue-500 mb-4" />,
        title: 'Clean Code',
        description: 'Writing maintainable, scalable, and efficient code following modern best practices and architectural patterns.',
    },
    {
        icon: <Palette className="w-8 h-8 text-indigo-500 mb-4" />,
        title: 'Modern Design',
        description: 'Crafting beautiful, intuitive interfaces focused on user experience and cutting-edge visual aesthetics.',
    },
    {
        icon: <Zap className="w-8 h-8 text-sky-500 mb-4" />,
        title: 'Performance',
        description: 'Optimizing applications for maximum speed and smooth interactions across all devices and platforms.',
    }
];

export function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 right-0 w-72 h-72 bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">About Me</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-8" />
                    <p className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300">
                        I'm a full-stack developer with a passion for building robust web applications.
                        I love bridging the gap between elegant design and complex backend logic.
                        When I'm not coding, you can find me exploring new technologies or contributing to open source.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="glass-card p-8 rounded-2xl group hover:-translate-y-2"
                        >
                            <div className="bg-blue-50 dark:bg-slate-800/50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">{card.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
