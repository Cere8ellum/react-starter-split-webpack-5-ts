import * as commonStyles from "./assets/styles/common.module.scss";
import * as styles from "./app.module.scss";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./layout/Header/header";
import Footer from "./layout/Footer/footer";
import AppRoutes from "./routes/routes";

export default function App() {
  return (
    <Router>
      <div className={styles.wrapper}>
        <Header />
        <main className={[commonStyles.container, styles.content].join(" ")}>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
