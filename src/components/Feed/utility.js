import firebase from "../../firebase";
import axios from 'axios';

export const addPost = (event, file, caption, userId) => {
    event.preventDefault();
    var metadata = {
        contentType: 'image/jpeg'
    };

    var storageRef = firebase.storage().ref();

    var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
                console.log('Upload is paused');
                break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
                console.log('Upload is running');
                break;
            default:
                break
        }
    }, 
    (error) => {
        console.log(error);
        switch (error.code) {
            case 'storage/unauthorized':
                break;
            case 'storage/canceled':
                break;
            default:
                break
            case 'storage/unknown':
                break;
        }
    }, 
    () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log('File available at', downloadURL);
            const data={
                username: userId,
                date: new Date(),
                downloadUrl: downloadURL,
                caption: caption
            }

        axios.post("http://localhost:9000/addPost",data)
        .then(res=>{
            console.log(res);
        })
    });   
});
}