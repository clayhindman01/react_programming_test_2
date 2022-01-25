import React, { Component, useContext } from 'react';
import RepoCard from './RepoCard';

import { GlobalContext } from '../context/GlobalState';

/**
 * A repository filter lets the user select the programming language and time range of the repositories.
 *
 * @todo You should complete this React component to implement functions for select language and time range.
 * You may change the parameters and existing code of this function.
 */

/**
 * A repository board that renders a list of GitHub repositories.
 *
 * @todo You should complete this React component to render a list of GitHub repositories.
 * You may change the parameters and existing code of this function.
 */

export const RepoBoard = () => {

  const { repos } = useContext(GlobalContext);
  return (
    <div className="repo-board">
      {/* {repos.map((data) => (
        <RepoCard
          url={data.url}
          name={data.name}
          description={data.description}
          language={data.language}
          stars={data.stars}
          forks={data.forks}
        />
      ))} */}
      {console.log(repos)}
    </div>
  );
};

