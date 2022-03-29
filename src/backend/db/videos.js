/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

import {
  thrillerThumbnailOne,
  thrillerThumbnailTwo,
  thrillerThumbnailThree,
  thrillerThumbnailFour,
  actionThumbnailOne,
  actionThumbnailTwo,
  actionThumbnailThree,
  actionThumbnailFour,
  romanceThumbnailOne,
  romanceThumbnailTwo,
  romanceThumbnailThree,
  romanceThumbnailFour,
  dramaThumbnailOne,
  dramaThumbnailTwo,
  dramaThumbnailThree,
  dramaThumbnailFour,
} from "./../../images.js";
import uuid from "react-uuid";

export const videos = [
  {
    _id: uuid(),
    thumbnail: thrillerThumbnailOne,
    source: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    title: "Drishyam",
    category: "Thrillers",
  },
  {
    _id: uuid(),
    thumbnail: thrillerThumbnailTwo,
    source: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    title: "Kahaani",
    category: "Thrillers",
  },
  {
    _id: uuid(),
    thumbnail: thrillerThumbnailThree,
    source: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    title: "Andhadhun",
    category: "Thrillers",
  },
  {
    _id: uuid(),
    thumbnail: thrillerThumbnailFour,
    source: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    title: "Pink",
    category: "Thrillers",
  },
  {
    _id: uuid(),
    thumbnail: actionThumbnailOne,
    source: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    title: "War",
    category: "Action",
  },
  {
    _id: uuid(),
    thumbnail: actionThumbnailTwo,
    source: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    title: "Bang Bang",
    category: "Action",
  },
  {
    _id: uuid(),
    thumbnail: actionThumbnailThree,
    source: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    title: "Ek Tha Tiger",
    category: "Action",
  },
  {
    _id: uuid(),
    thumbnail: actionThumbnailFour,
    source: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    title: "Dhoom 2",
    category: "Action",
  },
  {
    _id: uuid(),
    thumbnail: romanceThumbnailOne,
    source: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    title: "Band Baaja Baaraat",
    category: "Romance",
  },
  {
    _id: uuid(),
    thumbnail: romanceThumbnailTwo,
    source: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    title: "Yeh Jawaani Hai Deewani",
    category: "Romance",
  },
  {
    _id: uuid(),
    thumbnail: romanceThumbnailThree,
    source: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    title: "Jab We Met",
    category: "Romance",
  },
  {
    _id: uuid(),
    thumbnail: romanceThumbnailFour,
    source: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    title: "2 States",
    category: "Romance",
  },
  {
    _id: uuid(),
    thumbnail: dramaThumbnailOne,
    source: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    title: "3 Idiots",
    category: "Drama",
  },
  {
    _id: uuid(),
    thumbnail: dramaThumbnailTwo,
    source: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    title: "Shershaah",
    category: "Drama",
  },
  {
    _id: uuid(),
    thumbnail: dramaThumbnailThree,
    source: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    title: "Gully Boy",
    category: "Drama",
  },
  {
    _id: uuid(),
    thumbnail: dramaThumbnailFour,
    source: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    title: "Badhaai Ho",
    category: "Drama",
  },
];
