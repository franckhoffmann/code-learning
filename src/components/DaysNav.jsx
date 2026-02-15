import { styles } from "../styles/appStyles";

export function DaysNav({ days, selectedDayId, onSelectDay }) {
  return (
    <nav style={styles.daysNav}>
      <div style={styles.daysNavTitle}>Days</div>

      <div style={styles.daysList}>
        {days.map((d) => {
          const isActive = d.id === selectedDayId;

          return (
            <button
              key={d.id}
              type="button"
              onClick={() => onSelectDay(d.id)}
              style={isActive ? styles.dayItemActive : styles.dayItem}
            >
              {d.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
