import React from "react";
import { data } from "../../data/data";
import DashboardIcon from "../icons/DashboardIcon/DashboardIcon";
import DrawerDivider from "../DrawerDivider/DrawerDivider";
import HomeIcon from "../icons/HomeIcon/HomeIcon";
import CogIcon from "../icons/CogIcon/CogIcon";
import MessageQuestionIcon from "../icons/MessageIcon/MessageIcon";
import ShieldIcon from "../icons/ShieldIcon";

import parse from "html-react-parser";

// function DrawerCard() {
//   return data.map((each) => (
//     <div style={{ width: "5rem", height: "5rem" }}>
//       {Object.values(parse(each.svg))}
//     </div>
//   ));
// }

function DrawerCard() {
  // const userIcons = [];
  // data.map((index) => {
  //   userIcons.push(parse(index.svg));
  // });

  // console.log(userIcons, "usericons");
  // const poop = userIcons.map((i) => {
  //   parse(i);
  // });
  // console.log(poop, "buuuuurrrrpppp");

  const staticUi = [
    <DashboardIcon />,
    <DrawerDivider />,
    <HomeIcon />,
    <DrawerDivider />,
    <CogIcon />,
    <MessageQuestionIcon />,
    <ShieldIcon />,
    ,
  ];

  // const poop = parse(data);
  // console.log(poop, "buuuuurpppp");

  // const fullSet = [...staticUI];
  // console.log(fullSet);
  // fullSet.splice(3, 0, ...userIcons);
  // console.log(fullSet);

  const userSelectedIcons = [];
  data.map((index) => {
    userSelectedIcons.push(index.svg);
  });
  console.log(userSelectedIcons);

  userSelectedIcons.forEach((item) => {
    staticUi.splice(3, 0, parse(item));
  });

  // const merged = [...dashboard];
  // return (
  //   <div style={{ width: "5rem", height: "5rem" }}>
  //     {userSelectedIcons.map((each) => parse(each))}
  //   </div>
  // );
  // return userSelectedIcons.map((each) => <div>{parse(each)}</div>);
  return staticUi.map((each) => <div>{each}</div>);
}

export default DrawerCard;
