import { db } from "./firebase.config"
import { useState, useEffect } from "react"
import { collection, onSnapshot, doc, addDoc, deleteDoc, query, orderBy, where } from "firebase/firestore"

function App() {

  const [GamesCollection, setGames] = useState([])
  const [subadmin, setAdmins] = useState([])
  const [AdData_Collection, setAds] = useState([])
  const [ComplainCollection, setComp] = useState([])

  const [form, setForm] = useState({
    Name: "",
    Rank: "",
    Game_Id: "",
  })

  const [popupActive, setPopupActive] = useState(false)
  const gamesCollectionRef = collection(db, "GamesCollection")
  const setAdminsRef = collection(db, "subadmin")
  const adData_CollectionRef = collection(db, "AdData_Collection")
  const complainCollectionRef = collection(db, "ComplainCollection")

//Sorting Data
  const q = query(gamesCollectionRef, orderBy("Rank"));
  const a = query(collection(db, "AdData_Collection"), where("Status", "==", "Pending"))


  useEffect(() => {
    onSnapshot(q, snapshot => {
      setGames(snapshot.docs.map(doc => {
        return {
          id: doc.id,
          viewng: false,
          ...doc.data(),
        }
      }))
    })
  })

  useEffect(() => {
    onSnapshot(setAdminsRef, snapshot => {
      setAdmins(snapshot.docs.map(doc => {
        return {
          id: doc.id,
          viewng: false,
          ...doc.data(),
        }
      }))
    })
  })

  useEffect(() => {
    onSnapshot(a, snapshot => {
      setAds(snapshot.docs.map(doc => {
        return {
          id: doc.id,
          viewng: false,
          ...doc.data(),
        }
      }))
    })
  })

  useEffect(() => {
    onSnapshot(complainCollectionRef, snapshot => {
      setComp(snapshot.docs.map(doc => {
        return {
          id: doc.id,
          viewng: false,
          ...doc.data(),
        }
      }))
    })
  })



  return (
    <div className="App">
      <h1><i>Voasiz (PVT) LTD</i></h1>


      <div className="recipe">
        <div className = "Heading">
          <h2>Treding Games</h2>
        </div>
             {GamesCollection.map((game, i) =>(
              <div className = "recipes" key = {game.id}>
                <p> { game.Name }    Rank:  {game.Rank}</p>
              </div>
             ))}
        <div className = "button">
        <button> View { q.viewing ? 'less' : 'more'}</button>
        </div>
      </div>


      <div className="recipe">
      <h2>Admins</h2>
        {subadmin.map((admin, i) =>(
          <div className="recipes">
            <p> { admin.AdminName } </p>
          </div>
        ))}
        <div className = "button">
          <button> View More </button>
        </div>
      </div>


      <div className="recipe">
      <h2>Pending Ads</h2>
        {AdData_Collection.map((ads, i) =>(
          <div className="recipes">
            <p> { ads.Adname }   Status:  { ads.Status }</p>
          </div>
        ))}
        <div className = "button">
          <button onClick > View More</button>
        </div>
      </div>


      <div className="recipe">
      <h2>Customer Feedback & Complains</h2>
        {ComplainCollection.map((comp, i) =>(
          <div className="recipes">
            <p> { comp.Title } </p>
          </div>
        ))}
        <div className = "button">
          <button onClick > View More</button>
        </div>
      </div>

    </div>
  );
}

export default App;
