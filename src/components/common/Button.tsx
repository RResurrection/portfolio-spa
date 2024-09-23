"use client";

const Button = ({ type, title, styles, onClick }: ButtonProps) => (
  <button onClick={onClick} className={`${styles}  bg-[#FD6F00]`}>
    {title}
  </button>
);

export default Button;
