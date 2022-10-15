export const totalVerdict = (car: {
  rating: [string, number][];
}) => {
  const sumRating = car.rating.reduce((acc, item) => {
    console.log(acc, item);

    return item[1] + acc;
  }, 0);
  const verdict = sumRating / car.rating.length;
  return verdict;
};
