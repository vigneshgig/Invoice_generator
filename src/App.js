import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { PDFViewer } from "@react-pdf/renderer";
import Invoice from "./components/reports/Invoice";
import invoice from "./data/invoice";
import form from "./components/reports/form";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Row, Col, FormGroup } from "react-bootstrap";
import moment from "moment";

// import logo from './logo.svg';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = invoice;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.messageForm = 0;
  }

  handleSubmit(e) {
    e.preventDefault();
    var currentDate = moment().format("DD/MM/YYYY");
    var invoicevalue = moment().format("DDMMHHmmss");
    this.setState({
      Address: e.target.elements.formBasicAddress.value,
      InvoiceNo: invoicevalue,
      Date: currentDate,
      GuestName: e.target.elements.formBasicGuest.value,
      MobileNo: e.target.elements.formBasicMobileNo.value,
      CheckIn: e.target.elements.formBasicCheckIn.value,
      CheckOut: e.target.elements.formBasicCheckOut.value,
      RoomNo: e.target.elements.formBasicRoom.value,
      TotalPerson: e.target.elements.formBasicPerson.value,
      BookingId: e.target.elements.formBasicBookingId.value,
      PaymentMode: e.target.elements.formBasicPaymentMode.value,
      gst: e.target.elements.formBasicGst.value,
      items: [
        {
          sno: 1,
          desc: "Room",
          qty: e.target.elements.formBasicRoomQty.value,
          rate: e.target.elements.formBasicRate.value,
        },
        {
          sno: 2,
          desc: "Early CheckIn",
          qty: "-",
          rate: e.target.elements.formBasicEarlyRate.value,
        },
        {
          sno: 3,
          desc: "Late CheckOut",
          qty: "-",
          rate: e.target.elements.formBasicLateRate.value,
        },
        {
          sno: 4,
          desc: "Food",
          qty: "-",
          rate: e.target.elements.formBasicFood.value,
        },
        {
          sno: 5,
          desc: "Broken and Other Charges",
          qty: "-",
          rate: e.target.elements.formBasicOther.value,
        },
      ],
    });
    ReactDOM.findDOMNode(this.messageForm).reset();
  }
  render() {
    return (
      <Fragment>
        <Container style={{ marginTop: "2%" }} className="container mr-auto">
          <Row className="row">
            <Col className="col-lg-3 col-md-12 col-sm-12">
              <Form
                id="myForm"
                className="form"
                onSubmit={(e) => this.handleSubmit(e)}
                ref={(form) => (this.messageForm = form)}
              >
                <h3>Guest Detail</h3>
                <Form.Group controlId="formBasicGuest">
                  <Form.Label>Guest Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Guest Name" />
                </Form.Group>
                <Form.Group controlId="formBasicAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter Guest Address" />
                </Form.Group>
                <Form.Group controlId="formBasicMobileNo">
                  <Form.Label>Mobile No</Form.Label>
                  <Form.Control type="tel" placeholder="Mobile No" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckIn">
                  <Form.Label>Check In</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckOut">
                  <Form.Label>Check Out</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
                <Form.Group controlId="formBasicRoom">
                  <Form.Label>Room No</Form.Label>
                  <Form.Control type="text" placeholder="Enter Room No" />
                </Form.Group>
                <Form.Group controlId="formBasicPerson">
                  <Form.Label>Total Person</Form.Label>
                  <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="formBasicBookingId">
                  <Form.Label>Booking Id</Form.Label>
                  <Form.Control type="text" placeholder="Enter Booking Id" />
                </Form.Group>
                <Form.Group controlId="formBasicPaymentMode">
                  <Form.Label>Payment Mode</Form.Label>
                  <Form.Control as="select">
                    <option>Cash</option>
                    <option>EDC</option>
                    <option>Online</option>
                    <option>UPI</option>
                  </Form.Control>
                </Form.Group>
                <h3>Bill Detail</h3>
                <Form.Group controlId="formBasicRoomQty">
                  <Form.Label>RoomQty</Form.Label>
                  <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="formBasicRate">
                  <Form.Label>Room Rate</Form.Label>
                  <Form.Control type="tel" placeholder="Rate" />
                </Form.Group>
                <Form.Group controlId="formBasicEarlyRate">
                  <Form.Label>Early Check In Rate</Form.Label>
                  <Form.Control type="tel" placeholder="0" />
                </Form.Group>

                <Form.Group controlId="formBasicLateRate">
                  <Form.Label>Late Check In Rate</Form.Label>
                  <Form.Control type="tel" placeholder="0" />
                </Form.Group>
                <Form.Group controlId="formBasicFood">
                  <Form.Label>Food</Form.Label>
                  <Form.Control type="tel" placeholder="0" />
                </Form.Group>
                <Form.Group controlId="formBasicOther">
                  <Form.Label>Other</Form.Label>
                  <Form.Control type="tel" placeholder="0" />
                </Form.Group>
                <Form.Group controlId="formBasicGst">
                  <Form.Label>Gst</Form.Label>
                  <Form.Control type="tel" placeholder="0" />
                </Form.Group>
        
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
            <Col classnName="col-md-12 col-sm-12 col-lg">
              <PDFViewer width="800" height="1500" className="app">
                <Invoice invoice={this.state} />
              </PDFViewer>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default App;
