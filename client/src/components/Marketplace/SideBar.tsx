"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useEffect, useState } from "react";

export function SideBar(): React.JSX.Element {
    const [price, setPrice] = useState<number[]>([0]);
    const [season, setSeason] = useState<string>("kharif");
    const [commodity, setCommodity] = useState<string>("cerealsandgrains");
    const [quantity, setQuantity] = useState<string>("smalllot");

    useEffect(() => {
        console.log(price[0], season, quantity, commodity);
    }, [price, season, quantity, commodity]);

    return (
        <aside className="h-max w-96 flex flex-col items-start justify-start gap-3 py-8 px-4 rounded-lg bg-slate-100">
            <div className="flex items-center justify-between w-full">
                <p>Filter</p>
                <button
                    className="underline"
                    onClick={() => {
                        setPrice([0]);
                        setQuantity("smalllot");
                        setSeason("kharif");
                    }}
                >
                    Clear all
                </button>
            </div>
            <div className="flex flex-col items-start justify-center w-full gap-2">
                <p>Price - ${price[0]}</p>
                <Slider
                    min={0}
                    max={5000}
                    step={10}
                    className={"w-full h-max"}
                    value={price}
                    onValueChange={(newPrice) => setPrice(newPrice)}
                />
                <div className="flex items-center justify-between w-full">
                    <p>₹0</p>
                    <p>₹5000</p>
                </div>
            </div>
            <div className="flex flex-col items-start justify-center w-full gap-2">
                <p>Commodity</p>
                <Select
                    onValueChange={(value) => setCommodity(value)}
                    value={commodity}
                    defaultValue="Cereals and Grains"
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Commodity" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="cerealsandgrains">
                            Cereals and Grains
                        </SelectItem>
                        <SelectItem value="pulses">Pulses</SelectItem>
                        <SelectItem value="oilseeds">Oilseeds</SelectItem>
                        <SelectItem value="cashcrops">Cash Crops</SelectItem>
                        <SelectItem value="fruits">Fruits</SelectItem>
                        <SelectItem value="vegetables">Vegetables</SelectItem>
                        <SelectItem value="spices">Spices</SelectItem>
                        <SelectItem value="fibers">Fibers</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex flex-col items-start justify-center w-full gap-2">
                <p>Season</p>
                <Select
                    onValueChange={(value) => setSeason(value)}
                    value={season}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Crops" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="kharif">Kharif</SelectItem>
                        <SelectItem value="rabi">Rabi</SelectItem>
                        <SelectItem value="zaid">Zaid</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex flex-col items-start justify-center w-full gap-2">
                <p>Quantity Available</p>
                <Select
                    onValueChange={(value) => setQuantity(value)}
                    value={quantity}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Crops" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="smalllot">Small lots</SelectItem>
                        <SelectItem value="largelot">Large lots</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </aside>
    );
}

("use client");

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useEffect, useState } from "react";

export function SideBar(): React.JSX.Element {
    const [price, setPrice] = useState<number[]>([0]);
    const [season, setSeason] = useState<string>("kharif");
    const [commodity, setCommodity] = useState<string>("cerealsandgrains");
    const [quantity, setQuantity] = useState<string>("smalllot");

    useEffect(() => {
        console.log(price[0], season, quantity, commodity);
    }, [price, season, quantity, commodity]);

    return (
        <aside className="h-max w-96 flex flex-col items-start justify-start gap-3 py-8 px-4 rounded-lg bg-slate-100">
            <div className="flex items-center justify-between w-full">
                <p>Filter</p>
                <button
                    className="underline"
                    onClick={() => {
                        setPrice([0]);
                        setQuantity("smalllot");
                        setSeason("kharif");
                    }}
                >
                    Clear all
                </button>
            </div>
            <div className="flex flex-col items-start justify-center w-full gap-2">
                <p>Price - ${price[0]}</p>
                <Slider
                    min={0}
                    max={5000}
                    step={10}
                    className={"w-full h-max"}
                    value={price}
                    onValueChange={(newPrice) => setPrice(newPrice)}
                />
                <div className="flex items-center justify-between w-full">
                    <p>₹0</p>
                    <p>₹5000</p>
                </div>
            </div>
            <div className="flex flex-col items-start justify-center w-full gap-2">
                <p>Commodity</p>
                <Select
                    onValueChange={(value) => setCommodity(value)}
                    value={commodity}
                    defaultValue="Cereals and Grains"
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Commodity" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="cerealsandgrains">
                            Cereals and Grains
                        </SelectItem>
                        <SelectItem value="pulses">Pulses</SelectItem>
                        <SelectItem value="oilseeds">Oilseeds</SelectItem>
                        <SelectItem value="cashcrops">Cash Crops</SelectItem>
                        <SelectItem value="fruits">Fruits</SelectItem>
                        <SelectItem value="vegetables">Vegetables</SelectItem>
                        <SelectItem value="spices">Spices</SelectItem>
                        <SelectItem value="fibers">Fibers</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex flex-col items-start justify-center w-full gap-2">
                <p>Season</p>
                <Select
                    onValueChange={(value) => setSeason(value)}
                    value={season}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Crops" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="kharif">Kharif</SelectItem>
                        <SelectItem value="rabi">Rabi</SelectItem>
                        <SelectItem value="zaid">Zaid</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex flex-col items-start justify-center w-full gap-2">
                <p>Quantity Available</p>
                <Select
                    onValueChange={(value) => setQuantity(value)}
                    value={quantity}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Crops" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="smalllot">Small lots</SelectItem>
                        <SelectItem value="largelot">Large lots</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </aside>
    );
}
