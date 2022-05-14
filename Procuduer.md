
<h1>React＋Webpack+TypeScript+Linter環境構築</h1>

<h2>初めに</h2>
React＋TypeScript＋Webpack＋ESlint＋Prettierの環境構築を毎回やっていくのは、めんどくさいので、次回以降も利用できるように環境構築の手順を書いておく。

<h2>必要なパッケージのインストール</h2>
<h3>dependenciesとdevDependenciesの違い</h3>

- --save-dev(-D)
    - 開発環境に利用するパッケージのインストール<br>

- --save
    - 本番環境に利用するパッケージのインストール(saveオプションはなくても、デフォルトで本番環境にインストールされる)
    - pacage.jsonがあるディレクトリで、npm installをすると、dependenciesとdevDependenciesの両方のパッケージをインストールする
- 詳しくはこちら
    - [What's the difference between dependencies, devDependencies and peerDependencies in npm package.json file?](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies)

<h3>Webpack</h3>

```
npm install --save-dev webpack webpack-cli webpack-dev-server webpack-html-plugin webpack-merge 
```
<h3>Babel</h3>

```
npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react
```
<h3>React</h3>

```
npm install react react-dom
```