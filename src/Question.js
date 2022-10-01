import {useParams} from "react-router-dom";
import{doc,getDoc} from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
// import {UnControlled as CodeMirror} from 'react-codemirror2'
function Question(){
    
    let {id}=useParams();
    const [question, setQuestion] = useState([])
    async function getData(){
        let realID=id.slice(1).trim()
        // console.log(id)
        console.log(realID)
        console.log("OYOX5ZPZYQEwy2zPzH9q")
        if(realID==="OYOX5ZPZYQEwy2zPzH9q"){
            console.log("ok")
        }
        const docRef = doc(db, "question", realID);
        const docSnap =await getDoc(docRef);
        console.log(docSnap.data())
        setQuestion(docSnap.data())
    }
    useEffect(() => {  getData() }, [])
    return(
    // 
    <div>
            {/* <CodeMirror
                value='<h1>I ♥ react-codemirror2</h1>'
                options={{
                    mode: 'xml',
                    theme: 'material',
                    lineNumbers: true
                }}
                onChange={(editor, data, value) => {
                }}
            /> */}

        <h1>Title: {question.title}</h1>
        <h1>Description:  {question.description}</h1>
        <h1>Tags: {question.tags}</h1>
    </div>
    )
}
export default Question