import { motion } from "framer-motion";
import { BellRing, CreditCard, XCircle, LineChart } from "lucide-react";

const features = [
  {
    title: "Track All Payments",
    description: "Get a unified view of all your subscriptions, bills, and one-time payments — updated in real-time.",
    icon: <CreditCard size={20} />,
  },
  {
    title: "Smart Notifications",
    description: "Receive timely alerts for upcoming bills so you never miss a payment again.",
    icon: <BellRing size={20} />,
  },
  {
    title: "Cancel Unused Subscriptions",
    description: "Identify unused or forgotten subscriptions and learn how to cancel them step-by-step.",
    icon: <XCircle size={20} />,
  },
  {
    title: "Track Your Spending",
    description: "Monitor your total subscription spending each month, with category-wise breakdowns.",
    icon: <LineChart size={20} />,
  },
];

const FeaturePage = () => {
  return (
    <div className="min-h-screen px-4 py-24  overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Everything You Need to Manage Subscriptions
      </motion.h1>

      <div className="flex justify-center gap-4 flex-wrap perspective-[1000px]">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, rotateY: -25 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="w-[280px] h-[260px] p-6 rounded-xl border dark:border-white/20 border-black/20 backdrop-blur-md"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <div className="border border-black/40 dark:border-white/40 p-2 rounded-full text-black/80 dark:text-white/80">
                {feature.icon}
              </div>
            </div>
            <p className="text-black/70 dark:text-white/70 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto mt-16 text-center text-black/70 dark:text-white/70 text-sm"
      >
        Kosh also helps you cancel subscriptions from popular apps by showing the steps needed. Just click on a service in your dashboard, and we’ll walk you through how to cancel from the app, website, or customer care.
      </motion.div>
    </div>
  );
};

export default FeaturePage;
