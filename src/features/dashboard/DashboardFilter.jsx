import Filter from "../../ui/Filter";

function DashboardFilter() {
  return (
    <Filter
      filterField="last"
      options={[
        { value: "1", label: "Last 1 day" },
        { value: "3", label: "Last 3 days" },
        { value: "7", label: "Last 7 days" },
      ]}
    />
  );
}

export default DashboardFilter;
