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

function DrawerCard({ expandedDrawer }) {
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
    <DashboardIcon iconName="Dashboard" expandedDrawer={expandedDrawer} />,
    <HomeIcon iconName="Home" expandedDrawer={expandedDrawer} />,
    <CogIcon iconName="Settings" expandedDrawer={expandedDrawer} />,
    <MessageQuestionIcon iconName="Support" expandedDrawer={expandedDrawer} />,
    <ShieldIcon iconName="Privacy" expandedDrawer={expandedDrawer} />,
    ,
  ];

  const drawerDivider = <DrawerDivider />;

  const userSelectedIcons = [];
  data.map((index) => {
    userSelectedIcons.push(index);
  });
  console.log(userSelectedIcons);

  userSelectedIcons.reverse().forEach((item) => {
    staticUi.splice(2, 0, item);
  });
  staticUi.splice(1, 0, drawerDivider);
  staticUi.splice(8, 0, drawerDivider);

  return staticUi.map((each) =>
    !each.svg ? (
      each
    ) : (
      <div className={styles.card}>
        <button
          className={[
            styles.icon,
            expandedDrawer ? styles.cardClickable : "",
            expandedDrawer ? styles.mousePointer : "",
          ].join(" ")}
        >
          {parse(each.svg)}
        </button>
        <button
          className={[
            styles.drawerTitle,
            expandedDrawer ? styles.cardClickable : "",
            expandedDrawer ? styles.mousePointer : "",
          ].join(" ")}
        >
          {each.name}
        </button>
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
