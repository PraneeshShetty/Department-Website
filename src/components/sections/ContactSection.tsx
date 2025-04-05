'use client';

import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black to-blue-950 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.1),transparent_70%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-blue-200 max-w-3xl mx-auto">
            Have questions about our programs, research, or admission? Get in touch with us using the form below
            or visit our department in person.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:w-2/3">
            <Card className="bg-blue-900/20 backdrop-blur-sm border-blue-800/50 overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl text-white font-semibold mb-6">Send us a message</h3>

                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-blue-100 text-sm">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        className="bg-blue-950/50 border-blue-700/50 text-white placeholder:text-blue-400/70 focus-visible:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-blue-100 text-sm">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john.doe@example.com"
                        className="bg-blue-950/50 border-blue-700/50 text-white placeholder:text-blue-400/70 focus-visible:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-blue-100 text-sm">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Admission Inquiry"
                      className="bg-blue-950/50 border-blue-700/50 text-white placeholder:text-blue-400/70 focus-visible:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-blue-100 text-sm">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message here..."
                      rows={5}
                      className="bg-blue-950/50 border-blue-700/50 text-white placeholder:text-blue-400/70 focus-visible:ring-blue-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="lg:w-1/3 flex flex-col gap-5">
            <Card className="bg-blue-900/20 backdrop-blur-sm border-blue-800/50 overflow-hidden flex-1">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl text-white font-semibold mb-6">Contact Information</h3>

                <div className="space-y-5">
                  <div className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-800/70 flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-blue-300" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-300 mb-1">Email</p>
                      <a
                        href="mailto:aise@example.edu"
                        className="text-white hover:text-blue-300 transition-colors"
                      >
                        aise@example.edu
                      </a>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-800/70 flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-blue-300" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-300 mb-1">Phone</p>
                      <a
                        href="tel:+1234567890"
                        className="text-white hover:text-blue-300 transition-colors"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-800/70 flex items-center justify-center mr-4">
                      <MapPin className="h-5 w-5 text-blue-300" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-300 mb-1">Address</p>
                      <p className="text-white">
                        Department of AI & SE<br />
                        University Campus<br />
                        123 Education Street<br />
                        City, State 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-800/70 flex items-center justify-center mr-4">
                      <Clock className="h-5 w-5 text-blue-300" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-300 mb-1">Office Hours</p>
                      <p className="text-white">
                        Monday - Friday<br />
                        9:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-900/20 backdrop-blur-sm border-blue-800/50 overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl text-white font-semibold mb-4">Visit Us</h3>
                <div className="bg-blue-950 aspect-video rounded-md overflow-hidden border border-blue-800/50">
                  {/* This would be an embedded map in a real implementation */}
                  <div className="h-full w-full flex items-center justify-center">
                    <p className="text-blue-300 text-sm">Interactive Map would be here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
