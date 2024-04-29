import AddCabin from "../features/cabins/AddCabin";
import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Modal from "../ui/Modal";
import Row from "../ui/Row";
import Logo from "../ui/Logo";
import Form from "../ui/Form";
function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <Modal>
          <p>
            <Modal.Open opens={"filter"}>
              <span> Filter / </span>
            </Modal.Open>
            <Modal.Open opens={"sort"}>
              <span> Sort</span>
            </Modal.Open>
          </p>

          <Modal.Window name={"filter"}>
            <Logo />
          </Modal.Window>

          <Modal.Window name={"sort"}>
            <Form />
          </Modal.Window>
        </Modal>
      </Row>
      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
