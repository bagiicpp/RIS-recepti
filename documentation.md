
<img width="2992" height="2768" alt="image" src="https://github.com/user-attachments/assets/fbad484d-7671-4722-a76c-5dbfc9bdbe66" />

# Primeri uporabe 

## 1. Dodaj recepta

| **Primer uporabe:**        | Dodaj recepta                                                              |
| -------------------------- | -------------------------------------------------------------------------- |
| **ID:**                    | PU-DR                                                                      |
| **Cilj:**                  | Registriran uporabnik želi dodati nov recept.                              |
| **Akterji:**               | Registriran uporabnik                                                      |
| **Predpogoji:**            | Uporabnik je registriran in prijavljen.                                    |
| **Stanje sistema po PU:**  | V bazo se doda nov recept z vsemi vnesenimi podatki in izbrano kategorijo. |

**Scenarij:**
1. Uporabnik klikne gumb »Dodaj recepta«.
2. Sistem prikaže obrazec za vnos podatkov o receptu.
3. Uporabnik vnese osnovne podatke o receptu.
4. Uporabnik izbere kategorijo recepta.
5. Uporabnik potrdi dodajanje recepta.
6. Sistem shrani recept v bazo.
7. Sistem prikaže potrditev o uspešnem dodajanju.

**Alternativni tokovi:**
- **3a:** Uporabnik zapre obrazec → recept se ne shrani.
- **4a:** Kategorija recepta ni izbrana → sistem zahteva izbiro kategorije za nadaljevanje.

**Izjeme:**
- Pri shranjevanju recepta pride do napake → sistem prikaže sporočilo o napaki.

---

## 2. Izbris recepta

| **Primer uporabe:**        | Izbris recepta                                                                          |
| -------------------------- | --------------------------------------------------------------------------------------- |
| **ID:**                    | PU-IR                                                                                   |
| **Cilj:**                  | Uporabnik želi izbrisati izbrani recept iz sistema.                                    |
| **Akterji:**               | Registriran uporabnik                                                                   |
| **Predpogoji:**            | Uporabnik je prijavljen in je lastnik recepta.                                          |
| **Stanje sistema po PU:**  | Izbrani recept je trajno odstranjen iz baze in se ne prikaže več na seznamu receptov.  |

**Scenarij:**
1. Uporabnik izbere recept, ki ga želi izbrisati (iz podrobnosti recepta ali seznama).
2. Uporabnik klikne gumb »Izbriši recept«.
3. Sistem prikaže potrditveno okno z opozorilom.
4. Uporabnik potrdi izbris.
5. Sistem odstrani recept iz baze podatkov.
6. Sistem prikaže potrditev o uspešnem izbrisu in preusmeri uporabnika na seznam receptov.

**Alternativni tokovi:**
- **4a:** Uporabnik prekliče izbris → recept ostane v bazi in na seznamu receptov.

**Izjeme:**
- Napaka pri brisanju iz baze → sistem prikaže sporočilo o napaki.

---

## 3. Urejanje recepta

| **Primer uporabe:**        | Urejanje recepta                                                                 |
| -------------------------- | -------------------------------------------------------------------------------- |
| **ID:**                    | PU-UR                                                                            |
| **Cilj:**                  | Uporabnik želi urediti podatke obstoječega recepta.                              |
| **Akterji:**               | Registriran uporabnik                                                            |
| **Predpogoji:**            | Uporabnik je prijavljen in lastnik recepta.                                      |
| **Stanje sistema po PU:**  | Podatki recepta so posodobljeni v bazi in se vidijo v podrobnosti recepta.       |

**Scenarij:**
1. Uporabnik odpre podrobnosti recepta.
2. Uporabnik klikne gumb »Uredi recept«.
3. Sistem prikaže obrazec z obstoječimi podatki.
4. Uporabnik spremeni podatke (naziv, sestavine, postopek).
5. Po potrebi spremeni tudi kategorijo recepta.
6. Uporabnik potrdi urejanje.
7. Sistem shrani posodobljene podatke v bazo.
8. Sistem prikaže potrditev o uspešnem urejanju.

