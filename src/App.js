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
              <Button to="/page3" x="195" y="390" w="100" h="40" />
            </Screen>
          }
        />
        <Route
          path="/page3"
          element={
            <Screen image="/page3.png">
              <Button to="/page4" x="10" y="100" w="300" h="350" />
            </Screen>
          }
        />
        <Route
          path="/page4"
          element={
            <Screen image="/page4.png">
              <Button to="/" x="180" y="405" w="120" h="40" />
            </Screen>
          }
        />
      </Routes>
    </div>
  );
}
