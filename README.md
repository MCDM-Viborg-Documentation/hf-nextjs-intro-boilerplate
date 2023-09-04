# NextJS - MCDM - Viborg.

# 1. Kom igang.


**Video**   
[Start med denne video](https://mcdm-viborg.github.io/NextJS/?chapter=chapter-1).


Der er to store ting vi skal lære..

**NextJS** *og* **React**.

Vi starter med at lære om **NextJS** og dens opbygning. Når vi skal til at lave indhold til vores sider arbejder vi med **React** i **NextJS frameworket**.

Vi vil med tiden hoppe imellem disse to hele tiden men huske på at de har to "forskellige" formål.

Den ene er orkesterlederen (*NextJS*) den anden er selve musikerne i orkesteret (*React*).

## Primær Dokumentation

Bookmark, Gennem-travl, en all-nighter, hyg og byg med disse sider - jo mere jo bedre.

* [https://nextjs.org/](https://nextjs.org/)
* [https://react.dev/](https://react.dev/)

Meget af det vi vil gennemgå vil være at finde under "docs" på nextJS sitet

* [https://nextjs.org/docs](https://nextjs.org/docs)

Vi vil benytte et projekt kaldet "Smuk Nu" som udgangspunkt til flere tutorials.
Designet der vil blive refereret til kan findes her.

* ["Smuk nu" design XD-dokument](https://xd.adobe.com/view/38d00bea-2b1e-4d2c-afe2-d2d9274e6a39-6d83/) 

## Video til denne dokumentation.

Vi har/vil lave tutorials og gennemgang af væsentlige emner som video.
Men de kan ikke stå alene! - Undervisningen vil række udover disse videoer.

Men dette dokument og video tutorials vil følges nogenlunde ad.

[https://mcdm-viborg.github.io/NextJS/](https://mcdm-viborg.github.io/NextJS/)


# 2.0 - Og så til sagen - Installation, opsætning og struktur.

Vi starter med at få NextJS til at køre på jeres maskine.

### Forudsætninger.

* NodeJS installeret vi benytter NPM
* Visual Code
* Lidt viden om Terminalen
    * I skal kunne finde den mappe i gerne vil installere jeres projekter i. 
    * Se evt: [Video om brug af terminalen](https://www.youtube.com/watch?v=3IZ08ALzgDk)

## 2.1 Installation.

**Video**   
[Start med denne video - Installation](https://mcdm-viborg.github.io/NextJS/?chapter=chapter-2).

Vær opmærksom på at du vil oprette en mappe med dit projekt, I den mappe du køre denne kommando i terminalen.

Feks ```C:\MCDM_Next> npx create-next-app@latest``` vil installere et ny projekt (en mappe) i min **MCDM_Next** mappe på **C-drevet**.  


Terminal kommando til etablering af et NextJS projekt via NPM(NPX)
```
npx create-next-app@latest
```

Nu vil man i terminalen, blive mødt af en række spørgsmål - vi har et udgangspunkt til undervisning, men man må hjertens gerne eksperimentere.

**Vores udgangspunkt er**:     

Det første vi skal angive er en titel på vores projekt.
Det **skal** "lowercase" projekt navn, altså ingen store bogstaver og skal du have mellemrum så benyt underscore. Feks. learn_to_use_nextjs

*Og husk du kan lave alle dem du vil og slette dem igen. Det tager 3 minutter at lave en ny.*

Vores svar på de spørgsmål vi bliver stillet.
```
√ Would you like to use TypeScript with this project?
No

√ Would you like to use ESLint with this project? 
Yes

√ Would you like to use Tailwind CSS with this project?
No

√ Would you like to use `src/` directory with this project?
Yes

√ Use App Router (recommended)?
Yes

√ Would you like to customize the default import alias?
No
```

Dette giver et fælles udgangspunkt for udvikling og vi arbejder samtidigt med den nyeste 13.x.x version af nextJS.

Nu skal vi åbne det projekt i visual code og vi er klar til at udvikle.

## 2.2 Byg, Start og udvikling af vores NEXT projekt

**Video**       
[Start med denne video - Byg, Start...](https://mcdm-viborg.github.io/NextJS/?chapter=chapter-3).

Alle nextjs projekter skal "bygges" før de kan udvikles og afleveres.

Så derfor er det først vi skal gøre er at bygge vores projekt ved hjælp af et indbygge script der kan kaldes via en kommando.

**Build**  

Med projektet åben, åbner du en en terminal i visualcode, og skriver.

```
npm run build
```

Så vi vi begynde at bygge projektet og du vil se at der bliver oprettet en ``.next`` mappe i dit projekt.
Du vil få besked i terminalen hvis det er gået godt med at bygge og du kan lukke terminalen og ånbne en ny.

**Dev**   

Nu er vi klar til at udvikle på projektet dertil er der en ny kommando.

```
npm run dev
```

Nu startes der en webserver, som du kender det fra "live-server" og i terminalen kan du se hvilken adresse din udviklings-side *køre* på. I de fleste tilfælde vil det være ``http://localhost:3000``. Åbn denne adresse i din browser.

Nu vil du kunne ændre i f.eks ``page.js`` og browseren skulle gerne opdaterer og reflektere dine ændringer.

**Nu er vi igang!...MEN :)** 

Der er en nemmere måde at starte og stoppe scripts. Det er ved at benytte VisualCode´s indbyggede UI.

![alt text](https://mcdm-resources.ams3.cdn.digitaloceanspaces.com/git-images/nextjs/npm_scripts.png)

I *Panelet* i Viusal Code er der en sektion med "**NPM SCRIPTS**". (Se billedet).

Læg mærke til den viser scripts fra *package.json*. Og hvis vi kigger i vores ``package.sjon`` fil så finder vi:

```json
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
},
```

Det er de indbyggede scripts vi kalder med vores kommadoer.

Så *dobbelt-klikker* du **'build'** - Så vil det være det samme, som når vi *skriver* en build kommando via ``npm run build``. Og det samme gælder selvfølgelig for de andre.

Og vi kan nu se 2 kommadoer vi ikke har set endnu.

```
npm run start
npm run lint
```

**Start** 

fungere som dev, MEN kun i den forstand at den starter en server, og i får en adress i kan se siden på. Som regel, igen ``http://localhost:3000``.

Men tilforskel fra ``dev`` så er dette den **optimeret** version - den version, der gerne skulle være hurtig og velbygget - klar til voksen-serveren. 

*Jeg anbefaler at i tester jeres projekter, i ny og næ, i "production" start mode.*

**Lint**

Vi vil komme tilbage til *linting* senere. I første omgang har vi frie "tøjler".

Hvis du er interreseret i at have regler for hvordan din kode skrives er det via den ```eslintrc.json```
der er placeret i projektet.

De fire kommadoer:
```
npm run dev     <- Starter projektet i udvikler tilstand
npm run build   <- Bygger projektet
npm run start   <- Starter projektet i færdig tilstand
npm run lint    <- Undersøger projektet for lint fejl. Kode der ikke lever op til vores regler.
```

# 2.2 Struktur.
**Video**       
[Start med denne video - Fil struktur i et NextJS projekt](https://mcdm-viborg.github.io/NextJS/?chapter=chapter-4).

Nu kan vi installere og starte vore NextJS framework. Så skal vi se på hvad et projekt indeholder som udgangspunkt.


## 2.2.1 Filer og Opsætning
Strukturen i next er vigtig. Det er både godt og skidt.

Det hjælper os med rigtig mange ting, men det gør også at du skal følge lidt regler.

*Referencer:*
* https://nextjs.org/docs/getting-started/project-structure
* https://nextjs.org/docs/app/api-reference/file-conventions

Ovenstående referencer beskriver flere af de "regler" for filer og struktur som findes i NextJS. Vi kommer til løbende af blive klogere og klogere på disse regler og i første omgang koncentrere vi os om det der gør os isatnd til at udvikle applikationer i React.

...todo

# 2.3 Struktur og Boilertemplate

[Start med denne video - Mere om struktur imens vi starter en ren NextJS boilerplate vi kan bruge til vores projekter.](https://mcdm-viborg.github.io/NextJS/?chapter=chapter-5).

...todo

# 2.4 Struktur og Mere Boilertemplate

[Start med denne video - Vi bygger vores boilerplate færdig imens vi lære lidt om struktur og react.](https://mcdm-viborg.github.io/NextJS/?chapter=chapter-6).

...todo

# 2.5 Struktur og Mere Boilertemplate

[Projektet på GitHub så vi kan holde det opdateret og hente den når vi skal starte et nyt projekt.](https://mcdm-viborg.github.io/NextJS/?chapter=chapter-7).

...todo