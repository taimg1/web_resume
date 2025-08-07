import PhoneIcon from "./PhoneIcon";
import MailIcon from "./MailIcon";
import LocationIcon from "./LocationIcon";
import LinkedInIcon from "./LinkedInIcon";
import Section from "./Section";
import DatedEntry from "./DatedEntry";

const ResumeContent = () => {
  return (
    <div className="bg-gray-100 p-4 sm:p-8 font-sans print:block print-only">
      <div className="max-w-4xl mx-auto bg-white shadow-lg p-8 sm:p-12">
        {/* Header */}
        <header className="flex justify-between items-center pb-8 border-b border-gray-300">
          <h1 className="text-4xl font-bold text-gray-800">Oleh Sokalskyi</h1>
          <h2 className="text-xl font-light text-gray-600">
            Full-Stack Developer
          </h2>
        </header>

        <main className="mt-6">
          {/* Contact */}
          <section className="py-6 border-b border-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
              <div className="md:col-span-1">
                <h2 className="text-sm font-bold tracking-widest uppercase text-gray-600">
                  Contact
                </h2>
              </div>
              <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center text-gray-700">
                  <PhoneIcon />
                  <span>+380678380162</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <MailIcon />
                  <span>oleg.s2822@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <LocationIcon />
                  <span>Ostroh, Ukraine</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <LinkedInIcon />
                  <a
                    href="https://www.linkedin.com/in/oleh-sokalskyi-bb566227b/"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Profile */}
          <Section title="Profile" number="01">
            <p className="space-y-4">
              A motivated full-stack developer with over 2 years of experience
              in designing, developing, and maintaining web applications and ERP
              systems. Proficient in JavaScript, C#, ASP.NET Core, React, and
              Blazor. Passionate about learning new technologies and
              continuously improving development processes. Possesses strong
              teamwork, communication, and quick learning skills.
            </p>
          </Section>

          {/* Skills */}
          <Section title="Skills" number="02">
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-800 mb-1">
                  Programming Languages & Frameworks
                </h3>
                <p>
                  JavaScript, TypeScript, C#, Python, Dart, ASP.NET Core, React,
                  Blazor, Entity Framework, FastAPI
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">
                  Tools & Technologies
                </h3>
                <p>
                  VS Code, JetBrains IDEs (PyCharm, Rider, WebStorm), Postman,
                  Docker, Microsoft SQL Server, PostgreSQL, Redis, Git, REST
                  API, Pandas, Web Scraping, SQLAlchemy (ORM), Pydantic,
                  Alembic, LLMS & AI Integration
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Soft Skills</h3>
                <p>
                  Communication, adaptability, analytical thinking, teamwork
                </p>
              </div>
            </div>
          </Section>

          {/* Internship */}
          <Section title="Internship" number="03">
            <div className="space-y-4">
              <DatedEntry date="May 2024 - Jul 2024">
                <h3 className="font-bold text-gray-800">
                  BPI Ukraine - JavaScript Developer
                </h3>
                <ul className="list-none space-y-1 mt-1">
                  <li>
                    Participated in the development of an ERP system and gained
                    practical experience.
                  </li>
                  <li>
                    Worked under a mentor's guidance: fixing bugs and adding
                    minor functionalities.
                  </li>
                  <li>
                    Actively studied industry practices and coding standards.
                  </li>
                  <li>
                    Participated in migrating functionality to the mobile
                    version (React).
                  </li>
                </ul>
              </DatedEntry>
            </div>
          </Section>

          {/* Work Experience */}
          <Section title="Work Experience" number="04">
            <div className="space-y-4">
              <DatedEntry date="May 2024 - Present">
                <h3 className="font-bold text-gray-800">
                  BPI Ukraine - JavaScript Developer
                </h3>
                <ul className="list-none space-y-1 mt-1">
                  <li>
                    Participated in ERP system development and gained practical
                    experience.
                  </li>
                  <li>
                    Performed tasks of bug fixing and implementing minor
                    features under a mentor's supervision.
                  </li>
                  <li>
                    Became familiar with industry standards and best development
                    practices.
                  </li>
                </ul>
              </DatedEntry>
            </div>
          </Section>

          {/* Educational Projects */}
          <Section title="Projects" number="05">
            <div className="space-y-6">
              <DatedEntry date="Feb 2024 - Feb 2024">
                <h3 className="font-bold text-gray-800">
                  Pool Manager (API & UI)
                </h3>
                <p className="mt-1">
                  A system for managing pools and reservations.
                </p>
                <p className="text-xs text-gray-500">
                  Technologies: ASP.NET Core, Blazor, Bootstrap 5, SQL Server
                </p>
                <a
                  href="https://github.com/taimg1/PoolManager"
                  className="text-blue-600 hover:underline text-xs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </DatedEntry>
              <DatedEntry date="Oct 2023 - Dec 2023">
                <h3 className="font-bold text-gray-800">DDS Blog (API)</h3>
                <p className="mt-1">
                  A blog platform developed collaboratively with two other
                  developers.
                </p>
                <p className="text-xs text-gray-500">
                  Backend: C#, REST API, PostgreSQL, Redis, Docker. Frontend:
                  React, Tailwind, Material UI.
                </p>
                <div className="space-x-4">
                  <a
                    href="https://github.com/arthurduzhyy/react-blog"
                    className="text-blue-600 hover:underline text-xs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub UI
                  </a>
                  <a
                    href="https://github.com/olehSokalskyi/asp-net-blog"
                    className="text-blue-600 hover:underline text-xs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub API
                  </a>
                </div>
              </DatedEntry>
              <DatedEntry date="May 2024 - Jun 2024">
                <h3 className="font-bold text-gray-800">Game Scraper</h3>
                <p className="mt-1">
                  A game scraper using Google's LLM (Gemini) for data collection
                  and analysis.
                </p>
                <p className="text-xs text-gray-500">
                  Technologies: Python, FastAPI, SQLAlchemy, Pydantic, Gemini
                  LLM, Playwright, BeautifulSoup4, Pandas, Alembic.
                </p>
                <a
                  href="https://github.com/taimg1/game_platform_analyzer"
                  className="text-blue-600 hover:underline text-xs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </DatedEntry>
              <DatedEntry date="May 2024 - Jun 2024">
                <h3 className="font-bold text-gray-800">Evalix</h3>
                <p className="mt-1">
                  Web application for analysing CVs for job vacancies using AI.
                  Developed collaboratively with four other developers
                </p>
                <p className="text-xs text-gray-500">
                  Backend: C#, REST API, PostgreSQL, Docker, Python, FastAPI,
                  Pydantic, LLM. Frontend: React, Tailwind, Material tailwind,
                  Redux, Redux-Toolkit, Axios, Amplify.
                </p>
                <div className="space-x-4">
                  <a
                    href="https://github.com/CourseWork-HR-Asist/Evalix-UI"
                    className="text-blue-600 hover:underline text-xs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub UI
                  </a>
                  <a
                    href="https://github.com/CourseWork-HR-Asist/Evalix-API"
                    className="text-blue-600 hover:underline text-xs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub API
                  </a>
                </div>
              </DatedEntry>
            </div>
          </Section>

          {/* Education */}
          <Section title="Education" number="06">
            <DatedEntry date="Sep 2022 - Jun 2026">
              <h3 className="font-bold text-gray-800">
                National University of Ostroh Academy
              </h3>
              <p>Bachelor of Computer Science</p>
            </DatedEntry>
          </Section>

          {/* Languages */}
          <Section title="Languages" number="07">
            <ul className="list-none space-y-1">
              <li>
                <span className="mr-2">•</span>Ukrainian: Native
              </li>
              <li>
                <span className="mr-2">•</span>English: Intermediate
              </li>
            </ul>
          </Section>

          {/* Certificates */}
          <Section title="Certificates" number="08" isLast={true}>
            <div className="space-y-3">
              <DatedEntry date="Sep 2023 - Dec 2023">
                <p>
                  CS50: Introduction to Computer Science, Harvard University
                </p>
              </DatedEntry>
              <DatedEntry date="Feb 2024 - Feb 2024">
                <p>Introduction to Front-End Development, Meta (Coursera)</p>
              </DatedEntry>
              <DatedEntry date="Feb 2024 - Feb 2024">
                <p>Programming with JavaScript, Meta (Coursera)</p>
              </DatedEntry>
              <DatedEntry date="Feb 2024 - Mar 2024">
                <p>Version Control, Meta (Coursera)</p>
              </DatedEntry>
              <DatedEntry date="Mar 2024 - Mar 2024">
                <p>HTML and CSS in depth, Meta (Coursera)</p>
              </DatedEntry>
              <DatedEntry date="Mar 2024 - Apr 2024">
                <p>React Basics / Advanced React, Meta (Coursera)</p>
              </DatedEntry>
            </div>
          </Section>
        </main>
      </div>
    </div>
  );
};
export default ResumeContent;
