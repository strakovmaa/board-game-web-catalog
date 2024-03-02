# Správa uživatelů

Návod pro _programátory_.

## Přidání uživatele - Google

Příklad: Uživatel Klient chce mít přístup do Administrace

1. Klient musí jít do Administrace na produkci, přihlásit se přes libovolnou službu a kliknout na tlačítko **Požádat o přístup**

2. Developer si spustí projekt lokálně, v Administraci navštíví sekci [Uživatelé](http://localhost:3000/admin/users) a v tabulce na řádku s Klientem klikne na **Udělit přistup**

3. Klient má po přenačtení stránky plný přístup do Administrace.

> **POZNÁMKA:** Z bezpečnostních důvodů není možné editovat uživatele na produkci (seznam uživatelů je viditelný, ale tlačítka neaktivní). Jediný, kdo může udělit přístup, je developer na lokálním prostředí.

## Přidání uživatele - Credentials

Přihlášení přes jméno + heslo je jediný způsob, který funguje na Vercel preview.

1. Spusťte `npm run dev` a běžte do [Administrace](http://localhost:3000/admin)

2. Uživatelé > Přidat nového uživatele

3. Vyplňte **Jméno** a **Heslo** a uložte uživatele

4. V tabulce na řádku s uživatelem klikněte na **Udělit přistup**

> **POZNÁMKA:** Hesla k uživatelským účtům vidí pouze developer na lokálním prostředí, na produkci se zobrazuje ikona zámku, aby se účet s heslem odlišil od účtů jiných providerů.

> **POZNÁMKA:** Na produkci je přihlášení přes jméno + heslo vypnuté, toto chování upravuje config proměnná `DISABLE_CREDENTIALS_ON_PRODUCTION`.

## Smazání uživatele

Po smazání uživatele na lokálním prostředí je nutné revalidovat cache na produkci.

1. Běžte do Administrace na produkci

2. **Nastavení > Nastavení Administrace**

3. Klikněte na **Vymazat cache**

> **POZNÁMKA:** Pokud developer smaže účet uživatele, který je právě přihlášen, tento uživatel ztratí přístup do Administrace až ve chvíli, kdy v prohlížeči udělá přenačtení stránky. Přechod na jinou stránku (přes odkaz v menu) v rámci Next.js aplikace _nevyvolá_ přenačtení, jelikož aplikace je již nacacheována v prohlížeči uživatele.

---

[≪ zpět na hlavní stranu](/index.md)
