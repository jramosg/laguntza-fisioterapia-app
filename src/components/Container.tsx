import { ReactNode } from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  children: ReactNode;
  size?: 'small' | 'medium' | 'large' | 'full';
  padding?: 'none' | 'small' | 'medium' | 'large';
  className?: string;
  as?: 'div' | 'section' | 'main' | 'article' | 'aside';
}

export default function Container({
  children,
  size = 'medium',
  padding = 'medium',
  className = '',
  as: Component = 'div'
}: ContainerProps) {
  const containerClasses = [
    styles.container,
    styles[`size-${size}`],
    styles[`padding-${padding}`],
    className
  ].filter(Boolean).join(' ');

  return (
    <Component className={containerClasses}>
      {children}
    </Component>
  );
}
