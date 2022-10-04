import React from 'react'
import styles from './by-side.module.css'
import { Box } from 'components/layouts/box'
import tokens from 'token.config.json'
import clsx from 'clsx'

interface BysideProps {
  children: React.ReactNode
  space?: keyof typeof tokens.space | undefined
  as?: React.ElementType | undefined
  className?: string
}

export const Byside = ({
  as,
  space = 'lg',
  children,
  className,
  ...restProps
}: BysideProps) => {
  return (
    <Box
      as={as}
      gap={space}
      className={clsx(styles.root, className)}
      {...restProps}
    >
      {children}
    </Box>
  )
}

interface SidebarProps {
  width?: keyof typeof tokens.size | undefined
  children: React.ReactNode
  as?: React.ElementType | undefined
  className?: string
}

const Sidebar = ({
  width,
  as,
  className,
  children,
  ...restProps
}: SidebarProps) => {
  return (
    <Box
      as={as}
      width={width}
      flexGrow="1"
      className={className}
      {...restProps}
    >
      {children}
    </Box>
  )
}

interface PrimaryProps {
  breakAT?: keyof typeof tokens.size | undefined
  children: React.ReactNode
  as?: React.ElementType | undefined
  className?: string
}

const Primary = ({
  children,
  as,
  breakAT,
  className,
  ...restProps
}: PrimaryProps) => {
  return (
    <Box
      as={as}
      width="nil"
      flexGrow="999"
      minInlineSize={breakAT}
      className={className}
      {...restProps}
    >
      {children}
    </Box>
  )
}

Byside.Sidebar = Sidebar
Byside.Primary = Primary

export type BysideAllProps = typeof Byside
