import Image from "next/image";
import type { PartnersSectionData } from "@/lib/partners";

type ImageGridSectionProps = PartnersSectionData

export function ImageGridSection({
  title,
  subtitle,
  partners,
}: ImageGridSectionProps) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-500 mt-2">{subtitle}</p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
        {partners.map((partner, index) => {
          const logo = (
            <Image
              src={partner.logoUrl}
              alt={partner.name || `Partner Logo ${index + 1}`}
              width={100}
              height={100}
              className="object-contain w-[90px] h-[90px] rounded-[18px]"
            />
          )

          return partner.website ? (
            <a
              key={partner._key || partner.logoUrl}
              href={partner.website}
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center transition duration-500 ease-in-out"
            >
              {logo}
            </a>
          ) : (
            <div
              key={partner._key || partner.logoUrl}
              className="flex justify-center items-center transition duration-500 ease-in-out"
            >
              {logo}
            </div>
          )
        })}
      </div>
    </section>
  );
}

export default ImageGridSection;
