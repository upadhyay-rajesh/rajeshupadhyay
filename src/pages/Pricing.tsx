import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { GraduationCap, Star, Users, Award } from 'lucide-react';
import CourseCard from '@/components/CourseCard';
import Cart from '@/components/Cart';
import { CartItem, COURSES, TIERS } from '@/types/course';
import { Link } from 'react-router-dom';
import trainingHero from '@/assets/training-hero.jpg';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Pricing = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const addToCart = (courseId: string, tierId: string) => {
    const course = COURSES.find(c => c.id === courseId);
    const tier = TIERS[courseId]?.find(t => t.id === tierId);
    
    if (!course || !tier) return;

    const existingItem = cartItems.find(item => 
      item.courseId === courseId && item.tierId === tierId
    );

    if (existingItem) {
      setCartItems(items =>
        items.map(item =>
          item.courseId === courseId && item.tierId === tierId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      const newItem: CartItem = {
        courseId,
        tierId,
        courseName: course.title,
        tierName: tier.name,
        price: tier.price,
        quantity: 1,
      };
      setCartItems(items => [...items, newItem]);
    }

    toast({
      title: "Added to cart",
      description: `${course.title} - ${tier.name} has been added to your cart.`,
    });
  };

  const updateQuantity = (courseId: string, tierId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(courseId, tierId);
      return;
    }

    setCartItems(items =>
      items.map(item =>
        item.courseId === courseId && item.tierId === tierId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const removeFromCart = (courseId: string, tierId: string) => {
    setCartItems(items =>
      items.filter(item => !(item.courseId === courseId && item.tierId === tierId))
    );
    
    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart.",
    });
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add some courses to your cart before checkout.",
        variant: "destructive",
      });
      return;
    }

    // Here you would integrate with Razorpay
    toast({
      title: "Redirecting to payment",
      description: "You'll be redirected to Razorpay for secure payment processing.",
    });
  };

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header />
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={trainingHero} 
            alt="Professional Training" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
        </div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-gradient-accent text-accent-foreground shadow-glow">
              <Star className="w-4 h-4 mr-2" />
              Professional Training by Rajesh Upadhyay
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6">
              Master In-Demand Skills
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Choose from our comprehensive training programs designed to advance your career. 
              Flexible learning paths from basic to advanced levels.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Users className="w-5 h-5 text-primary" />
                <span>1000+ Students Trained</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Award className="w-5 h-5 text-primary" />
                <span>Industry Recognized</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <GraduationCap className="w-5 h-5 text-primary" />
                <span>Expert Instruction</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses">
                <Button size="lg" className="bg-gradient-primary hover:bg-gradient-hero text-primary-foreground shadow-elegant hover:shadow-glow">
                  Know More Details About Courses
                </Button>
              </Link>
              <Cart 
                items={cartItems}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeFromCart}
                onCheckout={handleCheckout}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="container mx-auto px-4 py-16"  style={{ backgroundColor: "#facdf6ff"}}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our flexible pricing structure lets you start at any level and progress at your own pace. 
            Each course offers multiple tiers to match your learning goals and budget.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              onAddToCart={addToCart}
            />
          ))}
        </div>

        {/* Value Proposition */}
        <div className="mt-16 bg-gradient-card backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-elegant">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Our Training?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Expert Instruction</h4>
                <p className="text-sm text-muted-foreground">Learn from industry professionals with real-world experience</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-accent-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Community Support</h4>
                <p className="text-sm text-muted-foreground">Join a community of learners and get peer support</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Certification</h4>
                <p className="text-sm text-muted-foreground">Earn industry-recognized certificates upon completion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
       <Footer />
    </div>
   
  );
};

export default Pricing;