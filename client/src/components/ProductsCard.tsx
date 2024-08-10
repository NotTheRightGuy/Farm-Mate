"use client";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogSubtitle,
  DialogClose,
  DialogDescription,
  DialogContainer,
} from "@/components/ui/dialog";
import { PlusIcon } from "lucide-react";
import { fontjosefin } from "@/app/layout";
import { ChevronRight } from "lucide-react";
import React from "react";
import { title } from "process";
type ProductCardProps = {
  title: string;
  description: string;
  price: number;
  image: string;
};
const ProductCards = ({title,price,description,image}:ProductCardProps) => {
  return (
    <Dialog
      transition={{
        type: "spring",
        bounce: 0.05,
        duration: 0.25,
      }}
    >
      <DialogTrigger
        style={{
          borderRadius: "12px",
        }}
        className="flex max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
      >
        <div>
          <div
            className={`absolute top-2 left-2 px-3 py-0.5 flex items-center justify-center text-[12px] font-bold text-teal-950  bg-yellow-400 ${fontjosefin}`}
          >
            SALE
          </div>
          <div className="flex flex-col gap-2">
            <DialogImage
              src="https://www.ugaoo.com/cdn/shop/files/Smallpot-164.jpg?v=1704867612&width=375"
              alt="A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood."
              className="h-48 w-full object-cover"
            />
            <div className="flex flex-grow flex-row items-end justify-between p-2">
              <div>
                <DialogTitle className="text-xl font-semibold">
                  {title}
                </DialogTitle>
                <DialogSubtitle className="text-[#149253]   ">
                  From ₹ {price}
                </DialogSubtitle>
              </div>
              <button
                type="button"
                className="relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500"
                aria-label="Open dialog"
              >
                <PlusIcon size={12} />
              </button>
            </div>
          </div>
        </div>
      </DialogTrigger>

      <DialogContainer>
        <DialogContent
          style={{
            borderRadius: "24px",
          }}
          className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[400px] sm:h-[500px]"
        >
          <DialogImage
            src="https://www.ugaoo.com/cdn/shop/files/Smallpot-164.jpg"
            alt="A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood."
            className="h-full w-full object-center"
          />
          <div className="p-6">
            <DialogTitle className="text-2xl text-zinc-950 dark:text-zinc-50">
              {title}
            </DialogTitle>
            <DialogSubtitle className="text-zinc-700 dark:text-zinc-400">
              From ₹ {price}
            </DialogSubtitle>
            <DialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.8, y: 100 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.8, y: 100 },
              }}
            >
              <p className="mt-2 text-zinc-500 dark:text-zinc-500">
               {description}
              </p>
              <p className="text-zinc-500">
                Research conducted in the 1970s revealed that he’d designed the
                “EB 27” double-arm desk lamp in 1925, handcrafting it from
                nickel-plated brass, aluminium and varnished wood.
              </p>
              <div className="text-center mt-3 rounded-lg text-white bg-[#149253] w-full px-4 py-2 flex justify-between items-center text-sm font-medium cursor-pointer">
                Buy now
                <ChevronRight size={16} className="ml-5 " />
              </div>
            </DialogDescription>
          </div>
          <DialogClose className="text-zinc-50" />
        </DialogContent>
      </DialogContainer>
    </Dialog>
  );
};
export default ProductCards;

