import React, { useState, useEffect } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import MovieDetail from "./MovieDetail";
import API from "../utils/API";

const OmdbContainer = () => {
  const [result, setResult] = useState({});
  const [search, setSearch] = useState('');
  const searchMovies = query => {
    API.search(query)
      .then(res => setResult(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    searchMovies("The Matrix");
  }, [])


  const handleInputChange = event => {
    setSearch(event.target.value)
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    searchMovies(search);
    setSearch('');
  }

    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={result.Title || "Search for a Movie to Begin"}
            >
              {result.Title ? <MovieDetail
                title={result.Title}
                src={result.Poster}
                director={result.Director}
                genre={result.Genre}
                released={result.Released}
              /> : <div>No movie info found</div>}
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={search}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
}

export default OmdbContainer;
