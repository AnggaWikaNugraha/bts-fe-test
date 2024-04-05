import React, { useEffect } from 'react';
import {
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

/**
 * @function PivateApp adalah screen pemisah antara screen yang butuh authentification dan tidak
 * @property statusPage, children, rest
 * @see PivateApp.propTypes untuk melihat type data
 */
function PivateApp({
  statusPage,
  children,
  ...rest
}) {

  const statusPageReducer = useSelector((state) => state.StatusPageReducer)

  useEffect(() => {
    if (statusPageReducer.isAuthenticated) {
    }
  }, [statusPageReducer]);
  return (
    <Route
      {...rest}
      render={() => (statusPageReducer.isAuthenticated ? (
        children
      ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
      ))
      }
    />
  );
}

PivateApp.propTypes = {
  statusPage: PropTypes.object,
  children: PropTypes.element,
  getMaster: PropTypes.func,
};
const mapsStateToProps = (state) => ({
  statusPage: state.StatusPageReducer,
});
const mapsDispatchToProps = {
};
export default compose(
  withRouter,
  React.memo,
  connect(mapsStateToProps, mapsDispatchToProps),
)(PivateApp);
