import { motion } from "framer-motion";
import { ArrowRight, Zap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-glow/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Floating Icons */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-8 left-1/4 hidden lg:block"
          >
            <div className="w-12 h-12 bg-gradient-cyber rounded-2xl flex items-center justify-center shadow-glow-primary">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
          </motion.div>

          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, -8, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute -top-4 right-1/4 hidden lg:block"
          >
            <div className="w-10 h-10 bg-accent/80 rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-accent-foreground" />
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3 mb-8"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-primary">Ready to Get Started?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Start Your{" "}
            <span className="bg-gradient-cyber bg-clip-text text-transparent">
              AI Project
            </span>{" "}
            Now in{" "}
            <span className="bg-gradient-glow bg-clip-text text-transparent">
              One Step
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your business with our AI-powered solutions. Get a free consultation and discover how we can revolutionize your operations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button 
              variant="glow" 
              size="lg" 
              className="group text-lg px-8 py-6 h-auto"
            >
              Get a Free Consultation
              <ArrowRight className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="group text-lg px-8 py-6 h-auto"
            >
              View Our Work
              <Sparkles className="w-5 h-5 ml-2 transition-transform group-hover:rotate-12" />
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-border/30"
          >
            {[
              { 
                title: "Free Consultation", 
                description: "No commitment required",
                icon: "💬"
              },
              { 
                title: "24/7 Support", 
                description: "We're here when you need us",
                icon: "🔧"
              },
              { 
                title: "Quick Turnaround", 
                description: "Fast delivery guaranteed",
                icon: "⚡"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-card/30 rounded-xl border border-border/30 hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <p className="text-muted-foreground text-sm">
              Questions? Contact us at{" "}
              <a 
                href="mailto:info@aicreativegroup.com" 
                className="text-primary hover:text-primary-glow transition-colors font-medium"
              >
                info@aicreativegroup.com
              </a>{" "}
              or call{" "}
              <a 
                href="tel:+15551234567" 
                className="text-primary hover:text-primary-glow transition-colors font-medium"
              >
                +1 (555) 123-4567
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;