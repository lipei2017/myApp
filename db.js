/**
 * Created by lenovo on 2017/8/10.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Todo = new Schema({
    id: String,
    content : String,
    update_at: Date
});
mongoose.connect('mongodb://localhost/express-todo',{useMongoClient:true});
mongoose.model('Todo', Todo);
