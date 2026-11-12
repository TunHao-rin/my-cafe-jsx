export default function SuccessMessage({ order, onNewOrder }) {
  return (
    <div className="success">
      <div style={{ fontSize: 36 }}>✅</div>
      <h3>Order placed!</h3>
      <p>Thanks {order.name}. {order.count} item(s), ${order.total.toFixed(2)}.</p>
      <button className="btn primary big" onClick={onNewOrder}>New order</button>
    </div>
  );
}
