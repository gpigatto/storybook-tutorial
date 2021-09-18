import React from 'react';
import PropTypes from 'prop-types';
import { Button, DatePicker, Space } from 'antd';

export const AntButton = ({label, type, ...props}) => {
  return <Button type={type} {...props} >{label}</Button>
} 

AntButton.propTypes = {
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Button Type
   */
  type: PropTypes.string.isRequired
}

AntButton.defaultProps = {
  label: "Ant Button",
  type: "primary"
}

