import Layout from "@/components/Layout";
import { Mail, MapPin, Phone, Github, Linkedin, Facebook, Instagram } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "xanderjyle.palma@hcdc.edu.ph", href: "mailto:xanderjyle.palma@hcdc.edu.ph" },
  { icon: Phone, label: "Phone", value: "+63 935 605 8212", href: "tel:+639356058212" },
  { icon: MapPin, label: "Location", value: "Davao City, Philippines", href: null },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/Xander-Palma" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/xander.palma" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/jyle.palma" },
];

const Contact = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="page-title animate-fade-in">Get In Touch</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-foreground font-medium hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links & Message */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-2xl font-bold text-foreground mb-6">Connect With Me</h2>
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-secondary/50 rounded-xl flex items-center justify-center hover:bg-primary/20 transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>

            <div className="bg-secondary/50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-3">Let's Work Together!</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                Feel free to reach out through any of the channels above!
              </p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <h2 className="text-2xl font-bold text-foreground mb-6">Education</h2>
          <div className="bg-secondary/50 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-primary">Bachelor of Science in Information Technology</h3>
                <p className="text-foreground font-medium mt-1">Holy Cross of Davao College</p>
                <p className="text-muted-foreground mt-1">3rd Year Student</p>
              </div>
              <div className="text-muted-foreground">
                <p>2022 - Present</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

