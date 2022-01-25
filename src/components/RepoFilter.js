import React, { Component, useContext, useState } from 'react';
import "../styles.css"
import { FileBinaryIcon, ClockIcon } from '@primer/octicons-react';
import { GlobalContext } from '../context/GlobalState';


/**
 * A repository filter lets the user select the programming language and time range of the repositories.
 *
 * @todo You should complete this React component to implement functions for select language and time range.
 * You may change the parameters and existing code of this function.
 */
export const RepoFilter = () => {
  const languageOptions = [
    {
      label: "All languages",
      value: "",
    },
    {
      label: "C",
      value: "c",
    },
    {
      label: "Java",
      value: "java",
    },
    {
      label: "JavaScript",
      value: "javascript",
    },
    {
      label: "Python",
      value: "python",
    }
  ];

  // All options for the time frame select tag
  const timeOptions = [
    {
      label: "Daily",
      value: "daily",
    },
    {
      label: "Weekly",
      value: "weekly",
    },
    {
      label: "Monthly",
      value: "monthly",
    }
  ];

  const { fetchTrendingRepos } = useContext(GlobalContext)
  const [language, setLanguage] = useState("");
  const [range, setRange] = useState("");

  return (
    <div className="repo-filter">
      <div className="select-group">
        <FileBinaryIcon size={16} />
        <select onChange={(e) => {
          setLanguage(e.target.value)
          fetchTr
        }}>
          {console.log(language)}
          {languageOptions.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      <div className="select-group">
        <ClockIcon size={16} />
        <select onChange={(e) => setRange(e.target.value)}>
          {timeOptions.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
