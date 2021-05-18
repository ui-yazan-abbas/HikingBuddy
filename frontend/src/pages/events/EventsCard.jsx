import React, { useEffect, useState } from "react";
import EventsApi from "../../api/EventsApi";
import UpdateEvent from "./UpdateEvent";
import moment from "moment";

// map in orange and blue
import Sweden_map_sights3 from "../../assets/sweden-map-sights3.jpg";
// map in green and blue
import Cartoon_map from "../../assets/Cartoon_map.jpg";



import EventCommentsApi from "../../api/EventCommentsApi";
import EventCommentCard from "../eventComments/EventCommentCard";
import EventCommentForm from "../eventComments/EventCommentForm";

import {
  Button,
  Divider,
  Feed,
  Comment,
  Header,
  Icon,
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
  const [joinToggler, setJoinToggler] = useState();
  const [joinsCount, setJoinsCount] = useState(event.listOfJoin?.length | 0);
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

  // Join button handling

  const handleJoin = () => {
    console.log("here");
    if (joinToggler) {
      setJoinsCount(joinsCount - 1);
      undoJoinEvent();
      setJoinToggler(false);
    } else {
      joinEvent();
      setJoinsCount(joinsCount + 1);
      setJoinToggler(true);
    }
  };

  const joinEvent = async () => {
    try {
      await EventsApi.joinEvent(event.id).then(setJoinToggler(true));
    } catch (e) {
      console.error(e);
    }
  };

  const undoJoinEvent = async () => {
    try {
      await EventsApi.undoJoinEvent(joinToggler.id);
    } catch (e) {
      console.error(e);
    }
  };
  // end of Join button handling

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

  /* Variables for See more-see less details */
  const extraContent = (
    <Comment.Text>
      <p>
        <b>Trail Location: </b>
        {isNewTrailName}
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
          View in GoogleMaps
        </a>
      </p>

      <p>
        <b>Event chat name:</b> {isRoomName}
      </p>
      <p>
        <b>About event:</b> {isRefreshingBody}
      </p>
      <br></br>

      {/* </Segment> */}
    </Comment.Text>
  );

  const linkName = readMore ? "Hide Details << " : "See Details >> ";

  return (
    <Container className="Container">
      <Segment.Group>
        <Segment>
          <Feed.Label>
            <Link to={`/${event.user}/profile`}>
              <Image
                rounded
                floated="left"
                size="mini"
                as="a"
                src="https://i.imgur.com/G5UIwnL.png"
                // src={user.imageUrl || null}
              />
              <Comment.Author as="a"> Created by {event.user}</Comment.Author>{" "}
            </Link>
          </Feed.Label>

          <Feed.Summary>
            <Comment.Metadata>
              <div>{moment(event.createAt).format("MMMM Do, YYYY HH:mm")}</div>
            </Comment.Metadata>
          </Feed.Summary>

          <div className="AvatarWrap">
            {" "}
            <a href={isNewHyperlink} target="_blank">
              {" "}
              <h4>
                <a>Trail Location: {isNewTrailName}</a>
              </h4>
            </a>
          </div>

          <Feed.Extra className="shadow">
            <a href={isNewHyperlink} target="_blank">
              <Image
                href={isNewHyperlink}
                src={Sweden_map_sights3}
                className="shadow"
                target="_blank"
              />
            </a>
          </Feed.Extra>
          <br></br>
          <br></br>
          <Grid centered columns={1}>
            <Feed.Summary
              className="ma
             <Comment.Text>rgin-left"
            >
              <Comment.Metadata>
                <a>
                  <Icon name="chart area" />
                  Distance: {isNewEventDistance} km
                </a>

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
              </Comment.Metadata>
            </Feed.Summary>
          </Grid>
          <br></br>
          <br></br>

          <Grid centered columns={1}>
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
          </Grid>

          <Header as="h5" dividing content="" textAlign="center">
            {readMore && extraContent}
          </Header>
          <br></br>
          <br></br>

          {/* <Header as="h3" dividing content="" textAlign="center"></Header> */}

          <Grid columns={2} textAlign="center" stackable>
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
                    {/*  View Comments/Hide comments can go here */}
                  </Comment.Action>
                  <Comment.Action active>
                    <Feed.Label>
                      <Icon
                        name="group"
                        size="large"
                        onClick={handleJoin}
                        inverted
                        color="green"
                      />
                      {joinsCount}
                    </Feed.Label>

                    {/* <Button onClick={handleJoin}>
                        <JoinButton  />
                        {joinsCount}
                        </Button> */}
                  </Comment.Action>
                </Comment.Actions>
              </Comment>
            </Comment.Group>

            {/* Buttons for share to social media and like button */}
            <Button.Group size="small" className="AvatarWrap">
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
          </Grid>
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
            <EventCommentForm id={event.id} onSubmit={createEventComment} />
          </div>
        </Segment>
      </Segment.Group>

      {/* </Comment.Content> */}

      {/* </Grid.Column>  */}

      <br></br>
      <br></br>
      <br></br>
    </Container>
  );
}
