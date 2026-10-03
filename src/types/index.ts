import type { RouteLocationRaw } from "vue-router";

export interface HeaderPaths {
  id: number;
  to: RouteLocationRaw;
  label: string;
}

export interface IconLink {
  name: string;
  href: string;
  label: string;
}

export interface FooterIconItem {
  label: string;
  value: string;
  href?: string;
}

export interface Slide {
  id: number;
  src: string;
  caption: string;
  description: string;
}
