import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';

export const CartSlideout = () => {
  const { 
    items, 
    isOpen, 
    toggleCart, 
    updateQuantity, 
    removeItem, 
    getTotalPrice,
    getTotalItems 
  } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Shopping Cart ({getTotalItems()})
          </SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col h-full">
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto py-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 p-4 border rounded-lg">
                    {item.image && (
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    )}
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{item.name}</h4>
                      <p className="text-primary font-medium">{formatPrice(item.price)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive hover:text-destructive"
                        onClick={() => removeItem(item.id)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Cart Footer */}
          {items.length > 0 && (
            <div className="border-t pt-6 space-y-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span>{formatPrice(getTotalPrice())}</span>
              </div>
              <Button className="w-full" size="lg">
                Checkout
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};