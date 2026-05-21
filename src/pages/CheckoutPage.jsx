import { useState } from "react";
import { coupons } from "../data/coupons";
import BillingForm from "../components/billing/BillingForm";
import OrderSummary from "../components/order/OrderSummary";

import { plans } from "../data/plans";

export default function CheckoutPage() {

  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  const [selectedCoupon, setSelectedCoupon] = useState(null);

  return (
    <div className="min-h-screen bg-[#f5f5f5]">


      {/* Main Container */}

      <div className="max-w-6xl mx-auto p-4 md:p-6">

       

        {/* Layout */}

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">

          {/* Left Section */}

          <BillingForm />

          {/* Right Section */}

          <OrderSummary
  selectedPlan={selectedPlan}
  setSelectedPlan={setSelectedPlan}
  selectedCoupon={selectedCoupon}
  setSelectedCoupon={setSelectedCoupon}
/>

        </div>

      </div>

    </div>
  )
}