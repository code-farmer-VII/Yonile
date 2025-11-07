import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// LinkedIn posts
const linkedinPosts = [
  {
    url:  "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7379497889309356032?collapsed=1",
    link: "https://www.linkedin.com/posts/yonilecommunications_yonilecommunications-yonasmoh-yonile-activity-7379498077499392001-QFsE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEKJjG0BwQb5wZH-KvAqo3OVWp6X-GdRbeU",
  },
  {
    url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7376579535653318656?collapsed=1",
    link: "https://www.linkedin.com/posts/yonilecommunications_yonilecommunications-digitalmarketing-creativeagency-activity-7376579786099544065-yKxu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEKJjG0BwQb5wZH-KvAqo3OVWp6X-GdRbeU",
  },
  {
    url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7356659208827666432?collapsed=1",
    link: "https://www.linkedin.com/posts/yonilecommunications_yonilecommunications-yonasmoh-marketingtips-activity-7356659336175050752-Php6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEKJjG0BwQb5wZH-KvAqo3OVWp6X-GdRbeU",
  },
];

export const BlogPosts = () => {
  return (
    <section id="blog" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full inline-block mb-4">
            Latest Insights
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            News & Perspectives
          </h2>
          <p className="text-lg text-gray-600">
            Stay informed with our latest posts directly from LinkedIn.
          </p>
        </motion.div>

        {/* Posts Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {linkedinPosts.map((post, index) => (
            <motion.article
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-blue-500 transition-all shadow-sm hover:shadow-xl group"
            >
              <iframe
                src={post.url}
                width="100%"
                height="400"
                frameBorder="0"
                allowFullScreen
                title={`LinkedIn Post ${index + 1}`}
                className="rounded-t-2xl"
              ></iframe>

              <div className="p-6 text-center">
                <a
                  href={post.link}
                  target="_blank"
                  className="text-blue-500 font-medium flex items-center justify-center group-hover:translate-x-2 transition-transform mx-auto"
                >
                  View on LinkedIn
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        //   viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="https://www.linkedin.com/company/yonilecommunications/?originalSubdomain=et"
            target="_blank"
            className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors font-medium text-lg"
          >
            View All on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};
