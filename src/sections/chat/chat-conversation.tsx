import { MessageModel } from "@/pages/chat/ChatPage";
import MessageCard from "@/components/cards/message.card";
import TypingCard from "@/components/cards/typing-card";

interface Props {
  messages: MessageModel[];
  typing:boolean;
}
export default function ChatConversation({ messages, typing }: Props) {
  return (
    <article className="max-w-3xl mx-auto pt-28 pb-24 px-3 space-y-4">
      {messages.map((message, index) => (
        <MessageCard key={index} message={message} />
      ))}
      {typing && <TypingCard/>}
    </article>
  );
}
