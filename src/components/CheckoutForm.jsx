import SuccessMessage from "./SuccessMessage.jsx";

export default function CheckoutForm({
  customer, coupon, status, total, canOrder, lastOrder,
  onCustomerChange, onAddressChange, onCouponChange, onSubmit, onNewOrder,
}) {
  if (status === "success") {
    return <SuccessMessage order={lastOrder} onNewOrder={onNewOrder} />;
  }

  const valid =
    canOrder &&
    customer.name &&
    customer.phone &&
    customer.address.street &&
    customer.address.city;

  return (
    <form className="form" onSubmit={onSubmit}>
      <input className="input" placeholder="Full name" value={customer.name}
        onChange={(e) => onCustomerChange("name", e.target.value)} />
      <input className="input" placeholder="Phone (digits only)" value={customer.phone}
        onChange={(e) => onCustomerChange("phone", e.target.value)} />
      <input className="input" placeholder="Street" value={customer.address.street}
        onChange={(e) => onAddressChange("street", e.target.value)} />
      <input className="input" placeholder="City" value={customer.address.city}
        onChange={(e) => onAddressChange("city", e.target.value)} />
      <input className="input" placeholder="Note (optional)" value={customer.note}
        onChange={(e) => onCustomerChange("note", e.target.value)} />
      <input className="input" placeholder="Coupon code (try REACT10)" value={coupon}
        onChange={(e) => onCouponChange(e.target.value)} />
      <button className="btn primary big" disabled={!valid}>
        Place order · ${total.toFixed(2)}
      </button>
    </form>
  );
}
