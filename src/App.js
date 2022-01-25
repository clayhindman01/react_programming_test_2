/**
 * A GitHub trending repositories showcase.
 *
 * Your task is to implement this page using React.js by completing functions annotated by @todo.
 */

import {
  RepoIcon,
  StarIcon,
  RepoForkedIcon,
  ClockIcon,
  FileBinaryIcon
} from "@primer/octicons-react";
import React from "react";
import { displayPartsToString, ImportsNotUsedAsValues } from "typescript";
import GitHubTrending from "./components/GitHubTrending";

import "./styles.css";

/**
 * The main entry of the app.
 */
export default function App() {
  return (
    <div className="App">
      <h1 className="pagetitle">GitHub Trending</h1>
      <GitHubTrending />
    </div>
  );
}