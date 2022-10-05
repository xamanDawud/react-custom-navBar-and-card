import React from "react";
import Features from "../Features/Features";

const DisplayPricing = ({ quality }) => {
  let { features } = quality;
  //   console.log(quality);
  features.map((feature) => console.log(feature));
  return (
    <div className="bg-sky-400 mr-4 rounded-md p-3 mb-7">
      <div>
        <h1 className="text-4xl font-semibold text-white">
          {quality.price} <span className="text-2xl">/mon</span>
        </h1>
        <h1 className="text-3xl mt-2">{quality.name}</h1>
      </div>

      <div>
        {features.map((feature) => (
          <Features features={feature}></Features>
        ))}
        <button className="w-full bg-black p-3 ml-0  hover:bg-gray-400 text-white rounded-md mt-3">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default DisplayPricing;
