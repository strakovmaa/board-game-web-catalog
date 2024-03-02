# Příprava tabulky se seznamem her

Návod pro _klienty_.

## Zpracování rozšíření

Rozšíření ke hrám se nenačítá z BGG. V rozděleném seznamu je možné přidat rozšíření jako Poznámku.

### Základní seznam

Zpracovává každý řádek jako hru. Rozšíření skončí jako **Nenačteno**.

### Seznam rozdělený na Hru a Poznámku

Sloupec **Hra / Poznámka** určuje typ řádku. Každý řádek je zpracováván podle toho, co je vyplněno v tomto sloupci:

- **GAME** - řádek je zpracován standardně jako Hra.
- _nevyplněno_ - řádek je zpracován jako Poznámka - zpracuje se pouze text ve sloupci **Název hry**, poté je tento text přiřazen k nejbližší Hře směrem nahoru. Hra může mít vícero Poznámek.

Poznámky využívejte pro jakékoliv informace, které by vaši návštěvníci měli vědět, ale nemohou být uvedeny ve sloupci **Název hry**, například:

- rozšíření (rozšíření: Titáni nebes)
- edice hry (Kickstarter edice / Deluxe edice / All-in box / playmat)
- provozní informace (chybí CZ pravidla)

## Příprava tabulky

1. Stáhněte si [vzorový seznam her](/assets/Vzorový-seznam-her.xls). Rozhodněte se, jestli budete zpracovávat rozšíření (viz níže), a podle toho vyberte příslušný list.

2. Vyplňte modré sloupce (Název hry by měl odpovídat názvu hry na krabici). Ostatní sloupce nechte prázdné.

3. Vyexportujte CSV, nahrajte jej do administrace a spusťte načítání her. Podrobný návod [zde](/collections.md).

### Pro hry, které byly načteny špatně (např. starší edice)

Ručně dohledejte správnou verzi hry na BGG a zkopírujte její ID z URL do fialového sloupce.

### Pro hry, které nebyly načteny

1. Zkontrolujte překlepy v Názvu hry
2. Zkuste ručně dohledat hru na BGG a zkopírujte její ID z URL do fialového sloupce

### Pro hry, které neexistují na BGG (např. české Albi hry)

Vyplňte všechny zelené sloupce.

> **POZNÁMKA:** Zelené sloupce neslouží k přepisování hodnot z BGG. Vyplníte-li aspoň 1 zelený sloupec, načítání hry se úplně přeskočí.

---

[≪ zpět na hlavní stranu](/index.md)
