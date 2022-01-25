import react, { createContext, useRecducer } from 'react';
import "./AppReducer"

// Initial State:
const initialState = {
  repos: {
    url: "",
    name: "",
    description: "",
    language: "",
    stars: 0,
    forks: 0
  },
  language: "",
  range: "daily",
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function fetchTrendingRepos() {
    dispatch({
      type: FETCH_TRENDING_REPOS
    })
  }

  return (
    <GlobalContext.Provider value={{
      repos: state.repos,
      language: state.language,
      range: state.range,
      fetchTrendingRepos
    }}>
      {children}
    </GlobalContext.Provider>
  )
}