import React, { Fragment } from "react";
import { Box } from "components/layouts/box";

interface VStackProps<T> {
  children: (item: T) => React.ReactNode;
  items: T[];
  as?: "ol" | "ul";
  className?: string;
  separator?: boolean;
}

interface IdObj {
  id: string | number;
}

export const VStack = <T extends IdObj>({
  items,
  children,
  as = "ul",
  className,
  separator = false,
  ...restProps
}: VStackProps<T>) => {
  return (
    <Box className={className} as={as} {...restProps}>
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
