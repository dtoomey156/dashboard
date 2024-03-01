import { useEffect, useState, useContext } from "react";
import { UserContext } from "../CheckForUser/CheckForUser";
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

  const { username } = useContext(UserContext);
  const [logoDisplay, setLogoDisplay] = useState(false);

  const staticUi = [
    <DashboardIcon
      key={"dashboard"}
      iconName="Dashboard"
      expandedDrawer={expandedDrawer}
    />,
    <DrawerDivider key={"divider1"} />,
    <HomeIcon key={"home"} iconName="Home" expandedDrawer={expandedDrawer} />,
    <DrawerDivider key={"divider2"} />,
    <CogIcon
      key={"settings"}
      iconName="Settings"
      expandedDrawer={expandedDrawer}
    />,
    <MessageQuestionIcon
      key={"support"}
      iconName="Support"
      expandedDrawer={expandedDrawer}
    />,
    <ShieldIcon
      key={"privacy"}
      iconName="Privacy"
      expandedDrawer={expandedDrawer}
    />,
  ];

  // const array = [
  //   <DashboardIcon key={1} iconName="Dashboard" />,
  //   <ShieldIcon key={2} iconName="Privacy" />,
  // ];

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (username) {
  //       setLogoDisplay(true);
  //     }
  //   }, 1);
  // }, []);

  useEffect(() => {
    setLogoDisplay(true);
  }, []);

  const userSelectedIcons = [];
  data.map((index) => {
    userSelectedIcons.push(index);
  });

  console.log(logoDisplay, "logodisplay from Drawer Card");

  userSelectedIcons.reverse().forEach((item) => {
    staticUi.splice(3, 0, item);
  });

  console.log(logoDisplay, "from drawercard");

  // return (
  //   <>
  //     <DashboardIcon />
  //     <DrawerDivider />
  //     <HomeIcon />
  //     <DrawerDivider />
  //     <CogIcon />
  //     <MessageQuestionIcon />
  //     <ShieldIcon />
  //   </>
  // );

  // return array;

  return staticUi.map((each) =>
    !each.svg ? (
      each
    ) : (
      <div
        key={each.name}
        className={[styles.card, logoDisplay ? styles.fadeOnIcons : ""].join(
          " "
        )}
      >
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
