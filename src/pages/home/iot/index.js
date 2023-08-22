import { Outlet } from "@umijs/max";
import HomeHeader from "../home-header";

function Iot() {
  return (
    <>
      <HomeHeader></HomeHeader>
      <div>Iot</div>
      <Outlet></Outlet>
    </>
  );
}
export default Iot;
