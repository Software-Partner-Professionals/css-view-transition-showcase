
import { TransitionType } from "@/types";
import TransitionDemo from "@/components/TransitionDemo";

const Transitions = () => {
  const transitionTypes: { type: TransitionType; title: string; description: string }[] = [
    {
      type: "fade",
      title: "Fade Transition",
      description: "A simple opacity transition that fades elements in and out."
    },
    {
      type: "slide",
      title: "Slide Transition",
      description: "Elements slide in from the side while transitioning."
    },
    {
      type: "expand",
      title: "Expand/Scale Transition",
      description: "Elements grow or shrink during the transition."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Transition Demos</h1>
        <p className="text-muted-foreground mb-8">
          Explore different types of view transitions and see how they work.
          Click the color buttons to trigger transitions.
        </p>
        
        <div className="grid gap-8">
          {transitionTypes.map((transition) => (
            <TransitionDemo
              key={transition.type}
              type={transition.type}
              title={transition.title}
              description={transition.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transitions;
