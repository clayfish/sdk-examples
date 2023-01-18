import express from "express";
const router = express.Router();
import { playNextSongInPlaylist, updateMedia } from "../apps/jukebox/index.js";
export default router;

router.post("/playlist/:param?", (req, res) => {
  const { assetId, dataObject } = req.body;

  if (dataObject && dataObject.action === "track-clicked") {
    if (!dataObject) return;
    let { videoId, index, jukeboxId, videoInfo, uniqueEntryId } = dataObject;

    let updateObject = req;
    updateObject.body = {
      ...req.body,
      assetId: jukeboxId,
      videoId,
      videoInfo,
      uniqueEntryId,
    };
    updateMedia(updateObject);
  } else if (dataObject && dataObject.action === "next-clicked") {
    let { jukeboxId } = dataObject;
    let updateObject = req;

    updateObject.body = { ...req.body, assetId: jukeboxId };
    playNextSongInPlaylist(updateObject);
  } else if (req.params.param === "next") {
    let updateObject = req;
    updateObject.body = { ...req.body, assetId };
    playNextSongInPlaylist(updateObject);
  }

  res.json({ message: "Hello from server!" });
});
