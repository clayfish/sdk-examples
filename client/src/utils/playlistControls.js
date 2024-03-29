import backendAPI from "@utils/backendApi";
// context
import { setMessage } from "@context";

export const playlistNext = async ({
  apiKey,
  assetId,
  globalDispatch,
  urlSlug,
}) => {
  // If API Key is included in an input, send to backend and overwrite the server's default API Key.
  await backendAPI()
    .post("/playlistnext", {
      apiKey,
      assetId,
      urlSlug,
    })
    .then((res) => {
      // Will need to update DataObject if add from playlist
      console.log(res);
      setMessage({
        dispatch: globalDispatch,
        message: "Success!",
        messageType: "success",
      });
    })
    .catch((error) => {
      setMessage({
        dispatch: globalDispatch,
        message: error,
        messageType: "error",
      });
    });
};

export const shufflePlaylist = async ({
  apiKey,
  assetId,
  globalDispatch,
  toggle,
  urlSlug,
}) => {
  // If API Key is included in an input, send to backend and overwrite the server's default API Key.
  await backendAPI()
    .post("/shuffleplaylist", {
      apiKey,
      assetId,
      toggle,
      urlSlug,
    })
    .then((res) => {
      // Will need to update DataObject if add from playlist
      console.log(res);
      setMessage({
        dispatch: globalDispatch,
        message: "Success!",
        messageType: "success",
      });
    })
    .catch((error) => {
      setMessage({
        dispatch: globalDispatch,
        message: error,
        messageType: "error",
      });
    });
};

export const volumeDown = async ({
  apiKey,
  assetId,
  globalDispatch,
  urlSlug,
}) => {
  // If API Key is included in an input, send to backend and overwrite the server's default API Key.
  await backendAPI()
    .post("/volumedown", {
      apiKey,
      assetId,
      urlSlug,
    })
    .then((res) => {
      // Will need to update DataObject if add from playlist
      console.log(res);
      setMessage({
        dispatch: globalDispatch,
        message: "Success!",
        messageType: "success",
      });
    })
    .catch((error) => {
      setMessage({
        dispatch: globalDispatch,
        message: error,
        messageType: "error",
      });
    });
};

export const volumeUp = async ({
  apiKey,
  assetId,
  globalDispatch,
  urlSlug,
}) => {
  // If API Key is included in an input, send to backend and overwrite the server's default API Key.
  await backendAPI()
    .post("/volumeup", {
      apiKey,
      assetId,
      urlSlug,
    })
    .then((res) => {
      // Will need to update DataObject if add from playlist
      console.log(res);
      setMessage({
        dispatch: globalDispatch,
        message: "Success!",
        messageType: "success",
      });
    })
    .catch((error) => {
      setMessage({
        dispatch: globalDispatch,
        message: error,
        messageType: "error",
      });
    });
};

export const addPlaylistToWorld = async ({
  apiKey,
  assetId,
  globalDispatch,
  urlSlug,
}) => {
  backendAPI()
    .post("/addplaylistcontrols", {
      apiKey,
      assetId,
      urlSlug,
    })
    .then(() => {
      setMessage({
        dispatch: globalDispatch,
        message: "Success!",
        messageType: "success",
      });
    })
    .catch((error) => {
      console.log(error);
      setMessage({
        dispatch: globalDispatch,
        message: error,
        messageType: "error",
      });
    });
};

export const removePlaylistFromWorld = async ({
  apiKey,
  assetId,
  globalDispatch,
  urlSlug,
}) => {
  backendAPI()
    .post("/removeplaylistcontrols", {
      apiKey,
      assetId,
      urlSlug,
    })
    .then(() => {
      setMessage({
        dispatch: globalDispatch,
        message: "Success!",
        messageType: "success",
      });
    })
    .catch((error) => {
      console.log(error);
      setMessage({
        dispatch: globalDispatch,
        message: error,
        messageType: "error",
      });
    });
};
