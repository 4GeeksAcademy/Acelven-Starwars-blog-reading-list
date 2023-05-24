import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import SW from "../../img/sw.png";
import "../../styles/index.css";
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import { Context } from "../store/appContext";
import { Form, Dropdown, Button } from 'react-bootstrap';
let trash = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
export const Navbar = () => {


  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { store, actions } = useContext(Context);
  return (
    <nav className={isScrolled ? 'scrolled' : ''}>
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
                <Dropdown.Menu style={{ width: '13rem' }} >
                  {store.favorites.map((favorites, index) => (
                    <p key={index.id} value={index.id}>
                      <b>{favorites}</b><Button variant='light' onClick={() => actions.handleRemove(index)}>{trash} </Button>
                    </p>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
          </Form>

        </div>
      </nav>
    </nav>

  );
};
