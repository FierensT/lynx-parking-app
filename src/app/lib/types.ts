type parking = {
    name: string;
    isopennow: string;
    availablecapacity: number;
    locationanddimension: string;
  }

  type parkingListItem ={
    key:number;
    name: string;
    openstate: string;
    availablecapacity: number;
    roadname: string;
  }

  type parkingPageData = {
    name: string;
    description: string;
    openingtimesdescription: number;
    urllinkaddress: string;
    operatorinformation: string;
    categorie: string;
    type: string;
    location: {
        lon: number,
        lat: number
    };
  }
  