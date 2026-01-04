import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Palette, Database } from "lucide-react";

const quickStats = [
  { icon: Code, label: "Languages", value: "6+" },
  { icon: Database, label: "Tools", value: "8+" },
];

const Index = () => {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-73px)] flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-16 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <div className="flex-1 animate-fade-in">
              <p className="text-lg md:text-xl text-muted-foreground mb-2">Hi!, I'm</p>
              <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4">
                Xander Palma
              </h1>
              <p className="text-lg md:text-xl text-foreground mb-2">
                And I am a <span className="text-primary font-bold">BSIT</span> student
              </p>
              <p className="text-muted-foreground mb-6 max-w-md">
                Aspiring Software Developer | Web Enthusiast | Video Editor
              </p>

              {/* Quick Stats */}
              <div className="flex gap-6 mb-8">
                {quickStats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-xl font-bold text-primary">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/about" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  About Me <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
                >
                  Contact Me
                </Link>
              </div>
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


 