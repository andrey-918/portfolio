import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="min-h-screen bg-[#f5f1ed] py-20">
      <div className="about-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Photo */}
          <div className="about-photo-container">
            <div className="bg-white inline-block px-4 py-2 mb-8">
              <span className="about-badge-text">Creative Presentation</span>
            </div>
            <div className="relative h-[600px] overflow-hidden">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1604046744901-d38344fd6129?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBvdXRkb29yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzODk1OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Portrait"
                className="about-photo"
              />
              <div className="about-accent-dot" />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-6xl lg:text-7xl tracking-tight leading-none mb-8">
              HELLO, I'M<br />
              FRANCOIS<br />
              MERCER
            </h2>
            
            <p className="about-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="bg-black inline-block px-4 py-2 mt-8">
              <span className="text-white text-xs">May 09, 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
