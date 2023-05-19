import React from "react";
import { Container } from 'react-bootstrap';
import Image from "react-bootstrap/Image";
import SW from "../../img/sw.png"
export const Details = () => {
  return (
    <section className="hero bg-light text-dark py-5">
    <Container>
    <Image src="https://picsum.photos/id/237/400/600"  fluid style={{ width: '300px', height: 'auto' }} />
      <h1>Welcome to My Website</h1>
      <p>Some text describing your website.</p>
    </Container>
  </section>
  );
};
// export default Details;
