export const apikey = {
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};
export const Supportedlanguages = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "marathi", name: "Marathi" },
  { identifier: "tamil", name: "Tamil" },
  { identifier: "spanish", name: "Spanish" },
];

export const bgvideosrc_front = "https://www.youtube.com/embed/";
export const bgvideosrc_back = "?&autoplay=1&mute=1";

export const youtubevTitle = "YouTube video player";

export const youtubevallow =
  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

export const geminiApi=process.env.REACT_APP_JEMINA_API_KEY;
