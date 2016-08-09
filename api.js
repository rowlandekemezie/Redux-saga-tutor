export const gitHubApi = (username) => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(response => {
      return response.json()
        .then(({ login, avatar_url, url }) => ({ login, avatar_url, html_url }));
    })
    .catch(error => {
      throw error;
    })
};

