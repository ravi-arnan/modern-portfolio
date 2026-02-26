import { motion } from 'framer-motion';
import { ShieldCheck, Search, Lock } from 'lucide-react';

const cards = [
    {
        icon: <ShieldCheck className="w-8 h-8 text-blue-500 mb-4" />,
        title: 'System Security',
        description: 'Implementing robust security measures and protocols to protect systems from potential threats and unauthorized access.',
    },
    {
        icon: <Search className="w-8 h-8 text-indigo-500 mb-4" />,
        title: 'Vulnerability Assessment',
        description: 'Identifying, analyzing, and mitigating security flaws in applications and network infrastructures.',
    },
    {
        icon: <Lock className="w-8 h-8 text-sky-500 mb-4" />,
        title: 'Data Protection',
        description: 'Ensuring data integrity and confidentiality through advanced encryption and secure communication channels.',
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
                        I'm a cybersecurity enthusiast dedicated to safeguarding digital environments.
                        I am passionate about discovering vulnerabilities, analyzing threats, and implementing effective security solutions.
                        When I'm not securing systems, you can find me participating in CTF challenges or exploring the latest developments in information security.
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
