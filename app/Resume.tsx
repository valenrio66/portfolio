export default function Resume() {
  return (
    <div className="w-full min-h-screen bg-black p-4 md:p-8 flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-96 bg-gray-900 text-white flex flex-col p-8 shadow-2xl rounded-3xl h-fit">
        <div className="flex flex-col items-center text-center mb-10">
          <img
            alt="Profile"
            src="valen.jpg"
            className="size-48 rounded-full border-4 border-gray-700 shadow-2xl mb-6 object-cover"
          />
          <h1 className="text-3xl font-bold tracking-tight">Valen Rionald</h1>
          <h2 className="text-amber-500 font-medium mt-2 text-lg">
            Backend Developer
          </h2>
        </div>

        <div className="flex flex-col space-y-6 w-full px-4">
          <div className="border-b border-gray-700 pb-4">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
              Email
            </h3>
            <p className="text-sm font-medium hover:text-amber-500 transition-colors break-all">
              valenrio.work@gmail.com
            </p>
          </div>

          <div className="border-b border-gray-700 pb-4">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
              Address
            </h3>
            <p className="text-sm font-medium leading-relaxed">
              Bekasi City, West Java, Indonesia
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-gray-900 p-6 md:p-12 flex flex-col lg:flex-row justify-start items-start space-y-12 lg:space-y-0 lg:space-x-12 rounded-3xl shadow-2xl text-white">
        <div className="flex-1 flex flex-col space-y-12 w-full">
          <div className="group">
            <h1 className="text-2xl font-bold text-white mb-4 border-b-4 border-amber-500 w-fit pb-1">
              Profile
            </h1>
            <p className="text-gray-300 leading-relaxed text-justify">
              Backend Developer with expertise in building scalable APIs and
              secure banking systems. Proficient in Golang, Python, PHP, and
              database management (PostgreSQL, MongoDB). Experienced in
              optimizing mobile banking infrastructure and delivering
              high-performance backend solutions.
            </p>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-white mb-4 border-b-4 border-amber-500 w-fit pb-1">
              Education
            </h1>
            <div className="mb-4">
              <h3 className="font-bold text-lg text-gray-100">
                Universitas Logistik dan Bisnis Internasional
              </h3>
              <p className="text-sm text-gray-400 italic mb-2">
                Bachelor's degree, Information Technology
              </p>
              <p className="text-gray-300 leading-relaxed">
                Oct 2020 - Jul 2024
              </p>
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-white mb-6 border-b-4 border-amber-500 w-fit pb-1">
              Work Experience
            </h1>

            <div className="mb-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline mb-2">
                <h3 className="font-bold text-lg text-gray-100">
                  IT Developer (Freelance)
                </h3>
                <span className="text-sm text-gray-300 font-medium bg-gray-800 px-2 py-1 rounded border border-gray-700 mt-1 sm:mt-0">
                  May 2025 - Oct 2025
                </span>
              </div>
              <h4 className="text-amber-500 font-semibold text-sm mb-3">
                PT Sarana Legalitas Indonesia
              </h4>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-300 text-sm leading-relaxed">
                <li>
                  Developed "EFidusia", a web application for legal document
                  management using{" "}
                  <strong className="text-white">Python Django</strong> and{" "}
                  <strong className="text-white">PostgreSQL</strong>.
                </li>
                <li>
                  Designed efficient data models and workflows to handle
                  per-document legality processes.
                </li>
                <li>
                  Set up CI/CD pipelines with{" "}
                  <strong className="text-white">Docker</strong> for automated
                  testing and managed deployment on
                  <strong className="text-white"> Ubuntu</strong> servers.
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline mb-2">
                <h3 className="font-bold text-lg text-gray-100">
                  Back-End Developer
                </h3>
                <span className="text-sm text-gray-300 font-medium bg-gray-800 px-2 py-1 rounded border border-gray-700 mt-1 sm:mt-0">
                  2024 - Current
                </span>
              </div>
              <h4 className="text-amber-500 font-semibold text-sm mb-3">
                PT Bank Raya Indonesia
              </h4>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-300 text-sm leading-relaxed">
                <li>
                  Built and maintained scalable APIs using{" "}
                  <strong className="text-white">Golang</strong>,{" "}
                  <strong className="text-white">PostgreSQL</strong>, and{" "}
                  <strong className="text-white">Redis</strong>.
                </li>
                <li>
                  Contributed to Raya Mobile App features including personal
                  service summary, email delivery system, and flexible Paylater
                  payment options.
                </li>
                <li>
                  Developed an Operational Dashboard specifically for monitoring
                  Paylater services.
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline mb-2">
                <h3 className="font-bold text-lg text-gray-100">
                  Back-End Developer
                </h3>
                <span className="text-sm text-gray-300 font-medium bg-gray-800 px-2 py-1 rounded border border-gray-700 mt-1 sm:mt-0">
                  2023 - 2024
                </span>
              </div>
              <h4 className="text-amber-500 font-semibold text-sm mb-3">
                Universitas Logistik dan Bisnis Internasional
              </h4>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-300 text-sm leading-relaxed">
                <li>
                  Created various systems including an Employee Attendance
                  ChatBot, Internal Audit System, and Donation Management
                  System.
                </li>
                <li>
                  Enhanced existing HR Information Systems and Academic
                  Dashboards using{" "}
                  <strong className="text-white">Golang (Fiber)</strong> and{" "}
                  <strong className="text-white">Python</strong>.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline mb-2">
                <h3 className="font-bold text-lg text-gray-100">
                  Back-End Developer
                </h3>
                <span className="text-sm text-gray-300 font-medium bg-gray-800 px-2 py-1 rounded border border-gray-700 mt-1 sm:mt-0">
                  2022 - 2023
                </span>
              </div>
              <h4 className="text-amber-500 font-semibold text-sm mb-3">
                Museum Geologi Bandung
              </h4>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-300 text-sm leading-relaxed">
                <li>
                  Developed an Inventory Management System to digitize and
                  manage museum collection data.
                </li>
                <li>
                  Built high-performance RESTful APIs using{" "}
                  <strong className="text-white">Golang (Gin)</strong> and{" "}
                  <strong className="text-white">MongoDB</strong> NoSQL
                  database.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-80 flex flex-col space-y-10 border-t lg:border-t-0 lg:border-l border-gray-700 pt-8 lg:pt-0 lg:pl-8">
          <div>
            <h1 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
              Languages
            </h1>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>Indonesian</span>
                <span className="text-gray-500 font-light">Native</span>
              </li>
              <li className="flex justify-between">
                <span>English</span>
                <span className="text-gray-500 font-light">Intermediate</span>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
              Tech Skills
            </h1>
            <div className="flex flex-wrap gap-2">
              {[
                "Golang",
                "Next.js",
                "PHP",
                "Python",
                "MySQL",
                "PostgreSQL",
                "MongoDB",
                "Docker",
                "Git",
                "Redis",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-800 text-gray-300 text-sm font-medium rounded-md border border-gray-700 hover:border-amber-500 hover:text-amber-500 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
              Soft Skills
            </h1>
            <ul className="list-disc ml-5 space-y-1 text-gray-300">
              <li>Problem Solving</li>
              <li>Teamwork</li>
              <li>Critical Thinking</li>
              <li>Time Management</li>
            </ul>
          </div>

          <div>
            <h1 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
              Portfolio
            </h1>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/valenrio66"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 fill-gray-400 group-hover:fill-amber-500 transition-colors duration-300"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/valen-rionald-413643255/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 fill-gray-400 group-hover:fill-amber-500 transition-colors duration-300"
                >
                  <title>LinkedIn</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
