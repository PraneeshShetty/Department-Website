import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI-Powered Healthcare Diagnostics",
    description: "Developing machine learning models to assist doctors in diagnosing diseases from medical images with higher accuracy and efficiency.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=500&auto=format&fit=crop",
    category: "Healthcare",
    status: "Ongoing"
  },
  {
    id: 2,
    title: "Smart City Infrastructure Optimization",
    description: "Using AI to optimize traffic flow, energy usage, and public transportation networks in urban environments.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=500&auto=format&fit=crop",
    category: "Urban Planning",
    status: "Ongoing"
  },
  {
    id: 3,
    title: "Advanced Natural Language Processing Framework",
    description: "Building a next-generation NLP framework capable of understanding context, sentiment, and cultural nuances across multiple languages.",
    image: "https://images.unsplash.com/photo-1655720828018-edd2daec959b?q=80&w=500&auto=format&fit=crop",
    category: "NLP",
    status: "Completed"
  },
  {
    id: 4,
    title: "Ethical AI Decision Systems",
    description: "Creating AI systems with built-in ethical frameworks to ensure fair and unbiased decision-making in sensitive applications.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=500&auto=format&fit=crop",
    category: "Ethics",
    status: "Ongoing"
  },
  {
    id: 5,
    title: "Quantum Computing Algorithms",
    description: "Researching and developing quantum algorithms for solving complex computational problems in cryptography, optimization, and simulation.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=500&auto=format&fit=crop",
    category: "Quantum Computing",
    status: "Early Stage"
  },
  {
    id: 6,
    title: "Autonomous Robotics System",
    description: "Developing advanced robotics systems capable of learning from their environment and adapting to unexpected scenarios autonomously.",
    image: "https://images.unsplash.com/photo-1639321905636-c1c0e71fb467?q=80&w=500&auto=format&fit=crop",
    category: "Robotics",
    status: "Ongoing"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-blue-950 to-black relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Research & Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-blue-200 max-w-3xl mx-auto">
            Discover our cutting-edge research projects that are pushing the boundaries of AI and software engineering,
            led by our talented faculty and students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-blue-900/20 backdrop-blur-sm border-blue-800/50 hover:border-blue-400/50 transition-all duration-300 group overflow-hidden h-full flex flex-col"
            >
              <CardContent className="p-0 flex-1 flex flex-col">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-blue-800/80 backdrop-blur-sm text-blue-100 text-xs font-semibold px-3 py-1 rounded-full">
                    {project.status}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent"></div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-blue-400 bg-blue-400/10 px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-blue-200 text-sm mb-5 flex-1">
                    {project.description}
                  </p>
                  <Link href={`/projects/${project.id}`} className="mt-auto">
                    <Button
                      variant="outline"
                      className="w-full border-blue-500/30 text-blue-100 hover:bg-blue-700/30 group-hover:border-blue-400 flex items-center justify-center gap-2"
                    >
                      <span>View Project</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/projects">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
              Explore All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
