// NPM Packages
import React from "react";
// Project files
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
// Project styiling from material ui
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import Footer from "../../components/Footer";
import Header from "./Header";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const mainFeaturedPost = {
  title: "HikingBuddy",
  description:
    "A community designed to share, to explore, to enjoy nature and sports together.",
  image:
    "https://images.unsplash.com/photo-1601758282760-b6cc3d07523d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlJTIwd2Fsa3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  imgText: "main image description",
};

const sections = [
  { title: "Hiking", url: "#" },
  { title: "Nature", url: "#" },
  { title: "Best Hiking traills in Sweden", url: "#" },
  { title: "Connect with Hikers", url: "#" },
  { title: "Style", url: "#" },
];

const featuredPosts = [
  {
    title: "Career Change Tips: Engage in Online Communities",

    description:
      " Not just to network with the hopes of applying for a particular role, but also just general people who I thought might be willing to chat, share their experience, and give me any advice or tips on breaking into a particular industry...",
    image:
      "https://images.unsplash.com/photo-1511273799143-4b85e2452a0c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    imageText: "Image Text",
    url:
      "https://dev.to/ruannawrites/career-change-tips-part-3-engage-in-online-communities-2j6o",
  },
  {
    title: "Switching Careers into IT: A How-To Guide",

    description:
      "Switching to a career in IT is within your reach, even if it may seem daunting. Anyone with the desire to get an IT job can find one that suits their unique skills, talents and interests. There's a good chance that many of the soft skills...",
    image:
      "https://www.comptia.org/images/default-source/Pioneer-Article-Images/HowGetIntoIT.jpg",
    imageText: "Image Text",
    url: "https://www.comptia.org/career-change/switching-career-path/how-to",
  },
  {
    title: "Change Your Career: How To Get a Job In IT In 6 Months",

    description:
      "IT is, by far, the fastest-growing sector of activity in the world today. The demand for skilled workers is higher than the current offer, so a career in this field usually comes with a great salary and perks such as home office possibility, cool offices, and interesting projects to be a part of...",
    image: "https://miro.medium.com/max/1400/0*FrQWzvLsUW8S21jJ",
    imageText: "Image Text",
    url:
      "https://medium.com/swlh/change-your-career-how-to-get-a-job-in-it-in-6-months-b5176be82be5",
  },
  {
    title:
      "Quick Guide: How to Become a Software Engineer without a Computer Science Degree",
    description:
      "No matter what stage you are at in the process of becoming a software engineer, I hope that this article helps out in some way. In this article I want to quickly touch upon the main points you should do to get hired as a software engineer...",
    image: "https://miro.medium.com/max/2400/1*zGm8o0N4CwR1vxrbCjRrsw.jpeg",
    imageText: "Image Text",
    url:
      "https://medium.com/@ghalstein97/quick-guide-how-to-become-a-software-engineer-without-a-computer-science-degree-5fdec3ed45b2",
  },
];

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="HikingBuddy" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <div className="AvatarWrap">
            <Typography variant="h5" align="center" color="primary">
              Inspire yourself with a few useful links for career shifters:
            </Typography>
          </div>
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}></Grid>
        </main>
      </Container>
      <Footer
        title="HikingBuddy"
        description="Sweden's best hikers community"
      />
    </React.Fragment>
  );
}
