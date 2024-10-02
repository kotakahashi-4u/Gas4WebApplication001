# Gas4WebApplication001

## プロジェクトについて
Google Apps Scriptを用いて、簡易ログインを具備したWebアプリケーションを構築する。

## 事前準備
Googleドライブ内にスプレッドシートを用いて、ユーザ情報テーブルを作成する。なお、以下ユーザ情報テーブルは閲覧者権限で公開しているため自由に利用して構わない。  
![スプレッドシート：ユーザ情報テーブル](https://docs.google.com/spreadsheets/d/1bABJIP8Jg2vzDy6CRULwWOH8HpzhX_93UxlOb_bLa44/edit?usp=drive_link)

## 使い方
1. スタンドアロン型としてGASを開く。  
2. GASにmain.gs、login.htmlおよびindex.htmlの内容をコピーする。
   なお、main.gsはスクリプトとして、login.htmlおよびindex.htmlはHTMLとして追加すること。
3. プロジェクトのスクリプトプロパティとして、以下を追加する。  
   キー：URL_WEBAPP  
   値：デプロイしたURL  
   ※スクリプトプロパティ設定イメージ  
     <img src="http://drive.google.com/uc?export=view&id=1wYobz_Ya5iemO6WwitoQjzojAlPJZmlh" width="400">
4. プロジェクトをデプロイしてWebアプリケーションにアクセスする。  
