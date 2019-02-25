import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class Config {
  apiUrl: string;

  constructor(private http: HttpClient) {}

  ensureInit(): Promise<any> {
    return new Promise((resolve, reject) => {

      this.http.get("./assets/config.json")
        .subscribe(
          (content: Config) => {
            Object.assign(this, content);
            resolve(this);
          },
          reason => reject(reason));
    });
  }
}

export function ConfigFactory(
  config: Config) {
  return () => config.ensureInit();
}
