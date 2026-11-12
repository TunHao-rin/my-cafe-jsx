import { useState } from "react";

export default function MenuItemCard({ item, onAddToCart, onQuickAdd }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="card" onClick={() => setShowDetails(!showDetails)}>
      <div className="card-img" style={{ background: item.bg }}>
        <span className="emoji">{item.emoji}</span>
        {item.soldOut && <span className="badge sold">Sold out</span>}
        {!item.soldOut && item.popular && <span className="badge popular">Popular</span>}
      </div>
      <h3>{item.name}</h3>
      <p className="meta">${item.price.toFixed(2)} · {item.category}</p>
      <p className="hint">{showDetails ? item.desc : "Tap card for details"}</p>
      <div className="row">
        <button
          className="btn primary"
          disabled={item.soldOut}
          onClick={(e) => { e.stopPropagation(); onAddToCart(item); }}
        >
          {item.soldOut ? "Unavailable" : "Add"}
        </button>
        <button
          className="btn ghost"
          disabled={item.soldOut}
          onClick={(e) => { e.stopPropagation(); onQuickAdd(item); }}
        >
          +2
        </button>
      </div>
    </div>
  );
}
