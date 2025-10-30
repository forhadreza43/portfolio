"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2Icon, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { toast } from "sonner";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const isActive = formData?.name && formData?.email && formData?.message;
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
        "service_ue70kok",
        "template_op8mbcw",
        {
          title: formData.name,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "He1SiHj-QvDwpJA6V"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
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
    <section id="contact" className="scroll-mt-30 mt-12 lg:mt-20">
      <SectionHeading>Contact</SectionHeading>

      <div className="grid md:grid-cols-2 gap-6 mx-auto">
        {/* Contact Form */}
        <motion.div
          className="p-6 rounded-lg shadow-md bg-primary/5 border border-primary/20"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <form onSubmit={sendEmail} className="space-y-4">
            <div className="space-y-4 lg:space-y-0 lg:flex gap-4">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="placeholder:text-primary/70 text-sm md:text-base border border-primary/40"
                required
              />
              <Input
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="placeholder:text-primary/70 text-sm md:text-base border border-primary/40"
                required
              />
            </div>
            <Textarea
              placeholder="Write Your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="placeholder:text-primary/70 text-sm md:text-base border border-primary/40 h-40"
              required
            />
            <Button
              type="submit"
              className={`w-full bg-primary hover:bg-primary/90 text-white ${
                (loading || !isActive) && "cursor-not-allowed"
              }`}
              disabled={loading || !isActive}
            >
              {loading ? (
                <>
                  <Loader2Icon className="animate-spin" />{" "}
                  <span>Sending...</span>
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="p-6 rounded-lg shadow-md bg-primary/5 border border-primary/20 flex flex-col justify-center gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Mail className="text-primary" />
            <span className="md:text-lg">forhad.bimt@gmail.com</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <FaWhatsapp size={22} className="text-primary" />
            <span className="md:text-lg">+88 01798 182763</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <MapPin className="text-primary" />
            <span className="md:text-lg">Dhaka, Bangladesh</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}