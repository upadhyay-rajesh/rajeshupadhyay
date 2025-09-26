import { useState } from 'react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
import { CartItem } from '@/types/course';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (courseId: string, tierId: string, quantity: number) => void;
  onRemoveItem: (courseId: string, tierId: string) => void;
  onCheckout: () => void;
}

const Cart = ({ items, onUpdateQuantity, onRemoveItem, onCheckout }: CartProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const totalAmount = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const loadRazorpayScript = (src: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};


  const handleCheckout = async () => {
  const res = await loadRazorpayScript("https://checkout.razorpay.com/v1/checkout.js");
  if (!res) {
    alert("Failed to load Razorpay SDK. Please check your internet connection.");
    return;
  }

  // 💡 In real app: create order on your backend and get order_id from Razorpay
  const options: any = {
    key: "rzp_test_1234567890abcdef", // ✅ replace with your Razorpay Key ID
    amount: totalAmount * 100, // Razorpay takes amount in paise
    currency: "INR",
    name: "Dhruv Bhaiya Coaching Center",
    description: "Course Payment",
    image: "/logo.png", // optional logo
    handler: function (response: any) {
      alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
      onCheckout(); // Call your existing checkout logic
    },
    prefill: {
      name: "Student Name",
      email: "student@example.com",
      contact: "9876543210",
    },
    theme: {
      color: "#3399cc",
    },
  };

  const paymentObject = new (window as any).Razorpay(options);
  paymentObject.open();
};


  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          size="lg" 
          className="relative bg-card hover:bg-muted border-border shadow-card hover:shadow-elegant transition-all duration-300"
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          Cart
          {totalItems > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-gradient-accent text-accent-foreground min-w-[1.25rem] h-5 flex items-center justify-center text-xs">
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center space-x-2">
            <ShoppingCart className="w-5 h-5" />
            <span>Shopping Cart</span>
          </SheetTitle>
          <SheetDescription>
            Review your selected courses before checkout
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingCart className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Your cart is empty</p>
              <p className="text-sm text-muted-foreground">Add some courses to get started</p>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {items.map((item) => (
                  <div key={`${item.courseId}-${item.tierId}`} className="p-4 bg-muted/30 rounded-lg border">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{item.courseName}</h4>
                        <p className="text-sm text-muted-foreground">{item.tierName} Package</p>
                        <div className="text-lg font-semibold text-primary mt-1">
                          {formatPrice(item.price)}
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onRemoveItem(item.courseId, item.tierId)}
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onUpdateQuantity(item.courseId, item.tierId, Math.max(1, item.quantity - 1))}
                          disabled={item.quantity <= 1}
                          className="w-8 h-8 p-0"
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onUpdateQuantity(item.courseId, item.tierId, item.quantity + 1)}
                          className="w-8 h-8 p-0"
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                      
                      <div className="font-medium text-foreground">
                        {formatPrice(item.price * item.quantity)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Separator />

              {/* Cart Summary */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium text-foreground">Total:</span>
                  <span className="text-2xl font-bold text-primary">{formatPrice(totalAmount)}</span>
                </div>
                
                <Button 
                   onClick={handleCheckout}
                  className="w-full bg-gradient-primary hover:bg-gradient-hero text-primary-foreground shadow-elegant hover:shadow-glow transition-all duration-300"
                  size="lg"
                >
                  Proceed to Checkout
                </Button>
                
                <p className="text-xs text-center text-muted-foreground">
                  Secure payment powered by Razorpay
                </p>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
