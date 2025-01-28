export const getPlaceholderImage = (
  text,
  color = "8685ef",
  textColor = "ffffff",
  width = 1200,
  height = 600
) => {
  return `https://placehold.co/${width}x${height}/${color}/${textColor}?text=${encodeURIComponent(
    text
  )}`;
};

export const getProjectImages = (projectId) => {
  const colors = {
    "cursor-portfolio": "8685ef",
    "ai-saas": "60a5fa",
    "blockchain-explorer": "10b981",
    "ml-platform": "f59e0b",
    "smart-home": "ec4899",
    "realtime-collab": "8b5cf6",
  };

  return {
    main: getPlaceholderImage(projectId, colors[projectId]),
    gallery: Array(4)
      .fill(null)
      .map((_, i) =>
        getPlaceholderImage(
          `${projectId}-${i + 1}`,
          colors[projectId],
          "ffffff",
          600,
          400
        )
      ),
  };
};
