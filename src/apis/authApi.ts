import axios from "axios";
import { clientId, clientSecret } from "../configs/authConfig";
import { ClientCredentialTokenResponse } from "../models/auth";

const encodeBase64 = (data: string) => {
  return btoa(data);
};

export const getClientCredentialToken =
  async (): Promise<ClientCredentialTokenResponse> => {
    try {
      const body = new URLSearchParams({
        grant_type: "client_credentials",
      });

      const response = await axios.post<ClientCredentialTokenResponse>(
        "https://accounts.spotify.com/api/token",
        body,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${encodeBase64(`${clientId}:${clientSecret}`)}`,
          },
        },
      );

      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
