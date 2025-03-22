import {
  Youtube,
  AtSign,
  Instagram,
  Facebook,
  Github,
  Globe,
} from "lucide-react";
import SociabuzzIcon from "./icons/sociabuzz-icon";
import SaweriaIcon from "./icons/saweria-icon";
import WhatsAppIcon from "./icons/whatsapp-icon";
import TikTokIcon from "./icons/tiktok-icon";
import RobloxIcon from "./icons/roblox-icon";
import SpotifyIcon from "./icons/spotify-icon";
import DeviantArtIcon from "./icons/deviantart-icon";

interface LinkIconProps {
  name: string;
}

export default function LinkIcon({ name }: LinkIconProps) {
  switch (name) {
    case "My Portfolio":
      return <Globe className="h-5 w-5" />;
    case "New Youtube":
      return <Youtube className="h-5 w-5" />;
    case "Store":
      return <SociabuzzIcon className="h-5 w-5" />;
    case "Saweria":
      return <SaweriaIcon className="h-5 w-5" />;
    case "WhatsApp":
      return <WhatsAppIcon className="h-5 w-5" />;
    case "TikTok":
      return <TikTokIcon className="h-5 w-5" />;
    case "Instagram":
      return <Instagram className="h-5 w-5" />;
    case "Facebook":
      return <Facebook className="h-5 w-5" />;
    case "Threads":
      return <AtSign className="h-5 w-5" />;
    case "GitHub":
      return <Github className="h-5 w-5" />;
    case "Roblox":
      return <RobloxIcon className="h-5 w-5" />;
    case "Spotify":
      return <SpotifyIcon className="h-5 w-5" />;
    case "Devianart":
      return <DeviantArtIcon className="h-5 w-5" />;
    default:
      return <Globe className="h-5 w-5" />;
  }
}
