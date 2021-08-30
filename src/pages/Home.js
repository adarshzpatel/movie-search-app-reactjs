import React, { useState } from "react";
import ActorGrid from "../components/actor/ActorGrid";
import Layout from "../components/Layout";
import ShowGrid from "../components/show/ShowGrid";
import { apiGet } from "../misc/config";
import { useLastQuery } from "../misc/customHook";
function Home() {
  const [input, setInput] = useLastQuery('');
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState("shows");


  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  const isShowSearch = searchOption === "shows";

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSearch();
    }
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No Movies Found.</div>;
    }

    if (results && results.length > 0) {
      return results[0].show
        ? (<ShowGrid data={results}/>)
        :(<ActorGrid data={results}/>);
    }
    return null;
  };

  const onSearch =async  () => {
    await apiGet(`/search/${searchOption}?q=${input}`).then((result) => {
      setResults(result);
    });
  };

  const onRadioChange = (e) => {
    setSearchOption(e.target.value);
  };
  return (
    <Layout>
      <div className="flex gap-2 w-full justify-center">
        <input
          placeholder="Search for something..."
          className="hover:ring-1 border ring-gray-700 focus:ring-1 placeholder-gray-400   focus:outline-none rounded-md px-2 py-1"
          onKeyDown={onKeyDown}
          value={input}
          onChange={onInputChange}
          type="text"
        />
        <button
          className="px-4 py-1 hover:bg-blue-700 bg-blue-600 rounded-md text-white focus:outline-none"
          onClick={onSearch}
        >
          Search
        </button>
      </div>
      <div className="flex gap-8 justify-center w-full my-2">
        <label
          htmlFor="shows"
          className="flex gap-2 text-gray-700 items-center justify-items-center"
        >
          Shows
          <input
            className="focus:ring-0 focus:text-purple-700 focus:ring-offset-0"
            id="shows"
            checked={isShowSearch}
            type="radio"
            value="shows"
            onChange={onRadioChange}
          />
        </label>
        <label
          htmlFor="actors"
          className="flex gap-2 items-center text-gray-700 justify-items-center"
        >
          Actors
          <input
            className="focus:ring-0 focus:text-purple-700 focus:ring-offset-0"
            id="actors"
            checked={!isShowSearch}
            type="radio"
            value="people"
            onChange={onRadioChange}
          />
        </label>
      </div>
      <div>{renderResults()}</div>
    </Layout>
  );
}
export default Home;
