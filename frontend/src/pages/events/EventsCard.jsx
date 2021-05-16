import React, { useEffect, useState } from "react";
import JoinButton from "./JoinButton";
import EventsApi from "../../api/EventsApi";
import UpdateEvent from "./UpdateEvent";
import moment from "moment";
import map from "../../assets/map.png";

import EventCommentsApi from "../../api/EventCommentsApi";
import EventCommentCard from "../eventComments/EventCommentCard";
import EventCommentForm from "../eventComments/EventCommentForm";

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
  Container,
  Image,
  Grid,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";

//  Importing the buttons to be used for react share
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

export default function EventsCard({ event, onDeleteClick, user }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [eventComments, setEventComments] = useState([]);
  const [readMore, setReadMore] = useState(false);

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
  const [isRoomName, setRoomName] = useState(event.roomName);

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
          setRoomName(data.roomName);
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

  /* Style variables */
  const extra = (
    <a>
      <Icon name="calendar" />
      {isNewMaxNum}
    </a>
  );

  /* const seeComments = (
  ); */

  /* Variables for See more-see less details */
  const extraContent = (
    // <Comment>
    //       <Comment.Content>
    <Comment.Text>
      {/* <Segment textAlign="left"> */}

      <p>
        <b>Trail Location:</b> {isNewTrailName}
      </p>
      <p>
        <b>Difficulty:</b> {isNewEventDifficulty}
      </p>
      <p>
        <b>Starting Date:</b> {isNewMaxNum}
      </p>
      <p>
        <b>Duration (days):</b> {isNewEventDuration}
      </p>
      <p>
        <b>Distance (km):</b> {isNewEventDistance}
      </p>
      <p>
        <b>Meeting point and time:</b> {isNewMeetPoint}
      </p>

      <p>
        <a href={isNewHyperlink} target="_blank">
          See on Google Map
        </a>
      </p>

      <p>
        <b>Event chat name:</b> {isRoomName}
      </p>
      <p>
        <b>About event:</b> {isRefreshingBody}
      </p>

      {/* </Segment> */}
    </Comment.Text>
    // </Comment.Content>
    // </Comment>
  );

  const linkName = readMore ? "Hide Details << " : "See Details >> ";

  return (
    <Container>
      <Grid centered columns={1}>
        {/* <Grid.Column mobile={16} tablet={8} computer={4}>  */}
        <Comment.Group>
          <Comment>
            {/* <Comment.Content> */}
            <br></br>
            <br></br>
            {/* <Link to={`/${event.user}/profile`}>
              <Comment.Avatar as="a" src={user.imageUrl} />
            </Link> */}

            <Link to={`/${event.user}/profile`}>
              <Image
                floated="left"
                size="mini"
                as="a"
                src="https://i.imgur.com/G5UIwnL.png"
                // src={user.imageUrl || null}
              />
              <Comment.Author as="a"> Created by {event.user}</Comment.Author>{" "}
            </Link>

            <Comment.Metadata>
              <div>{moment(event.createAt).format("MMMM Do, YYYY HH:mm")}</div>
            </Comment.Metadata>

            <br></br>
            {/* <br></br>
              <br></br> */}
            <Segment.Group>
              <Segment textAlign="center">
                <Comment.Text>
                  {" "}
                  <a href={isNewHyperlink} target="_blank">
                    {" "}
                    <h3>
                      <u>Trail Location: {isNewTrailName}</u>
                    </h3>
                  </a>
                </Comment.Text>

                <Comment.Metadata>
                  <Image href={isNewHyperlink} target="_blank" src={map} />
                </Comment.Metadata>

                <br></br>

                <Comment.Text>
                  <a>
                    <Icon name="chart area" />
                    Distance: {isNewEventDistance} km
                  </a>
                </Comment.Text>

                <Comment.Text>
                  <a>
                    <Icon name="fire" />
                    Difficulty: {isNewEventDifficulty}
                  </a>
                </Comment.Text>

                <Comment.Text>
                  <a>
                    <Icon name="calendar" />
                    {isNewMaxNum}
                  </a>
                </Comment.Text>

                <Button
                  basic
                  color="green"
                  type="submit"
                  onClick={() => {
                    setReadMore(!readMore);
                  }}
                >
                  {linkName}
                </Button>
                <br></br>
                <br></br>

                {readMore && extraContent}

                <Header as="h3" dividing content="" textAlign="center"></Header>

                <Comment.Group size="large">
                  <Comment>
                    <Comment.Actions>
                      {event.user == user.name && (
                        <>
                          <Comment.Action
                            active
                            onClick={() => setIsUpdating(true)}
                          >
                            Edit event
                          </Comment.Action>
                          <Comment.Action onClick={onDeleteClick} active>
                            {" "}
                            Delete event
                          </Comment.Action>
                        </>
                      )}

                      <Comment.Action active>
                        {eventComments.length} comment(s)
                      </Comment.Action>
                      <Comment.Action active>
                        <JoinButton />
                      </Comment.Action>
                    </Comment.Actions>
                  </Comment>
                </Comment.Group>

                {/* Buttons for share to social media and like button */}
                <Button.Group size="small">
                  {/* <JoinButton /> */}
                  <FacebookShareButton
                    url={window.location.href} //share the actual link of the event
                    title={event.user} //the user who created the event
                    description={isNewTrailName} //the title written in the event is shared
                    quote="link"
                  >
                    <FacebookIcon className="mx-3" size={35} />
                  </FacebookShareButton>
                  <TwitterShareButton
                    url={window.location.href}
                    title={isNewTrailName} //the title written in the event is shared
                    quote="link"
                    hashtag="hiking"
                  >
                    <TwitterIcon className="mx-3" size={35} />
                  </TwitterShareButton>
                  <WhatsappShareButton
                    url={window.location.href}
                    separator=""
                    title={isNewTrailName} //the title written in the event is shared
                    quote="link"
                  >
                    <WhatsappIcon size={35} />
                  </WhatsappShareButton>
                </Button.Group>
                {/* Buttons for share to social media finish here  */}
              </Segment>

              <br></br>

              <Segment textAlign="left">
                {/*  <Header
                    as="h3"
                    dividing
                    content=""
                    textAlign="center"
                  ></Header> */}

                <div className="comments-container">
                  {eventComments &&
                    filteredEventCommentList.map((eventComment) => (
                      <EventCommentCard
                        key={event.id}
                        eventComment={eventComment}
                        onDeleteClick={() => deleteEventComment(eventComment)}
                        user={user}
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
                  <EventCommentForm
                    id={event.id}
                    onSubmit={createEventComment}
                  />
                </div>
              </Segment>
            </Segment.Group>
            {/* </Comment.Content> */}
          </Comment>
        </Comment.Group>
        {/* </Grid.Column>  */}
      </Grid>
    </Container>
  );
}
