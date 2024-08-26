import React, { Component } from "react";
import Book from "./Book";
import { ThemeContext } from "../context/ThemeContext";
import { BookContext } from "../context/ContentContext";

export default class BookList extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(ThemeContext) => (
          <BookContext.Consumer>
            {(BookContext) => {
              const { books } = BookContext();
              const { changeTheme, isDarkMode, dark, light } = ThemeContext;
              const theme = isDarkMode ? dark : light;
              return (
                <section
                  className="page-section"
                  style={{ backgroundColor: theme.bg, color: theme.color }}
                  id="portfolio"
                >
                  <div className="container">
                    <div className="text-right">
                      <button className="btn btn-danger" onClick={changeTheme}>
                        {" "}
                        Change Theme
                      </button>
                    </div>
                    <div className="text-center">
                      <h2 className="section-heading text-uppercase">
                        BookShelf
                      </h2>
                      <h3 className="section-subheading text-muted"></h3>
                    </div>
                  </div>
                </section>
              );
            }}
          </BookContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
  }
}
