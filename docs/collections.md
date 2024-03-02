# Správa seznamů her

Návod pro _klienty_.

Administrace je dostupná na adrese `VÁŠ-WEB.CZ/admin`

## Seznam her

Tato stránka zobrazuje přehled vašich seznamů. Pouze jeden z nich může být označen jako **aktivní** - tento seznam je viditelný v Katalogu.

## Přidání nového seznamu her

1. Běžte do **Administrace > Nový seznam**

2. Sekce **Nastavení CSV sloupců** ukazuje názvy sloupců, které budou zpracovány. Na první řádek vaší tabulky doplňte názvy sloupců, které chcete zpracovat (ostatní sloupce budou ignorovány, není potřeba je mazat z vaší tabulky)

3. Vaši tabulku exportujte jako CSV soubor (obvykle v **Soubor > Uložit jako** nebo **Soubor > Stáhnout**)

4. V sekci **Nahrát CSV soubor** Klikněte na **Nahrát** a vyberte váš CSV soubor

5. Vyplňte **Název seznamu** (slouží jen jako interní poznámka pro vás) a klikněte na **Uložit seznam**. Budete přesměrováni na stránku detailu seznamu

6. Klikněte na **Zobrazit BGG Loader** a poté na **Načíst X her**. Nezavírejte stránku, dokud Loader neskončí ()

### Sekce BGG Loader

Načítání hry může dopadnout těmito stavy:

- Načteno - vše je v pořádku

- Nenalezeno + **Error: No results found** - zkontrolujte překlepy v názvu hry, případně manuálně vyhledejte hru na BGG, opravte název ve své tabulce a opakujte celý proces od **Přidání nového seznamu her**. Některé původní hry od českých vydavatelů nejsou v BGG vůbec.

- Nenalezeno + **Error: Result is not of type boardgame** - jedná se pravděpodobně o **rozšíření** , označte jej jako rozšíření hry ve vaší tabulce podle návodu

- Nenalezeno + **TypeError: Failed to fetch** - překročeny limity, viz níže

> **POZNÁMKA:** BGG API má limitovaný počet požadavků za určité časové období. BGG Loader se snaží zpomalovat načítání tak, aby tyto limity nepřekročil. Pokud váš seznam obsahuje cca 400 her a více, může se stát, že načítání náhle skončí a k poslední načítané hře se napíše **TypeError: Failed to fetch**. V takovém případě počkejte pár minut a spusťte Loader znovu (bude pokračovat tam, kde přestal).

### Kontrola výsledků

1. Po uložení her klikněte na **Zobrazit náhled seznamu her** a zkontrolujte výsledek načítání (takto se budou zobrazovat hry v Katalogu). Ověřte zejména rok vydání hry a obrázek - některé hry mají více edicí, případně pod jedním názvem existuje více her.

2. Jste-li s výsledkem spokojeni, klikněte v horní části stránky na **Označit jako aktivní**. Tímto zveřejníte seznam her v Katalogu (můžete také smazat všechny špatně vyplněné seznamy). Případně opravte informace ve své tabulce a opakujte celý proces od **Přidání nového seznamu her**

> **POZNÁMKA:** Seznam her, který nemá všechny hry staženy, nemůže být označen jako **aktivní**.

## Smazání seznamu her

1. Běžte do **Administrace > Seznam her** a vyberte příslušný seznam
2. Klikněte na tlačítko **Smazat seznam**

Doporučujeme mazat všechny seznamy se špatně vyplněným/načteným seznamem her a nechávat v Administraci pouze správně vyplněné seznamy jako zálohu, kterou lze v případě potřeby označit jako aktivní.

> **POZNÁMKA:** Seznam her, který je označen jako **aktivní**, nemůže být smazán.

## Zálohování seznamu her

### Vytvoření zálohy

1. Běžte do **Administrace > Seznam her** a vyberte příslušný seznam
2. Klikněte na tlačítko **Stáhnout zálohu (JSON)**

### Obnovení ze zálohy

1. Běžte do **Administrace > Nastavení**
2. Klikněte na tlačítko **Nahrát JSON**
3. Celý seznam her (včetně stažených informací) se vloží do Administrace a budete přesměrování na jeho detail
4. Klikněte na **Označit jako aktivní** pro zveřejnění seznamu

---

[≪ zpět na hlavní stranu](/index.md)
