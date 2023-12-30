import Main from "./components/Main";
import Benfits from "./components/Benfits";
import Timeline from "@/app/components/Timeline";
import Certified from "./components/Certified";

export default async function Home() {
  return (
    <>
      <Main />
      <Benfits />
      <Timeline />
      <Certified />
    </>
  );
}
