import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from '../book/book';
import './books.css';


class Books extends Component {
  render() {
    return (
      <div className="books-body">
        <div className="books-by-author">
          <div className="books-author-name">
            {this.props.value.author.name}
          </div>
          <div className="books-author-books">
            <Book />
            <Book />
            <Book />
            <Book />
          </div>
        </div>
      </div>
    );
  }
}
export default Books;

Books.defaultProps = {
  value: {
    author: {
      name: 'J K Rowling',
      books: [
        {
          name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)',
          author: 'J K Rowling',
          rating: 4.45,
          like: 0,
        },
        {
          name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)',
          author: 'J K Rowling',
          rating: 4.45,
          like: 0,
        },
        {
          name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)',
          author: 'J K Rowling',
          rating: 4.45,
          like: 0,
        },
        {
          name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)',
          author: 'J K Rowling',
          rating: 4.45,
          like: 0,
        },
      ],
    },
  },
};
// Books.propTypes = {
//   value: PropTypes.shape({
//     name: PropTypes.string,
//     author: PropTypes.string,
//     rating: PropTypes.number,
//   }),

// };

// const input = this.props.value;
//     const allNotes = input.map(note =>
//       <DisplayNote value={note} key={note.id} editNote={this.props.editNote} />);
//     return (
//       <section className="gray-back padding10">
//         { allNotes }
//       </section>
//     );
