"use client";

import Image from "next/image";

export function ImageGridSection() {
  const images = [
    "/partners/99acres.png",
    "/partners/images.png",
    "/partners/magic.png",
    "/partners/Untitled.jpeg",
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">We are also in</h2>
        <p className="text-gray-500 mt-2">Trusted by top platforms</p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
        {images.map((src, index) => (
          <div
            key={index}
            className="flex justify-center items-center transition duration-500 ease-in-out"
          >
            <Image
              src={src}
              alt={`Partner Logo ${index + 1}`}
              width={100}
              height={100}
              className="object-contain w-[90px] h-[90px] rounded-[18px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ImageGridSection;
