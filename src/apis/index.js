var faunadb = require("faunadb");
var q = faunadb.query;
var client = new faunadb.Client({
  secret: "fnAEf87zntACSRPDRYnCXj1rcK0ACqRw3o1w4yW5",
  domain: "db.fauna.com", // Adjust if you are using Region Groups
  port: 443,
  scheme: "https",
  keepAlive: false,
});
module.exports = async (req, res) => {
  return new Promise((resolve, reject) => {
    client
      .query(
        q.Map(q.Paginate(q.Match(q.Index("all_products"))), (ref) => q.Get(ref))
      )
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};
// const dbs = await client.query(
//   q.Map(q.Paginate(q.Match(q.Index("all_products"))), (ref) => q.Get(ref))
// ).then(result=>{
//    dbs.data
// }).catch((e)=>{
//     e.message
// })
