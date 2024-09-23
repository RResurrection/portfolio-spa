"use client";

import { ButtonProps } from "@/models/dummies-types";

const Button = ({ title, styles, onClick }: ButtonProps) => (
  <button onClick={onClick} className={`${styles}  bg-[#FD6F00]`}>
    {title}
  </button>
);

export default Button;
