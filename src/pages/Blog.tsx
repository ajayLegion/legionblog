
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for now - will be replaced with Supabase data
const mockPosts = [
  {
    id: 1,
    title: "Getting Started with React and TypeScript",
    excerpt: "Learn how to set up a modern React application with TypeScript for better development experience and type safety.",
    content: "Full content here...",
    author: "John Doe",
    publishedAt: "2024-01-15",
    readTime: "5 min read",
    tags: ["React", "TypeScript", "Web Development"],
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80"
  },
  {
    id: 2,
    title: "Building Modern UIs with Tailwind CSS",
    excerpt: "Discover how to create beautiful, responsive user interfaces using Tailwind CSS utility classes.",
    content: "Full content here...",
    author: "Jane Smith",
    publishedAt: "2024-01-12",
    readTime: "8 min read",
    tags: ["CSS", "Tailwind", "UI/UX"],
    coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
  },
  {
    id: 3,
    title: "Database Design Best Practices",
    excerpt: "Essential principles for designing scalable and maintainable database schemas.",
    content: "Full content here...",
    author: "Mike Johnson",
    publishedAt: "2024-01-10",
    readTime: "12 min read",
    tags: ["Database", "SQL", "Backend"],
    coverImage: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80"
  }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(mockPosts.flatMap(post => post.tags)));
  
  const filteredPosts = mockPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Blog</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Discover insights, tutorials, and stories from our community of developers and creators.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          {/* Tags Filter */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedTag === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTag(null)}
            >
              All
            </Button>
            {allTags.map(tag => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Featured Post</h2>
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={filteredPosts[0].coverImage}
                    alt={filteredPosts[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {filteredPosts[0].tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                    <CardTitle className="text-2xl mb-2">{filteredPosts[0].title}</CardTitle>
                    <CardDescription className="text-base">{filteredPosts[0].excerpt}</CardDescription>
                  </CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {filteredPosts[0].author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(filteredPosts[0].publishedAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {filteredPosts[0].readTime}
                    </div>
                  </div>
                  <Link to={`/blog/${filteredPosts[0].id}`}>
                    <Button>
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Posts Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Latest Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.slice(1).map(post => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {post.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </div>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="outline" className="w-full">
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No posts found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
