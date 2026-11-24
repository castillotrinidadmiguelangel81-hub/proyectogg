const datosEquipos = {
    // ==========================================
    // SECCIÓN LIBERTADORES
    // ==========================================
    america_lib: {
        nombre: "Club América",
        imagen: "img/america.jpg",
        info: `
            <p><strong>Participaciones:</strong> 7 (1998, 2000, 2002, 2004, 2007, 2008, 2011)</p>
            <p><strong>Mejor resultado:</strong> Semifinales (2000, 2002, 2008)</p>
            <p><strong>Partidos jugados:</strong> 72</p>
            <p><strong>Dato destacado:</strong> Es el equipo mexicano con más victorias (37) en la historia de la competición sudamericana.</p>
        `
    },
    chivas_lib: {
        nombre: "Guadalajara",
        imagen: "img/chivas.jpg",
        info: `
            <p><strong>Participaciones:</strong> 7 (1998, 2005, 2006, 2008, 2009, 2010, 2012)</p>
            <p><strong>Mejor resultado:</strong> Subcampeón (2010)</p>
            <p><strong>Partidos jugados:</strong> 64</p>
            <p><strong>Dato destacado:</strong> Llegó a la final del 2010 jugando exclusivamente con futbolistas mexicanos, perdiendo ante el Inter de Porto Alegre.</p>
        `
    },
    cruzazul_lib: {
        nombre: "Cruz Azul",
        imagen: "img/cruzazul.jpg",
        info: `
            <p><strong>Participaciones:</strong> 3 (2001, 2003, 2012)</p>
            <p><strong>Mejor resultado:</strong> Subcampeón (2001)</p>
            <p><strong>Partidos jugados:</strong> 44</p>
            <p><strong>Dato destacado:</strong> Primer club mexicano en llegar a la final. Venció a Boca Juniors en La Bombonera y cayó finalmente en penales.</p>
        `
    },
    tigres_lib: {
        nombre: "Tigres UANL",
        imagen: "img/tigres.jpg",
        info: `
            <p><strong>Participaciones:</strong> 4 (2005, 2006, 2012, 2015)</p>
            <p><strong>Mejor resultado:</strong> Subcampeón (2015)</p>
            <p><strong>Partidos jugados:</strong> 34</p>
            <p><strong>Dato destacado:</strong> En 2015 invirtió fuertemente en su plantilla, dominando el certamen hasta llegar a la final contra River Plate.</p>
        `
    },
    pumas_lib: {
        nombre: "Pumas UNAM",
        imagen: "img/pumas.jpg",
        info: `
            <p><strong>Participaciones:</strong> 3 (2003, 2006, 2016)</p>
            <p><strong>Mejor resultado:</strong> Cuartos de final (2016)</p>
            <p><strong>Partidos jugados:</strong> 24</p>
            <p><strong>Dato destacado:</strong> Su mejor torneo fue en 2016, donde mostró gran nivel pero cayó agónicamente en penales frente a Independiente del Valle.</p>
        `
    },
    toluca_lib: {
        nombre: "Deportivo Toluca",
        imagen: "img/toluca.jpg",
        info: `
            <p><strong>Participaciones:</strong> 3 (2007, 2013, 2016)</p>
            <p><strong>Mejor resultado:</strong> Octavos de final (2007, 2016)</p>
            <p><strong>Partidos jugados:</strong> 22</p>
            <p><strong>Dato destacado:</strong> En 2016 logró terminar la fase de grupos invicto liderando cómodamente el llamado "Grupo de la Muerte".</p>
        `
    },
    monterrey_lib: {
        nombre: "Rayados de Monterrey",
        imagen: "img/monterrey.jpg",
        info: `
            <p><strong>Participaciones:</strong> 2 (1999, 2010)</p>
            <p><strong>Mejor resultado:</strong> Fase de grupos (1999, 2010)</p>
            <p><strong>Partidos jugados:</strong> 12</p>
            <p><strong>Dato destacado:</strong> Aunque dominó absolutamente la Concacaf, en Libertadores nunca logró superar la primera ronda en sus dos participaciones.</p>
        `
    },
    atlas_lib: {
        nombre: "Atlas",
        imagen: "img/atlas.jpg",
        info: `
            <p><strong>Participaciones:</strong> 3 (2000, 2008, 2015)</p>
            <p><strong>Mejor resultado:</strong> Cuartos de final (2000, 2008)</p>
            <p><strong>Partidos jugados:</strong> 26</p>
            <p><strong>Dato destacado:</strong> En el año 2000 desplegaron un fútbol espectacular bajo el mando de Ricardo La Volpe, cayendo ante el campeón Palmeiras.</p>
        `
    },
    morelia_lib: {
        nombre: "Monarcas Morelia",
        imagen: "img/morelia.jpg",
        info: `
            <p><strong>Participaciones:</strong> 4 (2002, 2010, 2014, 2015)</p>
            <p><strong>Mejor resultado:</strong> Cuartos de final (2002)</p>
            <p><strong>Partidos jugados:</strong> 20</p>
            <p><strong>Dato destacado:</strong> A pesar de sus 4 apariciones, en las últimas dos (2014 y 2015) fue eliminado inmediatamente en la ronda de repechaje.</p>
        `
    },
    necaxa_lib: {
        nombre: "Necaxa",
        imagen: "img/necaxa.jpg",
        info: `
            <p><strong>Participaciones:</strong> 2 (1999, 2007)</p>
            <p><strong>Mejor resultado:</strong> Octavos de final (1999, 2007)</p>
            <p><strong>Partidos jugados:</strong> 16</p>
            <p><strong>Dato destacado:</strong> Destacó especialmente en 2007 eliminando a equipos sudamericanos de enorme tradición en la fase de grupos antes de caer contra Nacional.</p>
        `
    },
    pachuca_lib: {
        nombre: "Pachuca",
        imagen: "img/pachuca.jpg",
        info: `
            <p><strong>Participaciones:</strong> 2 (2005, 2009)</p>
            <p><strong>Mejor resultado:</strong> Octavos de final (2005)</p>
            <p><strong>Partidos jugados:</strong> 10</p>
            <p><strong>Dato destacado:</strong> Pese a ser el único equipo mexicano en ganar la Sudamericana, en la Libertadores tuvo pasos muy cortos y discretos.</p>
        `
    },
    sanluis_lib: {
        nombre: "San Luis",
        imagen: "img/sanluis.jpg",
        info: `
            <p><strong>Participaciones:</strong> 3 (2009, 2010, 2011)</p>
            <p><strong>Mejor resultado:</strong> Octavos de final (2010)</p>
            <p><strong>Partidos jugados:</strong> 14</p>
            <p><strong>Dato destacado:</strong> En 2009 se retiró en octavos por el brote de H1N1. Conmebol le respetó el lugar directo a octavos para la edición 2010.</p>
        `
    },
    santos_lib: {
        nombre: "Santos Laguna",
        imagen: "img/santos.jpg",
        info: `
            <p><strong>Participaciones:</strong> 2 (2004, 2014)</p>
            <p><strong>Mejor resultado:</strong> Octavos de final (2004, 2014)</p>
            <p><strong>Partidos jugados:</strong> 16</p>
            <p><strong>Dato destacado:</strong> En 2004 fue eliminado dramáticamente en tanda de penales por River Plate bajo decisiones arbitrales sumamente polémicas.</p>
        `
    },
    tijuana_lib: {
        nombre: "Xolos de Tijuana",
        imagen: "img/tijuana.jpg",
        info: `
            <p><strong>Participaciones:</strong> 1 (2013)</p>
            <p><strong>Mejor resultado:</strong> Cuartos de final (2013)</p>
            <p><strong>Partidos jugados:</strong> 10</p>
            <p><strong>Dato destacado:</strong> Rozó las semifinales en su debut absoluto, pero un penal fallado por Riascos al minuto 93 ante el eventual campeón Atlético Mineiro los eliminó.</p>
        `
    },
    leon_lib: {
        nombre: "Club León",
        imagen: "img/leon.jpg",
        info: `
            <p><strong>Participaciones:</strong> 2 (2013, 2014)</p>
            <p><strong>Mejor resultado:</strong> Octavos de final (2014)</p>
            <p><strong>Partidos jugados:</strong> 10</p>
            <p><strong>Dato destacado:</strong> En la edición del 2014 logró la histórica hazaña de vencer al Flamengo en el mismísimo Estadio Maracaná.</p>
        `
    },
    jaguares_lib: {
        nombre: "Jaguares de Chiapas",
        imagen: "img/jaguares.jpg",
        info: `
            <p><strong>Participaciones:</strong> 1 (2011)</p>
            <p><strong>Mejor resultado:</strong> Cuartos de final (2011)</p>
            <p><strong>Partidos jugados:</strong> 12</p>
            <p><strong>Dato destacado:</strong> Sorprendió al continente llegando a cuartos en su debut absoluto tras iniciar desde el repechaje, siendo eliminados por Cerro Porteño.</p>
        `
    },
    puebla_lib: {
        nombre: "Puebla",
        imagen: "img/puebla.jpg",
        info: `
            <p><strong>Participaciones:</strong> 1 (2016)</p>
            <p><strong>Mejor resultado:</strong> Primera Fase / Repechaje (2016)</p>
            <p><strong>Partidos jugados:</strong> 2</p>
            <p><strong>Dato destacado:</strong> Su única participación terminó rápido al ser eliminados en la ronda preliminar al perder la serie ante el Racing Club de Argentina.</p>
        `
    },
    tecos_lib: {
        nombre: "Estudiantes Tecos",
        imagen: "img/tecos.jpg",
        info: `
            <p><strong>Participaciones:</strong> 1 (2010)</p>
            <p><strong>Mejor resultado:</strong> Primera Fase / Repechaje (2010)</p>
            <p><strong>Partidos jugados:</strong> 2</p>
            <p><strong>Dato destacado:</strong> Perdieron en la fase preliminar frente a Juan Aurich de Perú, impidiendo su paso histórico a la fase de grupos.</p>
        `
    },

    // ==========================================
    // SECCIÓN SUDAMERICANA
    // ==========================================
    america_sud: {
        nombre: "Club América",
        imagen: "img/america.jpg",
        info: `
            <p><strong>Participaciones:</strong> 2 (2005, 2007)</p>
            <p><strong>Mejor resultado:</strong> Subcampeón (2007)</p>
            <p><strong>Partidos jugados:</strong> 14</p>
            <p><strong>Dato destacado:</strong> Protagonizó la dolorosa final de 2007 contra Arsenal, donde una regla de desempate inédita impidió que ganaran el título.</p>
        `
    },
    pachuca_sud: {
        nombre: "Pachuca",
        imagen: "img/pachuca.jpg",
        info: `
            <p><strong>Participaciones:</strong> 2 (2006, 2007)</p>
            <p><strong>Mejor resultado:</strong> Campeón (2006)</p>
            <p><strong>Partidos jugados:</strong> 10</p>
            <p><strong>Dato destacado:</strong> Es el único equipo mexicano (y de toda Concacaf) en haber ganado un torneo oficial organizado por la Conmebol en la historia.</p>
        `
    },
    pumas_sud: {
        nombre: "Pumas UNAM",
        imagen: "img/pumas.jpg",
        info: `
            <p><strong>Participaciones:</strong> 1 (2005)</p>
            <p><strong>Mejor resultado:</strong> Subcampeón (2005)</p>
            <p><strong>Partidos jugados:</strong> 8</p>
            <p><strong>Dato destacado:</strong> En su única participación logró llegar a la gran final, cayendo en penales ante un histórico Boca Juniors en La Bombonera.</p>
        `
    },
    chivas_sud: {
        nombre: "Guadalajara",
        imagen: "img/chivas.jpg",
        info: `
            <p><strong>Participaciones:</strong> 2 (2007, 2008)</p>
            <p><strong>Mejor resultado:</strong> Semifinales (2008)</p>
            <p><strong>Partidos jugados:</strong> 12</p>
            <p><strong>Dato destacado:</strong> Estuvieron muy cerca de la final en 2008, siendo eliminados por Internacional de Porto Alegre, su verdugo habitual en Sudamérica.</p>
        `
    },
    toluca_sud: {
        nombre: "Deportivo Toluca",
        imagen: "img/toluca.jpg",
        info: `
            <p><strong>Participaciones:</strong> 1 (2006)</p>
            <p><strong>Mejor resultado:</strong> Semifinales (2006)</p>
            <p><strong>Partidos jugados:</strong> 6</p>
            <p><strong>Dato destacado:</strong> Cumplieron un gran torneo en 2006, eliminando a San Lorenzo de Almagro antes de caer frente al eventual finalista Colo Colo.</p>
        `
    },
    sanluis_sud: {
        nombre: "San Luis",
        imagen: "img/sanluis.jpg",
        info: `
            <p><strong>Participaciones:</strong> 1 (2008)</p>
            <p><strong>Mejor resultado:</strong> Octavos de final (2008)</p>
            <p><strong>Partidos jugados:</strong> 4</p>
            <p><strong>Dato destacado:</strong> En su única aventura en este certamen superaron al Deportivo Quito antes de ser frenados por Argentinos Juniors.</p>
        `
    },

    // ==========================================
    // SECCIÓN CONCACHAMPIONS (Era Moderna 2008-Presente)
    // ==========================================
    monterrey_conca: {
        nombre: "Rayados de Monterrey",
        imagen: "img/monterrey.jpg",
        info: `
            <p><strong>Participaciones:</strong> 6 (Era Moderna)</p>
            <p><strong>Mejor resultado:</strong> Campeón (5 veces en era moderna)</p>
            <p><strong>Partidos jugados:</strong> 54</p>
            <p><strong>Dato destacado:</strong> Es el rey indiscutible del torneo bajo su nuevo formato, logrando un espectacular tricampeonato consecutivo entre 2011 y 2013.</p>
        `
    },
    pachuca_conca: {
        nombre: "Pachuca",
        imagen: "img/pachuca.jpg",
        info: `
            <p><strong>Participaciones:</strong> 6 (Era Moderna)</p>
            <p><strong>Mejor resultado:</strong> Campeón (3 veces en era moderna)</p>
            <p><strong>Partidos jugados:</strong> 48</p>
            <p><strong>Dato destacado:</strong> Es uno de los equipos más ganadores históricamente, reafirmando su dominio con los títulos de 2010, 2017 y 2024.</p>
        `
    },
    america_conca: {
        nombre: "Club América",
        imagen: "img/america.jpg",
        info: `
            <p><strong>Participaciones:</strong> 6 (Era Moderna)</p>
            <p><strong>Mejor resultado:</strong> Campeón (2 veces en era moderna, 7 históricos totales)</p>
            <p><strong>Partidos jugados:</strong> 48</p>
            <p><strong>Dato destacado:</strong> Levantó un bicampeonato en la era moderna (2015 y 2016) y se mantiene como el máximo ganador histórico de la Confederación.</p>
        `
    },
    cruzazul_conca: {
        nombre: "Cruz Azul",
        imagen: "img/cruzazul.jpg",
        info: `
            <p><strong>Participaciones:</strong> 8 (Era Moderna)</p>
            <p><strong>Mejor resultado:</strong> Campeón (2014, 6 históricos totales)</p>
            <p><strong>Partidos jugados:</strong> 64</p>
            <p><strong>Dato destacado:</strong> Es el club con más presencias en la Era Moderna de la competición, coronando su esfuerzo con el campeonato de 2014 ante Toluca.</p>
        `
    },
    tigres_conca: {
        nombre: "Tigres UANL",
        imagen: "img/tigres.jpg",
        info: `
            <p><strong>Participaciones:</strong> 7 (Era Moderna)</p>
            <p><strong>Mejor resultado:</strong> Campeón (2020)</p>
            <p><strong>Partidos jugados:</strong> 52</p>
            <p><strong>Dato destacado:</strong> Tras perder múltiples finales, rompió el maleficio en 2020 y posteriormente logró la hazaña de llegar a la final del Mundial de Clubes.</p>
        `
    },
    chivas_conca: {
        nombre: "Guadalajara",
        imagen: "img/chivas.jpg",
        info: `
            <p><strong>Participaciones:</strong> 3 (Era Moderna)</p>
            <p><strong>Mejor resultado:</strong> Campeón (2018)</p>
            <p><strong>Partidos jugados:</strong> 22</p>
            <p><strong>Dato destacado:</strong> Bajo el mando de Matías Almeyda, Chivas rompió una larga sequía internacional al vencer al Toronto FC en penales en 2018.</p>
        `
    },
    pumas_conca: {
        nombre: "Pumas UNAM",
        imagen: "img/pumas.jpg",
        info: `
            <p><strong>Participaciones:</strong> 5 (Era Moderna)</p>
            <p><strong>Mejor resultado:</strong> Subcampeón (2022)</p>
            <p><strong>Partidos jugados:</strong> 36</p>
            <p><strong>Dato destacado:</strong> En 2022 rompió la hegemonía mexicana en el torneo al caer en la final ante el Seattle Sounders de la MLS.</p>
        `
    },
    toluca_conca: {
        nombre: "Deportivo Toluca",
        imagen: "img/toluca.jpg",
        info: `
            <p><strong>Participaciones:</strong> 5 (Era Moderna)</p>
            <p><strong>Mejor resultado:</strong> Subcampeón (2014)</p>
            <p><strong>Partidos jugados:</strong> 36</p>
            <p><strong>Dato destacado:</strong> Perdió la final del 2014 frente a Cruz Azul debido a la regla del gol de visitante tras un empate en el global.</p>
        `
    },
    santos_conca: {
        nombre: "Santos Laguna",
        imagen: "img/santos.jpg",
        info: `
            <p><strong>Participaciones:</strong> 7 (Era Moderna)</p>
            <p><strong>Mejor resultado:</strong> Subcampeón (2012, 2013)</p>
            <p><strong>Partidos jugados:</strong> 56</p>
            <p><strong>Dato destacado:</strong> Es un invitado constante a las fases finales de la competición, perdiendo dos finales consecutivas contra el Monterrey.</p>
        `
    },
    leon_conca: {
        nombre: "Club León",
        imagen: "img/leon.jpg",
        info: `
            <p><strong>Participaciones:</strong> 5 (Era Moderna)</p>
            <p><strong>Mejor resultado:</strong> Campeón (2023)</p>
            <p><strong>Partidos jugados:</strong> 26</p>
            <p><strong>Dato destacado:</strong> Consiguió su primer gran título internacional de la era superando en la final al LAFC de Carlos Vela en 2023.</p>
        `
    },
    atlas_conca: {
        nombre: "Atlas",
        imagen: "img/atlas.jpg",
        info: `
            <p><strong>Participaciones:</strong> 1 (Era Moderna)</p>
            <p><strong>Mejor resultado:</strong> Cuartos de final (2023)</p>
            <p><strong>Partidos jugados:</strong> 4</p>
            <p><strong>Dato destacado:</strong> Asistió como bicampeón de la Liga MX, firmando una remontada heroica contra Olimpia antes de ser eliminados por Philadelphia Union.</p>
        `
    },
    tijuana_conca: {
        nombre: "Xolos de Tijuana",
        imagen: "img/tijuana.jpg",
        info: `
            <p><strong>Participaciones:</strong> 2 (Era Moderna)</p>
            <p><strong>Mejor resultado:</strong> Semifinales (2014)</p>
            <p><strong>Partidos jugados:</strong> 14</p>
            <p><strong>Dato destacado:</strong> Fueron protagonistas en 2014 llegando hasta las semifinales donde cayeron eliminados por Cruz Azul.</p>
        `
    },
    atlante_conca: {
        nombre: "Atlante",
        imagen: "img/atlante.jpg",
        info: `
            <p><strong>Participaciones:</strong> 1 (Era Moderna)</p>
            <p><strong>Mejor resultado:</strong> Campeón (2008-09)</p>
            <p><strong>Partidos jugados:</strong> 12</p>
            <p><strong>Dato destacado:</strong> Histórico primer campeón de la "Era Moderna" (formato Liga de Campeones), clasificando así al Mundial de Clubes de la FIFA.</p>
        `
    },
    queretaro_conca: {
        nombre: "Querétaro",
        imagen: "img/queretaro.jpg",
        info: `
            <p><strong>Participaciones:</strong> 1 (Era Moderna)</p>
            <p><strong>Mejor resultado:</strong> Semifinales (2015-16)</p>
            <p><strong>Partidos jugados:</strong> 6</p>
            <p><strong>Dato destacado:</strong> En su única incursión al torneo internacional rozaron la final impulsados por estrellas como Ronaldinho en el equipo.</p>
        `
    },
    morelia_conca: {
        nombre: "Monarcas Morelia",
        imagen: "img/morelia.jpg",
        info: `
            <p><strong>Participaciones:</strong> 1 (Era Moderna)</p>
            <p><strong>Mejor resultado:</strong> Cuartos de final (2011-12)</p>
            <p><strong>Partidos jugados:</strong> 8</p>
            <p><strong>Dato destacado:</strong> Superaron la fase de grupos junto al LA Galaxy pero cayeron eliminados ante Monterrey en los Cuartos de final.</p>
        `
    }
};

