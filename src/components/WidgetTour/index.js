import React from 'react';
import PropTypes from 'prop-types';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Tour from 'reactour';

import config from './config';

const WidgetTour = ({ isOpen, onRequestClose }) => {
  const disableBody = (target) => disableBodyScroll(target);
  const enableBody = (target) => enableBodyScroll(target);

  return (
    <Tour
      isOpen={isOpen}
      steps={config}
      rounded={0}
      onAfterOpen={disableBody}
      onBeforeClose={enableBody}
      onRequestClose={onRequestClose}
    />
  );
};

WidgetTour.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default WidgetTour;
