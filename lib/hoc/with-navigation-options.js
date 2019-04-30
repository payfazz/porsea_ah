import React, { PureComponent } from "react";

const withNavigationOptions = config => IncomingComponent =>
  class extends PureComponent {
    static navigationOptions() {
      return config;
    }

    render() {
      return <IncomingComponent {...this.props} />;
    }
  };

export default withNavigationOptions;
