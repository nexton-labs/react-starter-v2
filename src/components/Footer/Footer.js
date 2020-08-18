import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import './Footer.css';

export const Footer = ({ session }) => {
  if (!session || !session.logged) return null;

  return (
    <footer className="sticky-footer bg-white">
      <div className="container my-auto">
        <div className="copyright text-center my-auto">
          <span>
            Copyright &copy; SeamlessDocs 2019 - Contact Support:{' '}
            <a href="mailto:support@seamlessdocs.com">
              support@seamlessdocs.com
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  session: PropTypes.object,
};

const mapStatesToProperties = state => ({
  session: state.session,
});

export default connect(mapStatesToProperties)(Footer);
