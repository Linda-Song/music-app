// import axios from "axios";
// import { SPOTIFY_BASE_URL } from "../configs/commonConfig";
// import { GetNewReleasesResponse } from "../models/album";

// export const getNewReleases = async (
//   clientCredentialToken: string,
// ): Promise<GetNewReleasesResponse> => {
//   try {
//     const response = await axios.get(
//       `${SPOTIFY_BASE_URL}/search?q=year:2025&type=album&limit=6`,
//       {
//         headers: {
//           Authorization: `Bearer ${clientCredentialToken}`,
//         },
//       },
//     );
//     return response.data;
//   } catch (error) {
//     throw new Error("Fail to fetch new release ");
//   }
// };

import axios from "axios";
import { SPOTIFY_BASE_URL } from "../configs/commonConfig";
import { SearchAlbumsResponse } from "../models/album";

export const getNewReleases = async (
  clientCredentialToken: string,
): Promise<SearchAlbumsResponse> => {
  try {
    const response = await axios.get<SearchAlbumsResponse>(
      `${SPOTIFY_BASE_URL}/search`,
      {
        params: {
          q: "year:2025",
          type: "album",
          limit: 6,
        },
        headers: {
          Authorization: `Bearer ${clientCredentialToken}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch albums");
  }
};
