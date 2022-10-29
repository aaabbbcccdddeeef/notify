const core = require('@actions/core');
const axios = require('axios');

async function run() {
  const ids = core.getInput('ids');
  const title = core.getInput('title') || 'default title';
  const body = core.getInput('body') || 'default body';
  const list = (ids || '').split(',').filter(Boolean);
  const url = 'https://api.day.app/push';
  list.forEach(item => {
    axios.post(url, {
      device_key: item,
      title,
      body,
    }).then((response) => {
      const data = response.data || {};
      console.log('bark push result -> ', data);
    }).catch(err => {
      console.log('bark push 失败 -> ', err);
    })
  });
}

run();
