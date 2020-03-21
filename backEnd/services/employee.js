const executeQuery = require("../db/connect.js");

module.exports = class employeeService{
    async postMethod(data){
        try {
            let query = "insert into employees values($1,$2,$3,$4,$5,$6,$7,$8)";
            let params = [data.id,data.firstname,data.lastname,data.email,data.address,data.city,data.state,data.gender];
            let result =await executeQuery(query,params);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async getAllDetails(){
        try {
            let result = await executeQuery("select * from employees order by id");
            return result;
        } catch (error) {
            throw error;
        }
    }

    async getByName(firstname){
        try {
            let result = await executeQuery(`select * from employees where firstName like '${firstname}%' `);
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getById(id){
        try {
            let result = await executeQuery("select * from employees where id = $1",[id]);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async updateEmployee(data){
        try {
            if(data.id!==undefined){
                let result;
                if(data.firstname!==undefined){
                    result = await executeQuery("update employees set firstname = $1 where id = $2",[data.firstname,data.id]);
                }
                if(data.lastname!==undefined){
                    result = await executeQuery("update employees set lastname = $1 where id = $2",[data.lastname,data.id]);
                }
                if(data.email!==undefined){
                    result = await executeQuery("update employees set email = $1 where id = $2",[data.email,data.id]);
                }
                if(data.address!==undefined){
                    result = await executeQuery("update employees set address = $1 where id = $2",[data.address,data.id]);
                }
                if(data.city!==undefined){
                    result = await executeQuery("update employees set city = $1 where id = $2",[data.city,data.id]);
                }
                if(data.state!==undefined){
                    result = await executeQuery("update employees set state = $1 where id = $2",[data.state,data.id]);
                }
                return result;
            } else{
                throw new Error("Please provide valid id");
            }
        } catch (error) {
            throw error;
        }
    }

    async deleteEmployee(id){
        try {
            let result = await executeQuery("delete from employees where id = $1",[id]);
            return result;
        } catch (error) {
            throw error;
        }
    }
}