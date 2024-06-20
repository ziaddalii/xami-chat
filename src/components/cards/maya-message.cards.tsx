import { MessageModel } from "@/pages/chat/ChatPage";
import mayaProfilePic from "@/assets/maya-profile-pic.png";

interface Props {
  message: MessageModel;
}
export default function MayaMessageCard({ message }: Props) {
  return (
    <div className="flex gap-1 text-wrap break-words">
      <img
        className="p-1 bg-[#D9D9D9] rounded-full size-[40px]"
        src={mayaProfilePic}
        alt="Maya profile picture"
      />{" "}
      <p className="w-fit p-3 bg-white md:max-w-[60%] max-w-[80%]">
        {message.content}
      </p>
    </div>
  );
}
