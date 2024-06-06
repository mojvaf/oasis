import Filter from "../../ui/Filter";

function DashboardFilter() {
  return (
    <Filter
      filterField="last"
      options={[
        { value: "3", label: "Last 3 day" },
        { value: "7", label: "Last 7 days" },
        { value: "10", label: "Last 10 days" },
      ]}
    />
  );
}

export default DashboardFilter;
