import { cn } from "@/lib/utils";
import React from "react";

export const Container = ({
  children,
  classname,
}: {
  children: React.ReactNode;
  classname?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-4xl bg-white p-4 md:p-10 dark:bg-black",
        classname,
      )}
    >
      {children}
    </div>
  );
};
