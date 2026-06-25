export type Product = {
  name: string;
  categorySlug: string;
  description: string;
};

export const products: Product[] = [
  {
    name: "Jacquard sweaters",
    categorySlug: "custom-knitwear",
    description: "Custom pattern knitwear with buyer-selected yarn, gauge, color, label, and fit details.",
  },
  {
    name: "Oversized fleece hoodies",
    categorySlug: "hoodies-sweatshirts",
    description: "Pullover or zip hoodie development with custom fabric weight, print, embroidery, and trims.",
  },
  {
    name: "Matching sweat sets",
    categorySlug: "tracksuits-sweat-sets",
    description: "Coordinated hoodie, crewneck, jogger, or short sets prepared for wholesale and private label buyers.",
  },
  {
    name: "Heavy cotton T-shirts",
    categorySlug: "t-shirts-shorts-sets",
    description: "Boxy, relaxed, or regular-fit jersey styles with buyer-approved print placement and wash effect.",
  },
  {
    name: "Nylon windbreaker sets",
    categorySlug: "nylon-sportswear",
    description: "Lightweight woven jackets, pants, and shorts with paneling, zippers, linings, and functional trims.",
  },
  {
    name: "Ribbed lounge sets",
    categorySlug: "womens-loungewear",
    description: "Soft loungewear sets developed with custom handfeel, size grading, color, and private label packaging.",
  },
  {
    name: "Streetwear capsule ranges",
    categorySlug: "streetwear-collections",
    description: "Multi-style private label collections across fleece, jersey, knits, nylon, trims, and packaging.",
  },
];
