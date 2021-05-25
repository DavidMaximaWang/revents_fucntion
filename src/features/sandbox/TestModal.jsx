import React from 'react';
// import ModalManger from '../../app/common/modals/modalManager';
import ModalWrapper from '../../app/common/modals/ModalWrapper';
export default function TestModal({ data }) {
  return (
    <ModalWrapper size='mini' header='Test Modal'>
      <div>The data is: {data}</div>
    </ModalWrapper>
  );
}
