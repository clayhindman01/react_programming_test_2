export default (state, action) => {
  switch (action.type) {
    case "FETCH_TRENDING_REPOS":
      const url = `https://my-github-trending.herokuapp.com/repo?lang=${state.language}&since=${state.range}`;
      const response = fetch(url);
      const json = response.json();
      const mapItemToRepo = (item) => ({
        name: item.repo,
        url: item.repo_link,
        description: item.desc,
        language: item.lang,
        stars: item.stars,
        forks: item.forks
      });
      return json.items.map(mapItemToRepo);
    default:
      return state;
  }
}