import React, { useState } from "react";
import { Octokit } from "octokit";
import Result from "./Result";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const [repo, setRepos] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClick = async () => {
    console.log(searchInput);

    try {
      // Octokit.js
      // https://github.com/octokit/core.js#readme
      const octokit = new Octokit({
        auth: "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",
      });

      const result = await octokit.request(`GET /users/${searchInput}/repos`, {
        username: `${searchInput}`,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });

      setRepos(result);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <>
      <div className="text-center">
        <input
          type="text"
          placeholder="search"
          className="border-solid mx-5 text-lg border-2 border-gray-500 rounded"
          value={searchInput}
          onChange={handleChange}
          
        />
        <button onClick={handleClick} className="bg-white p-2 uppercase hover:bg-black hover:text-white rounded">Search</button>
        <div className="m-0"> 
        </div>
        </div>
        
        <Result repo={repo} />
                
      
    </>
  );
}

export default SearchBar;
