import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star } from 'lucide-react';
import { Course, CourseTier, TIERS } from '@/types/course';

interface CourseCardProps {
  course: Course;
  onAddToCart: (courseId: string, tierId: string) => void;
}

const CourseCard = ({ course, onAddToCart }: CourseCardProps) => {
  const [selectedTier, setSelectedTier] = useState<string>('complete');
  const tiers = TIERS[course.id] || [];
  const currentTier = tiers.find(tier => tier.id === selectedTier);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="group relative overflow-hidden bg-gradient-card backdrop-blur-sm border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-[1.02]">
      {/* Popular badge */}
      {currentTier?.popular && (
        <div className="absolute -top-2 -right-2 z-10">
          <Badge className="bg-gradient-accent text-accent-foreground shadow-glow">
            <Star className="w-3 h-3 mr-1" />
            Most Popular
          </Badge>
        </div>
      )}
      
      <div className="p-6">
        {/* Course Header */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="text-3xl">{course.icon}</div>
          <div>
            <h3 className="text-xl font-bold text-foreground">{course.title}</h3>
            <p className="text-sm text-muted-foreground">{course.description}</p>
          </div>
        </div>

        {/* Topics */}
        <div className="mb-6">
          <p className="text-sm font-medium text-foreground mb-2">What you'll learn:</p>
          <div className="flex flex-wrap gap-1">
            {course.topics.map((topic, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {topic}
              </Badge>
            ))}
          </div>
        </div>

        {/* Tier Selection */}
        <div className="space-y-3 mb-6">
          <p className="text-sm font-medium text-foreground">Choose your learning path:</p>
          <div className="grid grid-cols-2 gap-2">
            {tiers.map((tier) => (
              <button
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`p-3 rounded-lg border transition-all text-left ${
                  selectedTier === tier.id
                    ? 'bg-primary text-primary-foreground border-primary shadow-glow'
                    : 'bg-card hover:bg-muted border-border'
                }`}
              >
                <div className="font-medium text-sm">{tier.name}</div>
                <div className="text-xs opacity-75">{formatPrice(tier.price)}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Tier Details */}
        {currentTier && (
          <div className="mb-6 p-4 bg-muted/30 rounded-lg border">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h4 className="font-semibold text-foreground">{currentTier.name}</h4>
                <p className="text-sm text-muted-foreground">{currentTier.duration}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">{formatPrice(currentTier.price)}</div>
                {currentTier.originalPrice && currentTier.originalPrice > currentTier.price && (
                  <div className="text-sm text-muted-foreground line-through">{formatPrice(currentTier.originalPrice)}</div>
                )}
                {currentTier.savings && currentTier.savings > 0 && (
                  <div className="text-sm text-success">Save {formatPrice(currentTier.savings)}</div>
                )}
              </div>
            </div>
            
            <div className="space-y-2">
              {currentTier.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-success flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Add to Cart Button */}
        <Button
          onClick={() => currentTier && onAddToCart(course.id, currentTier.id)}
          className="w-full bg-gradient-primary hover:bg-gradient-hero text-primary-foreground shadow-elegant hover:shadow-glow transition-all duration-300"
          size="lg"
        >
          Add to Cart - {currentTier ? formatPrice(currentTier.price) : ''}
        </Button>
      </div>
    </Card>
  );
};

export default CourseCard;