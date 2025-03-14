import Card from "./components/Card";

function App() {
  const cardDetail = [
    {
      title: "Title 1",
      subTitle: "Sub Title 1",
      content: " This is content 1.",
      published: true,
    },
    {
      title: "Title 2",
      subTitle: "Sub Title 2",
      content: " This is content 2.",
      published: true,
    },
    {
      title: "Title 3",
      subTitle: "Sub Title 3",
      content: " This is content 3.",
      published: false,
    },
    {
      title: "Title 4",
      subTitle: "Sub Title 4",
      content: " This is content 4.",
      published: true,
    },
    {
      title: "Title 5",
      subTitle: "Sub Title 5",
      content: " This is content 5.",
      published: false,
    },
    {
      title: "Title 6",
      subTitle: "Sub Title 6",
      content: " This is content 6.",
      published: false,
    },
  ];

  return (
    <div className=" grid grid-cols-3 gap-2 m-2">
      {cardDetail.map((eachCard, index) => {
        return (
          <Card
            key={index}
            title={eachCard.title}
            subTitle={eachCard.subTitle}
            content={eachCard.content}
          />
        );
      })}
      {/* {cardDetail
        .filter((eachCard, index) => {
          return eachCard.published === false;
        })
        .map((eachCard, index) => {
          return (
            <Card
              key={index}
              title={eachCard.title}
              subTitle={eachCard.subTitle}
              content={eachCard.content}
            />
          );
        })} */}
    </div>
  );
}

export default App;

// The name of components in react should always start from capital letter
// And the reason is, to differentiate between tags(elements) and Components
// Rendering list in react
// Each list in react should key
// Each key in list should have unique key name
