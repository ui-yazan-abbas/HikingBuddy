import React, { useEffect, useState } from "react";

import EventsApi from "../../api/EventsApi";
import UpdateEvent from "./UpdateEvent";
import moment from "moment";
import {
  Button,
  Comment,
  Form,
  Header,
  Input,
  TextArea,
  Card,
  Icon,
  Responsive,
  Segment,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

//  Importing the buttons to be used for react share
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

import EventCommentsApi from "../../api/EventCommentsApi";
import EventCommentCard from "../eventComments/EventCommentCard";
import EventCommentForm from "../eventComments/EventCommentForm";

export default function EventsCard({ event, onDeleteClick }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [eventComments, setEventComments] = useState([]);

  //Hooks for Event fields
  const [isNewTrailName, setNewTrailName] = useState(event.trailName);
  const [isNewEventDuration, setNewEventDuration] = useState(
    event.eventDuration
  );
  const [isNewEventDistance, setNewEventDistance] = useState(
    event.eventDistance
  );
  const [isNewEventDifficulty, setNewEventDifficulty] = useState(
    event.eventDifficulty
  );
  const [isNewMaxNum, setNewMaxNum] = useState(event.maxNum);
  const [isNewMeetPoint, setNewMeetPoint] = useState(event.meetPoint);
  const [isNewHyperlink, setNewHyperlink] = useState(event.trailHyperlink);
  const [isRefreshingBody, setRefreshingBody] = useState(event.body);

  async function createEventComment(eventCommentData) {
    try {
      const response = await EventCommentsApi.createEventComment(
        event.id,
        eventCommentData
      );
      const eventComment = response.data;
      const newEventComment = eventComments.concat(eventComment);

      setEventComments(newEventComment);
    } catch (e) {
      console.error(e);
    }
  }

  async function deleteEventComment(event) {
    try {
      await EventCommentsApi.deleteEventComment(event.id);
      const newEventComments = eventComments.filter((ev) => ev.id !== event.id);

      setEventComments(newEventComments);
    } catch (e) {
      console.error(e);
    }
  }

  async function updateEvent(eventToUpdate) {
    try {
      await EventsApi.updateEvent(event.id, eventToUpdate);
      EventsApi.getEventById(event.id)

        .then(({ data }) => {
          setNewTrailName(data.trailName);
          setNewEventDuration(data.eventDuration);
          setNewEventDistance(data.eventDistance);
          setNewEventDifficulty(data.eventDifficulty);
          setNewMaxNum(data.maxNum);
          setNewMeetPoint(data.meetPoint);
          setNewHyperlink(data.trailHyperlink);
          setRefreshingBody(data.body);
        })
        .catch((err) => console.error(err));
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    EventCommentsApi.getEventComments(event.id)
      .then(({ data }) => setEventComments(data))
      .catch((err) => console.error(err));
  }, [setEventComments]);

  // Components

  let filteredEventCommentList = eventComments.filter(
    (item) => item.commentedEvent == event.id
  );

  const extra = (
    <a>
      <Icon name="calendar" />
      {isNewMaxNum}
    </a>
  );

  return (
    <div className="postcard">
      <Comment.Group>
        <Comment>
          <Comment.Avatar
            as="a"
            src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
          />

          <Comment.Content>
            <Comment.Author> Created by {event.user}</Comment.Author>
            <Comment.Metadata>
              <div>
                {moment(event.createAt).format("DD/MM/YYYY hh:mm:ss A")}
              </div>
            </Comment.Metadata>
          </Comment.Content>

          <br></br>

          <Card
            color="olive"
            image=<img src="https://stfturist-en.imgix.net/app/uploads/sites/2/2017/05/stf-vandringsleder-hogakustenleden.jpg?auto=format%2Cenhance"></img>
            header={isNewTrailName}
            meta={isNewEventDistance}
            description={isNewHyperlink}
            extra={extra}
          />

          <Comment.Actions>
            <Comment.Action active onClick={() => setIsUpdating(true)}>
              Edit event
            </Comment.Action>
            {event.user == event.user && (
              <Comment.Action onClick={onDeleteClick} active>
                {" "}
                Delete event
              </Comment.Action>
            )}
            {/* Buttons for share to social media  */}

            <br></br>
            <br></br>

            {/* Buttons for share to social media and like button */}
            <Button.Group size="small">
                    <Button color="red" icon="heart" size="small" />
                    <FacebookShareButton
                      url={window.location.href} //share the actual link of the post
                      title={event.user} //the user who wrote the post
                      description={isNewTrailName} //the comment written in the post is shared
                      quote="link"
                    >
                      <FacebookIcon className="mx-3" size={35} />
                    </FacebookShareButton>
                    <TwitterShareButton
                      url={window.location.href}
                      title={isNewTrailName} //the comment written in the post is shared
                      quote="link"
                      hashtag="hiking"
                    >
                      <TwitterIcon className="mx-3" size={35} />
                    </TwitterShareButton>
                    <WhatsappShareButton
                      url={window.location.href}
                      separator=""
                      title={isNewTrailName} //the comment written in the post is shared
                      quote="link"
                    >
                      <WhatsappIcon size={35} />
                    </WhatsappShareButton>  
                  </Button.Group>
                      {/* Buttons for share to social media finish here  */}
          </Comment.Actions>

          <div className="comments-container">
            {eventComments &&
              filteredEventCommentList.map((eventComment) => (
                <EventCommentCard
                  key={event.id}
                  eventComment={eventComment}
                  onDeleteClick={() => deleteEventComment(eventComment)}
                />
              ))}
          </div>

          {isUpdating && (
            <UpdateEvent
              onUpdateClick={(eventData) => updateEvent(eventData)}
              event={event}
              onSubmite={() => setIsUpdating(false)}
            />
          )}

          <div className="comments-form">
            <EventCommentForm id={event.id} onSubmit={createEventComment} />
          </div>
        </Comment>
      </Comment.Group>
    </div>
  );
}
