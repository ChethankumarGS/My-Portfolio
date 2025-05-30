import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TailwindCSS",
    "EJS",
    "React",
    "BootStrap"
  ];

  const backendSkills = ["Node.js","Express.js", "MySQL", "MongoDB"];

  const lang =["C","C++","Java","Python",];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all items-center">
                <h3 className="text-xl font-bold mb-4"> Languages </h3>
                <div className="flex flex-wrap gap-2">
                  {lang.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

               

            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong className="font-bold mb-8 bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent"> B.E in Information Science and Engineering </strong> -Dayananda Sagar College of Engineering
                  (2022-2026)
                </li>
                <li>
                 <span className="font-bold mb-8 bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">Relevant Coursework:</span>  Data Structures, Web Development, Database management system , Computer Networks,Cyber Security
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Activities </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold font-bold mb-8 bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent" >
                    {" "}
                   Successfully completed a comprehensive Full Stack Web Development program at Apna College, 
                    mastering MERN stack technologies.  {" "}
                  </h4>
                 
                </div>

                <div>
                  <h4 className="font-semibold font-bold mb-8 bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
                    {" "}
                    Successfully attended multiple training from CIL on communication skills, creative Thinking, and dynamic 
                   Skills Integrated Program. {" "}
                  </h4>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};