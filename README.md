# English Vocabulary Trainer

## Описание проекта

Данный проект представляет собой тренажер для тренировки и запоминания английских слов.

Основные особенности:
- Поддерживается только ENG раскладка.
- Каждая тренировка содержит 6 случайных слов из списка и представляет собой последовательный набор заданий.
- В каждом задании пользователь получает слово, разбитое на буквы, перемешанные в случайном порядке.
- Задача пользователя — собрать слово целиком, перемещая буквы из одного контейнера в другой.
- Пользователь может кликать на кнопки с буквами или нажимать соответствующие клавиши на клавиатуре.
- Если пользователь выбирает некорректную букву, то приложение засчитывает ошибку и подсвечивает соответствующую кнопку красным цветом.
- При вводе с клавиатуры подсветка ошибки срабатывает только если буква присутствует в слове. Если она отсутствует, то приложение просто засчитывает ошибку без индикации.
- Если пользователь нажал на клавиатуре на отсутствующую букву, то приложение засчитывает ошибку.
- Максимальное кол-во ошибок на одном задании — 3. При достижении этого лимита все кнопки встают в правильном порядке, но перекрашиваются в красный цвет. После этого с небольшой задержкой происходит переход к следующему заданию.
- После завершения тренировки приложение выдает статистику:
    - Число собранных слов без ошибок.
    - Число ошибок.
    - Слово с самым большим числом ошибок (если таковых несколько, то выводится последнее).

## Технологии

- TypeScript
- HTML & CSS
- Prettier
- Webpack
- Babel

## Установка

Для установки приложения локально необходимо выполнить следующие шаги:

1. Склонировать репозиторий:

```bash
git clone https://github.com/MitrixD/english-vocabulary-trainer.git
```

2. Перейти в указанную директорию:

```bash
cd english-vocabulary-trainer
```

3. Установить зависимости:

```bash
npm install
```
## Создание билда
Чтобы выполнить development сборку, выполните команду:

```bash
npm run build
```


## Использование
Для запуска проекта необходимо выполнить следующие шаги:

1. Чтобы запустить сервер для разработки, выполните команду:

```bash
npm start
```
2. Далее необходимо перейти по адресу http://localhost:3000 для использования приложения.
