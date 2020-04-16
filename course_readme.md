### Темы:

https://www.youtube.com/watch?v=eSaF8NXeNsA


Тайм-коды:

0:00 – Вступление 
3:01 – Написание базового функционала приложения
14:56 – Инициализация приложения (package.json)
16:33 – Установка Webpack
18:30 – Базовая настройка Webpack (webpack.config.js)
38:12 – Паттерны
39:46 – Плагины
40:31 – Автоматизация подключения скриптов к HTML-документу (html-webpack-plugin)
45:56 – Очистка папки проекта от лишних файлов (clean-webpack-plugin)
47:50, 1:00:44, 1:36:53 – Автоматизация процесса сборки проекта
50:17 – Контекст
51:50 – CSS-лоадеры (css-loader, style-loader)
58:56 – Работа с JSON
1:02:50 – Работа с файлами (file-loader)
1:09:02 – Работа со шрифтами
1:13:21 – Подключение CSS-библиотек
1:14:51 – Защита от публикации пакета
1:15:32 – Работа с XML-файлами (xml-loader)
1:17:44 – Работа с CSV-файлами (csv-loader, papaparse)
1:20:06 – Дополнительные настройки (расширения по умолчанию, ярлыки для работы с путями)
1:24:54 – Подключение JS-библиотек 
1:28:56 – Оптимизация при подключении одной библиотеки к нескольким файлам
1:33:40 – Автообновление страницы (webpack-dev-server)
1:39:14 – Автоматизация копирования статических файлов в нужную папку (copy-webpack-plugin)
1:42:32 – Сжатие CSS, HTML, JS (mini-css-extract-plugin, optimize-css-assets-webpack-plugin, terser-webpack-plugin) + управление режимом сборки (cross-env)
1:59:37 – Компиляция Less (less)
2:06:08 – Компиляция Sass (node-sass, sass-loader)
2:03:57, 2:08:23 – Оптимизация
2:10:21 – Babel
2:22:35 – Добавление плагинов для Babel
2:24:28 – Компиляция TypeScript
2:27:20 – Компиляция React JSX + оптимизация Babel
2:33:38 – Devtool
2:36:14 – ESLint (eslint, eslint-loader, babel-eslint)
2:43:00 – Динамические импорты (Lazy Loading)
2:44:52 – Анализ финальной сборки (webpack-bundle-analyzer)







### Общая инфа

 -> https://webpack.js.org/

Плагины - это дополнительный функционал в виде классов, который можно добалвять к базовой конфигурации webpack'а. 


Сам по себе webpack умеет работать только с js-файлами, 
он ничего не знает ни про css, ни про картинки, ..., 
только js и json. Для других файлов необходимо устанавливать лоадеры.


Лоадеры(свойство `module`) - это возможность добавления к webpack'у функционала, позволяющего ему работать с другими типами файлов, например css, картинки, ... .


**Babel** - благодаря компилятору babel можно использовать новые фичи JS'а(ES), которые ещё не будут работать в браузере(async/await, ...), при этом babel будет их компилировать(транспайлить), т.е. переводить в тот JS, который понимают все браузеры.
-> https://babeljs.io/


**Пресеты**
-> https://babeljs.io/docs/en/presets
Пресет - это набор определённых плагинов, которые за нас уже собрали.
Например пресет `@babel/preset-env`, -> https://babeljs.io/docs/en/babel-preset-env . Список офиц. юзабельных пресетов:
```
@babel/preset-env

@babel/preset-flow

@babel/preset-react

@babel/preset-typescript
```
Тут группированный список плагинов, которые могут быть включены в пресеты
-> https://babeljs.io/docs/en/plugins


Описание основных идей вебпака -> https://webpack.js.org/concepts/
(Entry, Output, Loaders, Plugins, Mode, Browser Compatibility)


**DevTool** - настройка для source-map'ов, которые можно добавлять
-> https://webpack.js.org/configuration/devtool/






