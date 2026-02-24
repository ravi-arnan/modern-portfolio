import { ThemeProvider } from './components/ThemeProvider';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { Interests } from './components/Interests';
import { Contact } from './components/Contact';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen font-sans selection:bg-blue-500/30 relative text-slate-900 dark:text-slate-50 transition-colors duration-300">
        <AnimatedBackground />
        <Navbar />

        <main>
          <Hero />
          <About />
          <Education />
          <Projects />
          <Skills />
          <Achievements />
          <Interests />
          <Contact />
        </main>

        <footer className="py-8 text-center text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
