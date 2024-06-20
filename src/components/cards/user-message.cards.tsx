import { MessageModel } from "@/pages/chat/ChatPage";

interface Props {
  message: MessageModel;
}
export default function UserMessageCard({ message }: Props) {
  return (
    <p className="ml-auto w-fit p-3 bg-[#E4EDAD] md:max-w-[60%] max-w-[80%]">
      {message.content}
    </p>
  );
}
