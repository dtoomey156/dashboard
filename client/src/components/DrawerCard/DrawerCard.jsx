import React from "react";
import { data } from "../../data/data";
import styles from "./DrawerCard.module.css";
import DashboardIcon from "../icons/DashboardIcon/DashboardIcon";
import DrawerDivider from "../DrawerDivider/DrawerDivider";
import HomeIcon from "../icons/HomeIcon/HomeIcon";
import CogIcon from "../icons/CogIcon/CogIcon";
import MessageQuestionIcon from "../icons/MessageQuestionIcon";
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
    <DashboardIcon iconName="Dashboard" />,
    // <DrawerDivider />,
    <HomeIcon iconName="Home" />,
    // <DrawerDivider />,
    <CogIcon iconName="Settings" />,
    <MessageQuestionIcon iconName="Support" />,
    <ShieldIcon iconName="Privacy" />,
    ,
  ];

  const drawerDivider = [<DrawerDivider />, <DrawerDivider />];

  // const poop = parse(data);
  // console.log(poop, "buuuuurpppp");

  // const fullSet = [...staticUI];
  // console.log(fullSet);
  // fullSet.splice(3, 0, ...userIcons);
  // console.log(fullSet);

  const userSelectedIcons = [];
  data.map((index) => {
    userSelectedIcons.push(index);
  });
  console.log(userSelectedIcons);

  userSelectedIcons.forEach((item) => {
    staticUi.splice(3, 0, item);
  });

  console.log(<DashboardIcon />);

  return staticUi.map((each) =>
    !each.svg ? (
      each
    ) : (
      <div className={styles.card}>
        <div>{parse(each.svg)}</div>
        <h1 className={styles.drawerTitle}>{each.name}</h1>
      </div>
    )
  );

  // return staticUi.map((each) => (
  //   <div className={styles.card}>
  //     <div>{each.svg ? parse(each.svg) : each}</div>
  //     <h1 className={styles.drawerTitle}>{each.name}</h1>
  //   </div>
  // ));

  // userSelectedIcons.forEach((item) => {
  //   staticUi.splice(3, 0, parse(item.svg));
  // });

  // return staticUi.map((each) => (
  //   <div className={styles.card}>
  //     <div>{each}</div>
  //     <h1 className={styles.drawerTitle}></h1>
  //   </div>
  // ));

  // return drawerDivider;
}

export default DrawerCard;
