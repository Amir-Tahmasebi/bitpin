import { Suspense, lazy } from "react";
// import MarketLists from "./../components/MarketLists";
import Lazy from './../components/Lazy'

const MarketLists = lazy(() => import("./../components/MarketLists"))

function App() {
  return (
    <Suspense fallback={<Lazy />}>
      <MarketLists />;
    </Suspense>
  );
}

export default App;
