import React, { useRef, useContext} from 'react'
import {UserContext} from './UserProvider'

export const AddExpence = () => {
  //UserContext
  const user  = useContext(UserContext);
  console.log("testforexpenxce", user)
    //useRef
    const nameRef = useRef(null);
    const amountRef = useRef(0);
  return (
    <>
        <section >
            <h1>Add Expenses</h1>
            <div className='expenceAddContainer'>

            <label htmlFor='name'>Name :</label>
            <input type='text' placeholder='Product Name' id='name' ref={nameRef}/>
            <label htmlFor='amount'>Amount : </label>
            <input type='number' placeholder='enter amount' ref={amountRef}/>
            <button onClick={()=>{
                // const name = nameRef.current.value;
                // const amount = amountRef.current.value;
                const name = (nameRef.current.value)
                const amount= parseInt(amountRef.current.value)
                user.setExpenceData((previousData)=>{
                   return [...previousData , {name ,amount}]
                })
                //remaningBalance Set
                user.setRemaning((prevoius)=>{
                    if(prevoius === 0){
                      alert("You have spent your all money !");
                      return 0
                    }
                    return(prevoius-amount);
                })
                //spendd so far
                user.setSpent((prevoius)=>{
                    return(prevoius+amount);
                })
            }}>Save</button>

            </div>
        </section>
    </>
  )
}
