import React from 'react';
import { useSelector } from 'react-redux';
import Login from '../../../features/auth/Login';
import TestModal from '../../../features/sandbox/TestModal';

export default function ModalManger(){
  const  modalLookup = {
    TestModal,
    Login
  }
  const currentModal = useSelector(state=>state.modals);
  let renderedModal;
  if(currentModal){
    const {modalType, modalProps} = currentModal;
    const ModalComponent = modalLookup[modalType];
    renderedModal = <ModalComponent {...modalProps}/>
  }
  return <span>{renderedModal}</span>
}

