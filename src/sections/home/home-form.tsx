import { startChatApi } from "@/api/requests/home.api";
import ErrorMsg from "@/components/messages/error-msg.messages";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const name_schema = z
  .string()
  .min(2, { message: "Name must be at least 2 characters long" })
  .regex(/^[a-zA-Z\s'-]+$/, { message: "Invalid name format" });

function HomeForm() {
  const [error, setError] = useState<string>("");
  const nameRef = useRef<HTMLInputElement>(null);
  const [disabledButton, setDisabledButton] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const name = nameRef?.current?.value || "";
    setDisabledButton(true);
    try {
      name_schema.parse(name);
      setError("");
      const { thread_id } = await startChatApi();
      localStorage.setItem("thread_id", thread_id);
      localStorage.setItem("user_name", name);
      navigate("/chat");
    } catch (e) {
      const error = e as { errors: { message: string }[] };
      setError(error.errors[0].message);
      setDisabledButton(false);
    }
  };

  return (
    <form className="mt-16 w-full space-y-4" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-1">
          Name
        </label>
        <input
          ref={nameRef}
          type="text"
          id="name"
          placeholder="Name"
          className="bg-white h-12 w-full ps-4 focus:outline-slate-600"
        />
        <ErrorMsg error={error} />
      </div>{" "}
      <button
        disabled={disabledButton}
        className={`${
          disabledButton
            ? "bg-[#aa6f6c] text-gray-700"
            : "bg-[#E6625B] hover:bg-[#ca5751]"
        } w-full py-3 transition-all`}
        type="submit"
      >
        Let's Start
      </button>
    </form>
  );
}

export default HomeForm;
