import { Button } from "./ui/button";
import {
  Palette,
  Moon,
  Sun,
  Download,
  Trash2,
  BookOpen,
  Home,
  Info,
} from "lucide-react";
import { useLocation } from "wouter";
import { useTheme } from "./ThemeProvider";

interface NavbarProps {
  showThemeActions?: boolean;
  themesCount?: number;
  onExport?: () => void;
  onClear?: () => void;
  isExporting?: boolean;
  isClearing?: boolean;
}

export function Navbar({
  showThemeActions = false,
  themesCount = 0,
  onExport,
  onClear,
  isExporting = false,
  isClearing = false,
}: NavbarProps) {
  const [location, setLocation] = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="bg-card shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-lg flex items-center justify-center">
              <Palette className="w-4 h-4 text-white" />
            </div>
            <h1 className="text-xl font-bold">Smart Color Theme Generator</h1>
            <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 rounded-full">
              Frontend-Only
            </span>
          </div>

          <div className="flex items-center space-x-4">
            {/* Theme actions - only show on home page */}
            {showThemeActions && themesCount > 0 && (
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onExport}
                  disabled={isExporting}
                  className="text-xs"
                >
                  <Download className="w-3 h-3 mr-1" />
                  Export
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onClear}
                  disabled={isClearing}
                  className="text-xs text-red-600 hover:text-red-700"
                >
                  <Trash2 className="w-3 h-3 mr-1" />
                  Clear
                </Button>
              </div>
            )}

            {/* Navigation Links */}
            <nav className="flex items-center space-x-2">
              <Button
                variant={isActive("/") ? "default" : "ghost"}
                size="sm"
                onClick={() => setLocation("/")}
                className={isActive("/") ? "font-semibold" : ""}
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>

              <Button
                variant={isActive("/blog") ? "default" : "ghost"}
                size="sm"
                onClick={() => setLocation("/blog")}
                className={isActive("/blog") ? "font-semibold" : ""}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Blog
              </Button>

              <Button
                variant={isActive("/about") ? "default" : "ghost"}
                size="sm"
                onClick={() => setLocation("/about")}
                className={isActive("/about") ? "font-semibold" : ""}
              >
                <Info className="w-4 h-4 mr-2" />
                About
              </Button>
            </nav>

            {/* Theme toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className="p-2"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
