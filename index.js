const production = 'comic.iowl.jp';
const staging = 'comicstg.iowl.jp';
const development = 'spicadevhs.iowl.jp';

const message = {
  production: '本番だよ！',
  staging: 'ステージングだよ',
  development: '開発環境だよ〜',
};

switch (location.hostname) {
  case production:
    window.alert(message.production);
    break;
  case staging:
    window.alert(message.staging);
    break;
  case development:
    window.alert(message.development);
    break;
}
