import React from "react";
import PublicGrievanceList from "./public";
import listData from "./listData";
let user = {
  type: "committee"
};
class PublicGrievance extends React.Component {
  constructor() {
    super();
    this.state = {
      listsData: listData
    };
  }
  render() {
    const list = this.state.listsData.map(lists => (
      <PublicGrievanceList
        key={lists.id}
        subject={lists.subject}
        signedby={lists.signedby}
        startdate={lists.startdate}
        complaintcontent={lists.complaintcontent}
        solution={lists.solution}
        user={user}
      />
    ));

    return (
      <div>{list}</div>
      // <PetitionModal />
    );
  }
}

export default PublicGrievance;
