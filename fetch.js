// ****************************************

async function getAllUser(){
    try {
       const response = await fetch('https://api.github.com/users/rinkumaurya23')
       const data = await response.json()
       console.log(data)
       console.log("Async")
       
    } catch (error) {
       console.log("ERROR:-",error)
       
    } 
   }
   getAllUser()
   
   
   // ****************************************
   
   // Promises
   
   
   fetch('https://api.github.com/users/rinkumaurya23')
   .then(( response)=>{
       return response.json()
   })
   .then((data)=>{
       console.log(data)
   
   })
   .catch((error)=>{
       console.log("ERR ",error)
   
   })