import { useState } from "react";
import { categories, menu } from "./data/menu.js";
import Header from "./components/Header.jsx";
import MenuFilters from "./components/MenuFilters.jsx";
import MenuList from "./components/MenuList.jsx";
import Panel from "./components/Panel.jsx";
import Cart from "./components/Cart.jsx";
import OrderSummary from "./components/OrderSummary.jsx";
import CheckoutForm from "./components/CheckoutForm.jsx";
import OrderHistory from "./components/OrderHistory.jsx";

const emptyCustomer = { name: "", phone: "", note: "", address: { street: "", city: "" } };

export default function App() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [cart, setCart] = useState([]);
  const [customer, setCustomer] = useState(emptyCustomer);
  const [coupon, setCoupon] = useState("");
  const [status, setStatus] = useState("idle");
  const [orders, setOrders] = useState([]);

  let items = menu.filter(
    (i) =>
      (category === "All" || i.category === category) &&
      i.name.toLowerCase().includes(search.toLowerCase())
  );
  if (sort === "low") items = [...items].sort((a, b) => a.price - b.price);

  const cartCount = cart.reduce((n, l) => n + l.qty, 0);
  const subtotal = cart.reduce((s, l) => s + l.price * l.qty, 0);
  const discount = 0;
  const total = subtotal - discount;

  function addToCart(item, qty) {
    setStatus("idle");
    const found = cart.find((l) => l.id === item.id);
    if (found) {
      setCart(cart.map((l) => (l.id === item.id ? { ...l, qty: l.qty + qty } : l)));
    } else {
      setCart([...cart, { id: item.id, name: item.name, price: item.price, qty }]);
    }
  }
  function increase(id) {
    setCart(cart.map((l) => (l.id === id ? { ...l, qty: l.qty + 1 } : l)));
  }
  function decrease(id) {
    setCart(cart.map((l) => (l.id === id ? { ...l, qty: l.qty - 1 } : l)).filter((l) => l.qty > 0));
  }

  function changeCustomer(field, value) {
    setCustomer({ ...customer, [field]: value });
  }
  function changeAddress(field, value) {
    setCustomer({ ...customer, address: { ...customer.address, [field]: value } });
  }
  function submit(e) {
    e.preventDefault();
    setOrders([{ id: Date.now(), count: cartCount, total, name: customer.name }, ...orders]);
    setCart([]);
    setCoupon("");
    setStatus("success");
  }
  function newOrder() {
    setCustomer(emptyCustomer);
    setStatus("idle");
  }

  return (
    <div className="app">
      <Header cartCount={cartCount} />
      <div className="layout">
        <div>
          <MenuFilters
            categories={categories}
            activeCategory={category}
            search={search}
            sort={sort}
            onCategoryChange={setCategory}
            onSearchChange={setSearch}
            onSortChange={setSort}
          />
          <MenuList
            items={items}
            onAddToCart={(item) => addToCart(item, 1)}
            onQuickAdd={(item) => addToCart(item, 2)}
          />
        </div>
        <div>
          <Panel title="Your cart">
            <Cart cart={cart} onIncrease={increase} onDecrease={decrease} />
            {cart.length > 0 && <OrderSummary subtotal={subtotal} discount={discount} total={total} />}
          </Panel>
          <Panel title="Checkout">
            <CheckoutForm
              customer={customer}
              coupon={coupon}
              status={status}
              total={total}
              canOrder={cart.length > 0}
              lastOrder={orders[0]}
              onCustomerChange={changeCustomer}
              onAddressChange={changeAddress}
              onCouponChange={setCoupon}
              onSubmit={submit}
              onNewOrder={newOrder}
            />
          </Panel>
          <OrderHistory orders={orders} />
        </div>
      </div>
    </div>
  );
}
