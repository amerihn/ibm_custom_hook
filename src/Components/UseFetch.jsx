import { useEffect, useState } from "react";

const UseFetch = (url) => {
   const[data,setData]=useState();
   useEffect(() =>{
      fetch(url) //This initiates an HTTP request to the specified url.
      .then((res) => res.json()) //This converts the response from the server to JSON format.
      .then((data) => setData(data)) //This sets the retrieved data to the state variable data.
   },
   []);
   return [data];
}

export default UseFetch
