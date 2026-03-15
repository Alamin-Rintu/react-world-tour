import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";

const loadCountries = fetch(
  "https://openapi.programming-hero.com/api/all",
).then((res) => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<p>Rintu vai is coming</p>}>
        <Countries loadCountries={loadCountries}></Countries>
      </Suspense>
    </>
  );
}

export default App;
