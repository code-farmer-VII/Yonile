import React from "react";
import { Mail, MapPin, Phone, Instagram, Twitter, MessageCircle } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 flex justify-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 rounded-2xl overflow-hidden shadow-lg">
        {/* LEFT SIDE */}
        <div className="bg-gradient-to-br from-[#04283F] to-[#063E5B] p-10 flex flex-col justify-between rounded-2xl md:rounded-none">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
            <p className="text-white/70 mb-10">
              Let’s bring your ideas to life. We’d love to hear from you.
            </p>

            <div className="space-y-6 text-sm">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="font-semibold">Ethiopia</p>
                  <p>0906709999</p>
                  <p>0906709999</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <p>Email: Yoniledigitals@gmail.com</p>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="font-semibold">Ethiopia,</p>
                  <p>Addis Ababa</p>
                </div>
              </div>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex space-x-4 mt-10">
            <button className="bg-black/70 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-500 transition">
              <Instagram className="w-5 h-5" />
            </button>
            <button className="bg-black/70 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-500 transition">
              <Twitter className="w-5 h-5" />
            </button>
            <button className="bg-black/70 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-500 transition">
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div className="bg-black p-10">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2 text-white/70">First Name</label>
              <input
                type="text"
                placeholder="John"
                className="w-full bg-transparent border-b border-white/30 focus:border-blue-400 outline-none py-2"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-white/70">Last Name</label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full bg-transparent border-b border-white/30 focus:border-blue-400 outline-none py-2"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-white/70">Email</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full bg-transparent border-b border-white/30 focus:border-blue-400 outline-none py-2"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-white/70">Company Name</label>
              <input
                type="text"
                placeholder="Lorem Ipsum Co."
                className="w-full bg-transparent border-b border-white/30 focus:border-blue-400 outline-none py-2"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm mb-2 text-white/70">Message</label>
              <textarea
                placeholder="Write your message.."
                className="w-full bg-transparent border-b border-white/30 focus:border-blue-400 outline-none py-2 h-24"
              />
            </div>

            <div className="md:col-span-2 flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-md transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
