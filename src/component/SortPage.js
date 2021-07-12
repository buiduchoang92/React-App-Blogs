import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';

const SortDropdown = props => {
  const { handleSelect, typeFilter } = props;

  return (
    <React.Fragment>
      <DropdownButton
        alignRight
        title={`${typeFilter === '' ? 'Sort Filter Blogs' : typeFilter} `}
        id="dropdown-menu-align-right"
        onSelect={e => handleSelect(e)}
      >
        <Dropdown.Item eventKey="title">title</Dropdown.Item>
        <Dropdown.Item eventKey="content">content</Dropdown.Item>
        <Dropdown.Item eventKey="createdAt">createdAt</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="">some link</Dropdown.Item>
      </DropdownButton>
    </React.Fragment>
  );
};

export default SortDropdown;
