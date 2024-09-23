import { useState } from "react";

export const useFetch = (sendEmail?: string) => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const validateEmail = (email: string) => {
      const emailPattern =
        /^[a-z0-9._%+-]+@[a-z0-9.-]+\.(com|net|org|edu|gov)$/;
      return emailPattern.test(email);
    };

    if (!validateEmail(email)) {
      alert("Invalid email address");
      return;
    }

    if (validateEmail(email)) {
      const response = await fetch(`/api/${sendEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("Email sent successfully");
      }
    }
  };

  return { email, setEmail, handleSubmit };
};
