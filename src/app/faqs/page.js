"use client";
import { useState, useRef, useEffect } from "react";

const faqs = [
  {
    question: "What are the rules for importing a vehicle?",
    answer: "Please contact your local government for import regulations and requirements.",
  },
  {
    question: "Does the FOB price include extra expenses like freight, taxes, and duties?",
    answer: "No, the FOB (Free on Board) price only covers the vehicle's cost and loading onto the shipping vessel; other expenses must be paid by you."
  },
  {
    question: "What are your office timings?",
    answer: "Our office is open Monday to Friday, 10:00 a.m. to 9:00 p.m. (Pakistan time), with a lunch break from 1:00–2:00 p.m.",
  },
  {
    question: "Can you show the vehicle's condition?",
    answer: "Yes, we provide detailed photos and videos of the vehicle's condition upon request."
  },
  {
    question: "What languages do you support?",
    answer: "We primarily use English but can communicate in other languages if needed."
  },
  {
    question: "Can auto parts be shipped inside the vehicle?",
    answer: "No, we do not ship auto parts, and we cannot place them inside vehicles because auto parts duties are paid separately."
  },
  {
    question: "Can I use two email addresses for the process?",
    answer: "No, we only accept one email address for security purposes."
  },
  {
    question: "Why should I buy a Japanese car?",
    answer: "Japanese cars are reliable, fuel-efficient, and built to high-quality standards."
  },
  {
    question: "Do you list the year of manufacture?",
    answer: "Yes, we list the year of manufacture for all vehicles when the information is available."
  },
  {
    question: "Can I request vehicles not listed on your website?",
    answer: "Yes, let us know your requirements, and we’ll find the best match."
  },
  {
    question: "Do vehicles come with an English manual?",
    answer: "No, all manuals are in Japanese."
  },
  {
    question: "Are spare keys provided?",
    answer: "It depends; if not found in the vehicle, they are not provided."
  },
  {
    question: "Can you install audio systems or parts like alloy wheels?",
    answer: "No, we do not provide any installation services."
  },
  {
    question: "Can you ship auto parts inside the vehicle?",
    answer: "No, we do not ship auto parts, and we cannot place them inside vehicles because auto parts duties are paid separately."
  },
  {question: "Can I change a vehicle's odometer reading?",
    answer: "No, altering odometer readings is illegal.",
  },
  {question: "What does “Under Offer” mean?",
    answer: "It means a customer has made an offer, but payment confirmation is pending.",
  },
  {question: "Can I visit your showroom to see vehicles in person?",
    answer: "Yes, you are very welcome to visit our office/showrooms listed in our contact us page.",
  },
  {question: "Please schedule an appointment in advance if you plan to come to visit our office. Can you show the condition of the vehicles?",
    answer: "Yes, we can. We will do our best to provide as many detailed pictures of the vehicle as we can to help you with your purchasing decision.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [heights, setHeights] = useState({});
  const refs = useRef([]);

  // recalc height when question toggles
  useEffect(() => {
    if (openIndex !== null && refs.current[openIndex]) {
      setHeights((prev) => ({
        ...prev,
        [openIndex]: refs.current[openIndex].scrollHeight,
      }));
    }
  }, [openIndex]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto p-6 bg-blue-950">
      {/* FAQ Image */}
      <div className="flex mb-6 text-center justify-center">
        <img src="/faqimg.webp" alt="" className="w-100 h-60" />
      </div>

      {/* Questions */}
      <div className="space-y-1">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-yellow-500 shadow-sm">
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-4 text-normal font-light text-yellow-500 rounded-lg"
            >
              {faq.question}
            </button>

            {/* Answer */}
            <div
              style={{
                maxHeight: openIndex === index ? `${heights[index] || 0}px` : "0px",
              }}
              className="transition-all duration-700 ease-in-out overflow-hidden"
            >
              <div
                ref={(el) => (refs.current[index] = el)}
                className="p-4 text-gray-600 border-b border-yellow-500 bg-blue-950 text-white text-sm"
              >
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
