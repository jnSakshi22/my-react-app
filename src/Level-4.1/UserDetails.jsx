import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import HeaderView from "./Header";
import UserComp from "./UsersComp";

const UserDetails = () => {
  const params = useParams();

  const { id } = params;

  const users = JSON.parse(localStorage.getItem("users"));
  console.log(users);

  const userData = users.find((item) => item.id === Number(id));

  const { id: idd, name, username, email, phone, website } = userData;
  // const Accept = () => {
  //   if (localStorage.getItem("selected") === null) {
  //     return localStorage.setItem("selected", JSON.stringify([userData]));
  //   }
  //   const sel = JSON.parse(localStorage.getItem("selected"));
  //   sel.push(userData);
  //   localStorage.setItem("selected", JSON.stringify(sel));
  // };

  // const Reject = () => {
  //   if (localStorage.getItem("rejected") === null) {
  //     return localStorage.setItem("rejected", JSON.stringify([userData]));
  //   }
  //   const rej = JSON.parse(localStorage.getItem("rejected"));
  //   rej.push(userData);
  //   localStorage.setItem("rejected", JSON.stringify(rej));
  // };

  return (
    <>
      <HeaderView />
      {/* <button onClick={Accept}>Accept</button>
      <button onClick={Reject}>Reject</button> */}
      <p>Id: {idd}</p>
      <p>Name: {name}</p>
      <p>UserName: {username}</p>
      <p>Email: {email}</p>
      <p>Phone:{phone}</p>
      <p>Website:{website}</p>
    </>
  );
};

export default UserDetails;
