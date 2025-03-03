import React from "react";

function Pricing() {
  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-3">Costs</h2>
      <ul className="space-y-3">
        <li>Adult (Ex Nairobi): <strong>USD 1582</strong> (Incl. taxes)</li>
        <li>Child (4-9 years, Ex Nairobi): <strong>USD 1400</strong> (Incl. taxes)</li>
        <li className="text-red-500">Independence Day Offer (Before Aug 14, 2023): Adult - USD 1322, Child - USD 1127</li>
      </ul>
    </div>
  );
}

export default Pricing;
