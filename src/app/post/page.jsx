import React from 'react'
import { cookies } from 'next/headers'
import PostForm from '../(components)/PostForm'

const page = () => {

    const cookieStore = cookies()
    const theme = cookieStore.get('jwt');
    const token = theme && theme.value;


  return (
   <PostForm  token={token && token} />
  )
}

export default page