import { Promise } from 'es6-promise';
import * as Request from 'superagent';
import { Resolver } from './resolver';

export class Http {
    private static getResolvePromise(resolver: Resolver, request: Request.SuperAgentRequest): Promise<void> {
        return new Promise((resolve, reject) => {
                resolver.set(resolve, reject);
            })
            .then(() => {
                request.abort();
            });
    }
    
    public static get(url: string, resolver?: Resolver): Promise<any> {
        let request;

        let httpPromise = new Promise((resolve, reject) => {
            request = Request.get(url)
                .end((error, response) => {
                    if (error) {
                        reject(response);                        
                    } else {
                        resolve(response);
                    }
                });
        });
        
        if (resolver) {
            this.getResolvePromise(resolver, request);
        }
        
        return httpPromise;
    }
    
    public static post(url: string, data: any, resolver?: Resolver): Promise<any> {
        let request;

        let httpPromise = new Promise((resolve, reject) => {
            request = Request.post(url)
                .send(data)
                .end((error, response) => {
                    if (error) {
                        reject(response);                        
                    } else {
                        resolve(response);
                    }
                });
        });
        
        if (resolver) {
            this.getResolvePromise(resolver, request);
        }
        
        return httpPromise;
    }
    
    public static put(url: string, data: any, resolver?: Resolver): Promise<any> {
        let request;

        let httpPromise = new Promise((resolve, reject) => {
            request = Request.put(url)
                .send(data)
                .end((error, response) => {
                    if (error) {
                        reject(response);                        
                    } else {
                        resolve(response);
                    }
                });
        });
        
        if (resolver) {
            this.getResolvePromise(resolver, request);
        }
        
        return httpPromise;
    }
    
    public static delete(url: string, data: any, resolver?: Resolver): Promise<any> {
        let request;

        let httpPromise = new Promise((resolve, reject) => {
            request = Request.delete(url)
                .end((error, response) => {
                    if (error) {
                        reject(response);                        
                    } else {
                        resolve(response);
                    }
                });
        });
        
        if (resolver) {
            this.getResolvePromise(resolver, request);
        }
        
        return httpPromise;
    }
}