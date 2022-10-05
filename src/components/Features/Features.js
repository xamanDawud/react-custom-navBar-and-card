import React from "react";
import { BeakerIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

const Features = ({ features }) => {
  return (
    <div className="flex items-center my-3 ">
      <CheckCircleIcon className="h-6 w-6 ml-2 mt-2   " />
      <h1 className="ml-4 mt-4">{features}</h1>
    </div>
  );
};

export default Features;
