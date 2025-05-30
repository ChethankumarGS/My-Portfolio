import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen, setMenuOpen]);

  return (
    <div
      className={`fixed inset-0 bg-[rgba(10,10,10,0.95)] z-30 flex flex-col items-center justify-center
                 transition-all duration-300 ease-in-out backdrop-blur-lg
                 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <nav className="flex flex-col items-center space-y-8">
        {["home", "about", "projects", "contact"].map((item, index) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-white transform transition-all duration-300
                      hover:text-blue-500 hover:scale-110
                      ${menuOpen 
                        ? "opacity-100 translate-y-0" 
                        : "opacity-0 translate-y-5"}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </nav>
    </div>
  );
};