import React from 'react';
import PropTypes from 'prop-types';
import { Button, Header, Table } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Company = ({ companies }) => (
  <React.Fragment>
    <Header textAlign="center" as="h2">
      Company List
    </Header>
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Country</Table.HeaderCell>
          <Table.HeaderCell>Address</Table.HeaderCell>
          <Table.HeaderCell>Phone</Table.HeaderCell>
          <Table.HeaderCell>CUIT</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {companies.map(company => (
          <Table.Row>
            <Table.Cell>{company.name}</Table.Cell>
            <Table.Cell>{company.country}</Table.Cell>
            <Table.Cell>{company.address}</Table.Cell>
            <Table.Cell>{company.phone}</Table.Cell>
            <Table.Cell>{company.cuit}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
    <Button floated="right" as={Link} to="/new-company">Add new company</Button>
  </React.Fragment>
);

Company.propTypes = {
  companies: PropTypes.shape({
    name: PropTypes.string,
    country: PropTypes.string,
    address: PropTypes.string,
    phone: PropTypes.number,
    cuit: PropTypes.number,
  }).isRequired,
};

const mapStateToProps = state => ({
  companies: state.company.companies,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Company);
