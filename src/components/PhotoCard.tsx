import { Photo } from "@/types";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface PhotoCardProps {
  photo: Photo;
  index?: number;
  layout?: "grid" | "featured" | "horizontal";
  className?: string;
}

const PhotoCard = ({
  photo,
  index = 0,
  layout = "grid",
  className,
}: PhotoCardProps) => {
  const viewTransitionStyle = {
    viewTransitionName: photo.viewTransitionName,
  };

  const cardStyles = {
    grid: "flex flex-col aspect-square  h-80 ",
    featured: "flex flex-col col-span-2 row-span-2 aspect-square",
    horizontal: "flex flex-row h-40 overflow-hidden",
  };

  const imageStyles = {
    grid: "w-full h-1/2 object-cover rounded-t-lg",
    featured: "w-full h-3/4 object-cover rounded-t-lg",
    horizontal: "w-1/3 object-cover rounded-l-lg",
  };

  const contentStyles = {
    grid: "p-3 flex flex-col flex-grow",
    featured: "p-4 flex flex-col flex-grow",
    horizontal: "p-4 w-2/3 flex flex-col justify-center",
  };

  return (
    <Link to={`/photo/${photo.id}`} viewTransition>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
        className={cn(
          "bg-card rounded-lg shadow-md hover:shadow-lg cursor-pointer overflow-hidden border transition-all duration-300",
          "hover:-translate-y-1",
          cardStyles[layout],
          className
        )}
        style={{
          backgroundImage: `linear-gradient(to bottom right, ${photo.color}22, transparent)`,
        }}
      >
        <img
          src={photo.url}
          alt={photo.title}
          className={imageStyles[layout]}
          style={viewTransitionStyle}
        />

        <div className={contentStyles[layout]}>
          <h3 className="font-semibold text-lg line-clamp-1">{photo.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
            {photo.description}
          </p>
          <div
            className="mt-auto p-2 rounded-full self-start text-xs"
            style={{
              backgroundColor: `${photo.color}22`,
              color: photo.color,
            }}
          >
            {photo.category}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default PhotoCard;
