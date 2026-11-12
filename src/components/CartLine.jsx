export default function CartLine({ line, onIncrease, onDecrease }) {
  return (
    <div className="cart-line">
      <div>
        <strong>{line.name}</strong>
        <div className="meta">${(line.price * line.qty).toFixed(2)}</div>
      </div>
      <div className="row">
        <button className="btn ghost" onClick={() => onDecrease(line.id)}>−</button>
        <span>{line.qty}</span>
        <button className="btn ghost" onClick={() => onIncrease(line.id)}>+</button>
      </div>
    </div>
  );
}
