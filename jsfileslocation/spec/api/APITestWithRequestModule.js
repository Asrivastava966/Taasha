"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
describe("API Tests", function () {
    let accessToken;
    beforeEach(function (done) {
        let options = {
            url: 'https://qat.referralanswer.com/RAWeb/oauth/v1/app/login',
            method: 'POST',
            headers: { ['Content-Type']: 'application/x-www-form-urlencoded;charset=UTF-8' },
            formData: {
                ['username']: 'asqat@css',
                ['password']: 'Taasha@123',
            }
        };
        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
                var body_JSON = JSON.parse(body);
                console.log(body_JSON);
                console.log(body_JSON.payload.access_token);
                accessToken = JSON.stringify(body_JSON.payload.access_token);
            }
            done();
        }
        request(options, callback);
    });
    it('[TEST]: Add Patient Using API call', function (done) {
        let options = {
            url: 'https://qat.referralanswer.com/RAWeb/v1/patient/quickAdd?save=%7B%22method%22:%22POST%22%7D',
            method: 'POST',
            headers: {
                ['Authorization']: 'bearer ' + accessToken,
                ['Content-Type']: 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({ "patient": { "firstNm": "Tezt_PatientOOne_fName", "mi": null, "lastNm": "Tezt_PatientOne_lName", "dob": "5/1/2019", "gender": "M", "statusCd": "A", "branchId": 5 }, "contact": { "homePhNo": null, "workPhNo": null, "workPhExt": null, "mobNo": null, "fax": null, "email": null, "addrLn1": null, "addrLn2": null, "city": null, "state": null, "zip": null }, "insurance": { "insTypId": null, "insProviderId": null, "policyNo": null, "groupNo": null, "relationTypId": null, "startDt": null, "endDt": null, "planTypId": null }, "doctor": { "orderingDocId": null, "priDocId": null, "facilityId": null, "mrId": null, "icdCodes": [] }, "order": { "orderTypCd": "UA", "workflowStatusCd": "NW", "orderNo": null, "orderOwnerId": 261, "assignToId": 261, "branchId": 5, "sameDayFlg": null, "setupDt": null, "notes": null } })
        };
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
    it('[TEST]: Use query terminal via API', function (done) {
        let options = {
            url: 'https://qat.referralanswer.com/RAWeb/v1/reports/query',
            method: 'POST',
            headers: {
                ['Authorization']: 'bearer ' + accessToken,
                ['Content-Type']: 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({ "query": "SELECT PATIENT_ID as patientId, PATIENT_CD as patCd FROM PATIENT WHERE FIRST_NM = 'Tezt_PatientOOne_fName'", "outputType": 1 })
        };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVBJVGVzdFdpdGhSZXF1ZXN0TW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9zcGVjL2FwaS9BUElUZXN0V2l0aFJlcXVlc3RNb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFakMsUUFBUSxDQUFDLFdBQVcsRUFBQztJQUVuQixJQUFJLFdBQWtCLENBQUM7SUFFdkIsVUFBVSxDQUFDLFVBQVMsSUFBSTtRQUV0QixJQUFJLE9BQU8sR0FBVztZQUNwQixHQUFHLEVBQUUseURBQXlEO1lBQzlELE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFLEVBQUMsQ0FBQyxjQUFjLENBQUMsRUFBQyxpREFBaUQsRUFBQztZQUM3RSxRQUFRLEVBQUU7Z0JBQ0UsQ0FBQyxVQUFVLENBQUMsRUFBQyxXQUFXO2dCQUN4QixDQUFDLFVBQVUsQ0FBQyxFQUFFLFlBQVk7YUFDN0I7U0FDVixDQUFBO1FBRUQsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJO1lBQ3JDLElBQUksQ0FBQyxLQUFLLElBQUksUUFBUSxDQUFDLFVBQVUsSUFBSSxHQUFHLEVBQUU7Z0JBQ3hDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDNUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQTthQUM3RDtZQUVELElBQUksRUFBRSxDQUFDO1FBQ1QsQ0FBQztRQUVELE9BQU8sQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFD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