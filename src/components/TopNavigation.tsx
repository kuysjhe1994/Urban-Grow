import { Home, Camera, BookOpen, BarChart3, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TopNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TopNavigation = ({ activeTab, onTabChange }: TopNavigationProps) => {
  const tabs = [
    { id: "home", icon: Home, label: "Home" },
    { id: "scanner", icon: Camera, label: "AR Scan" },
    { id: "library", icon: BookOpen, label: "Plants" },
    { id: "monitoring", icon: BarChart3, label: "Monitor" },
    { id: "profile", icon: User, label: "Profile" }
  ];

  return (
    <div className="hidden md:block sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border/50">
      <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
            <span className="text-lg">🌿</span>
          </div>
          <span className="font-semibold text-foreground">UrbanBloom AR</span>
        </div>

        <nav className="flex items-center gap-2">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "hero" : "ghost"}
              size="sm"
              onClick={() => onTabChange(tab.id)}
              className={
                activeTab === tab.id
                  ? "shadow-ar-glow"
                  : "hover:bg-primary/10"
              }
            >
              <tab.icon className="h-4 w-4 mr-2" />
              {tab.label}
            </Button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default TopNavigation;

