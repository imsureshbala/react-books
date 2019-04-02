import React from 'react';
import BookService from '../services/BookService';
import BooksTable from './BooksTable';
import ErrorCard from './ErrorCard';

export default class BooksList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: null,
            err: null
        };

        this.bookService = new BookService();
    }

    componentDidMount() {
        
        this.bookService.getAllBooks()
            .then(
                (response) => {
                    this.setState({ books: response.data });
                }
            ).catch(
                (err) => {
                    this.setState({ err: 'Unable To Reach The Data Server..!' });
                }
            );
    }

    render() {
        let { books, err } = this.state;

        let resultantDom;

        if (err) {
            resultantDom = <ErrorCard errText={err} />
        } else if (books) {
            resultantDom = <BooksTable books={books} />
        } else {
            resultantDom = <p>Loading...</p>
        }

        return resultantDom;
    }
}