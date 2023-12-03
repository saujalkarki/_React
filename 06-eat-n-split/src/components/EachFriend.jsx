export default function EachFriend({ friend, selectedFriend, onSelectedFrnd }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <div className="friend">
      <img src={friend.image} alt="friendImage" />
      <div className="detail">
        <h3>{friend.name}</h3>
        <p>
          {friend.balance > 0 ? (
            <span style={{ color: "green" }}>
              {friend.name} owes you {friend.balance}€
            </span>
          ) : friend.balance === 0 ? (
            <span>You and {friend.name} are even</span>
          ) : (
            <span style={{ color: "red" }}>
              You owes {friend.name} {Math.abs(friend.balance)}€
            </span>
          )}
        </p>
      </div>
      <button onClick={() => onSelectedFrnd(friend)}>
        {isSelected ? "Close" : "Select"}
      </button>
    </div>
  );
}
