import { Provider } from "jotai";

import { SvgRoot } from "./SvgRoot";
import { Controls } from "./Controls";

const App = () => (
  <>
    <Provider>
      <SvgRoot />
      <Controls />
    </Provider>
    <hr />
    <Provider>
      <SvgRoot />
      <Controls />
    </Provider>
  </>
);

export default App;
