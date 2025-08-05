import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";
import { toast } from "@/components/ui/use-toast";
const Contact = () => {
  const {
    t
  } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you within 24 hours."
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const contactInfo = [{
    icon: Mail,
    title: "Email",
    value: "info@aicreativegroup.com",
    link: "mailto:info@aicreativegroup.com"
  }, {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567"
  }, {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+1 (555) 123-4567",
    link: "https://wa.me/15551234567"
  }, {
    icon: MapPin,
    title: "Address",
    value: "San Francisco, CA",
    link: "#map"
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-neural relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{
            animationDelay: "2s"
          }}></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {t("contactTitle")}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {t("contactDescription")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.6
            }} viewport={{
              once: true
            }} className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    {t("send")}
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.5,
                  delay: 0.1
                }} viewport={{
                  once: true
                }} className="space-y-2">
                    <Label htmlFor="name">{t("name")} *</Label>
                    <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required className="bg-secondary/50 border-border/50 focus:border-primary" placeholder="Enter your full name" />
                  </motion.div>

                  <motion.div initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.5,
                  delay: 0.2
                }} viewport={{
                  once: true
                }} className="space-y-2">
                    <Label htmlFor="email">{t("email")} *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="bg-secondary/50 border-border/50 focus:border-primary" placeholder="Enter your email address" />
                  </motion.div>

                  <motion.div initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.5,
                  delay: 0.3
                }} viewport={{
                  once: true
                }} className="space-y-2">
                    <Label htmlFor="phone">{t("phone")}</Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className="bg-secondary/50 border-border/50 focus:border-primary" placeholder="Enter your phone number" />
                  </motion.div>

                  <motion.div initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.5,
                  delay: 0.4
                }} viewport={{
                  once: true
                }} className="space-y-2">
                    <Label htmlFor="message">{t("message")} *</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="bg-secondary/50 border-border/50 focus:border-primary resize-none" placeholder="Tell us about your project and how we can help..." />
                  </motion.div>

                  <motion.div initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.5,
                  delay: 0.5
                }} viewport={{
                  once: true
                }}>
                    <Button type="submit" variant="glow" size="lg" className="w-full group">
                      {t("send")}
                      <Send className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </motion.div>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div initial={{
              opacity: 0,
              x: 30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} viewport={{
              once: true
            }} className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    {t("contactInfo")}
                  </h2>
                  <p className="text-muted-foreground">
                    Multiple ways to reach us for your convenience.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => <motion.a key={info.title} href={info.link} initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }} whileHover={{
                  scale: 1.02,
                  x: 10
                }} viewport={{
                  once: true
                }} className="flex items-center p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/30 transition-all duration-300 group">
                      <div className="w-14 h-14 bg-gradient-cyber rounded-xl flex items-center justify-center mr-4 group-hover:shadow-glow-primary transition-all duration-300">
                        <info.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {info.title}
                        </h3>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </motion.a>)}
                </div>

                {/* Office Hours */}
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.6
              }} viewport={{
                once: true
              }} className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-border/30">
                  <h3 className="font-semibold text-foreground mb-3">Office Hours</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        
      </main>
      
      <Footer />
    </div>;
};
export default Contact;