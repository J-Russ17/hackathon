import React, { useEffect, useState } from "react";
import FilterSearch from "./components/SearchForm";
import ListArticles from "./components/ListArticles";
import Header from "./components/Header";
import axios from "axios";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState("title");
  console.log(searchTerm);

  const fetchStory = async () => {
    try {
      const response = await axios.get(
        `http://hn.algolia.com/api/v1/search?query=${searchTerm}&tags=story`
      );
      console.log(response.data.hits);
      setArticles(response.data.hits);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchAuthor = async () => {
    try {
      const response = await axios.get(
        `http://hn.algolia.com/api/v1/search?tags=story,author_${searchTerm}`
      );
      console.log(response.data.hits);
      setArticles(response.data.hits);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (categories === "title") {
      fetchStory();
    } else if (categories === "author") {
      fetchAuthor();
    }
  }, [searchTerm, categories]);
  console.log(articles);
  console.log("categories", categories);

  return (
    <>
      <Header />
      <FilterSearch
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        categories={categories}
        setCategories={setCategories}
      />
      <div>
        <h1></h1>
        <ListArticles articles={articles} />
      </div>
    </>
  );
};

export default App;
