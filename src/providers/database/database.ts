import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {SQLiteObject} from "@ionic-native/sqlite";

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
  db: SQLiteObject = null;

  constructor() {
  }

  // public methods
  setDatabase(db: SQLiteObject){
    if(this.db === null){
      this.db = db;
    }
  }

  create(data: any){
    let sql = 'INSERT INTO data(name, data) VALUES(?,?)';
    return this.db.executeSql(sql, [data.name, data.data]);
  }

  createTable(){
    let sql = 'CREATE TABLE IF NOT EXISTS data(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, data TEXT)';
    return this.db.executeSql(sql, []);
  }

  delete(data: any){
    let sql = 'DELETE FROM data WHERE name=?';
    return this.db.executeSql(sql, [data.name]);
  }

  getAll(){
    let sql = 'SELECT * FROM data';
    return this.db.executeSql(sql, [])
      .then(response => {
        let data = [];
        for (let index = 0; index < response.rows.length; index++) {
          data.push( response.rows.item(index) );
        }
        return Promise.resolve( data );
      })
      .catch(error => Promise.reject(error));
  }

  get(name){
    let sql = 'SELECT * FROM data WHERE name=?';
    return this.db.executeSql(sql, [name])
      .then(response => {
        let data = [];
        for (let index = 0; index < response.rows.length; index++) {
          data.push( response.rows.item(index) );
        }
        return Promise.resolve( data );
      })
      .catch(error => Promise.reject(error));
  }

  update(data: any){
    let sql = 'UPDATE data SET data=? WHERE name=?';
    return this.db.executeSql(sql, [data.data, data.name]);
  }
}
