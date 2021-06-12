import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState } from 'react'
import "./Modal.css";
import axios from "../../axios";
import ImageCropper from "../ImageCropper/ImageCropper";

const upload = async (file, caption, event, closeModal, path, updatedProfile) => {
    const formData = new FormData()
    formData.append('file', file);
    formData.append('caption', caption);
    formData.append('username', 'test');
    event.preventDefault();
    // console.log(file);
    await axios.post(path, formData);
    await updatedProfile();
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
                    <ImageCropper 
                        uploadFile={image => {setFile(image)}}
                    />
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
                    onClick={(event) => upload(file, caption, event, props.closeModal, props.modal.caption ? '/post/add' : '/user/edit', props.updatedProfile)}>
                    Add
                </Button>{' '}
                <Button color="secondary" onClick={props.closeModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}


export default UploadModal;