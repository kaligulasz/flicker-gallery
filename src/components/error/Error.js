import React from 'react';
import Proptypes from 'prop-types';

import './error.scss';

const Error = ({ error }) => (
  error !== 'failed' ? null : <div className="error">something went wrong :(</div>
);

Error.propTypes = {
  error: Proptypes.string.isRequired,
};

export default Error;
