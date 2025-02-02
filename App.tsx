import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AIAssistant } from "./components/AIAssistant";
export function App() {
  return (
    <Router>
      <Layout />
      <AIAssistant />
    </Router>
  );
}
