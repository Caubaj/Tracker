import React, { use, useEffect, useState } from 'react';


// function App() {
  
//   const [count, setCount] = useState(0);


//   useEffect(() => {
//       console.log("The count is " + count)  

//       //optional return 
//       return () => {
//         console.log("I am being cleaned up!");
//       }
//   }, [count]); //dependency array

//     return (
//       <div className="App">
//        <h1>Count: {count}</h1>
//        <button onClick={() =>{setCount(count + 1)}}>Increment</button>
//        <button onClick={() =>{setCount(count - 1)}}>Decrement</button>
//       </div>
//     );
//   }


function test() {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
      fetch('http://localhost:5000/api/employees')
      .then(response => {
        if(!response.ok)
        {
          console.error("Network response was not ok")
        }
        return response.json();
      })
      .then(data => 
      {
        setEmployees(data);
      })
      .catch(err => {
        console.error('There was an error fetching the employees!', err);
      })
    }, []);

      employees.forEach(employee => {
      console.log(employee)
    });

    return (
      <>
        <h1>Employee Names</h1>
        <h3></h3>
      </>
    );

}

  // function App() {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:5000/api/employees')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json(); 
//       })
//       .then(data => {
//         setEmployees(data); 
//         console.log(data); 
//       })
//       .catch(error => {
//         console.error('There was an error fetching the employees!', error);
//       });
//   }, []); 

   
 
//   return (
//     <div className="App">
     
//     </div>
//   );
// }

export default test;
