// components/FAQ.tsx
import React from 'react';
import styles from './FAQ.module.scss';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: 'How does the SCI Protocol improve security?',
    answer:
      'SCI enhances security by verifying authorized smart contracts for web domains, reducing risks associated with unauthorized or malicious contracts.',
  },
  {
    question: 'What is the cost of using the SCI Protocol?',
    answer: 'The SCI Protocol is free for both end-users and dApp owners.',
  },
  {
    question: 'Which wallets are compatible with the SCI Protocol?',
    answer:
      'We aim to support a broad range of wallets, focusing on integrating with the most popular and widely used ones. But from now on only Metamask is compatible with our protocol.',
  },
  {
    question:
      'Do I need to share any sensitive information like a secret phrase with SCI?',
    answer:
      'No, SCI does not require any sensitive information such as secret phrases or private keys.',
  },
  {
    question: 'Is the SCI Protocol easy to integrate with my web domain?',
    answer:
      'Yes, SCI is designed for straightforward integration with web domains, emphasizing user-friendliness.',
  },
  {
    question: 'How can I whitelist my smart contracts with SCI?',
    answer:
      'Until our web application launches, you can whitelist your contracts by contacting us at support@sci.domains.',
  },
  {
    question: 'Is there going to be a browser extension for SCI?',
    answer:
      'Yes, developing a browser extension is on our roadmap. This will offer consistent features across different wallets, enhancing user experience and security.',
  },
];

const FAQ: React.FC = () => {
  return (
    <div className={styles.faqContainer}>
      {faqs.map((faq, index) => (
        <details key={index} className={styles.faqItem}>
          <summary>{faq.question}</summary>
          <p className={styles.answer}>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
};

export default FAQ;
