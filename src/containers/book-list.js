import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)} 
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state){
  // Whatever is returned will show up as props
  // Inside of BookList
  return {
    books: state.books
  }
}

// Anything returned from this function will end up as props
// On the the BookList Container
function mapDispatchToProps (dispatch){
  // Whenever a selectBook is called, the result should be passed
  // to all of the reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a Component to a Container - It needs to know
// About this new dispatch method, selectBook. Make it available as prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
