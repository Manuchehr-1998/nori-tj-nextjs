"use client";
import React, { useState } from "react";

const ContactsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Example: Send form data to an API or perform other actions
      console.log(formData);
      alert("Form submitted successfully!"); // Replace with actual logic
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Form submission error. Please try again.");
    }
  };

  return (
    <div className="text-white">
      <h1 className="text-[30px] text-center uppercase font-bold w-[400px] leading-[54px] font-aqum text-white">
        Контакты
      </h1>
      <div className="text-center">
        <h1 className="text-3xl font-bold mt-8 mb-4">Наш адрес и контакты</h1>
        <p className="mb-4">
          Душанбе, Таджикистан. <br />
          Ул. Валаматзаде 8 <br />
          Ориентир: Хукумат р-на Шохмансур
        </p>
        <div className="flex flex-col items-center mb-8">
          <div className="mb-2 w-[477px]">
            <button className="p-2 w-[477px] bg-blue-500 text-white rounded-lg">
              Телеграм
            </button>
          </div>
          <div className="mb-2">
            <button className="p-2  w-[477px] bg-green-500 text-white rounded-lg">
              Ватсап
            </button>
          </div>
          <div className="mb-2">
            <button className="p-2  w-[477px] bg-blue-800 text-white rounded-lg">
              Мессенджер
            </button>
          </div>
          <div className="mb-2">
            <button className="p-2 w-[477px] bg-purple-500 text-white rounded-lg">
              Вайбер
            </button>
          </div>
          <div className="mb-2">
            <button className="p-2 w-[477px] bg-purple-950 text-white rounded-lg">
              +9927700770
            </button>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-8 mb-4">
          Оставьте отзыв пожалуйста и получите скидку
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ваше имя"
            className="p-2 mb-4 w-[477px] rounded-lg border border-gray-300 bg-purple-200 bg-opacity-20"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ваш email"
            className="p-2 mb-4 w-[477px] rounded-lg border border-gray-300 bg-purple-200 bg-opacity-20"
            required
          />
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            placeholder="Ваш комментарий"
            className="p-2 mb-4 w-[477px] h-32 rounded-lg border border-gray-300 resize-none bg-purple-200 bg-opacity-20"
            required
          ></textarea>
          <button
            type="submit"
            className="p-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactsPage;
