import { useNavigate, useLocation } from "react-router-dom";
import {
  withViewTransition,
  isViewTransitionSupported,
} from "@/utils/viewTransition";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export function useViewTransitionRouter() {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    const supported = isViewTransitionSupported();
    setIsSupported(supported);

    if (!supported) {
      console.log("View Transitions API not supported in this browser");
    }
  }, []);

  useEffect(() => {
    const hasShownNotification = localStorage.getItem(
      "view-transition-notification"
    );

    if (!hasShownNotification) {
      setTimeout(() => {
        toast({
          title: isSupported
            ? "View Transitions API Supported!"
            : "View Transitions API Not Supported",
          description: isSupported
            ? "Your browser supports the View Transitions API. Enjoy the smooth animations!"
            : "Your browser doesn't support the View Transitions API. Transitions will be instant.",
          duration: 5000,
        });
        localStorage.setItem("view-transition-notification", "true");
      }, 1000);
    }
  }, [isSupported, toast]);

  const navigateWithTransition = (to: string) => {
    withViewTransition(() => {
      navigate(to);
    });
  };

  return {
    navigateWithTransition,
    currentPath: location.pathname,
    isViewTransitionSupported: isSupported,
  };
}
