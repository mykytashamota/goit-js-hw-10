import axios from 'axios';
const BASE_URL = 'https://api.thecatapi.com/v1/images/search';

axios.defaults.headers.common['x-api-key'] =
  'live_965YT8hhDAahWCR2rNyyFgYdrvkQ2FUiQBdWpb4qRryiyp2soz0M7eXcq5HGVfbh';

export function fetchBreeds() {
  return axios.get('https://api.thecatapi.com/v1/breeds');
}

export function fetchCatByBreed(breedId) {
  return axios.get(`${BASE_URL}?breed_ids=${breedId}`).then(response => {
    return response.data;
  });
}
