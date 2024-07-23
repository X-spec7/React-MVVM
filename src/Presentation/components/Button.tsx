import React from 'react';

interface ButtonProps {
  onClick: () => void;
  title: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, title }) => {
  return (
    <button className="h-6" onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
