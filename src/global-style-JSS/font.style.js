import { css } from "@emotion/react"
import RobotoFont from "src/asset/font/roboto/Roboto-Regular.ttf";
import IRAN_Sans_Light from "src/asset/font/IRAN-Sans-Light.ttf";
import IRAN_Sans_Bold from "src/asset/font/IRAN-Sans-Bold.ttf";
import IRAN_Sans_Regular from "src/asset/font/IRAN-Sans-Regular.ttf";
import IRAN_Sans_Black from "src/asset/font/IRAN-Sans-Black.ttf";
const font = css`
  @font-face {
    font-family: roboto;
    src: url(${RobotoFont});
    font-weight: 400;
  }
  @font-face {
    font-family: iransans;
    src: url(${IRAN_Sans_Light});
    font-weight: 300;
  }
  @font-face {
    font-family: iransans;
    src: url(${IRAN_Sans_Regular});
    font-weight: 400;
  }
  @font-face {
    font-family: iransans;
    src: url(${IRAN_Sans_Bold});
    font-weight: 700;
  }
  @font-face {
    font-family: iransans;
    src: url(${IRAN_Sans_Black});
    font-weight: 900;
  }
`

export default  font;