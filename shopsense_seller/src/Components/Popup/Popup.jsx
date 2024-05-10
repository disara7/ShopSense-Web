import React, { useState } from "react";
import "./Popup.css";
import PlaceOrder from "../../AdminSide/adminComponents/Place Order/PlaceOrder";

export default function Popup() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const openPdfInNewTab = () => {
    const pdfUrl = "./Invoice.pdf";

    window.open(pdfUrl, "_blank");
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Action
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Place Order</h2>
            <PlaceOrder />
            <div className="ButtonHolderPopUp">
              <button>All Document</button>
              <button onClick={openPdfInNewTab}>Invoices</button>
              <button>Shipping Leble</button>
              <button>Ready to ship</button>
            </div>
            <button className="close-modal" onClick={toggleModal}>
              ❌
            </button>
          </div>
        </div>
      )}
    </>
  );
}
