import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="page-title animate-fade-in">About Me</h1>
        
        <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <p className="text-base md:text-lg text-foreground leading-relaxed text-justify font-medium">
            I am currently enrolled in Holy Cross of Davao College as a 3rd-year Bachelor of Science in 
            Information Technology (BSIT), and a deep fascination with computing and digital innovation 
            drives me. A passion for technology, software development, and systems analysis fuels my 
            academic journey. Beyond my coursework, I actively engage with the gaming industry's 
            technological landscape, which continually sharpens my problem-solving skills and 
            understanding of complex digital environments.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
