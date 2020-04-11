### Общая инфа

 -> https://webpack.js.org/

Плагины - это дополнительный функционал в виде классов, который можно добалвять к базовой конфигурации webpack'а. 





#### Перечень устанавливаемых пакетов/команд/плагинов
npm install -D webpack webpack-cli

webpack - пакет самого вебпака
webpack-cli - консольный интерфейс для работы с вебпаком


плагин **html-webpack-plugin**
```
npm i -D html-webpack-plugin
```
позволяет взаимодействовать с html'ем









>>>>>

ключ `-D` - это devDependencies, данные пакеты нужны для процесса разработки и не пойдут в финальную сборку






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



Плагин для очистки папки dist/  **clean-webpack-plugin**
```
npm i -D clean-webpack-plugin
```
подключается вот так:
```

...

const { CleanWebpackPlugin } = require(`clean-webpack-plugin`);

...

plugins: [
	new CleanWebpackPlugin(),
]


...
```








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