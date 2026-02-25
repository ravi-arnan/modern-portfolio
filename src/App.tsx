import { useState } from 'react';
import { motion } from 'framer-motion';
import { ThemeProvider } from './components/ThemeProvider';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { Interests } from './components/Interests';
import { Contact } from './components/Contact';
import { LoadingScreen } from './components/LoadingScreen';
import { Footer } from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen font-sans selection:bg-blue-500/30 relative text-slate-900 dark:text-slate-50 transition-colors duration-300">

        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}

        {/* Animate the main content in after the loading screen finishes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={isLoading ? 'pointer-events-none h-screen overflow-hidden' : ''}
        >
          <Navbar />

          <main>
            <Hero />
            <div className="bg-slate-50 dark:bg-[#080A2D]">
              <Marquee />
              <About />
              <Education />
              <Projects />
              <Skills />
              <Achievements />
              <Interests />
              <Contact />
            </div>
          </main>

          <Footer />
        </motion.div>
      </div>
    </ThemeProvider>
  );
}

export default App;
