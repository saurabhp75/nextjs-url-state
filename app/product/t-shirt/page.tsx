"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const colorVariants = ["black", "white", "blue"];
const sizeVariants = ["xs", "s", "md", "l", "xl"];

const imageUrls = {
  blue: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-circles-blue.png%3Fv%3D1690003396&w=1080&q=75",
  black:
    "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=1080&q=75",
  white:
    "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-2.png%3Fv%3D1689798965&w=1080&q=75",
};

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState(colorVariants[0]);
  const [selectedSize, setSelectedSize] = useState(sizeVariants[2]);

  //   const selectedColor = "black";
  //   const selectedSize = "md";

  useEffect(() => {
    window.history.pushState(
      null,
      "",
      `?color=${selectedColor}&size=${selectedSize}`
    );
  }, [selectedColor, selectedSize]);

  return (
    <main className="min-h-screen bg-gray-200 flex items-center justify-center  text-gray-800">
      <div className="bg-white flex items-center w-[96%] rounded min-h-[75vh]">
        <div className="flex-[2] flex justify-center">
          <Image
            /// @ts-ignore
            src={imageUrls[selectedColor]}
            alt="Shirt variant"
            width={622}
            height={550}
          />
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-semibold">Acme Circles T-Shirt</h1>
          <section className="bg-blue-500 text-white inline-block px-2 py-1 rounded-full mt-3">
            $20.00 USD
          </section>

          <div>
            <section className="mb-5">
              <h2 className="text-md uppercase mb-2">Color</h2>

              <div className="flex gap-2">
                {colorVariants.map((color, index) => (
                  <button
                    key={index}
                    className={`bg-gray-100 px-4 py-1 rounded-full border-2 ${
                      selectedColor === color
                        ? "border-blue-500"
                        : "border-gray-200"
                    }`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                  </button>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-md mb-2 uppercase">Sizes</h2>
              {sizeVariants.map((size, index) => (
                <button
                  key={index}
                  className={`bg-gray-100 px-4 py-1 rounded-full border-2 ${
                    selectedSize === size
                      ? "border-blue-500"
                      : "border-gray-200"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size.toUpperCase()}
                </button>
              ))}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
