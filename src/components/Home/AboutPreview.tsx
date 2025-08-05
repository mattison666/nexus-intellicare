import { motion } from "framer-motion";
import { Lightbulb, Zap, TrendingUp, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const AboutPreview = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const values = [
    {
      icon: Lightbulb,
      title: t("creativity"),
      description: "Innovative solutions that push boundaries"
    },
    {
      icon: Zap,
      title: t("innovation"),
      description: "Cutting-edge technology and methodologies"
    },
    {
      icon: TrendingUp,
      title: t("efficiency"),
      description: "Streamlined processes for optimal results"
    },
    {
      icon: Target,
      title: t("progress"),
      description: "Continuous advancement and growth"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2"
            >
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span className="text-sm font-medium text-primary">{t("about")}</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-foreground"
            >
              {t("aboutTitle")}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              {t("aboutDescription")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="group"
                onClick={() => navigate('/about')}
              >
                {t("learnMore")}
                <motion.span
                  className="ml-2 transition-transform group-hover:translate-x-1"
                  whileHover={{ x: 5 }}
                >
                  →
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5, scale: 1.02 }}
                viewport={{ once: true }}
                className="group p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-cyber rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow-primary transition-all duration-300">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;