**Alternativni tokovi:**
- **4a:** Uporabnik prekliče urejanje → sistem zapre obrazec in podatki se ne shranijo.

**Izjeme:**
- Napaka pri shranjevanju podatkov → sistem prikaže sporočilo o napaki.

---

## 4. Označevanje priljubljen recept

| **Primer uporabe:**        | Označevanje priljubljen recept                                    |
| -------------------------- | ----------------------------------------------------------------- |
| **ID:**                    | PU-OPR                                                            |
| **Cilj:**                  | Uporabnik želi označiti ali odstraniti recept kot priljubljen.   |
| **Akterji:**               | Registriran uporabnik                                             |
| **Predpogoji:**            | Uporabnik je prijavljen.                                          |
| **Stanje sistema po PU:**  | Recept je označen kot priljubljen ali odstranjen iz priljubljenih.|

**Scenarij:**
1. Uporabnik ogleda recept (iz seznama ali podrobnosti).
2. Uporabnik klikne ikono srca.
3. Sistem posodobi stanje v bazi.
4. Sistem prikaže vizualno potrditev (polno srce za priljubljen).

**Alternativni tokovi:**
- **2a:** Recept je že priljubljen → sistem odstrani iz priljubljenih in prikaže prazno srce.

**Izjeme:**
- Uporabnik ni prijavljen → sistem prikaže sporočilo in zahteva prijavo.
- Napaka pri shranjevanju v bazo → sistem prikaže sporočilo o napaki.

---

## 5. Pregled priljubljenih receptov

| **Primer uporabe:**        | Pregled priljubljenih receptov                           |
| -------------------------- | -------------------------------------------------------- |
| **ID:**                    | PU-PPR                                                   |
| **Cilj:**                  | Uporabnik želi videti seznam svojih priljubljenih receptov. |
| **Akterji:**               | Registriran uporabnik                                    |
| **Predpogoji:**            | Uporabnik je prijavljen.                                 |
| **Stanje sistema po PU:**  | Sistem prikaže seznam priljubljenih receptov.            |

**Scenarij:**
1. Uporabnik izbere možnost »Priljubljeni recepti«.
2. Sistem pridobi in prikaže seznam priljubljenih receptov.

**Alternativni tokovi:**
- **2a:** Uporabnik še nima priljubljenih → sistem prikaže prazen seznam s sporočilom.

**Izjeme:**
- Napaka pri branju baze → sistem prikaže sporočilo o napaki.

---

## 6. Oddaja oceno receptu

| **Primer uporabe:**        | Oddaja oceno receptu                                                                   |
| -------------------------- | -------------------------------------------------------------------------------------- |
| **ID:**                    | PU-OOR                                                                                 |
| **Cilj:**                  | Uporabnik želi oceniti recept z oceno od 1 do 5.                                      |
| **Akterji:**               | Registriran uporabnik                                                                  |
| **Predpogoji:**            | Uporabnik je prijavljen in ogleda podrobnosti recepta.                                 |
| **Stanje sistema po PU:**  | Nova ocena je shranjena ali posodobljena v bazi, povprečna ocena recepta je posodobljena. |

**Scenarij:**
1. Uporabnik ogleda podrobnosti recepta.
2. Uporabnik klikne gumb »Oceni recept«.
3. Sistem vključi PU »Vnos ocene«.
4. Sistem prejme veljavno oceno od uporabnika.
5. Sistem shrani oceno v bazo.
6. Sistem posodobi povprečno oceno recepta.
7. Sistem prikaže potrditev in posodobljeno povprečno oceno.

**Alternativni tokovi:**
- **3a:** Uporabnik prekliče vnos ocene → ocena se ne shrani.

**Izjeme:**
- Napaka pri shranjevanju v bazo → sistem prikaže sporočilo o napaki.

---

## 7. Vnos ocene

