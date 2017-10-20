import React from 'react';

const Edit = ({ match }) => (
  <div>
    <h1>Edit</h1>
    <p>Editing expense ID: {match.params.id}</p>
  </div>
);

export default Edit;
