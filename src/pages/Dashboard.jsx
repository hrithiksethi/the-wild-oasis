import Empty from "../ui/Empty";
import { Error } from "../ui/FormRow";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <p>TEST</p>
      </Row>
      <Error>
        Major updates will come in Version 2 of the application soon
        <p>Visit Cabins and settings page in the current version</p>
      </Error>
    </>
  );
}

export default Dashboard;
