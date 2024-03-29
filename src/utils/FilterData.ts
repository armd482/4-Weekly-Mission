interface Data {
  title: string | null;
  url: string;
  description: string | null;
}

const FilterData = <T extends Data>(cardData: T[], topic: string) => {
  const filteredData = cardData.filter(
    (data) =>
      data.url.includes(topic) ||
      data.title?.includes(topic) ||
      data.description?.includes(topic),
  );
  if (filteredData) {
    return filteredData;
  }
  return [];
};

export default FilterData;
