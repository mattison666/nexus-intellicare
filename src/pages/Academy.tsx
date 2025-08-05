import { motion } from "framer-motion";
import { Play, Clock, Award, Users, BookOpen, Star } from "lucide-react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import heroAiBrainImage from "@/assets/hero-ai-brain.jpg";
import codeMonitorImage from "@/assets/code-monitor.jpg";
import macbookCodeImage from "@/assets/macbook-code.jpg";
import robotImage from "@/assets/robot.jpg";

const Academy = () => {
  const { t } = useTranslation();

  const courses = [
    {
      id: 1,
      title: "AI Fundamentals",
      category: "Development",
      description: "Master the basics of artificial intelligence and machine learning.",
      image: heroAiBrainImage,
      duration: "8 weeks",
      lessons: 24,
      students: 1250,
      rating: 4.9,
      price: "$299",
      level: "Beginner"
    },
    {
      id: 2,
      title: "AI-Powered Web Development",
      category: "Development",
      description: "Build modern web applications with AI integration.",
      image: codeMonitorImage,
      duration: "12 weeks",
      lessons: 36,
      students: 890,
      rating: 4.8,
      price: "$399",
      level: "Intermediate"
    },
    {
      id: 3,
      title: "AI Design Principles",
      category: "Design",
      description: "Learn how to design intuitive AI-powered interfaces.",
      image: macbookCodeImage,
      duration: "6 weeks",
      lessons: 18,
      students: 650,
      rating: 4.7,
      price: "$249",
      level: "Beginner"
    },
    {
      id: 4,
      title: "Advanced AI & Robotics",
      category: "Advanced",
      description: "Explore cutting-edge AI technologies and robotics.",
      image: robotImage,
      duration: "16 weeks",
      lessons: 48,
      students: 320,
      rating: 4.9,
      price: "$599",
      level: "Advanced"
    }
  ];

  const stats = [
    { icon: Users, value: "5,000+", label: "Students Enrolled" },
    { icon: BookOpen, value: "25+", label: "Expert Courses" },
    { icon: Award, value: "95%", label: "Completion Rate" },
    { icon: Star, value: "4.8", label: "Average Rating" }
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
                AI{" "}
                <span className="bg-gradient-cyber bg-clip-text text-transparent">
                  Academy
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Master the future of technology with our comprehensive AI education platform.
              </p>
              <Button variant="glow" size="lg" className="group">
                <Play className="w-5 h-5 mr-2" />
                Start Learning Today
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-cyber rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Section */}
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
                Featured <span className="bg-gradient-cyber bg-clip-text text-transparent">Courses</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Learn from industry experts and build real-world AI applications
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {courses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  viewport={{ once: true }}
                  className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary/90 text-primary-foreground rounded-full text-xs font-medium">
                        {course.level}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button variant="glass" size="sm">
                        <Play className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-primary font-medium text-sm">{course.category}</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm font-medium">{course.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {course.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-1" />
                        {course.lessons} lessons
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {course.students}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{course.price}</span>
                      <Button variant="outline" className="group/btn">
                        Enroll Now
                        <Play className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
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

export default Academy;