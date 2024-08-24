import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import type { ChannelDetails, MultiVideoResult } from "../types";

import { fetchFromAPI } from "../utils/fetch";

import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

export default function ChannelDetail() {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState<
    ChannelDetails["items"][number] | null
  >(null);
  const [videos, setVideos] = useState<MultiVideoResult["items"]>([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const fetchedChannelDetails = await fetchFromAPI<ChannelDetails>(
        `channels?part=snippet&id=${id}`,
      );
      const fetchedChannelVideos = await fetchFromAPI<MultiVideoResult>(
        `search?channelId=${id}&part=snippet&order=date`,
      );

      setChannelDetail(fetchedChannelDetails?.items[0]);
      setVideos(fetchedChannelVideos?.items);
    };

    fetchDetails();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 238, 247, 1) 0%, rgba(206, 3, 184, 1) 100%, rgba(0, 212, 255, 1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}
