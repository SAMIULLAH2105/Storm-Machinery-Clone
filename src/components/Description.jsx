import React from 'react';
import styles from './description.module.css';

const Description = ({ heading, subheading, description, buttonText }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>{subheading}</h2>
        <h1>{heading}</h1>
        <p>{description}</p>

        {/* Conditionally render the button only if buttonText is passed */}
        {buttonText && (
          <button className={styles.contactButton}>{buttonText}</button>
        )}
      </div>
    </div>
  );
}

export default Description;
