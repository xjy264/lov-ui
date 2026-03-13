import React from 'react';
import { Check, Zap, Shield, Star, Crown } from 'lucide-react';
import { motion } from 'motion/react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    desc: 'Perfect for individuals getting started with AI.',
    features: ['Access to basic models', '5 environments', 'Community support', 'Standard API speed'],
    icon: <Zap className="w-6 h-6 text-slate-400" />,
    buttonText: 'Current Plan',
    current: true
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/mo',
    desc: 'For power users who need more speed and power.',
    features: ['Access to all models', '50 environments', 'Priority support', 'High-speed API', 'Custom prompts'],
    icon: <Star className="w-6 h-6 text-primary" />,
    buttonText: 'Upgrade to Pro',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: '/mo',
    desc: 'Advanced features for teams and organizations.',
    features: ['Unlimited environments', 'Dedicated support', 'Custom API endpoints', 'Team collaboration', 'Advanced analytics'],
    icon: <Crown className="w-6 h-6 text-amber-500" />,
    buttonText: 'Contact Sales'
  }
];

export const Subscription = () => {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-black text-slate-900 mb-4">Choose Your Plan</h1>
        <p className="text-slate-500 max-w-2xl mx-auto">Unlock the full potential of LovBrowser with our flexible subscription plans designed for every stage of your AI journey.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`relative flex flex-col p-8 rounded-3xl border ${plan.popular ? 'border-primary shadow-2xl shadow-primary/10 bg-white' : 'border-slate-200 bg-white/50'}`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                Most Popular
              </div>
            )}
            
            <div className="mb-8">
              <div className="mb-4">{plan.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mt-2">
                <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                {plan.period && <span className="text-slate-400 font-medium">{plan.period}</span>}
              </div>
              <p className="mt-4 text-slate-500 text-sm leading-relaxed">{plan.desc}</p>
            </div>

            <div className="flex-1 space-y-4 mb-8">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="bg-emerald-100 text-emerald-600 p-1 rounded-full">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-sm text-slate-600 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.current ? 'bg-slate-100 text-slate-400 cursor-default' : plan.popular ? 'bg-primary text-white shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
              {plan.buttonText}
            </button>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            Secure & Reliable
          </h3>
          <p className="text-slate-400 max-w-md">Your data is encrypted and protected with industry-standard security protocols. We never store your API keys in plain text.</p>
        </div>
        <div className="flex gap-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-8 brightness-0 invert opacity-50" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-8 brightness-0 invert opacity-50" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-8 brightness-0 invert opacity-50" />
        </div>
      </div>
    </div>
  );
};
