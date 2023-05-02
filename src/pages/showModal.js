import React, { useState } from "react";
import Modal from "../pages/modal";
import About from "../pages/About";

const ShowModal = () => {
  const [visible, setVisible] = useState(false);
  const handleOk = (e) => {
    setVisible(false);
  };
  const handleCancel = (e) => {
    setVisible(false);
  };
  return (
    <>
      {/* <button onClick={() => setVisible(true)}>Show About Modal</button> */}
      <Modal
        title="About"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <About />
      </Modal>
    </>
  );
};

export default ShowModal;
