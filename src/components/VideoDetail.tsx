import CheckCircle from "@mui/icons-material/CheckCircle";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";

import type { MultiVideoResult, VideoDetails } from "../types";

import { fetchFromAPI } from "../utils/fetch";

import Videos from "./Videos";

export default function VideoDetail() {
  const { id } = useParams();
  const [videos, setVideos] = useState<MultiVideoResult["items"]>([]);
  const [videoDetail, setVideoDetail] = useState<
    VideoDetails["items"][number] | null
  >(null);

  useEffect(() => {
    async function fetchDetails() {
      const fetchedVideoDetails = await fetchFromAPI<VideoDetails>(
        `videos?part=snippet,statistics&id=${id}`,
      );

      setVideoDetail(fetchedVideoDetails?.items[0]);

      const fetchedVideos = await fetchFromAPI<MultiVideoResult>(
        `search?part=snippet&relatedToVideoId=${id}&type=video`,
      );

      setVideos(fetchedVideos.items);
    }

    fetchDetails();
  }, [id]);

  if (!videoDetail?.snippet) return null;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{
                color: "#fff",
                py: 1,
                px: 2,
              }}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography sx={{ sm: "subtitle1", md: "h6" }} color="#fff">
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
}
