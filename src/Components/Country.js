import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Country({ name, flagEmoji, continent }) {
  return (
    <Link to={`/country/${name}`} className="country-link">
      <li className="country-item">
        <h2 className="country-name">
          {name}
          <br />
          <span className="flag">{flagEmoji}</span>
        </h2>
        <p className="country-continent">
          {continent}
        </p>
      </li>
    </Link>
  );
}

Country.propTypes = {
  name: PropTypes.string.isRequired,
  flagEmoji: PropTypes.string.isRequired,
  continent: PropTypes.string.isRequired,
};

export default Country;
