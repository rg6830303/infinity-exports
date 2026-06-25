"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={site.social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)]"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
      <MessageCircle className="relative h-7 w-7" />
    </motion.a>
  );
}
