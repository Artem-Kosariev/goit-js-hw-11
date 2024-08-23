export function fetchData(tags) {
  const searchParams = new URLSearchParams({
    key: '45426984-94cd792edc1ba8c0f2dda7afb',
    q: `${tags.trim()}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 200,
  });

  return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
