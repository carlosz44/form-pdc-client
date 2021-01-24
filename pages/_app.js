import "../css/index.css";
import Head from "next/head";
import Layout from "../components/Layout";
import AuthState from "../context/auth/authState";
import AppState from "../context/app/appState";

function MyApp({ Component, pageProps }) {
  return (
    <AuthState>
      <AppState>
        <Layout>
          <Head>
            <title>Polvos de Chorrillos - Registro de Documentación</title>
            <meta
              name="Description"
              content="Registro de documentación del proyecto Polvos de Chorrillos."
            />
          </Head>

          <Component {...pageProps} />
        </Layout>
      </AppState>
    </AuthState>
  );
}

export default MyApp;
