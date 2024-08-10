"use client";

import { useState, useRef } from "react";
import { UploadCloudIcon, Leaf, X, ShoppingCart, ShipIcon } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ServerResponse {
    confidence: string;
    description: string;
    image_url: string;
    prevent: string;
    supplement_buy_link: string;
    supplement_name: string;
    supplement_image_url: string;
    supplement_url: string;
    title: string;
}

export function NavBar() {
    return (
        <nav className="flex justify-between px-6 py-4 items-center fixed top-0 left-0 right-0 bg-white shadow">
            <span className="font-medium text-lg">Kisan Parikshan</span>
            <div>
                <img
                    src="https://api.dicebear.com/9.x/miniavs/svg?seed=Pumpkin"
                    className="w-10 h-10 rounded-full border-2"
                    alt="User avatar"
                />
            </div>
        </nav>
    );
}

import { SVGProps } from "react";
import { Cursor } from "@/components/core/cursor";

const MouseIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={26}
            height={31}
            fill="none"
            {...props}
        >
            <g clipPath="url(#a)">
                <path
                    fill={"#22c55e"}
                    fillRule="evenodd"
                    stroke={"#fff"}
                    strokeLinecap="square"
                    strokeWidth={2}
                    d="M21.993 14.425 2.549 2.935l4.444 23.108 4.653-10.002z"
                    clipRule="evenodd"
                />
            </g>
            <defs>
                <clipPath id="a">
                    <path fill={"#22c55e"} d="M0 0h26v31H0z" />
                </clipPath>
            </defs>
        </svg>
    );
};

export function Cursor2({ text, url }: { text: string; url: string }) {
    return (
        <div className="mt-2">
            <button
                className="overflow-hidden rounded-md bg-gray-100 p-2 dark:bg-black hover:bg-gray-200 transition-colors"
                onClick={() => window.open(url)}
            >
                <Cursor
                    attachToParent
                    variants={{
                        initial: { scale: 0.3, opacity: 0 },
                        animate: { scale: 1, opacity: 1 },
                        exit: { scale: 0.3, opacity: 0 },
                    }}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.15,
                    }}
                    className="left-12 top-4"
                >
                    <div>
                        <MouseIcon className="h-6 w-6" />
                        <div className="ml-4 mt-1 rounded-[4px] bg-green-500 p-2 text-neutral-50 flex gap-2">
                            <ShoppingCart /> Buy
                        </div>
                    </div>
                </Cursor>
                <p>{text}</p>
            </button>
        </div>
    );
}

export default function KisanParikshan() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [responseData, setResponseData] = useState<ServerResponse | null>(
        null
    );
    const [isUploading, setIsUploading] = useState<boolean>(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
            setSelectedFile(file);
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
        }
    };

    const handleRemove = () => {
        setSelectedFile(null);
        setPreviewUrl(null);
        setResponseData(null);
        setIsUploading(false);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert("Please select a file first!");
            return;
        }

        setIsUploading(true);

        const formData = new FormData();
        formData.append("image", selectedFile);

        try {
            const response = await fetch("http://localhost:5000/submit", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data: ServerResponse = await response.json();
            setResponseData(data);
            console.log("Response from server:", data);
        } catch (error) {
            console.error("Error uploading file:", error);
            alert("Error uploading file. Please try again.");
            setIsUploading(false);
        }
    };

    return (
        <div className="relative pt-20 p-6">
            <NavBar />
            <motion.div
                className="h-[85vh] bg-[#588157] rounded-lg text-white mt-4 px-8 py-6 font-rubik flex overflow-hidden"
                animate={{ width: responseData ? "50%" : "100%" }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex flex-1">
                    <div className="flex-1">
                        <h1 className="font-bold text-3xl">Kisan Parikshan</h1>
                        <p className="mt-2">
                            Kisan Parikshan is an AI-powered plant disease
                            detector that helps farmers and gardeners diagnose
                            plant health issues with ease. By simply uploading
                            an image of the affected leaves, our advanced model
                            analyzes the visual symptoms and provides an
                            accurate diagnosis of what might be wrong with your
                            plant. This tool empowers users to take timely
                            action to protect their crops and ensure healthy
                            growth.
                        </p>
                        {responseData ? (
                            <div className="flex justify-center items-center flex-col mt-10">
                                <div className="relative w-full h-56 mb-4">
                                    <Image
                                        src={previewUrl!}
                                        alt="Uploaded image"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center mb-4"
                                    onClick={handleRemove}
                                >
                                    <X size={16} className="mr-2" />
                                    Remove Analysis
                                </button>
                            </div>
                        ) : (
                            <>
                                <h2 className="mt-10 text-xl font-semibold">
                                    Upload Image
                                </h2>
                            </>
                        )}

                        <div
                            className={`${
                                isUploading ? "hidden" : "block"
                            } h-1/2 rounded-lg border-4 border-dotted mt-2 p-4 flex justify-center items-center flex-col`}
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                        >
                            <input
                                type="file"
                                id="fileInput"
                                ref={fileInputRef}
                                className="hidden"
                                onChange={handleFileChange}
                                accept="image/*"
                            />
                            <label
                                htmlFor="fileInput"
                                className="cursor-pointer"
                            >
                                <UploadCloudIcon
                                    size={40}
                                    className="hover:opacity-80 transition-opacity"
                                />
                            </label>
                            <p className="mt-2 font-semibold">
                                {selectedFile
                                    ? selectedFile.name
                                    : "Choose a file or drag & drop it here"}
                            </p>
                            {selectedFile && (
                                <div className="flex mt-4 space-x-4">
                                    <button
                                        className="bg-white text-[#588157] px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                                        onClick={handleUpload}
                                    >
                                        Upload
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center"
                                        onClick={handleRemove}
                                    >
                                        <X size={16} className="mr-2" />
                                        Remove
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                    {!responseData && (
                        <div className="flex-1 flex justify-center items-center">
                            {previewUrl ? (
                                <div className="relative w-full h-full overflow-hidden">
                                    <Image
                                        src={previewUrl}
                                        alt="Uploaded image preview"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                            ) : (
                                <Leaf className="opacity-40 size-52" />
                            )}
                        </div>
                    )}
                </div>
            </motion.div>
            {responseData && (
                <motion.div
                    className="absolute top-[calc(20px+3rem)] right-6 w-[calc(50%-1.5rem)] h-full bg-transparent p-6 rounded-lg overflow-x-hidden font-rubik"
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="font-medium text-2xl">
                        {responseData.title.split(":")[1]}
                    </h1>
                    <p className="opacity-75">
                        Usually seen in {responseData.title.split(":")[0]}
                    </p>
                    <p className="text-sm opacity-75">
                        Confidence Level - {responseData.confidence}%
                    </p>
                    <p className="mt-8 opacity-80 ">
                        {responseData.description}
                    </p>
                    <h2 className="text-lg mt-4 font-semibold">
                        How to prevent?
                    </h2>
                    <p className="opacity-80 ">{responseData.prevent}</p>
                    <h2 className="text-lg mt-4 font-semibold">
                        Medicines that can be used
                    </h2>
                    <Cursor2
                        text={responseData.supplement_name}
                        url={responseData.supplement_buy_link}
                    />
                </motion.div>
            )}
        </div>
    );
}
