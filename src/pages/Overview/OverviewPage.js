import React, { Fragment } from 'react';
import { useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const OverviewPage = () => {
  const history = useHistory();

  const handleRedirectToDevelopers = () => {
    history.replace('/items');
  };

  return (
    <Fragment>
      <h1>Overview</h1>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={handleRedirectToDevelopers}>
          Redirect...
        </Button>
        <Link to="/settings">Settings</Link>
      </div>
    </Fragment>
  );
};

OverviewPage.propTypes = {
  history: PropTypes.object,
};

export default OverviewPage;
