import Button from 'react-bootstrap/Button';
import React, {useState} from 'react';
function TypesExample() {
  const [movie, setMovie] = useState("Add new Movie");
  return (
    <>
      <Button variant="secondary">{movie}</Button>
    </>
  );
}

export default TypesExample;