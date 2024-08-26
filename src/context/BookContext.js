import React from "react";

export const BookContext = React.createContext();

export default class ContentContextProvider extends React.Component {
  state = {
    books: [
      {
        title: "Kırmızı Pazartesi",
        author: "Gabriel Garcia Marquez",
        pageNum: 296,
        imageURL:
          "https://i.idefix.com/cache/600x600-0/originals/0000000064101-1.jpg",
        topic:
          "1968-1970 yılları arasında geçen olaylar, o günün toplumsal gerçeklerini de satırlara taşıyor. Ama romanın odağında bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgârıyla hareketlenen İmkânsızın Şarkısını ölümle erken karşılaşan gençlerin hayatı yönlendiriyor. Hiçbir şeyin önem taşımadığı, amaçsızlığın ağır bastığı, özgür seksin kol gezdiği bir öğrenci hayatı... Ama diğer yanda da yoğun duygular var... İmkânsız aşklar, imkânsız şarkılar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dışında da çok kişi tarafından sahipleniliyor.",
      },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        pageNum: 281,
        imageURL: "https://images.penguinrandomhouse.com/cover/9780060935467",
        topic:
          "A novel about the serious issues of rape and racial inequality told through the eyes of a young girl in the American South.",
      },
      {
        title: "1984",
        author: "George Orwell",
        pageNum: 328,
        imageURL:
          "https://m.media-amazon.com/images/I/41EzNnr4YUL._SX331_BO1,204,203,200_.jpg",
        topic:
          "A dystopian novel set in a totalitarian society ruled by the Party and its leader, Big Brother, who employ surveillance and propaganda to exert control over the population.",
      },
      {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        pageNum: 279,
        imageURL:
          "https://cdn.kobo.com/book-images/08ba5a67-f48d-420e-be8e-6de7a73b7d85/353/569/90/False/pride-prejudice-13.jpg",
        topic:
          "A romantic novel that also critiques the British landed gentry at the end of the 18th century.",
      },
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        pageNum: 180,
        imageURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/640px-The_Great_Gatsby_Cover_1925_Retouched.jpg",
        topic:
          "A novel that explores themes of decadence, idealism, resistance to change, social upheaval, and excess, creating a portrait of the Jazz Age.",
      },
      {
        title: "Moby-Dick",
        author: "Herman Melville",
        pageNum: 635,
        imageURL: "https://mpd-biblio-covers.imgix.net/9781466804128.jpg",
        topic:
          "A whaling voyage narrative that explores complex themes such as fate, obsession, and the human condition.",
      },
      {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        pageNum: 214,
        imageURL:
          "https://cdn.britannica.com/94/181394-050-2F76F7EE/Reproduction-cover-edition-The-Catcher-in-the.jpg",
        topic:
          "A story about teenage rebellion and angst, focusing on the struggles of the protagonist, Holden Caulfield.",
      },
      {
        title: "Brave New World",
        author: "Aldous Huxley",
        pageNum: 268,
        imageURL:
          "https://upload.wikimedia.org/wikipedia/en/thumb/6/62/BraveNewWorld_FirstEdition.jpg/220px-BraveNewWorld_FirstEdition.jpg",
        topic:
          "A dystopian novel that imagines a future society where humans are conditioned to passively accept their roles in a strictly hierarchical world.",
      },
      {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        author: "J.R.R. Tolkien",
        pageNum: 423,
        imageURL:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654215925i/61215351.jpg",
        topic:
          "The first volume in the epic fantasy series that follows the quest to destroy the One Ring and defeat the Dark Lord Sauron.",
      },
      {
        title: "Frankenstein",
        author: "Mary Shelley",
        pageNum: 280,
        imageURL:
          "https://m.media-amazon.com/images/I/81z7E0uWdtL._AC_UF1000,1000_QL80_.jpg",
        topic:
          "A Gothic novel that tells the story of Victor Frankenstein, a scientist who creates a sapient creature in a scientific experiment.",
      },
    ],
  };

  render() {
    return (
      <div>
        <BookContext.Provider value={this.state}>
          {this.props.children}
        </BookContext.Provider>
      </div>
    );
  }
}
