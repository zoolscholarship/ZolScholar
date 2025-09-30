import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface MobileButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const MobileButton = ({ 
  children, 
  className, 
  onClick,
  variant = 'default',
  size = 'default',
  disabled,
  type = 'button'
}: MobileButtonProps) => {
  return (
    <Button
      variant={variant}
      size={size}
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={cn(
        // Base mobile styles
        "touch-manipulation select-none",
        "min-h-[48px] min-w-[48px]", // Minimum touch target size
        "text-base md:text-sm", // Larger text on mobile
        "px-6 py-3 md:px-4 md:py-2", // More padding on mobile
        "font-medium",
        "transition-all duration-200",
        "active:scale-95", // Touch feedback
        "focus:ring-2 focus:ring-primary/20 focus:ring-offset-2",
        className
      )}
    >
      {children}
    </Button>
  );
};

interface MobileCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export const MobileCard = ({ 
  children, 
  className, 
  onClick,
  hoverable = false
}: MobileCardProps) => {
  return (
    <Card
      onClick={onClick}
      className={cn(
        "touch-manipulation",
        "p-4 md:p-6", // More padding on mobile
        "rounded-xl",
        "border border-border",
        "bg-card",
        "shadow-sm",
        "transition-all duration-200",
        hoverable && [
          "hover:shadow-md",
          "hover:scale-[1.02]",
          "active:scale-[0.98]",
          "cursor-pointer"
        ],
        onClick && "cursor-pointer",
        className
      )}
    >
      {children}
    </Card>
  );
};

interface MobileTextProps {
  children: ReactNode;
  className?: string;
  variant?: 'body' | 'heading' | 'subheading' | 'caption';
}

export const MobileText = ({ 
  children, 
  className, 
  variant = 'body' 
}: MobileTextProps) => {
  const baseClasses = "leading-relaxed";
  
  const variantClasses = {
    body: "text-base md:text-sm",
    heading: "text-xl md:text-lg font-bold",
    subheading: "text-lg md:text-base font-semibold",
    caption: "text-sm md:text-xs text-muted-foreground"
  };

  return (
    <div className={cn(baseClasses, variantClasses[variant], className)}>
      {children}
    </div>
  );
};

interface MobileInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  type?: string;
  disabled?: boolean;
}

export const MobileInput = ({ 
  placeholder, 
  value, 
  onChange, 
  className,
  type = 'text',
  disabled
}: MobileInputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onChange={(e) => onChange?.(e.target.value)}
      className={cn(
        "w-full",
        "min-h-[48px]", // Minimum touch target height
        "px-4 py-3", // Comfortable padding
        "text-base", // Larger text to prevent zoom on iOS
        "border border-input",
        "rounded-lg",
        "bg-background",
        "transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "touch-manipulation",
        className
      )}
    />
  );
};

interface MobileContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

export const MobileContainer = ({ 
  children, 
  className,
  maxWidth = 'lg'
}: MobileContainerProps) => {
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    full: 'max-w-full'
  };

  return (
    <div className={cn(
      "mx-auto",
      "px-4 md:px-6 lg:px-8",
      "w-full",
      maxWidthClasses[maxWidth],
      className
    )}>
      {children}
    </div>
  );
};
