import React, { Component } from 'react';
import { rgba } from 'polished';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from '../Icon';
import Link from '../Link';

const Container = styled('section')``;
const Header = styled('header')``;

class ContactDetails extends Component {
  static defaultProps = {
    className: '',
  };

  static propTypes = {
    className: PropTypes.string,
  };

  state = {
    data: { name: '[name]' },
    contact: { name: {}, picture: {} }
  };

  componentDidMount() {
    console.log('page we are on',this.props.match.params.id)
    console.log('all contacts', this.props.contacts)
    let contact = this.props.contacts.find(specificContact => {
      return specificContact.id ===  this.props.match.params.id
    })
    console.log('conctact', contact)
    if(contact){
      this.setState({contact: contact}) 
    }
  }

  render() {
    const { className } = this.props;
    const { data } = this.state;
    const { contact } = this.state;

    return (
      <article className={className}>
        <Header>
          <Link to="/">
            <Icon>arrow_back_ios</Icon>
          </Link>
          {data.name}
          {contact.email}
          {contact.name.first}
          {contact.name.last}
          <img src={contact.picture.medium} />


        </Header>
        <Container>You need to implement the view here</Container>
      </article>
    );
  }
}

export default styled(ContactDetails)`
  background: ${props => props.theme['--color-light']};
  height: calc(100% - 2.5rem);
  position: fixed;
  top: 2.5rem;
  width: 100%;
  //
  ${Header} {
    ${props => props.theme['--font-extra-large']};
    align-items: center;
    display: flex;
    height: 5rem;
    justify-content: center;
    text-align: center;

    ${Icon} {
      height: 5rem;
      left: 0;
      line-height: 5rem;
      position: absolute;
      top: 0;
      width: 5rem;
    }
  }

  ${Container} {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (${props => props.theme['--screen-medium']}) {
    border-left: 1px solid ${props => rgba(props.theme['--color-dark'], 0.1)};
    left: 32rem;
    width: calc(100% - 32rem);
  }
`;
