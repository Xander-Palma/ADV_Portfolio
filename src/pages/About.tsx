import Layout from "@/components/Layout";
import { GraduationCap, Target, Heart, Gamepad2, Code, Globe, Wrench, Palette } from "lucide-react";

const highlights = [
  { icon: GraduationCap, title: "Education", description: "3rd Year BSIT Student at Holy Cross of Davao College" },
  { icon: Target, title: "Focus", description: "Software Development & Systems Analysis" },
  { icon: Heart, title: "Passion", description: "Technology, Innovation & Digital Solutions" },
  { icon: Gamepad2, title: "Interest", description: "Gaming Industry & Digital Environments" },
];

const programmingLanguages = ["HTML", "CSS", "JavaScript", "Python", "Java", "PHP", "MySQL", "C++"];
const frameworks = ["React", "Tailwind CSS", "Bootstrap", "Node.js"];
const tools = ["Visual Studio Code", "Git & GitHub", "Figma", "MySQL", "XAMPP", "Canva", "Microsoft Office", "Google Workspace"];
const softSkills = ["Video Editing", "Programming", "Photography", ];

const SkillSection = ({ 
  title, 
  icon: Icon, 
  items 
}: { 
  title: string; 
  icon: React.ComponentType<{ className?: string }>; 
  items: string[];
}) => (
  <div className="bg-secondary/50 rounded-xl p-5">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h3 className="text-lg font-bold text-foreground">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span 
          key={item}
          className="px-3 py-2 bg-primary/20 text-primary rounded-lg text-sm font-medium"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

const About = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="page-title animate-fade-in">About Me</h1>
        
        {/* Introduction */}
        <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <p className="text-base md:text-lg text-foreground leading-relaxed text-justify font-medium mb-8">
            I am currently enrolled in Holy Cross of Davao College as a 3rd-year Bachelor of Science in 
            Information Technology (BSIT), and a deep fascination with computing and digital innovation 
            drives me. A passion for technology, software development, and systems analysis fuels my 
            academic journey. Beyond my coursework, I actively engage with the gaming industry's 
            technological landscape, which continually sharpens my problem-solving skills and 
            understanding of complex digital environments.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {highlights.map((item, index) => (
            <div 
              key={item.title}
              className="bg-secondary/50 rounded-xl p-5 flex items-start gap-4 hover:bg-secondary/70 transition-colors"
            >
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-foreground font-bold mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <h2 className="text-2xl font-bold text-primary mb-6">Skills & Expertise</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <SkillSection title="Programming Languages" icon={Code} items={programmingLanguages} />
            <SkillSection title="Frameworks & Libraries" icon={Globe} items={frameworks} />
            <SkillSection title="Tools & Software" icon={Wrench} items={tools} />
            <SkillSection title="Skills" icon={Palette} items={softSkills} />
          </div>
        </div>


        {/* Personal Interests */}
        <div className="mt-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <h2 className="text-2xl font-bold text-primary mb-4">Personal Interests</h2>
          <div className="flex flex-wrap gap-2">
            {["Gaming", "Technology", "Programming", "Web Development", "Music", "Photography", "Problem Solving"].map((interest) => (
              <span 
                key={interest}
                className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;