import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Mail, Phone, Facebook, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "https://github.com/eangmengkong",
      type: "link"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "eangmengkong21@gmail.com",
      type: "email"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+855 11 300 512",
      type: "tel"
    },
    {
      icon: <Facebook className="h-6 w-6" />,
      label: "Facebook",
      value: "https://www.facebook.com/share/166Ns7sSZ2/?mibextid=wwXIfr",
      type: "link"
    },
    {
      icon: <Send className="h-6 w-6" />,
      label: "Telegram",
      value: "https://t.me/MengkongEang",
      type: "link"
    }
  ];

  const handleContactClick = (type: string, value: string) => {
    if (type === 'email') {
      window.location.href = `mailto:${value}?subject=Contact from Portfolio&body=Hello, I would like to get in touch with you.`;
    } else if (type === 'tel') {
      window.location.href = `tel:${value}`;
    } else {
      window.open(value, '_blank');
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-muted-foreground">Get in touch with me through these channels</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactInfo.map((item, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto py-4 px-6 flex items-center justify-start gap-4 group hover:bg-teal/10 hover:text-teal transition-colors"
              onClick={() => handleContactClick(item.type, item.value)}
            >
              {item.icon}
              <div className="text-left">
                <div className="font-medium">{item.label}</div>
                <div className="text-sm text-muted-foreground group-hover:text-teal/80">
                  {item.value}
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