#### Перечень устанавливаемых пакетов/команд/плагинов
(1)
npm install -D webpack webpack-cli

webpack - пакет самого вебпака
webpack-cli - консольный интерфейс для работы с вебпаком



(2)
плагин **html-webpack-plugin**
```
npm i -D html-webpack-plugin
```
позволяет взаимодействовать с html'ем



(3)
Плагин для очистки папки dist/  **clean-webpack-plugin**
```
npm i -D clean-webpack-plugin
```



(4) для работы с css-стилями
**`css-loader`** - этот лоадер позволяет вебпаку понимать css-импорты и импортировать в javascript различные стили

**`style-loader`** - этот лоадер добаляет стили, которые мы описываем в css-файлах в секцию `<head />` в html

По умолчанию этих пактов(лоадеров) в вебпаке нет, их нужно установить отдельно:
```
npm i -D style-loader css-loader
```



(5)
**file-loader** - данный лоадер позволяет работать с различными файлами, в том числе и с картинками, шрифтами
```
npm i -D file-loader
```



(6)
**normalize.css**
```
npm i normalize.css
```
в style.css проекта этот пакет подключается так: `@import "~normalize.css";` (с использованием тильды)



(7)
**xml-loader** - пакет для работы с xml-файлами
```
npm i -D xml-loader
```


(8)
**csv-loader** - для работы с csv-файлами
```
npm i -D csv-loader papaparse
```
пакет papaparse нужен для работы csv-loader'а



(9)
**webpack-dev-server**
```
npm i -D webpack-dev-server
```


(9)
**copy-webpack-plugin** - плагин автоматизации копирования статических файлов в нужную папку
```
npm i -D copy-webpack-plugin
```


(10)
**mini-css-extract-plugin** - плагин для создания стилей в отдельный Css-файл(а не хранение их в тэге `<style />` в хэде html-ника)
https://webpack.js.org/plugins/mini-css-extract-plugin/
```
npm i -D mini-css-extract-plugin
```


(11)
Пакет **cross-env** - это пакет, который определяет, в какой ОС я нахожусь и самостоятельно правильно задаёт системные переменные, 
например `"dev": "cross-env NODE_ENV=development webpack --mode development",`
```
npm i -D cross-env
```


(12)
**terser-webpack-plugin** - плагин минифицирует и uglify'ет js
-> https://webpack.js.org/plugins/terser-webpack-plugin/
```
npm i -D terser-webpack-plugin
```


(13)
**optimize-css-assets-webpack-plugin** - плагин для оптимизации и минификации css-файлов
-> https://www.npmjs.com/package/optimize-css-assets-webpack-plugin
```
npm i -D optimize-css-assets-webpack-plugin
```


(14)
**less-loader**
```
npm i -D less-loader
```


(15)
**less**
```
npm i -D less
```


(16)
**node-sass** - содержит в себе корневой функционал, который относится к препроцессору sass и scss
```
npm i -D node-sass
```


(17)
**sass-loader** - лоадер для вебпака
```
npm i -D sass-loader
```


(18)
**babel** - это JavaScript compiler. С ним можно использовать код JS следущего поколения уже сейчас.
-> https://babeljs.io/setup
```
npm i -D babel-loader @babel/core
```


(19)
**@babel/preset-env** - пресет(набор плагинов) для "бабеля", который позволяет пользоваться самими последними фишками ES/JS
```
npm i -D @babel/preset-env
```


(20)
**@babel/polyfill** - пакет "бабеля" для эмуляции полноценного ES2015
```
npm i @babel/polyfill
```



(21)
**@babel/plugin-proposal-class-properties** - плагин для proposal синтаксиса для class properties в JS/ES, например такого `static id = Date.now()`
-> https://babeljs.io/docs/en/next/babel-plugin-proposal-class-properties.html
```
npm i -D  @babel/plugin-proposal-class-properties
```



