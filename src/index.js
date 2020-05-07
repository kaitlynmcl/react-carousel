import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomDot from "./CustomDot";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 800 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 800, min: 464 },
    items: 1
  }
};

class News extends Component {
  state = {
    loading: false,
    data: [],
    headline: []
  };

  componentDidMount() {
    this.setState({ loading: true });
    console.log("app mounted");
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8ee8c21b20d24b37856fc3ab1e22a1e5"
    )
      .then(data => data.json())
      .then(data =>
        this.setState({ data: data.articles, loading: false }, () =>
          console.log(data.articles)
        )
      );
  }

  render() {
    return (
      <div className="about container">
        <div className="about container">
          <h2 className="text-center">
            <b> NEWS API <br /> <a href="https://www.npmjs.com/package/react-multi-carousel">REACT-MULTI-CAROUSEL INTEGRATION</a></b>
          </h2>
          {this.state.loading ? (
            "loading..."
          ) : (
            <div>
              <Carousel responsive={responsive} showDots customDot={<CustomDot />}>
                {this.state.data.map((post, indx) => {
                  return (
                    <div className="row">
                      <div className="centered" key={indx}>
                        <img
                          style={{ width: "400px", margin: "0 auto" }}
                          src={post.urlToImage}
                          alt="Alt text"
                        />
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<News />, rootElement);