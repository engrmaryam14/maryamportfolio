import { useState, type ReactNode } from "react";

const CategoryIcons: Record<string, ReactNode> = {
  "Web & Frontend Development": (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--sec)]"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 8h.01"/><path d="M10 8h.01"/><path d="M14 8h.01"/></svg>
  ),
  "Backend, Cloud & Systems": (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--sec)]"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>
  ),
  "AI Tools & Prompt Engineering": (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--sec)]"><path d="M12 2v4"/><path d="m4.93 4.93 2.83 2.83"/><path d="M2 12h4"/><path d="m4.93 19.07 2.83-2.83"/><path d="M12 18v4"/><path d="m19.07 19.07-2.83-2.83"/><path d="M18 12h4"/><path d="m19.07 4.93-2.83 2.83"/><circle cx="12" cy="12" r="3"/></svg>
  ),
  "Graphic Design & Creative Media": (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--sec)]"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.992 6.012 17.49 2 12 2z"/></svg>
  ),
  "Core CS & Development Tools": (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--sec)]"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>("Web & Frontend Development");

  const skills = {
    "Web & Frontend Development": [
      "HTML5, CSS3, JavaScript, TypeScript (basic)",
      "React.js, Tailwind CSS, Bootstrap & Responsive UI",
      "React Native (Expo & React Native Web)",
      "WordPress Website Development & Theme/Plugin Customization",
    ],
    "Backend, Cloud & Systems": [
      "Python & C++ Object-Oriented Programming & Problem Solving",
      "Firebase Firestore (Realtime Data & Auth) & Supabase",
      "MySQL (basic) & RESTful APIs Integration",
      "Node.js (basic) & Cloud-Connected Databases",
    ],
    "AI Tools & Prompt Engineering": [
      "ChatGPT, Claude & Google Gemini with Advanced Prompt Engineering",
      "AI-Assisted Coding, Debugging & Rapid Prototyping",
      "GitHub Copilot for Accelerated Development Workflows",
      "Rigorous Code Review & Quality Verification of AI Outputs",
    ],
    "Graphic Design & Creative Media": [
      "Brand Identity & Custom Logo Design",
      "UI/UX Wireframing & Design with Figma & Canva",
      "Digital Asset Creation for Client Websites",
      "Professional Photo & Video Editing",
    ],
    "Core CS & Development Tools": [
      "Data Structures & Algorithms (DSA)",
      "Git & GitHub Version Control & Collaboration",
      "Postman API Testing, VS Code, Vercel Deployment & Basic SEO",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left w-full">
      <div className="flex items-center gap-2 mb-2">
        <span className="h-2 w-2 rounded-full bg-[var(--sec)] animate-pulse flex-shrink-0"></span>
        <span className="text-xs font-semibold tracking-wider uppercase text-[var(--sec)]">Core Competencies</span>
      </div>
      <h3 className="text-[var(--white)] text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6">
        What I Do
      </h3>
      <ul className="space-y-3 w-full">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="w-full bg-[#141418] rounded-xl sm:rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden hover:border-[#ffffff20]"
            >
              <div className="flex items-center gap-2.5 sm:gap-3 p-3.5 sm:p-4">
                <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-[#ffffff0a] border border-[#ffffff10] flex-shrink-0">
                  {CategoryIcons[category]}
                </div>
                <div className="flex items-center gap-2 flex-grow justify-between min-w-0">
                  <span className="text-sm sm:text-base md:text-lg font-medium text-[var(--white)] leading-snug break-words">
                    {category}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-[var(--white-icon)] transform transition-transform duration-300 flex-shrink-0 ${
                      openItem === category ? "rotate-180 text-[var(--sec)]" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 sm:px-5 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 sm:pb-5 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-xs sm:text-sm border-t border-[#ffffff0a] pt-3">
                  {items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[var(--sec)] mt-0.5">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
