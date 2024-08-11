import core_data from "./core-lesson/core_lesson";
import oop_data from "./oop-lesson/oop_lesson";
import dsa_data from "./dsa-lesson/dsa_lesson";
import web_data from "./web-lesson/web_lesson";

const prep = [core_data, oop_data, dsa_data, web_data];

export const lessonData = [
  { name: "Preparation", slug: "preparation", data: prep },
];
