import React from 'react';
import BookRow from './BookRow';

const BooksTable = (props) => (
    <section className="contaienr-fluide p-4">
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Book#</th>
                    <th>Book Title</th>
                    <th>Book Type</th>
                    <th>Author</th>
                </tr>
            </thead>
            <tbody>
                {props.books.map( b => 
                        <BookRow key={b.id} book={b} />
                    )
                }
            </tbody>
        </table>
    </section>
);

export default BooksTable;