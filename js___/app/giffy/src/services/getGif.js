const apyKey = '6sZ6gJw0AxhGyO8Ui0CD0V2AjV1Zsqt1&q';

function getGif({ keyword = 'cat' } = {}) {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apyKey}=${keyword}&limit=10&offset=0&rating=G&lang=en`;

  return fetch(url)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;

      const gifs = data.map((gif) => {
        const {
          images: {
            downsized_medium: { url },
          },
          id,
          title,
        } = gif;

        return {
          url,
          title,
          id,
        };
      });

      return gifs;
    });
}

export default getGif;
