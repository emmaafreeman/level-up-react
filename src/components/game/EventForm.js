import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { EventContext } from "./EventProvider.js";


export const EventForm = () => {
  const { getEvents, events, createEvent, setEvents, getGames, games, setGames } = useContext(EventContext);

  const history = useHistory();
  const [currentEvent, setCurrentEvent] = useState({
    gameId: "",
    description: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    getEvents();
  }, []);

  useEffect(() => {
    getGames();
  }, []);

  const changeGameState = (event) => {
    const newEventState = { ...currentEvent };
    newEventState.gameId = event.target.value;
    setCurrentEvent(newEventState);
  };

  const changeDescriptionState = (event) => {
    const newEventState = { ...currentEvent };
    newEventState.description = event.target.value;
    setCurrentEvent(newEventState);
  };

  const changeDateState = (event) => {
    const newEventState = { ...currentEvent };
    newEventState.date = event.target.value;
    setCurrentEvent(newEventState);
  };

  const changeTimeState = (event) => {
    const newEventState = { ...currentEvent };
    newEventState.time = event.target.value;
    setCurrentEvent(newEventState);
  };

  return (
    <form className="gameForm">
      <h2 className="gameForm__title">Schedule New Event</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="gameId">Game: </label>
          <select
            name="gameId"
            className="form-control"
            value={currentEvent.gameId}
            onChange={changeGameState}
          >
            {games.map((game) => (
              <option key={game.id} value={game.id}>{game.title}</option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            name="description"
            required
            autoFocus
            className="form-control"
            value={currentEvent.description}
            onChange={changeDescriptionState}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="date">Date: </label>
          <input
            type="date"
            name="date"
            required
            autoFocus
            className="form-control"
            value={currentEvent.date}
            onChange={changeDateState}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="time">Time: </label>
          <input
            type="time"
            name="time"
            required
            autoFocus
            className="form-control"
            value={currentEvent.time}
            onChange={changeTimeState}
          />
        </div>
      </fieldset>
      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault();
          const event = {
            gameId: parseInt(currentEvent.gameId),
            description: currentEvent.description,
            date: currentEvent.date,
            time: currentEvent.time
          };
          createEvent(event).then(() => history.push("/events"));
        }}
        className="btn btn-primary"
      >
        Create Event
      </button>
    </form>
  );
};