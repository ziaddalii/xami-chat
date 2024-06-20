import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import ChatPage from "../pages/chat/ChatPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "chat",
    element: <ChatPage />,
  },
]);

export default router;
