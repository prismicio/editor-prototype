import { ReactNode } from "react";
import clsx from "clsx";
import { Box } from "components/layouts/box";
import styles from "./icon-button.module.css";

interface IconButtonProps {
  children?: ReactNode;
  className?: string;
}

export const IconButton = ({
  children,
  className,
  ...restProps
}: IconButtonProps) => {
  return (
    <Box className={clsx(styles.root, className)} {...restProps} as="div">
      {children}
    </Box>
  );
};
