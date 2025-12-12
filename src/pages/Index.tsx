import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-73px)] flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-16 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <div className="flex-1 animate-fade-in">
              <p className="text-lg md:text-xl text-foreground mb-2">Hi!, I'm</p>
              <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4">
                Xander Palma
              </h1>
              <p className="text-lg md:text-xl text-foreground">
                And I am a <span className="text-primary font-bold">BSIT</span> student
              </p>
            </div>

            {/* Profile Image */}
            <div className="flex-shrink-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-64 h-80 md:w-80 md:h-96 rounded-xl bg-card overflow-hidden flex items-center justify-center">
                <img
                  src="/images/profile.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 10%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
