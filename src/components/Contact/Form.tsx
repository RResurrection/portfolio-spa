"use client";

import { useFetch } from "@/hooks/useFetch";
import { Input } from "../ui/input";
const Form = () => {
  const { email, setEmail, handleSubmit } = useFetch("sendEmail");

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-6 justify-center mb-[100px]"
    >
      <Input
        className="max-w-[625px] h-[75px] text-[21px] py-[20xp] px-[37px] text-semibold rounded-[14px]"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />

      <button
        type="submit"
        className="bg-[#FD6F00] max-w-[222ppx] h-[75px] text-[21px] py-[20xp] px-[37px] text-semibold rounded-[14px]"
      >
        Contact Me
      </button>
    </form>
  );
};

export default Form;
