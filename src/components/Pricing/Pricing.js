import React from "react";
import DisplayPricing from "../DispalyPricing/DisplayPricing";
let priceQualities = [
  {
    id: 1,
    name: "FREE",
    price: 0,
    features: [
      "All are free for you",
      "Bandwith half is free",
      "Power 20% get free",
      "Loading speen 50% special free",
      "Spinner get free",
    ],
  },
  {
    id: 1,
    name: "MEDIUM",
    price: 9.99,
    features: [
      "All are free for you",
      "Bandwith half is free",
      "Power 20% get free",
      "Loading speen 50% special free",
      "Spinner get free",
    ],
  },
  {
    id: 1,
    name: "PREMIUM",
    price: 19.99,
    features: [
      "All are free for you",
      "Bandwith half is free",
      "Power 20% get free",
      "Loading speen 50% special free",
      "Spinner get free",
    ],
  },
];

const Pricing = () => {
  return (
    <div className="grid md:grid-cols-3  text-black mr-2 p-3">
      {priceQualities.map((quality) => (
        <DisplayPricing key={quality.id} quality={quality}></DisplayPricing>
      ))}
    </div>
  );
};

export default Pricing;
