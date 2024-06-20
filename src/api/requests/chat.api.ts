import axios from "axios";
import { CHAT, CHECK } from "../constants";

export interface PostChatPayload {
  thread_id: string;
  message: string;
}

interface PostChatResponse {
  run_id: string;
}

// CHAT SEND MESSAGE
export async function sendMessageChatApi(
  payload: PostChatPayload
): Promise<PostChatResponse> {
  try {
    const response = await axios.post(CHAT, payload);
    if (response.status !== 200) {
      throw new Error(
        `Failed to fetch: ${response.status} ${response.statusText}`
      );
    }
    return response.data;
  } catch (error) {
    console.error("Error in sendMessageChatApi:", error);
    return {
      run_id: "",
    };
  }
}

export interface PostCheckPayload {
  thread_id: string;
  run_id: string;
}

interface PostCheckResponse {
  response: string;
  status: string;
}
//   CHECK
export async function checkChatApi(
  payload: PostCheckPayload
): Promise<PostCheckResponse> {
  try {
    const response = await axios.post(CHECK, payload);
    if (response.status !== 200) {
      throw new Error(
        `Failed to fetch: ${response.status} ${response.statusText}`
      );
    }
    return response.data;
  } catch (error) {
    console.error("Error in sendMessageChatApi:", error);
    return {
      response: "",
      status:""
    };
  }
}
