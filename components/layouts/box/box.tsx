import React from 'react'
import tokens from 'token.config.json'
export type BoxProps = {
  width?: keyof typeof tokens.size | undefined
  flexGrow?: string | undefined
  padding?: keyof typeof tokens.space | undefined
  minInlineSize?: keyof typeof tokens.size | undefined
}

type AsProp<C extends React.ElementType> = {
  as?: C
}

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P)

type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>

export const Box = <C extends React.ElementType>({
  width,
  flexGrow,
  padding,
  gap,
  minInlineSize,
  children,
  as,
  ...restProps
}: PolymorphicComponentProp<C, BoxProps>) => {
  const Component = as || 'span'

  const sheet: React.CSSProperties = {
    width: width ? `var(--size-${width})` : undefined,
    gap: gap ? `var(--size-${gap})` : undefined,
    flexGrow: flexGrow ? flexGrow : undefined,
    padding: padding ? `var(--space-${padding})` : undefined,
    minInlineSize: minInlineSize ? `var(--size-${minInlineSize})` : undefined,
  }

  return (
    <Component style={sheet} {...restProps}>
      {children}
    </Component>
  )
}

export type UseBoxProps = typeof Box
