import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"
const Welcome = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={310}
    height={398}
    fill="none"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h310v398H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="matrix(.00045 0 0 .00035 0 -.001)" />
      </Pattern>
      <Image
        id="b"
        width={2223}
        height={2860}
      />
    </Defs>
  </Svg>
)
export default Welcome