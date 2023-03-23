//require('dotenv').config();
// 아래 버전으로 해야 crontab에서 환경변수를 인식한다.
require('dotenv').config({ path: '/app/.env' });

let CONFIG = {};

CONFIG.db_host = process.env.DB_HOST || 'localhost';
CONFIG.db_port = process.env.DB_PORT || '5432';
CONFIG.db_name = process.env.DB_NAME || 'name';
CONFIG.db_user = process.env.DB_USER || 'root';
CONFIG.db_password = process.env.DB_PASSWORD || 'db-password';

if (process.env.MEMBER_LIST && typeof process.env.MEMBER_LIST === 'string') {
    CONFIG.member_list = process.env.MEMBER_LIST.split(',');
  } else {
    CONFIG.member_list = [];
  }
  
if (process.env.MEMBER_LIST_GITHUB && typeof process.env.MEMBER_LIST_GITHUB === 'string'){
    CONFIG.member_list_github = process.env.MEMBER_LIST_GITHUB.split(',');
} else{
    CONFIG.member_list_github = [];
}

CONFIG.slack_api_token = process.env.SLACK_API_TOKEN;
CONFIG.slack_channel_id = process.env.SLACK_CHANNEL_ID;
CONFIG.port = process.env.PORT || '3000';

module.exports = CONFIG;
