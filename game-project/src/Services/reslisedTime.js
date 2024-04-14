const converterTime = (time) => {
  const nameOfmonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const target = time.indexOf("-", 0);
  const motime = Number(time.slice(target + 1, target + 3));
  const month = nameOfmonths[motime -1]
  const year = time.slice(0,target)
  const day = time.slice(time.indexOf("-",5) + 1)
  return `${month} ${day} ,${year}`;
};
export default converterTime;
