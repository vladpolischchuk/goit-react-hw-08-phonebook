import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "redux/store";

import AuthProvider from "./modules/AuthProvider/AuthProvider";
import NavbarMenu from './modules/Navbar/NavbarMenu';
import UserRoutes from "./shared/UserPoutes/UserRoutes";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <NavbarMenu />
            <UserRoutes />
          </BrowserRouter>
        </AuthProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;