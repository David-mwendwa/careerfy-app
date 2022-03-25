import React from 'react';
import moment from 'moment';

const Job = ({ company , createdAt}) => {
  let date = moment(createdAt)
  date = date.format('MMM Do, YYYY')
  return <h5>{company}</h5>;
};

export default Job;
