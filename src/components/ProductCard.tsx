import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart } from 'lucide-react';
import { Product } from '@/data/dummy-data';
import sareeHero from '@/assets/saree-hero.jpg';
import potteryImage from '@/assets/pottery.jpg';
import scarf from '@/assets/scarf.jpg';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard = ({ product, className = "" }: ProductCardProps) => {
  // Use the appropriate generated image for each product
  const getProductImage = () => {
    if (product.id === "1") return sareeHero;
    if (product.id === "2") return potteryImage; 
    if (product.id === "3") return scarf;
    return sareeHero;
  };

  const imageUrl = getProductImage();

  return (
    <Link to={`/product/${product.id}`} className={`group ${className}`}>
      <Card className="overflow-hidden shadow-card hover:shadow-float transition-all duration-300 group-hover:scale-[1.02]">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img 
            src={imageUrl}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <button className="absolute top-3 right-3 p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-colors">
            <Heart className="w-4 h-4 text-muted-foreground hover:text-primary" />
          </button>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <CardContent className="p-4 space-y-3">
          <div>
            <h3 className="font-heading font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
              {product.title}
            </h3>
            <p className="text-sm text-muted-foreground">by {product.artisan}</p>
          </div>
          
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="bg-accent/30 text-accent-foreground text-xs">
              {product.region.split(',')[1]?.trim() || product.region}
            </Badge>
            <span className="font-semibold text-primary">₹{product.price.toLocaleString()}</span>
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.storyExcerpt}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;