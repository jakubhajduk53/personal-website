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
