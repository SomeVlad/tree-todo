import React from 'react';
import {ProgressBar} from 'react-bootstrap';

const getStyle = (now) => {
  if(now < 34) {
    return "danger"
  } else if (now > 34 && now < 100) {
    return "warning"
  } else {
    return "success"
  }
};

const CompletedProgressBar = (props) => {
  return <ProgressBar bsStyle={getStyle(props.now)} now={props.now} label={`${props.now}%`} />
};

export default CompletedProgressBar;
