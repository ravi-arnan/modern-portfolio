import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { cn } from '../lib/utils';

export function Contact() {
    return (
        <section id="contact" className="py-24 relative">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <Mail className="w-10 h-10 text-blue-500" />
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">Get In Touch</h2>
                    </div>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-8" />
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        I'm currently available for freelance work or full-time opportunities.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-5 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="md:col-span-2 space-y-6"
                    >
                        <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
                            <div className="p-3 bg-blue-50 dark:bg-slate-800 rounded-xl text-blue-500 flex-shrink-0">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Email</h4>
                                <a href="mailto:raviarnankeren@gmail.com" className="text-lg font-medium text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    raviarnankeren@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
                            <div className="p-3 bg-blue-50 dark:bg-slate-800 rounded-xl text-blue-500 flex-shrink-0">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Phone</h4>
                                <a href="tel:+6287782674878" className="text-lg font-medium text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    (+62) 877 8267 4878
                                </a>
                            </div>
                        </div>

                        <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
                            <div className="p-3 bg-blue-50 dark:bg-slate-800 rounded-xl text-blue-500 flex-shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Location</h4>
                                <span className="text-lg font-medium text-slate-800 dark:text-slate-200">
                                    Denpasar, Bali
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="md:col-span-3 glass-card p-8 rounded-2xl"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 text-slate-900 dark:text-white transition-all placeholder:text-slate-400"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 text-slate-900 dark:text-white transition-all placeholder:text-slate-400"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 text-slate-900 dark:text-white transition-all placeholder:text-slate-400"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 text-slate-900 dark:text-white transition-all placeholder:text-slate-400 resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                className={cn(
                                    "w-full py-4 rounded-xl font-medium flex items-center justify-center gap-2 group",
                                    "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 transition-all duration-300"
                                )}
                            >
                                Send Message
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
