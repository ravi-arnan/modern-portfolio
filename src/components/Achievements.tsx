import { motion } from 'framer-motion';
import { Trophy, Award, Star } from 'lucide-react';

const achievements = [
    {
        title: 'Juara 1 Lomba Catur SPORTI',
        organization: '2024 & 2025',
        icon: <Trophy className="w-6 h-6 text-yellow-500" />,
        description: 'Meraih juara pertama dalam Lomba Catur SPORTI (Sportivitas Teknologi Informasi) selama dua tahun berturut-turut, menunjukkan kemampuan strategi dan problem-solving yang konsisten.'
    },
    {
        title: 'Finalis Pilmapres TI',
        organization: '2024',
        icon: <Star className="w-6 h-6 text-blue-500" />,
        description: 'Terpilih sebagai finalis Pemilihan Mahasiswa Berprestasi Teknologi Informasi 2024, mewakili fakultas dalam kompetisi bergengsi tingkat universitas.'
    },
    {
        title: 'BSI Scholarship Inspirasi',
        organization: '2024',
        icon: <Award className="w-6 h-6 text-orange-500" />,
        description: 'Penerima beasiswa BSI Scholarship Inspirasi 2024, penghargaan untuk mahasiswa berprestasi dengan kontribusi aktif dalam kegiatan akademik dan organisasi.'
    }
];

export function Achievements() {
    return (
        <section id="achievements" className="py-24 relative bg-slate-100/50 dark:bg-slate-900/20">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <Award className="w-10 h-10 text-blue-500" />
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">Achievements</h2>
                    </div>
                    <div className="w-20 h-1 bg-blue-500 rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="glass-card p-6 rounded-2xl flex gap-4 items-start group hover:border-blue-400/50 transition-colors"
                        >
                            <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm group-hover:scale-110 transition-transform flex-shrink-0">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-800 dark:text-white leading-tight mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                                    {item.organization}
                                </p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
