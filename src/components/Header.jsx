export default function Header({ cartCount }) {
  return (
    <div className="header">
      <div>
        <span className="logo">☕ Bean &amp; Leaf</span>
        <span className="tagline">order ahead, skip the line</span>
      </div>
      <div className="cart-pill">🛒 Cart ({cartCount})</div>
    </div>
  );
}
