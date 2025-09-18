import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import ProductCard from '@/components/ProductCard';
import ArtisanCard from '@/components/ArtisanCard';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products, artisans } from '@/data/dummy-data';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-warm">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container max-w-6xl mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              KalaKatha
            </h1>
            <p className="text-xl md:text-2xl text-foreground mb-4 font-medium">
              Where Craft Meets AI
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover authentic handcrafted treasures with AI-powered storytelling. 
              Every piece tells a story, every artisan has a voice.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="#explore">
                <Button className="bg-gradient-hero border-0 shadow-glow text-lg px-8 py-6 rounded-2xl">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Explore Crafts
                </Button>
              </Link>
              <Link to="/chat">
                <Button variant="outline" className="text-lg px-8 py-6 rounded-2xl border-2">
                  Chat with AI Assistant
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
      </section>

      {/* Featured Products */}
      <section id="explore" className="py-16 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Featured Crafts</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handpicked treasures with AI-enhanced stories from master artisans across India
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="text-lg px-8 py-3 rounded-2xl">
              View All Products
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Artisan Stories */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Artisan Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the talented craftspeople preserving centuries-old traditions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artisans.map((artisan) => (
              <ArtisanCard key={artisan.id} artisan={artisan} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <Card className="p-8 md:p-12 bg-gradient-hero text-primary-foreground shadow-glow">
            <CardContent className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Start Your Craft Journey
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Whether you're looking to discover unique handcrafted pieces or showcase your own artistry, 
                KalaKatha connects you with India's rich cultural heritage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/dashboard">
                  <Button variant="secondary" className="text-lg px-8 py-3 rounded-2xl">
                    Become an Artisan
                  </Button>
                </Link>
                <Link to="#explore">
                  <Button variant="outline" className="text-lg px-8 py-3 rounded-2xl bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    Shop Crafts
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-card border-t border-border">
        <div className="container max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            Powered by Google Cloud GenAI • Preserving Heritage Through Technology
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
