import React from 'react';

import WinXP from 'WinXP';
import { useParentMouseBridge } from 'hooks';

const App = () => {
  useParentMouseBridge();

  return <WinXP />;
};

export default App;
