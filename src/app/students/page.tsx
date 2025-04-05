import { Card, CardContent } from '@/components/ui/card';

const students = [
  {
    name: "Jessica Thompson",
    program: "B.Tech in AI & Software Engineering",
    year: "4th Year",
    achievements: "Class Representative, Google Summer of Code 2024 participant"
  },
  {
    name: "Michael Singh",
    program: "M.Tech in AI & Machine Learning",
    year: "2nd Year",
    achievements: "Research Assistant, Published paper at ICML 2024"
  },
  {
    name: "Aisha Patel",
    program: "B.Tech in AI & Software Engineering",
    year: "3rd Year",
    achievements: "Hackathon winner, Open source contributor"
  },
  {
    name: "Carlos Rodriguez",
    program: "Ph.D in Natural Language Processing",
    year: "2nd Year",
    achievements: "Research Fellowship, 2 journal publications"
  },
  {
    name: "Emily Wu",
    program: "B.Tech in AI & Software Engineering",
    year: "2nd Year",
    achievements: "Web Development Club Lead, Startup founder"
  },
  {
    name: "David Johnson",
    program: "M.Tech in AI & Machine Learning",
    year: "1st Year",
    achievements: "Dean's List, Student mentor"
  }
];

export default function StudentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-black to-blue-950 pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Students</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-blue-200 max-w-3xl mx-auto">
            Meet our talented students who are pushing the boundaries of technology
            and innovation in the field of artificial intelligence and software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {students.map((student, index) => (
            <Card
              key={index}
              className="bg-blue-900/20 backdrop-blur-sm border-blue-800/50 hover:border-blue-400/50 transition-all duration-300"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{student.name}</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-blue-300">{student.program}</p>
                  <p className="text-blue-400 text-sm">{student.year}</p>
                </div>
                <p className="text-blue-200 text-sm border-t border-blue-800/50 pt-4">
                  <span className="font-medium text-blue-300 block mb-1">Achievements:</span>
                  {student.achievements}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-blue-900/10 border border-blue-800/30 rounded-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">Student Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-200 mb-2">Academic Resources</h3>
              <ul className="text-blue-300 space-y-2">
                <li>• Course Registration</li>
                <li>• Library Access</li>
                <li>• Research Opportunities</li>
                <li>• Mentorship Programs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-200 mb-2">Student Activities</h3>
              <ul className="text-blue-300 space-y-2">
                <li>• AI Club</li>
                <li>• Coding Competitions</li>
                <li>• Hackathons</li>
                <li>• Industry Workshops</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
