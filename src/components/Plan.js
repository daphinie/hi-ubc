import { useState } from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { Card, Collapse, CardContent } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlanItem from "./PlanItem";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Plan = ({ planItems, onDelete }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="plan" style={{ backgroundColor: "#91ccff" }}>
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
        style={{ color: "white" }}
      >
        {" "}
        📝 your plan
        <ExpandMoreIcon />
      </ExpandMore>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent style={{ color: "white" }}>
          {planItems.length > 0 ? (
            planItems.map((planItem) => (
              <PlanItem planItem={planItem} onDelete={onDelete} />
            ))
          ) : (
            <h3> your plan is currently empty! </h3>
          )}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Plan;
