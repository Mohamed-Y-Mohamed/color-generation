import { Badge } from "../components/ui/badge";
import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
import { getContrastRatio } from "../lib/colorUtils";

interface WCAGComplianceIndicatorProps {
  foreground: string;
  background: string;
  level?: "AA" | "AAA";
  size?: "sm" | "md" | "lg";
}

export function WCAGComplianceIndicator({
  foreground,
  background,
  level = "AA",
  size = "sm",
}: WCAGComplianceIndicatorProps) {
  const contrastRatio = getContrastRatio(foreground, background);
  const requiredRatio = level === "AA" ? 4.5 : 7;
  const isCompliant = contrastRatio >= requiredRatio;
  const isPartiallyCompliant = contrastRatio >= 3.0;

  const getIcon = () => {
    if (isCompliant) {
      return <CheckCircle2 className="w-3 h-3" />;
    } else if (isPartiallyCompliant) {
      return <AlertTriangle className="w-3 h-3" />;
    } else {
      return <XCircle className="w-3 h-3" />;
    }
  };

  const getVariant = () => {
    if (isCompliant) return "default" as const;
    if (isPartiallyCompliant) return "secondary" as const;
    return "destructive" as const;
  };

  const getLabel = () => {
    if (isCompliant) return `WCAG ${level}`;
    if (isPartiallyCompliant) return "Partial";
    return "Poor";
  };

  const getColor = () => {
    if (isCompliant) return "text-green-600 dark:text-green-400";
    if (isPartiallyCompliant) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  };

  if (size === "lg") {
    return (
      <div className="flex items-center space-x-2 text-sm">
        <div className={`flex items-center ${getColor()}`}>{getIcon()}</div>
        <span className="font-medium">{getLabel()}</span>
        <span className="text-muted-foreground">
          {contrastRatio.toFixed(1)}:1
        </span>
      </div>
    );
  }

  return (
    <Badge
      variant={getVariant()}
      className="text-xs flex items-center space-x-1"
    >
      {getIcon()}
      <span>{getLabel()}</span>
    </Badge>
  );
}

export function ContrastMeter({
  foreground,
  background,
}: {
  foreground: string;
  background: string;
}) {
  const contrastRatio = getContrastRatio(foreground, background);
  const percentage = Math.min((contrastRatio / 21) * 100, 100); // Max contrast is 21:1

  const getBarColor = () => {
    if (contrastRatio >= 7) return "bg-green-500";
    if (contrastRatio >= 4.5) return "bg-yellow-500";
    if (contrastRatio >= 3) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Contrast Ratio</span>
        <span>{contrastRatio.toFixed(2)}:1</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-300 ${getBarColor()}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex justify-between text-xs">
        <span
          className={
            contrastRatio >= 4.5
              ? "text-green-600 dark:text-green-400"
              : "text-muted-foreground"
          }
        >
          AA (4.5:1)
        </span>
        <span
          className={
            contrastRatio >= 7
              ? "text-green-600 dark:text-green-400"
              : "text-muted-foreground"
          }
        >
          AAA (7:1)
        </span>
      </div>
    </div>
  );
}
