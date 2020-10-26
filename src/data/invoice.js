const invoice = {
  id: "template",
  Address: "-",
  InvoiceNo: "1",
  Date: "-",
  GuestName: "-",
  CheckIn: "-",
  CheckOut: "-",
  MobileNo: "-",
  RoomNo: "-",
  BookingId: "-",
  PaymentMode: "-",
  TotalPerson: "-",
  gst: 0,
  items: [{
      sno: 1,
      desc: "Room",
      qty: 0,
      rate: 0,
    },
    {
      sno: 2,
      desc: "Early CheckIn",
      qty: "-",
      rate: 0,
    },
    {
      sno: 3,
      desc: "Late CheckOut",
      qty: "-",
      rate: 0,
    },
    {
      sno: 4,
      desc: "Food",
      qty: "-",
      rate: 0,
    },
    {
      sno: 5,
      desc: "Broken and Other Charges",
      qty: "-",
      rate: 0,
    },
  ],
};

export default invoice;