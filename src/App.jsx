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
            <Tile>
              <h3>Initial commit</h3>
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
                <li>В файле "index.css" Подключены таблицы сброса и шрифтов</li>
                <li>В файле "App.css" в качестве шрифта установлен "Inter"</li>
                <li>
                  В файле "App.css" прописаны базовые стили страницы и карточки
                  коммита
                </li>
                <li>
                  С помощью записей{" "}
                  <code>git config --global user.name "Mikhail Vasilev"</code> и{" "}
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
                  репозиторий. Присутствуют "node modules", ".vscode/*", "dist"
                  и другие
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
                  Командой <code>git push -u origin main</code> проект загружен
                  в удаленный репозиторий
                </li>
                <li>
                  На рабочем месте №2 пройдена авторизация пользователя Archinsk
                  на https://github.com/ и скопирован адрес репозитория
                  93_git_learning на вкладке Code/SSH
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
                  Пакеты модулей установлены, проект запущен на рабочем месте №2
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
                  Командой <code>git push --force</code> принудительно переписан
                  последний коммит в удаленном репозитории
                </li>
                <p>
                  Оптимальное значение параметра font-size в CSS зависит от
                  контекста — для десктопных и мобильных веб-страниц есть разные
                  рекомендации. Важно учитывать плотность пикселей на разных
                  устройствах — одинаковый физический размер может выглядеть
                  по-разному на экранах с разным разрешением.
                </p>
              </ol>
            </Tile>
            <Tile>
              <h3>Typography settings</h3>
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
            </Tile>
            <Tile>
              <h3>Base layout</h3>
              <ol>
                <li>
                  Командой <code>npm install --save-dev sass</code> в проект
                  добавлен sass
                </li>
                <li>
                  В проект добавлены компоненты FlexboxGrid, FlexboxCol, Tile со
                  стилями в scss-файлах
                </li>
                <li>
                  Макет страницы переделан с использованием компонентов
                  FlexboxGrid, FlexboxCol, Tile
                </li>
              </ol>
            </Tile>
            <Tile>
              <h3>Summaries created</h3>
              <ol>
                <li>
                  Созданы разделы конспектирования и частично наполнены
                  контентом
                </li>
                <li>Стилизованы плитки и заголовки h1-h6</li>
              </ol>
            </Tile>
          </FlexboxGrid>
        </FlexboxCol>
        <FlexboxCol span={3}>
          <FlexboxGrid>
            <Tile>
              <h3>Настройки</h3>
              <div>
                <div>
                  <code>git config --system</code>
                </div>
                <div>
                  системные настройки для всех проектов всех пользователей
                </div>
              </div>
              <div>
                <div>
                  <code>git config --global</code>
                </div>
                <div>настройки для всех проектов текущего пользователя</div>
              </div>
              <div>
                <div>
                  <code>git config --local</code>
                </div>
                <div>настройки текущего проекта</div>
              </div>
              <div>
                <div>
                  <code>git config --list --show-origin</code>
                </div>
                <div>показать все настройки</div>
              </div>
              <div>
                <div>
                  <code>git config --global user.name "John Doe"</code>
                </div>
                <div>установка имени пользователя</div>
              </div>
              <div>
                <div>
                  <code>
                    git config --global user.email johndoe@example.com
                  </code>
                </div>
                <div>установка почты пользователя</div>
              </div>
              <div>
                <div>
                  <code>git config --global core.editor emacs</code>
                </div>
                <div>установка текстового редактора</div>
              </div>
              <div>
                <div>
                  <code>git config --global init.defaultBranch main</code>
                </div>
                <div>
                  установка наименования стартовой ветки для новых репозиториев
                </div>
              </div>
              <div>
                <div>
                  <code>git config --list</code>
                </div>
                <div>просмотр настроек</div>
              </div>
            </Tile>
            <Tile>
              <h3>Информация</h3>
              <div>
                <div>
                  <code>{"git help <команда>"}</code>
                </div>
                <div>справка по команде</div>
              </div>
              <div>
                <div>
                  <code>{"git <команда> --help"}</code>
                </div>
                <div>справка по команде</div>
              </div>
              <div>
                <div>
                  <code>{"man git-<команда>"}</code>
                </div>
                <div>справка по команде</div>
              </div>
              <div>
                <div>
                  <code>{"git <команда> -h"}</code>
                </div>
                <div>краткая справка по команде</div>
              </div>
              <div>
                <div>
                  <code>git status</code>
                </div>
                <div>просмотр состояния файлов</div>
              </div>
              <div>
                <div>
                  <code>git status -s</code>
                </div>
                <div>сокращенный просмотр состояния файлов</div>
              </div>
              <div>
                <div>
                  <code>git status --short</code>
                </div>
                <div>сокращенный просмотр состояния файлов</div>
              </div>
              <div>
                <div>
                  <code>git diff</code>
                </div>
                <div>
                  просмотр непроиндексированных изменений относительно
                  последнего коммита
                </div>
              </div>
              <div>
                <div>
                  <code>git diff --staged</code>
                </div>
                <div>
                  просмотр проиндексированных изменений относительно последнего
                  коммита
                </div>
              </div>
              <div>
                <div>
                  <code>git diff --cached</code>
                </div>
                <div>
                  просмотр проиндексированных изменений относительно последнего
                  коммита
                </div>
              </div>
              <div>
                <div>
                  <code>git difftool</code>
                </div>
                <div>
                  просмотр изменений с помощью специализированных программ
                </div>
              </div>
            </Tile>
            <Tile>
              <h3>Создание и клонирование</h3>
              <div>
                <div>
                  <code>git init</code>
                </div>
                <div>создание репозитория</div>
              </div>
              <div>
                <div>
                  <code>git clone https://github.com/libgit2/libgit2</code>
                </div>
                <div>клонирование удаленного репозитория</div>
              </div>
              <div>
                <div>
                  <code>
                    git clone https://github.com/libgit2/libgit2 mylibgit
                  </code>
                </div>
                <div>
                  клонирование удаленного репозитория в директорию с указанным
                  именем
                </div>
              </div>
            </Tile>
            <Tile>
              <h3>Удаленное хранилище</h3>
            </Tile>
            <Tile>
              <h3>Коммиты</h3>
              <div>
                <div>
                  <code>git commit</code>
                </div>
                <div>открытие окна редактора коммита</div>
              </div>
              <div>
                <div>
                  <code>git commit -v</code>
                </div>
                <div>
                  открытие окна редактора коммита с перечислением различий
                  относительно последнего коммита
                </div>
              </div>
              <div>
                <div>
                  <code>
                    git commit -m "Story 182: fix benchmarks for speed"
                  </code>
                </div>
                <div>
                  создание коммита без открытия окна редактора коммита,
                  указывается только заголовок коммита, без тела
                </div>
              </div>
              <div>
                <div>
                  <code>git commit -a -m 'Add new benchmarks'</code>
                </div>
                <div>
                  создание коммита без открытия окна редактора коммита, с
                  индексированием уже отслеживаемых файлов (без отдельного
                  индексирования)
                </div>
              </div>
              <div>
                <div>
                  <code>git rm PROJECTS.md</code>
                </div>
                <div>удаление файла ??</div>
              </div>
              <div>
                <div>
                  <code>git rm --cached README</code>
                </div>
                <div>удаление файла из списка отслеживаемых</div>
              </div>
              <div>
                <div>
                  <code>git mv README.md README</code>
                </div>
                <div>переименование файла</div>
              </div>
            </Tile>
            <Tile>
              <h3>добавление и удаление</h3>
              <div>
                <div>
                  <code>git add README.md</code>
                </div>
                <div>
                  добавление файла в список отслеживаемых git'ом и к следующему
                  коммиту
                </div>
              </div>
            </Tile>
            <Tile>
              <h3>Общее</h3>
              <div>
                Состояния файлов: неотслеживаемый(untracked), отслеживаемый
                неизмененный(unmodified), изменённый (modified), индексированный
                (staged) и зафиксированый (committed)
              </div>
              <div>
                Файл .gitignore созданный в корне проекта может содержать
                исключения для отслеживания и исключений из исключений
              </div>
            </Tile>
            <Tile>
              <h3>Текущий пункт</h3>
              <div>
                <div>Источник</div>
                <div>https://git-scm.com/book/ru/v2</div>
              </div>
              <div>
                <div>Место остановки</div>
                <div>2.3 Основы Git - Просмотр истории коммитов</div>
              </div>
            </Tile>
          </FlexboxGrid>
        </FlexboxCol>
      </FlexboxGrid>
    </>
  );
}

export default App;
