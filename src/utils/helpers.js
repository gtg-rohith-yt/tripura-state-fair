// Utility helper functions for Tripura State Fair application

export const formatTitle = (title) => {
  if (!title) return "";
  return title.trim();
};

export const filterByKeyword = (items, keyword) => {
  if (!keyword) return items;
  const lower = keyword.toLowerCase();
  return items.filter(
    (item) =>
      item.title.toLowerCase().includes(lower) ||
      item.description.toLowerCase().includes(lower)
  );
};
