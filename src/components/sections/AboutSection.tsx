import { Card, CardContent } from '../../components/ui/card';
import { GraduationCap, Code, BookOpen, Users, Microscope, Award } from 'lucide-react';

const features = [
  {
    icon: GraduationCap,
    title: 'World-Class Education',
    description: 'Our department offers cutting-edge curriculum designed by industry experts and leading academics.'
  },
  {
    icon: Code,
    title: 'Innovative Research',
    description: 'Pushing the boundaries of AI and software engineering through groundbreaking research projects.'
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Programs',
    description: 'From undergraduate to doctoral studies, we offer a complete range of specialized programs.'
  },
  {
    icon: Users,
    title: 'Expert Faculty',
    description: 'Learn from renowned professors and industry professionals with years of experience.'
  },
  {
    icon: Microscope,
    title: 'State-of-the-art Labs',
    description: 'Access to cutting-edge laboratories and computing resources for practical learning.'
  },
  {
    icon: Award,
    title: 'Career Opportunities',
    description: 'Strong industry connections providing excellent internship and job placement opportunities.'
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-blue-950 to-black relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Our Department</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-blue-200 max-w-3xl mx-auto">
            The Department of Information Science and Engineering at our college
            is dedicated to nurturing the next generation of innovators and leaders in the field
            of AI and software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="bg-blue-900/20 backdrop-blur-sm border-blue-800/50 hover:border-blue-700/50 transition-all duration-300 overflow-hidden group">
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mt-16 -mr-16 group-hover:bg-blue-500/10 transition-all duration-500"></div>
                  <div className="mb-4 text-blue-400 group-hover:text-blue-300 transition-colors">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-blue-200 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-20 bg-blue-900/10 border border-blue-800/30 rounded-xl p-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-blue-200 mb-4">
                To be a globally recognized center of excellence in artificial intelligence and
                software engineering education, research, and innovation, producing graduates who
                are leaders in technology and catalysts for positive societal change.
              </p>
              <h3 className="text-2xl font-bold text-white mt-6 mb-4">Our Mission</h3>
              <p className="text-blue-200">
                To provide a transformative educational experience that combines theoretical
                foundations with practical applications, foster groundbreaking research,
                and collaborate with industry partners to solve real-world problems through
                technology innovation.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-800/30">
                <p className="text-3xl md:text-4xl font-bold text-white">25+</p>
                <p className="text-blue-300 text-sm">Faculty Members</p>
              </div>
              <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-800/30">
                <p className="text-3xl md:text-4xl font-bold text-white">500+</p>
                <p className="text-blue-300 text-sm">Students</p>
              </div>
              <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-800/30">
                <p className="text-3xl md:text-4xl font-bold text-white">50+</p>
                <p className="text-blue-300 text-sm">Research Projects</p>
              </div>
              <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-800/30">
                <p className="text-3xl md:text-4xl font-bold text-white">95%</p>
                <p className="text-blue-300 text-sm">Placement Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