export const marketplaceData = [
  {
    id: 1,
    price: 2500,
    season: "kharif",
    commodity: "Rice",
    quantity: 500,
    publisherId: "PUB001",
    sellerNumber: "+91 9876543210",
    city: "Patna",
    state: "Bihar",
    description:
      "Premium quality Basmati rice, known for its aromatic flavor and long grains. Ideal for biryani and pulao.",
  },
  {
    id: 2,
    price: 3000,
    season: "rabi",
    commodity: "Wheat",
    quantity: 750,
    publisherId: "PUB002",
    sellerNumber: "+91 8765432109",
    city: "Ludhiana",
    state: "Punjab",
    description:
      "High-protein wheat variety, perfect for making chapatis, bread, and other baked goods.",
  },
  {
    id: 3,
    price: 1800,
    season: "zaid",
    commodity: "Watermelon",
    quantity: 300,
    publisherId: "PUB003",
    sellerNumber: "+91 7654321098",
    city: "Nashik",
    state: "Maharashtra",
    description:
      "Sweet and juicy watermelons, farm-fresh and ready for consumption. Great for summer refreshments.",
  },
  {
    id: 4,
    price: 4500,
    season: "kharif",
    commodity: "Cotton",
    quantity: 200,
    publisherId: "PUB004",
    sellerNumber: "+91 6543210987",
    city: "Ahmedabad",
    state: "Gujarat",
    description:
      "High-quality long-staple cotton, suitable for textile manufacturing and garment production.",
  },
  {
    id: 5,
    price: 1200,
    season: "rabi",
    commodity: "Potato",
    quantity: 1000,
    publisherId: "PUB005",
    sellerNumber: "+91 5432109876",
    city: "Agra",
    state: "Uttar Pradesh",
    description:
      "Fresh, medium-sized potatoes ideal for various culinary uses including curries, fries, and mashes.",
  },
  {
    id: 6,
    price: 3500,
    season: "kharif",
    commodity: "Soybean",
    quantity: 400,
    publisherId: "PUB006",
    sellerNumber: "+91 4321098765",
    city: "Indore",
    state: "Madhya Pradesh",
    description:
      "Non-GMO soybeans rich in protein and nutrients. Suitable for oil extraction and food processing.",
  },
  {
    id: 7,
    price: 2800,
    season: "rabi",
    commodity: "Mustard",
    quantity: 350,
    publisherId: "PUB007",
    sellerNumber: "+91 3210987654",
    city: "Jaipur",
    state: "Rajasthan",
    description:
      "High-oil content mustard seeds, perfect for oil extraction and use in pickles and spices.",
  },
  {
    id: 8,
    price: 1500,
    season: "zaid",
    commodity: "Cucumber",
    quantity: 250,
    publisherId: "PUB008",
    sellerNumber: "+91 2109876543",
    city: "Pune",
    state: "Maharashtra",
    description:
      "Crisp and fresh cucumbers, ideal for salads and raitas. Organically grown without pesticides.",
  },
  {
    id: 9,
    price: 4000,
    season: "kharif",
    commodity: "Sugarcane",
    quantity: 2000,
    publisherId: "PUB009",
    sellerNumber: "+91 1098765432",
    city: "Kolhapur",
    state: "Maharashtra",
    description:
      "High sucrose content sugarcane, suitable for sugar production and jaggery making.",
  },
  {
    id: 10,
    price: 2200,
    season: "rabi",
    commodity: "Chickpeas",
    quantity: 600,
    publisherId: "PUB010",
    sellerNumber: "+91 9876543211",
    city: "Gulbarga",
    state: "Karnataka",
    description:
      "Premium quality chickpeas, rich in protein and fiber. Ideal for making curry, hummus, and snacks.",
  },
  {
    id: 11,
    price: 3200,
    season: "kharif",
    commodity: "Groundnut",
    quantity: 450,
    publisherId: "PUB011",
    sellerNumber: "+91 8765432110",
    city: "Rajkot",
    state: "Gujarat",
    description:
      "Large, flavorful groundnuts perfect for snacking, oil extraction, and use in confectioneries.",
  },
  {
    id: 12,
    price: 1700,
    season: "rabi",
    commodity: "Onion",
    quantity: 800,
    publisherId: "PUB012",
    sellerNumber: "+91 7654321099",
    city: "Nashik",
    state: "Maharashtra",
    description:
      "Red onions with a strong flavor, suitable for various culinary uses and long shelf life.",
  },
  {
    id: 13,
    price: 2600,
    season: "zaid",
    commodity: "Muskmelon",
    quantity: 350,
    publisherId: "PUB013",
    sellerNumber: "+91 6543210988",
    city: "Kurnool",
    state: "Andhra Pradesh",
    description:
      "Sweet and fragrant muskmelons, rich in vitamins and perfect for summer consumption.",
  },
  {
    id: 14,
    price: 3800,
    season: "kharif",
    commodity: "Turmeric",
    quantity: 150,
    publisherId: "PUB014",
    sellerNumber: "+91 5432109877",
    city: "Erode",
    state: "Tamil Nadu",
    description:
      "High-curcumin content turmeric, known for its medicinal properties and use in cooking.",
  },
  {
    id: 15,
    price: 2000,
    season: "rabi",
    commodity: "Barley",
    quantity: 550,
    publisherId: "PUB015",
    sellerNumber: "+91 4321098766",
    city: "Karnal",
    state: "Haryana",
    description:
      "Nutritious barley grains, suitable for brewing, animal feed, and human consumption.",
  },
  {
    id: 16,
    price: 4200,
    season: "kharif",
    commodity: "Jute",
    quantity: 300,
    publisherId: "PUB016",
    sellerNumber: "+91 3210987655",
    city: "Kolkata",
    state: "West Bengal",
    description:
      "High-quality jute fibers, ideal for making eco-friendly packaging materials and textiles.",
  },
  {
    id: 17,
    price: 1400,
    season: "rabi",
    commodity: "Tomato",
    quantity: 700,
    publisherId: "PUB017",
    sellerNumber: "+91 2109876544",
    city: "Madanapalle",
    state: "Andhra Pradesh",
    description:
      "Fresh, ripe tomatoes perfect for salads, curries, and sauce making. Organically grown.",
  },
  {
    id: 18,
    price: 3300,
    season: "zaid",
    commodity: "Pumpkin",
    quantity: 400,
    publisherId: "PUB018",
    sellerNumber: "+91 1098765433",
    city: "Lucknow",
    state: "Uttar Pradesh",
    description:
      "Large, nutritious pumpkins suitable for various culinary uses and rich in vitamins.",
  },
  {
    id: 19,
    price: 2900,
    season: "kharif",
    commodity: "Maize",
    quantity: 850,
    publisherId: "PUB019",
    sellerNumber: "+91 9876543212",
    city: "Davangere",
    state: "Karnataka",
    description:
      "High-yield maize variety, suitable for both human consumption and animal feed.",
  },
  {
    id: 20,
    price: 1900,
    season: "rabi",
    commodity: "Peas",
    quantity: 300,
    publisherId: "PUB020",
    sellerNumber: "+91 8765432111",
    city: "Jalandhar",
    state: "Punjab",
    description:
      "Sweet and tender green peas, perfect for curries, snacks, and frozen food industry.",
  },
];
