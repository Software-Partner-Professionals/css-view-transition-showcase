import { useParams, useNavigate } from "react-router-dom";
import { getPhotoById, photos } from "@/data/photos";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useViewTransitionRouter } from "@/hooks/useViewTransitionRouter";
import { Separator } from "@/components/ui/separator";
import { useEffect } from "react";

const PhotoDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { navigateWithTransition } = useViewTransitionRouter();

  const photo = getPhotoById(id || "");

  useEffect(() => {
    if (!photo) {
      navigate("/gallery");
    }
  }, [photo, navigate]);

  if (!photo) return null;

  const currentIndex = photos.findIndex((p) => p.id === photo.id);
  const prevPhoto = photos[currentIndex - 1];
  const nextPhoto = photos[currentIndex + 1];

  return (
    <div className="container mx-auto px-4 pt-24 pb-16 max-w-5xl">
      <div className="mb-4">
        <Button
          variant="ghost"
          onClick={() => navigateWithTransition("/gallery")}
          className="mb-4"
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Gallery
        </Button>

        <h1 className="text-3xl font-bold">{photo.title}</h1>
        <p className="text-muted-foreground">{photo.category}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div
            className="rounded-lg overflow-hidden shadow-lg border"
            style={{
              backgroundImage: `linear-gradient(to bottom right, ${photo.color}22, transparent)`,
            }}
          >
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-auto object-cover"
              style={{ viewTransitionName: photo.viewTransitionName }}
            />
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="bg-card p-6 rounded-lg border h-full">
            <h3 className="text-xl font-semibold mb-2">About this photo</h3>
            <p className="mb-6">{photo.description}</p>

            <Separator className="my-6" />

            <div className="flex justify-between">
              {prevPhoto ? (
                <Button
                  variant="outline"
                  onClick={() =>
                    navigateWithTransition(`/photo/${prevPhoto.id}`)
                  }
                >
                  <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
              ) : (
                <div></div>
              )}

              {nextPhoto && (
                <Button
                  variant="outline"
                  onClick={() =>
                    navigateWithTransition(`/photo/${nextPhoto.id}`)
                  }
                >
                  Next <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetail;
