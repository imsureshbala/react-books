import React from 'react';

const BookRow = (props) => (
    <tr>
        <td>{props.book.id}</td>
        <td>{props.book.title}</td>
        <td>{props.book.type}</td>
        <td>{props.book.author}</td>
        <td>
            <button className="btn btn-sm btn-info mr-2">Edit</button>
            <button className="btn btn-sm btn-danger">Delete</button>
        </td>
    </tr>
);

export default BookRow;