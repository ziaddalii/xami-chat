import { TypingAnimation } from "@/sections/chat/chat-typing-animations";
import mayaProfilePic from '@/assets/maya-profile-pic.png';

function TypingCard() {
  return (
    <div className="flex gap-1">
      <img
        className="p-1 bg-[#D9D9D9] rounded-full size-[40px]"
        src={mayaProfilePic}
        alt="Maya profile picture"
      />{" "}
      <TypingAnimation />
    </div>
  );
}

export default TypingCard;