(22)
**@babel/preset-typescript** - пресет для работы с typescript'ом
-> https://babeljs.io/docs/en/babel-preset-typescript
```
npm i -D @babel/preset-typescript
```



(23)
**@babel/preset-react** - набор плагинов для работы с реактом
-> https://babeljs.io/docs/en/babel-preset-react,
``` вот такой состав пресета
@babel/plugin-syntax-jsx
@babel/plugin-transform-react-jsx
@babel/plugin-transform-react-display-name
@babel/plugin-transform-react-jsx-self
@babel/plugin-transform-react-jsx-source
```

```
npm i -D @babel/preset-react
```




(24)
**react** - базовые пакеты для работы реакта
```
npm i react react-dom
```








>>>>>

ключ `-D` - это devDependencies, данные пакеты нужны для процесса разработки и не пойдут в финальную сборку (`--save-dev` синоним для этого ключа)






### Конфигурационный файл

 -> `webpack.config.js`

 первая настройка - свойство `entry: ` (точка входа, путь к основному файлу)

```
entry: `./src/index.js`,
```

`output` -> куда следует складывать результат работы вебпака
```
output: {
	filename: `<имя_файла_в_который_всё_соберётся.js>`, // принято называть как bundle.js
	path: `<путь_куда_этот_файл_сборки_разместить>`, // можно так path.resolve(__dirname, `dist`)
},
```

`mode` - задаёт тип потимизации в сборке, допустимые значения `string = 'production': 'none' | 'development' | 'production'`, по умолчанию равен `production`


`entry` для нескольких точек входа:
```
entry: {
	main: `./src/index.js`,
	analytics: `./src/analytics.js`,
}
```



Подключение **html-webpack-plugin**
```
const HTMLWebpackPlugin = require(`html-webpack-plugin`);
```
добовляем в свойстве `plugins` (это массив/список всех плагинов, которые доступны)
```
plugins: [
	new HTMLWebpackPlugin({
		template: `./src/index.html`,
	}),
],
```
свойство `template` указывает откуда брать html-шаблон




Плагин **clean-webpack-plugin** подключается вот так:
```

...

const { CleanWebpackPlugin } = require(`clean-webpack-plugin`);

...

plugins: [
	new CleanWebpackPlugin(),
]


...
```



свойство `context` - это обычная строчка, в которой указано, где лежат все исходники приложения

```
context: `src`,
```


Установка лоадеров для css-стилей
```
module: {
	rules: [
		{
			test: /\.css$/,
			use: [`style-loader`, `css-loader`],
		}
	],
},
```
 данное правило говорит что, как только мы в импортах встречаем файл с расширением `.css`, то тогда ему необходимо использовать определённый тип лоадеров(из массива `use: []`)

Порядок лоадеров в массиве `use` важен и определяется с права на лево


В `package.json` в поле `script` можно сделать вотчер изменений, чтобы каждый раз не запускать команду `npm run dev`:
```
...

	"scripts": {
		"watch": "webpack --mode development --watch"
	}

...
```
-> `npm run watch`




Правило лоадера для картинок
```
{
	test: /\.(png|jpg|svg|gif)$/,
	use: [`file-loader`],
},
```


Правило лоадера для шрифтов
```

{
	test: /\.(ttf|eot|woff|woff2)$/,
	use: [`file-loader`],
},
```


Правило для работы с xml-файлами:
```
{
	test: /\.xml$/,
	use: [`xml-loader`],
}
```


Правило для работы с csv-файлами:
```
{
	test: /\.csv$/,
	use: [`csv-loader`],
},
```


Свойство **resolve**

поле `extensions` - здесь мы говорим вебпаку, какие расширения нужно принимать по умолчанию, те расширения, которык будут перечислены в этом массиве, можно не указывать для подключаемых файлов в импортах, т.е. например `import logo from './assets/logo'` вместо `import logo from './assets/logo.png'`

