import React, { useState, useEffect } from "react"
import axios from 'axios'; 

export default function restaurantApi () {
    const [rest, setRest] = useState([]);
    const getData = () => {
      axios.get('http://localhost:5000/rest')
    .then(function (response) {
      console.log(response.data);
      setRest(response.data);
      });
    }
  
    useEffect(() => {
      getData();
    }, [])
    console.log('rest', rest);
  
    return {
      rest,
    }
  }