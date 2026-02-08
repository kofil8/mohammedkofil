import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { LanguageProvider } from "./context/LanguageContext";
import "./i18n/config";
import "./index.css";
import { registerServiceWorker } from "./utils/serviceWorker";

// Register Service Worker for PWA support
registerServiceWorker();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
);
