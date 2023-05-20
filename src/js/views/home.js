import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "bootstrap/dist/css/bootstrap.css";
// import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CardComponent from "../component/CardComp";


export const Home = () => {
  const { store, actions } = useContext(Context)
  return (
    <div>
      <div>
        <h1>People</h1>
        <div className="dataRow">
          {store.people.slice(0, 5).map((character, index) => {
            return (
              <div key={index}>
                <CardComponent character={character} />
              </div>
            )
          })}
        </div>
      </div>
      <div>
        <h1>Planets</h1>
        <div className="dataRow"></div>
      </div>
      <div>
        <h1>Vehicles</h1>
        <div className="dataRow"></div>
      </div>
    </div>
  )

}