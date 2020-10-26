import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    marginTop: 24,
  },
  addressContainer: {
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 4,
  },
  reportTitle: {
    color: "#336546",
    letterSpacing: 4,
    fontStyle: "Arial",
    fontSize: 15,
    textAlign: "left",
    textTransform: "uppercase",
    fontWeight: "bold",
    wordBreak: "break-all",
    width: "40%",
    // marginRight: "",
  },
  reportAddress: {
    color: "#336546",
    letterSpacing: 1.5,
    fontStyle: "Arial",
    fontSize: 6,
    textAlign: "left",
    textTransform: "uppercase",
    border: "0px solid #000000",
    wordBreak: "break-all",
    width: "40%",
  },
  reportGst: {
    color: "#336546",
    letterSpacing: 1.5,
    fontStyle: "Arial",
    fontSize: 7,
    textAlign: "left",
    width: "40%",
  },
  invoiceNoContainer: {
    color: "#336546",
    fontStyle: "Arial",
    flexDirection: "row",
    marginTop: 2,
    marginLeft: "40%",
    justifyContent: "flex-end",
  },
  invoiceDateContainer: {
    color: "#336546",
    fontStyle: "Arial",
    flexDirection: "row",
    marginLeft: "40%",
    justifyContent: "flex-end",
  },
  invoiceDate: {
    color: "#336546",
    fontStyle: "Arial",
    fontSize: 12,
    fontStyle: "bold",
  },
  label: {
    color: "#336546",
    width: 60,
    fontStyle: "Arial",
  },
});

const InvoiceTitle = ({ title, invoice }) => (
  <>
    <View style={styles.titleContainer}>
      <Text style={styles.reportTitle}>{title}</Text>
      <View style={styles.invoiceNoContainer}>
        <Text style={styles.label}>Invoice No:</Text>
        <Text style={styles.invoiceDate}>{invoice.InvoiceNo}</Text>
      </View>
    </View>
    <View style={styles.addressContainer}>
      <Text style={styles.reportAddress}>
        1/u82, trl nt, kamaihihbhbkoti najgjkkar 10jnth Streenbmjbt, karan8hhai,
        xxxxxx-xxxx00. +91 96780-xxxxx
      </Text>
      <View style={styles.invoiceDateContainer}>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.invoiceDate}>{invoice.Date}</Text>
      </View>
    </View>
    <View style={styles.addressContainer}>
      <Text style={styles.reportGst}>GSTIN:xxxxxxxxxxxxxxxxx</Text>
    </View>
  </>
);

export default InvoiceTitle;
