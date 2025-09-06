import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Imagecard from "./components/Imagecard";
import Welcome from "./components/Wlcm";
import { Container, Row, Col } from "react-bootstrap";



const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;
const App = () => {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    fetch(
      ` https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([{ ...data, title: word }, ...images]);
      })
      .catch((err) => {
        console.log(err);
      });

    setWord("");
  };

  const handledelete = (id) => {
    setImages(images.filter((images) => images.id !== id));
  };
  return (
    <div>
      <Header title="Images Gallery" />
      <Search
        word={word}
        setWord={setWord}
        handlesubmit={handleSearchSubmit}
      ></Search>
      <Container className="mt-4">
        {images.length ? (
          <Row xs={1} md={2} lg={3}>
            {images.map((images, i) => (
              <Col key={i} className="pb-3">
                <Imagecard image={images} deleteimage={handledelete} />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome/>
        )}
      </Container>
    </div>
  );
};

export default App;
