import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    marginTop: "5%",
  },
  title2Container: {
    flexDirection: "row",
    marginTop: "3%",
  },
  signatureContainer: {
    flexDirection: "row",
    marginTop: "30%",
  },
  reportTitle: {
    fontSize: 12,
    textAlign: "center",
    // textTransform: "uppercase",
  },
  reportAdvance: {
    fontSize: 9,
    textAlign: "center",
    // textTransform: "uppercase",
  },
  reportBold: {
    fontSize: 11,
    fontWeight: "bolder",
  },
  reportCustomerSignature: {
    flexDirection: "row",
    justifyContent: "flex-start",
    fontSize: 10,
    width: "83%",
    // fontWeight: "bolder",
  },
  reportAuthoritySignature: {
    fontSize: 10,
    // marginLeft: "40%",
    flexDirection: "row",
    justifyContent: "flex-end",
    // textAlign: "center",
    // textTransform: "uppercase",
  },
});

const InvoiceThankYouMsg = () => (
  <>
    <View style={styles.titleContainer}>
      <Text style={styles.reportTitle}>
        We Are Honoured To Have You As Our Guest
      </Text>
    </View>
    <View style={styles.title2Container}>
      <Text style={styles.reportAdvance}>
        For advance booking call us or whatsapp on
        <Text style={styles.reportBold}> 9600023667 / 9789031297</Text>
      </Text>
    </View>
    <View style={styles.signatureContainer}>
      <Text style={styles.reportCustomerSignature}>Customer Signature </Text>
      <Text style={styles.reportAuthoritySignature}>Authorised  Signature</Text>
    </View>
  </>
);

export default InvoiceThankYouMsg;
