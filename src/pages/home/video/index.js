import { Outlet } from "@umijs/max";
import HomeHeader from "../home-header";

function Video() {
  return (
    <>
      <HomeHeader></HomeHeader>
      <div>Video</div>
      <Outlet></Outlet>
    </>
  );
}
export default Video;
