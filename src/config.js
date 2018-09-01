export const config = {
  heurl: "http://starlord.hackerearth.com/movieslisting"
};

export const searchByOptions = [
  {
    key: "title",
    value: "title",
    text: "Title"
  },
  {
    key: "director",
    value: "director",
    text: "Director"
  },

  {
    key: "actor",
    value: "actor",
    text: "Actor"
  }
];

export const sortByOptions = [
  { key: "popularity", value: "popularity", text: "Popularity" },
  { key: "year", value: "year", text: "Year" }
];

export const filterByLangOptions = [
  { key: "Aboriginal", value: "Aboriginal", text: "Aboriginal" },
  { key: "English", value: "English", text: "English" },
  { key: "French", value: "French", text: "French" },
  { key: "Japanese", value: "Japanese", text: "Japanese" },
  { key: "Mandarin", value: "Mandarin", text: "Mandarin" },
  { key: "Spanish", value: "Spanish", text: "Spanish" }
];
export const filterByCountryOptions = [
  { key: "Australia", value: "Australia", text: "Australia" },
  { key: "Belgium", value: "Belgium", text: "Belgium" },
  { key: "Canada", value: "Canada", text: "Canada" },
  { key: "China", value: "China", text: "China" },
  { key: "France", value: "France", text: "France" },
  { key: "Germany", value: "Germany", text: "Germany" },
  { key: "Japan", value: "Japan", text: "Japan" },
  { key: "New Line", value: "New Line", text: "New Line" },
  { key: "New Zealand", value: "New Zealand", text: "New Zealand" },
  { key: "USA", value: "USA", text: "USA" }
];

export const apiurl = "http://www.omdbapi.com/?apikey=dc30cd7a&i=";
