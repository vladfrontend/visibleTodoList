import FilterLink from './FilterLink';
import React from 'react';

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink
      filter="all"
    >
      All
    </FilterLink>
    {' '}
    <FilterLink
      filter="active"
    >
      Active
    </FilterLink>
    {' '}
    <FilterLink
      filter="completed"
    >
      Completed
    </FilterLink>
  </p>
);

export default Footer;