
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { SendIcon } from "lucide-react";

const Contact: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container max-w-4xl">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div 
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-10">
            <p className="text-lg text-slate dark:text-light-slate max-w-2xl mx-auto">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
              I'll get back to you as soon as possible!
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-white dark:bg-light-navy"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="bg-white dark:bg-light-navy"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="bg-white dark:bg-light-navy"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows={6}
                required
                className="bg-white dark:bg-light-navy"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-teal hover:bg-dark-teal text-navy font-medium py-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  Sending<span className="animate-pulse">...</span>
                </span>
              ) : (
                <span className="flex items-center">
                  Send Message <SendIcon size={16} className="ml-2" />
                </span>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
