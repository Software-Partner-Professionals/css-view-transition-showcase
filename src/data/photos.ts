import { Photo } from "@/types";
import { getViewTransitionName } from "@/utils/viewTransition";

export const photos: Photo[] = [
  {
    id: "photo1",
    title: "Ocean Sunset",
    description:
      "A beautiful sunset view over the calm ocean waters with vibrant orange and purple hues.",
    url: "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?q=80&w=1000",
    category: "nature",
    color: "#FF7B54",
    viewTransitionName: getViewTransitionName("photo1"),
  },
  {
    id: "photo2",
    title: "Mountain Peak",
    description:
      "Majestic snow-capped mountain peak rising above the clouds at dawn.",
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000",
    category: "nature",
    color: "#8ACDD7",
    viewTransitionName: getViewTransitionName("photo2"),
  },
  {
    id: "photo3",
    title: "Urban Cityscape",
    description:
      "A vibrant city skyline with skyscrapers illuminated at night.",
    url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1000",
    category: "urban",
    color: "#6C22A6",
    viewTransitionName: getViewTransitionName("photo3"),
  },
  {
    id: "photo4",
    title: "Desert Dunes",
    description:
      "Golden sand dunes stretching as far as the eye can see in the warm light of sunset.",
    url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1000",
    category: "nature",
    color: "#F6D186",
    viewTransitionName: getViewTransitionName("photo4"),
  },
  {
    id: "photo5",
    title: "Forest Path",
    description:
      "A serene path through a misty forest with sunlight filtering through the trees.",
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000",
    category: "nature",
    color: "#4E9F3D",
    viewTransitionName: getViewTransitionName("photo5"),
  },
  {
    id: "photo6",
    title: "Winter Landscape",
    description: "Snow-covered landscape with bare trees and a frozen lake.",
    url: "https://images.unsplash.com/photo-1491002052546-bf38f186af56?q=80&w=1000",
    category: "nature",
    color: "#BECEE5",
    viewTransitionName: getViewTransitionName("photo6"),
  },
  {
    id: "photo7",
    title: "Tropical Beach",
    description:
      "Pristine white sand beach with clear turquoise waters and palm trees.",
    url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1000",
    category: "nature",
    color: "#00CFC1",
    viewTransitionName: getViewTransitionName("photo7"),
  },
  {
    id: "photo8",
    title: "Abstract Art",
    description:
      "Vibrant abstract painting with bold colors and dynamic shapes.",
    url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1000",
    category: "art",
    color: "#FF579F",
    viewTransitionName: getViewTransitionName("photo8"),
  },
  {
    id: "photo9",
    title: "Night Sky",
    description:
      "Brilliant stars and the Milky Way galaxy visible in a clear night sky.",
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000",
    category: "nature",
    color: "#301E67",
    viewTransitionName: getViewTransitionName("photo9"),
  },
  {
    id: "photo10",
    title: "Urban Street",
    description: "Busy city street with colorful storefronts and pedestrians.",
    url: "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=1000",
    category: "urban",
    color: "#FD841F",
    viewTransitionName: getViewTransitionName("photo10"),
  },
  {
    id: "photo11",
    title: "Autumn Foliage",
    description: "Vibrant red and orange leaves of autumn trees in a park.",
    url: "https://images.unsplash.com/photo-1507783548227-544c3b8fc065?q=80&w=1000",
    category: "nature",
    color: "#E14D2A",
    viewTransitionName: getViewTransitionName("photo11"),
  },
];

export const getPhotoById = (id: string): Photo | undefined => {
  return photos.find((photo) => photo.id === id);
};

export const getPhotosByCategory = (category: string): Photo[] => {
  return photos.filter((photo) => photo.category === category);
};

export const getAllCategories = (): string[] => {
  const categories = new Set(photos.map((photo) => photo.category));
  return Array.from(categories);
};
