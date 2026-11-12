import MenuItemCard from "./MenuItemCard.jsx";

export default function MenuList({ items, onAddToCart, onQuickAdd }) {
  if (items.length === 0) return <p className="empty">No drinks match your search</p>;
  return (
    <div className="menu-grid">
      {items.map((item) => (
        <MenuItemCard key={item.id} item={item} onAddToCart={onAddToCart} onQuickAdd={onQuickAdd} />
      ))}
    </div>
  );
}
