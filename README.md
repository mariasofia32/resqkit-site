# ResQKit — Website de prezentare

Site de prezentare (React + Vite, JavaScript + CSS) pentru ResQKit, dispozitivul de
prim ajutor pentru trusa medicală auto.

## Rulare în VS Code

1. Deschide folderul `resqkit-site` în VS Code.
2. Deschide un terminal (`Ctrl+` `` ` ``) și rulează:

   ```bash
   npm install
   npm run dev
   ```

3. Deschide adresa afișată în terminal (implicit `http://localhost:5173`).

## Build pentru producție

```bash
npm run build
npm run preview
```

Fișierele finale apar în folderul `dist/`.

## Structură

```
src/
  components/
    Navbar.jsx      – bară de navigare cu logo și meniu
    Hero.jsx         – secțiune principală + DeviceMock
    DeviceMock.jsx   – mockup animat al ecranului dispozitivului
    Problem.jsx      – secțiunea "Problema"
    Solution.jsx      – secțiunea "Soluția" (pași de funcționare)
    Product.jsx      – funcționalitățile produsului
    Team.jsx         – echipă (7 membri) + mentori (3), cadre dreptunghiulare
    Footer.jsx       – footer cu CTA și logo
    Logo.jsx          – logo-ul ResQKit (SVG)
  App.jsx
  main.jsx
  styles.css          – toate stilurile (paletă + efect glassmorphism)
```


