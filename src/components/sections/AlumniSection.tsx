import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import Link from 'next/link';
import { ExternalLink, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const alumni = [
  {
    id: 1,
    name: "Jennifer Lee",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&h=300&auto=format&fit=crop",
    graduation: "2020",
    degree: "B.Tech in AI & Machine Learning",
    company: "Google AI",
    position: "Senior Research Scientist",
    location: "Mountain View, CA",
    achievement: "Led development of a breakthrough computer vision algorithm now used in Google Photos."
  },
  {
    id: 2,
    name: "Raj Patel",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&h=300&auto=format&fit=crop",
    graduation: "2018",
    degree: "M.Tech in Software Engineering",
    company: "Microsoft",
    position: "Principal Software Architect",
    location: "Seattle, WA",
    achievement: "Received Microsoft MVP award for contributions to developer tools and open source projects."
  },
  {
    id: 3,
    name: "Sophia Martinez",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&h=300&auto=format&fit=crop",
    graduation: "2019",
    degree: "Ph.D in Natural Language Processing",
    company: "OpenAI",
    position: "Research Engineer",
    location: "San Francisco, CA",
    achievement: "Co-authored 5 papers published in top AI journals and contributed to language model innovations."
  },
  {
    id: 4,
    name: "Alex Johnson",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300&auto=format&fit=crop",
    graduation: "2017",
    degree: "B.Tech in Software Engineering",
    company: "Tesla",
    position: "Autopilot Software Engineer",
    location: "Palo Alto, CA",
    achievement: "Key contributor to Tesla's autonomous driving stack and vision-based object detection systems."
  }
];

export default function AlumniSection() {
  return (
    <section id="alumni" className="py-24 bg-gradient-to-b from-blue-950 to-black relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_60%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Alumni</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-blue-200 max-w-3xl mx-auto">
            Meet our successful graduates who are making significant contributions in the field of AI
            and software engineering around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {alumni.map((alumnus) => (
            <Card
              key={alumnus.id}
              className="bg-blue-900/20 backdrop-blur-sm border-blue-800/50 hover:border-blue-400/50 transition-all duration-300 group overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <div className="p-6 pb-0 flex justify-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-400 shadow-lg shadow-blue-500/20">
                      <img
                        src={alumnus.image}
                        alt={alumnus.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-white mb-1">{alumnus.name}</h3>

                    <div className="flex items-center justify-center text-blue-400 text-sm mb-4">
                      <Briefcase className="h-3 w-3 mr-1" />
                      <span>{alumnus.position}</span>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-blue-300 text-xs justify-center">
                        <GraduationCap className="h-3 w-3 mr-1 flex-shrink-0" />
                        <span>{alumnus.degree}, {alumnus.graduation}</span>
                      </div>

                      <div className="flex items-center text-blue-300 text-xs justify-center">
                        <Briefcase className="h-3 w-3 mr-1 flex-shrink-0" />
                        <span>{alumnus.company}</span>
                      </div>

                      <div className="flex items-center text-blue-300 text-xs justify-center">
                        <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                        <span>{alumnus.location}</span>
                      </div>
                    </div>

                    <div className="text-blue-200 text-xs px-2 mb-4">
                      "{alumnus.achievement}"
                    </div>

                    <Link href={`/alumni/${alumnus.id}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-blue-500/30 text-blue-100 hover:bg-blue-700/30 group-hover:border-blue-400 flex items-center justify-center gap-1"
                      >
                        <span>View Profile</span>
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-blue-900/10 border border-blue-800/30 rounded-lg p-8 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-white mb-4">Join Our Alumni Network</h3>
              <p className="text-blue-200 mb-4">
                Are you a graduate of our department? Connect with fellow alumni, mentor current students,
                and stay updated with the latest department news and events by joining our alumni network.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Register as Alumni
                </Button>
                <Button variant="outline" className="bg-transparent border-blue-500 text-blue-300 hover:bg-blue-900/50">
                  Alumni Benefits
                </Button>
              </div>
            </div>
            <div className="md:w-1/3 grid grid-cols-2 gap-4">
              <div className="text-center bg-blue-900/30 rounded-lg p-4 border border-blue-800/30">
                <p className="text-3xl font-bold text-white">5000+</p>
                <p className="text-blue-300 text-sm">Global Alumni</p>
              </div>
              <div className="text-center bg-blue-900/30 rounded-lg p-4 border border-blue-800/30">
                <p className="text-3xl font-bold text-white">45+</p>
                <p className="text-blue-300 text-sm">Countries</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/alumni">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
              Meet More Alumni
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
