import { ColorRing } from 'react-loader-spinner'
export default function Loading() {

  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
    />
  )
}
