import { useLocation } from 'react-router-dom';
import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

interface CartItem extends MenuItem {
  quantity: number;
}

export default function Cart() {
  const location = useLocation();
  const initialCart: MenuItem[] = location.state?.cart || [];
  const [cart, setCart] = useState<CartItem[]>(initialCart.map((item) => ({ ...item, quantity: 1 })));

  const [step, setStep] = useState<'cart' | 'address' | 'payment'>('cart');
  const [address, setAddress] = useState({
    name: '',
    phone: '',
    street: '',
    city: '',
    pincode: '',
  });

  const increaseQty = (index: number) => {
    const newCart = [...cart];
    newCart[index].quantity += 1;
    setCart(newCart);
  };

  const decreaseQty = (index: number) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
    } else {
      newCart.splice(index, 1);
    }
    setCart(newCart);
  };

  const getTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseInt(item.price.replace(/[^0-9]/g, ''), 10);
      return total + price * item.quantity;
    }, 0);
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    alert(`Order placed successfully!\nTotal: ₹${getTotal()}\nDelivering to: ${address.street}, ${address.city}`);
    setCart([]);
    setStep('cart');
  };

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        {step === 'cart' && (
          <>
            <h2 className="text-4xl font-bold mb-8 flex items-center space-x-3">
              <ShoppingCart className="w-8 h-8 text-orange-500" />
              <span>Your Cart</span>
            </h2>

            {cart.length === 0 ? (
              <p className="text-gray-600 text-lg">Your cart is empty.</p>
            ) : (
              <>
                {cart.map((item, index) => (
                  <div key={index} className="flex items-center justify-between bg-white p-4 rounded-xl shadow-md mb-4">
                    <div className="flex items-center space-x-4">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button onClick={() => decreaseQty(index)} className="bg-red-500 text-white p-1 rounded"><Minus className="w-4 h-4" /></button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQty(index)} className="bg-green-500 text-white p-1 rounded"><Plus className="w-4 h-4" /></button>
                      <button onClick={() => decreaseQty(index)} className="text-red-500 ml-2"><Trash2 className="w-5 h-5" /></button>
                    </div>
                    <span className="text-orange-600 font-bold">₹{parseInt(item.price.replace(/[^0-9]/g, ''), 10) * item.quantity}</span>
                  </div>
                ))}

                <div className="flex justify-between items-center mt-6 text-xl font-bold">
                  Total: ₹{getTotal()}
                  <button
                    onClick={() => setStep('address')}
                    className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </>
        )}

        {step === 'address' && (
          <>
            <h2 className="text-3xl font-bold mb-6">Enter Delivery Address</h2>
            <div className="space-y-4">
              <input type="text" name="name" placeholder="Name" value={address.name} onChange={handleAddressChange} className="w-full p-3 rounded border"/>
              <input type="text" name="phone" placeholder="Phone Number" value={address.phone} onChange={handleAddressChange} className="w-full p-3 rounded border"/>
              <input type="text" name="street" placeholder="Street" value={address.street} onChange={handleAddressChange} className="w-full p-3 rounded border"/>
              <input type="text" name="city" placeholder="City" value={address.city} onChange={handleAddressChange} className="w-full p-3 rounded border"/>
              <input type="text" name="pincode" placeholder="Pincode" value={address.pincode} onChange={handleAddressChange} className="w-full p-3 rounded border"/>
            </div>
            <div className="flex justify-end mt-6 space-x-4">
              <button onClick={() => setStep('cart')} className="px-4 py-2 rounded border">Back to Cart</button>
              <button onClick={() => setStep('payment')} className="px-6 py-2 bg-orange-600 text-white rounded hover:bg-orange-700">Proceed to Payment</button>
            </div>
          </>
        )}

        {step === 'payment' && (
          <>
            <h2 className="text-3xl font-bold mb-6">Payment</h2>
            <p className="mb-4">This is a demo payment page. Total amount: ₹{getTotal()}</p>
            <button
              onClick={handlePlaceOrder}
              className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Place Order
            </button>
            <button onClick={() => setStep('address')} className="px-4 py-2 ml-4 rounded border">Back</button>
          </>
        )}
      </div>
    </section>
  );
}
