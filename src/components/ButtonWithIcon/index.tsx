import { LucideIcon } from 'lucide-react';
import './style.css';

interface ButtonProps{
    text: string;
    Icon: LucideIcon;
    size?: 'normal' | 'short';
}

export function ButtonWithIcon({text, Icon, size = 'normal'}:ButtonProps){
    return (
    <button type="button" id="button-with-icon-block" className={size}>
                <Icon size={size==='short' ? 20 : 24} color="#FFFFFF"/>
                <span>{text}</span>
            </button>
    );
}
