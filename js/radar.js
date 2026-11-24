const radarClubes = {
    america: {
        nombre: "Club América",
        apodo: "Las Águilas",
        fundacion: "Fundado en 1916 • Estadio Azteca",
        escudo: "img/america.jpg",
        color: "#002855",
        goleadores: [
            { jugador: "Luis Roberto Alves 'Zague'", etapa: "1985–1996, 1997–1998", valor: "192 goles" },
            { jugador: "Cuauhtémoc Blanco", etapa: "1992–2007 (3 etapas)", valor: "153 goles" },
            { jugador: "Octavio Vial", etapa: "1937–1949", valor: "152 goles" },
            { jugador: "Henry Martín", etapa: "2018–Presente", valor: "116 goles" },
            { jugador: "José Alves 'Zague'", etapa: "1961–1969", valor: "109 goles" }
        ],
        partidos: [
            { jugador: "Cristóbal Ortega", etapa: "1974–1992", valor: "711 PJ" },
            { jugador: "Alfredo Tena", etapa: "1973–1992", valor: "594 PJ" },
            { jugador: "Germán Villa", etapa: "1991–2008", valor: "527 PJ" },
            { jugador: "Luis Roberto Alves 'Zague'", etapa: "1985–1998", valor: "520 PJ" },
            { jugador: "Guillermo Ochoa", etapa: "2004–2011, 2019–2022", valor: "424 PJ" }
        ],
        asistencias: [
            { jugador: "Cuauhtémoc Blanco", etapa: "1992–2007", valor: "104 asist." },
            { jugador: "Rubens Sambueza", etapa: "2012–2016", valor: "72 asist." },
            { jugador: "Luis Roberto Alves 'Zague'", etapa: "1985–1998", valor: "66 asist." },
            { jugador: "Daniel Brailovsky", etapa: "1982–1985", valor: "58 asist." },
            { jugador: "Paul Aguilar", etapa: "2011–2020", valor: "52 asist." }
        ],
        porterias: [
            { jugador: "Guillermo Ochoa", etapa: "2004–2011, 2019–2022", valor: "121 vallas inv." },
            { jugador: "Adrián Chávez", etapa: "1986–1996", valor: "115 vallas inv." },
            { jugador: "Héctor Miguel Zelada", etapa: "1979–1987", valor: "98 vallas inv." },
            { jugador: "Moisés Muñoz", etapa: "2012–2016", valor: "68 vallas inv." },
            { jugador: "Adolfo Ríos", etapa: "1999–2004", valor: "62 vallas inv." }
        ]
    },
    chivas: {
        nombre: "CD Guadalajara",
        apodo: "Las Chivas Rayadas",
        fundacion: "Fundado en 1906 • Estadio Akron",
        escudo: "img/chivas.jpg",
        color: "#c8102e",
        goleadores: [
            { jugador: "Omar Bravo", etapa: "2001–2016 (3 etapas)", valor: "160 goles" },
            { jugador: "Salvador 'Chava' Reyes", etapa: "1953–1967", valor: "154 goles" },
            { jugador: "Javier Valdivia", etapa: "1960–1971", valor: "98 goles" },
            { jugador: "Crescencio Gutiérrez", etapa: "1952–1962", valor: "91 goles" },
            { jugador: "Eduardo 'Yayo' de la Torre", etapa: "1982–1992", valor: "89 goles" }
        ],
        partidos: [
            { jugador: "Juan 'Bigotón' Jasso", etapa: "1946–1966", valor: "545 PJ" },
            { jugador: "José 'Jamaicón' Villegas", etapa: "1952–1972", valor: "495 PJ" },
            { jugador: "Omar Bravo", etapa: "2001–2016", valor: "448 PJ" },
            { jugador: "Héctor Reynoso", etapa: "2001–2013", valor: "435 PJ" },
            { jugador: "Ramón Morales", etapa: "1999–2009", valor: "404 PJ" }
        ],
        asistencias: [
            { jugador: "Ramón Morales", etapa: "1999–2009", valor: "85 asist." },
            { jugador: "Benjamín Galindo", etapa: "1986–1994, 1999–2000", valor: "74 asist." },
            { jugador: "Alberto 'Venado' Medina", etapa: "2000–2012", valor: "68 asist." },
            { jugador: "Isaac Brizuela", etapa: "2015–Presente", valor: "48 asist." },
            { jugador: "Alexis Vega", etapa: "2019–2023", valor: "42 asist." }
        ],
        porterias: [
            { jugador: "Oswaldo Sánchez", etapa: "1999–2006", valor: "118 vallas inv." },
            { jugador: "Jaime 'Tubo' Gómez", etapa: "1949–1964", valor: "112 vallas inv." },
            { jugador: "Javier 'Zully' Ledesma", etapa: "1979–1993", valor: "96 vallas inv." },
            { jugador: "Ignacio Calderón", etapa: "1962–1974", valor: "88 vallas inv." },
            { jugador: "Rodolfo Cota", etapa: "2015–2018", valor: "46 vallas inv." }
        ]
    },
    cruzazul: {
        nombre: "Cruz Azul",
        apodo: "La Máquina Celeste",
        fundacion: "Fundado en 1927 • Estadio Ciudad de los Deportes",
        escudo: "img/cruzazul.jpg",
        color: "#00529b",
        goleadores: [
            { jugador: "Carlos Hermosillo", etapa: "1991–1998", valor: "198 goles" },
            { jugador: "Horacio López Salgado", etapa: "1971–1982", valor: "133 goles" },
            { jugador: "Francisco Palencia", etapa: "1994–2003", valor: "110 goles" },
            { jugador: "Fernando Bustos", etapa: "1963–1979", valor: "95 goles" },
            { jugador: "Eladio Vera", etapa: "1971–1977", valor: "86 goles" }
        ],
        partidos: [
            { jugador: "Julio César Domínguez", etapa: "2006–2023", valor: "655 PJ" },
            { jugador: "Ignacio Flores", etapa: "1972–1990", valor: "551 PJ" },
            { jugador: "José de Jesús Corona", etapa: "2009–2023", valor: "504 PJ" },
            { jugador: "Óscar 'Conejo' Pérez", etapa: "1993–2008", valor: "470 PJ" },
            { jugador: "Gerardo Torrado", etapa: "2005–2016", valor: "465 PJ" }
        ],
        asistencias: [
            { jugador: "Christian 'Chaco' Giménez", etapa: "2010–2017", valor: "76 asist." },
            { jugador: "César 'Chelito' Delgado", etapa: "2003–2007", valor: "64 asist." },
            { jugador: "Fernando Bustos", etapa: "1963–1979", valor: "62 asist." },
            { jugador: "Julio Zamora", etapa: "1993–1996", valor: "55 asist." },
            { jugador: "Ignacio Rivero", etapa: "2020–Presente", valor: "44 asist." }
        ],
        porterias: [
            { jugador: "José de Jesús Corona", etapa: "2009–2023", valor: "168 vallas inv." },
            { jugador: "Óscar 'Conejo' Pérez", etapa: "1993–2008", valor: "138 vallas inv." },
            { jugador: "Miguel 'Gato' Marín", etapa: "1971–1981", valor: "118 vallas inv." },
            { jugador: "Pablo Larios", etapa: "1984–1989", valor: "58 vallas inv." },
            { jugador: "Kevin Mier", etapa: "2024–Presente", valor: "34 vallas inv." }
        ]
    },
    pumas: {
        nombre: "Pumas UNAM",
        apodo: "Los Auriazules",
        fundacion: "Fundado en 1954 • Estadio Olímpico Universitario",
        escudo: "img/pumas.jpg",
        color: "#002b5c",
        goleadores: [
            { jugador: "Evanivaldo Castro 'Cabinho'", etapa: "1974–1979", valor: "166 goles" },
            { jugador: "Ricardo 'Tuca' Ferretti", etapa: "1978–1991", valor: "128 goles" },
            { jugador: "Manuel Negrete", etapa: "1979–1992", valor: "112 goles" },
            { jugador: "Luis Flores", etapa: "1979–1988", valor: "101 goles" },
            { jugador: "Juan Ignacio Dinenno", etapa: "2020–2023", valor: "60 goles" }
        ],
        partidos: [
            { jugador: "Darío Verón", etapa: "2003–2017", valor: "534 PJ" },
            { jugador: "Sergio Bernal", etapa: "1989–2010", valor: "519 PJ" },
            { jugador: "Miguel España", etapa: "1983–1994, 2001–2003", valor: "411 PJ" },
            { jugador: "Leandro Augusto", etapa: "2001–2011, 2014", valor: "366 PJ" },
            { jugador: "Israel Castro", etapa: "2002–2011", valor: "345 PJ" }
        ],
        asistencias: [
            { jugador: "Leandro Augusto", etapa: "2001–2014", valor: "68 asist." },
            { jugador: "Manuel Negrete", etapa: "1979–1992", valor: "64 asist." },
            { jugador: "Ricardo 'Tuca' Ferretti", etapa: "1978–1991", valor: "59 asist." },
            { jugador: "Martín Bravo", etapa: "2008–2014", valor: "45 asist." },
            { jugador: "Pablo Barrera", etapa: "2005–2010, 2016–2020", valor: "43 asist." }
        ],
        porterias: [
            { jugador: "Sergio Bernal", etapa: "1989–2010", valor: "142 vallas inv." },
            { jugador: "Jorge Campos", etapa: "1988–1995, 1998–2002", valor: "84 vallas inv." },
            { jugador: "Alfredo Talavera", etapa: "2020–2022", valor: "42 vallas inv." },
            { jugador: "Adolfo Ríos", etapa: "1985–1990", valor: "39 vallas inv." },
            { jugador: "Julio González", etapa: "2020–2024", valor: "34 vallas inv." }
        ]
    },
    toluca: {
        nombre: "Deportivo Toluca",
        apodo: "Los Diablos Rojos",
        fundacion: "Fundado en 1917 • Estadio Nemesio Diez",
        escudo: "img/toluca.jpg",
        color: "#c8102e",
        goleadores: [
            { jugador: "José Saturnino Cardozo", etapa: "1995–2005", valor: "257 goles" },
            { jugador: "Vicente Pereda", etapa: "1960–1976", valor: "129 goles" },
            { jugador: "Antonio Naelson 'Sinha'", etapa: "1999–2017", valor: "80 goles" },
            { jugador: "Carlos María Morales", etapa: "1995–2002", valor: "68 goles" },
            { jugador: "Amaury Epaminondas", etapa: "1966–1969", valor: "64 goles" }
        ],
        partidos: [
            { jugador: "Antonio Naelson 'Sinha'", etapa: "1999–2017", valor: "609 PJ" },
            { jugador: "Hernán Cristante", etapa: "1993–2010", valor: "419 PJ" },
            { jugador: "Paulo da Silva", etapa: "2003–2009, 2013–2017", valor: "361 PJ" },
            { jugador: "José Manuel Cruzalta", etapa: "2000–2012", valor: "345 PJ" },
            { jugador: "Alfredo Talavera", etapa: "2009–2020", valor: "336 PJ" }
        ],
        asistencias: [
            { jugador: "Antonio Naelson 'Sinha'", etapa: "1999–2017", valor: "118 asist." },
            { jugador: "Rubens Sambueza", etapa: "2017–2018, 2020–2021", valor: "54 asist." },
            { jugador: "Carlos Esquivel", etapa: "2005–2017, 2019", valor: "52 asist." },
            { jugador: "Vicente Sánchez", etapa: "2001–2007", valor: "48 asist." },
            { jugador: "Alexis Vega", etapa: "2016–2018, 2024–Presente", valor: "45 asist." }
        ],
        porterias: [
            { jugador: "Hernán Cristante", etapa: "1993–2010", valor: "148 vallas inv." },
            { jugador: "Alfredo Talavera", etapa: "2009–2020", valor: "106 vallas inv." },
            { jugador: "Walter Gassire", etapa: "1974–1980", valor: "82 vallas inv." },
            { jugador: "Tiago Volpi", etapa: "2022–2025", valor: "36 vallas inv." },
            { jugador: "Florentino López", etapa: "1960–1971", valor: "34 vallas inv." }
        ]
    },
    tigres: {
        nombre: "Tigres UANL",
        apodo: "Los Felinos",
        fundacion: "Fundado en 1960 • Estadio Universitario",
        escudo: "img/tigres.jpg",
        color: "#0033a0",
        goleadores: [
            { jugador: "André-Pierre Gignac", etapa: "2015–Presente", valor: "218 goles" },
            { jugador: "Tomás Boy", etapa: "1975–1988", valor: "104 goles" },
            { jugador: "Walter Gaitán", etapa: "2002–2007", valor: "80 goles" },
            { jugador: "Lucas Lobos", etapa: "2008–2014", valor: "68 goles" },
            { jugador: "Gerónimo Barbadillo", etapa: "1975–1982", valor: "61 goles" }
        ],
        partidos: [
            { jugador: "Nahuel Guzmán", etapa: "2014–Presente", valor: "485 PJ" },
            { jugador: "Guido Pizarro", etapa: "2013–2017, 2018–2025", valor: "476 PJ" },
            { jugador: "Hugo Ayala", etapa: "2010–2022", valor: "462 PJ" },
            { jugador: "Jesús Dueñas", etapa: "2011–2022", valor: "450 PJ" },
            { jugador: "André-Pierre Gignac", etapa: "2015–Presente", valor: "402 PJ" }
        ],
        asistencias: [
            { jugador: "Lucas Lobos", etapa: "2008–2014", valor: "64 asist." },
            { jugador: "Damián Álvarez", etapa: "2010–2017", valor: "58 asist." },
            { jugador: "André-Pierre Gignac", etapa: "2015–Presente", valor: "55 asist." },
            { jugador: "Luis Quiñones", etapa: "2016–2024", valor: "52 asist." },
            { jugador: "Javier Aquino", etapa: "2015–Presente", valor: "51 asist." }
        ],
        porterias: [
            { jugador: "Nahuel Guzmán", etapa: "2014–Presente", valor: "188 vallas inv." },
            { jugador: "Mateo Bravo", etapa: "1974–1985", valor: "78 vallas inv." },
            { jugador: "Enrique Palos", etapa: "2006–2017", valor: "62 vallas inv." },
            { jugador: "Cirilo Saucedo", etapa: "2006–2011", valor: "44 vallas inv." },
            { jugador: "Robert Dante Siboldi", etapa: "1995–1999", valor: "41 vallas inv." }
        ]
    },
    monterrey: {
        nombre: "CF Monterrey",
        apodo: "Los Rayados",
        fundacion: "Fundado en 1945 • Estadio BBVA",
        escudo: "img/monterrey.jpg",
        color: "#0a2240",
        goleadores: [
            { jugador: "Rogelio Funes Mori", etapa: "2015–2023", valor: "160 goles" },
            { jugador: "Humberto 'Chupete' Suazo", etapa: "2007–2014", valor: "121 goles" },
            { jugador: "Mario de Souza Mota 'Bahía'", etapa: "1984–1992", valor: "96 goles" },
            { jugador: "Dorlan Pabón", etapa: "2013, 2014–2021", valor: "88 goles" },
            { jugador: "Aldo de Nigris", etapa: "2009–2013, 2015–2017", valor: "83 goles" }
        ],
        partidos: [
            { jugador: "Magdaleno Cano", etapa: "1968–1982", valor: "437 PJ" },
            { jugador: "Jesús Arellano", etapa: "1992–1997, 2000–2011", valor: "407 PJ" },
            { jugador: "Luis Ernesto Pérez", etapa: "2003–2012, 2015–2016", valor: "388 PJ" },
            { jugador: "José María Basanta", etapa: "2008–2014, 2015–2020", valor: "385 PJ" },
            { jugador: "Jonathan Orozco", etapa: "2005–2016", valor: "372 PJ" }
        ],
        asistencias: [
            { jugador: "Humberto 'Chupete' Suazo", etapa: "2007–2014", valor: "78 asist." },
            { jugador: "Dorlan Pabón", etapa: "2013–2021", valor: "69 asist." },
            { jugador: "Jesús Arellano", etapa: "1992–2011", valor: "65 asist." },
            { jugador: "Walter Erviti", etapa: "2002–2008", valor: "54 asist." },
            { jugador: "Maximiliano Meza", etapa: "2019–2024", valor: "44 asist." }
        ],
        porterias: [
            { jugador: "Jonathan Orozco", etapa: "2005–2016", valor: "118 vallas inv." },
            { jugador: "Esteban Andrada", etapa: "2021–Presente", valor: "60 vallas inv." },
            { jugador: "Rubén Ruiz Díaz", etapa: "1992–1998", valor: "56 vallas inv." },
            { jugador: "Marcelo Barovero", etapa: "2018–2020", valor: "34 vallas inv." },
            { jugador: "Ricardo Martínez", etapa: "2000–2004", valor: "32 vallas inv." }
        ]
    },
    pachuca: {
        nombre: "CF Pachuca",
        apodo: "Los Tuzos",
        fundacion: "Fundado en 1892 • Estadio Hidalgo",
        escudo: "img/pachuca.jpg",
        color: "#00338d",
        goleadores: [
            { jugador: "Franco Jara", etapa: "2015–2020", valor: "83 goles" },
            { jugador: "Gabriel Caballero", etapa: "1998–2009", valor: "69 goles" },
            { jugador: "Christian 'Chaco' Giménez", etapa: "2006–2009", valor: "64 goles" },
            { jugador: "Juan Carlos Cacho", etapa: "2004–2008, 2009–2010", valor: "63 goles" },
            { jugador: "Lorenzo Sáez", etapa: "1995–1997", valor: "55 goles" }
        ],
        partidos: [
            { jugador: "Miguel Calero", etapa: "2000–2011", valor: "495 PJ" },
            { jugador: "Gabriel Caballero", etapa: "1998–2009", valor: "384 PJ" },
            { jugador: "Leobardo López", etapa: "2006–2012", valor: "341 PJ" },
            { jugador: "Jaime Correa", etapa: "2001–2010", valor: "336 PJ" },
            { jugador: "Érick Gutiérrez", etapa: "2013–2018", valor: "242 PJ" }
        ],
        asistencias: [
            { jugador: "Damián Álvarez", etapa: "2006–2010", valor: "62 asist." },
            { jugador: "Christian 'Chaco' Giménez", etapa: "2006–2009", valor: "55 asist." },
            { jugador: "Víctor Guzmán", etapa: "2016–2022", valor: "44 asist." },
            { jugador: "Hirving 'Chucky' Lozano", etapa: "2014–2017", valor: "31 asist." },
            { jugador: "Érick Sánchez", etapa: "2016–2024", valor: "30 asist." }
        ],
        porterias: [
            { jugador: "Miguel Calero", etapa: "2000–2011", valor: "145 vallas inv." },
            { jugador: "Óscar 'Conejo' Pérez", etapa: "2013–2019", valor: "68 vallas inv." },
            { jugador: "Alfonso Blanco", etapa: "2008–2020", valor: "42 vallas inv." },
            { jugador: "Carlos Moreno", etapa: "2021–Presente", valor: "38 vallas inv." },
            { jugador: "Rodolfo Cota", etapa: "2007–2014", valor: "28 vallas inv." }
        ]
    },
    santos: {
        nombre: "Santos Laguna",
        apodo: "Los Guerreros",
        fundacion: "Fundado en 1983 • Estadio Corona (TSM)",
        escudo: "img/santos.jpg",
        color: "#007a33",
        goleadores: [
            { jugador: "Jared Borgetti", etapa: "1996–2004", valor: "205 goles" },
            { jugador: "Matías Vuoso", etapa: "2003–2006, 2007–2010", valor: "107 goles" },
            { jugador: "Oribe Peralta", etapa: "2006–2008, 2010–2014", valor: "97 goles" },
            { jugador: "Carlos Darwin Quintero", etapa: "2009–2014", valor: "92 goles" },
            { jugador: "Rodrigo 'Pony' Ruiz", etapa: "2000–2006, 2010–2011", valor: "65 goles" }
        ],
        partidos: [
            { jugador: "Juan Pablo Rodríguez", etapa: "2007–2014", valor: "344 PJ" },
            { jugador: "Oswaldo Sánchez", etapa: "2007–2014", valor: "340 PJ" },
            { jugador: "Rodrigo 'Pony' Ruiz", etapa: "2000–2011", valor: "328 PJ" },
            { jugador: "Rafael Figueroa", etapa: "2005–2015", valor: "298 PJ" },
            { jugador: "Carlos Acevedo", etapa: "2016–Presente", valor: "220 PJ" }
        ],
        asistencias: [
            { jugador: "Rodrigo 'Pony' Ruiz", etapa: "2000–2011", valor: "114 asist." },
            { jugador: "Carlos Darwin Quintero", etapa: "2009–2014", valor: "68 asist." },
            { jugador: "Daniel 'Hachita' Ludueña", etapa: "2007–2012", valor: "54 asist." },
            { jugador: "Brian Lozano", etapa: "2017–2022", valor: "38 asist." },
            { jugador: "Diego Valdés", etapa: "2019–2021", valor: "34 asist." }
        ],
        porterias: [
            { jugador: "Oswaldo Sánchez", etapa: "2007–2014", valor: "98 vallas inv." },
            { jugador: "Carlos Acevedo", etapa: "2016–Presente", valor: "55 vallas inv." },
            { jugador: "Agustín Marchesín", etapa: "2015–2016", valor: "34 vallas inv." },
            { jugador: "Adrián Martínez", etapa: "1998–2003", valor: "32 vallas inv." },
            { jugador: "Cristian Lucchetti", etapa: "2003–2004", valor: "26 vallas inv." }
        ]
    },
    leon: {
        nombre: "Club León",
        apodo: "La Fiera",
        fundacion: "Fundado en 1944 • Estadio Nou Camp",
        escudo: "img/leon.jpg",
        color: "#006633",
        goleadores: [
            { jugador: "Adalberto 'Dumbo' López", etapa: "1946–1950", valor: "136 goles" },
            { jugador: "Mauro Boselli", etapa: "2013–2018", valor: "130 goles" },
            { jugador: "Milton Queiroz 'Tita'", etapa: "1990–1994, 1995–1996", valor: "97 goles" },
            { jugador: "Ángel Mena", etapa: "2019–2024", valor: "80 goles" },
            { jugador: "Luis 'Chapo' Montes", etapa: "2011–2022", valor: "56 goles" }
        ],
        partidos: [
            { jugador: "Luis 'Chapo' Montes", etapa: "2011–2022", valor: "409 PJ" },
            { jugador: "Antonio 'Tota' Carbajal", etapa: "1950–1966", valor: "364 PJ" },
            { jugador: "Ignacio González", etapa: "2010–2020", valor: "314 PJ" },
            { jugador: "Rodolfo Cota", etapa: "2018–2024", valor: "229 PJ" },
            { jugador: "William Yarbrough", etapa: "2012–2019", valor: "203 PJ" }
        ],
        asistencias: [
            { jugador: "Luis 'Chapo' Montes", etapa: "2011–2022", valor: "74 asist." },
            { jugador: "Elías Hernández", etapa: "2013–2018, 2021–2024", valor: "56 asist." },
            { jugador: "Ángel Mena", etapa: "2019–2024", valor: "48 asist." },
            { jugador: "Carlos 'Gullit' Peña", etapa: "2011–2015, 2017", valor: "38 asist." },
            { jugador: "Jean Meneses", etapa: "2018–2022", valor: "35 asist." }
        ],
        porterias: [
            { jugador: "Antonio 'Tota' Carbajal", etapa: "1950–1966", valor: "92 vallas inv." },
            { jugador: "Rodolfo Cota", etapa: "2018–2024", valor: "68 vallas inv." },
            { jugador: "William Yarbrough", etapa: "2012–2019", valor: "54 vallas inv." },
            { jugador: "Alfonso Blanco", etapa: "2020–Presente", valor: "28 vallas inv." },
            { jugador: "Marco Antonio Ferreira", etapa: "1991–1997", valor: "24 vallas inv." }
        ]
    },
    atlas: {
        nombre: "Atlas FC",
        apodo: "Los Rojinegros",
        fundacion: "Fundado en 1916 • Estadio Jalisco",
        escudo: "img/atlas.jpg",
        color: "#b71c1c",
        goleadores: [
            { jugador: "Edwin Cubero", etapa: "1945–1954", valor: "88 goles" },
            { jugador: "José de Jesús Aceves", etapa: "1972–1986", valor: "82 goles" },
            { jugador: "Alfredo 'Pistache' Torres", etapa: "1952–1970", valor: "78 goles" },
            { jugador: "Daniel Osorno", etapa: "1997–2011 (3 etapas)", valor: "75 goles" },
            { jugador: "Julián Quiñones", etapa: "2021–2023", valor: "36 goles" }
        ],
        partidos: [
            { jugador: "Alfredo 'Pistache' Torres", etapa: "1952–1970", valor: "395 PJ" },
            { jugador: "Juan Pablo Rodríguez", etapa: "1997–2003, 2015", valor: "276 PJ" },
            { jugador: "Daniel Osorno", etapa: "1997–2011", valor: "264 PJ" },
            { jugador: "Camilo Vargas", etapa: "2019–Presente", valor: "225 PJ" },
            { jugador: "Aldo Rocha", etapa: "2021–Presente", valor: "172 PJ" }
        ],
        asistencias: [
            { jugador: "Juan Pablo Rodríguez", etapa: "1997–2003, 2015", valor: "52 asist." },
            { jugador: "Daniel Osorno", etapa: "1997–2011", valor: "46 asist." },
            { jugador: "Brayan Garnica", etapa: "2015–2018, 2021–2022", valor: "26 asist." },
            { jugador: "Alfonso 'Ponchito' González", etapa: "2012–2016", valor: "22 asist." },
            { jugador: "Julián Quiñones", etapa: "2021–2023", valor: "20 asist." }
        ],
        porterias: [
            { jugador: "Camilo Vargas", etapa: "2019–Presente", valor: "74 vallas inv." },
            { jugador: "Erubey Cabuto", etapa: "1995–2002", valor: "52 vallas inv." },
            { jugador: "Miguel Ángel Fraga", etapa: "2014–2018", valor: "24 vallas inv." },
            { jugador: "Federico Vilar", etapa: "2014–2015", valor: "22 vallas inv." },
            { jugador: "José Hernández", etapa: "2018–Presente", valor: "21 vallas inv." }
        ]
    },
    necaxa: {
        nombre: "Club Necaxa",
        apodo: "Los Rayos",
        fundacion: "Fundado en 1923 • Estadio Victoria",
        escudo: "img/necaxa.jpg",
        color: "#d32f2f",
        goleadores: [
            { jugador: "Ricardo Peláez", etapa: "1985–1987, 1988–1997", valor: "158 goles" },
            { jugador: "Ivo Basay", etapa: "1990–1995", valor: "108 goles" },
            { jugador: "Álex Aguinaga", etapa: "1989–2003", valor: "93 goles" },
            { jugador: "Sergio Zárate", etapa: "1994–1997, 1998–1999", valor: "72 goles" },
            { jugador: "Horacio Casarín", etapa: "1936–1942, 1953–1955", valor: "68 goles" }
        ],
        partidos: [
            { jugador: "Nicolás Navarro", etapa: "1983–1997, 2001–2003", valor: "489 PJ" },
            { jugador: "Álex Aguinaga", etapa: "1989–2003", valor: "476 PJ" },
            { jugador: "Octavio Becerril", etapa: "1992–2000", valor: "292 PJ" },
            { jugador: "Gerardo Esquivel", etapa: "1986–1999", valor: "274 PJ" },
            { jugador: "Alberto García Aspe", etapa: "1991–1997", valor: "235 PJ" }
        ],
        asistencias: [
            { jugador: "Álex Aguinaga", etapa: "1989–2003", valor: "112 asist." },
            { jugador: "Sergio Zárate", etapa: "1994–1999", valor: "58 asist." },
            { jugador: "Luis Roberto Alves 'Zague'", etapa: "1998–1999", valor: "36 asist." },
            { jugador: "Edson Puch", etapa: "2016–2017", valor: "24 asist." },
            { jugador: "Jesús 'Canelo' Angulo", etapa: "2019", valor: "22 asist." }
        ],
        porterias: [
            { jugador: "Nicolás Navarro", etapa: "1983–2003", valor: "128 vallas inv." },
            { jugador: "Marcelo Barovero", etapa: "2016–2018", valor: "36 vallas inv." },
            { jugador: "Hugo González", etapa: "2018–2020, 2022–2023", valor: "28 vallas inv." },
            { jugador: "Adolfo Ríos", etapa: "1997–1999", valor: "26 vallas inv." },
            { jugador: "Ezequiel Unsain", etapa: "2023–Presente", valor: "23 vallas inv." }
        ]
    },
    puebla: {
        nombre: "Club Puebla",
        apodo: "La Franja",
        fundacion: "Fundado en 1944 • Estadio Cuauhtémoc",
        escudo: "img/puebla.jpg",
        color: "#003366",
        goleadores: [
            { jugador: "Ricardo Álvarez", etapa: "1945–1950", valor: "87 goles" },
            { jugador: "Silvio Fogel", etapa: "1975–1980, 1982–1983", valor: "84 goles" },
            { jugador: "Carlos Poblete", etapa: "1986–1992, 1995–1996", valor: "83 goles" },
            { jugador: "Jorge Aravena", etapa: "1988–1991", valor: "66 goles" },
            { jugador: "Matías Alustiza", etapa: "2012–2016, 2019", valor: "56 goles" }
        ],
        partidos: [
            { jugador: "Arturo Álvarez", etapa: "1976–1989", valor: "352 PJ" },
            { jugador: "Roberto Ruiz Esparza", etapa: "1983–1992, 1995–2001", valor: "348 PJ" },
            { jugador: "Pablo Larios", etapa: "1989–1994", valor: "245 PJ" },
            { jugador: "Brayan Angulo", etapa: "2017–2020, 2023–2025", valor: "184 PJ" },
            { jugador: "Nicolás Vikonis", etapa: "2018–2020", valor: "168 PJ" }
        ],
        asistencias: [
            { jugador: "Jorge Aravena", etapa: "1988–1991", valor: "48 asist." },
            { jugador: "Carlos Poblete", etapa: "1986–1996", valor: "42 asist." },
            { jugador: "Christian 'Hobbit' Bermúdez", etapa: "2015–2017", valor: "28 asist." },
            { jugador: "Omar Fernández", etapa: "2018–2021, 2022–2023", valor: "26 asist." },
            { jugador: "Maximiliano Araújo", etapa: "2020–2022", valor: "18 asist." }
        ],
        porterias: [
            { jugador: "Pablo Larios", etapa: "1989–1994", valor: "74 vallas inv." },
            { jugador: "Nicolás Vikonis", etapa: "2018–2020", valor: "44 vallas inv." },
            { jugador: "Jorge Villalpando", etapa: "2001–2010, 2013–2014", valor: "36 vallas inv." },
            { jugador: "Antony Silva", etapa: "2021–2023", valor: "26 vallas inv." },
            { jugador: "Cristian Campestrini", etapa: "2015–2017", valor: "22 vallas inv." }
        ]
    },
    queretaro: {
        nombre: "Querétaro FC",
        apodo: "Los Gallos Blancos",
        fundacion: "Fundado en 1950 • Estadio Corregidora",
        escudo: "img/queretaro.jpg",
        color: "#002244",
        goleadores: [
            { jugador: "Camilo Sanvezzo", etapa: "2014–2019, 2023", valor: "67 goles" },
            { jugador: "Mauro Gerk", etapa: "2005–2010", valor: "63 goles" },
            { jugador: "Ángel Sepúlveda", etapa: "2014–2023 (3 etapas)", valor: "41 goles" },
            { jugador: "Carlos Bueno", etapa: "2011–2012", valor: "26 goles" },
            { jugador: "Emanuel 'Tito' Villa", etapa: "2015–2017", valor: "26 goles" }
        ],
        partidos: [
            { jugador: "Marco Jiménez", etapa: "2008–2017", valor: "258 PJ" },
            { jugador: "George Corral", etapa: "2013–2020", valor: "214 PJ" },
            { jugador: "Tiago Volpi", etapa: "2015–2018", valor: "157 PJ" },
            { jugador: "Jaime Lozano", etapa: "2012–2013", valor: "142 PJ" },
            { jugador: "Gil Alcalá", etapa: "2017–2021, 2023", valor: "118 PJ" }
        ],
        asistencias: [
            { jugador: "Pablo Barrera", etapa: "2021–Presente", valor: "27 asist." },
            { jugador: "Édgar 'Pájaro' Benítez", etapa: "2015–2018", valor: "24 asist." },
            { jugador: "George Corral", etapa: "2013–2020", valor: "22 asist." },
            { jugador: "Camilo Sanvezzo", etapa: "2014–2023", valor: "19 asist." },
            { jugador: "Ronaldinho", etapa: "2014–2015", valor: "16 asist." }
        ],
        porterias: [
            { jugador: "Tiago Volpi", etapa: "2015–2018", valor: "48 vallas inv." },
            { jugador: "Gil Alcalá", etapa: "2017–2023", valor: "28 vallas inv." },
            { jugador: "Liborio Sánchez", etapa: "2011–2012", valor: "22 vallas inv." },
            { jugador: "Édgar Hernández", etapa: "2013–2017", valor: "19 vallas inv." },
            { jugador: "Guillermo Allison", etapa: "2023–Presente", valor: "17 vallas inv." }
        ]
    },
    tijuana: {
        nombre: "Xolos de Tijuana",
        apodo: "Los Fronterizos",
        fundacion: "Fundado en 2007 • Estadio Caliente",
        escudo: "img/tijuana.jpg",
        color: "#b71c1c",
        goleadores: [
            { jugador: "Raúl Enríquez", etapa: "2007–2013", valor: "81 goles" },
            { jugador: "Dayro Moreno", etapa: "2011, 2014–2016", valor: "50 goles" },
            { jugador: "Mauro Manotas", etapa: "2021–2022", valor: "23 goles" },
            { jugador: "Fidel Martínez", etapa: "2012–2014, 2021", valor: "22 goles" },
            { jugador: "Gustavo Bou", etapa: "2017–2018", valor: "21 goles" }
        ],
        partidos: [
            { jugador: "Juan Carlos Núñez", etapa: "2008–2018", valor: "248 PJ" },
            { jugador: "Joe Corona", etapa: "2010–2018, 2024–Presente", valor: "230 PJ" },
            { jugador: "Javier Gandolfi", etapa: "2010–2016", valor: "206 PJ" },
            { jugador: "Cirilo Saucedo", etapa: "2011–2015", valor: "158 PJ" },
            { jugador: "Gibrán Lajud", etapa: "2014–2020", valor: "135 PJ" }
        ],
        asistencias: [
            { jugador: "Fernando Arce", etapa: "2011–2014", valor: "32 asist." },
            { jugador: "Fidel Martínez", etapa: "2012–2021", valor: "24 asist." },
            { jugador: "Ignacio Malcorra", etapa: "2016–2018", valor: "22 asist." },
            { jugador: "Miller Bolaños", etapa: "2017–2020", valor: "20 asist." },
            { jugador: "Joe Corona", etapa: "2010–Presente", valor: "19 asist." }
        ],
        porterias: [
            { jugador: "Cirilo Saucedo", etapa: "2011–2015", valor: "48 vallas inv." },
            { jugador: "Gibrán Lajud", etapa: "2014–2020", valor: "36 vallas inv." },
            { jugador: "Jonathan Orozco", etapa: "2020–2022", valor: "24 vallas inv." },
            { jugador: "Antonio Rodríguez", etapa: "2023–Presente", valor: "19 vallas inv." },
            { jugador: "José de Jesús Corona", etapa: "2023–2025", valor: "14 vallas inv." }
        ]
    },
    sanluis: {
        nombre: "Atlético de San Luis",
        apodo: "Los Potosinos",
        fundacion: "Fundado en 2013 • Estadio Alfonso Lastras",
        escudo: "img/sanluis.jpg",
        color: "#c8102e",
        goleadores: [
            { jugador: "Nicolás Ibáñez", etapa: "2018–2021", valor: "55 goles" },
            { jugador: "Alfredo 'Chango' Moreno", etapa: "2007–2012", valor: "54 goles" },
            { jugador: "Germán Berterame", etapa: "2019–2022", valor: "31 goles" },
            { jugador: "Marcelo Guerrero", etapa: "2005–2008", valor: "28 goles" },
            { jugador: "Léo Bonatini", etapa: "2023–Presente", valor: "22 goles" }
        ],
        partidos: [
            { jugador: "Adrián García Arias", etapa: "2005–2010", valor: "198 PJ" },
            { jugador: "Unai Bilbao", etapa: "2018–2024", valor: "172 PJ" },
            { jugador: "Javier Güémez", etapa: "2021–2024", valor: "148 PJ" },
            { jugador: "Ricardo Chávez", etapa: "2021–2024", valor: "135 PJ" },
            { jugador: "Andrés Sánchez", etapa: "2021–Presente", valor: "122 PJ" }
        ],
        asistencias: [
            { jugador: "Braulio Luna", etapa: "2007–2010", valor: "28 asist." },
            { jugador: "Juan Manuel Sanabria", etapa: "2021–Presente", valor: "24 asist." },
            { jugador: "Jhon Murillo", etapa: "2022–2024", valor: "21 asist." },
            { jugador: "Ricardo Chávez", etapa: "2021–2024", valor: "18 asist." },
            { jugador: "Facundo Waller", etapa: "2021–2022", valor: "16 asist." }
        ],
        porterias: [
            { jugador: "Adrián Martínez", etapa: "2005–2010", valor: "46 vallas inv." },
            { jugador: "Andrés Sánchez", etapa: "2021–Presente", valor: "35 vallas inv." },
            { jugador: "Marcelo Barovero", etapa: "2021–2023", valor: "24 vallas inv." },
            { jugador: "Carlos Trejo", etapa: "2008–2012", valor: "18 vallas inv." },
            { jugador: "Carlos Felipe Rodríguez", etapa: "2018–2021", valor: "16 vallas inv." }
        ]
    },
    juarez: {
        nombre: "FC Juárez",
        apodo: "Los Bravos",
        fundacion: "Fundado en 2015 • Estadio Olímpico Benito Juárez",
        escudo: "img/juarez.jpg",
        color: "#009639",
        goleadores: [
            { jugador: "Leandro Carrijo", etapa: "2015–2020", valor: "74 goles" },
            { jugador: "Darío Lezcano", etapa: "2019–2023", valor: "33 goles" },
            { jugador: "Ángel Zaldívar", etapa: "2024–Presente", valor: "15 goles" },
            { jugador: "Avilés Hurtado", etapa: "2023–Presente", valor: "14 goles" },
            { jugador: "Gabriel 'Toro' Fernández", etapa: "2022–2023", valor: "12 goles" }
        ],
        partidos: [
            { jugador: "Elio Castro", etapa: "2016–2021", valor: "164 PJ" },
            { jugador: "Maximiliano Olivera", etapa: "2020–2023", valor: "118 PJ" },
            { jugador: "Alejandro Arribas", etapa: "2022–2024", valor: "96 PJ" },
            { jugador: "Alfredo Talavera", etapa: "2022–2024", valor: "68 PJ" },
            { jugador: "Sebastián Jurado", etapa: "2024–Presente", valor: "62 PJ" }
        ],
        asistencias: [
            { jugador: "Flavio Santos", etapa: "2019–2022", valor: "14 asist." },
            { jugador: "Mauro Lainez", etapa: "2022–2023", valor: "12 asist." },
            { jugador: "Jefferson Intriago", etapa: "2019–2021", valor: "10 asist." },
            { jugador: "Diego Rolán", etapa: "2019–2022", valor: "9 asist." },
            { jugador: "Denzell García", etapa: "2022–Presente", valor: "9 asist." }
        ],
        porterias: [
            { jugador: "Iván Vázquez Mellado", etapa: "2015–2021", valor: "38 vallas inv." },
            { jugador: "Enrique Palos", etapa: "2018–2021", valor: "22 vallas inv." },
            { jugador: "Alfredo Talavera", etapa: "2022–2024", valor: "16 vallas inv." },
            { jugador: "Sebastián Jurado", etapa: "2024–Presente", valor: "15 vallas inv." },
            { jugador: "Hugo González", etapa: "2021–2022", valor: "10 vallas inv." }
        ]
    },
    mazatlan: {
        nombre: "Mazatlán FC",
        apodo: "Los Cañoneros",
        fundacion: "Fundado en 2020 • Estadio El Encanto",
        escudo: "img/mazatlan.png",
        color: "#4a148c",
        goleadores: [
            { jugador: "Camilo Sanvezzo", etapa: "2020–2021", valor: "21 goles" },
            { jugador: "Nicolás Benedetti", etapa: "2022–Presente", valor: "15 goles" },
            { jugador: "Luis Amarilla", etapa: "2023–Presente", valor: "13 goles" },
            { jugador: "Brian Rubio", etapa: "2021–2024", valor: "11 goles" },
            { jugador: "Fernando Aristeguieta", etapa: "2020–2021", valor: "9 goles" }
        ],
        partidos: [
            { jugador: "Jefferson Intriago", etapa: "2021–Presente", valor: "140 PJ" },
            { jugador: "Roberto Meraz", etapa: "2020–Presente", valor: "120 PJ" },
            { jugador: "Bryan Colula", etapa: "2022–Presente", valor: "102 PJ" },
            { jugador: "Facundo Almada", etapa: "2023–Presente", valor: "90 PJ" },
            { jugador: "Nicolás Vikonis", etapa: "2021–2023", valor: "86 PJ" }
        ],
        asistencias: [
            { jugador: "Nicolás Benedetti", etapa: "2022–Presente", valor: "16 asist." },
            { jugador: "Édgar Yoel Bárcenas", etapa: "2022–Presente", valor: "15 asist." },
            { jugador: "Josué Colmán", etapa: "2022–Presente", valor: "14 asist." },
            { jugador: "Marco Fabián", etapa: "2022–2023", valor: "10 asist." },
            { jugador: "Andrés Montaño", etapa: "2022–2024", valor: "9 asist." }
        ],
        porterias: [
            { jugador: "Nicolás Vikonis", etapa: "2021–2023", valor: "20 vallas inv." },
            { jugador: "Hugo González", etapa: "2023–Presente", valor: "19 vallas inv." },
            { jugador: "Ricardo Gutiérrez", etapa: "2020–Presente", valor: "12 vallas inv." },
            { jugador: "Miguel Fraga", etapa: "2020", valor: "4 vallas inv." },
            { jugador: "Daniel Gutiérrez", etapa: "2021–Presente", valor: "3 vallas inv." }
        ]
    }
};

