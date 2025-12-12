import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";

// Photo data organized by days - you can add/remove images per day
const photoDays = [
  {
    day: 1,
    images: [
      { id: 1, src: "/tour/day1-1.jpg", alt: "Day 1 - Image 1" },
      { id: 2, src: "/tour/day1-2.jpg", alt: "Day 1 - Image 2" },
      { id: 3, src: "/tour/day1-3.jpg", alt: "Day 1 - Image 3" },
      { id: 4, src: "/tour/day1-4.jpg", alt: "Day 1 - Image 4" },
      { id: 5, src: "/tour/day1-5.jpg", alt: "Day 1 - Image 5" },
      { id: 6, src: "/tour/day1-6.jpg", alt: "Day 1 - Image 6" },
      { id: 7, src: "/tour/day1-7.jpg", alt: "Day 1 - Image 7" },
      { id: 8, src: "/tour/day1-8.jpg", alt: "Day 1 - Image 8" },
    ],
  },
  {
    day: 2,
    images: [
      { id: 1, src: "/tour/day2-1.jpg", alt: "Day 2 - Image 1" },
      { id: 2, src: "/tour/day2-2.jpg", alt: "Day 2 - Image 2" },
      { id: 3, src: "/tour/day2-31.jpg", alt: "Day 2 - Image 3" },
      { id: 4, src: "/tour/day2-3.jpg", alt: "Day 2 - Image 4" },
      { id: 5, src: "/tour/day2-4.jpg", alt: "Day 2 - Image 5" },
      { id: 6, src: "/tour/day2-5.jpg", alt: "Day 2 - Image 6" },
    ],
  },
  {
    day: 3,
    images: [
      { id: 1, src: "/tour/day3-1.jpg", alt: "Day 3 - Image 1" },
      { id: 2, src: "/tour/day3-2.jpg", alt: "Day 3 - Image 2" },
      { id: 3, src: "/tour/day3-3.jpg", alt: "Day 3 - Image 3" },
      { id: 4, src: "/tour/day3-4.jpg", alt: "Day 3 - Image 4" },
      { id: 5, src: "/tour/day3-5.jpg", alt: "Day 3 - Image 5" },
      { id: 6, src: "/tour/day3-6.jpg", alt: "Day 3 - Image 6" },
      { id: 7, src: "/tour/day3-7.jpg", alt: "Day 3 - Image 7" },
    ],
  },
  {
    day: 4,
    images: [
      { id: 1, src: "/tour/day4-1.jpg", alt: "Day 4 - Image 1" },
      { id: 2, src: "/tour/day4-2.jpg", alt: "Day 4 - Image 2" },
      { id: 3, src: "/tour/day4-3.jpg", alt: "Day 4 - Image 3" },
      { id: 4, src: "/tour/day4-4.jpg", alt: "Day 4 - Image 4" },
      { id: 5, src: "/tour/day4-5.jpg", alt: "Day 4 - Image 5" },
      { id: 7, src: "/tour/day4-7.jpg", alt: "Day 4 - Image 7" },
      { id: 8, src: "/tour/day4-8.jpg", alt: "Day 4 - Image 8" },
    ],
  },
];

const Photos = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Close lightbox on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="page-title animate-fade-in">Documented Images</h1>

        <div className="space-y-12">
          {photoDays.map((dayData, dayIndex) => (
            <div
              key={dayData.day}
              className="animate-fade-in"
              style={{ animationDelay: `${dayIndex * 0.1}s` }}
            >
              <h2 className="day-title">Day {dayData.day}</h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {dayData.images.map((image, imageIndex) => (
                  <div
                    key={`${dayData.day}-${image.id}`}
                    className="image-card aspect-square animate-fade-in"
                    style={{ animationDelay: `${(dayIndex * 0.1) + (imageIndex * 0.05)}s` }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover cursor-pointer transition-transform duration-200 hover:scale-105"
                      onClick={() => setActiveImage(image.src)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              className="mb-4 text-white text-sm px-3 py-1 bg-black/40 rounded-md"
              onClick={() => setActiveImage(null)}
            >
              Close
            </button>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={activeImage}
                alt="Enlarged"
                className="w-full h-auto max-h-[80vh] object-contain bg-black"
              />
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Photos;
