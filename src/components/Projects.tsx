import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, FolderGit2, ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import { cn } from '../lib/utils';
import { TextShape } from './TextShape';

const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A modern, full-stack e-commerce solution with real-time inventory management and secure payment gateways.',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
        tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
        github: '#',
        demo: '#'
    },
    {
        title: 'Task Management App',
        description: 'Collaborative workspace tool for teams to organize projects, track time, and manage daily workflows efficiently.',
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800',
        tags: ['Vue', 'Firebase', 'Tailwind CSS'],
        github: '#',
        demo: '#'
    },
    {
        title: 'AI Analytics Dashboard',
        description: 'Data visualization platform leveraging machine learning models to provide predictive insights for retail businesses.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        tags: ['Next.js', 'Python', 'TensorFlow', 'D3.js'],
        github: '#',
        demo: '#'
    },
    {
        title: 'Cybersecurity Toolkit',
        description: 'A comprehensive suite of security analysis tools including vulnerability scanning, network traffic monitoring, and automated threat reporting.',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800',
        tags: ['Python', 'Rust', 'Docker', 'React'],
        github: '#',
        demo: '#'
    },
    {
        title: 'Fintech Mobile App',
        description: 'Cross-platform mobile application for personal finance management, crypto portfolio tracking, and seamless peer-to-peer transfers.',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800',
        tags: ['React Native', 'TypeScript', 'GraphQL', 'AWS'],
        github: '#',
        demo: '#'
    }
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(cardRef, { margin: "-30% 0px -30% 0px" });

    return (
        <div ref={cardRef} className="relative group">
            {/* Timeline Connection Line to Indicator */}
            <div className={`absolute top-1/2 left-0 w-8 md:w-16 h-[2px] -translate-y-1/2 transition-colors duration-500 ${isInView ? 'bg-blue-500' : 'bg-slate-300 dark:bg-slate-800'}`} />

            <div className={`ml-8 md:ml-16 transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-x-0' : 'opacity-40 translate-x-8'}`}>
                <div className={cn(
                    "glass-card p-6 md:p-10 rounded-2xl md:rounded-[2rem] transition-all duration-500",
                    isInView ? "bg-white/80 dark:bg-slate-900/80 border-blue-200 dark:border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.1)]" : ""
                )}>
                    {/* Collapsed Header Area (Always Visible) */}
                    <div className="flex items-center justify-between cursor-pointer">
                        <div className="flex items-center gap-6">
                            <span className="text-4xl md:text-5xl font-black text-slate-200 dark:text-slate-800 transition-colors duration-500 group-hover:text-slate-300 dark:group-hover:text-slate-700 w-16 tracking-tighter">
                                {(index + 1).toString().padStart(2, '0')}
                            </span>
                            <div>
                                <span className={cn(
                                    "inline-block mb-3 px-3 py-1 text-xs font-semibold rounded-full transition-colors duration-500",
                                    isInView ? "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300" : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                                )}>
                                    Featured Project
                                </span>
                                <h3 className={cn(
                                    "text-2xl md:text-4xl font-bold tracking-tight transition-colors duration-500",
                                    isInView ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-slate-400"
                                )}>
                                    {project.title}
                                </h3>
                            </div>
                        </div>

                        <ChevronDown
                            className={cn(
                                "w-6 h-6 text-slate-400 transition-transform duration-500",
                                isInView ? "rotate-180 text-blue-500" : "rotate-0"
                            )}
                        />
                    </div>

                    {/* Expandable Content Area */}
                    <AnimatePresence>
                        {isInView && (
                            <motion.div
                                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                animate={{ height: "auto", opacity: 1, marginTop: 32 }}
                                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="overflow-hidden"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                                    <div className="lg:col-span-7">
                                        <div className="relative aspect-video rounded-xl overflow-hidden mb-8 group/image">
                                            <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/20 mix-blend-multiply z-10 transition-opacity duration-300 group-hover/image:opacity-0" />
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="object-cover w-full h-full transition-transform duration-700 group-hover/image:scale-105"
                                            />
                                        </div>
                                    </div>

                                    <div className="lg:col-span-5 flex flex-col justify-center h-full pb-4">
                                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-10">
                                            {project.tags.map(tag => (
                                                <span
                                                    key={tag}
                                                    className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-6 mt-auto">
                                            <a
                                                href={project.github}
                                                className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors flex items-center gap-2 group/link font-medium"
                                            >
                                                <Github size={20} className="group-hover/link:-translate-y-1 transition-transform" />
                                                Source Code
                                            </a>
                                            <a
                                                href={project.demo}
                                                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors flex items-center gap-2 group/link font-medium"
                                            >
                                                <ExternalLink size={20} className="group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
                                                Live Demo
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

export function Projects() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const indicatorY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="projects" className="py-32 relative overflow-hidden text-slate-900 dark:text-slate-200">
            {/* Background Decor */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-24"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <FolderGit2 className="w-10 h-10 text-blue-500" />
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">Featured Projects</h2>
                    </div>
                    <div className="w-20 h-1 bg-blue-500 rounded-full mb-8" />
                </motion.div>

                <div
                    ref={containerRef}
                    className="relative pl-8 md:pl-24 pb-32"
                >
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-[3px] md:left-11 top-0 bottom-0 w-[1px] bg-slate-200 dark:bg-slate-800" />

                    {/* Dotted section representing full length */}
                    <div className="absolute left-[3px] md:left-11 top-0 bottom-0 w-[1px] border-l-2 border-dotted border-slate-300 dark:border-slate-700 h-full -translate-x-1/2 opacity-50" />

                    {/* Scroll Indicator Box */}
                    <motion.div
                        className="absolute left-[3px] md:left-11 w-3 h-5 bg-blue-500 dark:bg-blue-400 border-2 border-white dark:border-slate-900 -translate-x-1/2 rounded-[2px] z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                        style={{ top: indicatorY }}
                    />

                    <div className="flex flex-col gap-48 md:gap-72 pt-16 pb-48">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} index={index} />
                        ))}
                    </div>
                </div>

                <div className="mt-32">
                    <TextShape />
                </div>
            </div>
        </section>
    );
}
