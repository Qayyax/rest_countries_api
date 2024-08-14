export default function FilterItems({onClick, children}) {
  return (
    <div onClick={onClick}>{children}</div>
  )
}
