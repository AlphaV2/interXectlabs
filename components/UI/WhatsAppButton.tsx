import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhatsAppButton: React.FC = () => {
  const MotionA = motion.a as any;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <MotionA
        href="https://wa.me/1234567890" // Replace with actual number
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl shadow-green-500/30 hover:bg-[#20bd5a] transition-all duration-300 relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <MessageCircle size={28} fill="currentColor" strokeWidth={1.5} />
        
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none"></span>
      </MotionA>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-4 py-2 rounded-xl text-sm font-bold shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 pointer-events-none border border-gray-100 dark:border-gray-700">
        Say Hello! 👋
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white dark:bg-gray-800 rotate-45 border-t border-r border-gray-100 dark:border-gray-700"></div>
      </div>
    </div>
  );
};