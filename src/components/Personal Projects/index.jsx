import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography
} from "@mui/material";
import React, { forwardRef } from "react";

const progressData = [
  {
    name: "Youtube Clone",
    link: "https://photo-gallery1.netlify.app",
    ref: "data:image/jpeg;base64,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",
    description: [
      "Created a scalable Youtube Clone in which Redux toolkit was used across the project as the global state manager.",
      "Tailwind CSS was used as the styling library to create visually appealing UI.",
      ,
      "Made the search suggestion that used the method of debouncing along with cached results.",
      "Made a working live chat box with the help of Api polling and a nested comment structure was made with the help of recursive components.",
      "React Router Dom was used for handling the routes and navigation"
    ]
  },
  {
    name: "Photo Holic X",
    link: "https://photo-gallery1.netlify.app",
    ref: "data:image/jpeg;base64,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",
    description: [
      "The site was completely build using HTML,CSS and Vanilla Js",
      "It is a simple photogallery website with flipping card animation.",
      "Tech Stack Used - HTML,CSS,JavaScript"
    ]
  },

  {
    name: "Simple TODO Email List Application",
    link: "https://emailform9.netlify.app/",
    ref: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3URuJIoOvOzABQ_dWxLlLEMCc1IQo_kQa58fRAfx_bw&usqp=CAU&ec=48665701",
    description: [
      " A simple todolist application using React JS",
      "It involves the crud method of adding and deleting the email and contact information"
    ]
  }
];
function PersonalProjectsCard() {
  return (
    <Grid
      item
      container
      md={10}
      sm={12}
      xs={12}
      justifyContent="center"
      alignItems="center"
      marginTop={3}
      spacing={4}
      //   ref={ref}
    >
      <Grid
        item
        container
        md={12}
        sm={12}
        justifyContent="center"
        alignItems={"center"}
      >
        <Typography
          variant="h5"
          textAlign="center"
          justifyContent="center"
          sx={{
            backgroundColor: "#181e1e",
            color: "white",
            borderRadius: "16px",
            pt: 1,
            pl: 4,
            pr: 4,
            pb: 1
          }}
        >
          Personal Projects
        </Typography>
      </Grid>
      <Grid
        item
        container
        md={12}
        sm={12}
        justifyContent="center"
        alignItems={"center"}
      >
        <Typography
          variant="h6"
          color="yellow"
          textAlign="center"
          justifyContent="center"
          marginTop={-2}
        >
          PortFolio
        </Typography>
      </Grid>
      {progressData.map((ele) => {
        return (
          <Grid item md={4} sm={6} xs={12}>
            <a href={ele.link} target="_blank">
              <Card sx={{ width: "100%", borderRadius: "15px" }} elevation={2}>
                <CardMedia
                  sx={{ height: 180 }}
                  image={ele.ref}
                  title="green iguana"
                />
                <CardContent sx={{ height: 220, overflowY: "scroll" }}>
                  <Typography
                    sx={{
                      backgroundColor: "#181e1e",
                      borderRadius: "16px",
                      p: 0.5,

                      color: "white ",
                      textAlign: "center"
                    }}
                    gutterBottom
                    variant="subtitle1"
                    component="div"
                    fontWeight={500}
                  >
                    {ele.name}
                  </Typography>
                  <div>
                    <Divider sx={{ color: "gray", width: "100%" }} />
                  </div>
                  <div style={{ marginRight: "20px" }}>
                    <ol>
                      {ele.description.map((desc) => {
                        return (
                          <li style={{ marginTop: "2px" }}>
                            <Typography variant="caption">{desc}</Typography>
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </a>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default PersonalProjectsCard;
