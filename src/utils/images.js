export const getImgPath = (path) => {
  const basePath = process.env.BASE_URL || "";

  if (!basePath) {
    return path;
  }

  if (path.startsWith(basePath)) {
    return path;
  }

  return `${basePath}${path}`;
};
