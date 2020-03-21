const express = require('express');
const employeeService = require('../services/employee.js');

const router = express.Router();

router.post("/insert",async (req,res)=>{
    try {
        let id = req.body.id;
        let firstname = req.body.firstname;
        let lastname = req.body.lastname;
        let email = req.body.email;
        let address = req.body.address;
        let city = req.body.city;
        let state = req.body.state;
        let gender = req.body.gender;
        
        data = {
            id:id,
            firstname:firstname,
            lastname:lastname,
            email:email,
            address:address,
            city:city,
            state:state,
            gender:gender
        }

        const callService = new employeeService();
        const result =await callService.postMethod(data);
        console.log(result.rowCount);
        if(result.rowCount>=1){
            res.send({
                success:1,
                message:"Record Inserted"
            })
        }
    } catch (error) {
        console.log(error);
        res.send({
            success:0,
            message:error.message
        });
    }
});

router.get("/getAllDetails",async(req,res)=>{
    try {
        let callService = new employeeService();
        let result =await callService.getAllDetails();
        if(result.rowCount>=1){
            res.send(result.rows);
        }
    } catch (error) {
        console.log(error);
        res.send({
            success:0,
            message:error.message
        });
    }
});

router.get("/getById/:id",async(req,res)=>{
    try {
        let id = req.params.id;
        let callService = new employeeService();
        let result = await callService.getById(id);
        if(result.rowCount>=1){
            res.send(result.rows[0]);
        } else{
            res.send({
                success:404,
                message:"No such record present"
            });
        }
    } catch (error) {
        console.log(error);
        res.send({
            success:0,
            message:error.message
        });
    }
});

router.post("/getByName",async (req,res)=>{
    let firstname = req.body.firstname;
    console.log(firstname);
    let callService = new employeeService();
    let result = await callService.getByName(firstname);
    if(result.rowCount>=1){
        res.send(result.rows);
    } else{
        res.send({
            success:404,
            message:"No such name exists"
        })
    }
})

router.put("/update",async(req,res)=>{
    try {
        let id = req.body.id;
        let firstname = req.body.firstname;
        let lastname = req.body.lastname;
        let email = req.body.email;
        let address = req.body.address;
        let city = req.body.city;
        let state = req.body.state;
        
        data = {
            id:id,
            firstname:firstname,
            lastname:lastname,
            email:email,
            address:address,
            city:city,
            state:state
        }

        let callService = new employeeService();
        let result = await callService.updateEmployee(data);
        if(result.rowCount>=1){
            res.send({
                success:1,
                message:"Updated syccessfully..."
            })
        }
    } catch (error) {
        console.log(error);
        res.send({
            success:0,
            message:error.message
        });
    }
});

router.delete("/delete/:id",async(req,res)=>{
    try {
        let id = req.params.id;
        let callService = new employeeService();
        let result = await callService.deleteEmployee(id);
        if(result.rowCount>=1){
            res.send({
                success:1,
                message:"Record deleted"
            });
        }
    } catch (error) {
        console.log(error);
        res.send({
            success:0,
            message:error.message
        });
    }
});

module.exports = router;