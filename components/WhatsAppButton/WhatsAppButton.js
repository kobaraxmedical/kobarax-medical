import React from 'react';
import styles from './WhatsAppButton.module.css';

const WhatsAppButton = () => {
    return (
        <a 
            href="https://wa.me/221788973014" 
            className={styles.whatsappButton} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
        >
            <img src="/images/whatsapp-icon.png" alt="Chat on WhatsApp" />
        </a>
        
    );
};

export default WhatsAppButton;
