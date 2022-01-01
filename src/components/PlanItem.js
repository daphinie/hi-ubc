import ClearIcon from "@mui/icons-material/Clear";

const PlanItem = ({ planItem, onDelete }) => {
  return (
    <div className="planItem">
      <h3 style={{ color: "rgba(0, 0, 0, 0.87)" }}>
        <ClearIcon
          className="clearIcon"
          style={{ color: "red" }}
          onClick={() => onDelete(planItem.id)}
        />
        {"  "}
        {planItem.title}
      </h3>
    </div>
  );
};

export default PlanItem;
