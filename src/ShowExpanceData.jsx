import React from 'react'
import { UserContext } from './UserProvider'
import { useContext } from 'react'
export const ShowExpanceData = () => {
   // console.log("expenceData",expenceData)
  const user = useContext(UserContext);
  
  console.log("testshowddata", user)
  return (
        <>
            <section>
                <div className='showDataContainer'>
                  {
                   user.expenceData && user.expenceData.map((items , index)=>{
                        return(
                            <div key={index} className='showDataInnerContainer'>
                                <h3>Product : {items.name}</h3>
                                <h3> Price : {items.amount}</h3>
                            </div>
                           
                        )
                    })
                  }
                </div>
            </section>
        </>
  )
}
