import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/Home/Home';
import CompanyPage from './pages/Company/Company';
import NewCompanyPage from './pages/NewCompany/NewCompany';

// Pages routes
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/company" component={CompanyPage} />
      <Route exact path="/new-company" component={NewCompanyPage} />
    </Switch>
  </main>
);

const App = () => (
  <div>
    <Header />
    <Main />
    {/* <Footer /> Footer component */}
  </div>
);

export default App;
