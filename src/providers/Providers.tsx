"use client";

import { ThemeProvider } from "./ThemeProvider";
import { LenisProvider } from "./LenisProvider";
import { PageLoader } from "./PageLoader";
import { ScrollProgress } from "./ScrollProgress";
import { CustomCursor } from "./CustomCursor";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LenisProvider>
        <PageLoader />
        <ScrollProgress />
        <CustomCursor />
        {children}
      </LenisProvider>
    </ThemeProvider>
  );
}
