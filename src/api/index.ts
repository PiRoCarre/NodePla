import axios, { AxiosPromise } from "axios";
import 'dotenv/config';

// Need to check -> Can't access to .env file
// const { REACT_APP_API } = process.env;
const REACT_APP_API = "http://217.174.246.119";

export class Api {
    private headers: object;

    constructor (token: string = '') {
        this.headers = {
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*'
        }
    } 
    
    public get = async (url: string, params?: object) : Promise<AxiosPromise> => {
        return await axios.get(`${REACT_APP_API}/api/${url}`, {
            headers: this.headers,
            ...params
        });
    };
    
    public post = async (url: string, body?: object, params?: object) : Promise<AxiosPromise> => {
        return await axios.post(`${REACT_APP_API}/api/${url}`, body, {
            headers: this.headers,
            ...params
        });
    };
    
    public put = async (url: string, body?: object, params?: object) : Promise<AxiosPromise> => {
        return await axios.put(`${REACT_APP_API}/api/${url}`, body, {
            headers: this.headers,
            ...params
        });
    };
    
    public destroy = async (url: string, params?: object) : Promise<AxiosPromise> => {
        return await axios.delete(`${REACT_APP_API}/api/${url}`, {
            headers: this.headers,
            ...params
        });
    };
    
}