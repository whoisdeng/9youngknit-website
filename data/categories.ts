export type Category = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  buyerFit: string[];
  materials: string[];
  techniques: string[];
  moq: string;
  sampleLeadTime: string;
  bulkLeadTime: string;
};

export const categories: Category[] = [
  {
    slug: "custom-knitwear",
    title: "Custom Knitwear",
    eyebrow: "Sweaters, cardigans, vests",
    description:
      "OEM and ODM knitwear development for seasonal collections, capsule drops, and private label ranges.",
    image: "/images/category-knitwear.svg",
    buyerFit: ["Fashion brands", "Boutiques", "Private label knitwear buyers"],
    materials: ["Cotton blends", "Acrylic blends", "Wool blends", "Viscose blends"],
    techniques: ["Jacquard", "Rib knit", "Cable knit", "Embroidery", "Branded labels"],
    moq: "Flexible by yarn, style, and color plan",
    sampleLeadTime: "7-14 days after details are confirmed",
    bulkLeadTime: "25-45 days depending on quantity and yarn availability",
  },
  {
    slug: "hoodies-sweatshirts",
    title: "Hoodies & Sweatshirts",
    eyebrow: "Fleece, terry, oversized fits",
    description:
      "Custom hoodies and sweatshirts for streetwear labels, creator brands, and wholesale programs.",
    image: "/images/category-hoodies.svg",
    buyerFit: ["Streetwear brands", "TikTok Shop sellers", "DTC fashion startups"],
    materials: ["Cotton fleece", "French terry", "Cotton-poly blends", "Brushed fleece"],
    techniques: ["Screen print", "Puff print", "Embroidery", "Applique", "Garment wash"],
    moq: "Flexible by fabric, color, and decoration method",
    sampleLeadTime: "7-12 days for basic styles, longer for special wash or trim",
    bulkLeadTime: "20-40 days after pre-production sample approval",
  },
  {
    slug: "tracksuits-sweat-sets",
    title: "Tracksuits & Sweat Sets",
    eyebrow: "Matching sets, coordinated drops",
    description:
      "Coordinated tops and bottoms for sports casual, streetwear, and lounge collections.",
    image: "/images/category-tracksuits.svg",
    buyerFit: ["Wholesalers", "Instagram brands", "Sports casual labels"],
    materials: ["French terry", "Interlock", "Fleece", "Scuba knit", "Nylon blends"],
    techniques: ["Panel blocking", "Tape trim", "Embroidery", "Heat transfer", "Custom drawcords"],
    moq: "Depends on fabric sourcing and set complexity",
    sampleLeadTime: "10-15 days after style details are confirmed",
    bulkLeadTime: "25-45 days after sample approval",
  },
  {
    slug: "t-shirts-shorts-sets",
    title: "T-Shirts & Shorts Sets",
    eyebrow: "Summer sets, jersey basics",
    description:
      "Custom tees, shorts, and matching sets for warm-weather drops and private label basics.",
    image: "/images/category-tshirts.svg",
    buyerFit: ["Private label sellers", "Boutiques", "Wholesale summer collections"],
    materials: ["Cotton jersey", "Cotton spandex", "Mesh", "Pique", "Rib jersey"],
    techniques: ["Screen print", "DTF transfer", "Embroidery", "Woven labels", "Stone wash"],
    moq: "Flexible for basic jersey styles",
    sampleLeadTime: "5-10 days for common fabrics",
    bulkLeadTime: "18-35 days depending on decoration and quantity",
  },
  {
    slug: "nylon-sportswear",
    title: "Nylon Sportswear",
    eyebrow: "Windbreakers, sets, active casual",
    description:
      "Lightweight nylon and woven sportswear for active casual, outdoor-inspired, and streetwear buyers.",
    image: "/images/category-nylon.svg",
    buyerFit: ["Sportswear labels", "Streetwear collections", "Wholesalers"],
    materials: ["Nylon taslan", "Polyester pongee", "Ripstop", "Stretch woven", "Mesh lining"],
    techniques: ["Water-resistant finish", "Heat transfer", "Zipper trims", "Elastic drawcords", "Panel cutting"],
    moq: "Varies by woven fabric and trim requirements",
    sampleLeadTime: "10-18 days for custom woven styles",
    bulkLeadTime: "30-50 days after materials are approved",
  },
  {
    slug: "womens-loungewear",
    title: "Women's Loungewear",
    eyebrow: "Soft sets, lounge basics",
    description:
      "Soft, comfortable loungewear development for boutiques, online sellers, and private label programs.",
    image: "/images/category-loungewear.svg",
    buyerFit: ["Boutiques", "Private label brands", "Online fashion sellers"],
    materials: ["Rib knit", "Viscose blends", "Cotton modal", "Brushed jersey", "Soft acrylic blends"],
    techniques: ["Rib texture", "Picot edge", "Embroidery", "Custom labels", "Garment wash"],
    moq: "Flexible depending on fabric and color count",
    sampleLeadTime: "7-14 days after fabric direction is selected",
    bulkLeadTime: "25-45 days after final sample approval",
  },
  {
    slug: "streetwear-collections",
    title: "Streetwear Collections",
    eyebrow: "Capsule ranges, private label drops",
    description:
      "Multi-category streetwear development for brands that need cohesive seasonal or limited-release collections.",
    image: "/images/category-streetwear.svg",
    buyerFit: ["Streetwear startups", "Creator brands", "Wholesale capsule buyers"],
    materials: ["Fleece", "Jersey", "Nylon", "Knit blends", "Woven twill"],
    techniques: ["Puff print", "Embroidery", "Jacquard", "Applique", "Garment dye effect"],
    moq: "Planned by category, color, and decoration method",
    sampleLeadTime: "10-20 days depending on number of styles",
    bulkLeadTime: "30-55 days depending on assortment complexity",
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
