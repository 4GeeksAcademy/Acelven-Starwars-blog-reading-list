import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "bootstrap/dist/css/bootstrap.css";
// import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CardComponent from "../component/CardComp";
import CardPlanets from "../component/CardPlanets";
import CardSpecies from "../component/CardSpecies";


export const Home = () => {
  const { store, actions } = useContext(Context)
  return (
    <div>
      <div>
        <h1>People</h1>
        <div className="dataRow">
          {store.people.slice(0, 10).map((character, index) => {
            return (
              <div key={index}>
                <CardComponent character={character} image={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`}
                  details={`/details/${index + 1}`}
                  addFavorites={<p className="btn favorite" onClick={() => { actions.setFavorites(character.name) }}>★</p>}

                />
              </div>
            )
          })}
        </div>
      </div>
      <div>
        <h1>Planets</h1>
        <div className="dataRow">
          {store.planets.slice(1, 11).map((planets, index) => {
            return (
              <div key={index}>
                <CardPlanets planets={planets} image={`https://starwars-visualguide.com/assets/img/planets/${index + 2}.jpg`}
                  details={`/detailsPlanets/${index + 2}`}
                  addFavoritesPlanets={<p className="btn favorite" onClick={() => { actions.setFavorites(planets.name) }}>★</p>}
                />
              </div>
            )
          })}
        </div>
      </div>
      <div>
        <h1>Species</h1>
        <div className="dataRow">
          {store.species.slice(0, 10).map((species, index) => {
            return (
              <div key={index}>
                <CardSpecies species={species} image={`https://starwars-visualguide.com/assets/img/species/${index + 1}.jpg`}
                  details={`/DetailsSpecies/${index + 1}`}
                  addFavoritesSpecies={<p className="btn favorite" onClick={() => { actions.setFavorites(species.name) }}>★</p>}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )

}