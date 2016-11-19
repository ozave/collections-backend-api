var mongoose = require('mongoose');
var CollectionsSchema = new mongoose.Schema({order_no: String, status: String, customer_email: String, customer_lname: String, updated_at: { type: Date, default: Date.now }});
module.exports = mongoose.model('Collection', CollectionsSchema);