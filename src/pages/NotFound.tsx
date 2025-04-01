
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useViewTransitionRouter } from "@/hooks/useViewTransitionRouter";

const NotFound = () => {
  const location = useLocation();
  const { navigateWithTransition } = useViewTransitionRouter();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-muted to-background p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">404</h1>
        <p className="text-xl text-muted-foreground mb-6">The page you're looking for doesn't exist or has been moved.</p>
        <Button
          size="lg"
          onClick={() => navigateWithTransition("/")}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
