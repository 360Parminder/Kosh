import { motion } from "framer-motion";
import {
  BellRing,
  CreditCard,
  Wallet,
  AlarmClock,
  Slash,
  BarChart2,
  HelpCircle,
} from "lucide-react";

const features = [
  {
    icon: <Wallet size={28} className="" />,
    title: "All Payments, One Place",
    desc: "Track every subscription, bill, and recurring payment from one dashboard.",
  },
  {
    icon: <BellRing size={28} className="" />,
    title: "Smart Payment Reminders",
    desc: "Get notified before your bills are due so you never miss a payment.",
  },
  {
    icon: <CreditCard size={28} className="" />,
    title: "Auto-payment Tracking",
    desc: "Detect and monitor recurring auto-debits across all services.",
  },
  {
    icon: <Slash size={28} className="" />,
    title: "Cancel Unused Subscriptions",
    desc: "Stop paying for services you don’t use anymore — all from one app.",
  },
  {
    icon: <BarChart2 size={28} className=" " />,
    title: "Spending Analytics",
    desc: "Analyze where your money goes and take better control of your finances.",
  },
  {
    icon: <HelpCircle size={28} className="" />,
    title: "Cancel Guide for Each App",
    desc: "Get step-by-step guidance on how to cancel any subscription easily.",
  },
];

const FeaturesSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="px-4 py-16 text-center mx-auto dark:text-white/90 text-black/90 dark:bg-black bg-gray-200 "
    >
      <h2 className="text-3xl font-bold mb-4">Everything You Need to Manage Subscriptions</h2>
      <p className="dark:text-white/70 text-black/70 text-lg mb-10 max-w-2xl mx-auto">
        Kosh helps you organize your recurring payments and stay in control of your finances with real-time insights and alerts.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="p-6 h-full rounded-xl border dark:border-white/20 border-black/20 backdrop-blur-md text-left shadow-xl"
          >
            <div className="mb-4">{item.icon}</div>
            <h4 className="text-xl font-semibold mb-2 ">{item.title}</h4>
            <p className="text-black/60 dark:text-white/60 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
