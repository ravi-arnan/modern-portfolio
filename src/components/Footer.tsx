import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="pt-12 pb-0 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0F0F0F] relative z-10 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 flex flex-col items-center relative z-10 mb-12">
                <div className="flex gap-6 mb-8">
                    <a
                        href="https://github.com/ravi-arnan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-1 transition-all duration-300"
                    >
                        <Github size={20} />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/raviarnan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-1 transition-all duration-300"
                    >
                        <Linkedin size={20} />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a
                        href="https://www.instagram.com/ravi_arnan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-1 transition-all duration-300"
                    >
                        <Instagram size={20} />
                        <span className="sr-only">Instagram</span>
                    </a>
                    <a
                        href="mailto:raviarnankeren@gmail.com"
                        className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-1 transition-all duration-300"
                    >
                        <Mail size={20} />
                        <span className="sr-only">Email</span>
                    </a>
                </div>
                <p className="text-center text-sm text-slate-500 dark:text-slate-400">
                    © {new Date().getFullYear()} Ravi Arnan Irianto. All rights reserved. <br className="md:hidden" />
                    Built with React & Tailwind CSS.
                </p>
            </div>

            {/* Large Text at Bottom */}
            <div className="w-full flex justify-center pointer-events-none select-none overflow-hidden mt-auto translate-y-4 md:translate-y-8">
                <span
                    className="text-[20vw] font-normal uppercase text-slate-200/50 dark:text-slate-800/40 leading-none tracking-tighter whitespace-nowrap"
                    style={{
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
                        maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)'
                    }}
                >
                    Ravi Arnan
                </span>
            </div>
        </footer>
    );
}
