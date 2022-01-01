import { useState } from "react";
import { Container } from "@mui/material";
import Header from "./components/Header";
import Places from "./components/Places";
import Plan from "./components/Plan";
import items from "./data";

const App = () => {
  const [places] = useState(items);
  const [planItems, setPlanItems] = useState([]);

  const deletePlanItem = (id) => {
    setPlanItems(planItems.filter((planItem) => planItem.id !== id));
  };

  const addPlanItem = ({ place }) => {
    if (!planItems.includes(place.id)) {
      setPlanItems([...planItems, place]);
    }
  };

  return (
    <Container>
      <Header />
      <h2 style={{ color: "grey" }}> Let's explore UBC!</h2>
      <Container style={{ padding: "20px 0 20px 0" }}>
        <Plan planItems={planItems} onDelete={deletePlanItem} />
      </Container>
      <Container>
        <Places places={places} onAdd={addPlanItem} />
      </Container>
    </Container>
  );
};

export default App;
