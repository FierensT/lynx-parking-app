
export async function fetchAllParkings() {
  const {total_count, results} = await fetch(
    "https://gent.opendatasoft.com/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records"
  ).then(data => data.json());

  return results;
}
