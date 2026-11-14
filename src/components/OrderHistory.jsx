import Panel from "./Panel.jsx";

export default function OrderHistory({ orders }) {
  return (
    <Panel title="Order history">
      {orders.length === 0 && <p className="empty">No orders yet</p>}
      {orders.map((o, index) => (
        <div key={o.id} className="cart-line">
          <span>
            #{orders.length - index} · {o.name} · {o.count} item(s) · <strong>${o.total.toFixed(2)}</strong> · {o.time}
          </span>
        </div>
      ))}
    </Panel>
  );
}
