import { useEffect, useState, useMemo } from "react";
import { data } from "../../data/data";
import styles from "./DrawerCard.module.css";
import DashboardIcon from "../icons/DashboardIcon/DashboardIcon";
import DrawerDivider from "../DrawerDivider/DrawerDivider";
import HomeIcon from "../icons/HomeIcon/HomeIcon";
import CogIcon from "../icons/CogIcon/CogIcon";
import MessageQuestionIcon from "../icons/MessageQuestionIcon";
import ShieldIcon from "../icons/ShieldIcon";

import Chat from "../Chat/Chat";
import parse from "html-react-parser";

function DrawerCard({ expandedDrawer }) {
  const [logoDisplay, setLogoDisplay] = useState(false);
  const [appArray, setAppArray] = useState([]);
  const [uniqueAppArray, setUniqueAppArray] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLogoDisplay(true);
    }, 60);
  }, []);

  // function openApp(e) {
  //   const app = e.target.firstChild.firstChild.innerHTML;
  //   switch (app) {
  //     case "Chat":
  //       setAppArray([...appArray, <DashboardIcon />]);
  //       break;
  //     case "file-upload-outline":
  //       // const fileUpload = <HomeIcon />;
  //       setAppArray([...appArray, <HomeIcon />]);
  //       break;
  //   }
  // }

  // function setUniqueArray() {
  //   if (appArray.length > 1) {
  //     const length = appArray.length;
  //     appArray.forEach((each, index) => {
  //       const counter = index + 1;
  //       if (counter != length) {
  //         const iteration = each.type.name;
  //         const checkAgainst = appArray[index + 1].type.name;
  //         if (iteration === checkAgainst) {
  //           const pop = [...appArray].pop();
  //           // setUniqueAppArray([...uniqueAppArray, pop]);
  //           console.log(pop, "pop");
  //         }
  //       }
  //     });
  //   }
  // }

  // setUniqueArray();

  const staticUi = [
    <DashboardIcon
      key={"dashboard"}
      iconName="Dashboard"
      expandedDrawer={expandedDrawer}
      // passedFunction={openApp}
    />,
    <DrawerDivider key={"divider1"} />,
    <HomeIcon
      key={"home"}
      iconName="Home"
      expandedDrawer={expandedDrawer}
      // passedFunction={openApp}
    />,
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

  // const userSelectedIcons = [];
  // data.map((index) => {
  //   userSelectedIcons.push(index);
  // });
  let userAndStaticRenderedUi = [];

  function populateDrawer() {
    const userSelectedIcons = [];
    data.map((index) => {
      userSelectedIcons.push(index);
    });
    userSelectedIcons.reverse().forEach((item) => {
      staticUi.splice(3, 0, item);
    });
    userAndStaticRenderedUi = [...staticUi];
  }
  populateDrawer();

  // const userSelectedIcons = [];
  // data.map((index) => {
  //   userSelectedIcons.push(index);
  // });

  // const userApps = [...userSelectedIcons];

  // userSelectedIcons.reverse().forEach((item) => {
  //   staticUi.splice(3, 0, item);
  // });

  return userAndStaticRenderedUi.map((each) =>
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
          // onClick={openApp}
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
}

export default DrawerCard;
