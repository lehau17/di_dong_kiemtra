// import React from 'react';
// import { Provider } from 'react-redux';
// import store from './redux/store';
// import store_toolkit from './redux/store_toolkit';
// import Screen_02 from './components/screen_02';
// import Screen_02_toolkit from './components/screen_02_toolkit';

// export default function App() {
//   return (
//     <Provider store={store_toolkit}>
//       <Screen_02_toolkit />
//     </Provider>
//   );
// }


import React from 'react';
import { RecoilRoot } from 'recoil';
import Screen_02 from './components/screen_02_recoil';

export default function App() {
  return (
    <RecoilRoot>
      <Screen_02 />
    </RecoilRoot>
  );
}
