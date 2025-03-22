import type { LinkType, CategoryType } from "../types";

export const categories: CategoryType[] = [
  { id: "all", name: "All" },
  { id: "social", name: "Social" },
  { id: "content", name: "Content" },
  { id: "gaming", name: "Gaming" },
];

export const links: LinkType[] = [
  {
    name: "My Portfolio",
    url: "https://alangkun.my.id",
    category: "content",
    color: "#3B82F6",
    featured: true,
  },
  {
    name: "New Youtube",
    url: "https://youtube.com/@alangkun7",
    category: "content",
    color: "#FF0000",
  },
  {
    name: "Store",
    url: "https://sociabuzz.com/alangkun/shop",
    category: "content",
    color: "#F472B6",
  },
  {
    name: "Saweria",
    url: "https://saweria.co/alangz",
    category: "content",
    color: "#FF5E5B",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/6285278048446",
    category: "social",
    color: "#25D366",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@alang.kun",
    category: "social",
    color: "#000000",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/alang.kun",
    category: "social",
    color: "#E1306C",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100010513426134",
    category: "social",
    color: "#1877F2",
  },
  {
    name: "Threads",
    url: "https://www.threads.net/@alang.kun",
    category: "social",
    color: "#000000",
  },
  {
    name: "GitHub",
    url: "https://github.com/syahrulnizam7",
    category: "content",
    color: "#333333",
  },
  {
    name: "Roblox",
    url: "https://www.roblox.com/users/2927575780/profile",
    category: "gaming",
    color: "#FF0000",
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/user/31gdgjvpoczb66cloqpmyw5jzf7u",
    category: "content",
    color: "#1DB954",
  },
  {
    name: "Devianart",
    url: "https://www.deviantart.com/alangous",
    category: "content",
    color: "#05CC47",
  },
];
