import React, { Component } from 'react';
import './book.css';
import PropTypes from 'prop-types';

class Book extends Component {
  render() {
    return (
      <div className="book-container">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/51VNlzbfpXL._SX331_BO1,204,203,200_.jpg"
          className="book-cover-pic"
          alt="book pic"
        />
        <div className="book-like-div">
          <img
            alt="like icon"
            src="like.png"
            className="book-like-image"
          />
        </div>
        <div className="book-info">
          <div className="book-title">
            {this.props.value.name}
          </div>
          <div className="book-rating">
            {this.props.value.rating}
          </div>
          <div className="book-author">
            {this.props.value.author}
          </div>
        </div>
      </div>
    );
  }
}
export default Book;

Book.defaultProps = {
  value: {
    name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)',
    rating: 4.5,
    author: 'JK ROWLING',
  },
};
Book.propTypes = {
  value: PropTypes.shape({
    name: PropTypes.string,
    author: PropTypes.string,
    rating: PropTypes.number,
  }),

};
