import React from "react";
import { Typography } from "@mui/material";
import useGetNewReleases from "../../../hooks/useGetNewReleases";

const NewRelease = () => {
  const { data, error, isLoading } = useGetNewReleases();
  console.log("ddd", data);

  return (
    <div>
      <Typography variant="h1" sx={{ paddingTop: "8px" }}>
        NewRelease
      </Typography>
    </div>
  );
};

export default NewRelease;
