import { plans } from "../../data/plans";
import { coupons } from "../../data/coupons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function OrderSummary({
  selectedPlan,
  setSelectedPlan,
  selectedCoupon,
  setSelectedCoupon,
}) {

  const subtotal = selectedPlan.price;
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
const discount = selectedCoupon
  ? Math.floor((subtotal * selectedCoupon.discount) / 100)
  : 0;

const discountedPrice = subtotal - discount;

const tax = Math.floor(discountedPrice * 0.18);

const total = discountedPrice + tax;
const handlePayment = () => {

  setLoading(true);

  setTimeout(() => {
    navigate("/success");
  }, 2000);
};

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm h-fit">

      <h2 className="text-[24px] font-semibold text-gray-900 mb-6">
        Order Summary
      </h2>

      {/* PLAN CARD */}

      <div className="border rounded-lg p-4 mb-5">

        <div className="flex items-start justify-between">

          <div>

            <h3 className="text-[42px] font-bold leading-none">
              ₹{selectedPlan.price}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              /month
            </p>

            <p className="text-xs text-gray-400 mt-1">
              Includes {selectedPlan.credits} credits/mo.
            </p>

          </div>

          <div className="text-right">

            <p className="text-[10px] tracking-wide text-blue-600 font-medium">
              SELECTED PLAN
            </p>

            <p className="font-semibold text-[28px] text-[#2563EB]">
              {selectedPlan.name}
            </p>

          </div>

        </div>

        {/* PLAN SWITCHING */}

        <div className="grid grid-cols-3 gap-2 mt-4">

          {plans.map((plan) => (

            <button
              key={plan.id}
              onClick={() => setSelectedPlan(plan)}
              className={`py-2 rounded-md text-sm border transition ${
                selectedPlan.id === plan.id
                  ? "bg-[#2563EB] text-white border-[#2563EB]"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
            >
              {plan.name}
            </button>

          ))}

        </div>

      </div>
      {/* COUPONS */}

<div className="space-y-3 mb-6">

  <h3 className="text-sm font-medium text-gray-700">
    Available Coupons
  </h3>

  {coupons.map((coupon) => (

    <div
      key={coupon.code}
      onClick={() => setSelectedCoupon(coupon)}
      className={`border rounded-lg p-3 cursor-pointer transition flex items-center justify-between ${
        selectedCoupon?.code === coupon.code
          ? "border-[#2563EB] bg-blue-50"
          : "border-gray-300 hover:border-blue-300"
      }`}
    >

      <div>

        <p className="font-semibold text-sm">
          {coupon.code}
        </p>

        <p className="text-xs text-gray-500">
          {coupon.discount}% OFF
        </p>

      </div>

      <input
        type="radio"
        checked={selectedCoupon?.code === coupon.code}
        readOnly
      />

    </div>

  ))}

</div>

      {/* TOTALS */}

      <div className="space-y-4 text-sm">

        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">
            ₹{subtotal}
          </span>
        </div>
        <div className="flex justify-between">
  <span className="text-gray-600">
    Discount
  </span>

  <span className="font-medium text-green-600">
    -₹{discount}
  </span>
</div>

        <div className="flex justify-between">
          <span className="text-gray-600">Tax (18% GST)</span>
          <span className="font-medium">
            ₹{tax}
          </span>
        </div>

        <div className="border-t border-dashed border-gray-300"></div>

        <div className="flex justify-between items-center">

          <span className="font-semibold text-base">
            Total due today
          </span>

          <span className="text-[32px] font-bold text-[#2563EB]">
            ₹{total}
          </span>

        </div>

      </div>

      <button
  onClick={handlePayment}
  disabled={loading}
  className={`w-full text-white text-sm py-2.5 rounded-md mt-6 transition ${
    loading
      ? "bg-blue-400 cursor-not-allowed"
      : "bg-[#2563EB] hover:bg-blue-700"
  }`}
>

  {loading ? "Processing Payment..." : "Proceed to Payment"}

</button>

    </div>
  )
}