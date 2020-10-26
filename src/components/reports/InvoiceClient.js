import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  invoiceMobileContainer: {
    color: "#336546",
    fontStyle: "Arial",
    flexDirection: "row",
    // marginLeft: "",
    justifyContent: "flex-center",
  },
  guestContainer: {
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 0,
    // flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#112131",
    borderBottomStyle: "solid",
    borderTopWidth: 1,
    borderTopColor: "#112131",
    borderTopStyle: "solid",
    alignItems: "stretch",
  },
  guestAddress: {
    color: "#336546",
    fontStyle: "Arial",
    flexDirection: "row",
    // marginLeft: "6%",
    justifyContent: "flex-center",
    // borderBottomColor: "#112131",
    // borderBottomStyle: "solid",
    // borderTopWidth: 1,
    // borderTopColor: "#112131",
    // borderTopStyle: "solid",
    // alignItems: "stretch",
  },
  reportGuestName: {
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
    color: "#141518",
    letterSpacing: 1,
    fontStyle: "Arial",
    fontSize: 7,
    textAlign: "left",
    textTransform: "uppercase",
    wordBreak: "break-all",
    width: "32%",
    borderStyle: "solid",
  },
  reportMobileNo: {
    marginTop: 10,
    marginLeft: "23%",
    marginBottom: 10,
    color: "#141518",
    letterSpacing: 1,
    fontStyle: "Arial",
    fontSize: 7,
    textAlign: "left",
    textTransform: "uppercase",
    wordBreak: "break-all",
    width: "23%",
    borderStyle: "solid",
  },
  titleContainer: {
    fontStyle: "Arial",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginLeft: 10,
  },
  subContainer: {
    fontStyle: "Arial",
    flexDirection: "col",
    // marginLeft: "30%",
  },
  reportGuestDetail: {
    marginTop: 3,
    marginLeft: 3,
    color: "#141518",
    letterSpacing: 1,
    fontStyle: "Arial",
    fontSize: 7.3,
    textAlign: "left",
  },
  reportGuestHeader: {
    marginTop: 10,
    color: "#141518",
    letterSpacing: 1,
    fontStyle: "Arial",
    fontSize: 10,
    textAlign: "left",
    textTransform: "uppercase",
  },
});

const InvoiceNo = ({ invoice }) => (
  <Fragment>
    <View style={styles.guestContainer}>
      <Text style={styles.reportGuestName}>
        Guest Name: {invoice.GuestName}
      </Text>
      <View style={styles.guestAddress}>
        <Text style={styles.reportGuestName}>Address:{invoice.Address}</Text>
      </View>
      <View style={styles.invoiceMobileContainer}>
        <Text style={styles.reportMobileNo}>Mobile No: {invoice.MobileNo}</Text>
      </View>
    </View>

    <View style={styles.titleContainer}>
      <View style={styles.subContainer}>
        <Text style={styles.reportGuestHeader}>Check In:</Text>
        <Text style={styles.reportGuestDetail}>{invoice.CheckIn}</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.reportGuestHeader}>Check Out:</Text>
        <Text style={styles.reportGuestDetail}>{invoice.CheckOut}</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.reportGuestHeader}>Room No:</Text>
        <Text style={styles.reportGuestDetail}>{invoice.RoomNo}</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.reportGuestHeader}>Total Person:</Text>
        <Text style={styles.reportGuestDetail}>{invoice.TotalPerson}</Text>
      </View>
    </View>
    <View style={styles.titleContainer}>
      <View style={styles.subContainer}>
        <Text style={styles.reportGuestHeader}>Booking Id:</Text>
        <Text style={styles.reportGuestDetail}>{invoice.BookingId}</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.reportGuestHeader}>Payment Mode:</Text>
        <Text style={styles.reportGuestDetail}>{invoice.PaymentMode}</Text>
      </View>
    </View>
  </Fragment>
);

export default InvoiceNo;
