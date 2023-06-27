import * as React from "react"
import Svg, { Path } from "react-native-svg"
const BriefCase = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke={props.color ? props.color : "#000000"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"
    />
    <Path
      stroke={props.color ? props.color : "#000000"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
    />
  </Svg>
)
export default BriefCase
