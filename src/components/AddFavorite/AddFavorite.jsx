import React from 'react'
import { IoIosHeart } from "react-icons/io";

const AddFavorite = () => {
  return (
    <>
        <span>Add To Favorites </span>
        <span>
        <IoIosHeart 
        style={{color:"red", fontSize:"18px"}} />
        </span>
    </>
    
  )
}

export default AddFavorite