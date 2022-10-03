import React from "react";

type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

export const Box = <C extends React.ElementType>({
  children,
  as,
  ...restProps
}: PolymorphicComponentProp<C>) => {
  const Component = as || "span";

  return <Component {...restProps}>{children}</Component>;
};

export type UseBoxProps = typeof Box;
