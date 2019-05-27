import React from "react";
import InforPage from './router/infor';

class RouterTest extends React.Component {
  render() {
    return (
      <Router>
          <Router path="/infor" components={InforPage} />
      </Router>
    );
  }
}

export default RouterTest;