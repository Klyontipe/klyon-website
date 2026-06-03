import { createRoot } from "react-dom/client";
import emailjs from "emailjs-com";
import App from "./App.tsx";
import "./index.css";

emailjs.init("ZJMuCYNkzxGhqore6");

createRoot(document.getElementById("root")!).render(<App />);
