export interface Product {
  id: string;
  title: string;
  price: number;
  artisan: string;
  region: string;
  image: string;
  storyExcerpt: string;
  fullStory: string;
  photos: string[];
  videoThumbnail: string;
}

export interface Artisan {
  id: string;
  name: string;
  photo: string;
  region: string;
  bio: string;
  specialization: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  content: string;
  timestamp: Date;
  productSuggestions?: Product[];
}

export const products: Product[] = [
  {
    id: "1",
    title: "Handwoven Kanchipuram Saree",
    price: 2500,
    artisan: "Rani Devi",
    region: "Kanchipuram, Tamil Nadu",
    image: "/src/assets/saree-hero.jpg",
    storyExcerpt: "Woven with golden threads and passed-down techniques...",
    fullStory: "This exquisite Kanchipuram saree is handwoven using traditional techniques that have been passed down through generations in Rani Devi's family. Each thread is carefully selected from the finest silk sourced from local mulberry farms. The intricate golden zari work depicts ancient temple motifs, telling stories of divine femininity and cultural heritage. The weaving process takes over three weeks, with each day beginning at dawn as Rani sits at her wooden loom, her fingers dancing across the threads with practiced precision. The deep maroon base represents the earth's fertility, while the gold borders symbolize prosperity and auspiciousness. This saree isn't just clothing; it's a piece of living history, embodying the soul of Tamil craftsmanship.",
    photos: ["/api/placeholder/500/600", "/api/placeholder/500/600", "/api/placeholder/500/600"],
    videoThumbnail: "/api/placeholder/400/300"
  },
  {
    id: "2", 
    title: "Traditional Terracotta Pottery",
    price: 850,
    artisan: "Gopal Kumhar",
    region: "Lucknow, Uttar Pradesh",
    image: "/src/assets/pottery.jpg",
    storyExcerpt: "Shaped from sacred clay of the Ganges river valley...",
    fullStory: "Crafted from the sacred clay of the Ganges river valley, this terracotta pottery collection represents centuries of Kumhar tradition. Gopal shapes each piece on his grandfather's wheel, which has been spinning for over 70 years. The clay is aged for months to achieve perfect consistency, then fired in traditional kilns using mango wood for that distinctive earthy finish. Each pot tells a story of water collection, grain storage, and community gathering. The geometric patterns etched before firing are inspired by ancient Harappan designs, connecting modern use with our civilizational past.",
    photos: ["/api/placeholder/400/400", "/api/placeholder/400/400"],
    videoThumbnail: "/api/placeholder/400/300"
  },
  {
    id: "3",
    title: "Block-printed Cotton Scarf", 
    price: 450,
    artisan: "Maya Sharma",
    region: "Jaipur, Rajasthan",
    image: "/src/assets/scarf.jpg",
    storyExcerpt: "Hand-carved wooden blocks create timeless patterns...",
    fullStory: "This vibrant block-printed scarf showcases the centuries-old tradition of Rajasthani textile artistry. Maya carves each wooden block by hand, creating intricate patterns inspired by desert flowers and royal Mughal gardens. The cotton fabric is sourced from organic farms and dyed using natural indigo and turmeric. The printing process requires perfect alignment and timing - each color needs to dry completely before the next layer. The floral motifs represent prosperity and growth, while the geometric borders tell stories of architectural marvels from Jaipur's palaces.",
    photos: ["/api/placeholder/400/300", "/api/placeholder/400/300"],
    videoThumbnail: "/api/placeholder/400/300"
  }
];

export const artisans: Artisan[] = [
  {
    id: "1",
    name: "Rani Devi",
    photo: "/api/placeholder/150/150",
    region: "Kanchipuram, Tamil Nadu", 
    bio: "Master weaver with 25 years of experience in traditional silk sarees",
    specialization: "Silk Weaving"
  },
  {
    id: "2", 
    name: "Gopal Kumhar",
    photo: "/api/placeholder/150/150",
    region: "Lucknow, Uttar Pradesh",
    bio: "Third-generation potter keeping alive the ancient art of terracotta",
    specialization: "Pottery"
  },
  {
    id: "3",
    name: "Maya Sharma", 
    photo: "/api/placeholder/150/150",
    region: "Jaipur, Rajasthan",
    bio: "Award-winning block printing artist reviving traditional motifs",
    specialization: "Block Printing"
  }
];

export const chatHistory: ChatMessage[] = [
  {
    id: "1",
    sender: "user",
    content: "Show me pottery from Uttar Pradesh",
    timestamp: new Date(),
  },
  {
    id: "2", 
    sender: "bot",
    content: "Here are some beautiful pottery pieces from Uttar Pradesh artisans:",
    timestamp: new Date(),
    productSuggestions: [products[1]]
  },
  {
    id: "3",
    sender: "user", 
    content: "Tell me more about the artisan",
    timestamp: new Date(),
  },
  {
    id: "4",
    sender: "bot",
    content: "Gopal Kumhar is a third-generation potter from Lucknow. His family has been working with clay for over 70 years, creating functional pottery that connects communities with their cultural heritage.",
    timestamp: new Date(),
  }
];