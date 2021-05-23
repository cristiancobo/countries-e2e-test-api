  
const axios = require('axios');
const { expect } = require('chai');
const { BASE_URL} = require('../../util/const')

let errorStatusExpected;
describe("When user wants find a country by id that does not exist | FIND BY ID ", ()=>{
    before(async()=>{
        try {
            response=  await axios.get(BASE_URL+"/99999")
        } catch (error) {
            errorStatusExpected = error.response.status
        }
       
       
    });

    it("Then it should return BAD REQUEST 400 status", () =>{
        expect(errorStatusExpected).eql(400)
    
    });

});