import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import SW from "../../img/sw.png";
import "../../styles/index.css";
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import { Context } from "../store/appContext";
import { Form, Dropdown } from 'react-bootstrap';

export const Navbar = () => {
  const { store } = useContext(Context)
  return (

    <nav className="navbar navbar-light bg-light mb-3">

      <div id="logo">
        <Link to="/">
          <Image src={SW} />
        </Link>
      </div>
      <div>

        <Form>
          <Form.Group controlId="exampleForm.SelectCustom">

            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Favorites
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {store.favorites.map((favorites, index) => (
                  <Dropdown.Item key={index.id} value={index.id}>
                    <b>{favorites}</b>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
        </Form>

      </div>
    </nav>

  );
};
