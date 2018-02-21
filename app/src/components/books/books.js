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
            <Book value={this.props.value.author.books[0]} />
            <Book value={this.props.value.author.books[1]} />
            <Book value={this.props.value.author.books[2]} />
            <Book value={this.props.value.author.books[3]} />
            {/* map books array so that book compoment can be called for each book */}
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
Books.propTypes = {
  value: PropTypes.shape({
    author: PropTypes.shape({
      name: PropTypes.string,
      books: PropTypes.array,
    }),
  }),
};
