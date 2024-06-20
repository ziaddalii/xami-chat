import ChatConversation from "@/sections/chat/chat-conversation";
import ChatHeader from "@/sections/chat/chat-header";
import SendMessageForm from "@/sections/chat/send-message-form";
import { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";

export interface MessageModel {
  sender: "maya" | "user";
  content: string;
}

function ChatPage() {
  const navigate = useNavigate();
  
  // Validate user have initialized
  useEffect(() => {
    const user_name = localStorage.getItem("user_name") || "";
    const thread_id = localStorage.getItem("thread_id");

    // Validate user have initialized
    if (!thread_id || !user_name) {
      navigate("/");
    }
  }, [navigate]);


  const [messages, setMessages] = useState<MessageModel[]>([]);
  const [typing, setTyping] = useState<boolean>(true);

  // Scroll To last message
  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  return (
    <main className="mx-auto h-screen min-h-max border border-1 border-solid border-slate-300">
      <ChatHeader />
      <ChatConversation messages={messages} typing={typing} />
      <SendMessageForm setMessages={setMessages} setTyping={setTyping} />
    </main>
  );
}

export default ChatPage;
