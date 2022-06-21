import axios from 'axios'
import React, { useState } from 'react'

const PostDataHttp = () => {

  // const [userId, setUserId] = useState('')
  // const [title, setTitle] = useState('')
  // const [body, setBody] = useState('')
  const [data, setData] = useState({
    userId:'',
    title: '',
    body: '',
  })

  const handleChangeData = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const name = e.target.name;
    const value = e.target.value;

    setData({...data,[name]:value})
  }


  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    try {
      const {userId,title,body} = {...data}
      const post = {
        userId,
        title,
        body
      }

      let response: {
        data: any[]
      } = await axios.post('https://jsonplaceholder.typicode.com/posts',post)
       console.log(response)

    } catch (error) {

    }



  }

  return (
    <div><h1>PostDataHttp</h1>

    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor="userId"></label>
      <input type="text" name='userId' value={data.userId} onChange = {(e) => handleChangeData(e)}/>
      </div>
      <span style={{
        padding: '20px'
      }
      }></span>
      <div  >
        <label htmlFor="title"></label>
      <input type="text" name='title' value={data.title} onChange = {(e) => handleChangeData(e)}/>

      </div>
      <span style={{
        padding: '20px'
      }
      }></span>
      <div>
        <label htmlFor="body"></label>
      <input type="text" name='body' value={data.body} onChange = {(e) => handleChangeData(e)}/>
      </div>
      <span style={{
        padding: '40px'
      }
      }></span>
      <div>
      <button type="submit">POST DATA</button>
      </div>
    </form>
    </div>
  )
}

export default PostDataHttp
