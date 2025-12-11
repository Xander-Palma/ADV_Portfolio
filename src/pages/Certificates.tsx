import Layout from "@/components/Layout";

const certificates = [
  { id: 1 },
  { id: 2 },
];

const Certificates = () => {
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
              IMAGE
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Certificates;
