import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CEO at TechFlow",
      company: "TechFlow Inc.",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "AI Creative Group transformed our business with their intelligent solutions. The AI-powered dashboard they built increased our productivity by 300%."
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Founder",
      company: "Digital Ventures",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Working with AI Creative Group was exceptional. Their AI marketing solutions helped us reach new heights with a 400% increase in conversions."
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "CTO",
      company: "InnovateSpace",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "The team's expertise in AI development is unmatched. They delivered a cutting-edge platform that revolutionized our customer experience."
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating
            ? "text-yellow-400 fill-yellow-400"
            : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-secondary/30">
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
            <span className="text-sm font-medium text-primary">Testimonials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            What Our{" "}
            <span className="bg-gradient-cyber bg-clip-text text-transparent">
              Clients Say
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Don't just take our word for it. Here's what industry leaders say about our AI solutions.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Testimonial Card */}
              <div className="relative p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/30 transition-all duration-300 h-full">
                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="absolute -top-4 left-8"
                >
                  <div className="w-8 h-8 bg-gradient-cyber rounded-full flex items-center justify-center shadow-glow-primary">
                    <Quote className="w-4 h-4 text-primary-foreground" />
                  </div>
                </motion.div>

                {/* Rating */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-1 mb-4 mt-4"
                >
                  {renderStars(testimonial.rating)}
                </motion.div>

                {/* Testimonial Text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  className="text-foreground leading-relaxed mb-6 italic"
                >
                  "{testimonial.text}"
                </motion.p>

                {/* Client Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-cyber flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>

                  {/* Details */}
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-primary font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </motion.div>

                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-cyber opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { metric: "98%", label: "Client Satisfaction" },
              { metric: "150+", label: "Projects Delivered" },
              { metric: "50+", label: "Happy Clients" },
              { metric: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {stat.metric}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;