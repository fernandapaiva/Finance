import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const Checked = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Circle cx={8} cy={8} r={8} fill="#1BA37A" />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.333 5.5 6.75 10.083 4.667 8"
    />
  </Svg>
)
export default Checked
