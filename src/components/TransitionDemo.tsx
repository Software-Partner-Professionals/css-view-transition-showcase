import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { withViewTransition } from "@/utils/viewTransition";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TransitionType } from "@/types";

const colors = [
  "bg-blue-500",
  "bg-green-500",
  "bg-red-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
];

interface TransitionDemoProps {
  type: TransitionType;
  title: string;
  description: string;
}

const TransitionDemo = ({ type, title, description }: TransitionDemoProps) => {
  const [activeColor, setActiveColor] = useState(0);
  const [activeTab, setActiveTab] = useState("preview");

  const handleColorChange = async (index: number) => {
    await withViewTransition(() => {
      setActiveColor(index);
    });
  };

  const handleTabChange = async (value: string) => {
    await withViewTransition(() => {
      setActiveTab(value);
    });
  };

  const boxTransitionName = `box-transition-${type}`;

  const content = useMemo(
    () => (
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardHeader>

        <Tabs value={activeTab} onValueChange={handleTabChange}>
          <div className="px-6">
            <TabsList className="w-full grid grid-cols-2">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="css">CSS</TabsTrigger>
            </TabsList>
          </div>

          <CardContent className="p-6 pt-2">
            <TabsContent value="preview" className="mt-4 space-y-4">
              <div className="flex flex-wrap gap-2 mb-6">
                {colors.map((color, index) => (
                  <Button
                    key={color}
                    variant={activeColor === index ? "default" : "outline"}
                    className={`w-10 h-10 p-0 ${
                      activeColor === index ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() => handleColorChange(index)}
                  >
                    <div className={`${color} w-6 h-6 rounded-full`}></div>
                  </Button>
                ))}
              </div>

              <div className="h-64 bg-muted rounded-md flex items-center justify-center p-6">
                <div
                  className={`${colors[activeColor]} w-32 h-32 rounded-md shadow-lg`}
                  style={{ viewTransitionName: boxTransitionName }}
                />
              </div>
            </TabsContent>

            <TabsContent value="css" className="mt-4">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs md:text-sm">
                {`@keyframes ${type}-animation {
  from {
    opacity: ${type === "fade" ? "0" : "1"};
    ${type === "slide" ? "transform: translateX(-100px);" : ""}
    ${type === "expand" ? "transform: scale(0.7);" : ""}
  }
  to {
    opacity: 1;
    ${type === "slide" ? "transform: translateX(0);" : ""}
    ${type === "expand" ? "transform: scale(1);" : ""}
  }
}

::view-transition-${type}(${boxTransitionName}) {
  animation-duration: 0.5s;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  animation-fill-mode: both;
}

::view-transition-${type}-image(${boxTransitionName}) {
  animation-name: ${type}-animation;
}`}
              </pre>
            </TabsContent>
          </CardContent>
        </Tabs>
      </Card>
    ),
    [
      activeColor,
      activeTab,
      boxTransitionName,
      colors,
      description,
      title,
      type,
    ]
  );
  return content;
};

export default TransitionDemo;
