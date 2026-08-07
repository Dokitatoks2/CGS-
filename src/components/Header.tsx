import { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, ShoppingCart, Sparkles, Check, ChevronDown, FolderKanban, GraduationCap, Video, Mail } from 'lucide-react';
import { Service } from '../types';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  cart: Service[];
  removeFromCart: (id: string) => void;
  checkoutCart: () => void;
}

export default function Header({ currentTab, setCurrentTab, cart, removeFromCart, checkoutCart }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderSuccess, setIsOrderSuccess] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(true);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close resources dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsResourcesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const topNavItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
  ];

  const resourceSubItems = [
    {
      label: 'Project',
      id: 'projects',
      desc: 'Research initiatives & client case studies',
      icon: FolderKanban,
    },
    {
      label: 'Capacity Development',
      id: 'capacity',
      desc: 'Interactive lab & cohort mentorship circles',
      icon: GraduationCap,
    },
    {
      label: 'Audiovisuals',
      id: 'audiovisuals',
      desc: 'Keynote lectures, podcasts & media library',
      icon: Video,
    },
  ];

  const isResourceActive = ['projects', 'capacity', 'audiovisuals'].includes(currentTab);

  const handleNavClick = (id: string) => {
    setCurrentTab(id);
    setIsMobileMenuOpen(false);
    setIsResourcesOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCheckout = () => {
    setIsOrderSuccess(true);
    setTimeout(() => {
      checkoutCart();
      setIsOrderSuccess(false);
      setIsCartOpen(false);
    }, 2000);
  };

  const totalCartValue = cart.reduce((acc, curr) => {
    if (curr.price.startsWith('$')) {
      const numericPrice = parseInt(curr.price.replace(/[^0-9]/g, ''), 10);
      return acc + (isNaN(numericPrice) ? 0 : numericPrice);
    }
    return acc;
  }, 0);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-[#FAF6F0]/90 backdrop-blur-md border-b border-stone-200/80 py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
      id="main-app-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Brand Design */}
          <div
            className="flex items-center gap-2.5 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-purple overflow-hidden shadow-sm">
              <span className="font-display font-bold text-white text-lg">C</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-stone-900 tracking-tight leading-none text-base group-hover:text-brand-primary transition-colors">
                CAPE GLOBAL
              </span>
              <span className="font-mono text-[9px] text-stone-500 tracking-widest uppercase mt-0.5">
                SOLUTIONS
              </span>
            </div>
          </div>

          {/* Desktop Key Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {topNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group ${
                  currentTab === item.id
                    ? 'text-stone-900 font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <span>{item.label}</span>
                {/* Underline current page marker */}
                {currentTab === item.id && (
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-brand-primary rounded-full" />
                )}
                {/* Hover line accent */}
                {currentTab !== item.id && (
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-stone-900/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300" />
                )}
              </button>
            ))}

            {/* Resources Dropdown Trigger */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group flex items-center gap-1.5 ${
                  isResourceActive
                    ? 'text-stone-900 font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <span>Resources</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isResourcesOpen ? 'rotate-180 text-brand-primary' : 'text-stone-500'}`} />
                {/* Active marker for any resource tab */}
                {isResourceActive && (
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-brand-primary rounded-full" />
                )}
              </button>

              {/* Resources Dropdown Menu */}
              {isResourcesOpen && (
                <div className="absolute left-0 mt-1 w-72 rounded-2xl bg-white border border-stone-200 p-2 shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-2 border-b border-stone-100 mb-1">
                    <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block font-semibold">
                      Knowledge & Media Portals
                    </span>
                  </div>
                  <div className="space-y-1">
                    {resourceSubItems.map((sub) => {
                      const IconComp = sub.icon;
                      const isSubActive = currentTab === sub.id;
                      return (
                        <button
                          key={sub.id}
                          onClick={() => handleNavClick(sub.id)}
                          className={`w-full p-2.5 rounded-xl text-left transition-all flex items-start gap-3 group ${
                            isSubActive
                              ? 'bg-brand-primary/10 border border-brand-primary/20'
                              : 'hover:bg-stone-50'
                          }`}
                        >
                          <div className={`p-2 rounded-lg shrink-0 mt-0.5 ${
                            isSubActive ? 'bg-brand-primary text-white' : 'bg-stone-100 text-stone-700 group-hover:bg-brand-primary/10 group-hover:text-brand-primary'
                          }`}>
                            <IconComp className="w-4 h-4" />
                          </div>
                          <div className="space-y-0.5">
                            <span className={`text-xs font-display font-semibold block ${
                              isSubActive ? 'text-brand-primary' : 'text-stone-900 group-hover:text-brand-primary'
                            }`}>
                              {sub.label}
                            </span>
                            <span className="text-[10px] text-stone-500 font-normal leading-tight block">
                              {sub.desc}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right hand Actions (Cart) */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Shopping Cart Button */}
            <div className="relative">
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="p-2.5 rounded-xl bg-white border border-stone-200 hover:bg-stone-50 hover:border-brand-primary/40 text-stone-700 hover:text-stone-900 transition-all relative shadow-xs"
                id="cart-toggle-btn"
                title="Service Request Basket"
              >
                <ShoppingCart className="w-4 h-4" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-brand-purple text-[10px] font-bold text-white flex items-center justify-center animate-bounce">
                    {cart.length}
                  </span>
                )}
              </button>

              {/* Cart Dropdown Panel */}
              {isCartOpen && (
                <div className="absolute right-0 mt-3 w-80 rounded-xl bg-white border border-stone-200 p-4 shadow-2xl z-50">
                  <div className="flex justify-between items-center border-b border-stone-100 pb-3 mb-3">
                    <span className="font-display font-semibold text-stone-900 text-sm">Services Request Box</span>
                    <span className="font-mono text-xs text-stone-500">{cart.length} item(s)</span>
                  </div>

                  {cart.length === 0 ? (
                    <div className="py-6 text-center text-xs text-stone-500">
                      No services added yet. Browse our professional packages to request alignment.
                    </div>
                  ) : (
                    <div className="space-y-3 max-h-60 overflow-y-auto mb-4">
                      {cart.map((item) => (
                        <div key={item.id} className="flex justify-between items-start gap-2 text-xs bg-stone-50 p-2 rounded-lg border border-stone-200/80">
                          <div className="space-y-0.5">
                            <p className="font-medium text-stone-900 truncate max-w-[180px]">{item.title}</p>
                            <p className="text-[10px] text-brand-primary font-mono">{item.category} • {item.price}</p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-stone-400 hover:text-red-500 transition-colors"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}

                      <div className="border-t border-stone-100 pt-3 mt-2 flex justify-between items-center text-xs font-semibold">
                        <span className="text-stone-500">Total Simulated Value:</span>
                        <span className="text-stone-900 text-sm font-bold">${totalCartValue.toLocaleString()}</span>
                      </div>
                    </div>
                  )}

                  {cart.length > 0 && (
                    <button
                      onClick={handleCheckout}
                      disabled={isOrderSuccess}
                      className="w-full py-2 px-4 rounded-lg bg-brand-primary hover:bg-brand-primary/95 text-xs text-white font-medium transition-colors flex justify-center items-center gap-1.5 shadow-sm"
                    >
                      {isOrderSuccess ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-white" />
                          <span>Request Confirmed!</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Submit Formal Quote Request</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Action Icon */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Mini Cart for Mobile */}
            <button
              onClick={() => {
                handleNavClick('services');
                setIsCartOpen(true);
              }}
              className="p-2.5 rounded-xl bg-white border border-stone-200 text-stone-700 relative shadow-xs"
            >
              <ShoppingCart className="w-4 h-4" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-brand-purple text-[8px] font-bold text-white flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white border border-stone-200 text-stone-700 hover:text-stone-900 transition-all shadow-xs"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#FAF6F0] border-b border-stone-200 px-4 py-6 space-y-4 shadow-2xl">
          <nav className="flex flex-col gap-1.5">
            {topNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`py-2.5 px-4 rounded-lg text-left text-sm font-medium transition-all ${
                  currentTab === item.id
                    ? 'bg-brand-primary/15 border-l-4 border-brand-primary text-brand-primary font-semibold pl-5'
                    : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200/50'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Mobile Resources Collapsible Section */}
            <div className="pt-2 pb-1 border-t border-stone-200/80">
              <button
                onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
                className="w-full flex items-center justify-between py-2 px-4 text-xs font-mono font-semibold text-stone-500 uppercase tracking-wider"
              >
                <span>Resources</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isMobileResourcesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMobileResourcesOpen && (
                <div className="mt-1 ml-2 space-y-1 border-l-2 border-stone-200 pl-2">
                  {resourceSubItems.map((sub) => {
                    const IconComp = sub.icon;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => handleNavClick(sub.id)}
                        className={`w-full py-2 px-3 rounded-lg text-left text-xs font-medium transition-all flex items-center gap-2.5 ${
                          currentTab === sub.id
                            ? 'bg-brand-primary/15 text-brand-primary font-semibold'
                            : 'text-stone-700 hover:bg-stone-200/50'
                        }`}
                      >
                        <IconComp className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                        <span>{sub.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          <div className="border-t border-stone-200 pt-4 flex flex-col gap-3">
            <button
              onClick={() => handleNavClick('contact')}
              className={`w-full py-3 px-4 rounded-xl text-center text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-xs ${
                currentTab === 'contact'
                  ? 'bg-brand-primary text-white'
                  : 'bg-white border border-stone-300 text-stone-900 hover:bg-stone-50'
              }`}
            >
              <Mail className="w-4 h-4 text-brand-primary" />
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
