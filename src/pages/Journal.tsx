import Layout from "@/components/Layout";

const companies = [
  { id: 1, name: "Company 1" },
  { id: 2, name: "Company 2" },
  { id: 3, name: "Company 3" },
  { id: 4, name: "Company 4" },
  { id: 5, name: "Company 5" },
];

const Journal = () => {
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
              <div className="aspect-[3/4] flex items-center justify-center text-card-foreground font-semibold text-lg">
                IMAGE
              </div>
              <div className="border-t-2 border-foreground/30 mx-4" />
              <div className="p-4 text-center">
                <h3 className="text-foreground font-bold">{company.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Journal;
