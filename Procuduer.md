# 環境構築の手順

## nodeのインストール
### Macの場合
Homebrewをインストールする。
1. [このリンクから飛べます](https://brew.sh/index_ja)。
2. `$ brew --version` でインストールできていることを確認する。
3. ↓こんな感じのログが出たらOK
```
Homebrew 3.4.9
Homebrew/homebrew-core (git revision 8c48b914d20; last commit 2022-05-01)
Homebrew/homebrew-cask (git revision 02084ab77a; last commit 2022-05-01)
```
nodeをインストールする
1. homebrewでnodebrewをインストール<br>`$ brew install nodebrew`
2. nodeのLTS(Long Term Support)がv16.15.0なので、それをインストールしてください<br>`$ nodebrew install-binary v16.15.0`<br>[Warning: No such file or directoryが出てしまったら](https://qiita.com/k3ntar0/items/322e668468716641aa5c#warning-no-such-file-or-directory-%E3%81%8C%E5%87%BA%E3%82%8B%E5%A0%B4%E5%90%88)
3. 利用可能なバージョンを表示<br>`$ nodebrew ls`
```
~ $ nodebrew ls
v14.4.0
v16.13.0
v16.15.0

current: v16.15.0
```
4. 利用するバージョンを切り替える<br>`nodebrew use v16.15.0`
5. 切り替わったことを確認<br>`$ node -v`
```
~ $ node -v
v16.15.0
```
[切り替わらない場合](https://qiita.com/k3ntar0/items/322e668468716641aa5c#%E5%88%87%E3%82%8A%E6%9B%BF%E3%82%8F%E3%82%89%E3%81%AA%E3%81%84%E5%A0%B4%E5%90%88)
### Windowsの場合
誰か頼む

## Webpackの導入
package.jsonの初期化<br>
`npm init -y`<br>
##### パッケージのインストール
webpack
```
npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin
```
Babel
```
npm install --save-dev babel-loader @babel/core @babel/preset-env
```
React
```
npm install --save react react-dom
```
疑問になりそうなところ
- [save-devとsaveの違いについて](https://qiita.com/chihiro/items/ca1529f9b3d016af53ec)<br>
- [各パッケージの説明](https://dev-yakuza.posstree.com/react/start/)



### 参考
- [node.jsのバージョンを変更する](https://qiita.com/k3ntar0/items/322e668468716641aa5c)
- [【いまさらですが】package.jsonのdependenciesとdevDependencies](https://qiita.com/chihiro/items/ca1529f9b3d016af53ec)
- [WebpackでReactを始める](https://dev-yakuza.posstree.com/react/start/)