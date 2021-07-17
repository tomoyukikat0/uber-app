import React from 'react';

import { RoundButton } from '../shared_style';

export const CountUpButton = ({
  onClick,
  isDisabled,
}) => (
  <RoundButton onClick={onClick} diabled={isDisabled}>
    +
  </RoundButton>
)