import React, { useEffect, useState } from 'react'
import './App.css'

export default function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    let url = 'http://localhost:3000/posts'
    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result, 'Get Successful✅✅✅✅✅✅')
        setData(result)
      })
      .catch((error) => {
        console.log(error, 'Get Errored❌❌❌❌❌❌')
      })
  }, [])

  return (
    <div>
      {data.length ? (
        <>
          <h1>{data[0].author}</h1>
          <h2>{data[0].body}</h2>
          <div className='like-share'>
            <h4>👍🏽{data[0].like}</h4>
            <h4> &nbsp;&nbsp;||&nbsp;&nbsp; </h4>
            <h4>📤{data[0].share}</h4>
          </div>
          <hr />
          <div className='comment-box'>
            <strong className='label'>Comments =</strong>

            {data[0]?.comments.map((item) => (
              <div key={item.id}>
                <h5>{item.author}</h5>
                <h5>{item.body}</h5>
                {/* <pre>{JSON.stringify(item.replies, null, 2)}</pre> */}

                <div className='replies-box'>
                  <strong className='label'>Replies =</strong>
                  {item.replies?.map((replies) => (
                    <div key={replies.id}>
                      <h6>{replies.author}</h6>
                      <h6>{replies.body}</h6>
                      <h6>{replies.like}</h6>
                    </div>
                  ))}
                  <hr />
                </div>
              </div>
            ))}
          </div>

          <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
      ) : (
        'Loading.....'
      )}
    </div>
  )
}
