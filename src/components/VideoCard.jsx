import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CheckCircle from "@mui/icons-material/CheckCircle";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => (
  <Card
    sx={{
      width: {
        xs: "100%",
        sm: "358px",
        md: "320px",
      },
      boxShadow: "none",
      borderRadius: 0,
    }}
  >
    <Link to={`/video/${videoId}`}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{
          width: {
            xs: "100%",
            sm: "358px",
          },
          height: "180px",
        }}
      />
    </Link>
    <CardContent
      sx={{
        backgroundColor: "#1e1e1e",
        height: "106px",
      }}
    >
      <Link to={`/video/${videoId}`}>
        <Typography variant="subtitle1" fontWeight="bold" color="#fff">
          {snippet?.title?.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={`/channel/${snippet?.channelId}`}>
        <Typography variant="subtitle2" fontWeight="bold" color="gray">
          {snippet?.channelTitle}
          <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard;
