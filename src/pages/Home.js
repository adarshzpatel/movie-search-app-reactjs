import React, { useState } from "react";
import Layout from "../components/Layout";

function Home() {
  const [input, setInput] = useState("");
  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onKeyDown = (e) => {
    if(e.keyCode === 13){
        onSearch();
    }
  }

  const onSearch = () => {
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <Layout>
      <input onKeyDown={onKeyDown} value={input} onChange={onInputChange} type="text" />
        <button onClick={onSearch}>Search</button>
    </Layout>
  );
}
export default Home;
