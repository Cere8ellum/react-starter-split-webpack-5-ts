import * as styles from "./home.module.scss";
import React from "react";
import { useAppSelector, useAppDispatch } from "../../core/redux/hooks";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import {
  thunkSelector,
  fetchThunkApi,
} from "../../core/redux/slices/thunkSlice";
import {
  postSelector,
  setPostsError,
  setPostsLoading,
  setPostsSuccess,
} from "../../core/redux/slices/postSlice";
import reactImage from "../../assets/images/react.svg";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { fetchPosts } from "../../core/api/api";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function Home() {
  const dispatch = useAppDispatch();
  const selectedThunk = useAppSelector(thunkSelector);
  const selectedPosts = useAppSelector(postSelector);

  const thunkLoading = selectedThunk.loading;
  const thunkResult = selectedThunk.result;
  const thunkError = selectedThunk.error;

  const postsLoading = selectedPosts.loading;
  const postsResult = selectedPosts.result;
  const postsError = selectedPosts.error;

  const getThunk = () => {
    dispatch(fetchThunkApi());
  };

  const getPosts = async () => {
    dispatch(setPostsLoading(true));

    return await fetchPosts()
      .then((res) => res.json())
      .then((json) => {
        dispatch(setPostsLoading(false));
        dispatch(setPostsSuccess(json));
      })
      .catch((e) => {
        dispatch(setPostsError(e.message));
      });
  };

  return (
    <>
      <h2>Home page</h2>
      <div className={styles.image}>
        <img src={reactImage} alt="Logo of the React" />
      </div>
      <Box
        sx={{
          marginTop: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item>
            <Button
              // sx={{ margin: 2 }}
              color="secondary"
              variant="outlined"
              onClick={getThunk}
              disabled={thunkLoading && true}
            >
              {thunkLoading ? (
                <CircularProgress disableShrink />
              ) : (
                "Show result"
              )}
            </Button>
          </Grid>
          <Grid item>
            <Button
              color="secondary"
              variant="outlined"
              onClick={getPosts}
              disabled={postsLoading && true}
            >
              {postsLoading ? <CircularProgress disableShrink /> : "Get News"}
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Stack sx={{ width: "100%" }} spacing={2} marginTop={5}>
        {thunkError.status && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {thunkError.text}
          </Alert>
        )}
        {thunkResult && (
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            {thunkResult}
          </Alert>
        )}
        {postsError && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {postsError}
          </Alert>
        )}
        {postsResult.map((el, i) => {
          return (
            <Card key={i} sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {el.title}
                </Typography>
                <Typography variant="body2">{el.body}</Typography>
              </CardContent>
            </Card>
          );
        })}
      </Stack>
    </>
  );
}
