import { flushSync } from "react-dom";

interface ViewTransition {
  ready: Promise<void>;
  finished: Promise<void>;
  skipTransition: () => void;
  updateCallbackDone: Promise<void>;
}

declare global {
  interface Document {
    startViewTransition?: (
      callback: () => Promise<void> | void
    ) => ViewTransition;
  }
}

export const withViewTransition = async (
  callback: () => Promise<void> | void,
  fallbackCallback?: () => void
): Promise<void> => {
  if (document.startViewTransition) {
    try {
      const transition = document.startViewTransition(
        async () => await flushSync(callback)
      );
      await transition.finished;
    } catch (error) {
      console.error("View transition failed:", error);
      if (fallbackCallback) fallbackCallback();
    }
  } else {
    console.log("View Transitions API not supported in this browser");
    await callback();
    if (fallbackCallback) fallbackCallback();
  }
};

export const isViewTransitionSupported = (): boolean => {
  return !!document.startViewTransition;
};

export const getViewTransitionName = (id: string): string => {
  return `photo-${id}`;
};
