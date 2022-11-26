import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  //making a database using arrays
  const expenses_array = [
    {
      id: "e1",
      title: "AC filter",
      amount: 95.13,
      //inbuilt method for date in js
      date: new Date(2022, 11, 5),
    },
    {
      id: "e2",
      title: "Suspension repair",
      amount: 210.13,
      date: new Date(2022, 10, 23),
    },
    {
      id: "e3",
      title: "Seat Covers",
      amount: 100.13,
      date: new Date(2021, 5, 5),
    },
    {
      id: "e1",
      title: "Lights replace",
      amount: 54.13,
      date: new Date(2020, 3, 4),
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses_array}></Expenses>
    </div>
  );
}

export default App;
