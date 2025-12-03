// Map data to frontend format. The main element is location key and we need to map all data to it. We will have 5 objects at the end.

const loc = [
  {
    location_key: [32, 22, 11],
    autoassign: 1,
  },
  {
    location_key: [41, 42],
    autoassign: 1,
  },
];

const bulkConfig = [
  {
    dataValues: {
      config_key: 100,
    },
  },
  {
    dataValues: {
      config_key: 200,
    },
  },
];

// [{config_key: 100, location_key: 32, autoassign: 1}, {config_key: 100, location_key: 22, autoassign: 1}]
const result = bulkConfig.flatMap((config, index) => {
  const { config_key } = config.dataValues;
  const { location_key, autoassign } = loc[index];

  return location_key.map(key => ({
    config_key,
    location_key: key,
    autoassign,
  }));
});

console.log(result);
