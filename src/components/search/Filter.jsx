import { FaAngleDown } from "react-icons/fa6";

export default function Filter({onClick, children}) {
  return (
  <div>
      <div onClick={onClick}>
        <span>Filter by Region</span>
        <FaAngleDown />
      </div>
      <div>{children}</div>
    </div>
  )
}
