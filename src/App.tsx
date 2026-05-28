/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Gameplay from "./pages/Gameplay";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Support from "./pages/Support";

import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <Router basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gameplay" element={<Gameplay />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  );
}
