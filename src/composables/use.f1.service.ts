export const useF1Service = {
  getDrivers: () => {
    return fetch('https://ergast.com/api/f1/drivers.json?limit=1000')
      .then((response) => response.json())
      .then((data) => data.MRData.DriverTable.Drivers);
  }
};
