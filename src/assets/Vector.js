import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Vector = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 1H3a2 2 0 0 0-2 2v3m18 0V3a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M1 14v3a2 2 0 0 0 2 2h3"
    />
  </Svg>
)
export default Vector
