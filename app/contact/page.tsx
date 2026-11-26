'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
import { LinkedinIcon, InstagramIcon, XIcon } from '@/components/icons/SocialIcons';

const INTENTIONS = [
  'I need legal support / representation',
  'I am a lawyer or volunteer',
  'I am an artist or storyteller',
  'I am press or an academic partner',
  'General inquiry / Workshop request',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    intention: INTENTIONS[0],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 sm:py-24 bg-parchment-100 parchment-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-terracotta-600 block">
            Get in Touch
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 leading-tight">
            Tell us your story. <br />
            <span className="italic font-normal text-terracotta-600">We will listen with care.</span>
          </h1>
          <p className="text-ink-600 text-lg leading-relaxed font-sans">
            Whether you require pro-bono constitutional representation, want to collaborate on art, 
            or wish to participate in our storytelling workshops, reach out to our team.
          </p>
        </div>

        {/* Main Grid: Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details & WhatsApp Community Card */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="rounded-3xl bg-parchment-50 border border-parchment-300 p-8 sm:p-10 shadow-postcard space-y-6">
              <h2 className="font-serif text-2xl font-bold text-ink-900">
                Contact Details
              </h2>

              <ul className="space-y-5 text-sm text-ink-800">
                <li className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-terracotta-100 text-terracotta-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-xs uppercase tracking-wider text-ink-500">
                      Headquarters & Registered Office
                    </div>
                    <p className="mt-0.5 leading-relaxed">
                      Door No. 24, ST-6 (Chitra Nagar), Narasimhanaickenpalayam, Coimbatore - 641017, Tamil Nadu, India
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-terracotta-100 text-terracotta-700 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-xs uppercase tracking-wider text-ink-500">
                      Direct Telephone
                    </div>
                    <a
                      href="tel:+918860799513"
                      className="mt-0.5 font-medium hover:text-terracotta-600 transition-colors block"
                    >
                      +91 88607 99513
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-terracotta-100 text-terracotta-700 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-xs uppercase tracking-wider text-ink-500">
                      Email Communication
                    </div>
                    <a
                      href="mailto:lingeringshadowsinitiative@gmail.com"
                      className="mt-0.5 font-medium hover:text-terracotta-600 transition-colors break-all block"
                    >
                      lingeringshadowsinitiative@gmail.com
                    </a>
                  </div>
                </li>
              </ul>

              {/* Social Channels */}
              <div className="pt-6 border-t border-parchment-300">
                <div className="font-bold text-xs uppercase tracking-wider text-ink-500 mb-3">
                  Connect on Socials
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/company/the-lingering-shadows-initiative/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-parchment-200 hover:bg-terracotta-600 hover:text-parchment-50 flex items-center justify-center text-ink-800 transition-all shadow-sm"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/thelsiproject?gwpx=dDdjejY4dnEyNm04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-parchment-200 hover:bg-terracotta-600 hover:text-parchment-50 flex items-center justify-center text-ink-800 transition-all shadow-sm"
                    aria-label="Instagram Profile"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://x.com/thelsiproject?s=11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-parchment-200 hover:bg-terracotta-600 hover:text-parchment-50 flex items-center justify-center text-ink-800 transition-all shadow-sm font-bold text-xs"
                    aria-label="X Profile"
                  >
                    <XIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Community Box */}
            <div className="rounded-3xl bg-gradient-to-br from-sage-900 to-ink-900 text-parchment-100 p-8 shadow-xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-800/80 text-sage-200 text-xs font-semibold uppercase tracking-wider">
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Community</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-parchment-50">
                Join our updates community.
              </h3>
              <p className="text-xs sm:text-sm text-parchment-300/80 leading-relaxed">
                Receive dispatches, public lecture announcements, theatre dates, and urgent human rights appeals directly on your phone.
              </p>
              <div className="pt-2">
                <a
                  href="https://chat.whatsapp.com/invite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-terracotta-600 hover:bg-terracotta-500 text-parchment-50 font-semibold text-xs tracking-wider uppercase transition-all shadow-md active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Join Community Channel</span>
                </a>
              </div>
            </div>

          </div>

          {/* Story Submission / Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-parchment-50 border border-parchment-300 p-8 sm:p-12 shadow-postcard">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-sage-100 text-sage-700 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-ink-900">
                    Thank you for sharing your story.
                  </h3>
                  <p className="text-sm text-ink-600 max-w-md mx-auto leading-relaxed">
                    We will read every message with absolute confidentiality and care. An advocate from our team will reach out to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-parchment-200 hover:bg-parchment-300 text-xs font-semibold uppercase tracking-wider text-ink-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-widest font-bold text-terracotta-600 block">
                      Write to Us
                    </span>
                    <h2 className="font-serif text-3xl font-bold text-ink-900">
                      Share Your Story or Query
                    </h2>
                    <p className="text-xs text-ink-500 flex items-center gap-1.5 pt-1">
                      <ShieldCheck className="w-4 h-4 text-sage-600" />
                      <span>All communications are treated with strict legal confidentiality.</span>
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Role Selector */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink-700 mb-2">
                        How can we connect with you?
                      </label>
                      <select
                        value={formData.intention}
                        onChange={(e) => setFormData({ ...formData, intention: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-parchment-100 border border-parchment-300 text-ink-900 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                      >
                        {INTENTIONS.map((int, idx) => (
                          <option key={idx} value={int}>
                            {int}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink-700 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Adv. Priya Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-parchment-100 border border-parchment-300 text-ink-900 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                      />
                    </div>

                    {/* Email & Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-ink-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-parchment-100 border border-parchment-300 text-ink-900 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-ink-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-parchment-100 border border-parchment-300 text-ink-900 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                        />
                      </div>
                    </div>

                    {/* Story Message */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink-700 mb-2">
                        Tell Us Your Story *
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Tell us what you are navigating, the legal challenge, or the artistic / storytelling collaboration you envision..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-parchment-100 border border-parchment-300 text-ink-900 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta-500 resize-y"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-parchment-50 font-semibold text-xs tracking-wider uppercase transition-all shadow-md active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Message</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
