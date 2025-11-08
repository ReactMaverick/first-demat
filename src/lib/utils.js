import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function textToURL(text) {
  return text.toLowerCase().replace(/ /g, "-");
}

export function capitalizeEachFirstLetterURL(URLPath) {
  return URLPath
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
