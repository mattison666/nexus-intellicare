import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Code, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturedProjects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "NeuroCommerce AI",
      category: "E-commerce Platform",
      description: "AI-powered e-commerce platform with predictive analytics and personalized shopping experiences.",
      image: "/api/placeholder/600/400",
      tags: ["AI", "E-commerce", "Analytics"],
      type: "development"
    },
    {
      id: 2,
      title: "MindFlow Dashboard",
      category: "Data Visualization",
      description: "Intelligent dashboard for real-time data visualization with AI-driven insights and recommendations.",
      image: "/api/placeholder/600/400",
      tags: ["Dashboard", "AI", "Visualization"],
      type: "design"
    },
    {
      id: 3,
      title: "VoiceBot Assistant",
      category: "AI Assistant",
      description: "Advanced conversational AI with natural language processing and contextual understanding.",
      image: "/api/placeholder/600/400",
      tags: ["AI", "NLP", "Assistant"],
      type: "development"
    },
    {
      id: 4,
      title: "CreativeAI Studio",
      category: "Design Platform",
      description: "AI-powered design platform that generates creative assets and automates design workflows.",
      image: "/api/placeholder/600/400",
      tags: ["Design", "AI", "Automation"],
      type: "design"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="text-sm font-medium text-primary">Featured Projects</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Showcasing Our{" "}
            <span className="bg-gradient-cyber bg-clip-text text-transparent">
              Latest Work
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Explore our portfolio of innovative AI solutions that have transformed businesses across industries.
          </motion.p>
        </motion.div>

        {/* Project Showcase */}
        <div className="relative">
          <motion.div
            key={currentProject}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Project Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-2xl border border-border/50">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  {projects[currentProject].type === 'development' ? (
                    <Code className="w-24 h-24 text-primary/40" />
                  ) : (
                    <Palette className="w-24 h-24 text-accent/40" />
                  )}
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                  <Button variant="glass" size="sm" className="group/btn">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Project Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <span className="text-primary font-medium text-sm">
                  {projects[currentProject].category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  {projects[currentProject].title}
                </h3>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {projects[currentProject].description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {projects[currentProject].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-full text-sm font-medium border border-border/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <Button variant="outline" size="lg">
                  View Details
                </Button>
                <Button variant="ghost" size="lg">
                  Live Demo
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-12">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevProject}
              className="w-12 h-12 rounded-full border border-border/50 hover:border-primary/50"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Project Indicators */}
            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject
                      ? "bg-primary scale-125"
                      : "bg-muted hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextProject}
              className="w-12 h-12 rounded-full border border-border/50 hover:border-primary/50"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button variant="outline" size="lg" className="group">
            View All Projects
            <motion.span
              className="ml-2 transition-transform group-hover:translate-x-1"
              whileHover={{ x: 5 }}
            >
              →
            </motion.span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;