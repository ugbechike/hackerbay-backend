var show = require('chai').expect;
var app = require('../app');
var request = require('supertest');

var userAuth = {
    username : "ugbe",
    password: "1234"
}

var document = {
    "baz" : "qux",
    "foo" : "bar"
}

var patchFile = [
    {
        "op" : "replace",
        "path" : "/baz",
        "value" : "soft"
    }
]

describe('test for user authentication', ()=> {
    it("should return login successful and a token", (done) => {
        request(app)
        .post('/auth/login')
        .set("Content-Type", "application/json")
        .send(userAuth)
        .end((err, res) => {
            if (!err){
                show(200)
                show(res.body).to.have.property("data")
            }else{
                done(err)
            }
        })
        done()
    })
})


describe("test for successful file patch", ()=> {
    var userToken;
    beforeEach("check for valid user token", (done)=> {
        request(app)
        .post('/auth/login')
        .send(userAuth)
        .set("Content-Type", "application/json")
        .end((err, res) => {
            if(err) done(err);
            show(200)
            show(res.body).to.have.property("data")
            userToken = res.body.data
            done()
        })
    })

    it("should return a successful patching", (done)=> {
        request(app)
        .patch('/auth/userpatch')
        .set("Content-Type", "application/json")
        .set("usertoken", 'bearer '+ userToken)
        .send({userDocument: document, patch: patchFile})
        .end((err, res) => {
            if(err) done(err);
            show(res.body).to.have.property("baz")
            show(res.body).to.have.property("baz", "soft")
            done()
        });
    });
})


describe("test for a successful thumbnail generation", ()=> {
    var userToken;
    beforeEach("check for valid user token", (done) => {
        request(app)
        .post('/auth/login')
        .send(userAuth)
        .set("Content-Type", "application/json")
        .end((err, res) => {
            if(err) done(err);
            show(200)
            show(res.body).to.have.property("data")
            userToken = res.body.data
            done()
        })
    })

    it("should confirm if thumbnail is working properly", (done) => {
        request(app)
        .get("/auth/thumbnail")
        .set('Content-Type', 'application/json')
        .set("usertoken", "bearer "+userToken)
        .send({source: 'Assets/ankara.PNG'})
        .end((err, res)=> {
            if (err) done(err);
            show(200)
           show(res.body).to.have.property("file")

            done();
        })
    })
})

