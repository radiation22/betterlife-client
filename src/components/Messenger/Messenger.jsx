import React from "react";
import { FacebookProvider, MessageUs } from "react-facebook";
import MessengerCustomerChat from "react-messenger-customer-chat";
import CardSlide from "./../Card/CardSlide";
const Messenger = () => {
  const customStyles = {
    backgroundColor: "#05A541", // Change this to your desired background color
  };
  return (
    <MessengerCustomerChat
      customStyles={customStyles}
      pageId="110801313684831"
      appId="316443014628235"
      themeColor={"#9EDD2A"}
    />
  );
};

export default Messenger;
