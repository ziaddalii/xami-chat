import { checkChatApi, sendMessageChatApi } from "@/api/requests/chat.api";
import { MessageModel } from "@/pages/chat/ChatPage";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

interface Props {
  setMessages: Dispatch<SetStateAction<MessageModel[]>>;
  setTyping: Dispatch<SetStateAction<boolean>>;
}

export default function SendMessageForm({ setMessages, setTyping }: Props) {
  const thread_id = localStorage.getItem("thread_id") || "";
  const user_name = localStorage.getItem("user_name") || "";
  // States
  const [disabledButton, setDisabledButton] = useState<boolean>(true);
  const [disabledInput, setDisabledInput] = useState<boolean>(true);
  const messageIInputRef = useRef<HTMLInputElement>(null);

  // Send Hidden Message
  const sendFirstHiddenMessage = async () => {
    const chat_payload = {
      message: `Hi my name is ${user_name} and i would like to know more about you`,
      thread_id: thread_id,
    };

    // CHAT REQUEST
    const { run_id } = await sendMessageChatApi(chat_payload);

    // GET MAYA'S RESPONSE
    getMayaResponse(run_id);
    setDisabledInput(false);
  };

  useEffect(() => {
    sendFirstHiddenMessage();
  }, []);

  // Check Input Value
  const checkInputValue = () => {
    if (!messageIInputRef.current) {
      setDisabledButton(true);
      return;
    }
    if (messageIInputRef.current.value.trim() === "") {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  };

  // Handle Messages Flow
  const handleMessages = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const new_message: string = messageIInputRef?.current?.value || "";

    // SEND USER'S MESSAGE
    sendMessage(new_message);
  };

  // Handle User Sending Message
  const sendMessage = async (new_message: string) => {
    // add user's message
    setMessages((prevState) => [
      ...prevState,
      { sender: "user", content: new_message },
    ]);

    const chat_payload = {
      message: new_message,
      thread_id: thread_id,
    };

    // Empty Input and disable button
    if (messageIInputRef.current) {
      messageIInputRef.current.value = "";
      setDisabledButton(true);
    }

    // CHAT REQUEST
    const { run_id } = await sendMessageChatApi(chat_payload);

    // GET MAYA'S RESPONSE
    getMayaResponse(run_id);
  };

  // Get Response Message
  const getMayaResponse = async (run_id: string) => {
    const check_payload = {
      run_id: run_id,
      thread_id: thread_id,
    };

    setTyping(true);
    const { response } = await checkChatApi(check_payload);
    setTyping(false);

    // Add Maya's message
    setMessages((prevState) => [
      ...prevState,
      { content: response, sender: "maya" },
    ]);
  };

  return (
    <div className="bg-background-light w-full fixed bottom-0">
      <form
        onSubmit={handleMessages}
        className="w-full max-w-3xl mx-auto py-2 flex items-center gap-1 px-2"
      >
        <input
          disabled={disabledInput}
          ref={messageIInputRef}
          onChange={checkInputValue}
          type="text"
          id="name"
          placeholder="Type a message"
          className="bg-white h-12 w-full ps-4 rounded-[5px] focus:outline-slate-600"
        />
        <button
          disabled={disabledButton}
          className={`px-0 rounded-full w-12 h-12 flex-shrink-0 ${
            disabledButton
              ? "text-gray-400 bg-[#cfcfcf8e]"
              : "bg-background-dark hover:bg-[#b9b9b9] "
          }`}
          type="submit"
        >
          GO
        </button>
      </form>
    </div>
  );
}
