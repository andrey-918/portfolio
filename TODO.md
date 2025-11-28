# TODO: Complete Mobile Layout Scaling

## Information Gathered
- All section headings use 3.75rem (60px) on mobile, too large
- Hero title uses 4.5rem (72px) on mobile, extremely large
- Image heights: About 600px, Education 700px, Projects 400px - too tall for mobile screens
- No mobile-specific breakpoints for font sizes and image dimensions

## Plan
- [ ] Update hero.css: Reduce .hero-h1 font-size on mobile to 2.5rem-3rem
- [ ] Update about.css: Reduce .about-content h2 font-size on mobile to 2.5rem-3rem, reduce .about-photo-wrapper height to 300-400px
- [ ] Update projects.css: Reduce .projects-h2 font-size on mobile to 2.5rem-3rem
- [ ] Update work-experience.css: Reduce .work-experience-title font-size on mobile to 2.5rem-3rem
- [ ] Update education.css: Reduce .education-h2 font-size on mobile to 2.5rem-3rem, reduce .education-photo-wrapper height to 300-400px
- [ ] Update contact.css: Check and adjust if needed
- [ ] Test all sections on mobile viewport

## Dependent Files
- frontend/src/styles/hero.css
- frontend/src/styles/about.css
- frontend/src/styles/projects.css
- frontend/src/styles/work-experience.css
- frontend/src/styles/education.css
- frontend/src/styles/contact.css

## Followup Steps
- [ ] Start dev server and test on mobile
- [ ] Adjust spacing and padding if needed
