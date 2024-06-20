import { MessageModel } from "@/pages/chat/ChatPage";
import MayaMessageCard from "./maya-message.cards";
import UserMessageCard from "./user-message.cards";

interface Props {
  message: MessageModel;
}

export default function MessageCard({ message }: Props) {
  return (
    <>
      {message.sender === "maya" ? (
        // Maya Message Card
        <MayaMessageCard message={message} />
      ) : (
        message.sender === "user" && (
          // User Message Card
          <UserMessageCard message={message} />
        )
      )}
    </>
  );
}
