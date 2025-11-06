"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Footer, { DiscordIcon } from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const imageUrl = "/contact/contact.jpg";

  return (
    <div className="min-h-screen bg-[#DFE5E8]">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="bg-[#171F29] py-20"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-5xl font-bold mb-6 text-[#DFE5E8]">Contact Us</h1>
          <p className="text-lg text-[#DFE5E8] leading-relaxed">
            Have questions about Kaido Village? We'd love to hear from you. Send
            us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#171F29]">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-[#171F29]"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full border-[#25483B]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-[#171F29]"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full border-[#25483B]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2 text-[#171F29]"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    className="w-full border-[#25483B]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-[#171F29]"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more..."
                    rows={6}
                    className="w-full border-[#25483B]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#913d16] text-white hover:bg-[#70473D]"
                >
                  Send Message
                </Button>
              </form>
              <div className="pt-15">
                <h2 className="text-3xl font-bold mb-6 text-[#171F29]">
                  Schedule a Call
                </h2>
                <Link
                  href="https://calendly.com/kaidovillage/30min"
                  target="_blank"
                  rel="noopener hadiabuhamed"
                  className="text-[#913d16] underline hover:text-[#70473D]"
                >
                  https://calendar.app.google/KDpsg5bzkFkktaLcA
                </Link>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#171F29]">
                Get in Touch
              </h2>
              <p className="text-[#70473D] mb-8 leading-relaxed">
                Whether you're planning your stay or just have questions about
                our coliving space, we're here to help.
              </p>

              <div className="space-y-6">
                <Card className="p-6 border-[#25483B] bg-white">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#913d16] p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-[#171F29]">
                        Location
                      </h3>
                      <p className="text-sm text-[#70473D]">
                        885 Mikuni, Yuzawa-machi, Minamiuonuma-gun, Niigata,
                        Japan
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-[#25483B] bg-white">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#913d16] p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-[#171F29]">
                        Email
                      </h3>
                      <p className="text-sm text-[#70473D]">
                        info@souq-hub.co.jp
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-[#25483B] bg-white">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#913d16] p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-[#171F29]">
                        Phone
                      </h3>
                      <p className="text-sm text-[#70473D]">+84 123 456 789</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold mb-4 text-[#171F29]">Follow Us</h3>
                <div className="flex gap-5">
                  <Link
                    href="https://www.instagram.com/kaido_village/"
                    className="bg-[#913d16] p-3 rounded-lg text-white hover:bg-[#70473D] transition-colors"
                  >
                    <Instagram className="w-5" />
                  </Link>
                  <Link
                    href="https://discord.gg/vssEq8rNKw"
                    className="text-muted-foreground hover:text-accent cursor-pointer"
                  >
                    <DiscordIcon
                      size={49}
                      className="text-muted-foreground hover:text-purple-400"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
