import { useViewTransitionRouter } from "@/hooks/useViewTransitionRouter";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { navigateWithTransition, currentPath, isViewTransitionSupported } =
    useViewTransitionRouter();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/gallery", label: "Gallery" },
    { path: "/transitions", label: "Transitions" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div
          className="text-xl font-bold flex items-center cursor-pointer"
          onClick={() => navigateWithTransition("/")}
        >
          <span className="text-primary">View</span>
          <span className="text-purple-500 ml-1">Transitions</span>
          {isViewTransitionSupported && (
            <span className="ml-2 text-xs bg-green-500 text-white rounded-full px-2 py-0.5">
              Supported
            </span>
          )}
        </div>

        <div className="flex gap-1 md:gap-2">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigateWithTransition(item.path)}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                currentPath === item.path
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
