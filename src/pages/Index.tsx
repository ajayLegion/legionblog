
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Users, Zap, TrendingUp } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Rich Content",
      description: "Create and share engaging blog posts with rich text formatting and media support."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Community",
      description: "Connect with other writers and readers in our vibrant community."
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-600" />,
      title: "Fast & Responsive",
      description: "Lightning-fast performance with a responsive design that works on all devices."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-600" />,
      title: "Analytics",
      description: "Track your post performance and grow your audience with detailed insights."
    }
  ];

  const recentPosts = [
    {
      title: "Getting Started with React and TypeScript",
      excerpt: "Learn the fundamentals of building modern web applications.",
      tags: ["React", "TypeScript"],
      readTime: "5 min read"
    },
    {
      title: "Building Modern UIs with Tailwind CSS",
      excerpt: "Create beautiful, responsive interfaces with utility-first CSS.",
      tags: ["CSS", "Design"],
      readTime: "8 min read"
    },
    {
      title: "Database Design Best Practices",
      excerpt: "Essential principles for scalable database architecture.",
      tags: ["Database", "Backend"],
      readTime: "12 min read"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Share Your Story with the World
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Join our community of writers and readers. Create, discover, and engage with amazing content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/blog">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
                  Explore Blog <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                Start Writing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Platform?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide everything you need to create, share, and grow your content.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Latest Posts</h2>
              <p className="text-xl text-gray-600">Discover our most recent content</p>
            </div>
            <Link to="/blog">
              <Button variant="outline" size="lg">
                View All Posts <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.tags.map(tag => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Button variant="ghost" size="sm">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Join thousands of writers and readers who are already part of our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Sign Up Now
            </Button>
            <Link to="/blog">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg">
                Explore Content
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
