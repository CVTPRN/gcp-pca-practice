# PCA Studio — GCP Professional Cloud Architect gyakorló

Magyar felületű, ingyenes, statikus gyakorlóalkalmazás a **standard** Google Cloud Professional Cloud Architect vizsgához. A kérdések saját készítésű feladatok, a [hivatalos exam guide](https://services.google.com/fh/files/misc/professional_cloud_architect_exam_guide_english.pdf) témakörei és a [mintaformátum](https://cloud.google.com/learn/certification/cloud-architect) alapján. **Nem valódi, kiszivárgott vagy Google által jóváhagyott vizsgakérdések.**

## Funkciók

- 65 helyzetalapú kérdés, 6 vizsgatémakör; 15 esettanulmány jellegű feladat.
- Napi 20 kérdés Budapest naptári nap szerint, 20 kérdéses szabad kör, 50 kérdéses vizsgaszimuláció 120 perces tájékoztató időmérővel.
- Témakörönként legfeljebb 10 kérdéses kör és korábbi eredményarány.
- Egy- és kétválaszos feladatok, mentett válaszok, ugrás a kérdések között, végső kiértékelés és kérdésenkénti hivatalos Google Cloud dokumentáció.
- Puskázó: 61 kereshető rövidítés és 12 számszerű tény/vizsgaarány forrásokkal.
- Az eredmények és a folyamatban lévő kör a böngésző localStorage tárában élnek; JSON export és visszaállítás. Nincs fiók, szerveroldali adatbázis vagy eszközök közötti automatikus szinkron.

A válaszok a **Mentés és következő** gombbal kerülnek tartós mentésbe. A kérdéstérképen való ugrás nem menti az épp kijelölt, még nem rögzített választ. A szimulációs óra nem zárja le automatikusan a kört. A százalék nem hivatalos skálázott vizsgapontszám. A feladatokhoz kapcsolt dokumentáció és a számok 2026. november 16-i állapot szerint készültek; a Google módosíthatja őket.

## Futtatás

Node.js 20+ szükséges, külső csomag nincs.

```bash
npm test
npm run build
npm run dev
```

Helyi cím: `http://localhost:3000`. A `dist/` könyvtár közvetlenül publikálható statikus tárhelyen.

## Render Static Site

- Repo: `https://github.com/CVTPRN/gcp-pca-practice`, ág: `main`
- Build command: `npm test && npm run build`
- Publish directory: `dist`
- Nincs környezeti változó, fizetős compute, adatbázis vagy titok.

Az alkalmazás független a Google Cloudtól. A forráslinkek a válaszok ellenőrzésére szolgálnak. A [standard vizsgaoldal](https://cloud.google.com/learn/certification/cloud-architect) az irányadó az aktuális vizsgafeltételekhez.
