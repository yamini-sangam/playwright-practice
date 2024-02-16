import fetch, { Response } from 'node-fetch';

export class UserReg {
    private url: string;

    constructor() {
        this.url = "https://reqres.in/api";
    }

    async successReg(email: string, password: string): Promise<Response> {
        const url = `${this.url}/register`; 
        const body = JSON.stringify({ email, password });

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body,
        });

        return response;
    }
}
