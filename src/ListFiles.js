import "./App.css";
import { useState, useEffect } from "react";
import {
  getDocs,
  collection,
  deleteDoc,
  doc
} from "firebase/firestore";

import { db } from "./firebase-config";

import { Card,Button } from "semantic-ui-react";
import { useNavigate } from 'react-router-dom';

function ListFiles() {
  const navigate =  useNavigate();
  const [question, setQuestion] = useState([])
  const getQuestion = async () => {
    const data = []
    const colRef = collection(db, "question");
    const docsSnap = await getDocs(colRef);  
    docsSnap.forEach(doc => {
      let item=doc.data()
      item.id=doc.id
      data.push(item)
 
    })
    return data
      
  }
  async function changes() {
    const a = await getQuestion()
    setQuestion(a)
    
  }
  // changes()
  useEffect(() => {  changes() }, [])
  const filter =function (word){
    if(!word){
      changes()
    }else{
    const a=[]
    question.forEach((q)=>{
      if(q.title.includes(word)||q.time?.includes(word)){
        a.push(q)
      }
    })
    
    setQuestion(a)}
  }
  return (
    <div >
      <input style={{margin:20}} onChange={(event)=>{filter(event.target.value)}}></input>
      
      <Card.Group itemsPerRow={3}>
      {
        question.map((row) => {
          return( 
            
          <Card >
            
          <Card.Content onClick={()=>{navigate(`/questions/ ${row.id} `)}} header={row.title} />
          <Card.Content description={row.description} />
          <Card.Content description={row.tags}/>
          <Card.Content description={row.time}></Card.Content>  
          <Button onClick={()=>{ deleteDoc(doc(db, "question", row.id),changes());
            
            }}>Delete</Button>
        </Card>)
        })
      }
      </Card.Group>
      
    </div>
  );

}

export default ListFiles;