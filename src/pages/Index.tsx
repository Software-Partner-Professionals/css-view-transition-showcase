import PhotoCard from "@/components/PhotoCard";
import { photos } from "@/data/photos";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useViewTransitionRouter } from "@/hooks/useViewTransitionRouter";

const Index = () => {
  const { navigateWithTransition, isViewTransitionSupported } =
    useViewTransitionRouter();

  const featuredPhotos = photos.slice(0, 3);

  return (
    <div className="container mx-auto px-4 pb-16 pt-24">
      <div className="py-16 md:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
            View Transitions API
          </h1>
          <p className="text-xl mb-8 text-muted-foreground">
            A showcase of seamless, animated transitions between UI states and
            pages using the modern View Transitions API in React.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigateWithTransition("/gallery")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Explore Gallery
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigateWithTransition("/transitions")}
            >
              View Transitions Demo
            </Button>
          </div>

          {!isViewTransitionSupported && (
            <div className="mt-6 p-4 bg-yellow-100 text-yellow-800 rounded-md">
              <p className="text-sm">
                Your browser doesn't support the View Transitions API. For the
                best experience, try Chrome 111+ or Edge 111+.
              </p>
            </div>
          )}
        </motion.div>
      </div>

      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Featured Photos</h2>
          <Button
            variant="ghost"
            onClick={() => navigateWithTransition("/gallery")}
          >
            View All
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredPhotos.map((photo, index) => (
            <PhotoCard key={photo.id} photo={photo} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
