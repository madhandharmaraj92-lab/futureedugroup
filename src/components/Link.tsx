'use client';

import NextLink from 'next/link';
import type { ComponentProps } from 'react';

type LinkProps = Omit<ComponentProps<typeof NextLink>, 'href'> & {
  to: string;
};

export const Link = ({ to, ...props }: LinkProps) => <NextLink href={to} {...props} />;
