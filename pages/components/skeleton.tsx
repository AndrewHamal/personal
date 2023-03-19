import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props: any) => (
  <ContentLoader 
    speed={2}
    width={300}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
      <rect x="50" y="6" rx="4" ry="4" width="343" height="30" />
      <rect x="8" y="6" rx="4" ry="4" width="35" height="30" />
      <rect x="50" y="55" rx="4" ry="4" width="343" height="30" />
      <rect x="8" y="55" rx="4" ry="4" width="35" height="30" />
      <rect x="50" y="104" rx="4" ry="4" width="343" height="30" />
      <rect x="8" y="104" rx="4" ry="4" width="35" height="30" />
  </ContentLoader>
)

export default Skeleton
