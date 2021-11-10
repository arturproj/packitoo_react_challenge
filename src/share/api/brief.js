const { REACT_APP_API_URL } = process.env;

export const getServerBriefs = () =>
  fetch(`${REACT_APP_API_URL}/briefs`).then((res) => res.json());

export const getServerProducts = () =>
  fetch(`${REACT_APP_API_URL}/products`).then((res) => res.json());
