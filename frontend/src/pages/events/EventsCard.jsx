import React, { useEffect, useState } from "react";

import EventsApi from "../../api/EventsApi";
import UpdateEvent from "./UpdateEvent";
import moment from "moment"; 
import { Button, Comment, Form, Header } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'


export default function EventsCard({ event, onDeleteClick}) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isRefreshing, setRefreshing] = useState(event.body);

  async function updateEvent(eventToUpdate) {
    try {
      await EventsApi.updateEvent(event.id, eventToUpdate);
      EventsApi.getEventById(event.id)
          .then(({ data }) => setRefreshing(data.body))
          .catch((err) => console.error(err));
    } catch (e) {
      console.error(e);
    }
  }

  // Components

  return (

      <Comment.Group>
        <Comment>
          <Comment.Avatar
              as="a"
              src="https://react.semantic-ui.com/images/avatar/small/steve.jpg"
          />
          <Comment.Content>
            <Comment.Author as="a"> {event.user}</Comment.Author>
            <Comment.Metadata>
              <div>{moment(event.createAt).format("DD/MM/YYYY hh:mm:ss A")}</div>
            </Comment.Metadata>
            <Comment.Text>{isRefreshing}</Comment.Text>
            <Comment.Actions>
              <Comment.Action active onClick={() => setIsUpdating(true)}>
                Edit Event
              </Comment.Action>
              <Comment.Action onClick={onDeleteClick} active>
                {" "}
                Delete event
              </Comment.Action>

            </Comment.Actions>

            {isUpdating && (
                <UpdateEvent
                    onUpdateClick={(eventData) => updateEvent(eventData)}
                    event={event}
                    onSubmite={() => setIsUpdating(false)}
                />
            )}

          </Comment.Content>
        </Comment>
      </Comment.Group>
            );
}

