/**
 * show-on-mount
 *
 * show a component after it has mounted via css classes
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ShowOnMount = ({
  animClassName,
  children,
  className,
  inClassName,
  delay,
  outClassName,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.setTimeout(() => setShow(true), delay);
    }
  }, [delay]);
  
  return (
    <div
      className={`${className} ${animClassName} ${show ? inClassName : outClassName}`}
    >
      {children}
    </div>
  );
};

ShowOnMount.propTypes = {
  animClassName: PropTypes.string,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
  inClassName: PropTypes.string,
  outClassName: PropTypes.string,
};

ShowOnMount.defaultProps = {
  animClassName: 'fade',
  className: '',
  delay: 0,
  inClassName: 'fade--in',
  outClassName: 'fade--out',
};

export default ShowOnMount;
