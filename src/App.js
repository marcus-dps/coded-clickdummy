import { Routes, Route } from "react-router-dom";
import Button from "./Button";
import Screen from "./Screen";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Screen image="/page1.png">
              <Button to="/page2" x="175" y="380" w="120" h="40" />
            </Screen>
          }
        />
        <Route
          path="/page2"
          element={
            <Screen image="/page2.png">
              <Button to="/" x="50" y="390" w="100" h="40" />
            </Screen>
          }
        />
      </Routes>
    </div>
  );
}