| **Primer uporabe:**        | Vnos ocene                                            |
| -------------------------- | ----------------------------------------------------- |
| **ID:**                    | PU-VO                                                 |
| **Cilj:**                  | Uporabnik vnese numerično oceno recepta.              |
| **Akterji:**               | Registriran uporabnik                                 |
| **Predpogoji:**            | Uporabnik je kliknal gumb »Oddaja oceno receptu«.     |
| **Stanje sistema po PU:**  | Sistem pridobi veljavno oceno.                        |

**Scenarij:**
1. Sistem prikaže vnosno polje za oceno (1-5).
2. Uporabnik izbere oceno.
3. Sistem preveri veljavnost ocene.
4. Sistem vrne oceno nadrejenemu PU.

**Alternativni tokovi:**
- **3a:** Ocena izven razpona (manj kot 1 ali več kot 5) → sistem zahteva ponoven vnos.

**Izjeme:**
- Ocena ni številka → sistem prikaže opozorilo in zahteva numeričen vnos.

---

## 8. Iskanje recepta

| **Primer uporabe:**        | Iskanje recepta                                                             |
| -------------------------- | --------------------------------------------------------------------------- |
| **ID:**                    | PU-ISR                                                                      |
| **Cilj:**                  | Uporabnik želi poiskati recepte po ključni besedi.                          |
| **Akterji:**               | Registriran uporabnik, Neregistriran uporabnik                              |
| **Predpogoji:**            | Sistem je dostopen.                                                         |
| **Stanje sistema po PU:**  | Sistem prikaže seznam zadetkov ali sporočilo, da ni rezultatov.             |

**Scenarij:**
1. Uporabnik vnese iskalni niz v iskalno polje.
2. Sistem poišče recepte, ki v naslovu vsebujejo iskalni niz.
3. Sistem prikaže rezultate iskanja v obliki seznama receptov.

**Alternativni tokovi:**
- **3a:** Ni receptov za iskalni niz → sistem prikaže sporočilo "Ni zadetkov za iskalni niz".

**Izjeme:**
- Napaka pri iskanju v bazi → sistem prikaže sporočilo o napaki.

---

## 9. Izbira kategorija recepta

| **Primer uporabe:**        | Izbira kategorija recepta                                          |
| -------------------------- | ------------------------------------------------------------------ |
| **ID:**                    | PU-IKR                                                             |
| **Cilj:**                  | Uporabnik izbere kategorijo recepta.                               |
| **Akterji:**               | Registriran uporabnik                                              |
| **Predpogoji:**            | Uporabnik dodaja nov recept ali ureja obstoječi recept.            |
| **Stanje sistema po PU:**  | Izbrana kategorija je zabeležena in pripravljena za shranitev v bazo. |

**Scenarij:**
1. Sistem prikaže seznam razpoložljivih kategorij.
2. Uporabnik izbere kategorijo iz seznama.
3. Sistem zabeleži izbor in omogoči nadaljevanje.

**Alternativni tokovi:**
- **2a:** Uporabnik ne izbere kategorije → sistem označi polje kot obvezno.
- **2b:** Uporabnik poskuša shraniti brez kategorije → sistem onemogoči shranjevanje in prikaže opozorilo.

**Izjeme:**
- Seznam kategorij ni na voljo → sistem prikaže sporočilo o napaki.

---

## 10. Filtriranje po kategoriji receptov

| **Primer uporabe:**        | Filtriranje po kategoriji receptov               |
| -------------------------- | ------------------------------------------------ |
| **ID:**                    | PU-FKR                                           |
| **Cilj:**                  | Uporabnik želi prikazati recepte določene kategorije. |
| **Akterji:**               | Registriran uporabnik, Neregistriran uporabnik  |
| **Predpogoji:**            | Kategorije obstajajo.                            |
| **Stanje sistema po PU:**  | Prikazan je filtriran seznam receptov.           |

**Scenarij:**
1. Uporabnik odpre seznam receptov.
2. Uporabnik izbere kategorijo za filtriranje.
3. Sistem prikaže recepte iz izbrane kategorije.

