export type Post = {
  id: number;
  title: string;
  subtitle?: string;
  category: string;
  client?: string;
  date?: string;
  location?: string;
  services?: string;
  heroImage: string;
  images?: string[];
  excerpt?: string;
  content?: string;
};

const posts: Post[] = [
  {
    id: 1,
    title: "Intimate Vows",
    subtitle: "Sarah & James",
    category: "Wedding Photography",
    client: "Sarah & James",
    date: "November 14, 2023",
    location: "Jakarta, Indonesia",
    services: "Photography, Art Direction",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtk0wGbbjfAOGWZnzUxuPGqfBwo3M7Ev2bZx6AayTNoDYQgrFEYNrQEXP74pvzJxAv4tEYF7PzkfdpsK20b5z8YeXMjPxtkilXNrqBqntQbP9ib60TceUj2EhBu55m318jwNgq0kV-ofAgWKwApSug47Q92sAUCCVWknekYDooFx3U-U0RBp69ZqxGFgo6JZ3PSpAmKEUIhXt0bMOEM3_5KZspWlLhfolly3LhWG-Eig2oyQzf-v6jRCay2i1-bMD7jdoDfZkcVC0",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtk0wGbbjfAOGWZnzUxuPGqfBwo3M7Ev2bZx6AayTNoDYQgrFEYNrQEXP74pvzJxAv4tEYF7PzkfdpsK20b5z8YeXMjPxtkilXNrqBqntQbP9ib60TceUj2EhBu55m318jwNgq0kV-ofAgWKwApSug47Q92sAUCCVWknekYDooFx3U-U0RBp69ZqxGFgo6JZ3PSpAmKEUIhXt0bMOEM3_5KZspWlLhfolly3LhWG-Eig2oyQzf-v6jRCay2i1-bMD7jdoDfZkcVC0",
    ],
    excerpt: "A minimalist documentary-style wedding captured with natural light.",
    content: "For Sarah and James, the focus was entirely on authenticity. They wanted a documentation style that felt less like a production and more like a memory unfolding in real-time.",
  },
  {
    id: 2,
    title: "Balinese Ceremony",
    category: "Religious Documentation",
    client: "Private",
    date: "August 9, 2023",
    location: "Bali, Indonesia",
    services: "Photography",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCINcFoh412PyqaBa9ygkfrVO8NI56thVzFLMabsPLSd-CsfrJECG_sG-pBxIQrLWur2Rx1aElVsWiY0cMYWzF9VLIlpZv1WVDPV-36YX8oukuBJ5P3Aji9_ukZbcqD_yr7glQbgAvKhdEAZDp8s3jHN02qqJvh_ALl5UuZINk3arfQ1U74J_Tg-9tGIHu4Cc-CDHQtM0X4OO9MLwkXadVadxSbplmoagduMBJ_NdCQzRMqwHYEGVKthAbixbvjTktmVz9n_k3oJiA",
    images: [],
    excerpt: "Ceremonial documentation with cultural sensitivity and clarity.",
    content: "Balinese ceremony captured with respect for tradition and minimal intervention.",
  },
  {
    id: 3,
    title: "Annual Gala Night",
    category: "Corporate Event",
    client: "Company X",
    date: "May 22, 2023",
    location: "Jakarta Convention Center",
    services: "Event Photography",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDv8R20lApZ6N-8qgtyGjoeLnF4GeJAtkhnU_O76ZLthxUjOSPlxJ91Jk-CkCt0ahUjRHkCRxWziDLDuOnxvfqOTn83yuwphuMHsQwWMqua2KaUmHkm-hxJy2btXl8GsClMTux62G9_ywEeLkKZaCglLJaWpbw4RO8OSJ_OYI66EIAVYf-8OUXHPeOfVeIvwpDfvtIfusQEwLwdC3Fk6TjJRy1sJQCB1jpEzO0EEBcqxaAUydojyM05b0jznMpupF7waHnApIkZJo8",
    images: [],
    excerpt: "Corporate gala coverage with editorial sensibility.",
    content: "Event coverage focusing on atmosphere, speaker moments, and candid interactions.",
  },
];

export default posts;
