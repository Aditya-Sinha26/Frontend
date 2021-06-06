import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState } from 'react'
import "./Modal.css";
import axios from "../../axios";

const upload = async (file, caption, event, closeModal) => {
    const formData = new FormData()
    formData.append('file', file);
    formData.append('caption', caption);
    formData.append('username', 'test');
    event.preventDefault();
    // console.log(file);
    await axios.post('/post/add', formData);
    closeModal();
}

const UploadModal = (props) => {
        
        const [file, setFile]= useState(null);
        const [caption, setCaption] = useState("");
        
        return (
        <>
            <Modal isOpen={props.modal.show} toggle={props.closeModal}>
                <ModalHeader toggle={props.closeModal}>{props.modal.caption ? "Add Post" : "Change Profile Pic"}</ModalHeader>
                <ModalBody>
                    <div className="mb-3">
                        <input 
                            onChange={(event) => setFile(event.target.files[0])} 
                            className="form-control" 
                            type="file"
                        />
                    </div>
                    {props.modal.caption && 
                    <textarea 
                        className="form-control" 
                        rows="3" 
                        placeholder="Caption" 
                        onChange={(event) => setCaption(event.target.value)}
                        value={caption}
                    />}
                </ModalBody>
                <ModalFooter>
                <Button 
                    color="primary" 
                    onClick={(event) => upload(file, caption, event, props.closeModal)}>
                    Add
                </Button>{' '}
                <Button color="secondary" onClick={props.closeModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}


export default UploadModal;