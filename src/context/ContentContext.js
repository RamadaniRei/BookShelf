import React, { Component, createContext } from "react";

export const BookContext = createContext();
export default class ContentContextProvider extends Component {
  state = {
    books: [
      {
        isbn: "9780143127741",
        title: "Sapiens: A Brief History of Humankind",
        subtitle: "",
        author: "Yuval Noah Harari",
        published: "2015-02-10",
        publisher: "Harper",
        pages: 464,
        description:
          "Sapiens explores the history of humankind from the Stone Age to the modern age, examining how biology and history have defined us and enhanced our understanding of what it means to be human.",
        website:
          "https://www.harpercollins.com/products/sapiens-yuval-noah-harari",
      },
      {
        isbn: "9780553380163",
        title: "The Road",
        subtitle: "",
        author: "Cormac McCarthy",
        published: "2006-09-26",
        publisher: "Knopf",
        pages: 287,
        description:
          "The Road is a post-apocalyptic novel that follows a father and son as they traverse a bleak landscape, struggling to survive against all odds.",
        website:
          "https://www.penguinrandomhouse.com/books/79215/the-road-by-cormac-mccarthy/",
      },
      {
        isbn: "9781982137274",
        title: "Where the Crawdads Sing",
        subtitle: "",
        author: "Delia Owens",
        published: "2018-08-14",
        publisher: "G.P. Putnam's Sons",
        pages: 384,
        description:
          "Where the Crawdads Sing is a mystery and coming-of-age story set in the marshes of North Carolina, where a young girl grows up isolated from society.",
        website:
          "https://www.penguinrandomhouse.com/books/567319/where-the-crawdads-sing-by-delia-owens/",
      },
      {
        isbn: "9781501124020",
        title: "Educated: A Memoir",
        subtitle: "",
        author: "Tara Westover",
        published: "2018-02-20",
        publisher: "Random House",
        pages: 352,
        description:
          "Educated is a memoir by Tara Westover about her struggle to gain an education despite being raised in a strict and isolated environment in rural Idaho.",
        website:
          "https://www.penguinrandomhouse.com/books/550168/educated-by-tara-westover/",
      },
    ],
  };
  render() {
    return (
      <div>
        <BookContext.Provider values={this.state}>
          {this.props.children}
        </BookContext.Provider>
      </div>
    );
  }
}
