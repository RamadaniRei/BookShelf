import React from "react";
import "./Book.css";
import { ThemeContext } from "../context/ThemeContext";

export default class Book extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(contextTheme) => {
          const { isDarkMode, dark, light } = contextTheme;
          const theme = isDarkMode ? dark : light;
          const { index, book } = this.props;

          return (
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href={`#portfolioModal${index}`}
                >
                  <div
                    className="portfolio-hover"
                    style={{ backgroundColor: theme.hover }}
                  >
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid w-100"
                    style={{ height: "40rem" }}
                    src={book.imageURL}
                    alt={book.title}
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">{book.title}</div>
                  <div className="portfolio-caption-subheading text-muted">
                    {book.author}
                  </div>
                </div>
              </div>

              {/* Modal */}
              <div
                className="modal fade"
                id={`portfolioModal${index}`}
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div
                    className="modal-content"
                    style={{
                      backgroundColor: theme.bg,
                      color: theme.color,
                    }}
                  >
                    <div className="modal-header">
                      <h5 className="modal-title">{book.title}</h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        style={{ color: theme.color }}
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <img
                        className="img-fluid"
                        src={book.imageURL}
                        alt={book.title}
                      />
                      <p>
                        <strong>Author:</strong> {book.author}
                      </p>
                      <p>
                        <strong>Number of Pages:</strong> {book.pageNum}
                      </p>
                      <p>
                        <strong>Topic:</strong> {book.topic}
                      </p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                        style={{
                          backgroundColor: theme.color,
                          color: theme.bg,
                        }}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
