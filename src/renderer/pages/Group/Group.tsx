import React from 'react';
import { withRouter } from 'react-router-dom';

function Group(props: any) {
  // eslint-disable-next-line react/destructuring-assignment
  return <p>Group {props.match.params.id} </p>;
}

export default withRouter(Group);