поле `alias` - позволяет решить проблему с относительными путями к файлам в импортах, например теперь вместо `import Post from './../../../models/Post'` можно будет писать `import Post from '@models/Post'`
```
resolve: {
	extensions: [`.js`, `.json`, `.png`],
	alias: {
		'@models': path.resolve(__dirname, `src/models`),
		'@': path.resolve(__dirname, `src`),
	},
}
```


Свойство **optimization** - позволяет оптимизировать финальный бандл, условно выеосит за скобки библиотеки/скрипты, которые подключаются по нескольку раз в разных файлах, не дублируя их код(этих библиотек) в финальном бандле
```
optimization: {
	splitChunks: {
		chunks: `all`,
	},
}
```



Подключение **webpack-dev-server**, свойство `devServer`
```
devServer: {
	port: 4200,
}
```
+ в скриптах запуска в package.json нужно сделать такой скрипт:
```
"scripts": {
	"start": "webpack-dev-server --mode development --open"
}
```
и для запуска, в консоли `npm start`



Подключение плагина для автоматического копирования статических ассетов **copy-webpack-plugin**:
```
const CopyWebpackPlugin = require('cope-webpack-plugin');

...

plugins: [
	new CopyWebpackPlugin([
		{
			from: path.resolve(__dirname, `src/assets/favicon.ico`),
			to: path.resolve(__dirname, `dist`),
		}
	]),
]

...
```


Подключение плагина **mini-css-extract-plugin**,
данный плагин это не только плагин, но ещё и class, предоставляющий нам возможность добавить лоадер
```
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


...


plugins: [
	new MiniCssExtractPlugin({
		filename: `[name].[contenthash].css`,
	}),
],


...


module: [
	{
		test: /\.css$/,
		use: [
			{
				hmr: true,
				reloadAll: true,
			},
			`css-loader`
		],
	}
],
```

опция `hmr` - это от hot module replacement



Установка переменной isDev для манипулирования опциями сборки в зависимости от development или production:

для начала нужно установить пакет `cross-env`, 
затем в Package.json в скриптах добавить этот пакет с установленным параметром NODE_ENV в значение development(или production)

```
"scripts": {
    "dev": "cross-env NODE_ENV=development webpack --mode development",
    "build": "cross-env NODE_ENV=production webpack --mode production",
    "watch": "cross-env NODE_ENV=development webpack --mode development --watch",
    "start": "cross-env NODE_ENV=development webpack-dev-server --mode development --open"
 },
```

и в конфиге добавить переменныю-флаг isDev:
```
const isDev = process.env.NODE_ENV === `development`;
```


Для минификации index.html(и др. html-файлов) для плагина **`HTMLWebpackPlugin`** добавить опции в поле `minify`:
```
new HTMLWebpackPlugin({
	template: `./index.html`,
	minify: {
		collapseWhitespace: !isDev,
		removeComments: !isDev,
	},
}),
```
минификация html'ников будет работать только для сборки продакшна благодаря флагу `!isDev`, доп. инфа по опциям минификации -> https://github.com/jantimon/html-webpack-plugin#minification, 
https://github.com/jantimon/html-webpack-plugin#options



Для оптимизации css и js нужно подключить два плагина **terser-webpack-plugin** и **optimize-css-assets-webpack-plugin** , нужно учесть условие, чтобы эти плагины сработали только для продакшн-сборки, т.е. для !isDev (npm run build). Для этого нужно гприсать функцию `optimization()`, которая возвращает объект нужного конфига в заивисмости от production/development режима. Результат вызова этой функции поместить в свойство `optimization`:
```
...

const OptimizeCssAssetsWebpackPlugin = require(`optimize-css-assets-webpack-plugin`);
const TerserWebpackPlugin = require(`terser-webpack-plugin`);


...


const optimization = () => {
	const config = {
		splitChunks: {
			chunks: `all`,
		},
	};

	if(!isDev) {
		config.minimizer = [
			new OptimizeCssAssetsWebpackPlugin(),
			new TerserWebpackPlugin(),
		];
	}

	return config;
}


...



optimization: optimization(),


...
```



