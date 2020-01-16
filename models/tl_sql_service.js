'use strict';
/**
 * tl数据库操作
 * @author CTJ
 * @date 2019/8/28
 */

const mysql = require('mysql');
const config = require('./../config/db');
const dbConfig = config.mysql_tl;



class TLSqlService {
  constructor() {
    this.pool = mysql.createPool({
      host: dbConfig.HOST,
      port: dbConfig.PORT,
      user: dbConfig.USERNAME,
      password: dbConfig.PASSWORD,
      database: dbConfig.DATABASE
    });
  }

  query(sql, values) {
    console.log('sql ====', sql);
    return new Promise((resolve, reject) => {
      this.pool.getConnection(function (err, connection) {
        if (err) {
          console.log(err);
          resolve(err)
        } else {
          connection.query(sql, values, (err, rows) => {
            if (err) {
              console.log(err);
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release()
          })
        }
      })
    })

  };

  async querySafe(sql, values) {
    try {
      let result = await this.query(sql, values);
      return [null, result];
    } catch (e) {
      console.error('querySafe error: ', e);
      return[e];
    }
  }

  async insert(tableName, param = {}) {
    let columnNames = [];
    let values = [];
    let temp = [];

    for (let key in param) {
      // sql += key + ' = ?, ';
      columnNames.push(key);
      values.push(param[key]);
      temp.push('?');
    }

    let sql = `INSERT INTO ${tableName} (${columnNames.join()}) VALUES (${temp.join()}) `;

    const result = await this.query(sql, values);

    return result;
  }

  async getList(tableName, {key = ['*'], kind = 'emoji', page = 0, count = 20}={}) {
    let sql = `SELECT ${key.join()} FROM ${tableName}  WHERE kind='${kind}' limit ${count} OFFSET ${page * count}`;

    console.log('sql ===', sql);
    const result = await this.query(sql);

    return result;
  }
}

module.exports = new TLSqlService();
