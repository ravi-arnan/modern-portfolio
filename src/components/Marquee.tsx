import { Shield, Search, Lock, AlertTriangle, Activity, Terminal, Key, Database, Crosshair, Server } from 'lucide-react';

const techIcons = [
    { icon: Shield, name: "Network Security" },
    { icon: Search, name: "Vulnerability Assessment" },
    { icon: Crosshair, name: "Penetration Testing" },
    { icon: Terminal, name: "Ethical Hacking" },
    { icon: Lock, name: "Cryptography" },
    { icon: AlertTriangle, name: "Incident Response" },
    { icon: Activity, name: "Threat Hunting" },
    { icon: Database, name: "Data Protection" },
    { icon: Server, name: "Server Hardening" },
    { icon: Key, name: "Access Management" },
];

export function Marquee() {
    // We duplicate the array to create a seamless loop
    const marqueeItems = [...techIcons, ...techIcons];

    return (
        <div className="w-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border-y border-white/40 dark:border-white/10 overflow-hidden py-6 relative">
            {/* Gradient fades on the edges for a smoother entry/exit */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white/60 dark:from-slate-900/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white/60 dark:from-slate-900/80 to-transparent z-10 pointer-events-none" />

            <div className="flex w-[200%] animate-infinite-scroll hover:[animation-play-state:paused] ease-linear">
                {marqueeItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={index}
                            className="flex items-center gap-3 px-8 text-slate-500  dark:text-slate-400 w-1/2 flex-shrink-0 lg:w-max group cursor-default"
                        >
                            <Icon className="w-6 h-6 group-hover:text-blue-500 transition-colors" />
                            <span className="text-sm md:text-base font-semibold uppercase tracking-wider group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">
                                {item.name}
                            </span>
                            <span className="text-blue-500/30 mx-8">•</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
