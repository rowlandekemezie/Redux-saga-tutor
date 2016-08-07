export const gitHubApi = (username) => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(response => {
      return response.json()
        .then(({login, avatar_url, url}) => {
          console.log(login, avatar_url, url, 'terse')
          return {
            username: login,
            avatar: avatar_url,
            profile: url
          }
        });
    })
    .catch(error => {
      throw error;
    })
};

