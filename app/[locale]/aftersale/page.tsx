import Maintaince from "./maintainpoint";
import Whychose from "./whychose";
import Cards from "./cards";
import ComingSoon from "../common/commingsoon";
import Carosilaftersale from "./carosil/carosilaftersale";

async function Aftersale() {
  return (
    <>
    <Carosilaftersale/>
      <Cards />
      <Maintaince />
    </>
  );
}

export default Aftersale;
