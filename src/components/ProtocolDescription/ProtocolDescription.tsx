import React from 'react';
import styles from './ProtocolDescription.module.scss';
export const ProtocolDescription: React.FC = () => {
  return (
    <section className={styles.descriptionContainer}>
      <p>
        In the rapidly evolving landscape of blockchain technology, the
        interface where traditional web meets blockchain is often vulnerable,
        <strong> leaving it susceptible to security breaches</strong> like DNS
        hijacking and compromised frontend servers.
      </p>
      <p>
        <strong className={styles.highlighted}>
          SCI is a protocol engineered to mitigate these risks, providing a
          robust verification system that instills confidence and trust in web3
          interactions.
        </strong>
      </p>
    </section>
  );
};
