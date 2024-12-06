export function Tabs({ todos, selectedTab, setSelectedTab }) {
  const tabs = ["All", "Open", "Completed"];

  const calculateNumOfTasks = (tab) => {
    if (tab === "All") return todos.length;
    else if (tab === "Open") return todos.filter((val) => !val.complete).length;
    else return todos.filter((val) => val.complete).length;
  };

  return (
    <nav className="tab-container">
      {tabs.map((tab, index) => {
        const numOfTasks = calculateNumOfTasks(tab);
        return (
          <button
            onClick={() => setSelectedTab(tab)}
            className={
              "tab-button " + (tab === selectedTab ? " tab-selected" : "")
            }
            key={index}
          >
            <h4>
              {tab} <span>({numOfTasks}) </span>{" "}
            </h4>
          </button>
        );
      })}
      <br />
    </nav>
  );
}
