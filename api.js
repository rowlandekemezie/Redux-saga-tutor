export const gitHubApi = (username) => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(response => {
      return response.json()
        .then(json => {
          return {
            username: json.username,
            avatar: json.avatar_url,
            profile: json.profile
          }
        });
    })
    .catch(error => {
      throw error;
    })
};

