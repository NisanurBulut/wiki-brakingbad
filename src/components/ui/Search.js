
import React, { useState } from 'react';

const Search = ({ getQuery }) => {
  const [stext, setText] = useState('');

  const onChange = (_query) => {
    setText(_query);
    getQuery(_query);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Characters..."
          value={stext}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