Для работы с LESS нужно установить пакеты **less-loader** и 
**less** и добавить правило лоадера для обработки less-файлов
```
...


rules: [
	{
		test: /\.less$/,
		use: [
			{
				loader: MiniCssExtractPlugin.loader,
				options: {
					hmr: isDev,
					reloadAll: true,
				}
			}, 
			`css-loader`,
			`less-loader`,
		],
	},
],


...
```



Можно сделать такую функцию:
```
const filename = (ext) => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;
```
результат выполнения которой поместить в значение для всех ключей `filename`. Эта функция в зависимости от режима `isDev` будет возвращать "нормальное" либо захэшенное имя ассета с учетом расширения для типа файла этого ассета.





Для работы с **SASS** необходимо установить два пакета **node-sass** и **sass-loader**, затем в конфиге добавить правило для sass/scss-файлов
```
...

rules: [
	{
		test: /\.s[ac]ss$/,
		use: [
			{
				loader: MiniCssExtractPlugin.loader,
				options: {
					hmr: isDev,
					reloadAll: true,
				}
			}, 
			`css-loader`,
			`sass-loader`,
		],
	},
],

...
```


Для `DRY`-подхода в css/less/sass лоадерах можно выделить общие элементы и написать функцию `cssLoaders()`:
```
...



const cssLoaders = (additionalLoader) => {
	const loaders = [
		{
			loader: MiniCssExtractPlugin.loader,
			options: {
				hmr: isDev,
				reloadAll: true,
			}
		},
		`css-loader`,
	];

	if(additionalLoader) {
		loaders.push(additionalLoader);
	}

	return loaders;
};



...



rules: [
	{
		test: /\.css$/,
		use: cssLoaders(),
	},
	{
		test: /\.less$/,
		use: cssLoaders(`less-loader`),
	},
	{
		test: /\.s[ac]ss$/,
		use: cssLoaders(`sass-loader`),
	},
],




...
```



Добавление **Babel**
Для babel нужно установить два пакета `babel-loader`, `@babel/core` и пресет `@babel/preset-env` для работы с последними фичам ES/JS в dev-зависимости.
Далее добавить такое правило:
```
module: {
  rules: [
    {
    	test: /\.js$/,
    	exclude: /node_modules/,
    	loader: {
    		loader: `babel-loader`,
    		options: {
    			presets: [
    				`@babel/preset-env`
    			],
    		},
    	}
    }
  ]
}
```

Затем нужно установить пакет `@babel/polyfill` для синтаксиса ES2015+, чтобы не было проблем в браузере и подключить его в вебпак-конфиг:
```
...


entry: {
	main: [`@babel/polyfill`, `./index.js`],
},


...
```
и после сборки тогда заработает async/await и др. ES-последний синтаксис.


Для поддержки экспериментального/предлагаемого/proposal синтаксиса ES Next обновим правило для "бабеля"
```
{
	test: /\.js$/,
	exclude: /node_modules/,
	loader: {
		loader: `babel-loader`,
		options: {
			presets: [
				`@babel/preset-env`,
			],
			plugins: [
				`@babel/plugin-proposal-class-properties`,
			],
		},
	},
},
```



Для компиляци ts-файлов нужно добавить такое правило:
```
{
	test: /\.ts$/,
	exclude: /node_modules/,
	loader: {
		loader: `babel-loader`,
		options: {
			presets: [
				`@babel/preset-env`,
				`@babel/preset-typescript`,
			],
			plugins: [
				`@babel/plugin-proposal-class-properties`,
			],
		},
	},
},
```



