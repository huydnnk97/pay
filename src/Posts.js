import { useState, useEffect } from "react";
import {
    getDocs,
    collection,
    deleteDoc,
    doc
} from "firebase/firestore";
import ReactMarkdown from "react-markdown";
	
import remarkGfm from "remark-gfm";
import { db } from "./firebase-config";
function Posts() {
    const [post, setPost] = useState([])
    const [currentPost,setCurrentPost]=useState("")
    const getPost = async () => {
        const data = []
        const colRef = collection(db, "article");
        const docsSnap = await getDocs(colRef);
        docsSnap.forEach(doc => {
            let item = doc.data()
            item.id = doc.id
            data.push(item)

        })
        return data

    }
    async function changes() {
        const a = await getPost()
        setPost(a)
        setCurrentPost(a[0])

    }

    const markdown=`![](https://commonmark.org/help/images/favicon.png)
### ${currentPost.abstract}
## ${currentPost.articleText}
${currentPost.title}

**${currentPost.tags}**

    `;
    useEffect(() => {  changes() }, [])
    return (<div>
        <ul>
        {
        post.map((row) => {
          return( 
            <li onClick={()=>{setCurrentPost(row)}}>{row.abstract}</li>
            )
        })
        }
        </ul>   
        <span>
        {currentPost&&<ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]}></ReactMarkdown>}
        </span>
    </div>)
}
export default Posts 