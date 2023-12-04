import { useState } from "react";

export function SplitBill({ selectedFriend, onBillSubmission }) {
  const [billValue, setBillValue] = useState(0);
  const [myBillValue, setMyBillValue] = useState(0);
  const [user, setUser] = useState("you");

  const friendBillValue = billValue - myBillValue;

  function handleSubmit(e) {
    e.preventDefault();

    if (!billValue || !myBillValue) return;

    onBillSubmission(user === "you" ? friendBillValue : -myBillValue);
  }

  return (
    <div key={selectedFriend.id} className="splitBill ">
      <h2>SPLIT A BILL WITH {selectedFriend.name.toUpperCase()}</h2>
      <form className="billValue" onSubmit={handleSubmit}>
        <label> 💰 Bill Value</label>
        <input
          type="number"
          value={billValue ? billValue : ""}
          onChange={(e) =>
            setBillValue(e.target.value < 0 ? NaN : Number(e.target.value))
          }
        />
        <label> 🧍🏻‍♂️ Your expense</label>
        <input
          type="number"
          value={myBillValue ? myBillValue : ""}
          onChange={(e) => {
            e.target.value <= billValue
              ? setMyBillValue(
                  e.target.value < 0 ? NaN : Number(e.target.value)
                )
              : null;
          }}
        />
        <label> {`👫 ${selectedFriend.name}'s expense`}</label>
        <input
          type="number"
          value={friendBillValue ? friendBillValue : ""}
          disabled
        />
        <label>🤑 Who is paying the Bill?</label>
        <select
          name="whoP"
          id={selectedFriend.id}
          value={user}
          onChange={(e) => setUser(e.target.value)}
        >
          <option value="you">You</option>
          <option value={selectedFriend.name}>{selectedFriend.name}</option>
        </select>
        <button>Split Bill</button>
      </form>
    </div>
  );
}
