// Dados da tabela de bosses que não vêm do coletar.py (este arquivo é editado à mão).
//   resumo:   a mecânica em 1-2 frases (a versão completa está em bosses.js, campo "mecanica").
//   cooldown: em horas, da TibiaWiki em inglês (campo "cooldown" de cada boss). null = a wiki não informa.
window.BOSSES_EXTRA = {
  // Grave Danger
  "Duke Krule": { cooldown: 20, resumo: "Os jogadores viram elementais de fogo e água: elementos diferentes lado a lado tomam ~2.000. Knight no centro, resto espalhado; segure os Soul Scourges." },
  "Earl Osam": { cooldown: 20, resumo: "Matem pelo menos 3 das 4 Magical Spheres antes de chegarem ao centro (cada uma cura 80k). Cuidado com os Frozen Souls: proteção de gelo." },
  "Count Vlarkorth": { cooldown: 20, resumo: "Afaste os Soulless Minions. Quando ele ficar invulnerável, mate o Dark da sua vocação e use os Good Remains nele." },
  "Sir Baeloc": { cooldown: 20, resumo: "Luta dupla: Nictros primeiro, depois Baeloc, e no fim os dois juntos com a vida parecida (senão um cura). Cuidado com o Lesser Hex." },
  "Sir Nictros": { cooldown: 20, resumo: "Luta dupla: Nictros primeiro, depois Baeloc, e no fim os dois juntos com a vida parecida (senão um cura). Cuidado com o Lesser Hex." },
  "Lord Azaram": { cooldown: 20, resumo: "Mate os Condensed Sins sem death. Na forma de alma, mate os Tainted Soul Splinters e passe a alma por cima deles (3 ciclos)." },
  "King Zelos": { cooldown: 20, resumo: "Last GD, até 10 jogadores: os 4 minibosses (Rewar, Red Knight, Magnor e Nargol) precisam morrer em ~12 min, antes do Zelos." },
  // Heart of Destruction
  "Anomaly": { cooldown: 20, resumo: "Quando virar Charged Anomaly (imune), leve-o sobre o vortex vermelho: cada passada tira 6.000. Repete 3 a 4 vezes." },
  "Eradicator": { cooldown: 20, resumo: "Resiste a tudo menos death: SD e armas de death. Trape no canto e limpe os Sparks of Destruction sempre." },
  "Outburst": { cooldown: 20, resumo: "Na forma Charging Outburst use dano físico e mate em 12 s, senão ele explode com muito dano de energia." },
  "Rupture": { cooldown: 20, resumo: "Quando surgir o Damage Resonance, todos param de bater no boss (cada ataque cura 4.000) e matam o Resonance com alvo único." },
  "Realityquake": { cooldown: 20, resumo: "Alterna Foreshock (imune a death: gelo/energia) e Aftershock (imune a físico: death/terra/fogo); depois vem a forma final." },
  "World Devourer": { cooldown: 332, resumo: "Last GT, 3 times: The Hunger, The Destruction e The Rage morrem juntos; depois o World Devourer. Luta longa, leve muitas runas." },
  // Dream Courts
  "Plagueroot": { cooldown: null, resumo: "Não deixe os Plant Attendants pisarem nos Focuses e mantenha-os longe do boss (o dano de terra dele o cura). Não use terra." },
  "Malofur Mangrinder": { cooldown: null, resumo: "Whirling Blades imortais batem até 1.700: shooters longe. O BOOM vem em 5 etapas crescentes no blocker (Stone Skin depois do 3º-4º)." },
  "Maxxenius": { cooldown: null, resumo: "Se cura com energia: ninguém usa energia. Trape longe dos Generators; o jogador transformado em elemental corre para longe e explode." },
  "Alptramun": { cooldown: null, resumo: "Não use death (cura o boss). Cada summon morto vira um mais forte: muita área. Fica invisível: Fire Bomb no chão revela." },
  "Izcandar the Banished": { cooldown: null, resumo: "Muda entre verão e inverno conforme o lado da arena e é imune a fogo e gelo. O lado onde ele morre define o loot." },
  "The Nightmare Beast": { cooldown: 20, resumo: "Last DC (5 vitórias na arena). A maldição passa de jogador em jogador com o Dream Catcher: definam a ordem antes." },
  // Avulsos
  "Grand Master Oberon": { cooldown: 20, resumo: "3 vezes ele se cura e fala uma frase: responda no Local Chat com a frase certa dos livros para ele voltar a tomar dano." },
  "Drume": { cooldown: 20, resumo: "Mate os 3 Usurper Commanders um por vez sem deixar os Lion Commanders morrerem; depois o Drume, com os Lions de blocker." },
  "Timira the Many-Headed": { cooldown: 20, resumo: "Duas salas de puzzle (baldes de água e Corrupted Trapped Water) e a Timira na 3ª sala: trape no canto noroeste." },
  "Scarlett Etzel": { cooldown: 20, resumo: "Atacar fora da hora cura 5.000. Gire os 4 espelhos, use a Galthen's Chestplate e só um jogador ataca: 4 ciclos matam." },
  "Mitmah Vanguard": { cooldown: null, resumo: "UE de energia forte: máximo de proteção de energia. No \"FEAR THE CURSE!\" vem root e teleporte; tenha as defesas prontas." },
  "Vladrukh": { cooldown: 20, resumo: "Alterna 2 fases: afaste as Blood Pools do boss (curam) e mate as Vampiric Essences. Os Bats são imortais: use invisibilidade." },
  "The Monster": { cooldown: null, resumo: "Mate as 4 Antennas e leve o Doctor Marrow a ~60%. Depois guie o Monster pelas poças dos containers até o contador baixar." },
  "Magma Bubble": { cooldown: 20, resumo: "Proteja o Crystallomancer. Junte escudo com as Charged Flames para quebrar os 3 Magma Crystals, mate os 6 End of Days e o boss." },
  "The Pale Worm": { cooldown: 20, resumo: "Labirinto antes. Mate a Hunger Worm, desça pelo buraco e bata no A Weak Spot por 10-15 s; suba e repita. Limite de 25 min." },
  "Urmahlullu the Weakened": { cooldown: 20, resumo: "Simples e longa: 5 formas com vida compartilhada, todas imunes a fogo. Trape a Tamed antes de matar (a Wisdom foge)." }
};
