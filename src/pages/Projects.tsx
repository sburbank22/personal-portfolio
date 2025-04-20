import Project1 from "../assets/TODO_app.jpg";
import Project2 from "../assets/Exercise_App.jpg";
import Project3 from "../assets/Style_Trial.jpg";

function Projects() {
  const projectData = [
    {
      title: "TODO App",
      description:
        "A mobile To-do app that I designed in Figma for users who need to keep track of errands and such. I later turned this into a simple app, where users can add, delete, and manage their tasks.",
      image: Project1,
      link: "https://www.figma.com/design/x0bWz9PdoeZTETAeV0qfuc/TODO-App-Design?t=btmY1EFqDv7SkjYp-0",
      alt: "Screenshot of TODO mobile app design",
    },
    {
      title: "Exercise App",
      description:
        "A mobile exercise app I designed in Figma and turned into an app. It includes features that are useful for many different types of workouts and is simple to use.",
      image: Project2,
      link: "https://www.figma.com/design/jP77azDMMw66pqZIjxgv6u/Exercise-App?node-id=0-1&p=f&t=IPz25EKIDfjgIr41-0",
      alt: "Screenshot of Exercise mobile app design",
    },
    {
      title: "Style Trial App",
      description:
        "Style Trial is a fashion app I designed using AR features so users can virtually try on clothes and shop online. This app is probably my favorite one that i've done.",
      image: Project3,
      link: "https://www.figma.com/design/jqWU5Yl759ngYn5pZ7GFG3/Low-Fidelity-Paper-Prototype?t=IPz25EKIDfjgIr41-0",
      alt: "Screenshot of Style Trial app prototype",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-green-700 to-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-green-100 text-center mb-4">
          My Projects
        </h1>
        <p className="text-lg text-white text-center mb-12">
          Here are a few things I’ve built recently:
        </p>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm border border-green-300 rounded-3xl shadow-lg p-8 min-h-[550px] flex flex-col justify-between transition-transform hover:scale-105"
             >
             <img
             src={project.image}
             alt={project.alt}
             className="w-full h-72 object-cover rounded-2xl mb-4"
              />
              <div className="flex-grow">
                <h2 className="text-2xl font-semibold text-green-800 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 font-medium hover:underline hover:text-green-900 transition-colors"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
