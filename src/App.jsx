import { useState } from "react";
import "./App.css";
import { FlexboxGrid } from "./components/FlexboxGrid/FlexboxGrid";
import { FlexboxCol } from "./components/FlexboxCol/FlexboxCol";
import { Tile } from "./components/Tile/Tile";

function App() {
  return (
    <>
      <h1>Git Learning</h1>
      <FlexboxGrid>
        <FlexboxCol span={9}>
          <FlexboxGrid>
            <div className="commit">
              <div className="commit-head">Initial commit</div>
              <div className="commit-body">
                <ol>
                  <li>
                    Выполнено создание проекта с помощью сборщика Vite через
                    консольную команду{" "}
                    <code>
                      npm create vite@latest 92_git_learning -- --template react
                    </code>
                  </li>
                  <li>Удалены файлы логотипов React и Vite</li>
                  <li>Удален код из файла "App.jsx"</li>
                  <li>Добавлен новый контент в файле "App.jsx"</li>
                  <li>Очищены файлы таблиц стилей: "index.css" и "App.css"</li>
                  <li>
                    В директорию "assets" добавлен каталог "fonts" файлы шрифта
                    "Inter" в обычном и полужирном начертании
                  </li>
                  <li>
                    В проект добавлена директория "styles" для хранения файлов
                    таблиц стилей
                  </li>
                  <li>
                    В каталог "styles" добавлен файл сброса браузерных стилевых
                    умолчаний "minireset.css"
                  </li>
                  <li>
                    В файле "index.css" Подключены таблицы сброса и шрифтов
                  </li>
                  <li>
                    В файле "App.css" в качестве шрифта установлен "Inter"
                  </li>
                  <li>
                    В файле "App.css" прописаны базовые стили страницы и
                    карточки коммита
                  </li>
                  <li>
                    С помощью записей{" "}
                    <code>git config --global user.name "Mikhail Vasilev"</code>{" "}
                    и{" "}
                    <code>
                      git config --global user.email "mgp-nsk@yandex.ru"
                    </code>{" "}
                    глобально установлены настройки пользователя Git
                  </li>
                  <li>
                    Командой <code>git config --global --list</code> проверена
                    установка данных пользователя Git
                  </li>
                  <li>
                    Просмотрена справка по команде "init" с помощью{" "}
                    <code>git help init</code>
                  </li>
                  <li>
                    Командой <code>git init -b main</code> создан локальный
                    репозиторий с базовой веткой "main"
                  </li>
                  <li>
                    Просмотрена справка по команде <code>git add</code>
                  </li>
                  <li>
                    Командой <code>git status</code> получен статус текущего
                    положения проекта. Ветка "main", ещё нет коммитов, есть
                    неотслеживаемые файлы и папки
                  </li>
                  <li>
                    Просмотрен файл ".gitignore" с указанием файлов и каталогов,
                    которые не должны отслеживаться и не должны попасть в
                    репозиторий. Присутствуют "node modules", ".vscode/*",
                    "dist" и другие
                  </li>
                  <li>
                    Командой <code>git add .</code> к отслеживанию добавлены все
                    файлы и папки проекта
                  </li>
                  <li>
                    Командой <code>git commit -m "Project Init"</code> создан
                    первый коммит
                  </li>
                  <li>
                    На странице https://github.com/ пройдена авторизация
                    пользователя Archinsk и создан репозиторий 93_git_learning
                  </li>
                  <li>
                    Командой{" "}
                    <code>
                      git remote add origin
                      git@github.com:Archinsk/93_git_learning.git
                    </code>{" "}
                    локальный репозиторий связан с удаленным репозиторием GitHub
                  </li>
                  <li>
                    Командой <code>git push -u origin main</code> проект
                    загружен в удаленный репозиторий
                  </li>
                  <li>
                    На рабочем месте №2 пройдена авторизация пользователя
                    Archinsk на https://github.com/ и скопирован адрес
                    репозитория 93_git_learning на вкладке Code/SSH
                    (git@github.com:Archinsk/93_git_learning.git)
                  </li>
                  <li>
                    В директории с проектами выполнена команда{" "}
                    <code>
                      git clone git@github.com:Archinsk/93_git_learning.git
                    </code>
                    , проект клонирован из удаленного репозитория GitHub на
                    рабочее место №2
                  </li>
                  <li>
                    Установлены npm-модули командой <code>npm install</code>.
                    Пакеты модулей установлены, проект запущен на рабочем месте
                    №2
                  </li>
                  <li>Внесены изменения в карточку описания первого коммита</li>
                  <li>
                    Командой <code>git config --list</code> проверены настройки
                    пользователя Git на рабочем месте №2
                    (user.email=mgp-nsk@yandex.ru, user.name=Михаил Васильев)
                  </li>
                  <li>
                    Командой <code>git add .</code> зафиксированы изменения
                  </li>
                  <li>
                    Командой <code>git commit --amend --no-edit</code>{" "}
                    зафиксированные изменения добавлены в последний коммит без
                    изменения заголовка коммита
                  </li>
                  <li>
                    Командой <code>git push --force</code> принудительно
                    переписан последний коммит в удаленном репозитории
                  </li>
                  <p>
                    Оптимальное значение параметра font-size в CSS зависит от
                    контекста — для десктопных и мобильных веб-страниц есть
                    разные рекомендации. Важно учитывать плотность пикселей на
                    разных устройствах — одинаковый физический размер может
                    выглядеть по-разному на экранах с разным разрешением.
                  </p>
                </ol>
              </div>
            </div>
            <div className="commit">
              <div className="commit-head">Typography settings</div>
              <div className="commit-body">
                <ol>
                  <li>
                    Настроены базовые стили элемента body: фоновый цвет, цвет
                    текста, размер шрифта и высота строки основного текста
                  </li>
                  <li>
                    В проект добавлен шрифт "RobotoMono" в обычном и полужирном
                    начертании
                  </li>
                  <li>
                    Стилизован элемент "code" установкой цветов фона и текста,
                    семейства и размера шрифта, горизонтальных паддингов и
                    скруглений границ
                  </li>
                </ol>
              </div>
            </div>
            <div className="commit">
              <div className="commit-head">Base layout</div>
              <div className="commit-body">
                <ol>
                  <li>
                    Командой <code>npm install --save-dev sass</code> в проект
                    добавлен sass
                  </li>
                  <li>
                    В проект добавлены компоненты FlexboxGrid, FlexboxCol, Tile
                    со стилями в scss-файлах
                  </li>
                  <li>
                    Макет страницы переделан с использованием компонентов
                    FlexboxGrid, FlexboxCol, Tile
                  </li>
                </ol>
              </div>
            </div>
          </FlexboxGrid>
        </FlexboxCol>
        <FlexboxCol span={3}>
          <FlexboxGrid>
            <Tile>Запись 1</Tile>
            <Tile>Запись 2</Tile>
            <Tile>Запись 3</Tile>
          </FlexboxGrid>
        </FlexboxCol>
      </FlexboxGrid>
    </>
  );
}

export default App;
