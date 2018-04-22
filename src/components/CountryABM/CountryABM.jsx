import React from 'react';
import { Button, Form, Grid, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const countryOptions = [{
  text: 'Argentina',
  key: 'AR',
  value: 'AR',
}];

const CountryABM = () => (
  <Form>
    <Grid >
      <Grid.Row centered>
        <Header textAlign="center" as="h2">
          Company
        </Header>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column width={5}>
          <Form.Field>
            <Form.Input label="Denominación" placeholder="Denominación" />
          </Form.Field>
          <Form.Field>
            <Form.Select label="Pais" placeholder="Pais" search selection options={countryOptions} />
          </Form.Field>
          <Form.Field>
            <Form.Select label="Provincia" placeholder="Provincia" search selection options={countryOptions} />
          </Form.Field>
          <Form.Field>
            <Form.Select label="Ciudad" placeholder="Ciudad" search selection options={countryOptions} />
          </Form.Field>
          <Form.Field>
            <Form.Input label="Domicilio" placeholder="Domicilio" />
          </Form.Field>
          <Form.Field>
            <Form.Input label="Email" placeholder="Email" />
          </Form.Field>
        </Grid.Column>
        <Grid.Column width={5}>
          <Form.Field>
            <Form.Input label="Telefono" placeholder="Telefono" />
          </Form.Field>
          <Form.Field>
            <Form.Input label="Fax" placeholder="Fax" />
          </Form.Field>
          <Form.Field>
            <Form.Select label="Condicion IVA" placeholder="Condicion IVA" search selection options={countryOptions} />
          </Form.Field>
          <Form.Field>
            <Form.Input label="CUIT" placeholder="CUIT" />
          </Form.Field>
          <Form.Field>
            <Form.Input label="Numero de ingresos brutos" placeholder="Numero de ingresos brutos" />
          </Form.Field>
          <Form.Field>
            <Form.Input label="Inicio actividad" placeholder="Inicio actividad" />
          </Form.Field>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Button as={Link} to="/company"> Cancel </Button>
        <Button type="submit">Submit</Button>
      </Grid.Row>
    </Grid>
  </Form>
);

export default CountryABM;
