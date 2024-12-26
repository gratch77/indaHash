# indaStars

Projekt przygotowany na potrzeby rekrutacji do firmy indaHash.

Krótkie demo projektu: https://youtu.be/jZm7ogRKjS8

## Instalacja
Aby poprawnie uruchomić projekt, należy mieć zainstalowany Docker.
Następnie należy wykonać następujące polecenia:
#### OBRAZ DOCKERA
```
git clone https://github.com/gratch77/indaHash.git
cd indaHash
docker-compose up -d
(Jeśli pojawiają się błędy, to do skutku, aż się uruchomią wszystkie 3 kontenery)
```

#### BACKEND
```
docker-compose exec php bash
composer install
exit
```

#### FRONTEND
```
docker-compose exec node bash
npm install
npm run dev
```

Po poprawnej instalacji projekt jest dostępny pod adresem: http://localhost:5173

## Uwagi

### Wykorzystane technologie
- backend:
  - PHP 8.3
  - Symfony 7.2
  - SQLite
- frontend:
  - Node 18
  - Vite
  - React 18.3 (TypeScript)
  - Axios
  - Zustand

### Architektura
Zarówno po stronie backendu, jak i frontendu, starałem się tak przygotować
wszystkie elementy, żeby umożliwić łatwe ich rozszerzanie oraz ponowne użycie.

API zostało wystawione pod adresem:
http://localhost:8000/api/
oraz zabezpieczone zgodnie z wytycznymi headerem X-API-KEY = indahash.
W katalogu głównym projektu znajduje się plik NFT Cards API.postman_collection.json,
który zawiera przykładowe zapytania do API w programie Postman.

Komunikacja z backendem została zabezpieczona przed wiszącymi zapytaniami, żeby
uniknąć problemów związanych z asynchronicznym pobieraniem danych. Dodana została
paginacja pomiędzy stronami.

### Stylowanie
Zgodnie z wytycznymi, stylowanie zostało wykonane z wykorzystaniem technologii
Sass oraz zgodnie z metodologią BEM. Przy czym nie jest to najbardziej typowa
składnia BEM, a składnia dostosowana do Reakta, wg wytycznych na stronie
https://en.bem.info/methodology/naming-convention/#react-style

### Składnia
Składnia po stronie frontu została napisana pod nadzorem ESLinta z konfiguracją Airbnb.

### Co zostało do zrobienia
Generalnie projekt jest w miarę funkcjonalny, ale jeszcze kilka elementów należałoby
poprawić. Np. wsparcie RWD jest minimalne. Brakuje niektórych elementów graficznych,
choć starałem się zrealizować ich jak najwięcej zgodnie z projektem.

Dodałem również zakładkę z formularzem do dodawania nowej karty, ale niestety nie
zdążyłem jej zaimplementować. Nowe karty tworzyłem korzystając z API w Postmanie.
