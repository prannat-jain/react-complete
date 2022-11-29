import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  if (props.list.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        Found no entries for this time period
      </h2>
    );
  }

  return (
    <ul className="expenses-list">
      {/*map() is a built in js function which gives an array of expenses_array in App.js*/}
      {props.list.map((expenseObj) => (
        <ExpenseItem
          //key helps in identifying individual items of a component
          key={expenseObj.id}
          title={expenseObj.title}
          amount={expenseObj.amount}
          date={expenseObj.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
