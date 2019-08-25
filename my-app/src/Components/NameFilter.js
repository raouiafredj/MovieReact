import React from 'react';
import ReactDom from 'react-dom';
import './MovieApp.css';

const NameFilter = ({value = '', onChange = () => {}}) => (
  <div className="name-filter">
      <input
          className="name-filter-text"
          type="text"
          value={value} 
          onChange={(event) => {
            onChange(event.target.value)
        }}
          
          
          />
      <input className="name-filter-button" type="button" value="Search" />
    </div>
)


export default NameFilter;


