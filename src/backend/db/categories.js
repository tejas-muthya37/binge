import { v4 as uuid } from "uuid";
import {
  actionCategory,
  thrillerCategory,
  romanceCategory,
  dramaCategory,
} from "../../images";
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Thrillers",
    description: "",
    thumbnail: thrillerCategory,
  },
  {
    _id: uuid(),
    categoryName: "Action",
    description: "",
    thumbnail: actionCategory,
  },
  {
    _id: uuid(),
    categoryName: "Romance",
    description: "",
    thumbnail: romanceCategory,
  },
  {
    _id: uuid(),
    categoryName: "Drama",
    description: "",
    thumbnail: dramaCategory,
  },
];
