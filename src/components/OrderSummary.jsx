export default function OrderSummary({ subtotal, discount, total }) {
  return (
    <div className="summary">
      <div><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
      {discount > 0 && <div><span>Discount</span><span>-${discount.toFixed(2)}</span></div>}
      <div className="total"><span>Total</span><span>${total.toFixed(2)}</span></div>
    </div>
  );
}
