import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";

const certificates = [
  { id: 1, name: "Certificate 1", image: "/images/cert.jpg" },
  { id: 2, name: "Certificate 2", image: "/images/tarcert.jpg" },
];

const Certificates = () => {
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
        <h1 className="page-title animate-fade-in">Certificates</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="image-card w-full max-w-md aspect-[4/3] animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <img
                src={cert.image}
                alt={cert.name}
                className="w-full h-full object-cover cursor-pointer transition-transform duration-200 hover:scale-105"
                onClick={() => setActiveImage(cert.image)}
              />
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

export default Certificates;
