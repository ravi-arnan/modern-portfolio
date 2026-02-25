import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Github, FolderGit2, X, AlertCircle } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { TextShape } from './TextShape';
import telkomDashboardImage from '../assets/TelkomDashboard.png';

const projects = [
    {
        title: 'Internal Telkom Dashboard',
        description: 'Successfully conducted comprehensive security testing and vulnerability analysis. Implemented secure coding practices to fortify the application and protect against identified threats.',
        image: telkomDashboardImage,
        tags: ['Security Testing', 'Vulnerability Analysis', 'Secure Implementation'],
        github: '#'
    },
    {
        title: 'MergeUtility',
        description: 'A dedicated utility and scripting tool designed to simplify the process of merging multiple data files efficiently.',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800',
        tags: ['Utility', 'Scripting', 'CLI'],
        github: 'https://github.com/ravi-arnan/MergeUtility'
    },
    {
        title: 'Arba',
        description: 'A modern web project demonstrating frontend layout capabilities and functional web application structuring.',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800',
        tags: ['Web Development', 'Frontend', 'React'],
        github: 'https://github.com/ravi-arnan/Arba'
    },
    {
        title: 'codelearn',
        description: 'A comprehensive educational repository focused on learning paths and exploring various programming concepts and languages.',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
        tags: ['Education', 'Programming', 'Open Source'],
        github: 'https://github.com/ravi-arnan/codelearn'
    }
];

function ProjectCard({ project, index, onImageClick }: { project: typeof projects[0], index: number, onImageClick: (img: string) => void }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(cardRef, { margin: "-30% 0px -30% 0px" });
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;
        if (showAlert) {
            timeout = setTimeout(() => setShowAlert(false), 4000);
        }
        return () => clearTimeout(timeout);
    }, [showAlert]);

    const handleGithubClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (project.github === '#') {
            e.preventDefault();
            setShowAlert(true);
        }
    };

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
                    <div className="flex items-center justify-between cursor-default">
                        <div className="flex items-center gap-6">
                            <span className="text-4xl md:text-5xl font-black text-slate-900 dark:text-slate-200 transition-colors duration-500 w-16 tracking-tighter">
                                {(index + 1).toString().padStart(2, '0')}
                            </span>
                            <div>
                                <span className={cn(
                                    "inline-block mb-3 px-3 py-1 text-xs font-semibold rounded-full transition-colors duration-500",
                                    isInView ? "bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-300" : "bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-400"
                                )}>
                                    Featured Project
                                </span>
                                <h3 className={cn(
                                    "text-2xl md:text-4xl font-bold tracking-tight transition-colors duration-500",
                                    isInView ? "text-slate-900 dark:text-white" : "text-slate-700 dark:text-slate-400"
                                )}>
                                    {project.title}
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Expandable Content Area (Always Rendered, Animations via Opacity/Transform) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="mt-8"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                            <div className="lg:col-span-7">
                                <button
                                    onClick={() => onImageClick(project.image)}
                                    className="relative aspect-video rounded-xl overflow-hidden mb-8 group/image w-full cursor-zoom-in block outline-none ring-0"
                                >
                                    <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/20 mix-blend-multiply z-10 transition-opacity duration-300 group-hover/image:opacity-0" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="object-cover w-full h-full transition-transform duration-700 group-hover/image:scale-105"
                                    />
                                </button>
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
                                        onClick={handleGithubClick}
                                        target={project.github !== '#' ? "_blank" : undefined}
                                        rel="noopener noreferrer"
                                        className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors flex items-center gap-2 group/link font-medium"
                                    >
                                        <Github size={20} className="group-hover/link:-translate-y-1 transition-transform" />
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Confidential Alert Toast */}
            <AnimatePresence>
                {showAlert && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute -top-16 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-3 rounded-xl shadow-xl border border-slate-800 dark:border-slate-200 min-w-max"
                    >
                        <AlertCircle size={20} className="text-amber-500 dark:text-amber-600" />
                        <span className="text-sm font-medium">This repository is confidential and cannot be accessed publicly.</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function Projects() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const indicatorY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    // Close modal handle
    const closeModal = () => setSelectedImage(null);

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
                            <ProjectCard
                                key={index}
                                project={project}
                                index={index}
                                onImageClick={setSelectedImage}
                            />
                        ))}
                    </div>
                </div>

                <div className="mt-32">
                    <TextShape />
                </div>
            </div>

            {/* Image Modal Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm cursor-zoom-out"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl cursor-default"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-md transition-colors"
                            >
                                <X size={24} />
                            </button>
                            <img
                                src={selectedImage}
                                alt="Project Preview"
                                className="w-full h-full object-contain bg-slate-900/50"
                                style={{ maxHeight: '90vh' }}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
