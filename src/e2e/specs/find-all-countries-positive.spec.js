const axios = require('axios');
const { expect } = require('chai');
const { BASE_URL} = require('../../util/const')


let response;
describe("When user wants list all countries| FIND ALL", ()=>{
    before(async()=>{
        response=  await axios.get(BASE_URL)
    });

    it("Then it should return OK 200 status", () =>{
        expect(response.status).eql(200)
    
    });
    it("Then it should return that the list has more than zero elements", () =>{
        expect(response.data.length).to.be.greaterThan(0)
    });
    it("Then it must return that an element of the list contains all the attributes", () =>{
        const country_test  = response.data[0]
        expect(country_test).to.have.property("name");
        expect(country_test).to.have.property("id");
  
    });

    it("Then it should return a JSON", () =>{
        expect(response.headers["content-type"]).to.contain("application/json")
    });

    it("Then it must return that an element of the list contains all the attributes and each attribute has the corresponding type", () =>{
        const country_test  = response.data[0]
        expect(country_test.id).to.be.a('number');
        expect(country_test.name).to.be.a('string');
     
    });

  

});