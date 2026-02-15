import "./App.css";
import { useMemo, useState } from "react";
import { styles } from "./styles/appStyles";
import { LeftPanel } from "./components/LeftPanel";
import { RightPanel } from "./components/RightPanel";
import { days } from "./data/days";
import { DaysNav } from "./components/DaysNav";

export default function App() {
  const [selectedDayId, setSelectedDayId] = useState(days[0].id);

  const selectedDay = useMemo(() => {
    return days.find((d) => d.id === selectedDayId) ?? days[0];
  }, [selectedDayId]);

  return (
    <div style={styles.page}>
      <div className="shell">
        <LeftPanel
          days={days}
          selectedDayId={selectedDayId}
          onSelectDay={setSelectedDayId}
        />
        <div style={styles.rightColumn}>
          <div style={styles.rightTop}>
            <DaysNav
              days={days}
              selectedDayId={selectedDayId}
              onSelectDay={setSelectedDayId}
            />
          </div>

          <div style={styles.rightRule} />

          <RightPanel day={selectedDay} />
        </div>
      </div>
    </div>
  );
}
