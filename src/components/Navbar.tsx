
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PenTool, Home, BookOpen } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <PenTool className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">BlogPlatform</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/">
              <Button 
                variant={isActive("/") ? "default" : "ghost"}
                className="flex items-center space-x-2"
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Button>
            </Link>
            <Link to="/blog">
              <Button 
                variant={isActive("/blog") ? "default" : "ghost"}
                className="flex items-center space-x-2"
              >
                <BookOpen className="h-4 w-4" />
                <span>Blog</span>
              </Button>
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="outline">Login</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
