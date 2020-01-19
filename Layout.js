import React from "react";

import MainComponentCommittee from "./Components/MainComponentCommittee/MainComponentCommittee";
import NavigationCommittee from "./Components/NavigationCommittee/NavigationCommittee";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <NavigationCommittee />
        <MainComponentCommittee />
      </div>
    );
  }
}

export default Layout;
