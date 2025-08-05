import { motion } from "framer-motion";
import { useState } from "react";
import { Filter, ExternalLink, Github, Calendar, Users } from "lucide-react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import codeMonitorImage from "@/assets/code-monitor.jpg";
import macbookCodeImage from "@/assets/macbook-code.jpg";
import circuitBoardImage from "@/assets/circuit-board.jpg";
import robotImage from "@/assets/robot.jpg";

const Projects = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "AI E-Commerce Platform",
      category: "development",
      description: "Revolutionary e-commerce platform with AI-powered recommendations and predictive analytics.",
      image: codeMonitorImage,
      tags: ["React", "AI", "E-commerce"],
      date: "2024",
      team: "5 members"
    },
    {
      id: 2,
      title: "Smart Dashboard Suite",
      category: "design",
      description: "Intelligent dashboard design with real-time data visualization and AI insights.",
      image: macbookCodeImage,
      tags: ["UI/UX", "Dashboard", "Analytics"],
      date: "2024",
      team: "3 members"
    },
    {
      id: 3,
      title: "Neural Network Visualizer",
      category: "development",
      description: "Interactive tool for visualizing and understanding neural network architectures.",
      image: circuitBoardImage,
      tags: ["AI", "Visualization", "Education"],
      date: "2023",
      team: "4 members"
    },
    {
      id: 4,
      title: "AI Brand Identity System",
      category: "design",
      description: "Complete brand identity system designed with AI-powered creative tools.",
      image: robotImage,
      tags: ["Branding", "AI Design", "Identity"],
      date: "2023",
      team: "2 members"
    }
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "design", label: "Design" },
    { id: "development", label: "Development" },
    { id: "marketing", label: "Marketing" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
                Our{" "}
                <span className="bg-gradient-cyber bg-clip-text text-transparent">
                  Project Portfolio
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Discover our innovative AI solutions that have transformed businesses across industries.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter.id)}
                  className="group"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  viewport={{ once: true }}
                  className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-2">
                        <Button variant="glass" size="sm">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View
                        </Button>
                        <Button variant="glass" size="sm">
                          <Github className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.date}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {project.team}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded-md text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;