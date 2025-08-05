import { motion } from "framer-motion";
import { Calendar, User, Clock, ArrowRight, Tag } from "lucide-react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import circuitBoardImage from "@/assets/circuit-board.jpg";
import codeMonitorImage from "@/assets/code-monitor.jpg";
import robotImage from "@/assets/robot.jpg";
import macbookCodeImage from "@/assets/macbook-code.jpg";

const Blog = () => {
  const { t } = useTranslation();

  const featuredPost = {
    id: 1,
    title: "The Future of AI in Creative Industries",
    excerpt: "Exploring how artificial intelligence is revolutionizing creative workflows and opening new possibilities for artists and designers.",
    image: circuitBoardImage,
    author: "Dr. Sarah Chen",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "AI Trends",
    tags: ["AI", "Creativity", "Future"]
  };

  const blogPosts = [
    {
      id: 2,
      title: "Building AI-Powered Web Applications",
      excerpt: "A comprehensive guide to integrating artificial intelligence into modern web development workflows.",
      image: codeMonitorImage,
      author: "Marcus Rodriguez",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Development",
      tags: ["Web Dev", "AI", "Tutorial"]
    },
    {
      id: 3,
      title: "Machine Learning for Designers",
      excerpt: "How designers can leverage machine learning tools to enhance their creative process and productivity.",
      image: macbookCodeImage,
      author: "Emily Watson",
      date: "December 10, 2024",
      readTime: "5 min read",
      category: "Design",
      tags: ["Design", "ML", "Tools"]
    },
    {
      id: 4,
      title: "The Ethics of AI in Business",
      excerpt: "Discussing the important ethical considerations when implementing AI solutions in business environments.",
      image: robotImage,
      author: "Alex Thompson",
      date: "December 8, 2024",
      readTime: "7 min read",
      category: "Ethics",
      tags: ["Ethics", "Business", "AI"]
    }
  ];

  const categories = [
    "All Posts",
    "AI Trends", 
    "Development",
    "Design",
    "Ethics",
    "Tutorials"
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
                  Insights Blog
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Stay updated with the latest trends, insights, and innovations in artificial intelligence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <Button
                  key={category}
                  variant={index === 0 ? "default" : "outline"}
                  className="group"
                >
                  <Tag className="w-4 h-4 mr-2" />
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">
                Featured <span className="bg-gradient-cyber bg-clip-text text-transparent">Article</span>
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative group">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border/50">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm font-medium text-primary">{featuredPost.category}</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold">{featuredPost.title}</h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button variant="outline" size="lg" className="group">
                    Read Full Article
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
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
                Latest <span className="bg-gradient-cyber bg-clip-text text-transparent">Articles</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our collection of insights, tutorials, and thought leadership in AI
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  viewport={{ once: true }}
                  className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary/90 text-primary-foreground rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                      <Button variant="ghost" size="sm" className="group/btn">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;