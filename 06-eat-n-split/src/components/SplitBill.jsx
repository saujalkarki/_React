export function SplitBill({ selectedFriend }) {
  return (
    <div key={selectedFriend.id} className="splitBill ">
      <h2>SPLIT A BILL WITH {selectedFriend.name}</h2>
      <div className="billValue">
        <label> 💰 Bill Value</label>
        <input type="text" />
      </div>
      <div className="expenses">
        <label> 🧍🏻‍♂️ Your expense</label>
        <input type="text" />
      </div>
      <div className="inputfriendexpenses">
        <label> {`👫 ${selectedFriend.name}'s expense`}</label>
        <input type="text" />
      </div>
      <div className="who pay">
        <label>🤑 Who is paying the Bill?</label>
        <select name="whoP" id={selectedFriend.id}>
          <option value="you">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>
      </div>
      <button>Split Bill</button>
    </div>
  );
}
