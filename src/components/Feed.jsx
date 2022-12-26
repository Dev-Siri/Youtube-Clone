import { useState, useEffect, Suspense } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Sidebar from "./Sidebar";
import Videos from "./Videos";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async (a) => {
      const { fetchFromAPI } = await import("../utils/fetch");
      const fetchedVideos = await fetchFromAPI(
        `search?part=snippet&q=${selectedCategory}`
      );

      setVideos(fetchedVideos.items);
    };

    fetchVideos();
  }, [selectedCategory]);

  return (
    <Suspense>
      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        <Box
          sx={{
            height: { sx: "auto", md: "92vh" },
            borderRight: "1px solid #3d3d3d",
            px: { sx: 0, md: 2 },
          }}
        >
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <Typography
            className="copyright"
            variant="body2"
            sx={{ mt: 1.5, color: "#fff" }}
          >
            Copyright 2023 © Dev Siri
          </Typography>
        </Box>
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
            {selectedCategory} <span style={{ color: "#f31503" }}>videos</span>
          </Typography>

          <Videos videos={videos} />
        </Box>
      </Stack>
    </Suspense>
  );
};

export default Feed;
