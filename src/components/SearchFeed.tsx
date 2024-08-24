import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import type { MultiVideoResult } from "../types";

import { fetchFromAPI } from "../utils/fetch";

import Videos from "./Videos";

export default function SearchFeed() {
  const [videos, setVideos] = useState<MultiVideoResult["items"]>([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    const fetchVideosBySearchTerm = async () => {
      const fetchedVideos = await fetchFromAPI<MultiVideoResult>(
        `search?part=snippet&q=${searchTerm}`,
      );

      setVideos(fetchedVideos.items);
    };

    fetchVideosBySearchTerm();
  }, [searchTerm]);

  return (
    <Box
      p={4}
      sx={{
        overflowY: "auto",
        flex: 2,
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{
          color: "white",
        }}
      >
        Search results for{" "}
        <span style={{ color: "#f31503" }}>{searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
}
