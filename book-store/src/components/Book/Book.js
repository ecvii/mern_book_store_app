import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import "./Book.css";

const Book = (props) => {
  // const navigate = useNavigate();

  const { _id, name, author, description, price, image } = props.book;

  // const deleteHandler = async () => {
  //   await axios
  //     .delete(`http://localhost:5000/books/${_id}`)
  //     .then((res) => res.data)
  // };

  const deleteHandler = async (id) => {
    try {
      await axios
        .delete(`http://localhost:5000/books/${id}`)
        .then(() => window.location.reload(false));
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card__details">
        <span className="price">P{price}</span>
        <div className="name">{name}</div>
        <span className="tag">Author: {author}</span>
        <div className="myBox">{description}</div>

        <Button LinkComponent={Link} to={`/books/${_id}`}>
          Update
        </Button>
        {/* <Button LinkComponent={Link} to={`/books/delete/${_id}`}>
          Delete
        </Button> */}
        {/* <Button onClick={deleteHandler}>Delete</Button> */}
        <Button onClick={() => deleteHandler(`${_id}`)}>Delete</Button>
      </div>
    </div>
  );
};

export default Book;
