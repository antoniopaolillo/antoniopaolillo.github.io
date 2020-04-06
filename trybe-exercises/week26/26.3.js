1;
db.nycFacilities.createIndex({ location: "2dsphere" });

2;
db.nycFacilities.aggregate([
  {
    $group: {
      _id: "$type",
      count: { $sum: 1 }
    }
  },
  {
    $sort: {
      count: 1
    }
  }
]);

3;
db.nycFacilities.aggregate([
  {
    $geoNear: {
      near: {
        coordinates: [-73.9926234, 40.7584905]
      },
      distanceField: "distanceFromHotel",
      spherical: true,
      query: { type: "Airport" }
    }
  }
]);

4;
db.nycFacilities.aggregate([
  {
    $geoNear: {
      near: {
        coordinates: [-73.9926234, 40.7584905]
      },
      distanceField: "distanceFromHotel",
      spherical: true,
      query: { type: "Airport" }
    }
  },
  {
    $project: {
      _id: 0,
      name: 1,
      distanceInKm: {
        $round: [{ $divide: ["$distanceFromHotel", 1000] }, 2]
      }
    }
  }
]);

5;
db.nycFacilities.aggregate([
  {
    $geoNear: {
      near: {
        coordinates: [-73.9926234, 40.7584905]
      },
      distanceField: "distanceFromHotel",
      spherical: true,
      query: { type: "Hospital" }
    }
  },
  {
    $bucket: {
      groupBy: "$distanceFromHotel",
      boundaries: [1000, 2000, 3000, 4000, 5000],
      default: "Other",
      output: {
        count: { $sum: 1 },
        hospitais: {
          $push: {
            nome: "$name",
            endereco: {
              $concat: [
                "$address.street",
                ", ",
                "$address.number",
                " - ",
                "address.city",
                ". ",
                "Zipcode: ",
                "$address.zipcode"
              ]
            }
          }
        }
      }
    }
  }
]);

6;
db.nycFacilities.aggregate([
  {
    $facet: {
      categorizedByType: [
        {
          $group: {
            _id: "$type",
            count: { $sum: 1 }
          }
        },
        { $sort: { _id: 1 } }
      ],
      categorizedByTypeAndBorough: [
        {
          $group: {
            _id: {
              tipo: "$type",
              bairro: "$borough"
            },
            count: { $sum: 1 }
          }
        },
        {
          $sort: {
            "_id.tipo": 1,
            "_id.bairro": 1,
            count: 1
          }
        }
      ]
    }
  }
]);

7;
db.nycFacilities.aggregate([
  { $match: { $or: [{ type: "Park" }, { type: "Museum" }] } },
  {
    $group: {
      _id: {
        bairro: "$borough",
        tipo: "$type"
      },
      count: { $sum: 1 }
    }
  },
  { $sort: { count: -1 } }
]);

8;
db.nycFacilities.aggregate([
  {
    $geoNear: {
      near: {
        coordinates: [-73.9926234, 40.7584905]
      },
      distanceField: "distanceFromHotel",
      spherical: true,
      query: { $or: [{ type: "Park" }, { type: "Museum" }] },
      maxDistance: 800
    }
  },
  { $sort: { distanceFromHotel: 1 } },
  {
    $facet: {
      Park: [{ $match: { type: "Park" } }, { $limit: 1 }],
      Museum: [{ $match: { type: "Museum" } }, { $limit: 1 }]
    }
  }
]);

9;