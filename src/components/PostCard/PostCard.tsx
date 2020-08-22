import React, { useEffect, useState } from "react";
import { Fab, Typography, Paper, Grid, Divider } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { Post } from "src/interfaces";
import { PLACEHOLDER_MEDIA } from "src/constants";
import PostCardMedia from "./PostCardMedia";

const CARD_MAX_HEIGHT = 120;
const CARD_MEDIA_WIDTH = "20vw";

function PostCard({ post }: { post: Post }) {
  const theme = useTheme();
  const themeSpacing = theme.spacing(1);

  return (
    <Paper
      elevation={0}
      style={{
        marginTop: themeSpacing,
        padding: themeSpacing,
      }}
    >
      <Grid container>
        <Grid item>
          <PostCardMedia
            maxHeight={CARD_MAX_HEIGHT}
            height={CARD_MEDIA_WIDTH}
            media={post.media ? post.media : PLACEHOLDER_MEDIA}
          />
        </Grid>
        <Grid item xs container direction="row">
          <Grid item xs container direction="column" align-items="stretch">
            <Grid item>
              <Typography variant="body1">{post.title}</Typography>
            </Grid>
            <Grid item xs style={{ overflow: "scroll" }}>
              {post.brief}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default PostCard;