**Alternativni tokovi:**
- **3a:** Ni receptov v kategoriji → sistem prikaže prazen seznam s sporočilom.

**Izjeme:**
- Napaka pri filtriranju → sistem prikaže sporočilo o napaki.

---

## 11. Pregled seznama receptov

| **Primer uporabe:**        | Pregled seznama receptov                     |
| -------------------------- | -------------------------------------------- |
| **ID:**                    | PU-PSR                                       |
| **Cilj:**                  | Uporabnik želi videti seznam vseh receptov.  |
| **Akterji:**               | Registriran uporabnik, Neregistriran uporabnik |
| **Predpogoji:**            | Sistem je dostopen.                          |
| **Stanje sistema po PU:**  | Seznam receptov je prikazan.                 |

**Scenarij:**
1. Uporabnik odpre začetni pogled aplikacije.
2. Sistem pridobi seznam vseh receptov iz baze.
3. Sistem prikaže seznam v uporabniškem vmesniku.

**Alternativni tokovi:**
- **2a:** V sistemu še ni receptov → sistem prikaže sporočilo "Še ni dodanih receptov" ali prazno stran.

**Izjeme:**
- Napaka pri branju iz baze → sistem prikaže sporočilo o napaki.

---

## 12. Pregled podrobnosti recepta

| **Primer uporabe:**        | Pregled podrobnosti recepta                                                          |
| -------------------------- | ------------------------------------------------------------------------------------ |
| **ID:**                    | PU-PPRD                                                                              |
| **Cilj:**                  | Uporabnik želi videti vse informacije o izbranem receptu.                            |
| **Akterji:**               | Registriran uporabnik, Neregistriran uporabnik                                       |
| **Predpogoji:**            | Recept obstaja v sistemu.                                                            |
| **Stanje sistema po PU:**  | Prikazane so vse podrobnosti recepta z možnostmi za dodatne akcije (če je prijavljen).|

**Scenarij:**
1. Uporabnik izbere recept s seznama.
2. Sistem preveri, ali recept še obstaja.
3. Sistem pridobi vse podatke o receptu (naziv, sestavine, postopek, kategorija, avtor, povprečna ocena).
4. Sistem prikaže podrobnosti recepta.
5. Če je uporabnik prijavljen → sistem prikaže dodatne možnosti (označevanje priljubljenih, ocenjevanje).
6. Če je uporabnik lastnik recepta → sistem prikaže možnosti urejanja in brisanja.

**Alternativni tokovi:**
- **2a:** Recept ne obstaja več → sistem prikaže sporočilo "Recept ni več na voljo" in preusmeri na seznam receptov.

**Izjeme:**
- Napaka pri nalaganju podatkov iz baze → sistem prikaže sporočilo o napaki.

---

## 13. Pregled povprečne ocene recepta

| **Primer uporabe:**        | Pregled povprečne ocene recepta                  |
| -------------------------- | ------------------------------------------------ |
| **ID:**                    | PU-POR                                           |
| **Cilj:**                  | Uporabnik želi videti povprečno oceno recepta.   |
| **Akterji:**               | Registriran uporabnik, Neregistriran uporabnik   |
| **Predpogoji:**            | Uporabnik pregleduje podrobnosti recepta.        |
| **Stanje sistema po PU:**  | Povprečna ocena je izračunana in prikazana.      |

**Scenarij:**
1. Uporabnik odpre pregled podrobnosti recepta.
2. Sistem zbere vse ocene recepta iz baze.
3. Sistem izračuna povprečje ocen.
4. Sistem prikaže povprečno oceno ob podrobnostih recepta.

**Alternativni tokovi:**
- **2a:** Recept še nima ocen → sistem prikaže sporočilo "Recept še ni ocenjen".

**Izjeme:**
- Napaka pri branju ocen → sistem prikaže sporočilo o napaki in povprečna ocena se ne prikaže.
