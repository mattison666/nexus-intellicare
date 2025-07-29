import { motion } from "framer-motion";
import { Users, Target, Eye, Heart, Award, TrendingUp } from "lucide-react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  const team = [
    {
      name: "Alex Chen",
      role: "CEO & AI Strategist",
      description: "Leading AI innovation with 10+ years in machine learning"
    },
    {
      name: "Sarah Rodriguez",
      role: "CTO & Head of Development",
      description: "Full-stack expert specializing in AI integration"
    },
    {
      name: "Marcus Thompson",
      role: "Creative Director",
      description: "Award-winning designer with AI-powered creativity"
    },
    {
      name: "Emily Wang",
      role: "Head of Marketing AI",
      description: "Digital marketing expert leveraging AI for growth"
    }
  ];

  const achievements = [
    { icon: Award, title: "AI Innovation Award 2024", org: "Tech Excellence" },
    { icon: TrendingUp, title: "Top 10 AI Companies", org: "Industry Weekly" },
    { icon: Users, title: "Best AI Team", org: "StartupHub" },
    { icon: Target, title: "Client Success Award", org: "Business Leaders" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-neural relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About{" "}
                <span className="bg-gradient-cyber bg-clip-text text-transparent">
                  AI Creative Group
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We're a team of visionaries, innovators, and creators dedicated to shaping the future through intelligent solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Introduction */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold">
                  Who We Are
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded in 2020, AI Creative Group emerged from a simple belief: artificial intelligence should enhance human creativity, not replace it. We combine cutting-edge AI technology with human insight to create solutions that are both intelligent and intuitive.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our multidisciplinary team brings together expertise in AI, design, development, and marketing to deliver comprehensive solutions that transform businesses and empower innovation.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-cyber rounded-2xl flex items-center justify-center">
                    <Users className="w-16 h-16 text-primary-foreground" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="bg-gradient-cyber bg-clip-text text-transparent">Foundation</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our mission, vision, and values guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Mission",
                  description: "To democratize AI technology and make intelligent solutions accessible to businesses of all sizes, enabling them to innovate and grow."
                },
                {
                  icon: Eye,
                  title: "Vision",
                  description: "A world where AI enhances human potential, creating more efficient, creative, and meaningful work experiences for everyone."
                },
                {
                  icon: Heart,
                  title: "Values",
                  description: "Innovation, integrity, collaboration, and excellence. We believe in ethical AI that serves humanity and drives positive change."
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                  className="p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl text-center"
                >
                  <div className="w-16 h-16 bg-gradient-cyber rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet Our <span className="bg-gradient-cyber bg-clip-text text-transparent">Team</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The brilliant minds behind our AI innovations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto bg-gradient-cyber rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl group-hover:shadow-glow-primary transition-all duration-300">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Achievements */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Awards & <span className="bg-gradient-cyber bg-clip-text text-transparent">Recognition</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Recognition for our commitment to AI excellence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl"
                >
                  <div className="w-16 h-16 bg-gradient-glow rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold mb-2">{achievement.title}</h3>
                  <p className="text-sm text-primary">{achievement.org}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Work <span className="bg-gradient-cyber bg-clip-text text-transparent">Together?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how our AI expertise can transform your business
              </p>
              <Button variant="glow" size="lg">
                Contact Us Today
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;