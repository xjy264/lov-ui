import React from 'react';
import { motion } from 'motion/react';

const services = [
  { id: 'gemini', name: 'Gemini', color: 'bg-gradient-to-br from-[#1162d4] to-[#5a97ec]', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4T1kHFZR9dl46J2VV3laTGcw_r-yriwWGFQLszxbODAymS8BlCKcF3v6F17kBcPyX0tufDCtk4DPBpwKazp45Qxltd4oxT1efqMe9mxm11xDfzGP-WRVrW9YCEcPc8Z0zcPemxFjJX4qqeZ9OPc5uEZAJ-P0bdWFORlvC473GQlNGOWLb8UnuGLIYCaJi1rBkm7TRIrYHJhtqweifkX54ZbQYXsgO0YQic-BWh2YuaAQ4ibP2foO-VuaXnCbibv-wItDzSvrMtEc' },
  { id: 'chatgpt', name: 'ChatGPT', color: 'bg-[#10a37f]', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyZYQDhoJuPyOrYEdNKrdn7BoLLCE6bCcDPMK1OhVjSDZ4DTEwb1DLsdRM0jzqs7GfXaCDIUkJHaehQx6sqlIN5QdrPVKGAO7ZBks8zNSSTmTyeJ_H3b8cLSfMKbQeuOypGixuVdZVhgbaPexUx-DQJ8K4SImLTkseNpunvs9qs5AI6us8b-oC6Hws_n9pPI1G__5lsOqJAL5hD-FKAUJrSlSkeieuYAUyFTvA-9NcKUgm8b012vj8n1aMkCcwD-E_mb33WbKYAYY', invert: true },
  { id: 'suno', name: 'Suno', color: 'bg-black', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJnPLbMYNtNAS8nc9U7EDaOBdbkIJd0UI4dFwypzAbLJdoeq385DrNQOngeie_BRq0o_zqbciVnsoGJdAq9nC9IxJsalKsLRei_hE7q-cd1kvNvx46DJnhiTw4rLFmLfSa6aJXSMjTHK_eBpuVd1G8AO58InyVYtXWF-vzSU5sJMaopY6JmWrF6E-qQEUIm7_6nIbGDyhaxzgcJvAW6T5-7TF4S4rIHkf7JbfcIeDLo4dw1jCS0MyxQMrbTuYxtZwSmjydi17DawY' },
  { id: 'midjourney', name: 'Midjourney', color: 'bg-black', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgblWXkhpZ7z-6Cyhh53-2x9YmmYy-pCp_6db3LXHqBRskwCRHtkFrmtuENbszB4BBapjRIrbx73NH0UueCGbFjDYYoyju3CFypGHvilDyGErxrh2YBULVOK83N8UhiXh10lZIVVOh1fbdSCroegu2l_M-lXsSEKs-nJJOHKs59r7yAothBVkhxKbQY2U0WRQhaeyOYAjM0K8oN0g9cuIYUJCxZAOdIrbsUDBzbqRlnOIbNOKPHXJm5fyVIHy0KTEe5U7Sd5Y97no', invert: true },
  { id: 'claude', name: 'Claude', color: 'bg-[#d97757]', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAojvXt7V0ANa3KG1JuzZJZWdQEh78saWShw4PVdQfEbyNaoggqvwsDHlTYSLqxuz3Pu4T2wgJE7BjC8gPV2kenJ8urZoJPmyTzEvJGR5v_Vj7lLLKsHcaqxbkpyYqCnwrn499rmP-4Bbz-4r-Mfp39nLQyfLVQ5_RDL5YqTvbY5c0kjlWKD0bO8ihMh6DITdmkWkWw2D8YdQ2fE4F2aIX21AB3ekRx7qppbEozi_iYdy250Trh8nButFFL_DfmYiNwt8JRGdfNoh0', invert: true },
  { id: 'perplexity', name: 'Perplexity', color: 'bg-[#1d9bf0]', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOdLRXm9qlJB4tiU39Ks9DY3t2nsGtLA7wUiqiSQ2L1UvpXjEZtO6xOfQi04t1gcrcJ65PFoh4UKTpM1iIbFFszgcEfxQT1GAn0TR3At03NRuv1k5AZ3ytvoXPlHUoHE-atlSZIkoAlIiHTGiWf9Ja5KiRtZbxrGiEqp2marPRY7EpS35TlZrlA-VPWj1bMuDtdGjlegWqkCJFCURMmEcSRlomqBnDiyMcaBMdk7xhOSW3MeEkyBfX5wbuBPrkU0Ane5IPmCduDeU', invert: true },
  { id: 'copilot', name: 'Copilot', color: 'bg-gradient-to-br from-[#1264a3] to-[#2eb67d]', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-p1HikUuisbfkE-cz0YLgowgvIDA0ECsSyhb-21QUnenbwf6Jj_XlyaPgnANEeKIYR2R1BlmF9AY71wA6gMuRpFPKuKjQRVhsfVzOTqALtjmnKHoEl-fZBQOfN3tt1x4sCDnD20Kj5gO0bZ_b6zXmFZx8BL8TKTTafJ_4B9QrTizYu_FTzDmslQMwOlPEj6-jhMOWGdDYTzpWchNIkSqZC7SqRHSZgnLmpW5vDjz3H8-vlCQltyZQrUVLjNVICogbDUck41i5u1g' },
  { id: 'jasper', name: 'Jasper', color: 'bg-[#202123]', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGCQJpn6JX90rtv5zEQcHkfpHFKe9ePG82s5rI0G0Hjbx7E017Dvx6bsJkW21rJ3ak5_cvzJcSYAMuQhGIzD1ON-D8LNam-jZJHUg9fVp1Fr9jea3F5jjd141Mo0z1YwsFc-OsPAfF7oh-D7hlWAVf4_KAns7_GdHOcEnLzssdh69HaF6heLI5JrO5wKBs-m4pvWrE0q8XtMZPhTrEm4R3jG7jmcKIoWP9HxxoBYVP1GEj4SBZoF7vuvOBDkLy2sChG7JxmpFAJlo' },
  { id: 'firefly', name: 'Firefly', color: 'bg-[#fa0f00]', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAytJ3hlbJEgeW9qPuDmVjZqrFUAFfNKrK4D0Frr1ZNaHMQyepaZI555f3mJW02X-aW27m2dwdMiQGk4PFrzkVwKkLL5gARsKNuxXKxDdW21a-imcrmk5XTMVC869Qptbf2IZpyRjHiX1kVkUPfXPWfmtKzDT32LMUAPQclOoXfScVBfMLPZ8IxTUMSNbDNKRhc2a16MzZpxXW5QDtWAtyGwCVdzjmkRdRX8Boss0XsixekudZu346xpFk6IETxvOiG3lNMbOqneoM', invert: true },
  { id: 'grok', name: 'Grok', color: 'bg-black', icon: '', isText: true, text: '𝕏' },
];

export const Desktop = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-12 py-10">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className="flex flex-col items-center group cursor-pointer"
        >
          <div className={`w-24 h-24 rounded-2xl ${service.color} flex items-center justify-center shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-primary/20 border border-black/5 p-4 overflow-hidden`}>
            {service.isText ? (
              <span className="text-white text-4xl font-bold">{service.text}</span>
            ) : (
              <img 
                src={service.icon} 
                alt={service.name} 
                className={`w-full h-full object-contain ${service.invert ? 'brightness-0 invert' : ''}`}
                referrerPolicy="no-referrer"
              />
            )}
          </div>
          <span className="mt-3 text-xs font-medium text-slate-700 group-hover:text-primary transition-colors">
            {service.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
};
