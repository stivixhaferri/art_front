'use client'
import React , {useState , useEffect} from 'react'
import axios from 'axios'

const Auth = ({token}) => {

    const getData = async () => {
        try{
            const res = await axios.post('')
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    })

  return (
    <div>Auth</div>
  )
}

export default Auth