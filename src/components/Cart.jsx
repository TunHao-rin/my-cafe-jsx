import CartLine from "./CartLine.jsx";

export default function Cart({ cart, onIncrease, onDecrease }) {
  if (cart.length === 0) return <p className="empty">Your cart is empty</p>;

  return (
    <div>
      {cart.map((line) => (
        <CartLine key={line.id} line={line} onIncrease={onIncrease} onDecrease={onDecrease} />
      ))}
    </div>
  );
}
