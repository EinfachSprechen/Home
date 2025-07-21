
import { Instagram, MessageSquare, Send } from 'lucide-react';

interface ContactButtonsProps {
  size?: 'small' | 'normal';
  className?: string;
}

const ContactButtons = ({ size = 'normal', className = '' }: ContactButtonsProps) => {
  const buttonSize = size === 'small' ? 'py-2 px-4 text-sm' : 'py-3 px-5';
  
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a 
        href="https://t.me/aliona" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`contact-button ${buttonSize} bg-[#0088cc] hover:bg-[#0099E6] text-white`}
      >
        <Send size={size === 'small' ? 16 : 20} />
        <span>Telegram</span>
      </a>
      <a 
        href="https://www.instagram.com/einfach_sprechen_community" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`contact-button ${buttonSize} bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:opacity-90 text-white`}
      >
        <Instagram size={size === 'small' ? 16 : 20} />
        <span>Instagram</span>
      </a>
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`contact-button ${buttonSize} bg-[#25D366] hover:bg-[#128C7E] text-white`}
      >
        <MessageSquare size={size === 'small' ? 16 : 20} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};

export default ContactButtons;
