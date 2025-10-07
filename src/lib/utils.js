import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const isVideo = (path) => {
  return path.endsWith('.mp4') || path.endsWith('.mov') || path.endsWith('.webm');
};