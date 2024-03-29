import React from "react";
import PropTypes from "prop-types";

// styles
import { useTheme } from "@mui/system";

// components
import { Grid, Tooltip, Typography } from "@mui/material";
import { Add, Equalizer, PlayArrow, Remove } from "@mui/icons-material";

VideoTrack.propTypes = {
  addToPlaylist: PropTypes.func,
  play: PropTypes.func.isRequired,
  playing: PropTypes.bool,
  removeFromPlaylist: PropTypes.func,
  videoInfo: PropTypes.object.isRequired,
};

export function VideoTrack({
  addToPlaylist,
  play,
  playing,
  removeFromPlaylist,
  videoInfo,
}) {
  const theme = useTheme();
  const { duration, id, snippet, viewCount } = videoInfo;

  let { title, channelTitle } = snippet;
  title = title || "Title";

  // Format duration
  let formattedDuration = "";
  if (duration) {
    const date = new Date(0);
    date.setSeconds(duration / 1000);
    const timeString = date.toISOString().substring(11, 19);
    formattedDuration = timeString + " | ";
  }

  let formattedViews = "";
  if (viewCount) {
    let firstPart = "";
    let thousands = 1000;
    let millions = thousands * 1000;
    let billions = millions * 1000;

    if (viewCount > billions) {
      firstPart = (viewCount / billions).toFixed(2) + "B";
    } else if (viewCount > millions)
      firstPart = (viewCount / millions).toFixed(0) + "M";
    else if (viewCount > thousands)
      firstPart = (viewCount / thousands).toFixed(0) + "K";
    formattedViews = firstPart + " Views | ";
  }

  const subHeader = `${formattedViews}${formattedDuration}${channelTitle}`;

  return (
    <Grid
      alignItems="center"
      container
      direction="row"
      justifyContent="space-between"
      sx={{
        background: theme.palette.secondary.main,
        borderBottom: `1px solid ${theme.palette.secondary.light}`,
      }}
    >
      <Grid item lg={8} xs={12}>
        <Grid alignItems="center" container direction="row" p={1} pl={2} pt={2}>
          <Grid
            item
            sx={{
              "& img": {
                height: 60,
                objectFit: "cover",
                width: 60,
              },
            }}
          >
            <a
              href={`https://www.youtube.com/watch?v=${id}`}
              rel="noreferrer"
              target="_blank"
            >
              <img
                alt="thumbnail"
                src={`https://i.ytimg.com/vi/${id}/default.jpg`}
              />
            </a>
          </Grid>
          <Grid item md={8} pl={2} pr={2} xs={11}>
            <Grid
              alignItems="stretch"
              container
              direction="column"
              justifyContent="space-between"
            >
              <Typography
                noWrap
                sx={{
                  color: theme.palette.secondary.contrastText,
                  fontSize: "1.2rem !important",
                  fontWeight: "bold",
                }}
                variant="h6"
              >
                {title}
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.text.hint,
                  fontSize: ".9rem !important",
                }}
              >
                {subHeader}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid alignSelf="right" item p={1} pl={2} pr={2}>
        {playing ? (
          <Equalizer sx={{ color: theme.palette.primary.light }} />
        ) : (
          <Grid
            container
            justifyContent="space-between"
            sx={{ flexDirection: { xs: "row", lg: "column" } }}
          >
            <Grid item>
              <Tooltip placement="top" title="Play Now">
                <PlayArrow
                  onClick={play}
                  sx={{ color: "white", "&:hover": { cursor: "pointer" } }}
                />
              </Tooltip>
            </Grid>

            {addToPlaylist && (
              <Grid item>
                <Tooltip placement="bottom" title="Add to end of playlist">
                  <Add
                    onClick={addToPlaylist}
                    sx={{ color: "white", "&:hover": { cursor: "pointer" } }}
                  />
                </Tooltip>
              </Grid>
            )}
            {removeFromPlaylist && (
              <Grid item>
                <Tooltip placement="bottom" title="Remove from playlist">
                  <Remove
                    onClick={removeFromPlaylist}
                    sx={{ color: "white", "&:hover": { cursor: "pointer" } }}
                  />
                </Tooltip>
              </Grid>
            )}
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}
