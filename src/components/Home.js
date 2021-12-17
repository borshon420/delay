import React, { useEffect, useRef, useState } from "react";
import AllDetails from "./AllDetails";

const Home = () => {
    const [news, setNews] = useState([]);
  const timerRef = useRef(null);

  const sendMessage = (e) => {
    e.preventDefault();
    const url =
      `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0`;
    timerRef.current = setTimeout(
      () => fetch(url)
      .then((res) => res.json())
      .then((data) => setNews(data.hits)),
      10000
    );
     
  };

  useEffect(() => {
    // Clear the interval when the component unmounts
    
    return () => clearTimeout(timerRef.current);
  }, []);
  console.log(news)
  return (
    <div>
      <h1>Data length: {news.length}</h1>
      <button onClick={sendMessage}>Hit to show new data</button>
      <div>
      {news.map((product) => (
            <AllDetails key={product.title}  product={product}></AllDetails>
          ))}
      </div>
    </div>
  );
};

export default Home;
