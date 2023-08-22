import { Outlet } from "@umijs/max";
import HomeHeader from "../home-header";

function Template() {
  return (
    <>
      <HomeHeader></HomeHeader>
      <div>Template</div>
      <Outlet></Outlet>
    </>
  );
}
export default Template;
