
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const SingleBook = ({ book, selectedBook, changeSelectedBook }) => {
  const [selected, setSelected] = useState(false);

  return (
    <>
      <Card
        onClick={() => {
          setSelected(!selected);
          changeSelectedBook(book.asin);
        }}
        style={{
          border: selectedBook === book.asin ? '3px solid red' : 'none',
        }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>{book.title}</Card.Title>
        </Card.Body>
      </Card>
      {/* {selected && <CommentArea asin={book.asin} />} */}
    </>
  );
};

export default SingleBook;
