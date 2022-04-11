import React from "react";
import { AppProps } from "next/app";
import "@styles/global.css";
import { Provider } from "react-redux";
import store, { persistor } from "@redux/store";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Component {...pageProps} />
            </PersistGate>
        </Provider>
    );
}

export default MyApp;
