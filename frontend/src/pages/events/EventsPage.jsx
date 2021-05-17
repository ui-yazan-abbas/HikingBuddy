// NPM Packages
import React, { useEffect, useState } from "react";

// Project files
import EventsForm from "./EventsForm";
import EventsCard from "./EventsCard";
import EventsApi from "../../api/EventsApi";
import emptyStateImg from "../../assets/em-state-events.jpeg";

// Semantic UI
import {
  Grid,
  Container
} from "semantic-ui-react";

export default function EventsPage({ event, onDeleteClick, user }) {
  // Local state
  const [events, setEvents] = useState([]);
  const imgSrc = emptyStateImg;

  // Methods
  async function createEvent(eventData) {
    try {
      const response = await EventsApi.createEvent(eventData);
      const event = response.data;
      const newEvents = events.concat(event).reverse();
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
    <div className="cent">
      <EventsForm onSubmit={(eventData) => createEvent(eventData)} />
      {events?.length !== 0 ? (
        <div>{CardsArray1}</div>
      ) : (
        <Container>
        <Grid centered columns={1}>
        <div className="empty-state">
          <img className="empty-img" src={imgSrc} />
        </div>
        </Grid>
        </Container>
      )}
    </div>
  );
}
