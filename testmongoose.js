const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const schema = {
    name: String,
    age:Number,
    health:String,
    hooby:String,
    high:Number,
    weight:Number

}
const Cat = mongoose.model('Cat', schema);

// const kitty = new Cat({ name: 'testZildjian' });
// kitty.save().then(() => console.log('testmeow'));
// const kitty1= new Cat({name:"zhang1",age:1,health:"good"});
// kitty1.save().then(()=>console.log("new schema write"))
Cat.find({name:"zhang1"},(err,data)=>{console.log(data[0]._doc)})