import React from "react";
import clsx from "clsx";
import { Box } from "components/layouts/box";
import styles from "./vstack.module.css";
import tokens from "token.config.json";

interface VStackProps<T> {
  children: (item: T) => React.ReactNode;
  items: T[];
  as?: "ol" | "ul";
  space?: keyof typeof tokens.space;
  className?: string;
  separator?: boolean;
}

interface IdObj {
  id: string | number;
}

export const VStack = <T extends IdObj>({
  items,
  children,
  space = "xs",
  as = "ul",
  className,
  separator = false,
  ...restProps
}: VStackProps<T>) => {
  const VSpace = `var(--space-${space})`;
  return (
    <Box
      style={{ gap: VSpace }}
      className={clsx(styles.root, className)}
      as={as}
      {...restProps}
    >
      {items.map((item) => {
        return (
          <Box key={item.id} as="li">
            {children(item)}
          </Box>
        );
      })}
    </Box>
  );
};
