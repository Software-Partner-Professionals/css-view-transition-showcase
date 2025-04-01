export interface Photo {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  color: string;
  viewTransitionName: string;
}

export type TransitionType = "fade" | "slide" | "expand" | "none";
