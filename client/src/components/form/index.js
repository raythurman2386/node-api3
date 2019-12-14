import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const UploadImage = () => {
  return (
    <Container fluid>
      <h1>Upload Image</h1>
      {/* Skyelars image upload challenge */}
      <form action="/upload" method="post" enctype="multipart/form-data">
        <Form.Group controlId="imageUploader">
          <Form.Control type="file" accept="image/*" name="photo" />
          <Button type="submit" variant="danger">
            Upload Image
          </Button>
        </Form.Group>
      </form>
    </Container>
  );
};

export default UploadImage;
