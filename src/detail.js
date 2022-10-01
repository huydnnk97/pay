import React, { useState } from "react";
import './detail.css'
import { db } from "./firebase-config";
import { storage } from "./firebase-config"
import { v4 } from "uuid";
import {
    collection,
    addDoc
} from "firebase/firestore";
import {
    ref,
    uploadBytes
} from "firebase/storage";
import ReactMarkdown from "react-markdown";
	
import remarkGfm from "remark-gfm";

function Detail(props) {
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");
    const [abstract, setAbstract] = useState("");
    const [articleText, setArticleText] = useState("");
    const [imageUpload, setImageUpload] = useState("");
    async function addImage() {
        console.log(imageUpload)
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload)
    }
    function upLoadFile(){
        document.getElementById("upFile").click()
    }
    async function addQuestion(){
        
        const usersCollectionRef = collection(db, "question");
        await addDoc(usersCollectionRef, { title: title, description:description,tags:tags,time:Date().toLocaleString()});
    }
    async function addArticle(){
        const usersCollectionRef = collection(db, "article");
        await addDoc(usersCollectionRef, { title: title, image:imageUpload.name,abstract:abstract,articleText:articleText,tags:tags});
    }

    if (props.choosen === true) {
        return (
            <div>

                <div className="col-25">
                    <label className="b">Title</label>
                </div>
                <div className="col-75">
                    <input className="a" onChange={(event)=>{setTitle(event.target.value)}}></input>
                </div>

                <label>
                    Describe your problem
                </label>
                <input className="input2" onChange={(event)=>{setDescription(event.target.value)}}></input>
                <div>
                    <label>
                        Tags
                    </label>
                </div>

                <input className='input3' onChange={(event)=>{setTags(event.target.value)}}></input>
                <button onClick={()=>{addQuestion()}}>Post</button>
            </div>


        )
    }
    else {
        return (
            <div>
                
                <div className="col-25">
                    <label className="b">Title</label>
                </div>
                <div className="col-75" >
                    <input className="a" onChange={(event)=>{setTitle(event.target.value)}}></input>
                </div>
                <div>

                    <label>Add an image</label>
                    
                        <input type="file" id="upFile" onChange={(event) => {
                            setImageUpload(event.target.files[0]);

                        }} style={{ display:"None" }}></input>
                        
                    <input placeholder={imageUpload.name} style={{marginLeft:20,marginRight:20}}></input>
                    <button onClick={upLoadFile}>Browse</button>
                    

                    <button onClick={() => { addImage() }}>Upload</button>
                
                    {imageUpload&&<img src={URL.createObjectURL(imageUpload)}></img>}
                    <></>
                    
                </div>
                <label>
                    Abstract
                </label>
                <input className="input3" onChange={(event)=>{setAbstract(event.target.value)}}></ input>

                <label>
                    Article Text
                </label>
                <input className="input2" onChange={(event)=>{setArticleText(event.target.value)}}></input>
                <div>
                    <label>
                        Tags
                    </label>
                </div>

                <input className='input3'onChange={(event)=>{setTags(event.target.value)}}></input>
                <button onClick={()=>{addArticle()}}>Post</button>
            </div>


        )
    }
}

export default Detail