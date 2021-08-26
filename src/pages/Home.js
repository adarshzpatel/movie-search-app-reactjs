import React, { useState } from "react";
import Layout from "../components/Layout";
import { apiGet } from "../misc/config";
function Home() {
  const [input, setInput] = useState("");
  const [results,setResults] = useState(null);

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onKeyDown = (e) => {
    if(e.keyCode === 13){
        onSearch();
    }
  }

  const renderResults = () => {
    if(results && results.length === 0){
        return <div>No Movies Found.</div>
    }

    if(results && results.length > 0){
        return <div>
            {results.map(item=><div key={item.show.id}>{item.show.name}</div> )}
        </div>
    }
    return null;
  }

  const onSearch = () => {
   apiGet(`/search/shows?q=${input}`).then(result=>{
     setResults(result);
     
   })
  };
  return (
    <Layout>
      <div className='flex gap-2'>
        <input className='hover:ring-1 border ring-gray-700 focus:ring-1  focus:outline-none rounded-md px-2 py-1' onKeyDown={onKeyDown} value={input} onChange={onInputChange} type="text" />
        <button className='px-4 py-1 hover:bg-blue-700 bg-blue-600 rounded-md text-white focus:outline-none' onClick={onSearch}>Search</button>
      </div>
        {renderResults()}
    </Layout>
  );
}
export default Home;
