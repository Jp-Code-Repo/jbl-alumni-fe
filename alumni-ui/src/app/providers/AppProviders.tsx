import type { ReactNode } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";

interface AppProvidersProps {
  children: ReactNode;
}

export default function AppProviders({
  children,
}: AppProvidersProps) {
  return <TooltipProvider>{children}</TooltipProvider>;
}