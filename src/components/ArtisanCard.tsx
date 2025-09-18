import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Artisan } from '@/data/dummy-data';

interface ArtisanCardProps {
  artisan: Artisan;
  className?: string;
}

const ArtisanCard = ({ artisan, className = "" }: ArtisanCardProps) => {
  return (
    <Card className={`overflow-hidden shadow-card hover:shadow-float transition-all duration-300 hover:scale-[1.02] ${className}`}>
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-accent">
              <img 
                src={artisan.photo}
                alt={artisan.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-heading font-semibold text-lg mb-1">{artisan.name}</h3>
            <Badge variant="secondary" className="mb-2 bg-primary/10 text-primary text-xs">
              {artisan.specialization}
            </Badge>
            <p className="text-sm text-muted-foreground mb-2">{artisan.region}</p>
            <p className="text-sm text-foreground line-clamp-2">{artisan.bio}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArtisanCard;