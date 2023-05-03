import React, { useState } from "react";
import Modal from "../pages/modal";
import About from "../pages/About";

const ShowModal = () => {
  const [visible, setVisible] = useState(false);
  const handleOk = () => {
    setVisible(false);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <>
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
