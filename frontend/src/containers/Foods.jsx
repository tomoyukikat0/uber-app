import React, { Fragment } from 'react';

export const Foods = ({
  match
}) => {
  return (
    <Fragment>
      <p>
        restaurantsIdは {match.params.restaurantsId} です
      </p>
    </Fragment>
  )
}