let clubSeleccionadoId = null;
let categoriaActual = "goleadores";

document.addEventListener("DOMContentLoaded", () => {
    renderizarClubes();
});

function renderizarClubes(filtro = "") {
    const grid = document.getElementById("grid-clubes");
    if (!grid) return;

    grid.innerHTML = "";
    const termino = filtro.toLowerCase().trim();

    Object.entries(radarClubes).forEach(([id, club]) => {
        if (
            club.nombre.toLowerCase().includes(termino) ||
            club.apodo.toLowerCase().includes(termino)
        ) {
            const card = document.createElement("div");
            card.className = "club-card";
            card.onclick = () => abrirModalRadar(id);

            card.innerHTML = `
                <img src="${club.escudo}" alt="${club.nombre}" onerror="this.src='https://via.placeholder.com/90/006847/FFFFFF?text=${encodeURIComponent(club.nombre.substring(0, 3).toUpperCase())}'">
                <h3>${club.nombre}</h3>
                <span>Ver Top 5 Histórico ➔</span>
            `;
            grid.appendChild(card);
        }
    });
}

function filtrarClubes() {
    const input = document.getElementById("buscador-club");
    renderizarClubes(input.value);
}

function abrirModalRadar(id) {
    const club = radarClubes[id];
    if (!club) return;

    clubSeleccionadoId = id;
    categoriaActual = "goleadores";

    document.getElementById("radar-nombre-club").innerText = club.nombre;
    document.getElementById("radar-apodo").innerText = club.apodo;
    document.getElementById("radar-fundacion").innerText = club.fundacion;

    const escudoImg = document.getElementById("radar-escudo");
    escudoImg.src = club.escudo;
    escudoImg.onerror = function () {
        this.src = `https://via.placeholder.com/90/006847/FFFFFF?text=${encodeURIComponent(club.nombre.substring(0, 3).toUpperCase())}`;
    };

    const headerBanner = document.getElementById("modal-header-banner");
    headerBanner.style.background = `linear-gradient(135deg, #0f172a, ${club.color})`;

    actualizarPestanasActivas("goleadores");
    renderizarTablaCategoria();

    document.getElementById("modal-radar").classList.add("activo");
}

