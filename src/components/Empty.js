import React from 'react';
import { rgba } from 'polished';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Empty = ({ className }) => <div className={className} />;

Empty.defaultProps = {
  className: '',
};

Empty.propTypes = {
  className: PropTypes.string,
};

export default styled(Empty)`
  @media (${props => props.theme['--screen-medium']}) {
    background: ${props => props.theme['--color-light']};
    border-left: 1px solid ${props => rgba(props.theme['--color-dark'], 0.1)};
    height: calc(100% - 2.5rem);
    left: 32rem;
    position: fixed;
    top: 2.5rem;
    width: calc(100% - 32rem);
  }
`;
