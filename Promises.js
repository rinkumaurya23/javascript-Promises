// fetch('http://Google.com')
// .then()
// .catch()
// .finally()

// how to make promise 
// ****************************************
const promises1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
       console.log("Async task is complete")
       resolve()
    },1000);
   })
   
   promises1.then(()=>{
       console.log("promises Consumer")
   })
   
   // ****************************************
   
   new Promise((resolve,reject)=>{
       setTimeout(() => {
         console.log("Async task 2 ");  
         resolve()
       },1000);
   
   }).then(()=>{
       console.log("Async 2 Resolve ")
   })
   
   // ****************************************
   
   const promisesThree = new Promise((resolve,reject)=>{
       setTimeout(() => {
           resolve(
               {username:"coffee",
               email:"itrinku@gmail.com",
               Age:23}
           )
       },1000);
   })
   promisesThree.then((user)=>{
   console.log(user)
   })
   
   // ****************************************
   
   const promiseFour = new Promise((res,rej)=>{
       setTimeout(()=>{
     let error = false
     if(!error){
       res({username:'Abhi',password:123})
     }else {
       rej('ERROR Something went wrong')
     }
       },2000)
   })
   promiseFour
   .then((user)=>{
       console.log(user);
       return user.username
   
   })
   .then((username)=>{
       console.log(username)
   
   })
   .catch((error)=>{
       console.log(error)
   }).finally(()=>{
       console.log("the Promises is either or rejected ")
   })
   
   // ****************************************
   
   const promisesFive = new Promise((res,rej)=>{
       setTimeout(()=>{
           let error = true
             if(!error){
               res({username:'js',password:123})
             }else {
               rej('ERROR JS went wrong')
             }
       },1000)
   });
   // ****************************************
   
   async function consumePromiseFive(){
   try {
       const response = await  promisesFive
       console.log(response)
   } catch (error) {
       console.log(error)
   }
    }
   
   consumePromiseFive()