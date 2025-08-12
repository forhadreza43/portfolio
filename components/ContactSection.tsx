"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import emailjs from "emailjs-com";
import { toast } from "sonner";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_ue70kok",
        "template_op8mbcw",
        {
          name: formData.name,
          message: formData.message,
        },
        "He1SiHj-QvDwpJA6V"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setFormData({ name: "", message: "" });
          setLoading(false);
        },
        (error) => {
          toast.error("Failed to send message. Try again later.");
          console.error(error);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="mt-12">
      <SectionHeading>Contact</SectionHeading>

      <div className="grid md:grid-cols-2 gap-10 mx-auto">
        {/* Contact Form */}
        <div className="p-6 rounded-lg shadow-md bg-primary/5 border border-primary/20">
          <form onSubmit={sendEmail} className="space-y-4">
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="placeholder:text-primary/70 text-sm md:text-base border border-2 border-primary/40"
            />
            <Textarea
              placeholder="Write Your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="placeholder:text-primary/70 text-sm md:text-base border-2 border-primary/40 h-40"
            />
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="p-6 rounded-lg shadow-md bg-primary/5 border border-primary/20 flex flex-col justify-center gap-6">
          <div className="flex items-center gap-3">
            <Mail className="text-primary" />
            <span className="md:text-lg">forhad.bimt@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <FaWhatsapp size={22} className="text-primary" />
            <span className="md:text-lg">+88 01798 182763</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-primary" />
            <span className="md:text-lg">Dhaka, Bangladesh</span>
          </div>
        </div>
      </div>
    </section>
  );
}
