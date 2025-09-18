import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ShoppingCart, Heart, Share2 } from 'lucide-react';
import { products } from '@/data/dummy-data';
import { toast } from '@/hooks/use-toast';
import sareeHero from '@/assets/saree-hero.jpg';
import potteryImage from '@/assets/pottery.jpg';
import scarf from '@/assets/scarf.jpg';

const ProductDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('story');
  
  // For demo, use first product if id matches, otherwise default
  const product = products.find(p => p.id === id) || products[0];

  // Choose appropriate image based on product
  const getProductImage = (product: any) => {
    if (product.id === "1") return sareeHero;
    if (product.id === "2") return potteryImage;
    if (product.id === "3") return scarf;
    return sareeHero;
  };

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart!",
      description: "Checkout with Google Pay - Coming Soon",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Navigation />
      
      <main className="container max-w-6xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to marketplace
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-float">
              <img 
                src={getProductImage(product)} 
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex space-x-3">
              {product.photos.map((photo, index) => (
                <div key={index} className="w-20 h-20 rounded-lg overflow-hidden shadow-card">
                  <img src={photo} alt={`${product.title} view ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-2">
                <h1 className="text-3xl font-heading font-bold text-foreground">{product.title}</h1>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <p className="text-xl text-primary font-semibold mb-2">₹{product.price.toLocaleString()}</p>
              
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span>By <span className="font-medium text-foreground">{product.artisan}</span></span>
                <Badge variant="secondary" className="bg-accent/50">{product.region}</Badge>
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                onClick={handleAddToCart}
                className="w-full bg-gradient-hero border-0 shadow-glow text-lg py-6"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              
              <p className="text-sm text-center text-muted-foreground">
                Secure checkout with Google Pay • Free shipping over ₹2,000
              </p>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Card className="shadow-card">
          <CardContent className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="story">Story</TabsTrigger>
                <TabsTrigger value="photos">Photos</TabsTrigger>
                <TabsTrigger value="video">Video</TabsTrigger>
              </TabsList>
              
              <TabsContent value="story" className="mt-6 space-y-4">
                <h3 className="text-xl font-heading font-semibold">The Story Behind This Craft</h3>
                <p className="text-muted-foreground leading-relaxed">{product.fullStory}</p>
              </TabsContent>
              
              <TabsContent value="photos" className="mt-6">
                <h3 className="text-xl font-heading font-semibold mb-4">AI-Enhanced Gallery</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {product.photos.map((photo, index) => (
                    <div key={index} className="aspect-square rounded-xl overflow-hidden shadow-card">
                      <img src={photo} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="video" className="mt-6">
                <h3 className="text-xl font-heading font-semibold mb-4">Crafting Process</h3>
                <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <div className="w-0 h-0 border-l-[12px] border-l-primary border-y-[8px] border-y-transparent ml-1"></div>
                    </div>
                    <p className="text-muted-foreground">Video coming soon</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ProductDetail;