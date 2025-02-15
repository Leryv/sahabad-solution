import React, { JSX } from "react";
import { Container } from "@/components/ui/container";
import { motion } from "motion/react";

const CardContact = () => {
  interface DataContact {
    id: number;
    contactType: string;
    contactDesc: string;
    contactContent: string;
    svgIcon: JSX.Element;
  }

  const dataContact: DataContact[] = [
    {
      id: 1,
      contactType: "Email",
      contactDesc: "🌟 Tim Kami Siap Membantu Anda! 🌟",
      contactContent: "sahabadfurniture@gmail.com",
      svgIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
    },
    {
      id: 2,
      contactType: "Office",
      contactDesc: "🌟 Kunjungi Kantor Kami! 🌟",
      contactContent:
        "Perumahan Mustika Grande, Setu, Kabupaten Bekasi, Indonesia",
      svgIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      contactType: "Phone",
      contactDesc: "🌟 Senin - Jumat dari Jam 8 Pagi Sampai jam 5 Malam. 🌟",
      contactContent: "+62 895-3868-49956",

      svgIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
      {Array.from(dataContact).map((item) => (
        <div key={item.id}>
          <span className="inline-block p-3 text-accent-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
            {item.svgIcon}
          </span>
          <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
            {item.contactType}
          </h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            {item.contactDesc}
          </p>
          <p className="mt-2 text-accent-blue-500 dark:text-accent-blue-400">
            {item.contactContent}
          </p>
        </div>
      ))}
    </div>
  );
};

export default function Contact() {
  return (
    <Container>
      <section id="contact" className="bg-white dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, x: -50 }} // Start off-screen to the right
          whileInView={{ opacity: 1, x: 0 }} // Fade in and move to original position
          transition={{ duration: 1, ease: "easeInOut" }} // Transition properties
          viewport={{ once: true }} // Optional: makes it animate only once
          className="py-18 px-8 h-230 lg:h-130"
        >
          <div>
            <p className="font-medium text-accent-blue-500 dark:text-accent-blue-400">
              Kontak
            </p>

            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
              Mari Berkenalan
            </h1>

            <p className="mt-3 text-gray-500 dark:text-gray-400">
              Jangan ragu untuk menghubungi kami melalui kontak yang kami
              sediakan.
            </p>
          </div>

          <CardContact />
        </motion.div>
      </section>
    </Container>
  );
}
