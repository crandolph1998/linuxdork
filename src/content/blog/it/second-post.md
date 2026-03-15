---
title: "Gestori di Pacchetti di Cui Mi Fido"
description: "Come gestisco le installazioni di pacchetti su Debian, Arch e Fedora senza confusione."
pubDate: 'Mar 12 2026'
---

Seguo una regola per la gestione dei pacchetti Linux: sapere sempre quale strumento possiede un pacchetto.

## Debian e Ubuntu

```bash
sudo apt update
sudo apt install ripgrep fd-find
```

Per il software desktop, tengo Flatpak separato da `apt` per evitare versioni misteriose.

## Arch e derivate

```bash
sudo pacman -Syu
sudo pacman -S ripgrep fd
```

Tratto gli helper AUR come livelli di comoditÃ , non come sostituti per capire `pacman`.

## Fedora

```bash
sudo dnf upgrade --refresh
sudo dnf install ripgrep fd-find
```

Se salti tra distro diverse, salva la tua lista di installazione principale in un repository dotfiles e mappa i nomi per distro. Riduce drasticamente i tempi di configurazione.

