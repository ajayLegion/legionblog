
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

// Mock data - will be replaced with Supabase data
const mockPosts = [
  {
    id: 1,
    title: "Getting Started with React and TypeScript",
    excerpt: "Learn how to set up a modern React application with TypeScript for better development experience and type safety.",
    content: `
# Getting Started with React and TypeScript

React and TypeScript make a powerful combination for building modern web applications. TypeScript adds static type checking to JavaScript, which helps catch errors during development and provides better tooling support.

## Why TypeScript with React?

TypeScript offers several benefits when used with React:

- **Type Safety**: Catch errors at compile time rather than runtime
- **Better IDE Support**: Enhanced autocomplete, refactoring, and navigation
- **Self-Documenting Code**: Types serve as inline documentation
- **Easier Refactoring**: Make changes with confidence

## Setting Up Your Project

To create a new React TypeScript project, you can use Vite:

\`\`\`bash
npm create vite@latest my-react-app -- --template react-ts
cd my-react-app
npm install
npm run dev
\`\`\`

## Basic Component Examples

Here's a simple functional component with TypeScript:

\`\`\`tsx
interface Props {
  name: string;
  age?: number;
}

const Welcome: React.FC<Props> = ({ name, age }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      {age && <p>You are {age} years old.</p>}
    </div>
  );
};
\`\`\`

## Conclusion

React with TypeScript provides a robust foundation for building scalable applications. The initial setup might seem complex, but the long-term benefits make it worthwhile for any serious project.
    `,
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
    content: `
# Building Modern UIs with Tailwind CSS

Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML.

## Why Choose Tailwind CSS?

- **Utility-First**: Build complex components from a constrained set of primitive utilities
- **Responsive**: Built-in responsive design utilities
- **Customizable**: Highly customizable design system
- **Performance**: Purge unused CSS for optimal performance

## Getting Started

Install Tailwind CSS in your project:

\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

## Basic Examples

Here are some common patterns:

### Card Component
\`\`\`html
<div class="bg-white rounded-lg shadow-md p-6">
  <h2 class="text-xl font-bold mb-2">Card Title</h2>
  <p class="text-gray-600">Card content goes here.</p>
</div>
\`\`\`

### Responsive Grid
\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Grid items -->
</div>
\`\`\`

## Best Practices

1. Use consistent spacing scale
2. Leverage the design system
3. Extract common patterns into components
4. Use the responsive utilities effectively

Tailwind CSS helps you build modern, responsive UIs quickly and consistently.
    `,
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
    content: `
# Database Design Best Practices

Good database design is crucial for building scalable and maintainable applications. Here are the key principles you should follow.

## Normalization

Normalize your database to eliminate redundancy:

- **First Normal Form (1NF)**: Eliminate repeating groups
- **Second Normal Form (2NF)**: Remove partial dependencies
- **Third Normal Form (3NF)**: Remove transitive dependencies

## Indexing Strategy

Proper indexing improves query performance:

- Index frequently queried columns
- Use composite indexes for multi-column queries
- Avoid over-indexing (impacts write performance)

## Data Types

Choose appropriate data types:

- Use the smallest data type that fits your needs
- Use specific types (DATE, TIME) rather than generic ones (VARCHAR)
- Consider nullable vs non-nullable columns carefully

## Relationships

Design relationships properly:

- Use foreign keys to maintain referential integrity
- Choose appropriate relationship types (one-to-one, one-to-many, many-to-many)
- Consider cascading actions carefully

## Security

Implement proper security measures:

- Use Row Level Security (RLS) policies
- Implement proper authentication and authorization
- Validate and sanitize all inputs
- Use parameterized queries to prevent SQL injection

## Performance Considerations

- Design for your query patterns
- Use views for complex, frequently-used queries
- Consider partitioning for large tables
- Monitor and optimize slow queries

Following these practices will help you build robust, scalable database systems.
    `,
    author: "Mike Johnson",
    publishedAt: "2024-01-10",
    readTime: "12 min read",
    tags: ["Database", "SQL", "Backend"],
    coverImage: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80"
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const post = mockPosts.find(p => p.id === parseInt(id || "0"));

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md w-full">
          <CardHeader>
            <CardTitle>Post Not Found</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "The blog post link has been copied to your clipboard.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-6">
          <Link to="/blog">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>

      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Cover Image */}
        <div className="aspect-video mb-8 overflow-hidden rounded-lg">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Post Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map(tag => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
          
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="flex gap-2">
            <Button onClick={handleShare} variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </header>

        {/* Post Content */}
        <div className="prose prose-lg max-w-none">
          <div className="whitespace-pre-wrap">{post.content}</div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold">About the Author</p>
              <p className="text-muted-foreground">{post.author}</p>
            </div>
            <Button onClick={handleShare} variant="outline">
              <Share2 className="w-4 h-4 mr-2" />
              Share this post
            </Button>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogPost;