const datosPartidos = {
    chivas_boca: {
        nombre: "La Goleada Histórica",
        imagen: "img/4a0chivasvsboca.jpg",
        info: `
            <p><strong>Fecha:</strong> 2 de Junio de 2005 (Libertadores)</p>
            <p><strong>Contexto histórico:</strong> Partido de ida de los Cuartos de Final. Boca Jrs. llegaba como amplio favorito, pero el Estadio Jalisco presenció uno de los mayores bailes ofensivos de un club mexicano ante un gigante sudamericano.</p>
            <p><strong>Jugadores sobresalientes:</strong> Adolfo "Bofo" Bautista, Ramón Morales, Oswaldo Sánchez (Chivas); Martín Palermo, Rolando Schiavi (Boca Jrs).</p>
            <p><strong>Consecuencias:</strong> Chivas aplastó 4-0. El Bofo Bautista brilló y desató tanta frustración que en el partido de vuelta se generó una trifulca que culminó con el técnico de Boca escupiendo al mexicano.</p>
        `
    },
    cruzazul_rosario: {
        nombre: "El Pase a la Primera Final",
        imagen: "img/rosariovscruzazul.jpg",
        info: `
            <p><strong>Fecha:</strong> 30 de Mayo de 2001 (Libertadores)</p>
            <p><strong>Contexto histórico:</strong> Semifinal de ida. Los clubes mexicanos solían quedarse cortos en estas instancias, pero La Máquina jugó con enorme autoridad ante Rosario Central, abriendo la puerta al prestigio mexicano en la Conmebol.</p>
            <p><strong>Jugadores sobresalientes:</strong> José Saturnino Cardozo (refuerzo), Francisco Palencia, Oscar "Conejo" Pérez (Cruz Azul); Juan Antonio Pizzi (Rosario Central).</p>
            <p><strong>Consecuencias:</strong> La victoria 2-0 en casa, apoyada en el empate de vuelta en Argentina, convirtió a Cruz Azul en el primer equipo mexicano en disputar una final continental.</p>
        `
    },
    pachuca_colo: {
        nombre: "Pachuca Campeón 2006",
        imagen: "img/pachucavscolo.jpg",
        info: `
            <p><strong>Fecha:</strong> 13 de Diciembre de 2006 (Sudamericana)</p>
            <p><strong>Contexto histórico:</strong> Final de vuelta. Pachuca viajó al Estadio Nacional de Chile tras empatar en casa (1-1) para enfrentar al temible y amplio favorito Colo Colo, comandado por Claudio Borghi.</p>
            <p><strong>Jugadores sobresalientes:</strong> "Chaco" Giménez, Miguel Calero, Damián Álvarez (Pachuca); Humberto Suazo, Alexis Sánchez, Arturo Vidal (Colo Colo).</p>
            <p><strong>Consecuencias:</strong> Los Tuzos remontaron un gol en contra para ganar 2-1 de visita. Este triunfo los convirtió en el primer y único equipo de México (y de Concacaf) en ganar un campeonato avalado por la Conmebol.</p>
        `
    },
    america_arsenal: {
        nombre: "El Robo de Sarandí",
        imagen: "img/ladron2.jpg",
        info: `
            <p><strong>Fecha:</strong> 5 de Diciembre de 2007 (Sudamericana)</p>
            <p><strong>Contexto histórico:</strong> Final de vuelta en Argentina. Tras perder la ida en México (2-3), el América tenía la hazaña de ganar de visita, algo que consiguieron con un brillante 2-1.</p>
            <p><strong>Jugadores sobresalientes:</strong> Salvador Cabañas, Guillermo Ochoa, Rodrigo López (América); Alejandro Gómez, José Luis Calderón (Arsenal).</p>
            <p><strong>Consecuencias:</strong> El global marcaba 4-4. En el reglamento del torneo el gol de visitante no valía en la final. Sin embargo, en pleno partido la Conmebol hizo una polémica aclaración determinando que sí se aplicaría, arrebatándole de las manos el campeonato a las Águilas.</p>
        `
    },
    tigres_lafc: {
        nombre: "Tigres Campeón 2020",
        imagen: "img/tigrescampeon.webp",
        info: `
            <p><strong>Fecha:</strong> 22 de Diciembre de 2020 (Concachampions)</p>
            <p><strong>Contexto histórico:</strong> Tras suspenderse por pandemia, el torneo se reanudó en formato burbuja en Orlando con finales a un solo partido. Tigres arrastraba la presión inmensa de tres finales de Concacaf perdidas en la misma década.</p>
            <p><strong>Jugadores sobresalientes:</strong> André-Pierre Gignac, Nahuel Guzmán, Hugo Ayala (Tigres); Carlos Vela, Diego Rossi (LAFC).</p>
            <p><strong>Consecuencias:</strong> Tigres remontó un 1-0 con un gol agónico de Gignac al 84' para ganar 2-1. Rompieron su sequía internacional y pasaron al histórico Mundial de Clubes donde enfrentaron al Bayern Múnich.</p>
        `
    },
    pumas_seattle: {
        nombre: "El fin de la hegemonía",
        imagen: "img/pendepumas.jpg",
        info: `
            <p><strong>Fecha:</strong> 4 de Mayo de 2022 (Concachampions)</p>
            <p><strong>Contexto histórico:</strong> Final de vuelta. La Liga MX poseía una asombrosa racha ininterrumpida de campeones de Concacaf. Pumas visitaba Lumen Field en Estados Unidos tras empatar 2-2 en C.U.</p>
            <p><strong>Jugadores sobresalientes:</strong> Juan Dinenno, Alfredo Talavera (Pumas); Raúl Ruidíaz, Nicolás Lodeiro, Stefan Frei (Seattle Sounders).</p>
            <p><strong>Consecuencias:</strong> Seattle goleó sorpresivamente 3-0 frente a su afición. Esto cortó brutalmente la hegemonía mexicana de 16 años consecutivos ganando la copa, dándole el primer título bajo este formato a la MLS.</p>
        `
    }
};

function abrirModalEquipo(id) {
    const data = datosEquipos[id];
    if (data) {
        document.getElementById('modal-titulo').innerText = data.nombre;
        
        const imgEl = document.getElementById('modal-imagen');
        imgEl.src = data.imagen;
        imgEl.className = 'modal-logo-equipo'; 
        
        document.getElementById('modal-info').innerHTML = data.info;
        document.getElementById('ventana-modal').style.display = 'flex';
    }
}

function abrirModalPartido(id) {
    const data = datosPartidos[id];
    if (data) {
        document.getElementById('modal-titulo').innerText = data.nombre;
        
        const imgEl = document.getElementById('modal-imagen');
        imgEl.src = data.imagen;
        imgEl.className = 'modal-img-partido'; 
        
        document.getElementById('modal-info').innerHTML = data.info;
        document.getElementById('ventana-modal').style.display = 'flex';
    }
}

function cerrarModal() {
    document.getElementById('ventana-modal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('ventana-modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}