Сделаем небольшую оптимизацию для подключения пресетов.
Напишем функцию `babelOptions()`
```
const babelOptions = (preset) => {
	const options = {
		presets: [
			`@babel/preset-env`,
		],
		plugins: [
			`@babel/plugin-proposal-class-properties`,
		],
	};

	if(preset) {
		options.presets.push(preset);
	}

	return options;
};
```


Пример подключения соурсмапов для дев-сборки
```
devtool: isDev ? `source-map`: ``,
```
-> https://webpack.js.org/configuration/devtool/










### Особенности, лайфхаки, нюансы, проблемы:

1). ключевое слово webpack не работало в консоли, установил webpack и cli глобально:

```
npm i webpack webpack-cli -g
```
другие способы решения проблемы искать не стал

так же вот ущё комментарий на эту тему:
```
у кого не запускается webpack при первом запуске, на видео это 25.15 - вместо webpack пишите  npx webpack --config webpack.config.js
https://webpack.js.org/guides/getting-started/#using-a-configuration
```

вот ещё комментарий:
```
При установке локально webpack не запускается (webpack не является внутренней или внешней командой исполняемой программой или пакетным файлом) !
А если поставить webpack глобально, то потом не работает локально установленный плагин!
Есть, правда, предположение, что это из-за операционки - использовал "голую" Windows 7 для тестирования.
```





2). Во время первой сборкм вылетел вот такой варнинг:
```
WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
```
что означает, что я не указал `mode` для сборки и по умолчанию webpack собрал всё в `mode production`, пояснение можно найти здесь:
https://webpack.js.org/configuration/mode/  ,
ну или здесь https://tproger.ru/translations/configure-webpack4/


3). Вот такой кейс при нескольких точках входа:
```
ERROR in chunk main [entry]
bundle.js
Conflict: Multiple chunks emit assets to the same filename bundle.js (chunks analytics and main)
```
-> несколько чанков(т.е. файлов) пытаются склеется в один бандл и получается конфликт
в качестве решения можно использовать паттерны в именах к файлам-бандлам, например
`...   filename: '[name].bundle.js',    ...`
и тогда на выходе будет несколько соответствующих бандлов: для main это будет main.bundle.js , а для analytics это analytics.bundle.js



4). Потенциально на продакшне могут быть проблемы с кэшем, т.е. я пересобрал несколько раз бандлы после их какого-то улучшения в коде, но имена/пути к этим файлам js запоминаются и эти файлы кэшируются браузером, т.е. пользователь может не почувствовать этих изменений на свой стороне, т.к. у него работают закэшенные версии этих бандлов и ему самостоятельно нужно чистить кэш, чтобы обойти эту проблему,
нужно использовать такой паттерн `...   filename: '[name].[contenthash].js',   ...` вместо `[name].bundle.js`

подробнее о паттернах вот здесь https://webpack.js.org/configuration/output/#outputdevtoolmodulefilenametemplate



5). Добавление плагина в конфиг вебпака, особенность в том, что сам плагин добавляется как инстанс класса плагина, т.е. с помощью ключевого слова new с вызовом конструктора класса, т.е. 
```
plugins: [
	new HTMLWebpackPlugin(),
]
```



6). Возникла проблема после установки свойства `context: path.resolve(__dirname, `src`),` вебпак не мог найти файлы в папке src, это из-за моей невнимательности:
после указания контекста я сделал вот так `main: 'index.js'`, а нужно сделать вот так `main: './index.js'`, и так для всех ассетов


7). Для лоадеров правильно писать `module:  ...`, а не `modules:  ...` , очень легко опечататься


8). Для запуска `webpack-dev-server` в конфиге нужно писать ключ `devServer`, а не `webpackDevServer`, очень легко интуитиыно ошибиться


9). Возникла ошибка `Uncaught ReferenceError: regeneratorRuntime is not defined` при использовании **async/await**, чтобы не было этой проблемы нужно для babel установить полифил `npm install --save @babel/polyfill`