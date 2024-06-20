import mayaProfilePic from "@/assets/maya-profile-pic.png";
import backIcon from "@/assets/icons/back-icon.png";
import { useNavigate } from "react-router-dom";
import React from "react";

function ChatHeader() {
  const navigate = useNavigate();

  const backToHomePage = (e: React.SyntheticEvent) => {
    e.preventDefault();
    localStorage.removeItem("thread_id");
    localStorage.removeItem("user_name");
    navigate("/")
  };

  return (
    <header className="bg-background-dark fixed top-0 w-full">
      <div className="max-w-3xl mx-auto py-4 px-3 grid grid-cols-3">
        <div className="col-span-1 flex gap-4">
          <button onClick={backToHomePage}>
            <img src={backIcon} alt="go back icon" />
          </button>
          <img
            className="p-1 bg-[#ADADAD] rounded-full size-[40px]"
            src={mayaProfilePic}
            alt="Manav profile picture"
          />
        </div>
        <div className="col-span-1 flex justify-center items-center">Manav</div>
      </div>
    </header>
  );
}

export default ChatHeader;
