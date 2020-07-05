import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>
            <span aria-hidden="true" role="img">

            </span>Home
          </Link>
        </li>
        <li>
          <Link to='/mynotes'>
            <span aria-hidden="true" role="img">

            </span>
            My Notes
          </Link>
        </li>
        <li>
          <Link to='/favorites'>
            <span aria-hidden="true" role="img">

              </span>favorites
          </Link>
        </li>

      </ul>
    </nav>
  );
};


export default Navigation;