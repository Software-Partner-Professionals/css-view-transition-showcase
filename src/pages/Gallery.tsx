import { useMemo, useState } from "react";
import PhotoCard from "@/components/PhotoCard";
import { photos, getAllCategories } from "@/data/photos";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ["all", ...getAllCategories()];

  const filteredPhotos = useMemo(
    () =>
      selectedCategory && selectedCategory !== "all"
        ? photos.filter((photo) => photo.category === selectedCategory)
        : photos,
    [selectedCategory, photos]
  );

  const handleCategoryChange = (category: string) => {
    const newCategory = category === "all" ? null : category;
    document.startViewTransition?.(() => {
      setSelectedCategory(newCategory);
    });
  };

  if (filteredPhotos.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Photo Gallery</h1>
        <p className="text-muted-foreground mb-6">
          Browse through our collection of beautiful photographs. Click on any
          image to view details.
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <Button
              key={category}
              variant={
                selectedCategory === category ||
                (!selectedCategory && category === "all")
                  ? "default"
                  : "outline"
              }
              className="capitalize"
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {filteredPhotos.map((photo, index) => (
          <PhotoCard key={photo.id} photo={photo} index={index} />
        ))}

        {filteredPhotos.length === 0 && (
          <div className="col-span-full p-8 text-center">
            <p className="text-xl text-muted-foreground">
              No photos found in this category.
            </p>
            <Button
              variant="link"
              onClick={() => handleCategoryChange("all")}
              className="mt-2"
            >
              Show all photos
            </Button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Gallery;
