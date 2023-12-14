import { useState } from "react";
import { Friend, AddFriend, SplitBill } from "./components/index";

function App() {
  const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];

  const [frnd, setFrnd] = useState(initialFriends);
  const [hideFrnd, setHideFrnd] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleNewFriend(friend) {
    setFrnd((friends) => [...friends, friend]);
  }

  function handleToggleHideFrnd() {
    setHideFrnd(!hideFrnd);
    setSelectedFriend(null);
  }

  function handleSelectedFrnd(frnd) {
    setSelectedFriend((cur) => (cur?.id === frnd.id ? null : frnd));
    setHideFrnd(false);
  }

  function handleBillSubmission(value) {
    setFrnd((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }

  return (
    <div className="app">
      <Friend
        frnd={frnd}
        selectedFriend={selectedFriend}
        onSelectedFrnd={handleSelectedFrnd}
      />
      <AddFriend
        frnd={frnd}
        onNewFriend={handleNewFriend}
        hideFrnd={hideFrnd}
        onToggleHideFrnd={handleToggleHideFrnd}
      />
      {selectedFriend && (
        <SplitBill
          key={selectedFriend.id}
          frnd={frnd}
          selectedFriend={selectedFriend}
          onBillSubmission={handleBillSubmission}
        />
      )}
    </div>
  );
}

export default App;
