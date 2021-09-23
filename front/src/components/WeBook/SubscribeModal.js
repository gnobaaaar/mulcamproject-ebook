import React, {useState} from 'react';
import {Button, FormControl, Modal, Container, Form} from 'react-bootstrap';

function SubscribeModal(props) {
  return (
        <div className="container">
            <div className="LoginLogin" >
                <Modal
                    show={props.show}
                    onHide={props.onHide}
                    size="m"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>과목의 수강을 신청하시겠습니까?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Button variant="secondary" size="lg" style={{margin: '0px 100px 0px 100px'}}>취소</Button>
                        <Button variant="primary" size="lg">수강신청</Button>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
  );
}

export default SubscribeModal;
