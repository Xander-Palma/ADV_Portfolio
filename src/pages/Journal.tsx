import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";

// Each company now has its own image. Images are served from `public/`.
const companies = [
  { id: 1, name: "UP Business Incubator for IT", image: "/images/up.jpg" },
  { id: 2, name: "Rivan IT Cebu", image: "/images/rivan.jpg" },
  { id: 3, name: "Dynata Phillippines INC.", image: "/images/dynata.jpg" },
  { id: 4, name: "Mata Technologies INC.", image: "/images/mata.jpg" },
  { id: 5, name: "T.A.R.S.I.E.R 117", image: "/images/tarsier.jpg" },
];

const Journal = () => {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {companies.map((company, index) => (
            <div
              key={company.id}
              className="company-card w-full max-w-[280px] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="aspect-[3/4] flex items-center justify-center text-card-foreground font-semibold text-lg overflow-hidden bg-card"
              >
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-full h-full object-cover cursor-pointer transition-transform duration-200 hover:scale-105"
                  style={{ objectPosition: "50% 10%" }}
                  onClick={() => setActiveImage(company.image)}
                />
              </div>
              <div className="border-t-2 border-foreground/30 mx-4" />
              <div className="p-4 text-center">
                <h3 className="text-foreground font-bold">{company.name}</h3>
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

export default Journal;
