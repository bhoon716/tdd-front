import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    isLoading,
    className = '',
    disabled,
    ...props
}) => {
    const baseClass = variant === 'primary' ? 'btn btn-primary' : 'btn';

    return (
        <button
            className={`${baseClass} ${className}`}
            disabled={disabled || isLoading}
            style={{ opacity: disabled || isLoading ? 0.7 : 1 }}
            {...props}
        >
            {isLoading ? 'Loading...' : children}
        </button>
    );
};
