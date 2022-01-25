import React, { Component } from 'react';
import "../styles.css"
import { RepoIcon, StarIcon, RepoForkIcon } from '@primer/octicons-react';


/**
 * A GitHub repository card.
 *
 * @param {string} url the repository url
 * @param {string} name the repository name
 * @param {string} description a brief description of the repository
 * @param {number} language the programming language of the repository
 * @param {number} stars number of stars of the repository
 * @param {number} forks number of forks of the repository
 * @returns the rendered repository card
 */
export default class RepoCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="repo-card">
        <h2 className="title">
          <RepoIcon size={20} />
          <a href={url} target="_blank" rel="noreferrer">
            {name}
          </a>
        </h2>
        <p className="description">{description}</p>
        <p className="metadata">
          <span className="stars">{language}</span>
          <span className="stars">
            <StarIcon size={16} />
            {stars}
          </span>
          <span className="forks">
            <RepoForkedIcon size={16} />
            {forks}
          </span>
        </p>
      </div>
    );
  }
}
