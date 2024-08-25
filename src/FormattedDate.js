import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // props.date.getDay() is a number between 0-6
  let day = days[props.date.getDay()];

  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  //in order to show hour and minutes in the same way 0 is added for numbers less than 10
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <span>
      {day} {hours}:{minutes}
    </span>
  );
}
