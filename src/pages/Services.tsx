import { motion } from "framer-motion";
import { 
  Palette, Code, Megaphone, Shield, 
  Zap, Eye, Smartphone, BarChart,
  Brain, Search, Lock, Cloud,
  ArrowRight
} from "lucide-react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const serviceCategories = [
    {
      title: "Design & Identity",
      icon: Palette,
      description: "AI-powered design solutions that captivate and convert",
      color: "from-purple-500 to-pink-500",
      services: [
        {
          name: "Logo Design",
          description: "AI-assisted brand identity creation",
          icon: Eye
        },
        {
          name: "AI UI/UX",
          description: "Intelligent user interface design",
          icon: Smartphone
        },
        {
          name: "Motion Graphics & 3D",
          description: "Dynamic visual content creation",
          icon: Zap
        }
      ]
    },
    {
      title: "Development",
      icon: Code,
      description: "Smart applications built with cutting-edge technology",
      color: "from-blue-500 to-cyan-500",
      services: [
        {
          name: "Web Apps",
          description: "Responsive web applications",
          icon: Code
        },
        {
          name: "Mobile Apps",
          description: "Cross-platform mobile solutions",
          icon: Smartphone
        },
        {
          name: "Smart Dashboards",
          description: "AI-powered analytics dashboards",
          icon: BarChart
        },
        {
          name: "ChatGPT Integration",
          description: "AI chatbot implementation",
          icon: Brain
        }
      ]
    },
    {
      title: "Smart Marketing",
      icon: Megaphone,
      description: "Intelligent marketing strategies that drive growth",
      color: "from-green-500 to-emerald-500",
      services: [
        {
          name: "AI Content Generation",
          description: "Automated content creation",
          icon: Brain
        },
        {
          name: "SMMA Campaigns",
          description: "Social media marketing automation",
          icon: Megaphone
        },
        {
          name: "AI SEO Optimization",
          description: "Search engine optimization",
          icon: Search
        }
      ]
    },
    {
      title: "Security & Cloud",
      icon: Shield,
      description: "Secure and scalable infrastructure solutions",
      color: "from-orange-500 to-red-500",
      services: [
        {
          name: "AI Penetration Testing",
          description: "Automated security testing",
          icon: Shield
        },
        {
          name: "Data Protection",
          description: "Advanced data security measures",
          icon: Lock
        },
        {
          name: "Secure Cloud Storage",
          description: "Encrypted cloud solutions",
          icon: Cloud
        }
      ]
    }
  ];

  const competitiveAdvantages = [
    {
      icon: Brain,
      title: "AI-First Approach",
      description: "Every solution is built with AI at its core"
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Quick turnaround times without compromising quality"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security for all our solutions"
    },
    {
      icon: BarChart,
      title: "Data-Driven Results",
      description: "Measurable outcomes and continuous optimization"
    }
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
          
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {t("servicesPageTitle")}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Comprehensive AI-powered solutions designed to transform your business and accelerate growth.
              </p>
              
              <div className="flex items-center justify-center">
                <div className="aspect-video w-full max-w-2xl bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-cyber rounded-2xl flex items-center justify-center">
                    <Brain className="w-16 h-16 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Categories */}
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
                Service <span className="bg-gradient-cyber bg-clip-text text-transparent">Categories</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our comprehensive range of AI-powered services
              </p>
            </motion.div>

            <div className="space-y-20">
              {serviceCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Category Header */}
                  <div className="text-center mb-12">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${category.color} rounded-3xl mb-6 shadow-glow-primary`}
                    >
                      <category.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">{category.title}</h3>
                    <p className="text-lg text-muted-foreground max-w-xl mx-auto">{category.description}</p>
                  </div>

                  {/* Services Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.services.map((service, serviceIndex) => (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        viewport={{ once: true }}
                        className="group p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/30 transition-all duration-300"
                      >
                        <div className="w-14 h-14 bg-gradient-cyber rounded-xl flex items-center justify-center mb-6 group-hover:shadow-glow-primary transition-all duration-300">
                          <service.icon className="w-7 h-7 text-primary-foreground" />
                        </div>
                        
                        <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {service.name}
                        </h4>
                        
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {service.description}
                        </p>

                        <motion.a
                          href="#"
                          whileHover={{ x: 5 }}
                          className="inline-flex items-center text-primary font-medium text-sm group-hover:text-primary-glow transition-colors"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </motion.a>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Competitive Advantages */}
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
                Why Choose <span className="bg-gradient-cyber bg-clip-text text-transparent">Our Services</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our competitive advantages that set us apart
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {competitiveAdvantages.map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                  className="text-center p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl"
                >
                  <div className="w-16 h-16 bg-gradient-glow rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <advantage.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{advantage.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business with{" "}
                <span className="bg-gradient-cyber bg-clip-text text-transparent">AI?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get a free consultation and discover how our services can revolutionize your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="glow" 
                  size="lg" 
                  className="group"
                  onClick={() => navigate('/contact')}
                >
                  {t("getFreeConsultation")}
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => navigate('/projects')}
                >
                  {t("viewAllProjects")}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;