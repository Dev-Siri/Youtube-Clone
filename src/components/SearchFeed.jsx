import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Videos from "./Videos";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    const fetchVideosBySearchTerm = async () => {
      const { fetchFromAPI } = await import("../utils/fetch");
      const fetchedVideos = await fetchFromAPI(
        `search?part=snippet&q=${searchTerm}`
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
};

export default SearchFeed;
