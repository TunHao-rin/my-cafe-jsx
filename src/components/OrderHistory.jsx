import Panel from "./Panel.jsx";

export default function OrderHistory({ orders }) {
  return (
    <Panel title="Order history">
      {orders.length === 0 && <p className="empty">No orders yet</p>}
      {orders.map((o) => (
        <div key={o.id} className="cart-line">
          <span>{o.count} item(s)</span>
          <strong>${o.total.toFixed(2)}</strong>
        </div>
      ))}
    </Panel>
  );
}
