// The stats
export function Stats({ items }) {
  let itemPacked = items.filter((item) => item.packed).length;
  let itemPackedPercent = (itemPacked / items.length) * 100;
  let isPercentDecimal = !Number.isInteger(itemPackedPercent);

  return (
    <footer className="stats">
      {items.length ? (
        <>
          {itemPackedPercent === 100 ? (
            <em>You got everything packed. Let's rock the trip🎉</em>
          ) : (
            <em>
              💼 You have {items.length} item on your list,
              {itemPacked
                ? ` And you already packed ${itemPacked} item (${
                    isPercentDecimal
                      ? itemPackedPercent.toFixed(1)
                      : itemPackedPercent
                  }%)`
                : " And you haven't packed any item yet."}
            </em>
          )}
        </>
      ) : (
        <em>Let's have some packings.💼</em>
      )}
    </footer>
  );
}
