import { motion } from 'framer-motion';
import { Camera, Coffee, Gamepad2, Heart, Music, Plane } from 'lucide-react';

const interests = [
    { icon: <Camera size={24} />, name: 'Photography' },
    { icon: <Plane size={24} />, name: 'Traveling' },
    { icon: <Coffee size={24} />, name: 'Specialty Coffee' },
    { icon: <Music size={24} />, name: 'Playing Guitar' },
    { icon: <Gamepad2 size={24} />, name: 'Indie Games' },
    { icon: <Heart size={24} />, name: 'Volunteering' }
];

export function Interests() {
    return (
        <section id="interests" className="py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <Heart className="w-10 h-10 text-blue-500" />
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">Interests & Hobbies</h2>
                    </div>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-8" />
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        When I'm away from the keyboard, these are the things that keep me inspired and energized.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {interests.map((interest, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="glass-card aspect-square rounded-2xl flex flex-col items-center justify-center p-6 gap-4 group hover:-translate-y-2 hover:border-blue-400/50"
                        >
                            <div className="p-4 bg-blue-50 dark:bg-slate-800 rounded-full text-blue-500 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                                {interest.icon}
                            </div>
                            <span className="font-medium text-slate-700 dark:text-slate-300 text-sm text-center">
                                {interest.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
