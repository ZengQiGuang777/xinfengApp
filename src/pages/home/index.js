import { Outlet } from "@umijs/max";
import HomeHeader from "./home-header";
import { PageContainer } from "@ant-design/pro-components";

function Home() {
  return (
    <PageContainer>
      <HomeHeader></HomeHeader>
      <Outlet></Outlet>
    </PageContainer>
  );
}
export default Home;
