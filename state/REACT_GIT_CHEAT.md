# Cheat Sheet Git pour projets React

## 0) Créer un nouveau projet React

```bash
npx create-react-app mon-app
cd mon-app
```

## 1) Initialiser Git et lier GitHub

```bash
git init
git branch -M main
git remote add origin https://github.com/<TON_USER>/<TON_REPO>.git
```

## 2) Premier push

```bash
git add .
git commit -m "Initial commit"
git push -u origin main
```

## 3) Workflow quotidien (rapide)

```bash
git status
git add .
git commit -m "feat: description courte"
git push
```

## 4) Récupérer les changements distants

```bash
git pull origin main
```

## 5) Créer une branche feature

```bash
git checkout -b feature/nom-feature
git add .
git commit -m "feat: ajout de ..."
git push -u origin feature/nom-feature
```

## 6) Messages de commit utiles

- `feat:` nouvelle fonctionnalite
- `fix:` correction de bug
- `refactor:` refacto sans changement fonctionnel
- `style:` changement CSS/UI
- `docs:` documentation
- `chore:` taches techniques

Exemple:

```bash
git commit -m "fix: corrige le state du compteur"
```

## 7) Si Git refuse le push

```bash
git pull --rebase origin main
git push
```

## 8) Si le remote n'existe pas encore

```bash
git remote -v
git remote add origin https://github.com/<TON_USER>/<TON_REPO>.git
git push -u origin main
```

## 9) Commandes utiles de debug

```bash
git status
git log --oneline --graph --decorate -n 15
git remote -v
```

## 10) Routine en 4 commandes (a memoriser)

```bash
git add .
git commit -m "feat: ..."
git pull --rebase origin main
git push
```