function cambiarTabRadar(categoria) {
    categoriaActual = categoria;
    actualizarPestanasActivas(categoria);
    renderizarTablaCategoria();
}

function actualizarPestanasActivas(categoria) {
    const botones = document.querySelectorAll(".tab-btn");
    botones.forEach((btn) => {
        if (btn.dataset.tab === categoria) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
}

function renderizarTablaCategoria() {
    if (!clubSeleccionadoId) return;
    const club = radarClubes[clubSeleccionadoId];
    const lista = club[categoriaActual] || [];

    const titulosCategoria = {
        goleadores: { titulo: "Top 5 Máximos Goleadores Históricos", col: "Goles Oficiales" },
        partidos: { titulo: "Top 5 Jugadores con Más Partidos Disputados", col: "Encuentros" },
        asistencias: { titulo: "Top 5 Máximos Asistidores Históricos", col: "Asistencias" },
        porterias: { titulo: "Top 5 Guardametas con Más Porterías Imbatidas", col: "Arcos en Cero" }
    };

    const meta = titulosCategoria[categoriaActual];
    const contenedor = document.getElementById("radar-tabla-contenedor");

    let filasHTML = lista
        .map((item, idx) => {
            const pos = idx + 1;
            const clasePodio = pos <= 3 ? `pos-${pos}` : "";
            return `
                <tr>
                    <td><span class="pos-badge ${clasePodio}">${pos}</span></td>
                    <td>
                        <span class="jugador-nombre">${item.jugador}</span>
                        <span class="jugador-etapa">${item.etapa}</span>
                    </td>
                    <td class="col-cifra"><span class="cifra-destacada">${item.valor}</span></td>
                </tr>
            `;
        })
        .join("");

    contenedor.innerHTML = `
        <div class="ranking-titulo-cat">
            <strong>${meta.titulo}</strong>
            <span>Registros oficiales del club</span>
        </div>
        <table class="tabla-historica">
            <thead>
                <tr>
                    <th style="width: 55px;">#</th>
                    <th>Futbolista / Etapa</th>
                    <th class="col-cifra">${meta.col}</th>
                </tr>
            </thead>
            <tbody>
                ${filasHTML}
            </tbody>
        </table>
    `;
}

function cerrarModalRadar() {
    document.getElementById("modal-radar").classList.remove("activo");
}

window.addEventListener("click", (event) => {
    const modal = document.getElementById("modal-radar");
    if (event.target === modal) {
        cerrarModalRadar();
    }
});

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        cerrarModalRadar();
    }
});