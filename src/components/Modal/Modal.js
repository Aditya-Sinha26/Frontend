import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./Modal.css";

const UploadModal = (props) => {
    
        return (<>
            <Modal isOpen={props.show} toggle={props.closeModal}>
                <ModalHeader toggle={props.closeModal}>Add Post</ModalHeader>
                <ModalBody>
                {props.children}
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={props.upload}>Add</Button>{' '}
                <Button color="secondary" onClick={props.closeModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>);
}


export default UploadModal;