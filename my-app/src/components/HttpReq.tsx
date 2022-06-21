import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'

const HttpReq = () => {

  const [data, setData] = useState<any[]>()


  const getDataAxios = useCallback( async() =>{
    try {
    let response: {
      data: any[]
    } = await axios.get('https://jsonplaceholder.typicode.com/posts')
     console.log(response.data)
    setData(response.data)


    } catch (error) {
      console.log("ERROR",error)

    }

  },[])


  const getDataFetch = useCallback( async() =>{
    try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let resp = await response.json()
     console.log(resp)
    setData(resp)


    } catch (error) {
      console.log("ERROR",error)

    }

  },[])

  useEffect (() => {
    console.log("EFFECTED")
    // getDataAxios();
    getDataFetch();
  },[])


  useEffect (() => {
    console.log("DATA EFFECTED")
  },[data])





  return (
    <div>
      <h1>HTTP REQUEST</h1>
      <button onClick={getDataAxios}><h3>REFETCH DATA</h3></button>

      {data && data.map((post,index)=>( <div key ={post.id}><div >{post.body}</div>
      <span style={{
        padding: '20px'
      }
      }> ------------------------</span>
      </div>  ))}
    </div>
  )
}

export default HttpReq
