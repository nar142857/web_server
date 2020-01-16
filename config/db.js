'use strict';
/**
 * 数据库相关配置
 * @author CTJ
 * @date 2019/8/16
 */

module.exports = {
  mysql_tl: {
    DATABASE: 'tl_prod',
    USERNAME: 'root',
    PASSWORD: 'narc@1991',
    PORT: '10180',
    HOST: 'cdb-cxm3kv1q.bj.tencentcdb.com'
  },

  // 腾讯云COS文件存储配置
  COS: {
    SecretId: 'AKIDZ0RiqsLeR5oiF0HJ0qeyMbgaLH5nIErA',
    SecretKey: 'NsY4TL4wfigUMA0FMgrNm6GGAuUwPiQ9',
    Bucket: 'tl-1256189109',           // 存储桶名称
    Region: 'ap-shanghai',              // 地域名称

    tlBucket: 'tl-1256189109.file.myqcloud.com',
  },
};
