import { Options } from "request";
var request = require("request");

describe("API Tests",function(){

  let accessToken:string;

  beforeEach(function(done){
    
    let options:Options = { 
      url: 'https://qat.referralanswer.com/RAWeb/oauth/v1/app/login',
      method: 'POST',
      headers: {['Content-Type']:'application/x-www-form-urlencoded;charset=UTF-8'},
      formData: {
                  ['username']:'asqat@css', 
                  ['password']: 'Taasha@123',    
              }
    }

    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        var body_JSON = JSON.parse(body);
        console.log(body_JSON);
        console.log(body_JSON.payload.access_token);
        accessToken = JSON.stringify(body_JSON.payload.access_token)
      }

      done();
    }

    request(options, callback);
  });

  it('[TEST]: Add Patient Using API call', function(done) {
    
    let options:Options = { 
      url: 'https://qat.referralanswer.com/RAWeb/v1/patient/quickAdd?save=%7B%22method%22:%22POST%22%7D',
      method: 'POST',
      headers: {
        ['Authorization']: 'bearer ' + accessToken,
        ['Content-Type']: 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({"patient":{"firstNm":"Tezt_PatientOOne_fName","mi":null,"lastNm":"Tezt_PatientOne_lName","dob":"5/1/2019","gender":"M","statusCd":"A","branchId":5},"contact":{"homePhNo":null,"workPhNo":null,"workPhExt":null,"mobNo":null,"fax":null,"email":null,"addrLn1":null,"addrLn2":null,"city":null,"state":null,"zip":null},"insurance":{"insTypId":null,"insProviderId":null,"policyNo":null,"groupNo":null,"relationTypId":null,"startDt":null,"endDt":null,"planTypId":null},"doctor":{"orderingDocId":null,"priDocId":null,"facilityId":null,"mrId":null,"icdCodes":[]},"order":{"orderTypCd":"UA","workflowStatusCd":"NW","orderNo":null,"orderOwnerId":261,"assignToId":261,"branchId":5,"sameDayFlg":null,"setupDt":null,"notes":null}})
    }
    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        var body_JSON = JSON.parse(body);
        console.log(body_JSON);
        console.log(body_JSON.payload.message);
      }

      done();
    }

    request(options, callback);

  });

  it('[TEST]: Use query terminal via API', function(done) {
    
    let options:Options = { 
      url: 'https://qat.referralanswer.com/RAWeb/v1/reports/query',
      method: 'POST',
      headers: {
        ['Authorization']: 'bearer ' + accessToken,
        ['Content-Type']: 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({"query":"SELECT PATIENT_ID as patientId, PATIENT_CD as patCd FROM PATIENT WHERE FIRST_NM = 'Tezt_PatientOOne_fName'", "outputType":1})
    }
    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        var body_JSON = JSON.parse(body);
        console.log(body_JSON.payload.output);
        
      }

      done();
    }

    request(options, callback);

  });
});