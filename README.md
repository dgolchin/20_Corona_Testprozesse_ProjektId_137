Inspiration
Die aktuelle Lage überfordert viele Gesundheitsexperten wie Ärzte, Krankenschwestern und weiteren Mitarbeitern im Gesundheitswesen. Vor allem die Telefonanfragen häufen sich bei den Ärzten und Krankenhäusern, so dass mehrere Tage vergehen, bis Anfragen beantwortet werden können. Für dieses Problem haben wir unsere Expertisen zusammengelegt, um eine Lösung anbieten zu können.

What it does
Um eine Entlastung zu schaffen, entwickeln wir aktuell einen virtuellen Assistenten, der auf Basis einer Befragung eine erste Gesundheitseinschätzung geben kann. Der Assistent erfragt entsprechend das Vorhandensein der Symptome und wie stark die Symptome dem Empfinden des Nutzers nach auftreten (Skala 1-10). Anschließend wird nach dem Alter und der Anzahl an Vorerkrankungen gefragt. All diese Daten fließen in eine erstellte Formel ein, die einen Wert berechnet, der eine erste Einschätzung zur Dringlichkeit eines Arztbesuches reflektiert. Liegt der Wert über dem gesetzten Schwellenwert, so wird nach den Kontaktdaten des Nutzers gefragt, damit ein Arzt sich zurückmelden kann. Liegt der Wert unter dem Schwellenwert, wird eine generelle Gesundheitsempfehlung ausgesprochen. Der virtuelle Assistent kann über mehrere Kommunikationsmedien genutzt werden. Bspw. über Telefon, eine Webseite oder einen Messenger Dienst wie bspw. Whatsapp.

Die gesammelten Daten werden strukturiert abgelegt, so dass die Gesundheitsexperten Einsicht in alle Interaktionen zwischen Nutzer und virtuellem Assistent erhalten. Die Daten werden über ein Ampelsystem vorkategorisiert, um kritische Fälle schnell identifizieren und Entscheidungen zum Einleiten bestimmter Maßnahmen datenbasiert unterstützen zu können.

How we built it
Wir haben nach einem ersten gemeinsamen Ideation Workshop ein fachliches Konzept in Form eines Flow Charts angefertigt. Dieses Flow Chart zeigt den logischen Ablauf bei der Interaktion zwischen Nutzer und virtuellem Assistenten. Gleichzeitig haben wir nach aktuellen gesicherten Informationen zu Symptomen und Interaktionen bspw. zum Alter und zu Vorerkrankungen recherchiert. Diese Daten stammen von der WHO und dem RKI. Auf Basis dieser Informationen haben wir eine mathematische Formel zur Berechnung eines Wertes erstellt, der die Dringlichkeit eines Arztbesuches wiederspiegeln soll.

Zeitgleich dazu haben wir eine erste Dialogstruktur mit einer Sprachengine aufgesetzt, die den logischen Prozess im Flowchart in Interaktion mit dem Nutzer durchführen kann. Einen ersten Prototypen haben wir Freitag Nacht getestet. Auf Basis des ersten Tests, wurde und wird der Prototyp aktuell weiterentwickelt. Zur Zeit arbeiten wir noch an der Visualisierung der erhobenen Daten und der entsprechenden Datenbankanbindung die u.a. dafür notwendig ist

Challenges we ran into
Die größte Herausforderung bestand darin, gesundheitsrelevante Kennzahlen und Interaktionen richtig einzuschätzen und zu gewichten. Da uns dazu die nötige Expertise fehlt und wir bisher keinen Experten für unser Team gewinnen konnten, mussten wir uns auf die Datenlage der WHO und des RKI berufen und aufbauend darauf eigene Gewichtungen herleiten.

Außerdem fehlte uns im Team mindestens ein Nutzer der älteren Generation (50+), um die Dialoge in unserem Prototyp auf Verständlichkeit und Angemessenheit zu überprüfen.

Accomplishments that we're proud of
Stolz sind wir auf die durchaus komplexe Dialogstruktur, die den Nutzer gezielt nach Symptomen und weiteren relevanten Faktoren befragt und daraus anschließend einen Orientierungswert ermittelt. Sobald die Visualisierung der Daten fertiggestellt ist, können Ärzte die gesammelten Daten des virtuellen Assistenten im Alltag nutzen und damit eine Erleichterung für sich und die Mitarbeiter schaffen.

What we learned
48 Stunden sind schon sehr knapp :-). Angesichts der aktuellen Situation ist das Zeitfenster aber absolut nachvollziehbar. Aber wir haben im Team denke ich alle gelernt wie produktiv wir in einer solchen Stresssituation zusammenarbeiten und gute Ergebnisse generieren können. Das macht uns stolz. Außerdem fanden wir den Einsatz der Slack Plattform sehr positiv, da sich hier schnell Kontakte aufgetan haben und man bestimmte Themen diskutieren konnte

What's next for 137_Corona-Testprozesse_ Assistent für fernmündl. Diagnose
Die nächsten Schritte werden sich vor allem weiter mit der technischen Umsetzung befassen. Damit der virtuelle Assistent in der Realwelt über die verschiedenen Kommunikationsmedien einsatzfähig wird, bedarf es unterschiedlicher Lizenzen, Berechtigungen und Schnittstellen an die entsprechenden Systeme. Außerdem muss unsere Berechnung des Corona Orientierungswertes von Experten überprüft und ggfs. angepasst werden, damit die Aussagen verlässlicher werden. Zusammengefasst: Unser Prototyp ist lauffähig, jetzt geht es um das Finetuning und eine möglichst breite Umsetzung im Feld.
