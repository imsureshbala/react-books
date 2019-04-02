import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './commons/Header';
import BooksList from './BooksComponents/BooksList';

import './App.css';

class App extends Component {
  render() {
    return (
     <div>
       <Header title="Central Library"/>
       <BooksList />
     </div>
    );
  }
}

export default App;
