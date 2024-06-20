import axios from "axios";
import { START } from "../constants";

export async function startChatApi() {
    try {
      const response = await axios.get(START);
      if (response.status !== 200) {
        throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
      }
      return response.data;
    } catch (error) {
      console.error("Error in startChatApi:", error);
      return {
        thread_id: "",
      };
    }
  }
