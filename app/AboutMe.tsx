import Image from "next/image";

export default function AboutMe() {
  const services = [
    {
      title: "Clean Code & Architecture",
      description:
        "Writing maintainable, readable, and efficient code adhering to standard software architecture (SOLID, DRY). I ensure the system is modular, easy to test, and ready for future scaling.",
      icon: "/code-icon.svg",
      isImage: true,
    },
    {
      title: "High-Performance API",
      description:
        "Building robust RESTful APIs using Golang. I focus on concurrency, low latency, and secure data transmission to handle high-volume financial transactions or complex systems.",
      icon: "🚀",
      isImage: false,
    },
    {
      title: "Database Optimization",
      description:
        "Designing efficient database schemas with PostgreSQL. I handle complex queries, indexing strategies, and data integrity to ensure your application runs smoothly without bottlenecks.",
      icon: "🗄️",
      isImage: false,
    },
    {
      title: "DevOps & Cloud Deployment",
      description:
        "Setting up CI/CD pipelines using Docker and managing Ubuntu servers. I ensure your application is deployed automatically, securely, and runs with high availability.",
      icon: "🐳",
      isImage: false,
    },
    {
      title: "Fintech & Payment Solutions",
      description:
        "Developing secure financial modules like Paylater systems, billing logic, and transaction processing, ensuring data accuracy and security compliant with industry standards.",
      icon: "💳",
      isImage: false,
    },
  ];

  return (
    <>
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 flex justify-center">
              <div className="relative group">
                <div className="absolute top-4 left-4 w-full h-full border-4 border-amber-500 rounded-2xl -z-10 group-hover:top-2 group-hover:left-2 transition-all duration-300"></div>
                <img
                  alt="Profile"
                  src="valen-2.JPEG"
                  className="w-72 h-80 object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500 shadow-xl"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center items-start">
              <h2 className="text-amber-500 font-bold tracking-wider uppercase mb-2">
                About Me
              </h2>
              <h3 className="text-3xl font-bold mb-6">Valen Rionald</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Hello! I’m Valen Rionald, currently as a Backend Developer at
                Bank Raya with a passion for building scalable and secure
                systems. My experience includes developing APIs for mobile
                banking and creating various systems, reinforcing my skills in
                Golang, Python, PHP, and databases like PostgreSQL and MongoDB.
                I strive to learn and innovate within backend development,
                aiming to enhance user experiences. I'm open to connecting with
                professionals to collaborate on exciting projects in technology.
              </p>

              <div className="mb-8">
                <h4 className="font-semibold mb-3 text-sm text-gray-300">
                  Tech Stack:
                </h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "Golang", logo: "golang-logo.svg" },
                    { name: "Next.js", logo: "next-logo.svg" },
                    { name: "PHP", logo: "php-logo.svg" },
                    { name: "Python", logo: "python-logo.svg" },
                    { name: "MySQL", logo: "mysql-logo.svg" },
                    { name: "PostgreSQL", logo: "postgre-logo.svg" },
                    { name: "MongoDB", logo: "mongodb-logo.svg" },
                    { name: "Docker", logo: "docker-logo.svg" },
                    { name: "Git", logo: "git-logo.svg" },
                    { name: "Redis", logo: "redis-logo.svg" },
                  ].map((tech, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-amber-500 hover:text-amber-500 transition-colors cursor-default"
                    >
                      {tech.logo && (
                        <Image
                          src={tech.logo}
                          alt={tech.name + " logo"}
                          width={20}
                          height={20}
                          className="w-5 h-5 object-contain"
                        />
                      )}

                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="/cv_valen_rionald.pdf"
                download="cv_valen_rionald.pdf"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-amber-500/20 cursor-pointer inline-block text-center"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        <div className="w-full bg-gray-800 py-20">
          <div className="max-w-7xl mx-auto px-8 md:px-20">
            <div className="text-center mb-16">
              <h2 className="text-amber-500 font-bold tracking-wider uppercase mb-2">
                Services
              </h2>
              <h1 className="text-4xl font-bold text-white">What Can I Do</h1>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {services.map((service, index) => {
                return (
                  <div
                    key={index}
                    className="w-full md:w-[45%] lg:w-[30%] bg-gray-900 p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border border-gray-800 hover:border-amber-500/50 group flex flex-col items-start shadow-xl"
                  >
                    <div className="w-14 h-14 bg-gray-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors border border-gray-700 group-hover:border-amber-500">
                      {service.isImage ? (
                        <Image
                          src={service.icon}
                          alt={service.title}
                          width={32}
                          height={32}
                          className="w-8 h-8 object-contain"
                        />
                      ) : (
                        <span className="text-2xl">{service.icon}</span>
                      )}
                    </div>

                    <h1 className="text-xl font-bold mb-4 text-white">
                      {service.title}
                    </h1>

                    <h2 className="text-gray-400 leading-relaxed text-sm text-justify">
                      {service.description}
                    </h2>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
