
import { Instagram, Send } from 'lucide-react';

interface ContactButtonsProps {
  size?: 'small' | 'normal';
  className?: string;
}

const ContactButtons = ({ size = 'normal', className = '' }: ContactButtonsProps) => {
  const buttonSize = size === 'small' ? 'py-2 px-4 text-sm' : 'py-3 px-5';
  
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a 
        href="https://t.me/hey_alyon_ka" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`contact-button ${buttonSize} bg-[#0088cc] hover:bg-[#0099E6] text-white`}
      >
        <Send size={size === 'small' ? 16 : 20} />
        <span>Telegram</span>
      </a>
      <a 
        href="https://www.instagram.com/hey_alyon_ka/?hl=en" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`contact-button ${buttonSize} bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:opacity-90 text-white`}
      >
        <Instagram size={size === 'small' ? 16 : 20} />
        <span>Instagram</span>
      </a>
    </div>
  );
};

export default ContactButtons;
