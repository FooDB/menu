// const mongoose = require('../db/db.js').mongoose;
// const Menu = require('../db/db.js').Menu;
var cassandra = require('cassandra-driver');

 //Connect to the cluster
 var client = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'menu'});

const getData = (id, callback) => {
  client.execute(`SELECT * FROM menus WHERE id=${id}`, function (err, result) {
    if (err){
      console.log('Error getting data from Cassandra');
    } else {
      // console.log('Results from db: ', result);
      callback(err, result.rows[0]);
    }
  });
  // process.exit();
};

// const insertData = (body) => {
//   Menu.findOne({}, {}, { sort: {id: -1}}, function (err, data) {
//     return data;
//   }).then((data) => {
//     body.id = data.id + 1;
//     console.log('body: ', body);
//     Menu.insertMany(body).then(() => {
//       console.log('successful insert');
//       mongoose.connection.close()
//     }).catch(() => {
//       console.log('insert failed');
//     });
//     console.log('inserted into database');
//   }).catch(() => {
//     console.log('insert error');
//   });
// };

// const updateData = (body) => {
//   console.log('id: ', body.id);
//   Menu.update({id: body.id}, { $set: body }).then(() => {
//     console.log('succesful update');
//     mongoose.connection.close()
//   }).catch(() => {
//     console.log('error updating');
//   })
//   // deleteData(body.id);
//   // Menu.insertMany(body, () => mongoose.connection.close());
// };

// const deleteData = (id) => {
//   console.log(id);
//   Menu.findOne({id}).then((doc) => {
//     Menu.deleteOne({id: doc.id}, function (err) {
//       if (err) return handleError(err);
//     });
//     console.log('deleted item ', doc.id)
//   }).catch(() => {
//     console.log('delete error');
//   })
// }

module.exports = {
  getData,
  // insertData,
  // updateData,
  // deleteData,
}
