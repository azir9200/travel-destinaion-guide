"use client";
import React from "react";

import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Switch />;
  // if (!mounted) return null;

  return (
    <Switch
      isSelected={theme === "dark"}
      onValueChange={(e) => setTheme(e ? "dark" : "light")}
      size="lg" // Optional: Adjust the size of the switch
    />
  );
}
