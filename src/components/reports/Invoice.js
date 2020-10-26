import React from "react";
import { Page, Document, Image, StyleSheet } from "@react-pdf/renderer";
import InvoiceTitle from "./InvoiceTitle";
import BillTo from "./BillTo";
import InvoiceNo from "./InvoiceClient";
import InvoiceItemsTable from "./InvoiceItemsTable";
import InvoiceThankYouMsg from "./InvoiceThankYouMsg";
import logo from "../../../src/logo.png";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: "column",
  },
  logo: {
    width: 74,
    height: 66,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const Invoice = ({ invoice }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <InvoiceTitle title="Oyo invoice" invoice={invoice} />
      <InvoiceNo invoice={invoice}></InvoiceNo>
      <InvoiceItemsTable invoice={invoice} />
      <InvoiceThankYouMsg></InvoiceThankYouMsg>
    </Page>
  </Document>
);

export default Invoice;
