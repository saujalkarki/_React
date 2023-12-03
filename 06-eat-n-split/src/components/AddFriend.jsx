import { useState } from "react";

export function AddFriend({ onNewFriend, hideFrnd, onToggleHideFrnd }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id: id,
      name: name,
      image: `${image}${id}`,
      balance: 0,
    };

    onNewFriend(newFriend);
    onToggleHideFrnd();

    setName("");
    setImage("https://i.pravatar.cc/48?u=");
  }

  return (
    <>
      <form
        className={`addFriend ${hideFrnd ? "" : "hide"}`}
        onSubmit={handleSubmit}
      >
        <div className="friendName">
          <span>👫</span>
          <h3>Friend name</h3>
          <input
            id="friendNameInput"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="friendImg">
          <span>🌄</span>
          <h3>Image URL</h3>
          <input
            id="friendImageInput"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button className="addBtn">Add</button>
      </form>
      <div style={hideFrnd ? { gridRow: "3" } : {}} className="changeBtn">
        <button onClick={onToggleHideFrnd}>
          {hideFrnd ? "Close" : "Add Friend"}
        </button>
      </div>
    </>
  );
}
