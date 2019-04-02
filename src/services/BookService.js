import axios from 'axios';

export default class BookService{

    constructor(){
        this.apiUrl = "http://localhost:5454/books";
    }

    getAllBooks(){
        return axios.get(this.apiUrl);
    }

    getBookById(cid){
        return axios.get(`${this.apiUrl}/${cid}`);
    }

    addBook(contact){
        return axios.post(this.apiUrl,contact);
    }

    saveBook(contact){
        return axios.put(this.apiUrl,contact);
    }

    deleteBook(cid){
        return axios.delete(`${this.apiUrl}/${cid}`);
    }
}