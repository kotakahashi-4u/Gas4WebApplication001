const URL = {
  WEBAPP: PropertiesService.getScriptProperties().getProperty('URL_WEBAPP') 
}


// デプロイURLにアクセスされた際に呼ばれるdoGet
function doGet(e) {
  // HTML読み込み
  let indexHtml = HtmlService.createTemplateFromFile('login');

  // テンプレートリテラルへの埋め込み
  indexHtml.loginId = "";

  // HTMLOutputの生成
  return indexHtml.evaluate();
}


// login.htmlからsubmitされた際に呼ばれるdoPost
function doPost(e) {
  let indexHtml;

  // スプレッドシートからデータの取得
  const userVals = SpreadsheetApp.openById("1bABJIP8Jg2vzDy6CRULwWOH8HpzhX_93UxlOb_bLa44")
                                 .getSheets()[0]
                                 .getDataRange()
                                 .getValues();
  // ヘッダー行の削除
  userVals.shift();

  // forEachではなくsomeを使うと、returnによりループを途中で抜けれる
  userVals.some(function(user){
    // パラメータとDBデータの突合
    if (user[0]==e.parameter.loginId && user[2]==e.parameter.password) {
      indexHtml = HtmlService.createTemplateFromFile('index');
      indexHtml.name = user[1];
      return true;
    }
  });

  // indexHtmlがこの時点で undefined かどうかで一致したかどうかを判断
  if (indexHtml===undefined) {
    indexHtml = HtmlService.createTemplateFromFile('login');
    indexHtml.loginId = e.parameter.loginId;
  }

  return indexHtml.evaluate();
}