import EachFriend from "./EachFriend";

export function Friend({ frnd, selectedFriend, onSelectedFrnd }) {
  return (
    <div className="friends">
      {frnd.map((friend) => (
        <EachFriend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelectedFrnd={onSelectedFrnd}
        />
      ))}
    </div>
  );
}
