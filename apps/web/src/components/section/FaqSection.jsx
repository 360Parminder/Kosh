import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "How does Kosh track my payments?",
    answer:
      "Kosh connects securely with your bank or account aggregator to fetch your transactions. It then categorizes and detects recurring payments using intelligent algorithms.",
  },
  {
    question: "Will I get notifications for all upcoming bills?",
    answer:
      "Yes. You will receive smart reminders before due dates so that you never miss a payment — whether it’s for subscriptions, utilities, or services.",
  },
  {
    question: "Is my financial data safe?",
    answer:
      "Absolutely. Kosh uses bank-grade encryption and never stores sensitive credentials. All data access follows the highest security standards through Account Aggregator frameworks.",
  },
  {
    question: "Can I cancel subscriptions through Kosh?",
    answer:
      "Yes. We guide you through the cancellation process of most services with one-click support or detailed step-by-step instructions.",
  },
  {
    question: "Does Kosh support multiple banks?",
    answer:
      "Yes. Kosh is compatible with multiple banks via approved AA partners, allowing you to track all payments in one place.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-20 text-white/90">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-10 text-center"
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border border-white/20 backdrop-blur-md rounded-xl px-6 py-4"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-left text-white"
            >
              <span className="font-medium">{faq.question}</span>
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={18} />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.p
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-white/70 text-sm mt-3 overflow-hidden"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
