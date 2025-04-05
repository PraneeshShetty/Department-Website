import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import Link from 'next/link';
import { Mail, Globe, BookOpen } from 'lucide-react';

// Faculty member data
const facultyMembers = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    position: 'Department Head',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300&h=300&auto=format&fit=crop',
    specialization: 'Machine Learning & Computer Vision',
    email: 'sarah.johnson@example.edu',
    website: 'https://example.edu/sjohnson',
    publications: 45
  },
  {
    id: 2,
    name: 'Prof. Michael Chen',
    position: 'Associate Professor',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&h=300&auto=format&fit=crop',
    specialization: 'Natural Language Processing',
    email: 'michael.chen@example.edu',
    website: 'https://example.edu/mchen',
    publications: 32
  },
  {
    id: 3,
    name: 'Dr. Olivia Rodriguez',
    position: 'Assistant Professor',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&h=300&auto=format&fit=crop',
    specialization: 'Software Engineering & DevOps',
    email: 'olivia.rodriguez@example.edu',
    website: 'https://example.edu/orodriguez',
    publications: 27
  },
  {
    id: 4,
    name: 'Dr. Jamal Williams',
    position: 'Associate Professor',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300&auto=format&fit=crop',
    specialization: 'Cybersecurity & Blockchain',
    email: 'jamal.williams@example.edu',
    website: 'https://example.edu/jwilliams',
    publications: 38
  },
  {
    id: 5,
    name: 'Prof. Ananya Patel',
    position: 'Professor',
    image: 'https://images.unsplash.com/photo-1619280770537-9dda53a86a83?q=80&w=300&h=300&auto=format&fit=crop',
    specialization: 'Human-Computer Interaction',
    email: 'ananya.patel@example.edu',
    website: 'https://example.edu/apatel',
    publications: 56
  },
  {
    id: 6,
    name: 'Dr. David Kim',
    position: 'Assistant Professor',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300&h=300&auto=format&fit=crop',
    specialization: 'Data Science & Big Data Analytics',
    email: 'david.kim@example.edu',
    website: 'https://example.edu/dkim',
    publications: 19
  }
];

export default function FacultySection() {
  return (
    <section id="faculty" className="py-24 bg-gradient-to-b from-black to-blue-950 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.1),transparent_70%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Faculty</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-blue-200 max-w-3xl mx-auto">
            Meet our exceptional team of educators and researchers who are dedicated to advancing the field
            of artificial intelligence and software engineering through teaching and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((member) => (
            <Card
              key={member.id}
              className="bg-blue-900/20 backdrop-blur-sm border-blue-800/50 hover:border-blue-400/50 transition-all duration-300 overflow-hidden group"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  {/* Faculty member image */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-60 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/30 to-transparent"></div>

                  {/* Name and position */}
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-blue-300 text-sm">{member.position}</p>
                  </div>
                </div>

                <div className="p-6 pt-4">
                  <p className="text-blue-100 text-sm mb-4">{member.specialization}</p>

                  <div className="space-y-2 mb-5">
                    <div className="flex items-center text-blue-300 text-sm">
                      <Mail className="w-4 h-4 mr-2" />
                      <a href={`mailto:${member.email}`} className="hover:text-blue-100 transition-colors">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center text-blue-300 text-sm">
                      <Globe className="w-4 h-4 mr-2" />
                      <a href={member.website} target="_blank" rel="noopener noreferrer" className="hover:text-blue-100 transition-colors">
                        Personal Website
                      </a>
                    </div>
                    <div className="flex items-center text-blue-300 text-sm">
                      <BookOpen className="w-4 h-4 mr-2" />
                      <span>{member.publications} Publications</span>
                    </div>
                  </div>

                  <Link href={`/faculty/${member.id}`}>
                    <Button
                      variant="outline"
                      className="w-full border-blue-500/30 text-blue-100 hover:bg-blue-700/30 group-hover:border-blue-400"
                    >
                      View Profile
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/faculty">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              View All Faculty Members
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
