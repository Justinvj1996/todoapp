const db = require('./db')
const mongoose = require('mongoose')
// const addTask = (title,description) => {
//    return ()=>{ 
//     const newUser = new db.User({
//     orderid:1,
//     title,
//     description,
//     status: true

//   });
//   newUser.save();
//   return {
//     status: true,
//     statusCode: 200,
//     message: "Item Added"

//   }}
const addTask = (title, description) => {
  return db.User.findOne(
    { title }).then(user => {
      if (user) {
        return {
          status: false,
          statusCode: 422,
          message: "Task already exist"
        }
      }
      else {
        const newUser = new db.User({
          orderid: new mongoose.Types.ObjectId,
          title,
          description,
          status: true
        });
        newUser.save();
        return {
          status: true,
          statusCode: 200,
          message: "Task Added"

        }
      }
    }
    )

}
const viewTask1 = () => {
  return db.User.find()
    .then(user => {
      return user
    })


}
const viewTask2 = () => {
  return db.Task.find()
    .then(user => {
      return user
    })


}
const updateTask1 = (data) => {
  //data=JSON.parse(data) 
  //console.log(data);
  return db.User.find()
    .then(result => {
      if (result) {
        console.log(result);
        // // db.User.deleteMany({});
        // // result.forEach(element => {
        // //   db.User.deleteOne({ _id: element.orderid })
        // })

      }
      data.forEach(element => {
        const newUser = new db.User({
          orderid: new mongoose.Types.ObjectId,
          title: element.title,
          description: element.description,
          status: true
        });
        newUser.save();
        // return {
        //   message: "success"
        // }

      });
    })
    
}
const deleteTask1 = () => {
  return db.User.deleteMany({status:true});
    

}
const deleteTask2 = () => {
  return db.Task.deleteMany({status:false});
    

}
const updateTask2= (data) => {
  
  return db.Task.find()
    .then(result => {
      if (result) {
        console.log(result);
        

      }
      data.forEach(element => {
        const newTask = new db.Task({
          orderid: new mongoose.Types.ObjectId,
          title: element.title,
          description: element.description,
          status: false
        });
        newTask.save();
       

      });
    })
    
}
// const deleteTodo = (id) => {
//   console.log(id);


//   return db.User.deleteOne({title:id});
    

// }
// const deleteDone= (data) => {
//   return db.Task.deleteOne(data);
    

// }
module.exports = {
  addTask,
  viewTask1,
  updateTask1,
  deleteTask1,
  viewTask2,
  updateTask2,
  deleteTask2,
  
}
