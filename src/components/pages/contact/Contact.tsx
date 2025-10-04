"use client";
import React, { useState } from "react";
import scss from "./Contact.module.scss";
import h1 from "../../../assets/image/h1.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Contact = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const TOKEN = "7562923725:AAEgdf6Uil-cnASdRkcPjq9K6rpRyViShPQ";
    const CHAT_ID = "-1002390177853";
    const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    const message = `
📩 Новая заявка с сайта:
👤 Эмайл: ${email}
`;

    try {
      const res = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "Markdown",
        }),
      });

      if (res.ok) {
        alert("Сообщение отправлено в Telegram ✅");
        setEmail("");
        router.push("/");
      } else {
        alert("Ошибка при отправке ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Ошибка соединения ❌");
    }
  };

  return (
    <div className={scss.Contact}>
      <div className="container">
        <div className={scss.contact}>
          <Image src={h1} alt="img" />
          <p>
            Set a secondary sales fee and add social links, a description,
            profile <br /> and banner images, and a description.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Contact</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
