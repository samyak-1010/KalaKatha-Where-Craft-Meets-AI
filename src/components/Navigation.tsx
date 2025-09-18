import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Plus, MessageCircle } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-card/80 backdrop-blur-md border-b border-border shadow-card">
      <div className="container max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">K</span>
          </div>
          <span className="font-heading font-bold text-xl text-foreground">KalaKatha</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === '/' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/#explore" 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Explore
          </Link>
          <Link 
            to="/dashboard" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === '/dashboard' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Artisan Dashboard
          </Link>
          <Link 
            to="/chat" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === '/chat' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            <MessageCircle className="w-4 h-4 inline mr-1" />
            Chat
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" className="relative">
            <ShoppingBag className="w-4 h-4" />
            <span className="sr-only">Cart</span>
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
              2
            </span>
          </Button>
          
          <Link to="/dashboard" className="md:hidden">
            <Button size="sm" className="bg-gradient-hero border-0 shadow-glow">
              <Plus className="w-4 h-4 mr-2" />
              List Product
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile floating action button */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <Link to="/dashboard">
          <Button className="w-14 h-14 rounded-full bg-gradient-hero border-0 shadow-float">
            <Plus className="w-6 h-6" />
            <span className="sr-only">List Product</span>
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Navigation;