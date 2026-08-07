import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import CapacityDevelopment from './components/CapacityDevelopment';
import Audiovisuals from './components/Audiovisuals';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Service } from './types';
import { Sparkles, ArrowRight, ArrowUpRight, ShieldCheck, Trophy, Landmark } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [cart, setCart] = useState<Service[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  const addToCart = (service: Service) => {
    if (!cart.some(item => item.id === service.id)) {
      setCart([...cart, service]);
      triggerNotification(`Added "${service.title}" to your quote request box.`);
    }
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
    triggerNotification(`Removed service from your request box.`);
  };

  const checkoutCart = () => {
    setCart([]);
    triggerNotification(`Success! Your comprehensive quote request was dispatched to admissions.`);
  };

  const onEnrollRequested = (courseTitle: string) => {
    triggerNotification(`Lodged enrollment request for: ${courseTitle}`);
  };

  const triggerNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  // Renders view transitions smoothly with framer motion
  const renderTabContent = () => {
    switch (currentTab) {
      case 'home':
        return (
          <div className="space-y-4">
            {/* Main Premium Hero */}
            <Hero setCurrentTab={setCurrentTab} />
          </div>
        );
      case 'about':
        return <About setCurrentTab={setCurrentTab} />;
      case 'services':
        return (
          <Services
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            setCurrentTab={setCurrentTab}
          />
        );
      case 'projects':
        return <Projects />;
      case 'capacity':
        return <CapacityDevelopment setCurrentTab={setCurrentTab} onEnrollRequested={onEnrollRequested} />;
      case 'audiovisuals':
        return <Audiovisuals />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero setCurrentTab={setCurrentTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg text-stone-900 font-sans selection:bg-brand-primary selection:text-white" id="cape-global-app-root">
      {/* Global Toast Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4 pointer-events-none"
            id="toast-notification"
          >
            <div className="bg-white border border-stone-200 rounded-xl p-4 shadow-2xl flex items-center gap-3 text-left pointer-events-auto">
              <div className="w-7 h-7 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-brand-primary" />
              </div>
              <p className="text-xs text-stone-800 font-medium leading-normal flex-grow">
                {notification}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Viewport Main Container */}

      {/* Dynamic Main Viewport Container */}
      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            {renderTabContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Footer */}
      <Footer setCurrentTab={setCurrentTab} />
    </div>
  );
}
