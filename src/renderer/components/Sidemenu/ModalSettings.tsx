import { Button, Modal } from 'antd';
import React, { useState } from 'react';

export default function ModalSettings({ t, settingModal, setSettingModal }) {
  const showModal = () => {
    setSettingModal({
      loading: false,
      visible: true,
    });
  };

  const handleOk = () => {
    setSettingModal({ loading: true });
    setTimeout(() => {
      setSettingModal({ loading: false, visible: false });
    }, 3000);
  };

  const handleCancel = () => {
    setSettingModal({ visible: false });
  };

  return (
    <Modal
      visible={settingModal.visible}
      title={t('home.settings')}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Return
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={settingModal.loading}
          onClick={handleOk}
        >
          Submit
        </Button>,
        <Button
          key="link"
          href="https://google.com"
          type="primary"
          loading={settingModal.loading}
          onClick={handleOk}
        >
          Search on Google
        </Button>,
      ]}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
}
