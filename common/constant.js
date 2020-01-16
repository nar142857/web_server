'use strict';
/**
 *
 * @author CTJ
 * @date 2019/8/16
 */

module.exports = {
  TABLE_NAME: {
    IMAGE: 'image',
  },
  IMAGE_TYPE: {
    EMOJI: 'emoji',                // 表情
    SCENERY: 'scenery',            // 风景
  },

  DIR_PATH: {
    EMOJI: '/images/emoji/',
    SCENERY: '/images/scenery/',
    DOWNLOAD: '/images/download/',
  },

  CONTENT_TYPE: {
    CHAT: 1,         // 聊天对话
    IMAGE: 2,        // 表情包
  },

  ERROR_CODE: {
    COLLECT_ERROR: 100000,                 // 收藏出错
    COLLECT_REPEAT: 100001,                // 收藏重复
  },
};
