import React from "react";

function Section4() {
  return (
    <div className="py-24 w-full bg-gray-100  ">
      <div className="py-4 flex-1 flex justify-center align-middle text-4xl">
        <h1 className="font-medium">Why us?</h1>
      </div>
      <div className="py-8 flex justify-around items-baseline text-lg align-bottom">
        <div className="flex justify-center flex-col  items-center ">
          <h1>Icon</h1>
          <h2>Secure and Recyclable</h2>
          <h2>Packaging</h2>
        </div>
        <div className="flex justify-center flex-col items-center">
          <h1>Icon</h1>
          <h2>Free Replacements if</h2>
          <h2>Damaged</h2>
        </div>
        <div className="flex justify-center flex-col items-center">
          <h1>Icon</h1>
          <h2>Self-Watering Pots with</h2>
          <h2>Every Plant</h2>
        </div>
      </div>
    </div>
  );
}

export default Section4;
