import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function StaticExample() {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Title className="Title">Title</Modal.Title>
        <input type="text" />
        <Modal.Title className="Title">Cover</Modal.Title>
        <input type="text" />
        <Modal.Title className="Title">Category</Modal.Title>
        <input type="text" />
        <Modal.Title className="Title">Rate</Modal.Title>
        <input type="text" />
        <Modal.Title className="Title">Cast</Modal.Title>
        <input type="text" />
        <Modal.Title className="Title">Release date</Modal.Title>
        <input type="text" />

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Add Movie</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default StaticExample;
