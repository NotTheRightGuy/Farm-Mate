import Image from "next/image";
import React from "react";

function Section2() {
  return (
    <div className="flex items-center gap-20 justify-between h-72">
      <Category text="Best Sellers" link="/bestseller.jpg" />
      <Category
        text="Vegetable Seeds"
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScZn5SMFNFYP6FzrTepxHeNO_OjE7j0RPXIg&s"
      />
      <Category
        text="Fertilizers"
        link="https://www.bhg.com/thmb/NIhXZpszfRkBe6_4hv8BDfwl7vU=/4000x0/filters:no_upscale():strip_icc()/BHG-Types-of-Garden-Fertilizer-Fb-fTYGcqqK9y1MGOlfzOh-52e52c5904ad4418ba764013ab322c90.jpg"
      />
      <Category
        text="Pesticides"
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4sBNTSqtoZB6HVb6XOkQKGMHx0PtKyXeBow&s"
      />
    </div>
  );
}

export default Section2;

function Category({ text, link }: { text: string; link?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="rounded-full bg-yellow-300 outline outline-pink-300 outline-offset-8 size-32 overflow-hidden">
        <img src={link!} alt="category" className="w-full h-full" />
      </div>
      <p>{text}</p>
    </div>
  );
}
