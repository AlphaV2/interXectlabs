
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../UI/Button';
import { Mail, Phone, MapPin, MessageCircle, AlertCircle, Loader2 } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export const CTA: React.FC = () => {
  const { contact } = siteConfig;
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting'>('idle');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    }

    // Mobile validation
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Service validation
    if (!formData.service) {
      newErrors.service = "Please select a service inquiry";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    
    if (errors[id]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setStatus('submitting');
      
      // Format the WhatsApp message
      const whatsappMessage = `
*New Inquiry from Website*
-------------------------
*Name:* ${formData.name}
*Mobile:* ${formData.mobile}
*Email:* ${formData.email}
*Service:* ${formData.service}
-------------------------
*Message:*
${formData.message}
      `.trim();

      // Encode for URL
      const encodedMessage = encodeURIComponent(whatsappMessage);
      
      // Your WhatsApp Number (strip + and spaces)
      const phoneNumber = "918340952114";
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      // Simulate slight delay for UX then redirect
      setTimeout(() => {
        window.open(whatsappURL, '_blank');
        setStatus('idle');
        setFormData({ name: '', mobile: '', email: '', service: '', message: '' });
      }, 1000);
    }
  };

  const MotionDiv = motion.div as any;

  return (
    <section id="contact" className="py-20 md:py-32 px-4 md:px-8 relative z-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side: Info */}
            <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-8"
            >
                <div>
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Get in Touch</span>
                    <h2 className="text-4xl font-bold tracking-tight text-white mt-2 mb-4">Ready to Build Your Vision?</h2>
                    <p className="text-lg text-text-secondary-dark">
                        Let's turn your idea into a reality. Whether you need a complex Web3 platform, a stunning brand website, or secure cloud infrastructure, we are here to help you navigate the future of the web.
                    </p>
                </div>

                <div className="space-y-6 mt-4">
                    <div className="flex items-center gap-4 text-text-secondary-dark hover:text-primary transition-colors group">
                        <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-primary group-hover:bg-primary/10 transition-colors">
                            <Mail size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-400">Email Us</p>
                            <p className="text-base font-semibold text-white">{contact.email}</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-text-secondary-dark hover:text-primary transition-colors group">
                         <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-primary group-hover:bg-primary/10 transition-colors">
                            <Phone size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-400">Call Us</p>
                            <p className="text-base font-semibold text-white">{contact.phone}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-text-secondary-dark hover:text-primary transition-colors group">
                         <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-primary group-hover:bg-primary/10 transition-colors">
                            <MapPin size={24} />
                        </div>
                        <div>
                             <p className="text-sm font-medium text-gray-400">Visit Us</p>
                            <p className="text-base font-semibold text-white">{contact.address}</p>
                        </div>
                    </div>
                    
                    <a href={`https://wa.me/918340952114`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-text-secondary-dark hover:text-[#25D366] transition-colors group cursor-pointer">
                         <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-[#25D366] group-hover:bg-[#25D366]/10 transition-colors">
                            <MessageCircle size={24} />
                        </div>
                        <div>
                             <p className="text-sm font-medium text-gray-400">Chat with Bot</p>
                            <p className="text-base font-semibold text-white">WhatsApp Support</p>
                        </div>
                    </a>
                </div>
            </MotionDiv>

            {/* Right Side: Form */}
            <MotionDiv
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glassmorphic p-6 md:p-8 rounded-2xl border border-white/10 bg-black/40 relative overflow-hidden"
            >
                 {/* Glow effect behind form */}
                 <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
                 <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/20 rounded-full blur-[80px] pointer-events-none"></div>

                  <form ref={formRef} className="relative z-10 flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="flex flex-col gap-2">
                              <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name <span className="text-red-500">*</span></label>
                              <div className="relative">
                                <input 
                                    type="text" 
                                    name="user_name" 
                                    id="name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className={`w-full rounded-lg bg-white/5 border ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-primary'} px-4 py-3 text-white placeholder-gray-500 focus:ring-1 focus:ring-primary outline-none transition-all hover:bg-white/10`}
                                />
                                {errors.name && (
                                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 pointer-events-none">
                                    <AlertCircle size={16} />
                                  </div>
                                )}
                              </div>
                              {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
                          </div>
                          <div className="flex flex-col gap-2">
                              <label htmlFor="mobile" className="text-sm font-medium text-gray-300">Mobile Number <span className="text-red-500">*</span></label>
                              <div className="relative">
                                <input 
                                    type="tel" 
                                    name="user_mobile"
                                    id="mobile" 
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    placeholder="+91 83409 52114"
                                    className={`w-full rounded-lg bg-white/5 border ${errors.mobile ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-primary'} px-4 py-3 text-white placeholder-gray-500 focus:ring-1 focus:ring-primary outline-none transition-all hover:bg-white/10`}
                                />
                                {errors.mobile && (
                                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 pointer-events-none">
                                    <AlertCircle size={16} />
                                  </div>
                                )}
                              </div>
                              {errors.mobile && <span className="text-xs text-red-500">{errors.mobile}</span>}
                          </div>
                      </div>

                      <div className="flex flex-col gap-2">
                          <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address <span className="text-red-500">*</span></label>
                          <div className="relative">
                            <input 
                                type="email" 
                                name="user_email"
                                id="email" 
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                className={`w-full rounded-lg bg-white/5 border ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-primary'} px-4 py-3 text-white placeholder-gray-500 focus:ring-1 focus:ring-primary outline-none transition-all hover:bg-white/10`}
                            />
                            {errors.email && (
                              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 pointer-events-none">
                                <AlertCircle size={16} />
                              </div>
                            )}
                          </div>
                          {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
                      </div>

                      <div className="flex flex-col gap-2">
                          <label htmlFor="service" className="text-sm font-medium text-gray-300">Service Inquiry <span className="text-red-500">*</span></label>
                          <div className="relative">
                              <select 
                                  name="service_type"
                                  id="service"
                                  value={formData.service}
                                  onChange={handleChange}
                                  className={`w-full appearance-none rounded-lg bg-white/5 border ${errors.service ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-primary'} px-4 py-3 text-white focus:ring-1 focus:ring-primary outline-none transition-all hover:bg-white/10 cursor-pointer`}
                              >
                                  <option value="" disabled className="bg-[#101012] text-gray-500">Select a service...</option>
                                  <option value="web-dev" className="bg-[#101012]">Web App Development</option>
                                  <option value="web3" className="bg-[#101012]">Web3 Solutions</option>
                                  <option value="ui-ux" className="bg-[#101012]">UI/UX Design</option>
                                  <option value="cloud" className="bg-[#101012]">Cloud Hosting</option>
                                  <option value="ai-ml" className="bg-[#101012]">AI/ML Solutions</option>
                                  <option value="chatbot" className="bg-[#101012]">AI Chatbots</option>
                                  <option value="consultancy" className="bg-[#101012]">Consultancy</option>
                                  <option value="other" className="bg-[#101012]">Other</option>
                              </select>
                              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                              </div>
                          </div>
                          {errors.service && <span className="text-xs text-red-500">{errors.service}</span>}
                      </div>
                      
                      <div className="flex flex-col gap-2">
                          <label htmlFor="message" className="text-sm font-medium text-gray-300">Message <span className="text-red-500">*</span></label>
                          <div className="relative">
                            <textarea 
                                name="message"
                                id="message" 
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us about your project..."
                                className={`w-full rounded-lg bg-white/5 border ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-primary'} px-4 py-3 text-white placeholder-gray-500 focus:ring-1 focus:ring-primary outline-none transition-all resize-none hover:bg-white/10`}
                            ></textarea>
                             {errors.message && (
                              <div className="absolute right-3 top-4 text-red-500 pointer-events-none">
                                <AlertCircle size={16} />
                              </div>
                            )}
                          </div>
                          {errors.message && <span className="text-xs text-red-500">{errors.message}</span>}
                      </div>

                      <Button 
                        className="w-full mt-2 shadow-xl shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed" 
                        size="lg"
                        disabled={status === 'submitting'}
                      >
                        {status === 'submitting' ? (
                          <div className="flex items-center gap-2">
                            <Loader2 className="animate-spin" size={20} />
                            <span>Opening WhatsApp...</span>
                          </div>
                        ) : (
                          "Send Message on WhatsApp"
                        )}
                      </Button>
                  </form>
            </MotionDiv>
        </div>
      </div>
    </section>
  );
};
