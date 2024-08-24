import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import type { ChannelDetails, MultiVideoResult } from "../types";

import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

interface Props {
  videos: MultiVideoResult["items"];
  direction?: "column" | "row" | "row-reverse" | "column-reverse";
}

export default function Videos({ videos, direction = "row" }: Props) {
  if (!videos?.length) return null;

  return (
    <Stack direction={direction} flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && (
            <ChannelCard
              channelDetail={item as unknown as ChannelDetails["items"][number]}
            />
          )}
        </Box>
      ))}
    </Stack>
  );
}
