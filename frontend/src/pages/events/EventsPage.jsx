// NPM Packages
import React, { useEffect, useState } from "react";

// Project files
import EventsForm from "./EventsForm";
import EventsCard from "./EventsCard";
import EventsApi from "../../api/EventsApi";
import EventSearch from "../events/EventSearch";

export default function EventsPage({ event, onDeleteClick, user }) {
  // Local state
  const [events, setEvents] = useState([]);

  // Methods
  async function createEvent(eventData) {
    try {
      const response = await EventsApi.createEvent(eventData);
      const event = response.data;
      const newEvents = events.concat(event);

      setEvents(newEvents);
    } catch (e) {
      console.error(e);
    }
  }

  async function deleteEvent(event) {
    try {
      await EventsApi.deleteEvent(event.id);
      const newEvents = events.filter((ev) => ev.id !== event.id);

      setEvents(newEvents);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    EventsApi.viewAllEvents()
      .then(({ data }) => setEvents(data))
      .catch((err) => console.error(err));
  }, [setEvents]);

  // Components
  const CardsArray1 = events.map((event) => (
    <EventsCard
      key={event.id}
      event={event}
      onDeleteClick={() => deleteEvent(event)}
      user={user}
    />
  ));

  return (
    <div>
      <EventsForm onSubmit={(eventData) => createEvent(eventData)} />
      <EventSearch />
      {CardsArray1}
    </div>
  );
}
