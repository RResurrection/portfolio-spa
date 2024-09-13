"use client";

const Button = ({ title, styles }: ButtonProps) => (
  <button onClick={() => console.log(title)} className={`${styles}`}>
    {title}
  </button>
);

export default Button;
