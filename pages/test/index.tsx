export default function TestPage() {
  const events = [
    { name: "dummy one", date: "2019-01-05" },
    { name: "dummy some", date: "2019-02-04" },
    { name: "dummy another", date: "2019-01-07" },
    { name: "dummy really dummy", date: "2019-04-05" },
    { name: "dummy and funny", date: "2019-06-05" },
    { name: "dummy not funny", date: "2019-06-22" },
  ].sort((a, b) => (a.date < b.date ? -1 : 1));
  // remember to sort them early so you will not have to worry about it anytime later on

  // extract distinct names from available events, we are using Set constructor to make sure any key won't be doubled and also that there won't be any empty month
  const groupNames = Array.from(
    new Set(events.map((k) => k.date.split("-")[1])),
  ); // split date by hyphen and return only month part

  // define place for groups
  let groups = {};

  // create groups containers from names
  groupNames.forEach((k) => {
    groups[k] = [];
  });

  // iterate by events and attach every to given group based on its month
  events.forEach((k) => {
    const month = k.date.split("-")[1];
    groups[month].push(k);
  });

  // container for demo purposes
  let resultHTML = "";
  for (let key in groups) {
    resultHTML += `<h2>${key}</h2>`;
    for (let event of groups[key]) {
      resultHTML += `<p>${event.date} &mdash; ${event.name}</p>`;
    }
  }

  return (
    <>
      <div>{resultHTML}</div>
    </>
  );
}
