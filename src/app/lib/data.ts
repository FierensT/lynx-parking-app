
export async function fetchAllParkings() {
  const {total_count, results} = await fetch(
    "https://gent.opendatasoft.com/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records?limit=20"
  , {cache: "no-store"}).then(data => data.json());
  return results as Promise<parking[]>;
}

export async function fetchParkingByName(name: string) {
  const {total_count, results} = await fetch(
    `https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records?select=name%2C%20description%2C%20openingtimesdescription%2C%20urllinkaddress%2C%20operatorinformation%2C%20categorie%2C%20type%2C%20%20location&where=name%20like%20%22${name}%22&limit=20`
  , {cache: "no-store"}).then(data => data.json());
  return results[0] as Promise<parkingPageData>;
}
