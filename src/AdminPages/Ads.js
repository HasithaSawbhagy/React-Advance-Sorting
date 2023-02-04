import { db } from "../firebase.config"
import { useState, useEffect } from "react"
import { collection, onSnapshot, doc, addDoc, deleteDoc } from "firebase/firestore"

function Ads() {


    const [AdData_Collection, setAds] = useState([])
    const [popupActive, setPopupActive] = useState(false)
    const adData_CollectionRef = collection(db, "AdData_Collection")
  
    useEffect(() => {
      onSnapshot(adData_CollectionRef, snapshot => {
        setAds(snapshot.docs.map(doc => {
          return {
            id: doc.id,
            viewng: false,
            ...doc.data(),
          }
        }))
      })
    })

    const handleSubmit = e => {
        e.preventDefault()
        setPopupActive(false)
        alert("Data sent succecfully")
      }
  
    return (
        <div className="App">
          <h1><i>Voasiz (PVT) LTD</i></h1>

          <div className="ads">
          <h2>Pending Ads</h2>
            {AdData_Collection.map((ads, i) =>(
              <div className="recipes">
                <p> { ads.Adname }</p>
              </div>
            ))}
            <button onClick={() => setPopupActive(!popupActive)}>View</button>
          </div>

          {popupActive && <div className = "popup">
            <div className = "popup-inner" img src = "">
            <form onSubmit={handleSubmit}>
               <h2>Review Advertisment</h2>
               <hr></hr><br></br>
                 <img src = "https://images.pexels.com/photos/15115073/pexels-photo-15115073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Flight" width = "99%" height= "95%"></img>  
                    <br></br><br></br><hr></hr>          
                     <div className = "buttons">
                       <button type = "submit">Approve</button>
                       <button type = "button" class="remove" onClick={() => setPopupActive(false)}>Reject</button>    
                     </div>
                   </form>
            </div>
          </div>}
        </div>
      );
}

export default Ads;