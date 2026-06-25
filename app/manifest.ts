import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "9Young Knit",
    short_name: "9Young Knit",
    description: "B2B custom knitwear and garment factory showcase.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbfaf6",
    theme_color: "#17201c",
  };
}
