import { test, expect } from '@playwright/test';
import {UserReg} from "d:/playwright-practice/reg-api-test-pwta/pages/register-page";

test('Success Registration Test', async ({ request }) => {
    const userRegistration = new UserReg();
    const response = await userRegistration.successReg('eve.holt@reqres.in', 'pistol');

    expect(response.status).toBe(200);
});
