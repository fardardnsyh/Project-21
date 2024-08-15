import React, { ReactElement } from "react";
import LiftOffImg from "../images/astral-nav-dawn-3.svg";
import PalmBottomLeft from "../images/palm-bottom-left.svg";
import PalmBottomRight from "../images/palm-bottom-right.svg";
import PalmTopRight from "../images/palm-top-right.svg";

interface Props {}

export default function LiftOffBackgroundImg({}: Props): ReactElement {
  return (
    <>
      <img
        id="lift-off-img"
        src={LiftOffImg}
        alt="rocket lifting off at dawn"
      />
      <img
        className="palm"
        id="palm-bottom-left"
        src={PalmBottomLeft}
        alt="palm bottom left"
      />
      <img
        className="palm"
        id="palm-bottom-right"
        src={PalmBottomRight}
        alt="palm bottom right"
      />
      <img
        className="palm"
        id="palm-top-right"
        src={PalmTopRight}
        alt="palm top right"
      />
    </>
  );
}
