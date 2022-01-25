import React from 'react';
import { RepoBoard } from './RepoBoard';
import { RepoFilter } from './RepoFilter';


/**
 * The main component that renders GitHub trending repositories based-on user selections.
 *
 * @todo You should complete this React component to display trending repositories and let user select filters.
 * You may change the parameters and existing code of this function.
 */
export default function GitHubTrending() {
  return (
    <div>
      <RepoFilter />
      <RepoBoard />
    </div>
  );
}
