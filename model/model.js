const sql = require('mssql');

//Data base connect config
const config = {
    user: 'testnodejs',
    password: '123456',
    server: 'localhost',
    database: 'QLKS',
    trustServerCertificate: true,
}
sql.on('error', err => {
    console.log(err)
})


//-------------------------------------------------------------
//|    Vui lòng gọi tất cả các module này ở dạng promiss!     |
//-------------------------------------------------------------

//trả về danh sách phòng
module.exports.getRoom = sql.connect(config).then(pool => {
    // Query
    return pool.request()
        .query('select * from Phong')

}).then(result => {
    sql.close();
    return result;

}).catch(err => {
    console.log(err);
    res.send(err.message)
});


//trả về danh sách khách hàng
module.exports.getCustomer = sql.connect(config).then(pool => {
    // Query
    return pool.request()
        .query('select * from KhachHang')

}).then(result => {
    sql.close();
    return result;

}).catch(err => {
    console.log(err);
    res.send(err.message)
});