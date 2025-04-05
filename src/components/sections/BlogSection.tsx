import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Advancements in Transformer Architectures for Natural Language Processing",
    summary: "Exploring recent innovations in transformer-based models and how they're revolutionizing language understanding tasks.",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=500&auto=format&fit=crop",
    date: "March 10, 2025",
    readTime: "8 min read",
    author: "Dr. Sarah Johnson",
    authorRole: "Department Head"
  },
  {
    id: 2,
    title: "Ethical Considerations in Autonomous Systems Development",
    summary: "A deep dive into the ethical frameworks needed when developing AI systems that make critical decisions.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=500&auto=format&fit=crop",
    date: "February 28, 2025",
    readTime: "12 min read",
    author: "Prof. Michael Chen",
    authorRole: "Associate Professor"
  },
  {
    id: 3,
    title: "The Future of DevOps: AI-Powered Software Delivery",
    summary: "How artificial intelligence is transforming the software development lifecycle and enhancing DevOps practices.",
    image: "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?q=80&w=500&auto=format&fit=crop",
    date: "February 15, 2025",
    readTime: "6 min read",
    author: "Dr. Olivia Rodriguez",
    authorRole: "Assistant Professor"
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-gradient-to-b from-black to-blue-950 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_70%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Department Blog</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-blue-200 max-w-3xl mx-auto">
            Stay updated with the latest research, events, and insights from our department through our blog.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id} className="h-full">
              <Card className="h-full bg-blue-900/20 backdrop-blur-sm border-blue-800/50 hover:border-blue-400/50 transition-all duration-300 group overflow-hidden flex flex-col">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-900/30 to-transparent"></div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-3 mb-3">
                      <div className="flex items-center text-blue-300 text-xs">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center text-blue-300 text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-blue-200 text-sm mb-4 flex-1">
                      {post.summary}
                    </p>

                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center text-white mr-2">
                          <User className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-blue-100 text-sm font-medium">{post.author}</p>
                          <p className="text-blue-400 text-xs">{post.authorRole}</p>
                        </div>
                      </div>

                      <div className="w-8 h-8 rounded-full bg-blue-800/50 border border-blue-700/50 flex items-center justify-center text-blue-300 group-hover:bg-blue-700 group-hover:text-white transition-all">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
              Read More Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
