import {test,expect} from "@playwright/test";

test.describe.parallel("API testing", () =>{
    const baseurl = 'https://reqres.in/api';

    test('GET users Tests', async ({ request }) =>{
        const response = await request.get(`${baseurl}/users/2`)
        expect(response.status()).toBe(200)

        const responseBody = JSON.parse(await response.text());
        console.log(responseBody);

    });

    test('Invalid GET users tests', async({request})=>{
        const response = await request.get(`${baseurl}/users/dghdg`)
        expect(response.status()).toBe(404)

        const responseBody= JSON.parse(await response.text());
        console.log(responseBody)
    });

    test('User Registration', async({request}) =>{
        const response = await request.post(`${baseurl}/requests`,{
        data: {
            email: "eve.holt@reqres.in",
            password: "pistol"
        }
    })
        expect(response.status()).toBe(201);
    });

})