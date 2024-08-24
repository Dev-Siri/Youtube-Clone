import CheckroomIcon from "@mui/icons-material/Checkroom";
import CodeIcon from "@mui/icons-material/Code";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import HomeIcon from "@mui/icons-material/Home";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SchoolIcon from "@mui/icons-material/School";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";

export const logo = "https://i.ibb.co/s9Qys2j/logo.png";
export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

export const categories = [
  { name: "New", icon: <HomeIcon /> },
  { name: "Coding", icon: <CodeIcon /> },
  { name: "ReactJS", icon: <CodeIcon /> },
  { name: "NextJS", icon: <CodeIcon /> },
  { name: "Music", icon: <MusicNoteIcon /> },
  { name: "Education", icon: <SchoolIcon /> },
  { name: "Podcast", icon: <GraphicEqIcon /> },
  { name: "Movie", icon: <OndemandVideoIcon /> },
  { name: "Gaming", icon: <SportsEsportsIcon /> },
  { name: "Live", icon: <LiveTvIcon /> },
  { name: "Sport", icon: <FitnessCenterIcon /> },
  { name: "Fashion", icon: <CheckroomIcon /> },
  { name: "Beauty", icon: <FaceRetouchingNaturalIcon /> },
  { name: "Comedy", icon: <TheaterComedyIcon /> },
  { name: "Gym", icon: <FitnessCenterIcon /> },
  { name: "Crypto", icon: <DeveloperModeIcon /> },
] as const;

export type Category = (typeof categories)[number]["name"];
