// Lista de bosses do painel.
// Campos manuais: nome, pagina (opcional), local, grupo, subgrupo (opcional), ordem, quest,
// mecanica, tabela (opcional).
// Os demais campos são preenchidos por coletar.py. Mantenha o conteúdo como JSON válido.
window.BOSSES = [
  {
    "nome": "Duke Krule",
    "local": "Thais",
    "grupo": "Grave Danger",
    "subgrupo": "Diários",
    "ordem": 1,
    "quest": "Grave Danger Quest",
    "level": {
      "quest": "Grave Danger Quest",
      "link": "https://www.tibiawiki.com.br/Grave_Danger_Quest",
      "minimo": "250",
      "recomendado": "350+"
    },
    "hp": "290000",
    "xp": "55000",
    "tipo": "archfoe",
    "sprite": "img/bosses/duke-krule.gif",
    "elementos": {
      "fisico": "100%",
      "terra": "80%",
      "fogo": "115%",
      "morte": "-100%",
      "energia": "100%",
      "sagrado": "100%",
      "gelo": "35%",
      "cura": "100%"
    },
    "imunidades": [
      "Invisibility",
      "Paralysis"
    ],
    "podeSerPuxado": false,
    "empurraObjetos": true,
    "passaPor": [
      "Fire",
      "Energy",
      "Poison"
    ],
    "ataque": {
      "sorcerer": {
        "elementos": [
          "fogo"
        ],
        "alternativas": []
      },
      "druid": {
        "elementos": [
          "terra"
        ],
        "alternativas": []
      },
      "paladin": {
        "elementos": [
          "sagrado"
        ],
        "alternativas": [
          "fisico"
        ]
      },
      "knight": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      },
      "monk": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      }
    },
    "defesa": {
      "elementos": [
        "fogo",
        "gelo"
      ],
      "melee": true,
      "nota": "Os jogadores viram Fire/Water Elemental e soltam fogo e gelo uns nos outros; os Soul Scourges batem forte no blocker."
    },
    "rotacao": {
      "knight": {
        "passos": [
          {
            "magia": "Annihilation",
            "palavras": "exori gran ico",
            "obs": "sempre que sair da recarga (30s)",
            "icone": "img/magias/annihilation.gif"
          },
          {
            "magia": "Fierce Berserk",
            "palavras": "exori gran",
            "obs": "a cada 6s",
            "icone": "img/magias/fierce-berserk.gif"
          },
          {
            "magia": "Front Sweep",
            "palavras": "exori min",
            "obs": "a cada 6s, alternando com o Fierce Berserk",
            "icone": "img/magias/front-sweep.gif"
          },
          {
            "magia": "Brutal Strike",
            "palavras": "exori ico",
            "obs": "nos intervalos (ou Shield Bash, exori ico scu, se usar escudo)",
            "icone": "img/magias/brutal-strike.gif"
          }
        ],
        "nota": "Físico 100%. Stance: Blood Rage para dano; Protector se for o blocker."
      },
      "paladin": {
        "passos": [
          {
            "magia": "Divine Grenade",
            "palavras": "exevo tempo mas san",
            "obs": "a cada 26s (level 300+)",
            "icone": "img/magias/divine-grenade.gif"
          },
          {
            "magia": "Divine Barrage",
            "palavras": "exori dir san",
            "obs": "a cada 4s",
            "icone": "img/magias/divine-barrage.gif"
          },
          {
            "magia": "Ethereal Barrage",
            "palavras": "exori dir moe",
            "obs": "a cada 4s, alternando com a Divine Barrage",
            "icone": "img/magias/ethereal-barrage.gif"
          },
          {
            "magia": "Divine Missile",
            "palavras": "exori san",
            "obs": "nos intervalos",
            "icone": "img/magias/divine-missile.gif"
          }
        ],
        "nota": "Holy 100%, físico 100%. Ataque básico com arma o tempo todo. Stance: Sharpshooter."
      },
      "sorcerer": {
        "passos": [
          {
            "magia": "Ultimate Energy Strike",
            "palavras": "exori max vis",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-energy-strike.gif"
          },
          {
            "magia": "Great Energy Beam",
            "palavras": "exevo gran vis lux",
            "obs": "a cada 6s, com o boss na reta (wave/beam)",
            "icone": "img/magias/great-energy-beam.gif"
          },
          {
            "magia": "Energy Wave",
            "palavras": "exevo vis hur",
            "obs": "a cada 8s, com o boss na reta (wave/beam)",
            "icone": "img/magias/energy-wave.gif"
          },
          {
            "magia": "Strong Energy Strike",
            "palavras": "exori gran vis",
            "obs": "a cada 8s",
            "icone": "img/magias/strong-energy-strike.gif"
          },
          {
            "magia": "Lightning",
            "palavras": "exori amp vis",
            "obs": "a cada 8s; pula para mais 2 alvos",
            "icone": "img/magias/lightning.gif"
          },
          {
            "magia": "Energy Strike",
            "palavras": "exori vis",
            "obs": "nos intervalos; sem SD neste boss",
            "icone": "img/magias/energy-strike.gif"
          }
        ],
        "nota": "Elemento: energia (100%); escolhido pelas waves/beams mais fortes. Stance: Master of Thunder. Nunca use death (SD): o boss se cura."
      },
      "druid": {
        "passos": [
          {
            "magia": "Ultimate Terra Strike",
            "palavras": "exori max tera",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-terra-strike.gif"
          },
          {
            "magia": "Terra Wave",
            "palavras": "exevo tera hur",
            "obs": "a cada 4s, com o boss na reta (wave/beam)",
            "icone": "img/magias/terra-wave.gif"
          },
          {
            "magia": "Strong Terra Strike",
            "palavras": "exori gran tera",
            "obs": "a cada 8s",
            "icone": "img/magias/strong-terra-strike.gif"
          },
          {
            "magia": "Forked Thorns",
            "palavras": "exevo fur tera",
            "obs": "a cada 6s; pula para até 5 alvos",
            "icone": "img/magias/forked-thorns.gif"
          },
          {
            "magia": "Terra Strike",
            "palavras": "exori tera",
            "obs": "nos intervalos; sem SD neste boss",
            "icone": "img/magias/terra-strike.gif"
          }
        ],
        "nota": "Elemento: terra (80%). Stance: Elemental Synthesis. Nunca use death (SD): o boss se cura."
      },
      "monk": {
        "passos": [
          {
            "magia": "Thousand Fist Blows",
            "palavras": "exori mas amp pug",
            "obs": "builder, a cada 8s",
            "icone": "img/magias/thousand-fist-blows.gif"
          },
          {
            "magia": "Mystic Repulse",
            "palavras": "exori amp pug",
            "obs": "builder, a cada 8s (alcance 7)",
            "icone": "img/magias/mystic-repulse.gif"
          },
          {
            "magia": "Double Jab",
            "palavras": "exori pug",
            "obs": "builder, a cada 4s, até juntar 5 de Harmony",
            "icone": "img/magias/double-jab.gif"
          },
          {
            "magia": "Devastating Knockout",
            "palavras": "exori gran nia",
            "obs": "spender com 5 de Harmony (a cada 8s, alcance 7)",
            "icone": "img/magias/devastating-knockout.gif"
          },
          {
            "magia": "Forceful Uppercut",
            "palavras": "exori gran pug",
            "obs": "sempre que sair da recarga (60s)",
            "icone": "img/magias/forceful-uppercut.gif"
          }
        ],
        "nota": "Físico 100%. Gaste a Harmony só com 5 pontos (+112% de dano). Abaixo do level 125 use Greater Tiger Clash (exori nia) como spender."
      }
    },
    "tokens": [
      {
        "nome": "Silver Token",
        "qtd": "0-2",
        "raridade": "semi-raro",
        "sprite": "img/itens/silver-token.gif"
      }
    ],
    "lootTiers": [
      {
        "raridade": "comum",
        "itens": [
          {
            "nome": "Platinum Coin",
            "qtd": "0-5",
            "sprite": "img/itens/platinum-coin.gif",
            "link": "https://www.tibiawiki.com.br/Platinum_Coin"
          },
          {
            "nome": "Crystal Coin",
            "qtd": "0-2",
            "sprite": "img/itens/crystal-coin.gif",
            "link": "https://www.tibiawiki.com.br/Crystal_Coin"
          },
          {
            "nome": "Supreme Health Potion",
            "qtd": "0-20",
            "sprite": "img/itens/supreme-health-potion.gif",
            "link": "https://www.tibiawiki.com.br/Supreme_Health_Potion"
          },
          {
            "nome": "Ultimate Mana Potion",
            "qtd": "0-14",
            "sprite": "img/itens/ultimate-mana-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Mana_Potion"
          },
          {
            "nome": "Ultimate Spirit Potion",
            "qtd": "0-20",
            "sprite": "img/itens/ultimate-spirit-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Spirit_Potion"
          },
          {
            "nome": "Berserk Potion",
            "qtd": "0-10",
            "sprite": "img/itens/berserk-potion.gif",
            "link": "https://www.tibiawiki.com.br/Berserk_Potion"
          },
          {
            "nome": "Bullseye Potion",
            "qtd": "0-10",
            "sprite": "img/itens/bullseye-potion.gif",
            "link": "https://www.tibiawiki.com.br/Bullseye_Potion"
          },
          {
            "nome": "Green Gem",
            "qtd": "0-2",
            "sprite": "img/itens/green-gem.gif",
            "link": "https://www.tibiawiki.com.br/Green_Gem"
          },
          {
            "nome": "Mastermind Potion",
            "qtd": "0-10",
            "sprite": "img/itens/mastermind-potion.gif",
            "link": "https://www.tibiawiki.com.br/Mastermind_Potion"
          },
          {
            "nome": "Piece of Hell Steel",
            "qtd": "0-4",
            "sprite": "img/itens/piece-of-hell-steel.gif",
            "link": "https://www.tibiawiki.com.br/Piece_of_Hell_Steel"
          }
        ]
      },
      {
        "raridade": "semi-raro",
        "itens": [
          {
            "nome": "Blue Gem",
            "qtd": null,
            "sprite": "img/itens/blue-gem.gif",
            "link": "https://www.tibiawiki.com.br/Blue_Gem"
          },
          {
            "nome": "Crusader Helmet",
            "qtd": null,
            "sprite": "img/itens/crusader-helmet.gif",
            "link": "https://www.tibiawiki.com.br/Crusader_Helmet"
          },
          {
            "nome": "Gold Ingot",
            "qtd": null,
            "sprite": "img/itens/gold-ingot.gif",
            "link": "https://www.tibiawiki.com.br/Gold_Ingot"
          },
          {
            "nome": "Red Gem",
            "qtd": null,
            "sprite": "img/itens/red-gem.gif",
            "link": "https://www.tibiawiki.com.br/Red_Gem"
          },
          {
            "nome": "Terra Hood",
            "qtd": null,
            "sprite": "img/itens/terra-hood.gif",
            "link": "https://www.tibiawiki.com.br/Terra_Hood"
          },
          {
            "nome": "Violet Gem",
            "qtd": null,
            "sprite": "img/itens/violet-gem.gif",
            "link": "https://www.tibiawiki.com.br/Violet_Gem"
          },
          {
            "nome": "Yellow Gem",
            "qtd": null,
            "sprite": "img/itens/yellow-gem.gif",
            "link": "https://www.tibiawiki.com.br/Yellow_Gem"
          },
          {
            "nome": "Young Lich Worm",
            "qtd": null,
            "sprite": "img/itens/young-lich-worm.gif",
            "link": "https://www.tibiawiki.com.br/Young_Lich_Worm"
          }
        ]
      },
      {
        "raridade": "raro",
        "itens": [
          {
            "nome": "Bear Skin",
            "qtd": null,
            "sprite": "img/itens/bear-skin.gif",
            "link": "https://www.tibiawiki.com.br/Bear_Skin"
          },
          {
            "nome": "Noble Amulet",
            "qtd": null,
            "sprite": "img/itens/noble-amulet.gif",
            "link": "https://www.tibiawiki.com.br/Noble_Amulet"
          },
          {
            "nome": "Rotten Heart",
            "qtd": null,
            "sprite": "img/itens/rotten-heart.gif",
            "link": "https://www.tibiawiki.com.br/Rotten_Heart"
          },
          {
            "nome": "Terra Helmet",
            "qtd": null,
            "sprite": "img/itens/terra-helmet.gif",
            "link": "https://www.tibiawiki.com.br/Terra_Helmet"
          }
        ]
      },
      {
        "raridade": "muito raro",
        "itens": [
          {
            "nome": "Final Judgement",
            "qtd": null,
            "sprite": "img/itens/final-judgement.gif",
            "link": "https://www.tibiawiki.com.br/Final_Judgement"
          }
        ]
      }
    ],
    "lootStatus": "ok",
    "mecanica": [
      "Transforma os jogadores em [[Fire Elemental]] ou [[Water Elemental]]. Cada um solta um dano em área de tempos em tempos; a transformação troca a cada poucos segundos.",
      "Jogadores de elementos diferentes perto um do outro tomam ~2.000. Posição: o knight fica no centro com o boss e o resto espalhado em volta, a uma distância segura.",
      "Os [[Soul Scourge|Soul Scourges]] batem mais que o boss. Com 2 knights, um segura o boss e o outro os summons.",
      "Shooter com summon atrás: espere sua forma ficar igual à do knight e leve o summon até ele, rápido."
    ],
    "spritesMecanica": {
      "Fire Elemental": "img/criaturas/fire-elemental.gif",
      "Water Elemental": "img/criaturas/water-elemental.gif",
      "Soul Scourge": "img/criaturas/soul-scourge.gif"
    },
    "fases": [
      {
        "nome": "Soul Scourge",
        "dica": "Summon que bate mais que o boss: um 2º knight segura, ou o time mata.",
        "hp": "6900",
        "elementos": {
          "fisico": "100%",
          "terra": "60%",
          "fogo": "110%",
          "morte": "30%",
          "energia": "110%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/soul-scourge.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo"
          ],
          "druid": [
            "gelo"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      }
    ],
    "link": "https://www.tibiawiki.com.br/Duke_Krule",
    "pendencias": []
  },
  {
    "nome": "Earl Osam",
    "local": "Cormaya",
    "grupo": "Grave Danger",
    "subgrupo": "Diários",
    "ordem": 2,
    "quest": "Grave Danger Quest",
    "level": {
      "quest": "Grave Danger Quest",
      "link": "https://www.tibiawiki.com.br/Grave_Danger_Quest",
      "minimo": "250",
      "recomendado": "350+"
    },
    "hp": "300000",
    "xp": "55000",
    "tipo": "archfoe",
    "sprite": "img/bosses/earl-osam.gif",
    "elementos": {
      "fisico": "95%",
      "terra": "60%",
      "fogo": "110%",
      "morte": "-200%",
      "energia": "107%",
      "sagrado": "105%",
      "gelo": "-50%",
      "cura": "100%"
    },
    "imunidades": [
      "Invisibility",
      "Paralysis"
    ],
    "podeSerPuxado": false,
    "empurraObjetos": true,
    "passaPor": [
      "Fire",
      "Energy",
      "Poison"
    ],
    "ataque": {
      "sorcerer": {
        "elementos": [
          "fogo"
        ],
        "alternativas": []
      },
      "druid": {
        "elementos": [
          "terra"
        ],
        "alternativas": []
      },
      "paladin": {
        "elementos": [
          "sagrado"
        ],
        "alternativas": [
          "fisico"
        ]
      },
      "knight": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      },
      "monk": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      }
    },
    "defesa": {
      "elementos": [
        "gelo",
        "terra"
      ],
      "melee": true,
      "nota": "Os Frozen Souls batem gelo à distância (Glacier Amulet). O boss também usa terra."
    },
    "rotacao": {
      "knight": {
        "passos": [
          {
            "magia": "Annihilation",
            "palavras": "exori gran ico",
            "obs": "sempre que sair da recarga (30s)",
            "icone": "img/magias/annihilation.gif"
          },
          {
            "magia": "Fierce Berserk",
            "palavras": "exori gran",
            "obs": "a cada 6s",
            "icone": "img/magias/fierce-berserk.gif"
          },
          {
            "magia": "Front Sweep",
            "palavras": "exori min",
            "obs": "a cada 6s, alternando com o Fierce Berserk",
            "icone": "img/magias/front-sweep.gif"
          },
          {
            "magia": "Brutal Strike",
            "palavras": "exori ico",
            "obs": "nos intervalos (ou Shield Bash, exori ico scu, se usar escudo)",
            "icone": "img/magias/brutal-strike.gif"
          }
        ],
        "nota": "Físico 95%. Stance: Blood Rage para dano; Protector se for o blocker."
      },
      "paladin": {
        "passos": [
          {
            "magia": "Divine Grenade",
            "palavras": "exevo tempo mas san",
            "obs": "a cada 26s (level 300+)",
            "icone": "img/magias/divine-grenade.gif"
          },
          {
            "magia": "Divine Barrage",
            "palavras": "exori dir san",
            "obs": "a cada 4s",
            "icone": "img/magias/divine-barrage.gif"
          },
          {
            "magia": "Ethereal Barrage",
            "palavras": "exori dir moe",
            "obs": "a cada 4s, alternando com a Divine Barrage",
            "icone": "img/magias/ethereal-barrage.gif"
          },
          {
            "magia": "Divine Missile",
            "palavras": "exori san",
            "obs": "nos intervalos",
            "icone": "img/magias/divine-missile.gif"
          }
        ],
        "nota": "Holy 105%, físico 95%. Ataque básico com arma o tempo todo. Stance: Sharpshooter."
      },
      "sorcerer": {
        "passos": [
          {
            "magia": "Ultimate Energy Strike",
            "palavras": "exori max vis",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-energy-strike.gif"
          },
          {
            "magia": "Great Energy Beam",
            "palavras": "exevo gran vis lux",
            "obs": "a cada 6s, com o boss na reta (wave/beam)",
            "icone": "img/magias/great-energy-beam.gif"
          },
          {
            "magia": "Energy Wave",
            "palavras": "exevo vis hur",
            "obs": "a cada 8s, com o boss na reta (wave/beam)",
            "icone": "img/magias/energy-wave.gif"
          },
          {
            "magia": "Strong Energy Strike",
            "palavras": "exori gran vis",
            "obs": "a cada 8s",
            "icone": "img/magias/strong-energy-strike.gif"
          },
          {
            "magia": "Lightning",
            "palavras": "exori amp vis",
            "obs": "a cada 8s; pula para mais 2 alvos",
            "icone": "img/magias/lightning.gif"
          },
          {
            "magia": "Energy Strike",
            "palavras": "exori vis",
            "obs": "nos intervalos; sem SD neste boss",
            "icone": "img/magias/energy-strike.gif"
          }
        ],
        "nota": "Elemento: energia (107%); escolhido pelas waves/beams mais fortes. Stance: Master of Thunder. Nunca use death (SD): o boss se cura."
      },
      "druid": {
        "passos": [
          {
            "magia": "Ultimate Terra Strike",
            "palavras": "exori max tera",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-terra-strike.gif"
          },
          {
            "magia": "Terra Wave",
            "palavras": "exevo tera hur",
            "obs": "a cada 4s, com o boss na reta (wave/beam)",
            "icone": "img/magias/terra-wave.gif"
          },
          {
            "magia": "Strong Terra Strike",
            "palavras": "exori gran tera",
            "obs": "a cada 8s",
            "icone": "img/magias/strong-terra-strike.gif"
          },
          {
            "magia": "Forked Thorns",
            "palavras": "exevo fur tera",
            "obs": "a cada 6s; pula para até 5 alvos",
            "icone": "img/magias/forked-thorns.gif"
          },
          {
            "magia": "Terra Strike",
            "palavras": "exori tera",
            "obs": "nos intervalos; sem SD neste boss",
            "icone": "img/magias/terra-strike.gif"
          }
        ],
        "nota": "Elemento: terra (60%). Stance: Elemental Synthesis. Nunca use death (SD): o boss se cura."
      },
      "monk": {
        "passos": [
          {
            "magia": "Thousand Fist Blows",
            "palavras": "exori mas amp pug",
            "obs": "builder, a cada 8s",
            "icone": "img/magias/thousand-fist-blows.gif"
          },
          {
            "magia": "Mystic Repulse",
            "palavras": "exori amp pug",
            "obs": "builder, a cada 8s (alcance 7)",
            "icone": "img/magias/mystic-repulse.gif"
          },
          {
            "magia": "Double Jab",
            "palavras": "exori pug",
            "obs": "builder, a cada 4s, até juntar 5 de Harmony",
            "icone": "img/magias/double-jab.gif"
          },
          {
            "magia": "Devastating Knockout",
            "palavras": "exori gran nia",
            "obs": "spender com 5 de Harmony (a cada 8s, alcance 7)",
            "icone": "img/magias/devastating-knockout.gif"
          },
          {
            "magia": "Forceful Uppercut",
            "palavras": "exori gran pug",
            "obs": "sempre que sair da recarga (60s)",
            "icone": "img/magias/forceful-uppercut.gif"
          }
        ],
        "nota": "Físico 95%. Gaste a Harmony só com 5 pontos (+112% de dano). Abaixo do level 125 use Greater Tiger Clash (exori nia) como spender."
      }
    },
    "tokens": [
      {
        "nome": "Silver Token",
        "qtd": "0-2",
        "raridade": "semi-raro",
        "sprite": "img/itens/silver-token.gif"
      }
    ],
    "lootTiers": [
      {
        "raridade": "comum",
        "itens": [
          {
            "nome": "Platinum Coin",
            "qtd": "0-5",
            "sprite": "img/itens/platinum-coin.gif",
            "link": "https://www.tibiawiki.com.br/Platinum_Coin"
          },
          {
            "nome": "Crystal Coin",
            "qtd": "0-2",
            "sprite": "img/itens/crystal-coin.gif",
            "link": "https://www.tibiawiki.com.br/Crystal_Coin"
          },
          {
            "nome": "Supreme Health Potion",
            "qtd": "0-20",
            "sprite": "img/itens/supreme-health-potion.gif",
            "link": "https://www.tibiawiki.com.br/Supreme_Health_Potion"
          },
          {
            "nome": "Ultimate Mana Potion",
            "qtd": "0-20",
            "sprite": "img/itens/ultimate-mana-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Mana_Potion"
          },
          {
            "nome": "Ultimate Spirit Potion",
            "qtd": "0-14",
            "sprite": "img/itens/ultimate-spirit-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Spirit_Potion"
          },
          {
            "nome": "Berserk Potion",
            "qtd": "0-10",
            "sprite": "img/itens/berserk-potion.gif",
            "link": "https://www.tibiawiki.com.br/Berserk_Potion"
          },
          {
            "nome": "Bullseye Potion",
            "qtd": "0-10",
            "sprite": "img/itens/bullseye-potion.gif",
            "link": "https://www.tibiawiki.com.br/Bullseye_Potion"
          },
          {
            "nome": "Mastermind Potion",
            "qtd": "0-10",
            "sprite": "img/itens/mastermind-potion.gif",
            "link": "https://www.tibiawiki.com.br/Mastermind_Potion"
          },
          {
            "nome": "Transcendence Potion",
            "qtd": "0-7",
            "sprite": "img/itens/transcendence-potion.gif",
            "link": "https://www.tibiawiki.com.br/Transcendence_Potion"
          },
          {
            "nome": "Piece of Draconian Steel",
            "qtd": "0-3",
            "sprite": "img/itens/piece-of-draconian-steel.gif",
            "link": "https://www.tibiawiki.com.br/Piece_of_Draconian_Steel"
          }
        ]
      },
      {
        "raridade": "semi-raro",
        "itens": [
          {
            "nome": "Red Gem",
            "qtd": "0-2",
            "sprite": "img/itens/red-gem.gif",
            "link": "https://www.tibiawiki.com.br/Red_Gem"
          },
          {
            "nome": "Collar of Blue Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-blue-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Blue_Plasma"
          },
          {
            "nome": "Collar of Red Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-red-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Red_Plasma"
          },
          {
            "nome": "Gold Ingot",
            "qtd": null,
            "sprite": "img/itens/gold-ingot.gif",
            "link": "https://www.tibiawiki.com.br/Gold_Ingot"
          },
          {
            "nome": "Green Gem",
            "qtd": null,
            "sprite": "img/itens/green-gem.gif",
            "link": "https://www.tibiawiki.com.br/Green_Gem"
          },
          {
            "nome": "Guardian Axe",
            "qtd": null,
            "sprite": "img/itens/guardian-axe.gif",
            "link": "https://www.tibiawiki.com.br/Guardian_Axe"
          },
          {
            "nome": "Ring of Blue Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-blue-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Blue_Plasma"
          },
          {
            "nome": "Ring of Green Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-green-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Green_Plasma"
          },
          {
            "nome": "Warrior Helmet",
            "qtd": null,
            "sprite": "img/itens/warrior-helmet.gif",
            "link": "https://www.tibiawiki.com.br/Warrior_Helmet"
          },
          {
            "nome": "Young Lich Worm",
            "qtd": null,
            "sprite": "img/itens/young-lich-worm.gif",
            "link": "https://www.tibiawiki.com.br/Young_Lich_Worm"
          }
        ]
      },
      {
        "raridade": "raro",
        "itens": [
          {
            "nome": "Embrace of Nature",
            "qtd": null,
            "sprite": "img/itens/embrace-of-nature.gif",
            "link": "https://www.tibiawiki.com.br/Embrace_of_Nature"
          },
          {
            "nome": "Rotten Heart",
            "qtd": null,
            "sprite": "img/itens/rotten-heart.gif",
            "link": "https://www.tibiawiki.com.br/Rotten_Heart"
          },
          {
            "nome": "Terra Helmet",
            "qtd": null,
            "sprite": "img/itens/terra-helmet.gif",
            "link": "https://www.tibiawiki.com.br/Terra_Helmet"
          },
          {
            "nome": "Token of Love",
            "qtd": null,
            "sprite": "img/itens/token-of-love.gif",
            "link": "https://www.tibiawiki.com.br/Token_of_Love"
          }
        ]
      },
      {
        "raridade": "muito raro",
        "itens": [
          {
            "nome": "Final Judgement",
            "qtd": null,
            "sprite": "img/itens/final-judgement.gif",
            "link": "https://www.tibiawiki.com.br/Final_Judgement"
          }
        ]
      }
    ],
    "lootStatus": "ok",
    "mecanica": [
      "O perigo são os [[Frozen Soul|Frozen Souls]] (gelo à distância). O knight fica no centro e os shooters encostados na parede, para os summons mirarem o knight. Use [[Glacier Amulet]] e proteção de gelo.",
      "Bata no boss (fogo é o melhor elemento) até ele ir ao centro e virar [[Channeling Earl Osam]], imune.",
      "Surgem 4 [[Magical Sphere|Magical Spheres]], uma em cada lado. Matem pelo menos 3 antes de chegarem ao centro: cada uma cura 80k do boss.",
      "Depois das esferas, ele empurra para longe quem estiver colado (não na diagonal) e volta ao normal. Repete 1 ou 2 vezes."
    ],
    "spritesMecanica": {
      "Frozen Soul": "img/criaturas/frozen-soul.gif",
      "Glacier Amulet": "img/criaturas/glacier-amulet.gif",
      "Channeling Earl Osam": "img/criaturas/channeling-earl-osam.gif",
      "Magical Sphere": "img/criaturas/magical-sphere.gif"
    },
    "fases": [
      {
        "nome": "Frozen Soul",
        "dica": "Imortal: não ataque. Faça-os mirar o knight (shooters encostados na parede).",
        "hp": "∞",
        "elementos": {
          "fisico": "0%",
          "terra": "0%",
          "fogo": "0%",
          "morte": "0%",
          "energia": "0%",
          "sagrado": "0%",
          "gelo": "0%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/frozen-soul.gif",
        "ataques": {
          "knight": [],
          "paladin": [],
          "sorcerer": [],
          "druid": [],
          "monk": []
        },
        "peso": 0,
        "elemento": {
          "sorcerer": [],
          "druid": [],
          "paladin": [],
          "knight": [],
          "monk": []
        }
      },
      {
        "nome": "Channeling Earl Osam",
        "dica": "Forma imune no centro da sala: não adianta bater.",
        "hp": "∞",
        "elementos": {
          "fisico": "0%",
          "terra": "0%",
          "fogo": "0%",
          "morte": "0%",
          "energia": "0%",
          "sagrado": "0%",
          "gelo": "0%",
          "cura": "0%"
        },
        "sprite": "img/criaturas/channeling-earl-osam.gif",
        "ataques": {
          "knight": [],
          "paladin": [],
          "sorcerer": [],
          "druid": [],
          "monk": []
        },
        "peso": 0,
        "elemento": {
          "sorcerer": [],
          "druid": [],
          "paladin": [],
          "knight": [],
          "monk": []
        }
      },
      {
        "nome": "Magical Sphere",
        "dica": "Matem pelo menos 3 das 4 antes de chegarem ao centro (cada uma cura 80k).",
        "hp": "9000",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/magical-sphere.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo",
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      }
    ],
    "link": "https://www.tibiawiki.com.br/Earl_Osam",
    "pendencias": []
  },
  {
    "nome": "Count Vlarkorth",
    "local": "Edron",
    "grupo": "Grave Danger",
    "subgrupo": "Diários",
    "ordem": 3,
    "quest": "Grave Danger Quest",
    "level": {
      "quest": "Grave Danger Quest",
      "link": "https://www.tibiawiki.com.br/Grave_Danger_Quest",
      "minimo": "250",
      "recomendado": "350+"
    },
    "hp": "300000",
    "xp": "55000",
    "tipo": "archfoe",
    "sprite": "img/bosses/count-vlarkorth.gif",
    "elementos": {
      "fisico": "90%",
      "terra": "100%",
      "fogo": "95%",
      "morte": "100%",
      "energia": "97%",
      "sagrado": "100%",
      "gelo": "100%",
      "cura": "100%"
    },
    "imunidades": [
      "Invisibility",
      "Paralysis"
    ],
    "podeSerPuxado": false,
    "empurraObjetos": true,
    "passaPor": [
      "Fire",
      "Energy",
      "Poison"
    ],
    "rotacaoAjustes": {
      "sdPrincipal": true,
      "nota": "Enquanto os Darks estiverem vivos o boss fica invulnerável."
    },
    "ataque": {
      "sorcerer": {
        "elementos": [
          "energia",
          "morte"
        ],
        "alternativas": [
          "fogo"
        ]
      },
      "druid": {
        "elementos": [
          "gelo",
          "morte"
        ],
        "alternativas": []
      },
      "paladin": {
        "elementos": [
          "sagrado"
        ],
        "alternativas": [
          "fisico"
        ]
      },
      "knight": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      },
      "monk": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      }
    },
    "defesa": {
      "elementos": [
        "fogo"
      ],
      "melee": true,
      "nota": "O maior dano é o Fire Wave do boss: blocker na diagonal."
    },
    "rotacao": {
      "knight": {
        "passos": [
          {
            "magia": "Annihilation",
            "palavras": "exori gran ico",
            "obs": "sempre que sair da recarga (30s)",
            "icone": "img/magias/annihilation.gif"
          },
          {
            "magia": "Fierce Berserk",
            "palavras": "exori gran",
            "obs": "a cada 6s",
            "icone": "img/magias/fierce-berserk.gif"
          },
          {
            "magia": "Front Sweep",
            "palavras": "exori min",
            "obs": "a cada 6s, alternando com o Fierce Berserk",
            "icone": "img/magias/front-sweep.gif"
          },
          {
            "magia": "Brutal Strike",
            "palavras": "exori ico",
            "obs": "nos intervalos (ou Shield Bash, exori ico scu, se usar escudo)",
            "icone": "img/magias/brutal-strike.gif"
          }
        ],
        "nota": "Físico 90%. Stance: Blood Rage para dano; Protector se for o blocker."
      },
      "paladin": {
        "passos": [
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "ataque principal neste boss (se tiver magic level 15+)",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Divine Grenade",
            "palavras": "exevo tempo mas san",
            "obs": "a cada 26s (level 300+)",
            "icone": "img/magias/divine-grenade.gif"
          },
          {
            "magia": "Divine Barrage",
            "palavras": "exori dir san",
            "obs": "a cada 4s",
            "icone": "img/magias/divine-barrage.gif"
          },
          {
            "magia": "Ethereal Barrage",
            "palavras": "exori dir moe",
            "obs": "a cada 4s, alternando com a Divine Barrage",
            "icone": "img/magias/ethereal-barrage.gif"
          },
          {
            "magia": "Divine Missile",
            "palavras": "exori san",
            "obs": "nos intervalos",
            "icone": "img/magias/divine-missile.gif"
          }
        ],
        "nota": "Holy 100%, físico 90%. Ataque básico com arma o tempo todo. Stance: Sharpshooter."
      },
      "sorcerer": {
        "passos": [
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "ataque principal neste boss",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Ultimate Energy Strike",
            "palavras": "exori max vis",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-energy-strike.gif"
          },
          {
            "magia": "Great Death Beam",
            "palavras": "exevo max mort",
            "obs": "a cada 6s, com o boss na reta (beam)",
            "icone": "img/magias/great-death-beam.gif"
          },
          {
            "magia": "Great Energy Beam",
            "palavras": "exevo gran vis lux",
            "obs": "a cada 6s, com o boss na reta (wave/beam)",
            "icone": "img/magias/great-energy-beam.gif"
          },
          {
            "magia": "Energy Wave",
            "palavras": "exevo vis hur",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/energy-wave.gif"
          },
          {
            "magia": "Strong Energy Strike",
            "palavras": "exori gran vis",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/strong-energy-strike.gif"
          },
          {
            "magia": "Death Echo",
            "palavras": "exevo mort ora",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/death-echo.gif"
          },
          {
            "magia": "Lightning",
            "palavras": "exori amp vis",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/lightning.gif"
          }
        ],
        "nota": "Elemento: energia (97%). Stance: Master of Thunder."
      },
      "druid": {
        "passos": [
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "ataque principal neste boss",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Ultimate Ice Strike",
            "palavras": "exori max frigo",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-ice-strike.gif"
          },
          {
            "magia": "Strong Ice Wave",
            "palavras": "exevo gran frigo hur",
            "obs": "a cada 4s, com o boss na reta (wave/beam)",
            "icone": "img/magias/strong-ice-wave.gif"
          },
          {
            "magia": "Strong Ice Strike",
            "palavras": "exori gran frigo",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/strong-ice-strike.gif"
          },
          {
            "magia": "Forked Glacier",
            "palavras": "exevo fur frigo",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/forked-glacier.gif"
          }
        ],
        "nota": "Elemento: gelo (100%). Stance: Elemental Synthesis."
      },
      "monk": {
        "passos": [
          {
            "magia": "Thousand Fist Blows",
            "palavras": "exori mas amp pug",
            "obs": "builder, a cada 8s",
            "icone": "img/magias/thousand-fist-blows.gif"
          },
          {
            "magia": "Mystic Repulse",
            "palavras": "exori amp pug",
            "obs": "builder, a cada 8s (alcance 7)",
            "icone": "img/magias/mystic-repulse.gif"
          },
          {
            "magia": "Double Jab",
            "palavras": "exori pug",
            "obs": "builder, a cada 4s, até juntar 5 de Harmony",
            "icone": "img/magias/double-jab.gif"
          },
          {
            "magia": "Devastating Knockout",
            "palavras": "exori gran nia",
            "obs": "spender com 5 de Harmony (a cada 8s, alcance 7)",
            "icone": "img/magias/devastating-knockout.gif"
          },
          {
            "magia": "Forceful Uppercut",
            "palavras": "exori gran pug",
            "obs": "sempre que sair da recarga (60s)",
            "icone": "img/magias/forceful-uppercut.gif"
          }
        ],
        "nota": "Físico 90%. Gaste a Harmony só com 5 pontos (+112% de dano). Abaixo do level 125 use Greater Tiger Clash (exori nia) como spender."
      },
      "nota": "Enquanto os Darks estiverem vivos o boss fica invulnerável."
    },
    "tokens": [
      {
        "nome": "Silver Token",
        "qtd": "0-2",
        "raridade": "semi-raro",
        "sprite": "img/itens/silver-token.gif"
      }
    ],
    "lootTiers": [
      {
        "raridade": "comum",
        "itens": [
          {
            "nome": "Platinum Coin",
            "qtd": "0-5",
            "sprite": "img/itens/platinum-coin.gif",
            "link": "https://www.tibiawiki.com.br/Platinum_Coin"
          },
          {
            "nome": "Crystal Coin",
            "qtd": "0-2",
            "sprite": "img/itens/crystal-coin.gif",
            "link": "https://www.tibiawiki.com.br/Crystal_Coin"
          },
          {
            "nome": "Supreme Health Potion",
            "qtd": "0-6",
            "sprite": "img/itens/supreme-health-potion.gif",
            "link": "https://www.tibiawiki.com.br/Supreme_Health_Potion"
          },
          {
            "nome": "Ultimate Mana Potion",
            "qtd": "0-20",
            "sprite": "img/itens/ultimate-mana-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Mana_Potion"
          },
          {
            "nome": "Ultimate Spirit Potion",
            "qtd": "0-20",
            "sprite": "img/itens/ultimate-spirit-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Spirit_Potion"
          },
          {
            "nome": "Bullseye Potion",
            "qtd": "0-10",
            "sprite": "img/itens/bullseye-potion.gif",
            "link": "https://www.tibiawiki.com.br/Bullseye_Potion"
          },
          {
            "nome": "Mastermind Potion",
            "qtd": "0-10",
            "sprite": "img/itens/mastermind-potion.gif",
            "link": "https://www.tibiawiki.com.br/Mastermind_Potion"
          },
          {
            "nome": "Transcendence Potion",
            "qtd": "0-19",
            "sprite": "img/itens/transcendence-potion.gif",
            "link": "https://www.tibiawiki.com.br/Transcendence_Potion"
          }
        ]
      },
      {
        "raridade": "semi-raro",
        "itens": [
          {
            "nome": "Ancient Liche Bone",
            "qtd": null,
            "sprite": "img/itens/ancient-liche-bone.gif",
            "link": "https://www.tibiawiki.com.br/Ancient_Liche_Bone"
          },
          {
            "nome": "Blue Gem",
            "qtd": null,
            "sprite": "img/itens/blue-gem.gif",
            "link": "https://www.tibiawiki.com.br/Blue_Gem"
          },
          {
            "nome": "Collar of Blue Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-blue-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Blue_Plasma"
          },
          {
            "nome": "Collar of Red Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-red-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Red_Plasma"
          },
          {
            "nome": "Gold Ingot",
            "qtd": null,
            "sprite": "img/itens/gold-ingot.gif",
            "link": "https://www.tibiawiki.com.br/Gold_Ingot"
          },
          {
            "nome": "Green Gem",
            "qtd": null,
            "sprite": "img/itens/green-gem.gif",
            "link": "https://www.tibiawiki.com.br/Green_Gem"
          },
          {
            "nome": "Magic Sulphur",
            "qtd": null,
            "sprite": "img/itens/magic-sulphur.gif",
            "link": "https://www.tibiawiki.com.br/Magic_Sulphur"
          },
          {
            "nome": "Red Gem",
            "qtd": null,
            "sprite": "img/itens/red-gem.gif",
            "link": "https://www.tibiawiki.com.br/Red_Gem"
          },
          {
            "nome": "Ring of Blue Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-blue-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Blue_Plasma"
          },
          {
            "nome": "Ring of Green Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-green-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Green_Plasma"
          },
          {
            "nome": "Ring of Red Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-red-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Red_Plasma"
          },
          {
            "nome": "Skull Staff",
            "qtd": null,
            "sprite": "img/itens/skull-staff.gif",
            "link": "https://www.tibiawiki.com.br/Skull_Staff"
          },
          {
            "nome": "Yellow Gem",
            "qtd": null,
            "sprite": "img/itens/yellow-gem.gif",
            "link": "https://www.tibiawiki.com.br/Yellow_Gem"
          },
          {
            "nome": "Young Lich Worm",
            "qtd": null,
            "sprite": "img/itens/young-lich-worm.gif",
            "link": "https://www.tibiawiki.com.br/Young_Lich_Worm"
          }
        ]
      },
      {
        "raridade": "raro",
        "itens": [
          {
            "nome": "Bear Skin",
            "qtd": null,
            "sprite": "img/itens/bear-skin.gif",
            "link": "https://www.tibiawiki.com.br/Bear_Skin"
          },
          {
            "nome": "Embrace of Nature",
            "qtd": null,
            "sprite": "img/itens/embrace-of-nature.gif",
            "link": "https://www.tibiawiki.com.br/Embrace_of_Nature"
          },
          {
            "nome": "Giant Emerald",
            "qtd": null,
            "sprite": "img/itens/giant-emerald.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Emerald"
          },
          {
            "nome": "Giant Ruby",
            "qtd": null,
            "sprite": "img/itens/giant-ruby.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Ruby"
          },
          {
            "nome": "Giant Sapphire",
            "qtd": null,
            "sprite": "img/itens/giant-sapphire.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Sapphire"
          },
          {
            "nome": "Medal of Valiance",
            "qtd": null,
            "sprite": "img/itens/medal-of-valiance.gif",
            "link": "https://www.tibiawiki.com.br/Medal_of_Valiance"
          },
          {
            "nome": "Terra Helmet",
            "qtd": null,
            "sprite": "img/itens/terra-helmet.gif",
            "link": "https://www.tibiawiki.com.br/Terra_Helmet"
          }
        ]
      },
      {
        "raridade": "muito raro",
        "itens": [
          {
            "nome": "Final Judgement",
            "qtd": null,
            "sprite": "img/itens/final-judgement.gif",
            "link": "https://www.tibiawiki.com.br/Final_Judgement"
          }
        ]
      }
    ],
    "lootStatus": "ok",
    "mecanica": [
      "Começa com 5 [[Soulless Minion|Soulless Minions]], que curam o boss e os summons Dark: um jogador leva os minions para longe. Eles batem pouco.",
      "Depois de um tempo o boss fica invulnerável e invoca um Dark por jogador, conforme a vocação: [[Dark Knight]], [[Dark Paladin]], [[Dark Sorcerer]], [[Dark Druid]], [[Dark Merudri]].",
      "Mate os Darks: cada um vira Good Remains da vocação ([[Good Remains of a Knight|Knight]], [[Good Remains of a Paladin|Paladin]], [[Good Remains of a Sorcerer|Sorcerer]], [[Good Remains of a Druid|Druid]], [[Good Remains of a Merudri|Monk]]). Cada jogador usa o da sua vocação no boss para ele voltar a tomar dano.",
      "O maior dano é o Fire Wave do boss: o blocker fica na diagonal. Dá para trapar com [[Demon Skeleton|Demon Skeletons]] num canto."
    ],
    "spritesMecanica": {
      "Soulless Minion": "img/criaturas/soulless-minion.gif",
      "Dark Knight": "img/criaturas/dark-knight.gif",
      "Dark Paladin": "img/criaturas/dark-paladin.gif",
      "Dark Sorcerer": "img/criaturas/dark-sorcerer.gif",
      "Dark Druid": "img/criaturas/dark-druid.gif",
      "Dark Merudri": "img/criaturas/dark-merudri.gif",
      "Good Remains of a Knight": "img/criaturas/good-remains-of-a-knight.gif",
      "Good Remains of a Paladin": "img/criaturas/good-remains-of-a-paladin.gif",
      "Good Remains of a Sorcerer": "img/criaturas/good-remains-of-a-sorcerer.gif",
      "Good Remains of a Druid": "img/criaturas/good-remains-of-a-druid.gif",
      "Good Remains of a Merudri": "img/criaturas/good-remains-of-a-merudri.gif",
      "Demon Skeleton": "img/criaturas/demon-skeleton.gif"
    },
    "fases": [
      {
        "nome": "Soulless Minion",
        "dica": "Cura o boss e os Darks: um jogador leva para longe. Imune a terra e death.",
        "hp": "10000",
        "elementos": {
          "fisico": "100%",
          "terra": "0%",
          "fogo": "110%",
          "morte": "0%",
          "energia": "100%",
          "sagrado": "105%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/soulless-minion.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0,
        "elemento": {
          "sorcerer": [
            "fogo"
          ],
          "druid": [
            "gelo"
          ],
          "paladin": [
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Dark Knight",
        "dica": "Mate e use o pó (Good Remains) se você for knight.",
        "hp": "7900",
        "elementos": {
          "fisico": "100%",
          "terra": "0%",
          "fogo": "100%",
          "morte": "0%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/dark-knight.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo"
          ],
          "druid": [
            "gelo"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Dark Paladin",
        "dica": "Mate e use o pó se você for paladin.",
        "hp": "6500",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/dark-paladin.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo",
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Dark Sorcerer",
        "dica": "Mate e use o pó se você for sorcerer.",
        "hp": "6500",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/dark-sorcerer.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo",
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Dark Druid",
        "dica": "Mate e use o pó se você for druid.",
        "hp": "6000",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "0%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/dark-druid.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo"
          ],
          "druid": [
            "gelo",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Dark Merudri",
        "dica": "Mate e use o pó se você for monk.",
        "hp": "6500",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/dark-merudri.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo",
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      }
    ],
    "link": "https://www.tibiawiki.com.br/Count_Vlarkorth",
    "pendencias": []
  },
  {
    "nome": "Sir Baeloc",
    "local": "Darashia",
    "grupo": "Grave Danger",
    "subgrupo": "Diários",
    "ordem": 4,
    "quest": "Grave Danger Quest",
    "level": {
      "quest": "Grave Danger Quest",
      "link": "https://www.tibiawiki.com.br/Grave_Danger_Quest",
      "minimo": "250",
      "recomendado": "350+"
    },
    "hp": "150000",
    "xp": "55000",
    "tipo": "archfoe",
    "sprite": "img/bosses/sir-baeloc.gif",
    "elementos": {
      "fisico": "100%",
      "terra": "-20%",
      "fogo": "110%",
      "morte": "-300%",
      "energia": "97%",
      "sagrado": "100%",
      "gelo": "90%",
      "cura": "100%"
    },
    "imunidades": [
      "Invisibility",
      "Paralysis"
    ],
    "podeSerPuxado": false,
    "empurraObjetos": true,
    "passaPor": [
      "Fire",
      "Energy",
      "Poison"
    ],
    "ataque": {
      "sorcerer": {
        "elementos": [
          "fogo"
        ],
        "alternativas": []
      },
      "druid": {
        "elementos": [
          "gelo"
        ],
        "alternativas": []
      },
      "paladin": {
        "elementos": [
          "sagrado"
        ],
        "alternativas": [
          "fisico"
        ]
      },
      "knight": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      },
      "monk": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      }
    },
    "defesa": {
      "elementos": [],
      "melee": true,
      "nota": "A wiki não registra o elemento do dano; o perigo é o Lesser Hex (menos cura). Proteção física no blocker."
    },
    "rotacao": {
      "knight": {
        "passos": [
          {
            "magia": "Annihilation",
            "palavras": "exori gran ico",
            "obs": "sempre que sair da recarga (30s)",
            "icone": "img/magias/annihilation.gif"
          },
          {
            "magia": "Fierce Berserk",
            "palavras": "exori gran",
            "obs": "a cada 6s",
            "icone": "img/magias/fierce-berserk.gif"
          },
          {
            "magia": "Front Sweep",
            "palavras": "exori min",
            "obs": "a cada 6s, alternando com o Fierce Berserk",
            "icone": "img/magias/front-sweep.gif"
          },
          {
            "magia": "Brutal Strike",
            "palavras": "exori ico",
            "obs": "nos intervalos (ou Shield Bash, exori ico scu, se usar escudo)",
            "icone": "img/magias/brutal-strike.gif"
          }
        ],
        "nota": "Físico 100%. Stance: Blood Rage para dano; Protector se for o blocker."
      },
      "paladin": {
        "passos": [
          {
            "magia": "Divine Grenade",
            "palavras": "exevo tempo mas san",
            "obs": "a cada 26s (level 300+)",
            "icone": "img/magias/divine-grenade.gif"
          },
          {
            "magia": "Divine Barrage",
            "palavras": "exori dir san",
            "obs": "a cada 4s",
            "icone": "img/magias/divine-barrage.gif"
          },
          {
            "magia": "Ethereal Barrage",
            "palavras": "exori dir moe",
            "obs": "a cada 4s, alternando com a Divine Barrage",
            "icone": "img/magias/ethereal-barrage.gif"
          },
          {
            "magia": "Divine Missile",
            "palavras": "exori san",
            "obs": "nos intervalos",
            "icone": "img/magias/divine-missile.gif"
          }
        ],
        "nota": "Holy 100%, físico 100%. Ataque básico com arma o tempo todo. Stance: Sharpshooter."
      },
      "sorcerer": {
        "passos": [
          {
            "magia": "Ultimate Energy Strike",
            "palavras": "exori max vis",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-energy-strike.gif"
          },
          {
            "magia": "Great Energy Beam",
            "palavras": "exevo gran vis lux",
            "obs": "a cada 6s, com o boss na reta (wave/beam)",
            "icone": "img/magias/great-energy-beam.gif"
          },
          {
            "magia": "Energy Wave",
            "palavras": "exevo vis hur",
            "obs": "a cada 8s, com o boss na reta (wave/beam)",
            "icone": "img/magias/energy-wave.gif"
          },
          {
            "magia": "Strong Energy Strike",
            "palavras": "exori gran vis",
            "obs": "a cada 8s",
            "icone": "img/magias/strong-energy-strike.gif"
          },
          {
            "magia": "Lightning",
            "palavras": "exori amp vis",
            "obs": "a cada 8s; pula para mais 2 alvos",
            "icone": "img/magias/lightning.gif"
          },
          {
            "magia": "Energy Strike",
            "palavras": "exori vis",
            "obs": "nos intervalos; sem SD neste boss",
            "icone": "img/magias/energy-strike.gif"
          }
        ],
        "nota": "Elemento: energia (97%); escolhido pelas waves/beams mais fortes. Stance: Master of Thunder. Nunca use death (SD): o boss se cura."
      },
      "druid": {
        "passos": [
          {
            "magia": "Ultimate Ice Strike",
            "palavras": "exori max frigo",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-ice-strike.gif"
          },
          {
            "magia": "Strong Ice Wave",
            "palavras": "exevo gran frigo hur",
            "obs": "a cada 4s, com o boss na reta (wave/beam)",
            "icone": "img/magias/strong-ice-wave.gif"
          },
          {
            "magia": "Strong Ice Strike",
            "palavras": "exori gran frigo",
            "obs": "a cada 8s",
            "icone": "img/magias/strong-ice-strike.gif"
          },
          {
            "magia": "Forked Glacier",
            "palavras": "exevo fur frigo",
            "obs": "a cada 6s; pula para até 6 alvos",
            "icone": "img/magias/forked-glacier.gif"
          },
          {
            "magia": "Ice Strike",
            "palavras": "exori frigo",
            "obs": "nos intervalos; sem SD neste boss",
            "icone": "img/magias/ice-strike.gif"
          }
        ],
        "nota": "Elemento: gelo (90%). Stance: Elemental Synthesis. Nunca use death (SD): o boss se cura."
      },
      "monk": {
        "passos": [
          {
            "magia": "Thousand Fist Blows",
            "palavras": "exori mas amp pug",
            "obs": "builder, a cada 8s",
            "icone": "img/magias/thousand-fist-blows.gif"
          },
          {
            "magia": "Mystic Repulse",
            "palavras": "exori amp pug",
            "obs": "builder, a cada 8s (alcance 7)",
            "icone": "img/magias/mystic-repulse.gif"
          },
          {
            "magia": "Double Jab",
            "palavras": "exori pug",
            "obs": "builder, a cada 4s, até juntar 5 de Harmony",
            "icone": "img/magias/double-jab.gif"
          },
          {
            "magia": "Devastating Knockout",
            "palavras": "exori gran nia",
            "obs": "spender com 5 de Harmony (a cada 8s, alcance 7)",
            "icone": "img/magias/devastating-knockout.gif"
          },
          {
            "magia": "Forceful Uppercut",
            "palavras": "exori gran pug",
            "obs": "sempre que sair da recarga (60s)",
            "icone": "img/magias/forceful-uppercut.gif"
          }
        ],
        "nota": "Físico 100%. Gaste a Harmony só com 5 pontos (+112% de dano). Abaixo do level 125 use Greater Tiger Clash (exori nia) como spender."
      }
    },
    "tokens": [
      {
        "nome": "Silver Token",
        "qtd": "0-2",
        "raridade": "semi-raro",
        "sprite": "img/itens/silver-token.gif"
      }
    ],
    "lootTiers": [
      {
        "raridade": "comum",
        "itens": [
          {
            "nome": "Platinum Coin",
            "qtd": "0-5",
            "sprite": "img/itens/platinum-coin.gif",
            "link": "https://www.tibiawiki.com.br/Platinum_Coin"
          },
          {
            "nome": "Crystal Coin",
            "qtd": "0-2",
            "sprite": "img/itens/crystal-coin.gif",
            "link": "https://www.tibiawiki.com.br/Crystal_Coin"
          },
          {
            "nome": "Supreme Health Potion",
            "qtd": "0-20",
            "sprite": "img/itens/supreme-health-potion.gif",
            "link": "https://www.tibiawiki.com.br/Supreme_Health_Potion"
          },
          {
            "nome": "Ultimate Mana Potion",
            "qtd": "0-14",
            "sprite": "img/itens/ultimate-mana-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Mana_Potion"
          },
          {
            "nome": "Ultimate Spirit Potion",
            "qtd": "0-14",
            "sprite": "img/itens/ultimate-spirit-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Spirit_Potion"
          },
          {
            "nome": "Berserk Potion",
            "qtd": "0-10",
            "sprite": "img/itens/berserk-potion.gif",
            "link": "https://www.tibiawiki.com.br/Berserk_Potion"
          },
          {
            "nome": "Mastermind Potion",
            "qtd": "0-10",
            "sprite": "img/itens/mastermind-potion.gif",
            "link": "https://www.tibiawiki.com.br/Mastermind_Potion"
          },
          {
            "nome": "Piece of Hell Steel",
            "qtd": "0-4",
            "sprite": "img/itens/piece-of-hell-steel.gif",
            "link": "https://www.tibiawiki.com.br/Piece_of_Hell_Steel"
          }
        ]
      },
      {
        "raridade": "semi-raro",
        "itens": [
          {
            "nome": "Collar of Blue Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-blue-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Blue_Plasma"
          },
          {
            "nome": "Collar of Red Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-red-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Red_Plasma"
          },
          {
            "nome": "Gold Ingot",
            "qtd": null,
            "sprite": "img/itens/gold-ingot.gif",
            "link": "https://www.tibiawiki.com.br/Gold_Ingot"
          },
          {
            "nome": "Knight Legs",
            "qtd": null,
            "sprite": "img/itens/knight-legs.gif",
            "link": "https://www.tibiawiki.com.br/Knight_Legs"
          },
          {
            "nome": "Red Gem",
            "qtd": null,
            "sprite": "img/itens/red-gem.gif",
            "link": "https://www.tibiawiki.com.br/Red_Gem"
          },
          {
            "nome": "Ring of Blue Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-blue-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Blue_Plasma"
          },
          {
            "nome": "Ring of Red Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-red-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Red_Plasma"
          },
          {
            "nome": "Skull Staff",
            "qtd": null,
            "sprite": "img/itens/skull-staff.gif",
            "link": "https://www.tibiawiki.com.br/Skull_Staff"
          },
          {
            "nome": "Violet Gem",
            "qtd": null,
            "sprite": "img/itens/violet-gem.gif",
            "link": "https://www.tibiawiki.com.br/Violet_Gem"
          },
          {
            "nome": "Yellow Gem",
            "qtd": null,
            "sprite": "img/itens/yellow-gem.gif",
            "link": "https://www.tibiawiki.com.br/Yellow_Gem"
          },
          {
            "nome": "Young Lich Worm",
            "qtd": null,
            "sprite": "img/itens/young-lich-worm.gif",
            "link": "https://www.tibiawiki.com.br/Young_Lich_Worm"
          }
        ]
      },
      {
        "raridade": "raro",
        "itens": [
          {
            "nome": "Bear Skin",
            "qtd": null,
            "sprite": "img/itens/bear-skin.gif",
            "link": "https://www.tibiawiki.com.br/Bear_Skin"
          },
          {
            "nome": "Embrace of Nature",
            "qtd": null,
            "sprite": "img/itens/embrace-of-nature.gif",
            "link": "https://www.tibiawiki.com.br/Embrace_of_Nature"
          },
          {
            "nome": "Terra Helmet",
            "qtd": null,
            "sprite": "img/itens/terra-helmet.gif",
            "link": "https://www.tibiawiki.com.br/Terra_Helmet"
          },
          {
            "nome": "Signet Ring (Valioso)",
            "qtd": null,
            "sprite": "img/itens/signet-ring-valioso.gif",
            "link": "https://www.tibiawiki.com.br/Signet_Ring_%28Valioso%29"
          }
        ]
      },
      {
        "raridade": "muito raro",
        "itens": [
          {
            "nome": "Final Judgement",
            "qtd": null,
            "sprite": "img/itens/final-judgement.gif",
            "link": "https://www.tibiawiki.com.br/Final_Judgement"
          }
        ]
      }
    ],
    "lootStatus": "ok",
    "mecanica": [
      "Os dois aplicam Lesser Hex (cura recebida bem menor): blockers de olho na barra de status.",
      "[[Sir Nictros]] sai primeiro com [[Squire Of Nictros|Squires of Nictros]]; com ~60% de vida ele recua e entra o [[Sir Baeloc]] com [[Retainer Of Baeloc|Retainers of Baeloc]]. Matem os summons ou um 2º knight os segura longe.",
      "Com Baeloc em ~60%, o Nictros volta e os dois lutam juntos: use área nos dois e mantenha a vida deles parecida. Se um ficar bem mais baixo, ele cura ~18.000.",
      "Só o Sir Baeloc dá loot. Nessa fase o Lesser Hex vem mais vezes e o dano aumenta."
    ],
    "spritesMecanica": {
      "Sir Nictros": "img/criaturas/sir-nictros.gif",
      "Squire Of Nictros": "img/criaturas/squire-of-nictros.gif",
      "Sir Baeloc": "img/criaturas/sir-baeloc.gif",
      "Retainer Of Baeloc": "img/criaturas/retainer-of-baeloc.gif"
    },
    "fases": [
      {
        "nome": "Sir Nictros",
        "dica": "O irmão: mantenha a vida dos dois parecida (senão o mais fraco cura ~18k). Cura com death.",
        "hp": "150000",
        "elementos": {
          "fisico": "100%",
          "terra": "20%",
          "fogo": "110%",
          "morte": "-300%",
          "energia": "97%",
          "sagrado": "100%",
          "gelo": "90%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/sir-nictros.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 1,
        "elemento": {
          "sorcerer": [
            "fogo"
          ],
          "druid": [
            "gelo"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Squire Of Nictros",
        "dica": "Summon do Nictros: matem sempre (risco de Lesser Hex).",
        "hp": "5500",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/squire-of-nictros.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo",
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Retainer Of Baeloc",
        "dica": "Summon do Baeloc: matem ou um 2º knight segura longe.",
        "hp": "5500",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/retainer-of-baeloc.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo",
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      }
    ],
    "link": "https://www.tibiawiki.com.br/Sir_Baeloc",
    "pendencias": []
  },
  {
    "nome": "Sir Nictros",
    "local": "Darashia",
    "grupo": "Grave Danger",
    "subgrupo": "Diários",
    "ordem": 5,
    "quest": "Grave Danger Quest",
    "level": {
      "quest": "Grave Danger Quest",
      "link": "https://www.tibiawiki.com.br/Grave_Danger_Quest",
      "minimo": "250",
      "recomendado": "350+"
    },
    "hp": "150000",
    "xp": "55000",
    "tipo": "archfoe",
    "sprite": "img/bosses/sir-nictros.gif",
    "elementos": {
      "fisico": "100%",
      "terra": "20%",
      "fogo": "110%",
      "morte": "-300%",
      "energia": "97%",
      "sagrado": "100%",
      "gelo": "90%",
      "cura": "100%"
    },
    "imunidades": [
      "Invisibility",
      "Paralysis"
    ],
    "podeSerPuxado": false,
    "empurraObjetos": true,
    "passaPor": [
      "Fire",
      "Energy",
      "Poison"
    ],
    "ataque": {
      "sorcerer": {
        "elementos": [
          "fogo"
        ],
        "alternativas": []
      },
      "druid": {
        "elementos": [
          "gelo"
        ],
        "alternativas": []
      },
      "paladin": {
        "elementos": [
          "sagrado"
        ],
        "alternativas": [
          "fisico"
        ]
      },
      "knight": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      },
      "monk": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      }
    },
    "defesa": {
      "elementos": [],
      "melee": true,
      "nota": "A wiki não registra o elemento do dano; o perigo é o Lesser Hex (menos cura). Proteção física no blocker."
    },
    "rotacao": {
      "knight": {
        "passos": [
          {
            "magia": "Annihilation",
            "palavras": "exori gran ico",
            "obs": "sempre que sair da recarga (30s)",
            "icone": "img/magias/annihilation.gif"
          },
          {
            "magia": "Fierce Berserk",
            "palavras": "exori gran",
            "obs": "a cada 6s",
            "icone": "img/magias/fierce-berserk.gif"
          },
          {
            "magia": "Front Sweep",
            "palavras": "exori min",
            "obs": "a cada 6s, alternando com o Fierce Berserk",
            "icone": "img/magias/front-sweep.gif"
          },
          {
            "magia": "Brutal Strike",
            "palavras": "exori ico",
            "obs": "nos intervalos (ou Shield Bash, exori ico scu, se usar escudo)",
            "icone": "img/magias/brutal-strike.gif"
          }
        ],
        "nota": "Físico 100%. Stance: Blood Rage para dano; Protector se for o blocker."
      },
      "paladin": {
        "passos": [
          {
            "magia": "Divine Grenade",
            "palavras": "exevo tempo mas san",
            "obs": "a cada 26s (level 300+)",
            "icone": "img/magias/divine-grenade.gif"
          },
          {
            "magia": "Divine Barrage",
            "palavras": "exori dir san",
            "obs": "a cada 4s",
            "icone": "img/magias/divine-barrage.gif"
          },
          {
            "magia": "Ethereal Barrage",
            "palavras": "exori dir moe",
            "obs": "a cada 4s, alternando com a Divine Barrage",
            "icone": "img/magias/ethereal-barrage.gif"
          },
          {
            "magia": "Divine Missile",
            "palavras": "exori san",
            "obs": "nos intervalos",
            "icone": "img/magias/divine-missile.gif"
          }
        ],
        "nota": "Holy 100%, físico 100%. Ataque básico com arma o tempo todo. Stance: Sharpshooter."
      },
      "sorcerer": {
        "passos": [
          {
            "magia": "Ultimate Energy Strike",
            "palavras": "exori max vis",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-energy-strike.gif"
          },
          {
            "magia": "Great Energy Beam",
            "palavras": "exevo gran vis lux",
            "obs": "a cada 6s, com o boss na reta (wave/beam)",
            "icone": "img/magias/great-energy-beam.gif"
          },
          {
            "magia": "Energy Wave",
            "palavras": "exevo vis hur",
            "obs": "a cada 8s, com o boss na reta (wave/beam)",
            "icone": "img/magias/energy-wave.gif"
          },
          {
            "magia": "Strong Energy Strike",
            "palavras": "exori gran vis",
            "obs": "a cada 8s",
            "icone": "img/magias/strong-energy-strike.gif"
          },
          {
            "magia": "Lightning",
            "palavras": "exori amp vis",
            "obs": "a cada 8s; pula para mais 2 alvos",
            "icone": "img/magias/lightning.gif"
          },
          {
            "magia": "Energy Strike",
            "palavras": "exori vis",
            "obs": "nos intervalos; sem SD neste boss",
            "icone": "img/magias/energy-strike.gif"
          }
        ],
        "nota": "Elemento: energia (97%); escolhido pelas waves/beams mais fortes. Stance: Master of Thunder. Nunca use death (SD): o boss se cura."
      },
      "druid": {
        "passos": [
          {
            "magia": "Ultimate Ice Strike",
            "palavras": "exori max frigo",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-ice-strike.gif"
          },
          {
            "magia": "Strong Ice Wave",
            "palavras": "exevo gran frigo hur",
            "obs": "a cada 4s, com o boss na reta (wave/beam)",
            "icone": "img/magias/strong-ice-wave.gif"
          },
          {
            "magia": "Strong Ice Strike",
            "palavras": "exori gran frigo",
            "obs": "a cada 8s",
            "icone": "img/magias/strong-ice-strike.gif"
          },
          {
            "magia": "Forked Glacier",
            "palavras": "exevo fur frigo",
            "obs": "a cada 6s; pula para até 6 alvos",
            "icone": "img/magias/forked-glacier.gif"
          },
          {
            "magia": "Ice Strike",
            "palavras": "exori frigo",
            "obs": "nos intervalos; sem SD neste boss",
            "icone": "img/magias/ice-strike.gif"
          }
        ],
        "nota": "Elemento: gelo (90%). Stance: Elemental Synthesis. Nunca use death (SD): o boss se cura."
      },
      "monk": {
        "passos": [
          {
            "magia": "Thousand Fist Blows",
            "palavras": "exori mas amp pug",
            "obs": "builder, a cada 8s",
            "icone": "img/magias/thousand-fist-blows.gif"
          },
          {
            "magia": "Mystic Repulse",
            "palavras": "exori amp pug",
            "obs": "builder, a cada 8s (alcance 7)",
            "icone": "img/magias/mystic-repulse.gif"
          },
          {
            "magia": "Double Jab",
            "palavras": "exori pug",
            "obs": "builder, a cada 4s, até juntar 5 de Harmony",
            "icone": "img/magias/double-jab.gif"
          },
          {
            "magia": "Devastating Knockout",
            "palavras": "exori gran nia",
            "obs": "spender com 5 de Harmony (a cada 8s, alcance 7)",
            "icone": "img/magias/devastating-knockout.gif"
          },
          {
            "magia": "Forceful Uppercut",
            "palavras": "exori gran pug",
            "obs": "sempre que sair da recarga (60s)",
            "icone": "img/magias/forceful-uppercut.gif"
          }
        ],
        "nota": "Físico 100%. Gaste a Harmony só com 5 pontos (+112% de dano). Abaixo do level 125 use Greater Tiger Clash (exori nia) como spender."
      }
    },
    "tokens": [],
    "lootTiers": [
      {
        "raridade": "semi-raro",
        "itens": [
          {
            "nome": "Death Oyoroi",
            "qtd": null,
            "sprite": "img/itens/death-oyoroi.gif",
            "link": "https://www.tibiawiki.com.br/Death_Oyoroi"
          }
        ]
      }
    ],
    "lootStatus": "ok",
    "mecanica": [
      "Os dois aplicam Lesser Hex (cura recebida bem menor): blockers de olho na barra de status.",
      "[[Sir Nictros]] sai primeiro com [[Squire Of Nictros|Squires of Nictros]]; com ~60% de vida ele recua e entra o [[Sir Baeloc]] com [[Retainer Of Baeloc|Retainers of Baeloc]]. Matem os summons ou um 2º knight os segura longe.",
      "Com Baeloc em ~60%, o Nictros volta e os dois lutam juntos: use área nos dois e mantenha a vida deles parecida. Se um ficar bem mais baixo, ele cura ~18.000.",
      "Só o Sir Baeloc dá loot. Nessa fase o Lesser Hex vem mais vezes e o dano aumenta."
    ],
    "spritesMecanica": {
      "Sir Nictros": "img/criaturas/sir-nictros.gif",
      "Squire Of Nictros": "img/criaturas/squire-of-nictros.gif",
      "Sir Baeloc": "img/criaturas/sir-baeloc.gif",
      "Retainer Of Baeloc": "img/criaturas/retainer-of-baeloc.gif"
    },
    "fases": [
      {
        "nome": "Sir Baeloc",
        "dica": "O irmão (é ele que dá loot): mantenha a vida dos dois parecida. Cura com terra e death.",
        "hp": "150000",
        "elementos": {
          "fisico": "100%",
          "terra": "-20%",
          "fogo": "110%",
          "morte": "-300%",
          "energia": "97%",
          "sagrado": "100%",
          "gelo": "90%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/sir-baeloc.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 1,
        "elemento": {
          "sorcerer": [
            "fogo"
          ],
          "druid": [
            "gelo"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Squire Of Nictros",
        "dica": "Summon do Nictros: matem sempre (risco de Lesser Hex).",
        "hp": "5500",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/squire-of-nictros.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo",
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Retainer Of Baeloc",
        "dica": "Summon do Baeloc: matem ou um 2º knight segura longe.",
        "hp": "5500",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/retainer-of-baeloc.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo",
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      }
    ],
    "link": "https://www.tibiawiki.com.br/Sir_Nictros",
    "pendencias": []
  },
  {
    "nome": "Lord Azaram",
    "local": "Carlin (Ghostlands)",
    "grupo": "Grave Danger",
    "subgrupo": "Diários",
    "ordem": 6,
    "quest": "Grave Danger Quest",
    "level": {
      "quest": "Grave Danger Quest",
      "link": "https://www.tibiawiki.com.br/Grave_Danger_Quest",
      "minimo": "250",
      "recomendado": "350+"
    },
    "hp": "300000",
    "xp": "55000",
    "tipo": "archfoe",
    "sprite": "img/bosses/lord-azaram.gif",
    "elementos": {
      "fisico": "100%",
      "terra": "-260%",
      "fogo": "110%",
      "morte": "100%",
      "energia": "107%",
      "sagrado": "100%",
      "gelo": "110%",
      "cura": "100%"
    },
    "imunidades": [
      "Invisibility",
      "Paralysis"
    ],
    "podeSerPuxado": false,
    "empurraObjetos": true,
    "passaPor": [
      "Fire",
      "Energy",
      "Poison"
    ],
    "rotacaoAjustes": {
      "nota": "SD só no boss: os Condensed Sins refletem death."
    },
    "ataque": {
      "sorcerer": {
        "elementos": [
          "fogo"
        ],
        "alternativas": []
      },
      "druid": {
        "elementos": [
          "gelo"
        ],
        "alternativas": []
      },
      "paladin": {
        "elementos": [
          "sagrado"
        ],
        "alternativas": [
          "fisico"
        ]
      },
      "knight": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      },
      "monk": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      }
    },
    "defesa": {
      "elementos": [
        "terra"
      ],
      "melee": true,
      "nota": "O boss bate físico e terra; os Condensed Sins também machucam o time."
    },
    "rotacao": {
      "knight": {
        "passos": [
          {
            "magia": "Annihilation",
            "palavras": "exori gran ico",
            "obs": "sempre que sair da recarga (30s)",
            "icone": "img/magias/annihilation.gif"
          },
          {
            "magia": "Fierce Berserk",
            "palavras": "exori gran",
            "obs": "a cada 6s",
            "icone": "img/magias/fierce-berserk.gif"
          },
          {
            "magia": "Front Sweep",
            "palavras": "exori min",
            "obs": "a cada 6s, alternando com o Fierce Berserk",
            "icone": "img/magias/front-sweep.gif"
          },
          {
            "magia": "Brutal Strike",
            "palavras": "exori ico",
            "obs": "nos intervalos (ou Shield Bash, exori ico scu, se usar escudo)",
            "icone": "img/magias/brutal-strike.gif"
          }
        ],
        "nota": "Físico 100%. Stance: Blood Rage para dano; Protector se for o blocker."
      },
      "paladin": {
        "passos": [
          {
            "magia": "Divine Grenade",
            "palavras": "exevo tempo mas san",
            "obs": "a cada 26s (level 300+)",
            "icone": "img/magias/divine-grenade.gif"
          },
          {
            "magia": "Divine Barrage",
            "palavras": "exori dir san",
            "obs": "a cada 4s",
            "icone": "img/magias/divine-barrage.gif"
          },
          {
            "magia": "Ethereal Barrage",
            "palavras": "exori dir moe",
            "obs": "a cada 4s, alternando com a Divine Barrage",
            "icone": "img/magias/ethereal-barrage.gif"
          },
          {
            "magia": "Divine Missile",
            "palavras": "exori san",
            "obs": "nos intervalos",
            "icone": "img/magias/divine-missile.gif"
          }
        ],
        "nota": "Holy 100%, físico 100%. Ataque básico com arma o tempo todo. Stance: Sharpshooter."
      },
      "sorcerer": {
        "passos": [
          {
            "magia": "Ultimate Energy Strike",
            "palavras": "exori max vis",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-energy-strike.gif"
          },
          {
            "magia": "Great Energy Beam",
            "palavras": "exevo gran vis lux",
            "obs": "a cada 6s, com o boss na reta (wave/beam)",
            "icone": "img/magias/great-energy-beam.gif"
          },
          {
            "magia": "Energy Wave",
            "palavras": "exevo vis hur",
            "obs": "a cada 8s, com o boss na reta (wave/beam)",
            "icone": "img/magias/energy-wave.gif"
          },
          {
            "magia": "Great Death Beam",
            "palavras": "exevo max mort",
            "obs": "a cada 6s, com o boss na reta (beam)",
            "icone": "img/magias/great-death-beam.gif"
          },
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "a cada 2s, sempre que nada mais forte estiver pronto",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Strong Energy Strike",
            "palavras": "exori gran vis",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/strong-energy-strike.gif"
          },
          {
            "magia": "Lightning",
            "palavras": "exori amp vis",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/lightning.gif"
          },
          {
            "magia": "Death Echo",
            "palavras": "exevo mort ora",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/death-echo.gif"
          }
        ],
        "nota": "Elemento: energia (107%); escolhido pelas waves/beams mais fortes. Stance: Master of Thunder."
      },
      "druid": {
        "passos": [
          {
            "magia": "Ultimate Ice Strike",
            "palavras": "exori max frigo",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-ice-strike.gif"
          },
          {
            "magia": "Strong Ice Wave",
            "palavras": "exevo gran frigo hur",
            "obs": "a cada 4s, com o boss na reta (wave/beam)",
            "icone": "img/magias/strong-ice-wave.gif"
          },
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "a cada 2s, sempre que nada mais forte estiver pronto",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Strong Ice Strike",
            "palavras": "exori gran frigo",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/strong-ice-strike.gif"
          },
          {
            "magia": "Forked Glacier",
            "palavras": "exevo fur frigo",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/forked-glacier.gif"
          }
        ],
        "nota": "Elemento: gelo (110%). Stance: Elemental Synthesis."
      },
      "monk": {
        "passos": [
          {
            "magia": "Thousand Fist Blows",
            "palavras": "exori mas amp pug",
            "obs": "builder, a cada 8s",
            "icone": "img/magias/thousand-fist-blows.gif"
          },
          {
            "magia": "Mystic Repulse",
            "palavras": "exori amp pug",
            "obs": "builder, a cada 8s (alcance 7)",
            "icone": "img/magias/mystic-repulse.gif"
          },
          {
            "magia": "Double Jab",
            "palavras": "exori pug",
            "obs": "builder, a cada 4s, até juntar 5 de Harmony",
            "icone": "img/magias/double-jab.gif"
          },
          {
            "magia": "Devastating Knockout",
            "palavras": "exori gran nia",
            "obs": "spender com 5 de Harmony (a cada 8s, alcance 7)",
            "icone": "img/magias/devastating-knockout.gif"
          },
          {
            "magia": "Forceful Uppercut",
            "palavras": "exori gran pug",
            "obs": "sempre que sair da recarga (60s)",
            "icone": "img/magias/forceful-uppercut.gif"
          }
        ],
        "nota": "Físico 100%. Gaste a Harmony só com 5 pontos (+112% de dano). Abaixo do level 125 use Greater Tiger Clash (exori nia) como spender."
      },
      "nota": "SD só no boss: os Condensed Sins refletem death."
    },
    "tokens": [
      {
        "nome": "Silver Token",
        "qtd": "0-2",
        "raridade": "semi-raro",
        "sprite": "img/itens/silver-token.gif"
      }
    ],
    "lootTiers": [
      {
        "raridade": "comum",
        "itens": [
          {
            "nome": "Platinum Coin",
            "qtd": "0-5",
            "sprite": "img/itens/platinum-coin.gif",
            "link": "https://www.tibiawiki.com.br/Platinum_Coin"
          },
          {
            "nome": "Supreme Health Potion",
            "qtd": "0-14",
            "sprite": "img/itens/supreme-health-potion.gif",
            "link": "https://www.tibiawiki.com.br/Supreme_Health_Potion"
          },
          {
            "nome": "Ultimate Mana Potion",
            "qtd": "0-6",
            "sprite": "img/itens/ultimate-mana-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Mana_Potion"
          },
          {
            "nome": "Ultimate Spirit Potion",
            "qtd": "0-20",
            "sprite": "img/itens/ultimate-spirit-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Spirit_Potion"
          },
          {
            "nome": "Berserk Potion",
            "qtd": "0-10",
            "sprite": "img/itens/berserk-potion.gif",
            "link": "https://www.tibiawiki.com.br/Berserk_Potion"
          },
          {
            "nome": "Bullseye Potion",
            "qtd": "0-10",
            "sprite": "img/itens/bullseye-potion.gif",
            "link": "https://www.tibiawiki.com.br/Bullseye_Potion"
          },
          {
            "nome": "Piece of Hell Steel",
            "qtd": "0-4",
            "sprite": "img/itens/piece-of-hell-steel.gif",
            "link": "https://www.tibiawiki.com.br/Piece_of_Hell_Steel"
          }
        ]
      },
      {
        "raridade": "semi-raro",
        "itens": [
          {
            "nome": "Blue Gem",
            "qtd": "0-2",
            "sprite": "img/itens/blue-gem.gif",
            "link": "https://www.tibiawiki.com.br/Blue_Gem"
          },
          {
            "nome": "Red Gem",
            "qtd": "0-2",
            "sprite": "img/itens/red-gem.gif",
            "link": "https://www.tibiawiki.com.br/Red_Gem"
          },
          {
            "nome": "Ancient Liche Bone",
            "qtd": null,
            "sprite": "img/itens/ancient-liche-bone.gif",
            "link": "https://www.tibiawiki.com.br/Ancient_Liche_Bone"
          },
          {
            "nome": "Collar of Blue Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-blue-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Blue_Plasma"
          },
          {
            "nome": "Collar of Green Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-green-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Green_Plasma"
          },
          {
            "nome": "Collar of Red Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-red-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Red_Plasma"
          },
          {
            "nome": "Giant Sapphire",
            "qtd": null,
            "sprite": "img/itens/giant-sapphire.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Sapphire"
          },
          {
            "nome": "Haunted Blade",
            "qtd": null,
            "sprite": "img/itens/haunted-blade.gif",
            "link": "https://www.tibiawiki.com.br/Haunted_Blade"
          },
          {
            "nome": "Huge Chunk of Crude Iron",
            "qtd": null,
            "sprite": "img/itens/huge-chunk-of-crude-iron.gif",
            "link": "https://www.tibiawiki.com.br/Huge_Chunk_of_Crude_Iron"
          },
          {
            "nome": "Knight Armor",
            "qtd": null,
            "sprite": "img/itens/knight-armor.gif",
            "link": "https://www.tibiawiki.com.br/Knight_Armor"
          },
          {
            "nome": "Ring of Green Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-green-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Green_Plasma"
          },
          {
            "nome": "Ring of Red Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-red-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Red_Plasma"
          },
          {
            "nome": "Violet Gem",
            "qtd": null,
            "sprite": "img/itens/violet-gem.gif",
            "link": "https://www.tibiawiki.com.br/Violet_Gem"
          },
          {
            "nome": "Yellow Gem",
            "qtd": null,
            "sprite": "img/itens/yellow-gem.gif",
            "link": "https://www.tibiawiki.com.br/Yellow_Gem"
          },
          {
            "nome": "Young Lich Worm",
            "qtd": null,
            "sprite": "img/itens/young-lich-worm.gif",
            "link": "https://www.tibiawiki.com.br/Young_Lich_Worm"
          }
        ]
      },
      {
        "raridade": "raro",
        "itens": [
          {
            "nome": "Bear Skin",
            "qtd": null,
            "sprite": "img/itens/bear-skin.gif",
            "link": "https://www.tibiawiki.com.br/Bear_Skin"
          },
          {
            "nome": "Embrace of Nature",
            "qtd": null,
            "sprite": "img/itens/embrace-of-nature.gif",
            "link": "https://www.tibiawiki.com.br/Embrace_of_Nature"
          },
          {
            "nome": "Noble Cape",
            "qtd": null,
            "sprite": "img/itens/noble-cape.gif",
            "link": "https://www.tibiawiki.com.br/Noble_Cape"
          },
          {
            "nome": "Terra Helmet",
            "qtd": null,
            "sprite": "img/itens/terra-helmet.gif",
            "link": "https://www.tibiawiki.com.br/Terra_Helmet"
          }
        ]
      },
      {
        "raridade": "muito raro",
        "itens": [
          {
            "nome": "Final Judgement",
            "qtd": null,
            "sprite": "img/itens/final-judgement.gif",
            "link": "https://www.tibiawiki.com.br/Final_Judgement"
          }
        ]
      }
    ],
    "lootStatus": "ok",
    "mecanica": [
      "Os [[Condensed Sin|Condensed Sins]] refletem death: mate-os com área, mas sem SD ou death beam neles.",
      "O boss aplica Lesser Hex (cura recebida cai ~pela metade): atenção à vida.",
      "Depois de um tempo ele vira [[Azaram's Soul]] e surgem [[Tainted Soul Splinter|Tainted Soul Splinters]]. Mate-os (viram Cleansed Soul Splinters) e passe a alma por cima deles para curá-la.",
      "São 3 curas para o Lord Azaram voltar. Nas primeiras, Mass Healing e UH ajudam a encher a alma. Repita o ciclo até matar."
    ],
    "spritesMecanica": {
      "Condensed Sin": "img/criaturas/condensed-sin.gif",
      "Azaram's Soul": "img/criaturas/azarams-soul.gif",
      "Tainted Soul Splinter": "img/criaturas/tainted-soul-splinter.gif"
    },
    "fases": [
      {
        "nome": "Condensed Sin",
        "dica": "Mate com área; reflete death: nada de SD ou death beam neles.",
        "hp": "3800",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/condensed-sin.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo",
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Azaram's Soul",
        "dica": "Forma imune: cure-a passando pelos Cleansed Soul Splinters (3 vezes).",
        "hp": "50000",
        "elementos": {
          "fisico": "0%",
          "terra": "0%",
          "fogo": "0%",
          "morte": "0%",
          "energia": "0%",
          "sagrado": "0%",
          "gelo": "0%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/azarams-soul.gif",
        "ataques": {
          "knight": [],
          "paladin": [],
          "sorcerer": [],
          "druid": [],
          "monk": []
        },
        "peso": 0,
        "elemento": {
          "sorcerer": [],
          "druid": [],
          "paladin": [],
          "knight": [],
          "monk": []
        }
      },
      {
        "nome": "Tainted Soul Splinter",
        "dica": "Mate (vira Cleansed Soul Splinter) para curar a alma. Death cura eles.",
        "hp": "3500",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "-50%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/tainted-soul-splinter.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo"
          ],
          "druid": [
            "gelo",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      }
    ],
    "link": "https://www.tibiawiki.com.br/Lord_Azaram",
    "pendencias": []
  },
  {
    "nome": "King Zelos",
    "local": "Isle of the Kings",
    "grupo": "Grave Danger",
    "subgrupo": "Last GD",
    "ordem": 7,
    "quest": "Grave Danger Quest",
    "level": {
      "quest": "Grave Danger Quest",
      "link": "https://www.tibiawiki.com.br/Grave_Danger_Quest",
      "minimo": "250",
      "recomendado": "350+"
    },
    "hp": "480000",
    "xp": "75000",
    "tipo": "archfoe",
    "sprite": "img/bosses/king-zelos.gif",
    "elementos": {
      "fisico": "100%",
      "terra": "100%",
      "fogo": "100%",
      "morte": "-100%",
      "energia": "100%",
      "sagrado": "100%",
      "gelo": "100%",
      "cura": "100%"
    },
    "imunidades": [
      "Invisibility",
      "Paralysis"
    ],
    "podeSerPuxado": false,
    "empurraObjetos": true,
    "passaPor": [
      "Fire",
      "Energy",
      "Poison"
    ],
    "rotacaoAjustes": {
      "nota": "A estratégia da wiki é fogo no rei (Fireball/GFB) e GFB/waves nos minibosses."
    },
    "ataque": {
      "sorcerer": {
        "elementos": [
          "fogo"
        ],
        "alternativas": []
      },
      "druid": {
        "elementos": [
          "gelo"
        ],
        "alternativas": []
      },
      "paladin": {
        "elementos": [
          "sagrado"
        ],
        "alternativas": [
          "fisico"
        ]
      },
      "knight": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      },
      "monk": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      }
    },
    "defesa": {
      "elementos": [
        "morte"
      ],
      "melee": true,
      "nota": "O rei bate físico forte (até ~2.700) e death; o ataque em reta aplica Greater Hex."
    },
    "rotacao": {
      "knight": {
        "passos": [
          {
            "magia": "Annihilation",
            "palavras": "exori gran ico",
            "obs": "sempre que sair da recarga (30s)",
            "icone": "img/magias/annihilation.gif"
          },
          {
            "magia": "Fierce Berserk",
            "palavras": "exori gran",
            "obs": "a cada 6s",
            "icone": "img/magias/fierce-berserk.gif"
          },
          {
            "magia": "Front Sweep",
            "palavras": "exori min",
            "obs": "a cada 6s, alternando com o Fierce Berserk",
            "icone": "img/magias/front-sweep.gif"
          },
          {
            "magia": "Brutal Strike",
            "palavras": "exori ico",
            "obs": "nos intervalos (ou Shield Bash, exori ico scu, se usar escudo)",
            "icone": "img/magias/brutal-strike.gif"
          }
        ],
        "nota": "Físico 100%. Stance: Blood Rage para dano; Protector se for o blocker."
      },
      "paladin": {
        "passos": [
          {
            "magia": "Divine Grenade",
            "palavras": "exevo tempo mas san",
            "obs": "a cada 26s (level 300+)",
            "icone": "img/magias/divine-grenade.gif"
          },
          {
            "magia": "Divine Barrage",
            "palavras": "exori dir san",
            "obs": "a cada 4s",
            "icone": "img/magias/divine-barrage.gif"
          },
          {
            "magia": "Ethereal Barrage",
            "palavras": "exori dir moe",
            "obs": "a cada 4s, alternando com a Divine Barrage",
            "icone": "img/magias/ethereal-barrage.gif"
          },
          {
            "magia": "Divine Missile",
            "palavras": "exori san",
            "obs": "nos intervalos",
            "icone": "img/magias/divine-missile.gif"
          }
        ],
        "nota": "Holy 100%, físico 100%. Ataque básico com arma o tempo todo. Stance: Sharpshooter."
      },
      "sorcerer": {
        "passos": [
          {
            "magia": "Ultimate Energy Strike",
            "palavras": "exori max vis",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-energy-strike.gif"
          },
          {
            "magia": "Great Energy Beam",
            "palavras": "exevo gran vis lux",
            "obs": "a cada 6s, com o boss na reta (wave/beam)",
            "icone": "img/magias/great-energy-beam.gif"
          },
          {
            "magia": "Energy Wave",
            "palavras": "exevo vis hur",
            "obs": "a cada 8s, com o boss na reta (wave/beam)",
            "icone": "img/magias/energy-wave.gif"
          },
          {
            "magia": "Strong Energy Strike",
            "palavras": "exori gran vis",
            "obs": "a cada 8s",
            "icone": "img/magias/strong-energy-strike.gif"
          },
          {
            "magia": "Lightning",
            "palavras": "exori amp vis",
            "obs": "a cada 8s; pula para mais 2 alvos",
            "icone": "img/magias/lightning.gif"
          },
          {
            "magia": "Energy Strike",
            "palavras": "exori vis",
            "obs": "nos intervalos; sem SD neste boss",
            "icone": "img/magias/energy-strike.gif"
          }
        ],
        "nota": "Elemento: energia (100%). Stance: Master of Thunder. Nunca use death (SD): o boss se cura."
      },
      "druid": {
        "passos": [
          {
            "magia": "Ultimate Ice Strike",
            "palavras": "exori max frigo",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-ice-strike.gif"
          },
          {
            "magia": "Strong Ice Wave",
            "palavras": "exevo gran frigo hur",
            "obs": "a cada 4s, com o boss na reta (wave/beam)",
            "icone": "img/magias/strong-ice-wave.gif"
          },
          {
            "magia": "Strong Ice Strike",
            "palavras": "exori gran frigo",
            "obs": "a cada 8s",
            "icone": "img/magias/strong-ice-strike.gif"
          },
          {
            "magia": "Forked Glacier",
            "palavras": "exevo fur frigo",
            "obs": "a cada 6s; pula para até 6 alvos",
            "icone": "img/magias/forked-glacier.gif"
          },
          {
            "magia": "Ice Strike",
            "palavras": "exori frigo",
            "obs": "nos intervalos; sem SD neste boss",
            "icone": "img/magias/ice-strike.gif"
          }
        ],
        "nota": "Elemento: gelo (100%). Stance: Elemental Synthesis. Nunca use death (SD): o boss se cura."
      },
      "monk": {
        "passos": [
          {
            "magia": "Thousand Fist Blows",
            "palavras": "exori mas amp pug",
            "obs": "builder, a cada 8s",
            "icone": "img/magias/thousand-fist-blows.gif"
          },
          {
            "magia": "Mystic Repulse",
            "palavras": "exori amp pug",
            "obs": "builder, a cada 8s (alcance 7)",
            "icone": "img/magias/mystic-repulse.gif"
          },
          {
            "magia": "Double Jab",
            "palavras": "exori pug",
            "obs": "builder, a cada 4s, até juntar 5 de Harmony",
            "icone": "img/magias/double-jab.gif"
          },
          {
            "magia": "Devastating Knockout",
            "palavras": "exori gran nia",
            "obs": "spender com 5 de Harmony (a cada 8s, alcance 7)",
            "icone": "img/magias/devastating-knockout.gif"
          },
          {
            "magia": "Forceful Uppercut",
            "palavras": "exori gran pug",
            "obs": "sempre que sair da recarga (60s)",
            "icone": "img/magias/forceful-uppercut.gif"
          }
        ],
        "nota": "Físico 100%. Gaste a Harmony só com 5 pontos (+112% de dano). Abaixo do level 125 use Greater Tiger Clash (exori nia) como spender."
      },
      "nota": "A estratégia da wiki é fogo no rei (Fireball/GFB) e GFB/waves nos minibosses."
    },
    "tokens": [
      {
        "nome": "Gold Token",
        "qtd": "0-4",
        "raridade": "semi-raro",
        "sprite": "img/itens/gold-token.gif"
      },
      {
        "nome": "Silver Token",
        "qtd": "0-6",
        "raridade": "semi-raro",
        "sprite": "img/itens/silver-token.gif"
      }
    ],
    "lootTiers": [
      {
        "raridade": "comum",
        "itens": [
          {
            "nome": "Platinum Coin",
            "qtd": "0-5",
            "sprite": "img/itens/platinum-coin.gif",
            "link": "https://www.tibiawiki.com.br/Platinum_Coin"
          },
          {
            "nome": "Crystal Coin",
            "qtd": "0-5",
            "sprite": "img/itens/crystal-coin.gif",
            "link": "https://www.tibiawiki.com.br/Crystal_Coin"
          },
          {
            "nome": "Supreme Health Potion",
            "qtd": "0-27",
            "sprite": "img/itens/supreme-health-potion.gif",
            "link": "https://www.tibiawiki.com.br/Supreme_Health_Potion"
          },
          {
            "nome": "Ultimate Mana Potion",
            "qtd": "0-8",
            "sprite": "img/itens/ultimate-mana-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Mana_Potion"
          },
          {
            "nome": "Ultimate Spirit Potion",
            "qtd": "0-26",
            "sprite": "img/itens/ultimate-spirit-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Spirit_Potion"
          },
          {
            "nome": "Berserk Potion",
            "qtd": "0-10",
            "sprite": "img/itens/berserk-potion.gif",
            "link": "https://www.tibiawiki.com.br/Berserk_Potion"
          },
          {
            "nome": "Bullseye Potion",
            "qtd": "0-10",
            "sprite": "img/itens/bullseye-potion.gif",
            "link": "https://www.tibiawiki.com.br/Bullseye_Potion"
          },
          {
            "nome": "Mastermind Potion",
            "qtd": "0-14",
            "sprite": "img/itens/mastermind-potion.gif",
            "link": "https://www.tibiawiki.com.br/Mastermind_Potion"
          },
          {
            "nome": "Transcendence Potion",
            "qtd": "0-11",
            "sprite": "img/itens/transcendence-potion.gif",
            "link": "https://www.tibiawiki.com.br/Transcendence_Potion"
          }
        ]
      },
      {
        "raridade": "semi-raro",
        "itens": [
          {
            "nome": "Collar of Blue Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-blue-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Blue_Plasma"
          },
          {
            "nome": "Collar of Green Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-green-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Green_Plasma"
          },
          {
            "nome": "Collar of Red Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-red-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Red_Plasma"
          },
          {
            "nome": "Giant Sapphire",
            "qtd": null,
            "sprite": "img/itens/giant-sapphire.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Sapphire"
          },
          {
            "nome": "Gold Ingot",
            "qtd": "0-1",
            "sprite": "img/itens/gold-ingot.gif",
            "link": "https://www.tibiawiki.com.br/Gold_Ingot"
          },
          {
            "nome": "Blue Gem",
            "qtd": null,
            "sprite": "img/itens/blue-gem.gif",
            "link": "https://www.tibiawiki.com.br/Blue_Gem"
          },
          {
            "nome": "Green Gem",
            "qtd": null,
            "sprite": "img/itens/green-gem.gif",
            "link": "https://www.tibiawiki.com.br/Green_Gem"
          },
          {
            "nome": "Magic Sulphur",
            "qtd": null,
            "sprite": "img/itens/magic-sulphur.gif",
            "link": "https://www.tibiawiki.com.br/Magic_Sulphur"
          },
          {
            "nome": "Magma Coat",
            "qtd": null,
            "sprite": "img/itens/magma-coat.gif",
            "link": "https://www.tibiawiki.com.br/Magma_Coat"
          },
          {
            "nome": "Red Gem",
            "qtd": null,
            "sprite": "img/itens/red-gem.gif",
            "link": "https://www.tibiawiki.com.br/Red_Gem"
          },
          {
            "nome": "Red Tome",
            "qtd": null,
            "sprite": "img/itens/red-tome.gif",
            "link": "https://www.tibiawiki.com.br/Red_Tome"
          },
          {
            "nome": "Ring of Blue Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-blue-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Blue_Plasma"
          },
          {
            "nome": "Ring of Green Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-green-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Green_Plasma"
          },
          {
            "nome": "Ring of Red Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-red-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Red_Plasma"
          },
          {
            "nome": "Violet Gem",
            "qtd": null,
            "sprite": "img/itens/violet-gem.gif",
            "link": "https://www.tibiawiki.com.br/Violet_Gem"
          },
          {
            "nome": "Yellow Gem",
            "qtd": null,
            "sprite": "img/itens/yellow-gem.gif",
            "link": "https://www.tibiawiki.com.br/Yellow_Gem"
          },
          {
            "nome": "Young Lich Worm",
            "qtd": null,
            "sprite": "img/itens/young-lich-worm.gif",
            "link": "https://www.tibiawiki.com.br/Young_Lich_Worm"
          },
          {
            "nome": "Ancient Liche Bone",
            "qtd": null,
            "sprite": "img/itens/ancient-liche-bone.gif",
            "link": "https://www.tibiawiki.com.br/Ancient_Liche_Bone"
          },
          {
            "nome": "Rotten Heart",
            "qtd": null,
            "sprite": "img/itens/rotten-heart.gif",
            "link": "https://www.tibiawiki.com.br/Rotten_Heart"
          }
        ]
      },
      {
        "raridade": "raro",
        "itens": [
          {
            "nome": "Abyss Hammer",
            "qtd": null,
            "sprite": "img/itens/abyss-hammer.gif",
            "link": "https://www.tibiawiki.com.br/Abyss_Hammer"
          },
          {
            "nome": "Boots of Haste",
            "qtd": null,
            "sprite": "img/itens/boots-of-haste.gif",
            "link": "https://www.tibiawiki.com.br/Boots_of_Haste"
          },
          {
            "nome": "Cobra Crown",
            "qtd": null,
            "sprite": "img/itens/cobra-crown.gif",
            "link": "https://www.tibiawiki.com.br/Cobra_Crown"
          },
          {
            "nome": "Crown Armor",
            "qtd": null,
            "sprite": "img/itens/crown-armor.gif",
            "link": "https://www.tibiawiki.com.br/Crown_Armor"
          },
          {
            "nome": "Glacier Robe",
            "qtd": null,
            "sprite": "img/itens/glacier-robe.gif",
            "link": "https://www.tibiawiki.com.br/Glacier_Robe"
          },
          {
            "nome": "Golden Hyaena Pendant",
            "qtd": null,
            "sprite": "img/itens/golden-hyaena-pendant.gif",
            "link": "https://www.tibiawiki.com.br/Golden_Hyaena_Pendant"
          },
          {
            "nome": "Mortal Mace",
            "qtd": null,
            "sprite": "img/itens/mortal-mace.gif",
            "link": "https://www.tibiawiki.com.br/Mortal_Mace"
          },
          {
            "nome": "Ornate Locket",
            "qtd": null,
            "sprite": "img/itens/ornate-locket.gif",
            "link": "https://www.tibiawiki.com.br/Ornate_Locket"
          },
          {
            "nome": "Spirit Container (Fighting Spirit)",
            "qtd": null,
            "sprite": "img/itens/spirit-container-fighting-spirit.gif",
            "link": "https://www.tibiawiki.com.br/Spirit_Container_%28Fighting_Spirit%29"
          }
        ]
      },
      {
        "raridade": "muito raro",
        "itens": [
          {
            "nome": "Death Oyoroi",
            "qtd": null,
            "sprite": "img/itens/death-oyoroi.gif",
            "link": "https://www.tibiawiki.com.br/Death_Oyoroi"
          },
          {
            "nome": "Bow of Cataclysm",
            "qtd": null,
            "sprite": "img/itens/bow-of-cataclysm.gif",
            "link": "https://www.tibiawiki.com.br/Bow_of_Cataclysm"
          },
          {
            "nome": "Galea Mortis",
            "qtd": null,
            "sprite": "img/itens/galea-mortis.gif",
            "link": "https://www.tibiawiki.com.br/Galea_Mortis"
          },
          {
            "nome": "Shadow Cowl",
            "qtd": null,
            "sprite": "img/itens/shadow-cowl.gif",
            "link": "https://www.tibiawiki.com.br/Shadow_Cowl"
          },
          {
            "nome": "Toga Mortis",
            "qtd": null,
            "sprite": "img/itens/toga-mortis.gif",
            "link": "https://www.tibiawiki.com.br/Toga_Mortis"
          }
        ]
      }
    ],
    "lootStatus": "ok",
    "mecanica": [
      "Last GD: até 10 jogadores e 24 minutos. Os 4 minibosses (sem loot) precisam morrer em ~12 min, senão o Zelos fica forte demais ou imune. Cada um fica numa sala.",
      "Ordem mais usada:",
      "- [[Rewar The Bloody]] (time todo, a leste): imune enquanto houver [[Fetter|Fetters]]. 4 jogadores cercam o centro da sala (onde o boss aparece) e os outros 6 ficam nos pontos de nascimento dos Fetters. Todos jogam GFB no centro; com o boss vulnerável, magos usam waves. Meta: menos de 6 min.",
      "- [[The Red Knight]] (2-3 jogadores, com knight e druid, a oeste): só toma drowning, quando um [[Vampiric Blood]] morre ao lado dele. Use [[Helmet of the Deep]] ou [[Depth Galea]].",
      "- [[Magnor Mournbringer]] (resto do time, ao norte): ao morrer vira 4 [[Shard of Magnor]] de vida compartilhada, que explodem em life drain. Dividam em duplas e usem [[Necklace of the Deep]].",
      "- [[Nargol The Impaler]] (todos, noroeste; use fogo): ao morrer vira [[Regenerating Mass]] no centro. 30s para matar, senão ele volta com vida cheia. Deixe-o trapado no centro antes.",
      "King Zelos: o ataque em reta aplica Greater Hex (HP máximo cai para 40%). Blocker sempre na diagonal, de preferência com o boss virado para a parede oeste. O vortex central tira o Hex, mas invoca um [[Unleashed Hex]] forte.",
      "3 Risen Soldiers renascem sem parar: bloqueie em vez de matar. Shooters batem só no rei, com fogo."
    ],
    "spritesMecanica": {
      "Rewar The Bloody": "img/criaturas/rewar-the-bloody.gif",
      "Fetter": "img/criaturas/fetter.gif",
      "The Red Knight": "img/criaturas/the-red-knight.gif",
      "Vampiric Blood": "img/criaturas/vampiric-blood.gif",
      "Helmet of the Deep": "img/criaturas/helmet-of-the-deep.gif",
      "Depth Galea": "img/criaturas/depth-galea.gif",
      "Magnor Mournbringer": "img/criaturas/magnor-mournbringer.gif",
      "Shard of Magnor": "img/criaturas/shard-of-magnor.gif",
      "Necklace of the Deep": "img/criaturas/necklace-of-the-deep.gif",
      "Nargol The Impaler": "img/criaturas/nargol-the-impaler.gif",
      "Regenerating Mass": "img/criaturas/regenerating-mass.gif",
      "Unleashed Hex": "img/criaturas/unleashed-hex.gif"
    },
    "fases": [
      {
        "nome": "Rewar The Bloody",
        "dica": "Miniboss 1 (time todo): só toma dano sem Fetters vivos. Death provavelmente cura.",
        "elementosAjuste": {
          "morte": "-100%"
        },
        "hp": "250000",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "-100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/rewar-the-bloody.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 1,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo"
          ],
          "druid": [
            "gelo",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Fetter",
        "dica": "Mate rápido e sempre: enquanto existir, Rewar é imune. GFB no centro da sala.",
        "hp": "5800",
        "elementos": {
          "fisico": "100%",
          "terra": "20%",
          "fogo": "100%",
          "morte": "0%",
          "energia": "65%",
          "sagrado": "100%",
          "gelo": "50%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/fetter.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Flame Strike",
              "palavras": "exori max flam",
              "icone": "img/magias/ultimate-flame-strike.gif"
            },
            {
              "magia": "Strong Flame Strike",
              "palavras": "exori gran flam",
              "icone": "img/magias/strong-flame-strike.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "fogo"
          ],
          "druid": [
            "gelo"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Magnor Mournbringer",
        "dica": "Miniboss 2: depois de morto vira 4 Shards. Terra e death provavelmente curam.",
        "elementosAjuste": {
          "terra": "-100%",
          "morte": "-100%"
        },
        "hp": "250000",
        "elementos": {
          "fisico": "100%",
          "terra": "-100%",
          "fogo": "100%",
          "morte": "-100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/magnor-mournbringer.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 1,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo"
          ],
          "druid": [
            "gelo"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Shard of Magnor",
        "dica": "4 com vida compartilhada; ao morrer explodem em life drain (Necklace of the Deep).",
        "elementosAjuste": {
          "terra": "-100%",
          "morte": "-100%"
        },
        "hp": "205000",
        "elementos": {
          "fisico": "100%",
          "terra": "-100%",
          "fogo": "100%",
          "morte": "-100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/shard-of-magnor.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 1,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo"
          ],
          "druid": [
            "gelo"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "The Red Knight",
        "dica": "Miniboss 3: imune a tudo. Só toma drowning quando um Vampiric Blood morre ao lado dele.",
        "hp": "200000",
        "elementos": {
          "fisico": "0%",
          "terra": "0%",
          "fogo": "0%",
          "morte": "0%",
          "energia": "0%",
          "sagrado": "0%",
          "gelo": "0%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/the-red-knight.gif",
        "ataques": {
          "knight": [],
          "paladin": [],
          "sorcerer": [],
          "druid": [],
          "monk": []
        },
        "peso": 0,
        "elemento": {
          "sorcerer": [],
          "druid": [],
          "paladin": [],
          "knight": [],
          "monk": []
        }
      },
      {
        "nome": "Vampiric Blood",
        "dica": "Mate ao lado do Red Knight: é assim que ele toma dano.",
        "hp": "3500",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/vampiric-blood.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo",
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Nargol The Impaler",
        "dica": "Miniboss 4: fogo. Ao morrer vira Regenerating Mass. Death provavelmente cura.",
        "elementosAjuste": {
          "morte": "-100%"
        },
        "hp": "250000",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "-100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/nargol-the-impaler.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 1,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo"
          ],
          "druid": [
            "gelo",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Regenerating Mass",
        "dica": "30 segundos para matar, senão o Nargol volta com vida cheia. Todo dano nela.",
        "hp": "110000",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/regenerating-mass.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 1,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo",
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Unleashed Hex",
        "dica": "Surge se alguém usar o vortex central para tirar o Hex: forte, evite.",
        "hp": null,
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/unleashed-hex.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo",
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Risen Soldier",
        "dica": "Renascem sem parar: bloqueie, não perca tempo matando. Imune a death.",
        "hp": "7000",
        "elementos": {
          "fisico": "100%",
          "terra": "120%",
          "fogo": "20%",
          "morte": "0%",
          "energia": "80%",
          "sagrado": "100%",
          "gelo": "105%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/risen-soldier.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Terra Strike",
              "palavras": "exori max tera",
              "icone": "img/magias/ultimate-terra-strike.gif"
            },
            {
              "magia": "Terra Wave",
              "palavras": "exevo tera hur",
              "icone": "img/magias/terra-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0,
        "elemento": {
          "sorcerer": [
            "energia"
          ],
          "druid": [
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      }
    ],
    "link": "https://www.tibiawiki.com.br/King_Zelos",
    "pendencias": []
  },
  {
    "nome": "Anomaly",
    "local": "The Void (vortex de Ankrahmun)",
    "grupo": "Heart of Destruction",
    "subgrupo": "Diários",
    "ordem": 1,
    "quest": "Heart of Destruction Quest",
    "level": {
      "quest": "Heart of Destruction Quest",
      "link": "https://www.tibiawiki.com.br/Heart_of_Destruction_Quest",
      "minimo": "150",
      "recomendado": "250"
    },
    "hp": "290000",
    "xp": "50000",
    "tipo": "archfoe",
    "sprite": "img/bosses/anomaly.gif",
    "elementos": {
      "fisico": "70%",
      "terra": "110%",
      "fogo": "70%",
      "morte": "100%",
      "energia": "70%",
      "sagrado": "70%",
      "gelo": "100%",
      "cura": "100%"
    },
    "imunidades": [
      "Invisibility"
    ],
    "podeSerPuxado": false,
    "empurraObjetos": true,
    "passaPor": [
      "Fire",
      "Energy",
      "Poison"
    ],
    "rotacaoAjustes": {
      "nota": "Na forma Charged Anomaly o boss é imune: só o vortex vermelho causa dano."
    },
    "ataque": {
      "sorcerer": {
        "elementos": [
          "fogo",
          "morte"
        ],
        "alternativas": []
      },
      "druid": {
        "elementos": [
          "terra"
        ],
        "alternativas": []
      },
      "paladin": {
        "elementos": [
          "sagrado"
        ],
        "alternativas": [
          "fisico"
        ]
      },
      "knight": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      },
      "monk": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      }
    },
    "defesa": {
      "elementos": [
        "energia"
      ],
      "melee": true,
      "nota": "Sparks of Destruction (energia) o tempo todo; a Charged Anomaly bate bem mais forte."
    },
    "rotacao": {
      "knight": {
        "passos": [
          {
            "magia": "Annihilation",
            "palavras": "exori gran ico",
            "obs": "sempre que sair da recarga (30s)",
            "icone": "img/magias/annihilation.gif"
          },
          {
            "magia": "Fierce Berserk",
            "palavras": "exori gran",
            "obs": "a cada 6s",
            "icone": "img/magias/fierce-berserk.gif"
          },
          {
            "magia": "Front Sweep",
            "palavras": "exori min",
            "obs": "a cada 6s, alternando com o Fierce Berserk",
            "icone": "img/magias/front-sweep.gif"
          },
          {
            "magia": "Brutal Strike",
            "palavras": "exori ico",
            "obs": "nos intervalos (ou Shield Bash, exori ico scu, se usar escudo)",
            "icone": "img/magias/brutal-strike.gif"
          }
        ],
        "nota": "Físico 70%. Stance: Blood Rage para dano; Protector se for o blocker."
      },
      "paladin": {
        "passos": [
          {
            "magia": "Divine Grenade",
            "palavras": "exevo tempo mas san",
            "obs": "a cada 26s (level 300+)",
            "icone": "img/magias/divine-grenade.gif"
          },
          {
            "magia": "Divine Barrage",
            "palavras": "exori dir san",
            "obs": "a cada 4s",
            "icone": "img/magias/divine-barrage.gif"
          },
          {
            "magia": "Ethereal Barrage",
            "palavras": "exori dir moe",
            "obs": "a cada 4s, alternando com a Divine Barrage",
            "icone": "img/magias/ethereal-barrage.gif"
          },
          {
            "magia": "Divine Missile",
            "palavras": "exori san",
            "obs": "nos intervalos",
            "icone": "img/magias/divine-missile.gif"
          }
        ],
        "nota": "Holy 70%, físico 70%. Ataque básico com arma o tempo todo. Stance: Sharpshooter."
      },
      "sorcerer": {
        "passos": [
          {
            "magia": "Great Death Beam",
            "palavras": "exevo max mort",
            "obs": "a cada 6s, com o boss na reta (beam)",
            "icone": "img/magias/great-death-beam.gif"
          },
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "a cada 2s, sempre que nada mais forte estiver pronto",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Ultimate Energy Strike",
            "palavras": "exori max vis",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/ultimate-energy-strike.gif"
          },
          {
            "magia": "Death Echo",
            "palavras": "exevo mort ora",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/death-echo.gif"
          },
          {
            "magia": "Great Energy Beam",
            "palavras": "exevo gran vis lux",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/great-energy-beam.gif"
          },
          {
            "magia": "Energy Wave",
            "palavras": "exevo vis hur",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/energy-wave.gif"
          },
          {
            "magia": "Strong Energy Strike",
            "palavras": "exori gran vis",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/strong-energy-strike.gif"
          },
          {
            "magia": "Lightning",
            "palavras": "exori amp vis",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/lightning.gif"
          }
        ],
        "nota": "Elemento: energia (70%). Stance: Master of Thunder."
      },
      "druid": {
        "passos": [
          {
            "magia": "Ultimate Terra Strike",
            "palavras": "exori max tera",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-terra-strike.gif"
          },
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "a cada 2s, sempre que nada mais forte estiver pronto",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Terra Wave",
            "palavras": "exevo tera hur",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/terra-wave.gif"
          },
          {
            "magia": "Strong Terra Strike",
            "palavras": "exori gran tera",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/strong-terra-strike.gif"
          },
          {
            "magia": "Forked Thorns",
            "palavras": "exevo fur tera",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/forked-thorns.gif"
          }
        ],
        "nota": "Elemento: terra (110%). Stance: Elemental Synthesis."
      },
      "monk": {
        "passos": [
          {
            "magia": "Thousand Fist Blows",
            "palavras": "exori mas amp pug",
            "obs": "builder, a cada 8s",
            "icone": "img/magias/thousand-fist-blows.gif"
          },
          {
            "magia": "Mystic Repulse",
            "palavras": "exori amp pug",
            "obs": "builder, a cada 8s (alcance 7)",
            "icone": "img/magias/mystic-repulse.gif"
          },
          {
            "magia": "Double Jab",
            "palavras": "exori pug",
            "obs": "builder, a cada 4s, até juntar 5 de Harmony",
            "icone": "img/magias/double-jab.gif"
          },
          {
            "magia": "Devastating Knockout",
            "palavras": "exori gran nia",
            "obs": "spender com 5 de Harmony (a cada 8s, alcance 7)",
            "icone": "img/magias/devastating-knockout.gif"
          },
          {
            "magia": "Forceful Uppercut",
            "palavras": "exori gran pug",
            "obs": "sempre que sair da recarga (60s)",
            "icone": "img/magias/forceful-uppercut.gif"
          }
        ],
        "nota": "Físico 70%. Gaste a Harmony só com 5 pontos (+112% de dano). Abaixo do level 125 use Greater Tiger Clash (exori nia) como spender."
      },
      "nota": "Na forma Charged Anomaly o boss é imune: só o vortex vermelho causa dano."
    },
    "tokens": [
      {
        "nome": "Gold Token",
        "qtd": "1-7",
        "raridade": "sem raridade",
        "sprite": "img/itens/gold-token.gif"
      }
    ],
    "lootTiers": [
      {
        "raridade": "sem raridade",
        "itens": [
          {
            "nome": "Gold Coin",
            "qtd": "0-200",
            "sprite": "img/itens/gold-coin.gif",
            "link": "https://www.tibiawiki.com.br/Gold_Coin"
          },
          {
            "nome": "Platinum Coin",
            "qtd": "0-35",
            "sprite": "img/itens/platinum-coin.gif",
            "link": "https://www.tibiawiki.com.br/Platinum_Coin"
          },
          {
            "nome": "Blue Crystal Shard",
            "qtd": "0-3",
            "sprite": "img/itens/blue-crystal-shard.gif",
            "link": "https://www.tibiawiki.com.br/Blue_Crystal_Shard"
          },
          {
            "nome": "Energy Drink",
            "qtd": "0-5",
            "sprite": "img/itens/energy-drink.gif",
            "link": "https://www.tibiawiki.com.br/Energy_Drink"
          },
          {
            "nome": "Great Mana Potion",
            "qtd": "0-10",
            "sprite": "img/itens/great-mana-potion.gif",
            "link": "https://www.tibiawiki.com.br/Great_Mana_Potion"
          },
          {
            "nome": "Great Spirit Potion",
            "qtd": "0-10",
            "sprite": "img/itens/great-spirit-potion.gif",
            "link": "https://www.tibiawiki.com.br/Great_Spirit_Potion"
          },
          {
            "nome": "Green Crystal Shard",
            "qtd": "0-3",
            "sprite": "img/itens/green-crystal-shard.gif",
            "link": "https://www.tibiawiki.com.br/Green_Crystal_Shard"
          },
          {
            "nome": "Small Amethyst",
            "qtd": "0-10",
            "sprite": "img/itens/small-amethyst.gif",
            "link": "https://www.tibiawiki.com.br/Small_Amethyst"
          },
          {
            "nome": "Small Diamond",
            "qtd": "0-10",
            "sprite": "img/itens/small-diamond.gif",
            "link": "https://www.tibiawiki.com.br/Small_Diamond"
          },
          {
            "nome": "Small Emerald",
            "qtd": "0-10",
            "sprite": "img/itens/small-emerald.gif",
            "link": "https://www.tibiawiki.com.br/Small_Emerald"
          },
          {
            "nome": "Small Ruby",
            "qtd": "0-10",
            "sprite": "img/itens/small-ruby.gif",
            "link": "https://www.tibiawiki.com.br/Small_Ruby"
          },
          {
            "nome": "Small Topaz",
            "qtd": "0-10",
            "sprite": "img/itens/small-topaz.gif",
            "link": "https://www.tibiawiki.com.br/Small_Topaz"
          },
          {
            "nome": "Ultimate Health Potion",
            "qtd": "0-5",
            "sprite": "img/itens/ultimate-health-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Health_Potion"
          },
          {
            "nome": "Violet Crystal Shard",
            "qtd": "0-3",
            "sprite": "img/itens/violet-crystal-shard.gif",
            "link": "https://www.tibiawiki.com.br/Violet_Crystal_Shard"
          },
          {
            "nome": "Blue Gem",
            "qtd": null,
            "sprite": "img/itens/blue-gem.gif",
            "link": "https://www.tibiawiki.com.br/Blue_Gem"
          },
          {
            "nome": "Collar of Blue Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-blue-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Blue_Plasma"
          },
          {
            "nome": "Chaos Mace",
            "qtd": null,
            "sprite": "img/itens/chaos-mace.gif",
            "link": "https://www.tibiawiki.com.br/Chaos_Mace"
          },
          {
            "nome": "Curious Matter",
            "qtd": null,
            "sprite": "img/itens/curious-matter.gif",
            "link": "https://www.tibiawiki.com.br/Curious_Matter"
          },
          {
            "nome": "Crystalline Sword",
            "qtd": null,
            "sprite": "img/itens/crystalline-sword.gif",
            "link": "https://www.tibiawiki.com.br/Crystalline_Sword"
          },
          {
            "nome": "Frozen Lightning",
            "qtd": null,
            "sprite": "img/itens/frozen-lightning.gif",
            "link": "https://www.tibiawiki.com.br/Frozen_Lightning"
          },
          {
            "nome": "Giant Shimmering Pearl",
            "qtd": null,
            "sprite": "img/itens/giant-shimmering-pearl.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Shimmering_Pearl"
          },
          {
            "nome": "Green Gem",
            "qtd": null,
            "sprite": "img/itens/green-gem.gif",
            "link": "https://www.tibiawiki.com.br/Green_Gem"
          },
          {
            "nome": "Lightning Headband",
            "qtd": null,
            "sprite": "img/itens/lightning-headband.gif",
            "link": "https://www.tibiawiki.com.br/Lightning_Headband"
          },
          {
            "nome": "Lightning Robe",
            "qtd": null,
            "sprite": "img/itens/lightning-robe.gif",
            "link": "https://www.tibiawiki.com.br/Lightning_Robe"
          },
          {
            "nome": "Lightning Legs",
            "qtd": null,
            "sprite": "img/itens/lightning-legs.gif",
            "link": "https://www.tibiawiki.com.br/Lightning_Legs"
          },
          {
            "nome": "Red Gem",
            "qtd": null,
            "sprite": "img/itens/red-gem.gif",
            "link": "https://www.tibiawiki.com.br/Red_Gem"
          },
          {
            "nome": "Ring of Blue Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-blue-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Blue_Plasma"
          },
          {
            "nome": "Ring of Green Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-green-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Green_Plasma"
          },
          {
            "nome": "Ring of Red Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-red-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Red_Plasma"
          },
          {
            "nome": "Ruthless Axe",
            "qtd": null,
            "sprite": "img/itens/ruthless-axe.gif",
            "link": "https://www.tibiawiki.com.br/Ruthless_Axe"
          },
          {
            "nome": "Shadow Sceptre",
            "qtd": null,
            "sprite": "img/itens/shadow-sceptre.gif",
            "link": "https://www.tibiawiki.com.br/Shadow_Sceptre"
          },
          {
            "nome": "Spellbook of Warding",
            "qtd": null,
            "sprite": "img/itens/spellbook-of-warding.gif",
            "link": "https://www.tibiawiki.com.br/Spellbook_of_Warding"
          },
          {
            "nome": "Tiara of Power",
            "qtd": null,
            "sprite": "img/itens/tiara-of-power.gif",
            "link": "https://www.tibiawiki.com.br/Tiara_of_Power"
          },
          {
            "nome": "Violet Gem",
            "qtd": null,
            "sprite": "img/itens/violet-gem.gif",
            "link": "https://www.tibiawiki.com.br/Violet_Gem"
          },
          {
            "nome": "Void Boots",
            "qtd": null,
            "sprite": "img/itens/void-boots.gif",
            "link": "https://www.tibiawiki.com.br/Void_Boots"
          },
          {
            "nome": "Yellow Gem",
            "qtd": null,
            "sprite": "img/itens/yellow-gem.gif",
            "link": "https://www.tibiawiki.com.br/Yellow_Gem"
          },
          {
            "nome": "Mysterious Remains",
            "qtd": null,
            "sprite": "img/itens/mysterious-remains.gif",
            "link": "https://www.tibiawiki.com.br/Mysterious_Remains"
          },
          {
            "nome": "Odd Organ",
            "qtd": null,
            "sprite": "img/itens/odd-organ.gif",
            "link": "https://www.tibiawiki.com.br/Odd_Organ"
          }
        ]
      }
    ],
    "lootStatus": "pendente",
    "mecanica": [
      "Entra com 4 [[Spark of Destruction|Sparks of Destruction]]. Trape o boss num canto ou no centro, entre 2 pedras na diagonal.",
      "De tempos em tempos vira [[Charged Anomaly]]: imune, lento e batendo bem mais forte. Leve-o sobre o vortex vermelho, que surge em pontos aleatórios: cada passada tira 6.000. Jogador que pisa no vortex toma 100 de energia.",
      "Como ele troca muito de alvo, o time fica parado; só o blocker se move levando o boss, e o druid acompanha para usar Heal Friend.",
      "Repete 3 a 4 vezes até morrer."
    ],
    "spritesMecanica": {
      "Spark of Destruction": "img/criaturas/spark-of-destruction.gif",
      "Charged Anomaly": "img/criaturas/charged-anomaly.gif"
    },
    "fases": [
      {
        "nome": "Charged Anomaly",
        "dica": "Imune a tudo: leve-a ao vortex vermelho (6.000 por passada).",
        "hp": "18000",
        "elementos": {
          "fisico": "0%",
          "terra": "0%",
          "fogo": "0%",
          "morte": "0%",
          "energia": "0%",
          "sagrado": "0%",
          "gelo": "0%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/charged-anomaly.gif",
        "ataques": {
          "knight": [],
          "paladin": [],
          "sorcerer": [],
          "druid": [],
          "monk": []
        },
        "peso": 0,
        "elemento": {
          "sorcerer": [],
          "druid": [],
          "paladin": [],
          "knight": [],
          "monk": []
        }
      },
      {
        "nome": "Spark of Destruction",
        "dica": "Mate sempre que surgirem. Imune a energia.",
        "hp": "3900",
        "elementos": {
          "fisico": "100%",
          "terra": "115%",
          "fogo": "115%",
          "morte": "100%",
          "energia": "0%",
          "sagrado": "100%",
          "gelo": "115%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/spark-of-destruction.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Flame Strike",
              "palavras": "exori max flam",
              "icone": "img/magias/ultimate-flame-strike.gif"
            },
            {
              "magia": "Great Death Beam",
              "palavras": "exevo max mort",
              "icone": "img/magias/great-death-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "fogo"
          ],
          "druid": [
            "gelo",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      }
    ],
    "link": "https://www.tibiawiki.com.br/Anomaly",
    "pendencias": [
      "raridade de loot não disponível na wiki"
    ]
  },
  {
    "nome": "Eradicator",
    "local": "The Void",
    "grupo": "Heart of Destruction",
    "subgrupo": "Diários",
    "ordem": 2,
    "quest": "Heart of Destruction Quest",
    "level": {
      "quest": "Heart of Destruction Quest",
      "link": "https://www.tibiawiki.com.br/Heart_of_Destruction_Quest",
      "minimo": "150",
      "recomendado": "250"
    },
    "hp": "290000",
    "xp": "50000",
    "tipo": "archfoe",
    "sprite": "img/bosses/eradicator.gif",
    "elementos": {
      "fisico": "30%",
      "terra": "70%",
      "fogo": "70%",
      "morte": "100%",
      "energia": "70%",
      "sagrado": "70%",
      "gelo": "70%",
      "cura": "100%"
    },
    "imunidades": [
      "Invisibility",
      "Paralysis"
    ],
    "podeSerPuxado": false,
    "empurraObjetos": true,
    "passaPor": [],
    "rotacaoAjustes": {
      "sdPrincipal": true,
      "nota": "Resistência alta a tudo, menos death: SD e armas de death para todos.",
      "notas": {
        "paladin": "Imbue a arma com Powerful Reap (death).",
        "knight": "Use arma de death, se tiver.",
        "monk": "Use arma de death, se tiver."
      }
    },
    "ataque": {
      "sorcerer": {
        "elementos": [
          "fogo",
          "morte"
        ],
        "alternativas": []
      },
      "druid": {
        "elementos": [
          "gelo",
          "morte"
        ],
        "alternativas": [
          "terra"
        ]
      },
      "paladin": {
        "elementos": [
          "sagrado"
        ],
        "alternativas": [
          "fisico"
        ]
      },
      "knight": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      },
      "monk": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      }
    },
    "defesa": {
      "elementos": [
        "energia"
      ],
      "melee": true,
      "nota": "Melee forte (até ~1.800) e Energy Wave/Beam."
    },
    "rotacao": {
      "knight": {
        "passos": [
          {
            "magia": "Annihilation",
            "palavras": "exori gran ico",
            "obs": "sempre que sair da recarga (30s)",
            "icone": "img/magias/annihilation.gif"
          },
          {
            "magia": "Fierce Berserk",
            "palavras": "exori gran",
            "obs": "a cada 6s",
            "icone": "img/magias/fierce-berserk.gif"
          },
          {
            "magia": "Front Sweep",
            "palavras": "exori min",
            "obs": "a cada 6s, alternando com o Fierce Berserk",
            "icone": "img/magias/front-sweep.gif"
          },
          {
            "magia": "Brutal Strike",
            "palavras": "exori ico",
            "obs": "nos intervalos (ou Shield Bash, exori ico scu, se usar escudo)",
            "icone": "img/magias/brutal-strike.gif"
          }
        ],
        "nota": "Físico 30%. Stance: Blood Rage para dano; Protector se for o blocker. Use arma de death, se tiver."
      },
      "paladin": {
        "passos": [
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "ataque principal neste boss (se tiver magic level 15+)",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Divine Grenade",
            "palavras": "exevo tempo mas san",
            "obs": "a cada 26s (level 300+)",
            "icone": "img/magias/divine-grenade.gif"
          },
          {
            "magia": "Divine Barrage",
            "palavras": "exori dir san",
            "obs": "a cada 4s",
            "icone": "img/magias/divine-barrage.gif"
          },
          {
            "magia": "Ethereal Barrage",
            "palavras": "exori dir moe",
            "obs": "a cada 4s, alternando com a Divine Barrage",
            "icone": "img/magias/ethereal-barrage.gif"
          },
          {
            "magia": "Divine Missile",
            "palavras": "exori san",
            "obs": "nos intervalos",
            "icone": "img/magias/divine-missile.gif"
          }
        ],
        "nota": "Holy 70%, físico 30%. Ataque básico com arma o tempo todo. Stance: Sharpshooter. Imbue a arma com Powerful Reap (death)."
      },
      "sorcerer": {
        "passos": [
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "ataque principal neste boss",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Great Death Beam",
            "palavras": "exevo max mort",
            "obs": "a cada 6s, com o boss na reta (beam)",
            "icone": "img/magias/great-death-beam.gif"
          },
          {
            "magia": "Ultimate Energy Strike",
            "palavras": "exori max vis",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/ultimate-energy-strike.gif"
          },
          {
            "magia": "Death Echo",
            "palavras": "exevo mort ora",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/death-echo.gif"
          },
          {
            "magia": "Great Energy Beam",
            "palavras": "exevo gran vis lux",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/great-energy-beam.gif"
          },
          {
            "magia": "Energy Wave",
            "palavras": "exevo vis hur",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/energy-wave.gif"
          },
          {
            "magia": "Strong Energy Strike",
            "palavras": "exori gran vis",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/strong-energy-strike.gif"
          },
          {
            "magia": "Lightning",
            "palavras": "exori amp vis",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/lightning.gif"
          }
        ],
        "nota": "Elemento: energia (70%). Stance: Master of Thunder."
      },
      "druid": {
        "passos": [
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "ataque principal neste boss",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Ultimate Ice Strike",
            "palavras": "exori max frigo",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/ultimate-ice-strike.gif"
          },
          {
            "magia": "Strong Ice Wave",
            "palavras": "exevo gran frigo hur",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/strong-ice-wave.gif"
          },
          {
            "magia": "Strong Ice Strike",
            "palavras": "exori gran frigo",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/strong-ice-strike.gif"
          },
          {
            "magia": "Forked Glacier",
            "palavras": "exevo fur frigo",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/forked-glacier.gif"
          }
        ],
        "nota": "Elemento: gelo (70%). Stance: Elemental Synthesis."
      },
      "monk": {
        "passos": [
          {
            "magia": "Thousand Fist Blows",
            "palavras": "exori mas amp pug",
            "obs": "builder, a cada 8s",
            "icone": "img/magias/thousand-fist-blows.gif"
          },
          {
            "magia": "Mystic Repulse",
            "palavras": "exori amp pug",
            "obs": "builder, a cada 8s (alcance 7)",
            "icone": "img/magias/mystic-repulse.gif"
          },
          {
            "magia": "Double Jab",
            "palavras": "exori pug",
            "obs": "builder, a cada 4s, até juntar 5 de Harmony",
            "icone": "img/magias/double-jab.gif"
          },
          {
            "magia": "Devastating Knockout",
            "palavras": "exori gran nia",
            "obs": "spender com 5 de Harmony (a cada 8s, alcance 7)",
            "icone": "img/magias/devastating-knockout.gif"
          },
          {
            "magia": "Forceful Uppercut",
            "palavras": "exori gran pug",
            "obs": "sempre que sair da recarga (60s)",
            "icone": "img/magias/forceful-uppercut.gif"
          }
        ],
        "nota": "Físico 30%. Gaste a Harmony só com 5 pontos (+112% de dano). Abaixo do level 125 use Greater Tiger Clash (exori nia) como spender. Use arma de death, se tiver."
      },
      "nota": "Resistência alta a tudo, menos death: SD e armas de death para todos."
    },
    "tokens": [
      {
        "nome": "Gold Token",
        "qtd": "1-7",
        "raridade": "sem raridade",
        "sprite": "img/itens/gold-token.gif"
      }
    ],
    "lootTiers": [
      {
        "raridade": "sem raridade",
        "itens": [
          {
            "nome": "Gold Coin",
            "qtd": "0-200",
            "sprite": "img/itens/gold-coin.gif",
            "link": "https://www.tibiawiki.com.br/Gold_Coin"
          },
          {
            "nome": "Platinum Coin",
            "qtd": "0-30",
            "sprite": "img/itens/platinum-coin.gif",
            "link": "https://www.tibiawiki.com.br/Platinum_Coin"
          },
          {
            "nome": "Blue Crystal Shard",
            "qtd": "0-3",
            "sprite": "img/itens/blue-crystal-shard.gif",
            "link": "https://www.tibiawiki.com.br/Blue_Crystal_Shard"
          },
          {
            "nome": "Green Crystal Shard",
            "qtd": "0-3",
            "sprite": "img/itens/green-crystal-shard.gif",
            "link": "https://www.tibiawiki.com.br/Green_Crystal_Shard"
          },
          {
            "nome": "Great Mana Potion",
            "qtd": "0-5",
            "sprite": "img/itens/great-mana-potion.gif",
            "link": "https://www.tibiawiki.com.br/Great_Mana_Potion"
          },
          {
            "nome": "Great Spirit Potion",
            "qtd": "0-5",
            "sprite": "img/itens/great-spirit-potion.gif",
            "link": "https://www.tibiawiki.com.br/Great_Spirit_Potion"
          },
          {
            "nome": "Small Amethyst",
            "qtd": "0-10",
            "sprite": "img/itens/small-amethyst.gif",
            "link": "https://www.tibiawiki.com.br/Small_Amethyst"
          },
          {
            "nome": "Small Diamond",
            "qtd": "0-10",
            "sprite": "img/itens/small-diamond.gif",
            "link": "https://www.tibiawiki.com.br/Small_Diamond"
          },
          {
            "nome": "Small Emerald",
            "qtd": "0-10",
            "sprite": "img/itens/small-emerald.gif",
            "link": "https://www.tibiawiki.com.br/Small_Emerald"
          },
          {
            "nome": "Small Ruby",
            "qtd": "0-5",
            "sprite": "img/itens/small-ruby.gif",
            "link": "https://www.tibiawiki.com.br/Small_Ruby"
          },
          {
            "nome": "Small Topaz",
            "qtd": "0-10",
            "sprite": "img/itens/small-topaz.gif",
            "link": "https://www.tibiawiki.com.br/Small_Topaz"
          },
          {
            "nome": "Ultimate Health Potion",
            "qtd": "0-10",
            "sprite": "img/itens/ultimate-health-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Health_Potion"
          },
          {
            "nome": "Violet Crystal Shard",
            "qtd": "0-3",
            "sprite": "img/itens/violet-crystal-shard.gif",
            "link": "https://www.tibiawiki.com.br/Violet_Crystal_Shard"
          },
          {
            "nome": "Blue Gem",
            "qtd": null,
            "sprite": "img/itens/blue-gem.gif",
            "link": "https://www.tibiawiki.com.br/Blue_Gem"
          },
          {
            "nome": "Collar of Blue Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-blue-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Blue_Plasma"
          },
          {
            "nome": "Collar of Green Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-green-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Green_Plasma"
          },
          {
            "nome": "Collar of Red Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-red-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Red_Plasma"
          },
          {
            "nome": "Crystalline Armor",
            "qtd": null,
            "sprite": "img/itens/crystalline-armor.gif",
            "link": "https://www.tibiawiki.com.br/Crystalline_Armor"
          },
          {
            "nome": "Crystal Mace",
            "qtd": null,
            "sprite": "img/itens/crystal-mace.gif",
            "link": "https://www.tibiawiki.com.br/Crystal_Mace"
          },
          {
            "nome": "Energy Bar",
            "qtd": null,
            "sprite": "img/itens/energy-bar.gif",
            "link": "https://www.tibiawiki.com.br/Energy_Bar"
          },
          {
            "nome": "Giant Shimmering Pearl",
            "qtd": null,
            "sprite": "img/itens/giant-shimmering-pearl.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Shimmering_Pearl"
          },
          {
            "nome": "Green Gem",
            "qtd": null,
            "sprite": "img/itens/green-gem.gif",
            "link": "https://www.tibiawiki.com.br/Green_Gem"
          },
          {
            "nome": "Plasmatic Lightning",
            "qtd": null,
            "sprite": "img/itens/plasmatic-lightning.gif",
            "link": "https://www.tibiawiki.com.br/Plasmatic_Lightning"
          },
          {
            "nome": "Red Gem",
            "qtd": null,
            "sprite": "img/itens/red-gem.gif",
            "link": "https://www.tibiawiki.com.br/Red_Gem"
          },
          {
            "nome": "Ring of Blue Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-blue-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Blue_Plasma"
          },
          {
            "nome": "Ring of Green Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-green-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Green_Plasma"
          },
          {
            "nome": "Ring of Red Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-red-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Red_Plasma"
          },
          {
            "nome": "Spark Sphere",
            "qtd": null,
            "sprite": "img/itens/spark-sphere.gif",
            "link": "https://www.tibiawiki.com.br/Spark_Sphere"
          },
          {
            "nome": "Spellbook of Lost Souls",
            "qtd": null,
            "sprite": "img/itens/spellbook-of-lost-souls.gif",
            "link": "https://www.tibiawiki.com.br/Spellbook_of_Lost_Souls"
          },
          {
            "nome": "Spellbook of Warding",
            "qtd": null,
            "sprite": "img/itens/spellbook-of-warding.gif",
            "link": "https://www.tibiawiki.com.br/Spellbook_of_Warding"
          },
          {
            "nome": "Steel Boots",
            "qtd": null,
            "sprite": "img/itens/steel-boots.gif",
            "link": "https://www.tibiawiki.com.br/Steel_Boots"
          },
          {
            "nome": "Mysterious Remains",
            "qtd": null,
            "sprite": "img/itens/mysterious-remains.gif",
            "link": "https://www.tibiawiki.com.br/Mysterious_Remains"
          },
          {
            "nome": "Odd Organ",
            "qtd": null,
            "sprite": "img/itens/odd-organ.gif",
            "link": "https://www.tibiawiki.com.br/Odd_Organ"
          },
          {
            "nome": "Void Boots",
            "qtd": null,
            "sprite": "img/itens/void-boots.gif",
            "link": "https://www.tibiawiki.com.br/Void_Boots"
          },
          {
            "nome": "Yellow Gem",
            "qtd": null,
            "sprite": "img/itens/yellow-gem.gif",
            "link": "https://www.tibiawiki.com.br/Yellow_Gem"
          }
        ]
      }
    ],
    "lootStatus": "pendente",
    "mecanica": [
      "Entra com 4 [[Spark of Destruction|Sparks of Destruction]]: mate-os e trape o boss num canto (recomendado ao norte).",
      "Tem resistência alta a tudo, menos death: todos usam SD e armas de death (paladin com Powerful Reap).",
      "Às vezes vira a [[Eradicator (Red)|forma vermelha]] por alguns segundos, mais vulnerável, e surgem mais 4 Sparks (2 ao norte, 2 ao sul). Limpe os Sparks sempre."
    ],
    "spritesMecanica": {
      "Spark of Destruction": "img/criaturas/spark-of-destruction.gif",
      "Eradicator (Red)": "img/criaturas/eradicator-red.gif"
    },
    "fases": [
      {
        "nome": "Spark of Destruction",
        "dica": "4 a cada troca de forma: limpe sempre. Imune a energia.",
        "hp": "3900",
        "elementos": {
          "fisico": "100%",
          "terra": "115%",
          "fogo": "115%",
          "morte": "100%",
          "energia": "0%",
          "sagrado": "100%",
          "gelo": "115%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/spark-of-destruction.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Flame Strike",
              "palavras": "exori max flam",
              "icone": "img/magias/ultimate-flame-strike.gif"
            },
            {
              "magia": "Great Death Beam",
              "palavras": "exevo max mort",
              "icone": "img/magias/great-death-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "fogo"
          ],
          "druid": [
            "gelo",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      }
    ],
    "link": "https://www.tibiawiki.com.br/Eradicator",
    "pendencias": [
      "raridade de loot não disponível na wiki"
    ]
  },
  {
    "nome": "Outburst",
    "local": "The Void",
    "grupo": "Heart of Destruction",
    "subgrupo": "Diários",
    "ordem": 3,
    "quest": "Heart of Destruction Quest",
    "level": {
      "quest": "Heart of Destruction Quest",
      "link": "https://www.tibiawiki.com.br/Heart_of_Destruction_Quest",
      "minimo": "150",
      "recomendado": "250"
    },
    "hp": "290000",
    "xp": "50000",
    "tipo": "archfoe",
    "sprite": "img/bosses/outburst.gif",
    "elementos": {
      "fisico": "130%",
      "terra": "100%",
      "fogo": "100%",
      "morte": "100%",
      "energia": "130%",
      "sagrado": "100%",
      "gelo": "130%",
      "cura": "100%"
    },
    "imunidades": [
      "Invisibility"
    ],
    "podeSerPuxado": false,
    "empurraObjetos": true,
    "passaPor": [],
    "rotacaoAjustes": {
      "nota": "Na forma Charging Outburst só físico funciona: mago usa Explosion Rune (adevo mas hur), paladin Ethereal Spear. 12s para matar."
    },
    "ataque": {
      "sorcerer": {
        "elementos": [
          "energia",
          "morte"
        ],
        "alternativas": []
      },
      "druid": {
        "elementos": [
          "gelo"
        ],
        "alternativas": []
      },
      "paladin": {
        "elementos": [
          "sagrado",
          "fisico"
        ],
        "alternativas": []
      },
      "knight": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      },
      "monk": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      }
    },
    "defesa": {
      "elementos": [
        "energia"
      ],
      "melee": true,
      "nota": "A explosão do Charging Outburst é de energia (Shockwave Amulet ajuda)."
    },
    "rotacao": {
      "knight": {
        "passos": [
          {
            "magia": "Annihilation",
            "palavras": "exori gran ico",
            "obs": "sempre que sair da recarga (30s)",
            "icone": "img/magias/annihilation.gif"
          },
          {
            "magia": "Fierce Berserk",
            "palavras": "exori gran",
            "obs": "a cada 6s",
            "icone": "img/magias/fierce-berserk.gif"
          },
          {
            "magia": "Front Sweep",
            "palavras": "exori min",
            "obs": "a cada 6s, alternando com o Fierce Berserk",
            "icone": "img/magias/front-sweep.gif"
          },
          {
            "magia": "Brutal Strike",
            "palavras": "exori ico",
            "obs": "nos intervalos (ou Shield Bash, exori ico scu, se usar escudo)",
            "icone": "img/magias/brutal-strike.gif"
          }
        ],
        "nota": "Físico 130%. Stance: Blood Rage para dano; Protector se for o blocker."
      },
      "paladin": {
        "passos": [
          {
            "magia": "Ethereal Barrage",
            "palavras": "exori dir moe",
            "obs": "a cada 4s",
            "icone": "img/magias/ethereal-barrage.gif"
          },
          {
            "magia": "Divine Barrage",
            "palavras": "exori dir san",
            "obs": "a cada 4s, alternando com a Ethereal Barrage",
            "icone": "img/magias/divine-barrage.gif"
          },
          {
            "magia": "Strong Ethereal Spear",
            "palavras": "exori gran con",
            "obs": "a cada 8s",
            "icone": "img/magias/strong-ethereal-spear.gif"
          },
          {
            "magia": "Ethereal Spear",
            "palavras": "exori con",
            "obs": "nos intervalos",
            "icone": "img/magias/ethereal-spear.gif"
          }
        ],
        "nota": "Físico 130%, holy 100%. Ataque básico com arma o tempo todo. Stance: Sharpshooter."
      },
      "sorcerer": {
        "passos": [
          {
            "magia": "Ultimate Energy Strike",
            "palavras": "exori max vis",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-energy-strike.gif"
          },
          {
            "magia": "Great Energy Beam",
            "palavras": "exevo gran vis lux",
            "obs": "a cada 6s, com o boss na reta (wave/beam)",
            "icone": "img/magias/great-energy-beam.gif"
          },
          {
            "magia": "Energy Wave",
            "palavras": "exevo vis hur",
            "obs": "a cada 8s, com o boss na reta (wave/beam)",
            "icone": "img/magias/energy-wave.gif"
          },
          {
            "magia": "Strong Energy Strike",
            "palavras": "exori gran vis",
            "obs": "a cada 8s",
            "icone": "img/magias/strong-energy-strike.gif"
          },
          {
            "magia": "Great Death Beam",
            "palavras": "exevo max mort",
            "obs": "a cada 6s, com o boss na reta (beam)",
            "icone": "img/magias/great-death-beam.gif"
          },
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "a cada 2s, sempre que nada mais forte estiver pronto",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Lightning",
            "palavras": "exori amp vis",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/lightning.gif"
          },
          {
            "magia": "Death Echo",
            "palavras": "exevo mort ora",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/death-echo.gif"
          }
        ],
        "nota": "Elemento: energia (130%). Stance: Master of Thunder."
      },
      "druid": {
        "passos": [
          {
            "magia": "Ultimate Ice Strike",
            "palavras": "exori max frigo",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-ice-strike.gif"
          },
          {
            "magia": "Strong Ice Wave",
            "palavras": "exevo gran frigo hur",
            "obs": "a cada 4s, com o boss na reta (wave/beam)",
            "icone": "img/magias/strong-ice-wave.gif"
          },
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "a cada 2s, sempre que nada mais forte estiver pronto",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Strong Ice Strike",
            "palavras": "exori gran frigo",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/strong-ice-strike.gif"
          },
          {
            "magia": "Forked Glacier",
            "palavras": "exevo fur frigo",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/forked-glacier.gif"
          }
        ],
        "nota": "Elemento: gelo (130%). Stance: Elemental Synthesis."
      },
      "monk": {
        "passos": [
          {
            "magia": "Thousand Fist Blows",
            "palavras": "exori mas amp pug",
            "obs": "builder, a cada 8s",
            "icone": "img/magias/thousand-fist-blows.gif"
          },
          {
            "magia": "Mystic Repulse",
            "palavras": "exori amp pug",
            "obs": "builder, a cada 8s (alcance 7)",
            "icone": "img/magias/mystic-repulse.gif"
          },
          {
            "magia": "Double Jab",
            "palavras": "exori pug",
            "obs": "builder, a cada 4s, até juntar 5 de Harmony",
            "icone": "img/magias/double-jab.gif"
          },
          {
            "magia": "Devastating Knockout",
            "palavras": "exori gran nia",
            "obs": "spender com 5 de Harmony (a cada 8s, alcance 7)",
            "icone": "img/magias/devastating-knockout.gif"
          },
          {
            "magia": "Forceful Uppercut",
            "palavras": "exori gran pug",
            "obs": "sempre que sair da recarga (60s)",
            "icone": "img/magias/forceful-uppercut.gif"
          }
        ],
        "nota": "Físico 130%. Gaste a Harmony só com 5 pontos (+112% de dano). Abaixo do level 125 use Greater Tiger Clash (exori nia) como spender."
      },
      "nota": "Na forma Charging Outburst só físico funciona: mago usa Explosion Rune (adevo mas hur), paladin Ethereal Spear. 12s para matar."
    },
    "tokens": [
      {
        "nome": "Gold Token",
        "qtd": "1-7",
        "raridade": "sem raridade",
        "sprite": "img/itens/gold-token.gif"
      }
    ],
    "lootTiers": [
      {
        "raridade": "sem raridade",
        "itens": [
          {
            "nome": "Gold Coin",
            "qtd": "0-200",
            "sprite": "img/itens/gold-coin.gif",
            "link": "https://www.tibiawiki.com.br/Gold_Coin"
          },
          {
            "nome": "Platinum Coin",
            "qtd": "0-35",
            "sprite": "img/itens/platinum-coin.gif",
            "link": "https://www.tibiawiki.com.br/Platinum_Coin"
          },
          {
            "nome": "Blue Gem",
            "qtd": null,
            "sprite": "img/itens/blue-gem.gif",
            "link": "https://www.tibiawiki.com.br/Blue_Gem"
          },
          {
            "nome": "Blue Crystal Shard",
            "qtd": "0-3",
            "sprite": "img/itens/blue-crystal-shard.gif",
            "link": "https://www.tibiawiki.com.br/Blue_Crystal_Shard"
          },
          {
            "nome": "Energy Bar",
            "qtd": "0-5",
            "sprite": "img/itens/energy-bar.gif",
            "link": "https://www.tibiawiki.com.br/Energy_Bar"
          },
          {
            "nome": "Energy Drink",
            "qtd": "0-5",
            "sprite": "img/itens/energy-drink.gif",
            "link": "https://www.tibiawiki.com.br/Energy_Drink"
          },
          {
            "nome": "Great Mana Potion",
            "qtd": "0-10",
            "sprite": "img/itens/great-mana-potion.gif",
            "link": "https://www.tibiawiki.com.br/Great_Mana_Potion"
          },
          {
            "nome": "Great Spirit Potion",
            "qtd": "0-5",
            "sprite": "img/itens/great-spirit-potion.gif",
            "link": "https://www.tibiawiki.com.br/Great_Spirit_Potion"
          },
          {
            "nome": "Green Crystal Shard",
            "qtd": "0-5",
            "sprite": "img/itens/green-crystal-shard.gif",
            "link": "https://www.tibiawiki.com.br/Green_Crystal_Shard"
          },
          {
            "nome": "Small Amethyst",
            "qtd": "0-10",
            "sprite": "img/itens/small-amethyst.gif",
            "link": "https://www.tibiawiki.com.br/Small_Amethyst"
          },
          {
            "nome": "Small Ruby",
            "qtd": "0-10",
            "sprite": "img/itens/small-ruby.gif",
            "link": "https://www.tibiawiki.com.br/Small_Ruby"
          },
          {
            "nome": "Small Sapphire",
            "qtd": "0-10",
            "sprite": "img/itens/small-sapphire.gif",
            "link": "https://www.tibiawiki.com.br/Small_Sapphire"
          },
          {
            "nome": "Small Topaz",
            "qtd": "0-10",
            "sprite": "img/itens/small-topaz.gif",
            "link": "https://www.tibiawiki.com.br/Small_Topaz"
          },
          {
            "nome": "Ultimate Health Potion",
            "qtd": "0-5",
            "sprite": "img/itens/ultimate-health-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Health_Potion"
          },
          {
            "nome": "Violet Crystal Shard",
            "qtd": "0-3",
            "sprite": "img/itens/violet-crystal-shard.gif",
            "link": "https://www.tibiawiki.com.br/Violet_Crystal_Shard"
          },
          {
            "nome": "Amber Staff",
            "qtd": null,
            "sprite": "img/itens/amber-staff.gif",
            "link": "https://www.tibiawiki.com.br/Amber_Staff"
          },
          {
            "nome": "Bonebreaker",
            "qtd": null,
            "sprite": "img/itens/bonebreaker.gif",
            "link": "https://www.tibiawiki.com.br/Bonebreaker"
          },
          {
            "nome": "Chaos Mace",
            "qtd": null,
            "sprite": "img/itens/chaos-mace.gif",
            "link": "https://www.tibiawiki.com.br/Chaos_Mace"
          },
          {
            "nome": "Collar of Green Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-green-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Green_Plasma"
          },
          {
            "nome": "Collar of Red Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-red-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Red_Plasma"
          },
          {
            "nome": "Crystalline Sword",
            "qtd": null,
            "sprite": "img/itens/crystalline-sword.gif",
            "link": "https://www.tibiawiki.com.br/Crystalline_Sword"
          },
          {
            "nome": "Energy Ball",
            "qtd": null,
            "sprite": "img/itens/energy-ball.gif",
            "link": "https://www.tibiawiki.com.br/Energy_Ball"
          },
          {
            "nome": "Green Gem",
            "qtd": null,
            "sprite": "img/itens/green-gem.gif",
            "link": "https://www.tibiawiki.com.br/Green_Gem"
          },
          {
            "nome": "Instable Proto Matter",
            "qtd": null,
            "sprite": "img/itens/instable-proto-matter.gif",
            "link": "https://www.tibiawiki.com.br/Instable_Proto_Matter"
          },
          {
            "nome": "Lightning Headband",
            "qtd": null,
            "sprite": "img/itens/lightning-headband.gif",
            "link": "https://www.tibiawiki.com.br/Lightning_Headband"
          },
          {
            "nome": "Lightning Legs",
            "qtd": null,
            "sprite": "img/itens/lightning-legs.gif",
            "link": "https://www.tibiawiki.com.br/Lightning_Legs"
          },
          {
            "nome": "Lightning Robe",
            "qtd": null,
            "sprite": "img/itens/lightning-robe.gif",
            "link": "https://www.tibiawiki.com.br/Lightning_Robe"
          },
          {
            "nome": "Red Gem",
            "qtd": null,
            "sprite": "img/itens/red-gem.gif",
            "link": "https://www.tibiawiki.com.br/Red_Gem"
          },
          {
            "nome": "Plasma Pearls",
            "qtd": null,
            "sprite": "img/itens/plasma-pearls.gif",
            "link": "https://www.tibiawiki.com.br/Plasma_Pearls"
          },
          {
            "nome": "Plasmatic Lightning",
            "qtd": null,
            "sprite": "img/itens/plasmatic-lightning.gif",
            "link": "https://www.tibiawiki.com.br/Plasmatic_Lightning"
          },
          {
            "nome": "Ring of Blue Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-blue-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Blue_Plasma"
          },
          {
            "nome": "Ring of Green Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-green-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Green_Plasma"
          },
          {
            "nome": "Ring of Red Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-red-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Red_Plasma"
          },
          {
            "nome": "Tiara of Power",
            "qtd": null,
            "sprite": "img/itens/tiara-of-power.gif",
            "link": "https://www.tibiawiki.com.br/Tiara_of_Power"
          },
          {
            "nome": "Void Boots",
            "qtd": null,
            "sprite": "img/itens/void-boots.gif",
            "link": "https://www.tibiawiki.com.br/Void_Boots"
          },
          {
            "nome": "Odd Organ",
            "qtd": null,
            "sprite": "img/itens/odd-organ.gif",
            "link": "https://www.tibiawiki.com.br/Odd_Organ"
          },
          {
            "nome": "Mysterious Remains",
            "qtd": null,
            "sprite": "img/itens/mysterious-remains.gif",
            "link": "https://www.tibiawiki.com.br/Mysterious_Remains"
          },
          {
            "nome": "War Axe",
            "qtd": null,
            "sprite": "img/itens/war-axe.gif",
            "link": "https://www.tibiawiki.com.br/War_Axe"
          },
          {
            "nome": "Composite Hornbow",
            "qtd": null,
            "sprite": "img/itens/composite-hornbow.gif",
            "link": "https://www.tibiawiki.com.br/Composite_Hornbow"
          },
          {
            "nome": "Yellow Gem",
            "qtd": null,
            "sprite": "img/itens/yellow-gem.gif",
            "link": "https://www.tibiawiki.com.br/Yellow_Gem"
          }
        ]
      }
    ],
    "lootStatus": "pendente",
    "mecanica": [
      "Entra com 4 [[Spark of Destruction|Sparks of Destruction]]. Lure o boss para o canto.",
      "Vira [[Charging Outburst]], vulnerável a físico: knights e monks com arma física, paladins com Strong Ethereal Spear e Ethereal Spear, magos com [[Explosion Rune]].",
      "Se não morrer em 12 segundos ele explode com muito dano de energia. Times mais fracos: [[Shockwave Amulet]] e [[Might Ring]] prontos.",
      "Causa Curse (30 de HP por turno)."
    ],
    "spritesMecanica": {
      "Spark of Destruction": "img/criaturas/spark-of-destruction.gif",
      "Charging Outburst": "img/criaturas/charging-outburst.gif",
      "Explosion Rune": "img/criaturas/explosion-rune.gif",
      "Shockwave Amulet": "img/criaturas/shockwave-amulet.gif",
      "Might Ring": "img/criaturas/might-ring.gif"
    },
    "fases": [
      {
        "nome": "Charging Outburst",
        "dica": "Só físico funciona (110%): Explosion Rune, Ethereal Spear, arma física. 12s para matar.",
        "hp": "12000",
        "elementos": {
          "fisico": "110%",
          "terra": "0%",
          "fogo": "0%",
          "morte": "0%",
          "energia": "0%",
          "sagrado": "0%",
          "gelo": "0%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/charging-outburst.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Ethereal Barrage",
              "palavras": "exori dir moe",
              "icone": "img/magias/ethereal-barrage.gif"
            },
            {
              "magia": "Strong Ethereal Spear",
              "palavras": "exori gran con",
              "icone": "img/magias/strong-ethereal-spear.gif"
            }
          ],
          "sorcerer": [],
          "druid": [],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 1,
        "elemento": {
          "sorcerer": [],
          "druid": [],
          "paladin": [
            "fisico"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Spark of Destruction",
        "dica": "Mate sempre. Imune a energia.",
        "hp": "3900",
        "elementos": {
          "fisico": "100%",
          "terra": "115%",
          "fogo": "115%",
          "morte": "100%",
          "energia": "0%",
          "sagrado": "100%",
          "gelo": "115%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/spark-of-destruction.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Flame Strike",
              "palavras": "exori max flam",
              "icone": "img/magias/ultimate-flame-strike.gif"
            },
            {
              "magia": "Great Death Beam",
              "palavras": "exevo max mort",
              "icone": "img/magias/great-death-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "fogo"
          ],
          "druid": [
            "gelo",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      }
    ],
    "link": "https://www.tibiawiki.com.br/Outburst",
    "pendencias": [
      "raridade de loot não disponível na wiki"
    ]
  },
  {
    "nome": "Rupture",
    "local": "The Void (vortex de Zao)",
    "grupo": "Heart of Destruction",
    "subgrupo": "Diários",
    "ordem": 4,
    "quest": "Heart of Destruction Quest",
    "level": {
      "quest": "Heart of Destruction Quest",
      "link": "https://www.tibiawiki.com.br/Heart_of_Destruction_Quest",
      "minimo": "150",
      "recomendado": "250"
    },
    "hp": "290000",
    "xp": "50000",
    "tipo": "archfoe",
    "sprite": "img/bosses/rupture.gif",
    "elementos": {
      "fisico": "100%",
      "terra": "105%",
      "fogo": "100%",
      "morte": "100%",
      "energia": "100%",
      "sagrado": "100%",
      "gelo": "105%",
      "cura": "100%"
    },
    "imunidades": [
      "Invisibility",
      "Paralysis"
    ],
    "podeSerPuxado": false,
    "empurraObjetos": true,
    "passaPor": [],
    "rotacaoAjustes": {
      "nota": "Quando surgir o Damage Resonance, pare tudo (cada golpe cura 4.000). Nada de utori (dano contínuo)."
    },
    "ataque": {
      "sorcerer": {
        "elementos": [
          "fogo"
        ],
        "alternativas": []
      },
      "druid": {
        "elementos": [
          "gelo"
        ],
        "alternativas": [
          "terra"
        ]
      },
      "paladin": {
        "elementos": [
          "sagrado"
        ],
        "alternativas": [
          "fisico"
        ]
      },
      "knight": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      },
      "monk": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      }
    },
    "defesa": {
      "elementos": [
        "energia"
      ],
      "melee": true,
      "nota": "Melee e Sparks (energia)."
    },
    "rotacao": {
      "knight": {
        "passos": [
          {
            "magia": "Annihilation",
            "palavras": "exori gran ico",
            "obs": "sempre que sair da recarga (30s)",
            "icone": "img/magias/annihilation.gif"
          },
          {
            "magia": "Fierce Berserk",
            "palavras": "exori gran",
            "obs": "a cada 6s",
            "icone": "img/magias/fierce-berserk.gif"
          },
          {
            "magia": "Front Sweep",
            "palavras": "exori min",
            "obs": "a cada 6s, alternando com o Fierce Berserk",
            "icone": "img/magias/front-sweep.gif"
          },
          {
            "magia": "Brutal Strike",
            "palavras": "exori ico",
            "obs": "nos intervalos (ou Shield Bash, exori ico scu, se usar escudo)",
            "icone": "img/magias/brutal-strike.gif"
          }
        ],
        "nota": "Físico 100%. Stance: Blood Rage para dano; Protector se for o blocker."
      },
      "paladin": {
        "passos": [
          {
            "magia": "Divine Grenade",
            "palavras": "exevo tempo mas san",
            "obs": "a cada 26s (level 300+)",
            "icone": "img/magias/divine-grenade.gif"
          },
          {
            "magia": "Divine Barrage",
            "palavras": "exori dir san",
            "obs": "a cada 4s",
            "icone": "img/magias/divine-barrage.gif"
          },
          {
            "magia": "Ethereal Barrage",
            "palavras": "exori dir moe",
            "obs": "a cada 4s, alternando com a Divine Barrage",
            "icone": "img/magias/ethereal-barrage.gif"
          },
          {
            "magia": "Divine Missile",
            "palavras": "exori san",
            "obs": "nos intervalos",
            "icone": "img/magias/divine-missile.gif"
          }
        ],
        "nota": "Holy 100%, físico 100%. Ataque básico com arma o tempo todo. Stance: Sharpshooter."
      },
      "sorcerer": {
        "passos": [
          {
            "magia": "Ultimate Energy Strike",
            "palavras": "exori max vis",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-energy-strike.gif"
          },
          {
            "magia": "Great Energy Beam",
            "palavras": "exevo gran vis lux",
            "obs": "a cada 6s, com o boss na reta (wave/beam)",
            "icone": "img/magias/great-energy-beam.gif"
          },
          {
            "magia": "Great Death Beam",
            "palavras": "exevo max mort",
            "obs": "a cada 6s, com o boss na reta (beam)",
            "icone": "img/magias/great-death-beam.gif"
          },
          {
            "magia": "Energy Wave",
            "palavras": "exevo vis hur",
            "obs": "a cada 8s, com o boss na reta (wave/beam)",
            "icone": "img/magias/energy-wave.gif"
          },
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "a cada 2s, sempre que nada mais forte estiver pronto",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Strong Energy Strike",
            "palavras": "exori gran vis",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/strong-energy-strike.gif"
          },
          {
            "magia": "Death Echo",
            "palavras": "exevo mort ora",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/death-echo.gif"
          },
          {
            "magia": "Lightning",
            "palavras": "exori amp vis",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/lightning.gif"
          }
        ],
        "nota": "Elemento: energia (100%). Stance: Master of Thunder."
      },
      "druid": {
        "passos": [
          {
            "magia": "Ultimate Ice Strike",
            "palavras": "exori max frigo",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-ice-strike.gif"
          },
          {
            "magia": "Strong Ice Wave",
            "palavras": "exevo gran frigo hur",
            "obs": "a cada 4s, com o boss na reta (wave/beam)",
            "icone": "img/magias/strong-ice-wave.gif"
          },
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "a cada 2s, sempre que nada mais forte estiver pronto",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Strong Ice Strike",
            "palavras": "exori gran frigo",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/strong-ice-strike.gif"
          },
          {
            "magia": "Forked Glacier",
            "palavras": "exevo fur frigo",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/forked-glacier.gif"
          }
        ],
        "nota": "Elemento: gelo (105%). Stance: Elemental Synthesis."
      },
      "monk": {
        "passos": [
          {
            "magia": "Thousand Fist Blows",
            "palavras": "exori mas amp pug",
            "obs": "builder, a cada 8s",
            "icone": "img/magias/thousand-fist-blows.gif"
          },
          {
            "magia": "Mystic Repulse",
            "palavras": "exori amp pug",
            "obs": "builder, a cada 8s (alcance 7)",
            "icone": "img/magias/mystic-repulse.gif"
          },
          {
            "magia": "Double Jab",
            "palavras": "exori pug",
            "obs": "builder, a cada 4s, até juntar 5 de Harmony",
            "icone": "img/magias/double-jab.gif"
          },
          {
            "magia": "Devastating Knockout",
            "palavras": "exori gran nia",
            "obs": "spender com 5 de Harmony (a cada 8s, alcance 7)",
            "icone": "img/magias/devastating-knockout.gif"
          },
          {
            "magia": "Forceful Uppercut",
            "palavras": "exori gran pug",
            "obs": "sempre que sair da recarga (60s)",
            "icone": "img/magias/forceful-uppercut.gif"
          }
        ],
        "nota": "Físico 100%. Gaste a Harmony só com 5 pontos (+112% de dano). Abaixo do level 125 use Greater Tiger Clash (exori nia) como spender."
      },
      "nota": "Quando surgir o Damage Resonance, pare tudo (cada golpe cura 4.000). Nada de utori (dano contínuo)."
    },
    "tokens": [
      {
        "nome": "Gold Token",
        "qtd": "1-7",
        "raridade": "comum",
        "sprite": "img/itens/gold-token.gif"
      }
    ],
    "lootTiers": [
      {
        "raridade": "comum",
        "itens": [
          {
            "nome": "Gold Coin",
            "qtd": "0-200",
            "sprite": "img/itens/gold-coin.gif",
            "link": "https://www.tibiawiki.com.br/Gold_Coin"
          },
          {
            "nome": "Platinum Coin",
            "qtd": "0-25",
            "sprite": "img/itens/platinum-coin.gif",
            "link": "https://www.tibiawiki.com.br/Platinum_Coin"
          },
          {
            "nome": "Great Mana Potion",
            "qtd": "0-10",
            "sprite": "img/itens/great-mana-potion.gif",
            "link": "https://www.tibiawiki.com.br/Great_Mana_Potion"
          },
          {
            "nome": "Great Spirit Potion",
            "qtd": "0-10",
            "sprite": "img/itens/great-spirit-potion.gif",
            "link": "https://www.tibiawiki.com.br/Great_Spirit_Potion"
          },
          {
            "nome": "Ultimate Health Potion",
            "qtd": "0-10",
            "sprite": "img/itens/ultimate-health-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Health_Potion"
          },
          {
            "nome": "Blue Crystal Shard",
            "qtd": "0-3",
            "sprite": "img/itens/blue-crystal-shard.gif",
            "link": "https://www.tibiawiki.com.br/Blue_Crystal_Shard"
          },
          {
            "nome": "Blue Gem",
            "qtd": null,
            "sprite": "img/itens/blue-gem.gif",
            "link": "https://www.tibiawiki.com.br/Blue_Gem"
          },
          {
            "nome": "Energy Bar",
            "qtd": "0-5",
            "sprite": "img/itens/energy-bar.gif",
            "link": "https://www.tibiawiki.com.br/Energy_Bar"
          },
          {
            "nome": "Green Crystal Shard",
            "qtd": "0-3",
            "sprite": "img/itens/green-crystal-shard.gif",
            "link": "https://www.tibiawiki.com.br/Green_Crystal_Shard"
          },
          {
            "nome": "Green Gem",
            "qtd": null,
            "sprite": "img/itens/green-gem.gif",
            "link": "https://www.tibiawiki.com.br/Green_Gem"
          },
          {
            "nome": "Mysterious Remains",
            "qtd": null,
            "sprite": "img/itens/mysterious-remains.gif",
            "link": "https://www.tibiawiki.com.br/Mysterious_Remains"
          },
          {
            "nome": "Odd Organ",
            "qtd": null,
            "sprite": "img/itens/odd-organ.gif",
            "link": "https://www.tibiawiki.com.br/Odd_Organ"
          },
          {
            "nome": "Plasmatic Lightning",
            "qtd": null,
            "sprite": "img/itens/plasmatic-lightning.gif",
            "link": "https://www.tibiawiki.com.br/Plasmatic_Lightning"
          },
          {
            "nome": "Plasma Pearls",
            "qtd": null,
            "sprite": "img/itens/plasma-pearls.gif",
            "link": "https://www.tibiawiki.com.br/Plasma_Pearls"
          },
          {
            "nome": "Red Gem",
            "qtd": null,
            "sprite": "img/itens/red-gem.gif",
            "link": "https://www.tibiawiki.com.br/Red_Gem"
          },
          {
            "nome": "Small Amethyst",
            "qtd": "0-10",
            "sprite": "img/itens/small-amethyst.gif",
            "link": "https://www.tibiawiki.com.br/Small_Amethyst"
          },
          {
            "nome": "Small Emerald",
            "qtd": "0-10",
            "sprite": "img/itens/small-emerald.gif",
            "link": "https://www.tibiawiki.com.br/Small_Emerald"
          },
          {
            "nome": "Small Sapphire",
            "qtd": "0-5",
            "sprite": "img/itens/small-sapphire.gif",
            "link": "https://www.tibiawiki.com.br/Small_Sapphire"
          },
          {
            "nome": "Small Topaz",
            "qtd": "0-10",
            "sprite": "img/itens/small-topaz.gif",
            "link": "https://www.tibiawiki.com.br/Small_Topaz"
          },
          {
            "nome": "Violet Crystal Shard",
            "qtd": "0-3",
            "sprite": "img/itens/violet-crystal-shard.gif",
            "link": "https://www.tibiawiki.com.br/Violet_Crystal_Shard"
          },
          {
            "nome": "Yellow Gem",
            "qtd": null,
            "sprite": "img/itens/yellow-gem.gif",
            "link": "https://www.tibiawiki.com.br/Yellow_Gem"
          }
        ]
      },
      {
        "raridade": "semi-raro",
        "itens": [
          {
            "nome": "Collar of Blue Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-blue-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Blue_Plasma"
          },
          {
            "nome": "Collar of Red Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-red-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Red_Plasma"
          },
          {
            "nome": "Ring of Blue Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-blue-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Blue_Plasma"
          },
          {
            "nome": "Ring of Green Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-green-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Green_Plasma"
          },
          {
            "nome": "Ring of Red Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-red-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Red_Plasma"
          },
          {
            "nome": "Tiara of Power",
            "qtd": null,
            "sprite": "img/itens/tiara-of-power.gif",
            "link": "https://www.tibiawiki.com.br/Tiara_of_Power"
          },
          {
            "nome": "Void Boots",
            "qtd": null,
            "sprite": "img/itens/void-boots.gif",
            "link": "https://www.tibiawiki.com.br/Void_Boots"
          }
        ]
      },
      {
        "raridade": "raro",
        "itens": [
          {
            "nome": "Amber Staff",
            "qtd": null,
            "sprite": "img/itens/amber-staff.gif",
            "link": "https://www.tibiawiki.com.br/Amber_Staff"
          },
          {
            "nome": "Berserker",
            "qtd": null,
            "sprite": "img/itens/berserker.gif",
            "link": "https://www.tibiawiki.com.br/Berserker"
          },
          {
            "nome": "Chaos Mace",
            "qtd": null,
            "sprite": "img/itens/chaos-mace.gif",
            "link": "https://www.tibiawiki.com.br/Chaos_Mace"
          }
        ]
      },
      {
        "raridade": "muito raro",
        "itens": [
          {
            "nome": "Ruthless Axe",
            "qtd": null,
            "sprite": "img/itens/ruthless-axe.gif",
            "link": "https://www.tibiawiki.com.br/Ruthless_Axe"
          }
        ]
      }
    ],
    "lootStatus": "ok",
    "mecanica": [
      "Entra com 4 [[Spark of Destruction|Sparks of Destruction]]: mate os Sparks e trape o boss num canto. Com 1 blocker só, há um SQM perto da fissura central que trava o boss.",
      "Quando surgir o [[Damage Resonance]] (com mais 4 Sparks), TODOS param de bater no Rupture: cada ataque nele cura 4.000. Não use dano contínuo (utori).",
      "Mate o Damage Resonance com alvo único (ele é rápido): mages tiram wand/rod, paladins a munição, knights a arma. Depois volte ao boss."
    ],
    "spritesMecanica": {
      "Spark of Destruction": "img/criaturas/spark-of-destruction.gif",
      "Damage Resonance": "img/criaturas/damage-resonance.gif"
    },
    "fases": [
      {
        "nome": "Damage Resonance",
        "dica": "Quando surgir, TODOS param de bater no Rupture e matam ele com alvo único (é rápido).",
        "hp": "11000",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/damage-resonance.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo",
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Spark of Destruction",
        "dica": "Vêm junto com o Resonance: deixe para depois. Imune a energia.",
        "hp": "3900",
        "elementos": {
          "fisico": "100%",
          "terra": "115%",
          "fogo": "115%",
          "morte": "100%",
          "energia": "0%",
          "sagrado": "100%",
          "gelo": "115%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/spark-of-destruction.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Flame Strike",
              "palavras": "exori max flam",
              "icone": "img/magias/ultimate-flame-strike.gif"
            },
            {
              "magia": "Great Death Beam",
              "palavras": "exevo max mort",
              "icone": "img/magias/great-death-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "fogo"
          ],
          "druid": [
            "gelo",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      }
    ],
    "link": "https://www.tibiawiki.com.br/Rupture",
    "pendencias": []
  },
  {
    "nome": "Realityquake",
    "local": "The Void (vortex de Svargrond)",
    "grupo": "Heart of Destruction",
    "subgrupo": "Diários",
    "ordem": 5,
    "quest": "Heart of Destruction Quest",
    "level": {
      "quest": "Heart of Destruction Quest",
      "link": "https://www.tibiawiki.com.br/Heart_of_Destruction_Quest",
      "minimo": "150",
      "recomendado": "250"
    },
    "hp": "110000",
    "xp": "32000",
    "tipo": "archfoe",
    "sprite": "img/bosses/realityquake.gif",
    "elementos": {
      "fisico": "100%",
      "terra": "100%",
      "fogo": "100%",
      "morte": "100%",
      "energia": "100%",
      "sagrado": "100%",
      "gelo": "100%",
      "cura": "100%"
    },
    "imunidades": [
      "Invisibility",
      "Paralysis"
    ],
    "podeSerPuxado": false,
    "empurraObjetos": true,
    "passaPor": [],
    "rotacaoAjustes": {
      "nota": "Fases: Foreshock é imune a death (use gelo/energia); Aftershock é imune a físico (use death/terra/fogo).",
      "notas": {
        "knight": "Troque de arma: gelo/energia no Foreshock; death/terra/fogo no Aftershock (imune a físico).",
        "paladin": "Foreshock: magias físicas. Aftershock: Divine Caldera (exevo mas san) e SD.",
        "sorcerer": "Foreshock: energia (imune a death). Aftershock: SD.",
        "druid": "Foreshock: gelo. Aftershock: terra ou SD.",
        "monk": "Foreshock: arma de energia/físico. Aftershock: arma de terra (imune a físico)."
      }
    },
    "ataque": {
      "sorcerer": {
        "elementos": [
          "energia",
          "morte"
        ],
        "alternativas": []
      },
      "druid": {
        "elementos": [
          "gelo",
          "morte"
        ],
        "alternativas": []
      },
      "paladin": {
        "elementos": [
          "sagrado",
          "fisico"
        ],
        "alternativas": []
      },
      "knight": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      },
      "monk": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      }
    },
    "defesa": {
      "elementos": [
        "energia"
      ],
      "melee": true,
      "nota": "Sparks (energia) e as duas formas batem físico."
    },
    "rotacao": {
      "knight": {
        "passos": [
          {
            "magia": "Annihilation",
            "palavras": "exori gran ico",
            "obs": "sempre que sair da recarga (30s)",
            "icone": "img/magias/annihilation.gif"
          },
          {
            "magia": "Fierce Berserk",
            "palavras": "exori gran",
            "obs": "a cada 6s",
            "icone": "img/magias/fierce-berserk.gif"
          },
          {
            "magia": "Front Sweep",
            "palavras": "exori min",
            "obs": "a cada 6s, alternando com o Fierce Berserk",
            "icone": "img/magias/front-sweep.gif"
          },
          {
            "magia": "Brutal Strike",
            "palavras": "exori ico",
            "obs": "nos intervalos (ou Shield Bash, exori ico scu, se usar escudo)",
            "icone": "img/magias/brutal-strike.gif"
          }
        ],
        "nota": "Físico 100%. Stance: Blood Rage para dano; Protector se for o blocker. Troque de arma: gelo/energia no Foreshock; death/terra/fogo no Aftershock (imune a físico)."
      },
      "paladin": {
        "passos": [
          {
            "magia": "Divine Grenade",
            "palavras": "exevo tempo mas san",
            "obs": "a cada 26s (level 300+)",
            "icone": "img/magias/divine-grenade.gif"
          },
          {
            "magia": "Divine Barrage",
            "palavras": "exori dir san",
            "obs": "a cada 4s",
            "icone": "img/magias/divine-barrage.gif"
          },
          {
            "magia": "Ethereal Barrage",
            "palavras": "exori dir moe",
            "obs": "a cada 4s, alternando com a Divine Barrage",
            "icone": "img/magias/ethereal-barrage.gif"
          },
          {
            "magia": "Divine Missile",
            "palavras": "exori san",
            "obs": "nos intervalos",
            "icone": "img/magias/divine-missile.gif"
          }
        ],
        "nota": "Holy 100%, físico 100%. Ataque básico com arma o tempo todo. Stance: Sharpshooter. Foreshock: magias físicas. Aftershock: Divine Caldera (exevo mas san) e SD."
      },
      "sorcerer": {
        "passos": [
          {
            "magia": "Ultimate Energy Strike",
            "palavras": "exori max vis",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-energy-strike.gif"
          },
          {
            "magia": "Great Energy Beam",
            "palavras": "exevo gran vis lux",
            "obs": "a cada 6s, com o boss na reta (wave/beam)",
            "icone": "img/magias/great-energy-beam.gif"
          },
          {
            "magia": "Great Death Beam",
            "palavras": "exevo max mort",
            "obs": "a cada 6s, com o boss na reta (beam)",
            "icone": "img/magias/great-death-beam.gif"
          },
          {
            "magia": "Energy Wave",
            "palavras": "exevo vis hur",
            "obs": "a cada 8s, com o boss na reta (wave/beam)",
            "icone": "img/magias/energy-wave.gif"
          },
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "a cada 2s, sempre que nada mais forte estiver pronto",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Strong Energy Strike",
            "palavras": "exori gran vis",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/strong-energy-strike.gif"
          },
          {
            "magia": "Death Echo",
            "palavras": "exevo mort ora",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/death-echo.gif"
          },
          {
            "magia": "Lightning",
            "palavras": "exori amp vis",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/lightning.gif"
          }
        ],
        "nota": "Elemento: energia (100%). Stance: Master of Thunder. Foreshock: energia (imune a death). Aftershock: SD."
      },
      "druid": {
        "passos": [
          {
            "magia": "Ultimate Ice Strike",
            "palavras": "exori max frigo",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-ice-strike.gif"
          },
          {
            "magia": "Strong Ice Wave",
            "palavras": "exevo gran frigo hur",
            "obs": "a cada 4s, com o boss na reta (wave/beam)",
            "icone": "img/magias/strong-ice-wave.gif"
          },
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "a cada 2s, sempre que nada mais forte estiver pronto",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Strong Ice Strike",
            "palavras": "exori gran frigo",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/strong-ice-strike.gif"
          },
          {
            "magia": "Forked Glacier",
            "palavras": "exevo fur frigo",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/forked-glacier.gif"
          }
        ],
        "nota": "Elemento: gelo (100%). Stance: Elemental Synthesis. Foreshock: gelo. Aftershock: terra ou SD."
      },
      "monk": {
        "passos": [
          {
            "magia": "Thousand Fist Blows",
            "palavras": "exori mas amp pug",
            "obs": "builder, a cada 8s",
            "icone": "img/magias/thousand-fist-blows.gif"
          },
          {
            "magia": "Mystic Repulse",
            "palavras": "exori amp pug",
            "obs": "builder, a cada 8s (alcance 7)",
            "icone": "img/magias/mystic-repulse.gif"
          },
          {
            "magia": "Double Jab",
            "palavras": "exori pug",
            "obs": "builder, a cada 4s, até juntar 5 de Harmony",
            "icone": "img/magias/double-jab.gif"
          },
          {
            "magia": "Devastating Knockout",
            "palavras": "exori gran nia",
            "obs": "spender com 5 de Harmony (a cada 8s, alcance 7)",
            "icone": "img/magias/devastating-knockout.gif"
          },
          {
            "magia": "Forceful Uppercut",
            "palavras": "exori gran pug",
            "obs": "sempre que sair da recarga (60s)",
            "icone": "img/magias/forceful-uppercut.gif"
          }
        ],
        "nota": "Físico 100%. Gaste a Harmony só com 5 pontos (+112% de dano). Abaixo do level 125 use Greater Tiger Clash (exori nia) como spender. Foreshock: arma de energia/físico. Aftershock: arma de terra (imune a físico)."
      },
      "nota": "Fases: Foreshock é imune a death (use gelo/energia); Aftershock é imune a físico (use death/terra/fogo)."
    },
    "tokens": [
      {
        "nome": "Gold Token",
        "qtd": "1-7",
        "raridade": "sem raridade",
        "sprite": "img/itens/gold-token.gif"
      }
    ],
    "lootTiers": [
      {
        "raridade": "sem raridade",
        "itens": [
          {
            "nome": "Gold Coin",
            "qtd": "0-200",
            "sprite": "img/itens/gold-coin.gif",
            "link": "https://www.tibiawiki.com.br/Gold_Coin"
          },
          {
            "nome": "Platinum Coin",
            "qtd": "0-35",
            "sprite": "img/itens/platinum-coin.gif",
            "link": "https://www.tibiawiki.com.br/Platinum_Coin"
          },
          {
            "nome": "Great Mana Potion",
            "qtd": "0-10",
            "sprite": "img/itens/great-mana-potion.gif",
            "link": "https://www.tibiawiki.com.br/Great_Mana_Potion"
          },
          {
            "nome": "Great Spirit Potion",
            "qtd": "0-5",
            "sprite": "img/itens/great-spirit-potion.gif",
            "link": "https://www.tibiawiki.com.br/Great_Spirit_Potion"
          },
          {
            "nome": "Ultimate Health Potion",
            "qtd": "0-10",
            "sprite": "img/itens/ultimate-health-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Health_Potion"
          },
          {
            "nome": "Energy Bar",
            "qtd": "0-5",
            "sprite": "img/itens/energy-bar.gif",
            "link": "https://www.tibiawiki.com.br/Energy_Bar"
          },
          {
            "nome": "Blue Crystal Shard",
            "qtd": "0-3",
            "sprite": "img/itens/blue-crystal-shard.gif",
            "link": "https://www.tibiawiki.com.br/Blue_Crystal_Shard"
          },
          {
            "nome": "Green Crystal Shard",
            "qtd": "0-3",
            "sprite": "img/itens/green-crystal-shard.gif",
            "link": "https://www.tibiawiki.com.br/Green_Crystal_Shard"
          },
          {
            "nome": "Small Amethyst",
            "qtd": "0-10",
            "sprite": "img/itens/small-amethyst.gif",
            "link": "https://www.tibiawiki.com.br/Small_Amethyst"
          },
          {
            "nome": "Small Emerald",
            "qtd": "0-5",
            "sprite": "img/itens/small-emerald.gif",
            "link": "https://www.tibiawiki.com.br/Small_Emerald"
          },
          {
            "nome": "Small Ruby",
            "qtd": "0-5",
            "sprite": "img/itens/small-ruby.gif",
            "link": "https://www.tibiawiki.com.br/Small_Ruby"
          },
          {
            "nome": "Small Topaz",
            "qtd": "0-10",
            "sprite": "img/itens/small-topaz.gif",
            "link": "https://www.tibiawiki.com.br/Small_Topaz"
          },
          {
            "nome": "Violet Crystal Shard",
            "qtd": "0-3",
            "sprite": "img/itens/violet-crystal-shard.gif",
            "link": "https://www.tibiawiki.com.br/Violet_Crystal_Shard"
          },
          {
            "nome": "Collar of Blue Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-blue-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Blue_Plasma"
          },
          {
            "nome": "Crystalline Armor",
            "qtd": null,
            "sprite": "img/itens/crystalline-armor.gif",
            "link": "https://www.tibiawiki.com.br/Crystalline_Armor"
          },
          {
            "nome": "Crystallized Anger",
            "qtd": null,
            "sprite": "img/itens/crystallized-anger.gif",
            "link": "https://www.tibiawiki.com.br/Crystallized_Anger"
          },
          {
            "nome": "Energy Vein",
            "qtd": null,
            "sprite": "img/itens/energy-vein.gif",
            "link": "https://www.tibiawiki.com.br/Energy_Vein"
          },
          {
            "nome": "Giant Shimmering Pearl",
            "qtd": null,
            "sprite": "img/itens/giant-shimmering-pearl.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Shimmering_Pearl"
          },
          {
            "nome": "Golden Legs",
            "qtd": null,
            "sprite": "img/itens/golden-legs.gif",
            "link": "https://www.tibiawiki.com.br/Golden_Legs"
          },
          {
            "nome": "Lightning Robe",
            "qtd": null,
            "sprite": "img/itens/lightning-robe.gif",
            "link": "https://www.tibiawiki.com.br/Lightning_Robe"
          },
          {
            "nome": "Ring of Blue Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-blue-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Blue_Plasma"
          },
          {
            "nome": "Vile Axe",
            "qtd": null,
            "sprite": "img/itens/vile-axe.gif",
            "link": "https://www.tibiawiki.com.br/Vile_Axe"
          },
          {
            "nome": "Plasmatic Lightning",
            "qtd": null,
            "sprite": "img/itens/plasmatic-lightning.gif",
            "link": "https://www.tibiawiki.com.br/Plasmatic_Lightning"
          },
          {
            "nome": "Red Gem",
            "qtd": null,
            "sprite": "img/itens/red-gem.gif",
            "link": "https://www.tibiawiki.com.br/Red_Gem"
          },
          {
            "nome": "Ring of Green Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-green-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Green_Plasma"
          },
          {
            "nome": "Ring of Red Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-red-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Red_Plasma"
          },
          {
            "nome": "Violet Gem",
            "qtd": null,
            "sprite": "img/itens/violet-gem.gif",
            "link": "https://www.tibiawiki.com.br/Violet_Gem"
          },
          {
            "nome": "Wand of Cosmic Energy",
            "qtd": null,
            "sprite": "img/itens/wand-of-cosmic-energy.gif",
            "link": "https://www.tibiawiki.com.br/Wand_of_Cosmic_Energy"
          },
          {
            "nome": "Mysterious Remains",
            "qtd": null,
            "sprite": "img/itens/mysterious-remains.gif",
            "link": "https://www.tibiawiki.com.br/Mysterious_Remains"
          },
          {
            "nome": "Odd Organ",
            "qtd": null,
            "sprite": "img/itens/odd-organ.gif",
            "link": "https://www.tibiawiki.com.br/Odd_Organ"
          }
        ]
      }
    ],
    "lootStatus": "pendente",
    "mecanica": [
      "Começa como [[Foreshock]] (+ Sparks) e anda o tempo todo: não adianta trapar.",
      "Foreshock: imune a death. Use gelo ou energia (knights com arma de gelo/energia, paladins com magias físicas, monks com energia/físico).",
      "[[Aftershock]] (teleporta ao centro e invoca 4 [[Spark of Destruction|Sparks]]): imune a físico. Use death, terra ou fogo (paladins: Divine Caldera e SD; monks: arma de terra).",
      "Alterna entre as duas formas até ambas morrerem; aí surge a forma final, Realityquake, com mais Sparks."
    ],
    "spritesMecanica": {
      "Foreshock": "img/criaturas/foreshock.gif",
      "Aftershock": "img/criaturas/aftershock.gif",
      "Spark of Destruction": "img/criaturas/spark-of-destruction.gif"
    },
    "fases": [
      {
        "nome": "Foreshock",
        "dica": "Forma 1: imune a death e terra; fraco a gelo e energia (120%).",
        "hp": "105000",
        "elementos": {
          "fisico": "100%",
          "terra": "0%",
          "fogo": "0%",
          "morte": "0%",
          "energia": "120%",
          "sagrado": "0%",
          "gelo": "120%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/foreshock.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Ethereal Barrage",
              "palavras": "exori dir moe",
              "icone": "img/magias/ethereal-barrage.gif"
            },
            {
              "magia": "Strong Ethereal Spear",
              "palavras": "exori gran con",
              "icone": "img/magias/strong-ethereal-spear.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 1,
        "elemento": {
          "sorcerer": [
            "energia"
          ],
          "druid": [
            "gelo"
          ],
          "paladin": [
            "fisico"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Aftershock",
        "dica": "Forma 2: imune a físico, gelo e energia. Use death, terra ou fogo.",
        "hp": "105000?",
        "elementos": {
          "fisico": "0%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "100%",
          "energia": "0%",
          "sagrado": "100%",
          "gelo": "0%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/aftershock.gif",
        "ataques": {
          "knight": [],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Flame Strike",
              "palavras": "exori max flam",
              "icone": "img/magias/ultimate-flame-strike.gif"
            },
            {
              "magia": "Great Death Beam",
              "palavras": "exevo max mort",
              "icone": "img/magias/great-death-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Terra Strike",
              "palavras": "exori max tera",
              "icone": "img/magias/ultimate-terra-strike.gif"
            },
            {
              "magia": "Sudden Death Rune",
              "palavras": "adori gran mort",
              "icone": "img/magias/sudden-death-rune.gif"
            }
          ],
          "monk": []
        },
        "peso": 1,
        "elemento": {
          "sorcerer": [
            "fogo",
            "morte"
          ],
          "druid": [
            "morte",
            "terra"
          ],
          "paladin": [
            "sagrado"
          ],
          "knight": [],
          "monk": []
        }
      },
      {
        "nome": "Spark of Destruction",
        "dica": "Mate sempre. Imune a energia.",
        "hp": "3900",
        "elementos": {
          "fisico": "100%",
          "terra": "115%",
          "fogo": "115%",
          "morte": "100%",
          "energia": "0%",
          "sagrado": "100%",
          "gelo": "115%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/spark-of-destruction.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Flame Strike",
              "palavras": "exori max flam",
              "icone": "img/magias/ultimate-flame-strike.gif"
            },
            {
              "magia": "Great Death Beam",
              "palavras": "exevo max mort",
              "icone": "img/magias/great-death-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "fogo"
          ],
          "druid": [
            "gelo",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      }
    ],
    "link": "https://www.tibiawiki.com.br/Realityquake",
    "pendencias": [
      "raridade de loot não disponível na wiki"
    ]
  },
  {
    "nome": "World Devourer",
    "local": "The Void",
    "grupo": "Heart of Destruction",
    "subgrupo": "Last GT",
    "ordem": 6,
    "quest": "Heart of Destruction Quest",
    "level": {
      "quest": "Heart of Destruction Quest",
      "link": "https://www.tibiawiki.com.br/Heart_of_Destruction_Quest",
      "minimo": "150",
      "recomendado": "250"
    },
    "hp": "500000",
    "xp": "50000",
    "tipo": "nemesis",
    "sprite": "img/bosses/world-devourer.gif",
    "elementos": {
      "fisico": "100%",
      "terra": "100%",
      "fogo": "100%",
      "morte": "100%",
      "energia": "100%",
      "sagrado": "100%",
      "gelo": "100%",
      "cura": "100%"
    },
    "imunidades": [
      "Invisibility",
      "Paralysis"
    ],
    "podeSerPuxado": false,
    "empurraObjetos": true,
    "passaPor": [
      "Fire",
      "Energy",
      "Poison"
    ],
    "ataque": {
      "sorcerer": {
        "elementos": [
          "fogo",
          "morte"
        ],
        "alternativas": []
      },
      "druid": {
        "elementos": [
          "gelo"
        ],
        "alternativas": [
          "terra"
        ]
      },
      "paladin": {
        "elementos": [
          "sagrado"
        ],
        "alternativas": [
          "fisico"
        ]
      },
      "knight": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      },
      "monk": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      }
    },
    "defesa": {
      "elementos": [
        "energia"
      ],
      "melee": true,
      "nota": "Muitos Sparks (energia); Frenzy e Disruption batem forte de perto."
    },
    "rotacao": {
      "knight": {
        "passos": [
          {
            "magia": "Annihilation",
            "palavras": "exori gran ico",
            "obs": "sempre que sair da recarga (30s)",
            "icone": "img/magias/annihilation.gif"
          },
          {
            "magia": "Fierce Berserk",
            "palavras": "exori gran",
            "obs": "a cada 6s",
            "icone": "img/magias/fierce-berserk.gif"
          },
          {
            "magia": "Front Sweep",
            "palavras": "exori min",
            "obs": "a cada 6s, alternando com o Fierce Berserk",
            "icone": "img/magias/front-sweep.gif"
          },
          {
            "magia": "Brutal Strike",
            "palavras": "exori ico",
            "obs": "nos intervalos (ou Shield Bash, exori ico scu, se usar escudo)",
            "icone": "img/magias/brutal-strike.gif"
          }
        ],
        "nota": "Físico 100%. Stance: Blood Rage para dano; Protector se for o blocker."
      },
      "paladin": {
        "passos": [
          {
            "magia": "Divine Grenade",
            "palavras": "exevo tempo mas san",
            "obs": "a cada 26s (level 300+)",
            "icone": "img/magias/divine-grenade.gif"
          },
          {
            "magia": "Divine Barrage",
            "palavras": "exori dir san",
            "obs": "a cada 4s",
            "icone": "img/magias/divine-barrage.gif"
          },
          {
            "magia": "Ethereal Barrage",
            "palavras": "exori dir moe",
            "obs": "a cada 4s, alternando com a Divine Barrage",
            "icone": "img/magias/ethereal-barrage.gif"
          },
          {
            "magia": "Divine Missile",
            "palavras": "exori san",
            "obs": "nos intervalos",
            "icone": "img/magias/divine-missile.gif"
          }
        ],
        "nota": "Holy 100%, físico 100%. Ataque básico com arma o tempo todo. Stance: Sharpshooter."
      },
      "sorcerer": {
        "passos": [
          {
            "magia": "Ultimate Energy Strike",
            "palavras": "exori max vis",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-energy-strike.gif"
          },
          {
            "magia": "Great Energy Beam",
            "palavras": "exevo gran vis lux",
            "obs": "a cada 6s, com o boss na reta (wave/beam)",
            "icone": "img/magias/great-energy-beam.gif"
          },
          {
            "magia": "Great Death Beam",
            "palavras": "exevo max mort",
            "obs": "a cada 6s, com o boss na reta (beam)",
            "icone": "img/magias/great-death-beam.gif"
          },
          {
            "magia": "Energy Wave",
            "palavras": "exevo vis hur",
            "obs": "a cada 8s, com o boss na reta (wave/beam)",
            "icone": "img/magias/energy-wave.gif"
          },
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "a cada 2s, sempre que nada mais forte estiver pronto",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Strong Energy Strike",
            "palavras": "exori gran vis",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/strong-energy-strike.gif"
          },
          {
            "magia": "Death Echo",
            "palavras": "exevo mort ora",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/death-echo.gif"
          },
          {
            "magia": "Lightning",
            "palavras": "exori amp vis",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/lightning.gif"
          }
        ],
        "nota": "Elemento: energia (100%). Stance: Master of Thunder."
      },
      "druid": {
        "passos": [
          {
            "magia": "Ultimate Ice Strike",
            "palavras": "exori max frigo",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-ice-strike.gif"
          },
          {
            "magia": "Strong Ice Wave",
            "palavras": "exevo gran frigo hur",
            "obs": "a cada 4s, com o boss na reta (wave/beam)",
            "icone": "img/magias/strong-ice-wave.gif"
          },
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "a cada 2s, sempre que nada mais forte estiver pronto",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Strong Ice Strike",
            "palavras": "exori gran frigo",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/strong-ice-strike.gif"
          },
          {
            "magia": "Forked Glacier",
            "palavras": "exevo fur frigo",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/forked-glacier.gif"
          }
        ],
        "nota": "Elemento: gelo (100%). Stance: Elemental Synthesis."
      },
      "monk": {
        "passos": [
          {
            "magia": "Thousand Fist Blows",
            "palavras": "exori mas amp pug",
            "obs": "builder, a cada 8s",
            "icone": "img/magias/thousand-fist-blows.gif"
          },
          {
            "magia": "Mystic Repulse",
            "palavras": "exori amp pug",
            "obs": "builder, a cada 8s (alcance 7)",
            "icone": "img/magias/mystic-repulse.gif"
          },
          {
            "magia": "Double Jab",
            "palavras": "exori pug",
            "obs": "builder, a cada 4s, até juntar 5 de Harmony",
            "icone": "img/magias/double-jab.gif"
          },
          {
            "magia": "Devastating Knockout",
            "palavras": "exori gran nia",
            "obs": "spender com 5 de Harmony (a cada 8s, alcance 7)",
            "icone": "img/magias/devastating-knockout.gif"
          },
          {
            "magia": "Forceful Uppercut",
            "palavras": "exori gran pug",
            "obs": "sempre que sair da recarga (60s)",
            "icone": "img/magias/forceful-uppercut.gif"
          }
        ],
        "nota": "Físico 100%. Gaste a Harmony só com 5 pontos (+112% de dano). Abaixo do level 125 use Greater Tiger Clash (exori nia) como spender."
      }
    },
    "tokens": [
      {
        "nome": "Gold Token",
        "qtd": "1-31",
        "raridade": "comum",
        "sprite": "img/itens/gold-token.gif"
      },
      {
        "nome": "Silver Token",
        "qtd": "0-5",
        "raridade": "muito raro",
        "sprite": "img/itens/silver-token.gif"
      }
    ],
    "lootTiers": [
      {
        "raridade": "comum",
        "itens": [
          {
            "nome": "Gold Coin",
            "qtd": "0-200",
            "sprite": "img/itens/gold-coin.gif",
            "link": "https://www.tibiawiki.com.br/Gold_Coin"
          },
          {
            "nome": "Platinum Coin",
            "qtd": "0-26",
            "sprite": "img/itens/platinum-coin.gif",
            "link": "https://www.tibiawiki.com.br/Platinum_Coin"
          },
          {
            "nome": "Great Mana Potion",
            "qtd": "0-5",
            "sprite": "img/itens/great-mana-potion.gif",
            "link": "https://www.tibiawiki.com.br/Great_Mana_Potion"
          },
          {
            "nome": "Great Spirit Potion",
            "qtd": "0-10",
            "sprite": "img/itens/great-spirit-potion.gif",
            "link": "https://www.tibiawiki.com.br/Great_Spirit_Potion"
          },
          {
            "nome": "Ultimate Health Potion",
            "qtd": "0-6",
            "sprite": "img/itens/ultimate-health-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Health_Potion"
          }
        ]
      },
      {
        "raridade": "incomum",
        "itens": [
          {
            "nome": "Blue Crystal Shard",
            "qtd": "0-3",
            "sprite": "img/itens/blue-crystal-shard.gif",
            "link": "https://www.tibiawiki.com.br/Blue_Crystal_Shard"
          },
          {
            "nome": "Energy Drink",
            "qtd": "0-8",
            "sprite": "img/itens/energy-drink.gif",
            "link": "https://www.tibiawiki.com.br/Energy_Drink"
          },
          {
            "nome": "Energy Bar",
            "qtd": "0-6",
            "sprite": "img/itens/energy-bar.gif",
            "link": "https://www.tibiawiki.com.br/Energy_Bar"
          },
          {
            "nome": "Green Crystal Shard",
            "qtd": "0-3",
            "sprite": "img/itens/green-crystal-shard.gif",
            "link": "https://www.tibiawiki.com.br/Green_Crystal_Shard"
          },
          {
            "nome": "Small Amethyst",
            "qtd": "0-20",
            "sprite": "img/itens/small-amethyst.gif",
            "link": "https://www.tibiawiki.com.br/Small_Amethyst"
          },
          {
            "nome": "Small Emerald",
            "qtd": "0-20",
            "sprite": "img/itens/small-emerald.gif",
            "link": "https://www.tibiawiki.com.br/Small_Emerald"
          },
          {
            "nome": "Small Ruby",
            "qtd": "0-20",
            "sprite": "img/itens/small-ruby.gif",
            "link": "https://www.tibiawiki.com.br/Small_Ruby"
          },
          {
            "nome": "Violet Crystal Shard",
            "qtd": "0-3",
            "sprite": "img/itens/violet-crystal-shard.gif",
            "link": "https://www.tibiawiki.com.br/Violet_Crystal_Shard"
          },
          {
            "nome": "Collar of Blue Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-blue-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Blue_Plasma"
          },
          {
            "nome": "Collar of Red Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-red-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Red_Plasma"
          },
          {
            "nome": "Mysterious Remains",
            "qtd": null,
            "sprite": "img/itens/mysterious-remains.gif",
            "link": "https://www.tibiawiki.com.br/Mysterious_Remains"
          },
          {
            "nome": "Ring of Green Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-green-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Green_Plasma"
          },
          {
            "nome": "Ring of Red Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-red-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Red_Plasma"
          }
        ]
      },
      {
        "raridade": "semi-raro",
        "itens": [
          {
            "nome": "Blue Gem",
            "qtd": null,
            "sprite": "img/itens/blue-gem.gif",
            "link": "https://www.tibiawiki.com.br/Blue_Gem"
          },
          {
            "nome": "Crystallized Anger",
            "qtd": null,
            "sprite": "img/itens/crystallized-anger.gif",
            "link": "https://www.tibiawiki.com.br/Crystallized_Anger"
          },
          {
            "nome": "Energy Vein",
            "qtd": null,
            "sprite": "img/itens/energy-vein.gif",
            "link": "https://www.tibiawiki.com.br/Energy_Vein"
          },
          {
            "nome": "Giant Shimmering Pearl",
            "qtd": null,
            "sprite": "img/itens/giant-shimmering-pearl.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Shimmering_Pearl"
          },
          {
            "nome": "Green Gem",
            "qtd": null,
            "sprite": "img/itens/green-gem.gif",
            "link": "https://www.tibiawiki.com.br/Green_Gem"
          },
          {
            "nome": "Lightning Headband",
            "qtd": null,
            "sprite": "img/itens/lightning-headband.gif",
            "link": "https://www.tibiawiki.com.br/Lightning_Headband"
          },
          {
            "nome": "Odd Organ",
            "qtd": null,
            "sprite": "img/itens/odd-organ.gif",
            "link": "https://www.tibiawiki.com.br/Odd_Organ"
          },
          {
            "nome": "Plasmatic Lightning",
            "qtd": null,
            "sprite": "img/itens/plasmatic-lightning.gif",
            "link": "https://www.tibiawiki.com.br/Plasmatic_Lightning"
          },
          {
            "nome": "Skull Staff",
            "qtd": null,
            "sprite": "img/itens/skull-staff.gif",
            "link": "https://www.tibiawiki.com.br/Skull_Staff"
          },
          {
            "nome": "Violet Gem",
            "qtd": null,
            "sprite": "img/itens/violet-gem.gif",
            "link": "https://www.tibiawiki.com.br/Violet_Gem"
          }
        ]
      },
      {
        "raridade": "raro",
        "itens": [
          {
            "nome": "Amber Staff",
            "qtd": null,
            "sprite": "img/itens/amber-staff.gif",
            "link": "https://www.tibiawiki.com.br/Amber_Staff"
          },
          {
            "nome": "Golden Legs",
            "qtd": null,
            "sprite": "img/itens/golden-legs.gif",
            "link": "https://www.tibiawiki.com.br/Golden_Legs"
          },
          {
            "nome": "Tiara of Power",
            "qtd": null,
            "sprite": "img/itens/tiara-of-power.gif",
            "link": "https://www.tibiawiki.com.br/Tiara_of_Power"
          },
          {
            "nome": "Void Boots",
            "qtd": null,
            "sprite": "img/itens/void-boots.gif",
            "link": "https://www.tibiawiki.com.br/Void_Boots"
          }
        ]
      },
      {
        "raridade": "muito raro",
        "itens": [
          {
            "nome": "Crackling Egg",
            "qtd": null,
            "sprite": "img/itens/crackling-egg.gif",
            "link": "https://www.tibiawiki.com.br/Crackling_Egg"
          },
          {
            "nome": "Devourer Core",
            "qtd": null,
            "sprite": "img/itens/devourer-core.gif",
            "link": "https://www.tibiawiki.com.br/Devourer_Core"
          },
          {
            "nome": "Executioner",
            "qtd": null,
            "sprite": "img/itens/executioner.gif",
            "link": "https://www.tibiawiki.com.br/Executioner"
          },
          {
            "nome": "Menacing Egg",
            "qtd": null,
            "sprite": "img/itens/menacing-egg.gif",
            "link": "https://www.tibiawiki.com.br/Menacing_Egg"
          }
        ]
      }
    ],
    "lootStatus": "ok",
    "mecanica": [
      "Last GT: até 15 jogadores em 3 times (colunas da alavanca, 1 knight por time). Luta longa (até ~30 min): levem ~300 runas de área, 300-400 SDs e bastante potion. A cada 30s os times trocam de sala.",
      "Os 3 minibosses, um em cada sala:",
      "- [[The Hunger]]: o [[Greed]] é imortal. O blocker leva o Hunger ao vortex do centro (muda de cor) e depois passa o Greed por cima para sumir com ele.",
      "- [[The Destruction]]: mate cada [[Disruption]] na hora, antes de virar [[Charged Disruption|Charged]] ou [[Overcharged Disruption|Overcharged]].",
      "- [[The Rage]]: mate cada [[Frenzy]] assim que nascer.",
      "Os 3 precisam morrer juntos: deixe todos com vida bem vermelha, pare, e matem na mesma rotação.",
      "World Devourer: magos protegidos a oeste e blockers com os bichos a leste. Greed, Frenzy e Disruption seguem as mesmas regras. Sparks só nascem quando o boss toma dano: use área quase sempre e alvo único só no que precisa morrer rápido.",
      "Dica: Battle List com só criaturas, \"Ascending by Name\", deixa Disruptions e Frenzies no topo."
    ],
    "spritesMecanica": {
      "The Hunger": "img/criaturas/the-hunger.gif",
      "Greed": "img/criaturas/greed.gif",
      "The Destruction": "img/criaturas/the-destruction.gif",
      "Disruption": "img/criaturas/disruption.gif",
      "Charged Disruption": "img/criaturas/charged-disruption.gif",
      "Overcharged Disruption": "img/criaturas/overcharged-disruption.gif",
      "The Rage": "img/criaturas/the-rage.gif",
      "Frenzy": "img/criaturas/frenzy.gif"
    },
    "fases": [
      {
        "nome": "The Hunger",
        "dica": "Last GT: fraco a fogo (110%). Morre junto com os outros dois.",
        "elementosAjuste": {
          "fisico": "90%",
          "fogo": "110%",
          "morte": "60%",
          "energia": "90%"
        },
        "hp": null,
        "elementos": {
          "fisico": "90%",
          "terra": "100%",
          "fogo": "110%",
          "morte": "60%",
          "energia": "90%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/the-hunger.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Flame Strike",
              "palavras": "exori max flam",
              "icone": "img/magias/ultimate-flame-strike.gif"
            },
            {
              "magia": "Strong Flame Strike",
              "palavras": "exori gran flam",
              "icone": "img/magias/strong-flame-strike.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 1,
        "elemento": {
          "sorcerer": [
            "fogo"
          ],
          "druid": [
            "gelo",
            "terra"
          ],
          "paladin": [
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "The Destruction",
        "dica": "Last GT: fraco a fogo e energia (110%).",
        "elementosAjuste": {
          "fisico": "90%",
          "fogo": "110%",
          "energia": "110%"
        },
        "hp": null,
        "elementos": {
          "fisico": "90%",
          "terra": "100%",
          "fogo": "110%",
          "morte": "100%",
          "energia": "110%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/the-destruction.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 1,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "The Rage",
        "dica": "Last GT: resiste a fogo (85%).",
        "elementosAjuste": {
          "fisico": "90%",
          "fogo": "85%"
        },
        "hp": null,
        "elementos": {
          "fisico": "90%",
          "terra": "100%",
          "fogo": "85%",
          "morte": "100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/the-rage.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 1,
        "elemento": {
          "sorcerer": [
            "energia",
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Greed",
        "dica": "Imortal: leve-o ao vortex do centro depois que o boss mudar a cor dele.",
        "hp": "∞",
        "elementos": {
          "fisico": "0%",
          "terra": "5%",
          "fogo": "0%",
          "morte": "5%",
          "energia": "0%",
          "sagrado": "0%",
          "gelo": "0%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/greed.gif",
        "ataques": {
          "knight": [],
          "paladin": [],
          "sorcerer": [],
          "druid": [
            {
              "magia": "Ultimate Terra Strike",
              "palavras": "exori max tera",
              "icone": "img/magias/ultimate-terra-strike.gif"
            },
            {
              "magia": "Terra Wave",
              "palavras": "exevo tera hur",
              "icone": "img/magias/terra-wave.gif"
            }
          ],
          "monk": []
        },
        "peso": 0,
        "elemento": {
          "sorcerer": [
            "morte"
          ],
          "druid": [
            "morte",
            "terra"
          ],
          "paladin": [],
          "knight": [],
          "monk": []
        }
      },
      {
        "nome": "Disruption",
        "dica": "Mate na hora, antes de virar Charged/Overcharged.",
        "hp": "12000",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/disruption.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo",
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Frenzy",
        "dica": "Mate assim que nascer (bate forte em mages).",
        "elementosAjuste": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%"
        },
        "hp": "8210",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/frenzy.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo",
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Spark of Destruction",
        "dica": "Nascem quando o boss toma dano: use área. Imune a energia.",
        "hp": "3900",
        "elementos": {
          "fisico": "100%",
          "terra": "115%",
          "fogo": "115%",
          "morte": "100%",
          "energia": "0%",
          "sagrado": "100%",
          "gelo": "115%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/spark-of-destruction.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Flame Strike",
              "palavras": "exori max flam",
              "icone": "img/magias/ultimate-flame-strike.gif"
            },
            {
              "magia": "Great Death Beam",
              "palavras": "exevo max mort",
              "icone": "img/magias/great-death-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "fogo"
          ],
          "druid": [
            "gelo",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      }
    ],
    "link": "https://www.tibiawiki.com.br/World_Devourer",
    "pendencias": []
  },
  {
    "nome": "Grand Master Oberon",
    "local": "Falcon Bastion",
    "grupo": "Avulsos",
    "ordem": 1,
    "quest": "The Secret Library Quest",
    "level": {
      "quest": "The Secret Library Quest",
      "link": "https://www.tibiawiki.com.br/The_Secret_Library_Quest",
      "minimo": "250",
      "recomendado": "350+"
    },
    "hp": "30000",
    "xp": "20000",
    "tipo": "archfoe",
    "sprite": "img/bosses/grand-master-oberon.gif",
    "elementos": {
      "fisico": "90%",
      "terra": "80%",
      "fogo": "90%",
      "morte": "50%",
      "energia": "95%",
      "sagrado": "100%",
      "gelo": "100%",
      "cura": "100%"
    },
    "imunidades": [
      "Invisibility",
      "Paralysis"
    ],
    "podeSerPuxado": false,
    "empurraObjetos": true,
    "passaPor": [
      "Fire",
      "Energy",
      "Poison"
    ],
    "ataque": {
      "sorcerer": {
        "elementos": [
          "energia"
        ],
        "alternativas": []
      },
      "druid": {
        "elementos": [
          "gelo"
        ],
        "alternativas": []
      },
      "paladin": {
        "elementos": [
          "sagrado"
        ],
        "alternativas": [
          "fisico"
        ]
      },
      "knight": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      },
      "monk": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      }
    },
    "defesa": {
      "elementos": [
        "terra",
        "sagrado"
      ],
      "melee": true,
      "nota": "Groundshaker (terra) e Holy Beam; melee até ~1.200."
    },
    "rotacao": {
      "knight": {
        "passos": [
          {
            "magia": "Annihilation",
            "palavras": "exori gran ico",
            "obs": "sempre que sair da recarga (30s)",
            "icone": "img/magias/annihilation.gif"
          },
          {
            "magia": "Fierce Berserk",
            "palavras": "exori gran",
            "obs": "a cada 6s",
            "icone": "img/magias/fierce-berserk.gif"
          },
          {
            "magia": "Front Sweep",
            "palavras": "exori min",
            "obs": "a cada 6s, alternando com o Fierce Berserk",
            "icone": "img/magias/front-sweep.gif"
          },
          {
            "magia": "Brutal Strike",
            "palavras": "exori ico",
            "obs": "nos intervalos (ou Shield Bash, exori ico scu, se usar escudo)",
            "icone": "img/magias/brutal-strike.gif"
          }
        ],
        "nota": "Físico 90%. Stance: Blood Rage para dano; Protector se for o blocker."
      },
      "paladin": {
        "passos": [
          {
            "magia": "Divine Grenade",
            "palavras": "exevo tempo mas san",
            "obs": "a cada 26s (level 300+)",
            "icone": "img/magias/divine-grenade.gif"
          },
          {
            "magia": "Divine Barrage",
            "palavras": "exori dir san",
            "obs": "a cada 4s",
            "icone": "img/magias/divine-barrage.gif"
          },
          {
            "magia": "Ethereal Barrage",
            "palavras": "exori dir moe",
            "obs": "a cada 4s, alternando com a Divine Barrage",
            "icone": "img/magias/ethereal-barrage.gif"
          },
          {
            "magia": "Divine Missile",
            "palavras": "exori san",
            "obs": "nos intervalos",
            "icone": "img/magias/divine-missile.gif"
          }
        ],
        "nota": "Holy 100%, físico 90%. Ataque básico com arma o tempo todo. Stance: Sharpshooter."
      },
      "sorcerer": {
        "passos": [
          {
            "magia": "Ultimate Energy Strike",
            "palavras": "exori max vis",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-energy-strike.gif"
          },
          {
            "magia": "Great Energy Beam",
            "palavras": "exevo gran vis lux",
            "obs": "a cada 6s, com o boss na reta (wave/beam)",
            "icone": "img/magias/great-energy-beam.gif"
          },
          {
            "magia": "Energy Wave",
            "palavras": "exevo vis hur",
            "obs": "a cada 8s, com o boss na reta (wave/beam)",
            "icone": "img/magias/energy-wave.gif"
          },
          {
            "magia": "Strong Energy Strike",
            "palavras": "exori gran vis",
            "obs": "a cada 8s",
            "icone": "img/magias/strong-energy-strike.gif"
          },
          {
            "magia": "Lightning",
            "palavras": "exori amp vis",
            "obs": "a cada 8s; pula para mais 2 alvos",
            "icone": "img/magias/lightning.gif"
          },
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "nos intervalos (recarga de 2s)",
            "icone": "img/magias/sudden-death-rune.gif"
          }
        ],
        "nota": "Elemento: energia (95%). Stance: Master of Thunder."
      },
      "druid": {
        "passos": [
          {
            "magia": "Ultimate Ice Strike",
            "palavras": "exori max frigo",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-ice-strike.gif"
          },
          {
            "magia": "Strong Ice Wave",
            "palavras": "exevo gran frigo hur",
            "obs": "a cada 4s, com o boss na reta (wave/beam)",
            "icone": "img/magias/strong-ice-wave.gif"
          },
          {
            "magia": "Strong Ice Strike",
            "palavras": "exori gran frigo",
            "obs": "a cada 8s",
            "icone": "img/magias/strong-ice-strike.gif"
          },
          {
            "magia": "Forked Glacier",
            "palavras": "exevo fur frigo",
            "obs": "a cada 6s; pula para até 6 alvos",
            "icone": "img/magias/forked-glacier.gif"
          },
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "nos intervalos (recarga de 2s)",
            "icone": "img/magias/sudden-death-rune.gif"
          }
        ],
        "nota": "Elemento: gelo (100%). Stance: Elemental Synthesis."
      },
      "monk": {
        "passos": [
          {
            "magia": "Thousand Fist Blows",
            "palavras": "exori mas amp pug",
            "obs": "builder, a cada 8s",
            "icone": "img/magias/thousand-fist-blows.gif"
          },
          {
            "magia": "Mystic Repulse",
            "palavras": "exori amp pug",
            "obs": "builder, a cada 8s (alcance 7)",
            "icone": "img/magias/mystic-repulse.gif"
          },
          {
            "magia": "Double Jab",
            "palavras": "exori pug",
            "obs": "builder, a cada 4s, até juntar 5 de Harmony",
            "icone": "img/magias/double-jab.gif"
          },
          {
            "magia": "Devastating Knockout",
            "palavras": "exori gran nia",
            "obs": "spender com 5 de Harmony (a cada 8s, alcance 7)",
            "icone": "img/magias/devastating-knockout.gif"
          },
          {
            "magia": "Forceful Uppercut",
            "palavras": "exori gran pug",
            "obs": "sempre que sair da recarga (60s)",
            "icone": "img/magias/forceful-uppercut.gif"
          }
        ],
        "nota": "Físico 90%. Gaste a Harmony só com 5 pontos (+112% de dano). Abaixo do level 125 use Greater Tiger Clash (exori nia) como spender."
      }
    },
    "tokens": [],
    "lootTiers": [
      {
        "raridade": "comum",
        "itens": [
          {
            "nome": "Bone",
            "qtd": null,
            "sprite": "img/itens/bone.gif",
            "link": "https://www.tibiawiki.com.br/Bone"
          },
          {
            "nome": "Brass Shield",
            "qtd": null,
            "sprite": "img/itens/brass-shield.gif",
            "link": "https://www.tibiawiki.com.br/Brass_Shield"
          },
          {
            "nome": "Pelvis Bone",
            "qtd": null,
            "sprite": "img/itens/pelvis-bone.gif",
            "link": "https://www.tibiawiki.com.br/Pelvis_Bone"
          },
          {
            "nome": "The Spatial Warp Almanac",
            "qtd": null,
            "sprite": "img/itens/the-spatial-warp-almanac.gif",
            "link": "https://www.tibiawiki.com.br/The_Spatial_Warp_Almanac"
          },
          {
            "nome": "Viking Helmet",
            "qtd": null,
            "sprite": "img/itens/viking-helmet.gif",
            "link": "https://www.tibiawiki.com.br/Viking_Helmet"
          }
        ]
      },
      {
        "raridade": "incomum",
        "itens": [
          {
            "nome": "Heavy Old Tome",
            "qtd": null,
            "sprite": "img/itens/heavy-old-tome.gif",
            "link": "https://www.tibiawiki.com.br/Heavy_Old_Tome"
          }
        ]
      },
      {
        "raridade": "semi-raro",
        "itens": [
          {
            "nome": "Falcon Battleaxe",
            "qtd": null,
            "sprite": "img/itens/falcon-battleaxe.gif",
            "link": "https://www.tibiawiki.com.br/Falcon_Battleaxe"
          },
          {
            "nome": "Falcon Longsword",
            "qtd": null,
            "sprite": "img/itens/falcon-longsword.gif",
            "link": "https://www.tibiawiki.com.br/Falcon_Longsword"
          },
          {
            "nome": "Falcon Mace",
            "qtd": null,
            "sprite": "img/itens/falcon-mace.gif",
            "link": "https://www.tibiawiki.com.br/Falcon_Mace"
          },
          {
            "nome": "Grant of Arms",
            "qtd": null,
            "sprite": "img/itens/grant-of-arms.gif",
            "link": "https://www.tibiawiki.com.br/Grant_of_Arms"
          }
        ]
      },
      {
        "raridade": "raro",
        "itens": [
          {
            "nome": "Falcon Bow",
            "qtd": null,
            "sprite": "img/itens/falcon-bow.gif",
            "link": "https://www.tibiawiki.com.br/Falcon_Bow"
          },
          {
            "nome": "Falcon Circlet",
            "qtd": null,
            "sprite": "img/itens/falcon-circlet.gif",
            "link": "https://www.tibiawiki.com.br/Falcon_Circlet"
          },
          {
            "nome": "Falcon Coif",
            "qtd": null,
            "sprite": "img/itens/falcon-coif.gif",
            "link": "https://www.tibiawiki.com.br/Falcon_Coif"
          },
          {
            "nome": "Falcon Rod",
            "qtd": null,
            "sprite": "img/itens/falcon-rod.gif",
            "link": "https://www.tibiawiki.com.br/Falcon_Rod"
          },
          {
            "nome": "Falcon Wand",
            "qtd": null,
            "sprite": "img/itens/falcon-wand.gif",
            "link": "https://www.tibiawiki.com.br/Falcon_Wand"
          }
        ]
      },
      {
        "raridade": "muito raro",
        "itens": [
          {
            "nome": "Falcon Greaves",
            "qtd": null,
            "sprite": "img/itens/falcon-greaves.gif",
            "link": "https://www.tibiawiki.com.br/Falcon_Greaves"
          },
          {
            "nome": "Falcon Plate",
            "qtd": null,
            "sprite": "img/itens/falcon-plate.gif",
            "link": "https://www.tibiawiki.com.br/Falcon_Plate"
          },
          {
            "nome": "Falcon Sai",
            "qtd": null,
            "sprite": "img/itens/falcon-sai.gif",
            "link": "https://www.tibiawiki.com.br/Falcon_Sai"
          },
          {
            "nome": "Falcon Shield",
            "qtd": null,
            "sprite": "img/itens/falcon-shield.gif",
            "link": "https://www.tibiawiki.com.br/Falcon_Shield"
          }
        ]
      }
    ],
    "lootStatus": "ok",
    "mecanica": [
      "Quando a vida dele fica vermelha, ele se cura por completo, invoca um [[Falcon Knight]] ou [[Falcon Paladin]] e passa a se curar a cada golpe.",
      "Ele solta uma frase (mensagem laranja): alguém responde com a frase certa dos livros (tabela abaixo) no Local Chat. Certo: ele grunhe (GRRRAAANNGH!) e volta a tomar dano. Errado: ele ri (HAHAHAHA!).",
      "Isso acontece 3 vezes até ele poder morrer. Deixe um jogador responsável pelas respostas, com as frases na action bar.",
      "Muda de alvo com frequência."
    ],
    "spritesMecanica": {
      "Falcon Knight": "img/criaturas/falcon-knight.gif",
      "Falcon Paladin": "img/criaturas/falcon-paladin.gif"
    },
    "fases": [
      {
        "nome": "Falcon Knight",
        "dica": "Invocado a cada cura do boss: mate. Fraco a holy (110%).",
        "hp": "9000",
        "elementos": {
          "fisico": "70%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "50%",
          "energia": "100%",
          "sagrado": "110%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/falcon-knight.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo"
          ],
          "druid": [
            "gelo",
            "terra"
          ],
          "paladin": [
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Falcon Paladin",
        "dica": "Invocado a cada cura do boss: mate. Fraco a holy (110%).",
        "hp": "8500",
        "elementos": {
          "fisico": "90%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "50%",
          "energia": "100%",
          "sagrado": "110%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/falcon-paladin.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo"
          ],
          "druid": [
            "gelo",
            "terra"
          ],
          "paladin": [
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      }
    ],
    "tabela": {
      "titulo": "Respostas do debate",
      "colunas": [
        "Oberon diz",
        "Responda"
      ],
      "linhas": [
        [
          "The world will suffer for its iddle laziness!",
          "Are you ever going to fight or do you prefer talking!"
        ],
        [
          "You appear like a worm among men!",
          "How appropriate, you look like something worms already got the better of!"
        ],
        [
          "People fall at my feet when they see me coming!",
          "Even before they smell your breath?"
        ],
        [
          "This will be the end of mortal man!",
          "Then let me show you the concept of mortality before it!"
        ],
        [
          "I will remove you from this plane of existence!",
          "Too bad you barely exist at all!"
        ],
        [
          "Dragons will soon rule this world, I am their herald!",
          "Excuse me but I still do not get the message!"
        ],
        [
          "The true virtue of chivalry are my belief!",
          "Dare strike up a Minnesang and you will receive your last accolade!"
        ],
        [
          "I lead the most honourable and formidable following of knights!",
          "Then why are we fighting alone right now?"
        ]
      ]
    },
    "link": "https://www.tibiawiki.com.br/Grand_Master_Oberon",
    "pendencias": []
  },
  {
    "nome": "Drume",
    "local": "Bounac",
    "grupo": "Avulsos",
    "ordem": 2,
    "quest": "The Order of the Lion Quest",
    "level": {
      "quest": "The Order of the Lion Quest",
      "link": "https://www.tibiawiki.com.br/The_Order_of_the_Lion_Quest",
      "minimo": "250",
      "recomendado": "300+"
    },
    "hp": "35000",
    "xp": "25000",
    "tipo": "archfoe",
    "sprite": "img/bosses/drume.gif",
    "elementos": {
      "fisico": "65%",
      "terra": "0%",
      "fogo": "100%",
      "morte": "50%",
      "energia": "120%",
      "sagrado": "120%",
      "gelo": "100%",
      "cura": "100%"
    },
    "imunidades": [
      "Invisibility",
      "Paralysis"
    ],
    "podeSerPuxado": false,
    "empurraObjetos": true,
    "passaPor": [
      "Fire",
      "Poison"
    ],
    "ataque": {
      "sorcerer": {
        "elementos": [
          "energia",
          "morte"
        ],
        "alternativas": []
      },
      "druid": {
        "elementos": [
          "gelo",
          "morte"
        ],
        "alternativas": []
      },
      "paladin": {
        "elementos": [
          "sagrado"
        ],
        "alternativas": [
          "fisico"
        ]
      },
      "knight": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      },
      "monk": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      }
    },
    "defesa": {
      "elementos": [
        "terra"
      ],
      "melee": true,
      "nota": "Dano de terra (até ~1.000) e melee."
    },
    "rotacao": {
      "knight": {
        "passos": [
          {
            "magia": "Annihilation",
            "palavras": "exori gran ico",
            "obs": "sempre que sair da recarga (30s)",
            "icone": "img/magias/annihilation.gif"
          },
          {
            "magia": "Fierce Berserk",
            "palavras": "exori gran",
            "obs": "a cada 6s",
            "icone": "img/magias/fierce-berserk.gif"
          },
          {
            "magia": "Front Sweep",
            "palavras": "exori min",
            "obs": "a cada 6s, alternando com o Fierce Berserk",
            "icone": "img/magias/front-sweep.gif"
          },
          {
            "magia": "Brutal Strike",
            "palavras": "exori ico",
            "obs": "nos intervalos (ou Shield Bash, exori ico scu, se usar escudo)",
            "icone": "img/magias/brutal-strike.gif"
          }
        ],
        "nota": "Físico 65%. Stance: Blood Rage para dano; Protector se for o blocker."
      },
      "paladin": {
        "passos": [
          {
            "magia": "Divine Grenade",
            "palavras": "exevo tempo mas san",
            "obs": "a cada 26s (level 300+)",
            "icone": "img/magias/divine-grenade.gif"
          },
          {
            "magia": "Divine Barrage",
            "palavras": "exori dir san",
            "obs": "a cada 4s",
            "icone": "img/magias/divine-barrage.gif"
          },
          {
            "magia": "Ethereal Barrage",
            "palavras": "exori dir moe",
            "obs": "a cada 4s, alternando com a Divine Barrage",
            "icone": "img/magias/ethereal-barrage.gif"
          },
          {
            "magia": "Divine Missile",
            "palavras": "exori san",
            "obs": "nos intervalos",
            "icone": "img/magias/divine-missile.gif"
          }
        ],
        "nota": "Holy 120%, físico 65%. Ataque básico com arma o tempo todo. Stance: Sharpshooter."
      },
      "sorcerer": {
        "passos": [
          {
            "magia": "Ultimate Energy Strike",
            "palavras": "exori max vis",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-energy-strike.gif"
          },
          {
            "magia": "Great Energy Beam",
            "palavras": "exevo gran vis lux",
            "obs": "a cada 6s, com o boss na reta (wave/beam)",
            "icone": "img/magias/great-energy-beam.gif"
          },
          {
            "magia": "Energy Wave",
            "palavras": "exevo vis hur",
            "obs": "a cada 8s, com o boss na reta (wave/beam)",
            "icone": "img/magias/energy-wave.gif"
          },
          {
            "magia": "Strong Energy Strike",
            "palavras": "exori gran vis",
            "obs": "a cada 8s",
            "icone": "img/magias/strong-energy-strike.gif"
          },
          {
            "magia": "Lightning",
            "palavras": "exori amp vis",
            "obs": "a cada 8s; pula para mais 2 alvos",
            "icone": "img/magias/lightning.gif"
          },
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "nos intervalos (recarga de 2s)",
            "icone": "img/magias/sudden-death-rune.gif"
          }
        ],
        "nota": "Elemento: energia (120%). Stance: Master of Thunder."
      },
      "druid": {
        "passos": [
          {
            "magia": "Ultimate Ice Strike",
            "palavras": "exori max frigo",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-ice-strike.gif"
          },
          {
            "magia": "Strong Ice Wave",
            "palavras": "exevo gran frigo hur",
            "obs": "a cada 4s, com o boss na reta (wave/beam)",
            "icone": "img/magias/strong-ice-wave.gif"
          },
          {
            "magia": "Strong Ice Strike",
            "palavras": "exori gran frigo",
            "obs": "a cada 8s",
            "icone": "img/magias/strong-ice-strike.gif"
          },
          {
            "magia": "Forked Glacier",
            "palavras": "exevo fur frigo",
            "obs": "a cada 6s; pula para até 6 alvos",
            "icone": "img/magias/forked-glacier.gif"
          },
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "nos intervalos (recarga de 2s)",
            "icone": "img/magias/sudden-death-rune.gif"
          }
        ],
        "nota": "Elemento: gelo (100%). Stance: Elemental Synthesis."
      },
      "monk": {
        "passos": [
          {
            "magia": "Thousand Fist Blows",
            "palavras": "exori mas amp pug",
            "obs": "builder, a cada 8s",
            "icone": "img/magias/thousand-fist-blows.gif"
          },
          {
            "magia": "Mystic Repulse",
            "palavras": "exori amp pug",
            "obs": "builder, a cada 8s (alcance 7)",
            "icone": "img/magias/mystic-repulse.gif"
          },
          {
            "magia": "Double Jab",
            "palavras": "exori pug",
            "obs": "builder, a cada 4s, até juntar 5 de Harmony",
            "icone": "img/magias/double-jab.gif"
          },
          {
            "magia": "Devastating Knockout",
            "palavras": "exori gran nia",
            "obs": "spender com 5 de Harmony (a cada 8s, alcance 7)",
            "icone": "img/magias/devastating-knockout.gif"
          },
          {
            "magia": "Forceful Uppercut",
            "palavras": "exori gran pug",
            "obs": "sempre que sair da recarga (60s)",
            "icone": "img/magias/forceful-uppercut.gif"
          }
        ],
        "nota": "Físico 65%. Gaste a Harmony só com 5 pontos (+112% de dano). Abaixo do level 125 use Greater Tiger Clash (exori nia) como spender."
      }
    },
    "tokens": [
      {
        "nome": "Silver Token",
        "qtd": "0-7",
        "raridade": "semi-raro",
        "sprite": "img/itens/silver-token.gif"
      }
    ],
    "lootTiers": [
      {
        "raridade": "comum",
        "itens": [
          {
            "nome": "Platinum Coin",
            "qtd": "0-9",
            "sprite": "img/itens/platinum-coin.gif",
            "link": "https://www.tibiawiki.com.br/Platinum_Coin"
          },
          {
            "nome": "Berserk Potion",
            "qtd": "0-10",
            "sprite": "img/itens/berserk-potion.gif",
            "link": "https://www.tibiawiki.com.br/Berserk_Potion"
          },
          {
            "nome": "Bullseye Potion",
            "qtd": "0-14",
            "sprite": "img/itens/bullseye-potion.gif",
            "link": "https://www.tibiawiki.com.br/Bullseye_Potion"
          },
          {
            "nome": "Mastermind Potion",
            "qtd": "0-13",
            "sprite": "img/itens/mastermind-potion.gif",
            "link": "https://www.tibiawiki.com.br/Mastermind_Potion"
          },
          {
            "nome": "Royal Star",
            "qtd": "0-100",
            "sprite": "img/itens/royal-star.gif",
            "link": "https://www.tibiawiki.com.br/Royal_Star"
          },
          {
            "nome": "Supreme Health Potion",
            "qtd": "0-30",
            "sprite": "img/itens/supreme-health-potion.gif",
            "link": "https://www.tibiawiki.com.br/Supreme_Health_Potion"
          },
          {
            "nome": "Ultimate Mana Potion",
            "qtd": "0-26",
            "sprite": "img/itens/ultimate-mana-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Mana_Potion"
          },
          {
            "nome": "Ultimate Spirit Potion",
            "qtd": "0-6",
            "sprite": "img/itens/ultimate-spirit-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Spirit_Potion"
          },
          {
            "nome": "Blue Gem",
            "qtd": null,
            "sprite": "img/itens/blue-gem.gif",
            "link": "https://www.tibiawiki.com.br/Blue_Gem"
          },
          {
            "nome": "Energy Bar",
            "qtd": null,
            "sprite": "img/itens/energy-bar.gif",
            "link": "https://www.tibiawiki.com.br/Energy_Bar"
          },
          {
            "nome": "Green Gem",
            "qtd": "0-2",
            "sprite": "img/itens/green-gem.gif",
            "link": "https://www.tibiawiki.com.br/Green_Gem"
          },
          {
            "nome": "Red Gem",
            "qtd": "0-2",
            "sprite": "img/itens/red-gem.gif",
            "link": "https://www.tibiawiki.com.br/Red_Gem"
          },
          {
            "nome": "Yellow Gem",
            "qtd": "0-2",
            "sprite": "img/itens/yellow-gem.gif",
            "link": "https://www.tibiawiki.com.br/Yellow_Gem"
          },
          {
            "nome": "Transcendence Potion",
            "qtd": "0-16",
            "sprite": "img/itens/transcendence-potion.gif",
            "link": "https://www.tibiawiki.com.br/Transcendence_Potion"
          }
        ]
      },
      {
        "raridade": "semi-raro",
        "itens": [
          {
            "nome": "Crystal Coin",
            "qtd": "0-1",
            "sprite": "img/itens/crystal-coin.gif",
            "link": "https://www.tibiawiki.com.br/Crystal_Coin"
          },
          {
            "nome": "Giant Sapphire",
            "qtd": null,
            "sprite": "img/itens/giant-sapphire.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Sapphire"
          },
          {
            "nome": "Gold Ingot",
            "qtd": null,
            "sprite": "img/itens/gold-ingot.gif",
            "link": "https://www.tibiawiki.com.br/Gold_Ingot"
          },
          {
            "nome": "Stone Skin Amulet",
            "qtd": null,
            "sprite": "img/itens/stone-skin-amulet.gif",
            "link": "https://www.tibiawiki.com.br/Stone_Skin_Amulet"
          },
          {
            "nome": "Terra Hood",
            "qtd": null,
            "sprite": "img/itens/terra-hood.gif",
            "link": "https://www.tibiawiki.com.br/Terra_Hood"
          },
          {
            "nome": "Terra Legs",
            "qtd": null,
            "sprite": "img/itens/terra-legs.gif",
            "link": "https://www.tibiawiki.com.br/Terra_Legs"
          },
          {
            "nome": "Terra Mantle",
            "qtd": null,
            "sprite": "img/itens/terra-mantle.gif",
            "link": "https://www.tibiawiki.com.br/Terra_Mantle"
          },
          {
            "nome": "Terra Rod",
            "qtd": null,
            "sprite": "img/itens/terra-rod.gif",
            "link": "https://www.tibiawiki.com.br/Terra_Rod"
          },
          {
            "nome": "Underworld Rod",
            "qtd": null,
            "sprite": "img/itens/underworld-rod.gif",
            "link": "https://www.tibiawiki.com.br/Underworld_Rod"
          },
          {
            "nome": "Violet Gem",
            "qtd": null,
            "sprite": "img/itens/violet-gem.gif",
            "link": "https://www.tibiawiki.com.br/Violet_Gem"
          },
          {
            "nome": "Wand of Voodoo",
            "qtd": null,
            "sprite": "img/itens/wand-of-voodoo.gif",
            "link": "https://www.tibiawiki.com.br/Wand_of_Voodoo"
          }
        ]
      },
      {
        "raridade": "raro",
        "itens": [
          {
            "nome": "Raw Watermelon Tourmaline",
            "qtd": null,
            "sprite": "img/itens/raw-watermelon-tourmaline.gif",
            "link": "https://www.tibiawiki.com.br/Raw_Watermelon_Tourmaline"
          }
        ]
      },
      {
        "raridade": "muito raro",
        "itens": [
          {
            "nome": "Lion Amulet",
            "qtd": null,
            "sprite": "img/itens/lion-amulet.gif",
            "link": "https://www.tibiawiki.com.br/Lion_Amulet"
          },
          {
            "nome": "Lion Axe",
            "qtd": null,
            "sprite": "img/itens/lion-axe.gif",
            "link": "https://www.tibiawiki.com.br/Lion_Axe"
          },
          {
            "nome": "Lion Hammer",
            "qtd": null,
            "sprite": "img/itens/lion-hammer.gif",
            "link": "https://www.tibiawiki.com.br/Lion_Hammer"
          },
          {
            "nome": "Lion Longbow",
            "qtd": null,
            "sprite": "img/itens/lion-longbow.gif",
            "link": "https://www.tibiawiki.com.br/Lion_Longbow"
          },
          {
            "nome": "Lion Longsword",
            "qtd": null,
            "sprite": "img/itens/lion-longsword.gif",
            "link": "https://www.tibiawiki.com.br/Lion_Longsword"
          },
          {
            "nome": "Lion Plate",
            "qtd": null,
            "sprite": "img/itens/lion-plate.gif",
            "link": "https://www.tibiawiki.com.br/Lion_Plate"
          },
          {
            "nome": "Lion Rod",
            "qtd": null,
            "sprite": "img/itens/lion-rod.gif",
            "link": "https://www.tibiawiki.com.br/Lion_Rod"
          },
          {
            "nome": "Lion Shield",
            "qtd": null,
            "sprite": "img/itens/lion-shield.gif",
            "link": "https://www.tibiawiki.com.br/Lion_Shield"
          },
          {
            "nome": "Lion Spangenhelm",
            "qtd": null,
            "sprite": "img/itens/lion-spangenhelm.gif",
            "link": "https://www.tibiawiki.com.br/Lion_Spangenhelm"
          },
          {
            "nome": "Lion Spellbook",
            "qtd": null,
            "sprite": "img/itens/lion-spellbook.gif",
            "link": "https://www.tibiawiki.com.br/Lion_Spellbook"
          },
          {
            "nome": "Lion Wand",
            "qtd": null,
            "sprite": "img/itens/lion-wand.gif",
            "link": "https://www.tibiawiki.com.br/Lion_Wand"
          },
          {
            "nome": "Lion Claws",
            "qtd": null,
            "sprite": "img/itens/lion-claws.gif",
            "link": "https://www.tibiawiki.com.br/Lion_Claws"
          }
        ]
      }
    ],
    "lootStatus": "ok",
    "mecanica": [
      "Batalha em campo aberto: 3 esquadrões de Usurpers contra 3 de Lions. Os Usurper Commanders sempre miram você; os outros brigam entre si.",
      "Primeiro mate os 3 [[Usurper Commander|Usurper Commanders]], um de cada vez (desça devagar para o sudoeste para puxar só um). Battle List em \"Sort Descending by Name\" deixa eles no topo. Se os 3 [[Lion Commander|Lion Commanders]] morrerem, você é expulso.",
      "Depois aparecem Drume e Kesar (parado). Drume mira você ou os Lions e troca de alvo: use os Lions como blockers.",
      "Pode vir um miniboss Falcon ([[Grand Chaplain Gaunder|Gaunder]], [[Grand Canon Dominus|Dominus]], [[Grand Commander Soeren|Soeren]] ou [[Preceptor Lazare|Lazare]]), que ataca sempre o mesmo alvo do Drume. Drume não atravessa Energy Field: [[Energy Bomb Rune|Energy Bomb]] no pé dele trapa."
    ],
    "spritesMecanica": {
      "Usurper Commander": "img/criaturas/usurper-commander.gif",
      "Lion Commander": "img/criaturas/lion-commander.gif",
      "Grand Chaplain Gaunder": "img/criaturas/grand-chaplain-gaunder.gif",
      "Grand Canon Dominus": "img/criaturas/grand-canon-dominus.gif",
      "Grand Commander Soeren": "img/criaturas/grand-commander-soeren.gif",
      "Preceptor Lazare": "img/criaturas/preceptor-lazare.gif",
      "Energy Bomb Rune": "img/criaturas/energy-bomb-rune.gif"
    },
    "fases": [
      {
        "nome": "Usurper Commander",
        "dica": "Mate os 3, um de cada vez, antes do Drume aparecer.",
        "hp": "8500",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "110%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/usurper-commander.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Death Beam",
              "palavras": "exevo max mort",
              "icone": "img/magias/great-death-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Sudden Death Rune",
              "palavras": "adori gran mort",
              "icone": "img/magias/sudden-death-rune.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "morte"
          ],
          "druid": [
            "morte"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      }
    ],
    "link": "https://www.tibiawiki.com.br/Drume",
    "pendencias": []
  },
  {
    "nome": "Timira the Many-Headed",
    "local": "Marapur (Emerald Gardens)",
    "grupo": "Avulsos",
    "ordem": 3,
    "quest": "Within the Tides Quest",
    "level": {
      "quest": "Within the Tides Quest",
      "link": "https://www.tibiawiki.com.br/Within_the_Tides_Quest",
      "minimo": null,
      "recomendado": "200+"
    },
    "hp": "75000",
    "xp": "35000",
    "tipo": "archfoe",
    "sprite": "img/bosses/timira-the-many-headed.gif",
    "elementos": {
      "fisico": "100%",
      "terra": "100%",
      "fogo": "100%",
      "morte": "100%",
      "energia": "100%",
      "sagrado": "100%",
      "gelo": "100%",
      "cura": "100%"
    },
    "imunidades": [
      "Invisibility",
      "Paralysis"
    ],
    "podeSerPuxado": false,
    "empurraObjetos": true,
    "passaPor": [],
    "ataque": {
      "sorcerer": {
        "elementos": [
          "energia"
        ],
        "alternativas": [
          "fogo"
        ]
      },
      "druid": {
        "elementos": [
          "gelo"
        ],
        "alternativas": [
          "terra"
        ]
      },
      "paladin": {
        "elementos": [
          "sagrado"
        ],
        "alternativas": [
          "fisico"
        ]
      },
      "knight": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      },
      "monk": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      }
    },
    "defesa": {
      "elementos": [
        "fogo"
      ],
      "melee": true,
      "nota": "Área de fogo e ataques em cadeia que pegam o time."
    },
    "rotacao": {
      "knight": {
        "passos": [
          {
            "magia": "Annihilation",
            "palavras": "exori gran ico",
            "obs": "sempre que sair da recarga (30s)",
            "icone": "img/magias/annihilation.gif"
          },
          {
            "magia": "Fierce Berserk",
            "palavras": "exori gran",
            "obs": "a cada 6s",
            "icone": "img/magias/fierce-berserk.gif"
          },
          {
            "magia": "Front Sweep",
            "palavras": "exori min",
            "obs": "a cada 6s, alternando com o Fierce Berserk",
            "icone": "img/magias/front-sweep.gif"
          },
          {
            "magia": "Brutal Strike",
            "palavras": "exori ico",
            "obs": "nos intervalos (ou Shield Bash, exori ico scu, se usar escudo)",
            "icone": "img/magias/brutal-strike.gif"
          }
        ],
        "nota": "Físico 100%. Stance: Blood Rage para dano; Protector se for o blocker."
      },
      "paladin": {
        "passos": [
          {
            "magia": "Divine Grenade",
            "palavras": "exevo tempo mas san",
            "obs": "a cada 26s (level 300+)",
            "icone": "img/magias/divine-grenade.gif"
          },
          {
            "magia": "Divine Barrage",
            "palavras": "exori dir san",
            "obs": "a cada 4s",
            "icone": "img/magias/divine-barrage.gif"
          },
          {
            "magia": "Ethereal Barrage",
            "palavras": "exori dir moe",
            "obs": "a cada 4s, alternando com a Divine Barrage",
            "icone": "img/magias/ethereal-barrage.gif"
          },
          {
            "magia": "Divine Missile",
            "palavras": "exori san",
            "obs": "nos intervalos",
            "icone": "img/magias/divine-missile.gif"
          }
        ],
        "nota": "Holy 100%, físico 100%. Ataque básico com arma o tempo todo. Stance: Sharpshooter."
      },
      "sorcerer": {
        "passos": [
          {
            "magia": "Ultimate Energy Strike",
            "palavras": "exori max vis",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-energy-strike.gif"
          },
          {
            "magia": "Great Energy Beam",
            "palavras": "exevo gran vis lux",
            "obs": "a cada 6s, com o boss na reta (wave/beam)",
            "icone": "img/magias/great-energy-beam.gif"
          },
          {
            "magia": "Great Death Beam",
            "palavras": "exevo max mort",
            "obs": "a cada 6s, com o boss na reta (beam)",
            "icone": "img/magias/great-death-beam.gif"
          },
          {
            "magia": "Energy Wave",
            "palavras": "exevo vis hur",
            "obs": "a cada 8s, com o boss na reta (wave/beam)",
            "icone": "img/magias/energy-wave.gif"
          },
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "a cada 2s, sempre que nada mais forte estiver pronto",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Strong Energy Strike",
            "palavras": "exori gran vis",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/strong-energy-strike.gif"
          },
          {
            "magia": "Death Echo",
            "palavras": "exevo mort ora",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/death-echo.gif"
          },
          {
            "magia": "Lightning",
            "palavras": "exori amp vis",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/lightning.gif"
          }
        ],
        "nota": "Elemento: energia (100%). Stance: Master of Thunder."
      },
      "druid": {
        "passos": [
          {
            "magia": "Ultimate Ice Strike",
            "palavras": "exori max frigo",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-ice-strike.gif"
          },
          {
            "magia": "Strong Ice Wave",
            "palavras": "exevo gran frigo hur",
            "obs": "a cada 4s, com o boss na reta (wave/beam)",
            "icone": "img/magias/strong-ice-wave.gif"
          },
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "a cada 2s, sempre que nada mais forte estiver pronto",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Strong Ice Strike",
            "palavras": "exori gran frigo",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/strong-ice-strike.gif"
          },
          {
            "magia": "Forked Glacier",
            "palavras": "exevo fur frigo",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/forked-glacier.gif"
          }
        ],
        "nota": "Elemento: gelo (100%). Stance: Elemental Synthesis."
      },
      "monk": {
        "passos": [
          {
            "magia": "Thousand Fist Blows",
            "palavras": "exori mas amp pug",
            "obs": "builder, a cada 8s",
            "icone": "img/magias/thousand-fist-blows.gif"
          },
          {
            "magia": "Mystic Repulse",
            "palavras": "exori amp pug",
            "obs": "builder, a cada 8s (alcance 7)",
            "icone": "img/magias/mystic-repulse.gif"
          },
          {
            "magia": "Double Jab",
            "palavras": "exori pug",
            "obs": "builder, a cada 4s, até juntar 5 de Harmony",
            "icone": "img/magias/double-jab.gif"
          },
          {
            "magia": "Devastating Knockout",
            "palavras": "exori gran nia",
            "obs": "spender com 5 de Harmony (a cada 8s, alcance 7)",
            "icone": "img/magias/devastating-knockout.gif"
          },
          {
            "magia": "Forceful Uppercut",
            "palavras": "exori gran pug",
            "obs": "sempre que sair da recarga (60s)",
            "icone": "img/magias/forceful-uppercut.gif"
          }
        ],
        "nota": "Físico 100%. Gaste a Harmony só com 5 pontos (+112% de dano). Abaixo do level 125 use Greater Tiger Clash (exori nia) como spender."
      }
    },
    "tokens": [],
    "lootTiers": [
      {
        "raridade": "comum",
        "itens": [
          {
            "nome": "Crystal Coin",
            "qtd": "1-6",
            "sprite": "img/itens/crystal-coin.gif",
            "link": "https://www.tibiawiki.com.br/Crystal_Coin"
          },
          {
            "nome": "Naga Basin",
            "qtd": null,
            "sprite": "img/itens/naga-basin.gif",
            "link": "https://www.tibiawiki.com.br/Naga_Basin"
          }
        ]
      },
      {
        "raridade": "incomum",
        "itens": [
          {
            "nome": "Berserk Potion",
            "qtd": "0-5",
            "sprite": "img/itens/berserk-potion.gif",
            "link": "https://www.tibiawiki.com.br/Berserk_Potion"
          },
          {
            "nome": "Bullseye Potion",
            "qtd": "0-5",
            "sprite": "img/itens/bullseye-potion.gif",
            "link": "https://www.tibiawiki.com.br/Bullseye_Potion"
          },
          {
            "nome": "Mastermind Potion",
            "qtd": "0-5",
            "sprite": "img/itens/mastermind-potion.gif",
            "link": "https://www.tibiawiki.com.br/Mastermind_Potion"
          },
          {
            "nome": "Transcendence Potion",
            "qtd": "0-4",
            "sprite": "img/itens/transcendence-potion.gif",
            "link": "https://www.tibiawiki.com.br/Transcendence_Potion"
          },
          {
            "nome": "Ultimate Health Potion",
            "qtd": "0-13",
            "sprite": "img/itens/ultimate-health-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Health_Potion"
          },
          {
            "nome": "Ultimate Mana Potion",
            "qtd": "0-14",
            "sprite": "img/itens/ultimate-mana-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Mana_Potion"
          }
        ]
      },
      {
        "raridade": "semi-raro",
        "itens": [
          {
            "nome": "Giant Amethyst",
            "qtd": null,
            "sprite": "img/itens/giant-amethyst.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Amethyst"
          },
          {
            "nome": "Giant Emerald",
            "qtd": null,
            "sprite": "img/itens/giant-emerald.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Emerald"
          },
          {
            "nome": "Giant Sapphire",
            "qtd": null,
            "sprite": "img/itens/giant-sapphire.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Sapphire"
          },
          {
            "nome": "Giant Topaz",
            "qtd": null,
            "sprite": "img/itens/giant-topaz.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Topaz"
          }
        ]
      },
      {
        "raridade": "raro",
        "itens": [
          {
            "nome": "One of Timira's Many Heads",
            "qtd": null,
            "sprite": "img/itens/one-of-timiras-many-heads.gif",
            "link": "https://www.tibiawiki.com.br/One_of_Timira%27s_Many_Heads"
          },
          {
            "nome": "Piece of Timira's Sensors",
            "qtd": null,
            "sprite": "img/itens/piece-of-timiras-sensors.gif",
            "link": "https://www.tibiawiki.com.br/Piece_of_Timira%27s_Sensors"
          }
        ]
      },
      {
        "raridade": "muito raro",
        "itens": [
          {
            "nome": "Enchanted Turtle Amulet",
            "qtd": null,
            "sprite": "img/itens/enchanted-turtle-amulet.gif",
            "link": "https://www.tibiawiki.com.br/Enchanted_Turtle_Amulet"
          },
          {
            "nome": "Dawnfire Pantaloons",
            "qtd": null,
            "sprite": "img/itens/dawnfire-pantaloons.gif",
            "link": "https://www.tibiawiki.com.br/Dawnfire_Pantaloons"
          },
          {
            "nome": "Dawnfire Sherwani",
            "qtd": null,
            "sprite": "img/itens/dawnfire-sherwani.gif",
            "link": "https://www.tibiawiki.com.br/Dawnfire_Sherwani"
          },
          {
            "nome": "Feverbloom Boots",
            "qtd": null,
            "sprite": "img/itens/feverbloom-boots.gif",
            "link": "https://www.tibiawiki.com.br/Feverbloom_Boots"
          },
          {
            "nome": "Frostflower Boots",
            "qtd": null,
            "sprite": "img/itens/frostflower-boots.gif",
            "link": "https://www.tibiawiki.com.br/Frostflower_Boots"
          },
          {
            "nome": "Midnight Sarong",
            "qtd": null,
            "sprite": "img/itens/midnight-sarong.gif",
            "link": "https://www.tibiawiki.com.br/Midnight_Sarong"
          },
          {
            "nome": "Midnight Tunic",
            "qtd": null,
            "sprite": "img/itens/midnight-tunic.gif",
            "link": "https://www.tibiawiki.com.br/Midnight_Tunic"
          },
          {
            "nome": "Naga Axe",
            "qtd": null,
            "sprite": "img/itens/naga-axe.gif",
            "link": "https://www.tibiawiki.com.br/Naga_Axe"
          },
          {
            "nome": "Naga Club",
            "qtd": null,
            "sprite": "img/itens/naga-club.gif",
            "link": "https://www.tibiawiki.com.br/Naga_Club"
          },
          {
            "nome": "Naga Crossbow",
            "qtd": null,
            "sprite": "img/itens/naga-crossbow.gif",
            "link": "https://www.tibiawiki.com.br/Naga_Crossbow"
          },
          {
            "nome": "Naga Katar",
            "qtd": null,
            "sprite": "img/itens/naga-katar.gif",
            "link": "https://www.tibiawiki.com.br/Naga_Katar"
          },
          {
            "nome": "Naga Quiver",
            "qtd": null,
            "sprite": "img/itens/naga-quiver.gif",
            "link": "https://www.tibiawiki.com.br/Naga_Quiver"
          },
          {
            "nome": "Naga Rod",
            "qtd": null,
            "sprite": "img/itens/naga-rod.gif",
            "link": "https://www.tibiawiki.com.br/Naga_Rod"
          },
          {
            "nome": "Naga Sword",
            "qtd": null,
            "sprite": "img/itens/naga-sword.gif",
            "link": "https://www.tibiawiki.com.br/Naga_Sword"
          },
          {
            "nome": "Naga Wand",
            "qtd": null,
            "sprite": "img/itens/naga-wand.gif",
            "link": "https://www.tibiawiki.com.br/Naga_Wand"
          },
          {
            "nome": "Naga Tanko",
            "qtd": null,
            "sprite": "img/itens/naga-tanko.gif",
            "link": "https://www.tibiawiki.com.br/Naga_Tanko"
          }
        ]
      }
    ],
    "lootStatus": "ok",
    "mecanica": [
      "Até 5 jogadores e 10 minutos. Entrada pelo portal numa casa do Emerald Gardens. Corrupt Nagas e Rogue Nagas renascem rápido nas salas 1 e 2.",
      "- Sala 1: pegue um balde vazio, espere a água brilhar, encha (Bucket Full of Sparkles) e use na Shattered Water da parede leste. São 4 baldes por jogador. Depois use a Trapped Water para abrir o portal ao sul (abra o [[Ornamented Chest]]).",
      "- Sala 2: use a Corrupted Trapped Water até ficar limpa (só dá a cada 30s; tira vida e mana de quem usa). Depois abra o portal e o baú ao norte.",
      "- Sala 3: sem mecânica, só matar. Trape a Timira no canto noroeste. Ela bate corpo a corpo, mas a área e os ataques em cadeia pegam o time."
    ],
    "spritesMecanica": {
      "Ornamented Chest": "img/criaturas/ornamented-chest.gif"
    },
    "link": "https://www.tibiawiki.com.br/Timira_the_Many-Headed",
    "pendencias": []
  },
  {
    "nome": "Scarlett Etzel",
    "local": "Cobra Bastion",
    "grupo": "Avulsos",
    "ordem": 4,
    "quest": "Grave Danger Quest",
    "level": {
      "quest": "Grave Danger Quest",
      "link": "https://www.tibiawiki.com.br/Grave_Danger_Quest",
      "minimo": "250",
      "recomendado": "350+"
    },
    "hp": "30000",
    "xp": "20000",
    "tipo": "archfoe",
    "sprite": "img/bosses/scarlett-etzel.gif",
    "elementos": {
      "fisico": "0%",
      "terra": "0%",
      "fogo": "0%",
      "morte": "0%",
      "energia": "0%",
      "sagrado": "0%",
      "gelo": "0%",
      "cura": "100%"
    },
    "imunidades": [
      "Invisibility",
      "Paralysis"
    ],
    "podeSerPuxado": false,
    "empurraObjetos": true,
    "passaPor": [
      "Fire",
      "Energy",
      "Poison"
    ],
    "rotacaoAjustes": {
      "nota": "Imune a tudo: o dano vem do reflexo dos espelhos. Um único golpe de qualquer vocação, na hora certa, tira 7.500. Atacar fora da hora cura 5.000."
    },
    "ataque": {
      "sorcerer": {
        "elementos": [],
        "alternativas": []
      },
      "druid": {
        "elementos": [],
        "alternativas": []
      },
      "paladin": {
        "elementos": [],
        "alternativas": []
      },
      "knight": {
        "elementos": [],
        "alternativas": []
      },
      "monk": {
        "elementos": [],
        "alternativas": []
      }
    },
    "defesa": {
      "elementos": [
        "terra",
        "sagrado"
      ],
      "melee": true,
      "nota": "Ultimate Poison Explosion (7.500, terra) e Holy Beam."
    },
    "rotacao": {
      "knight": {
        "passos": [],
        "nota": "Não causa dano relevante neste boss (imune aos elementos dessa vocação)."
      },
      "paladin": {
        "passos": [],
        "nota": "Não causa dano relevante neste boss (imune aos elementos dessa vocação)."
      },
      "sorcerer": {
        "passos": [],
        "nota": "Não causa dano relevante neste boss (imune aos elementos dessa vocação)."
      },
      "druid": {
        "passos": [],
        "nota": "Não causa dano relevante neste boss (imune aos elementos dessa vocação)."
      },
      "monk": {
        "passos": [],
        "nota": "Não causa dano relevante neste boss (imune aos elementos dessa vocação)."
      },
      "nota": "Imune a tudo: o dano vem do reflexo dos espelhos. Um único golpe de qualquer vocação, na hora certa, tira 7.500. Atacar fora da hora cura 5.000."
    },
    "tokens": [
      {
        "nome": "Silver Token",
        "qtd": "0-8",
        "raridade": "comum",
        "sprite": "img/itens/silver-token.gif"
      }
    ],
    "lootTiers": [
      {
        "raridade": "comum",
        "itens": [
          {
            "nome": "Berserk Potion",
            "qtd": "0-11",
            "sprite": "img/itens/berserk-potion.gif",
            "link": "https://www.tibiawiki.com.br/Berserk_Potion"
          },
          {
            "nome": "Blue Gem",
            "qtd": "0-2",
            "sprite": "img/itens/blue-gem.gif",
            "link": "https://www.tibiawiki.com.br/Blue_Gem"
          },
          {
            "nome": "Bullseye Potion",
            "qtd": "0-10",
            "sprite": "img/itens/bullseye-potion.gif",
            "link": "https://www.tibiawiki.com.br/Bullseye_Potion"
          },
          {
            "nome": "Crystal Coin",
            "qtd": null,
            "sprite": "img/itens/crystal-coin.gif",
            "link": "https://www.tibiawiki.com.br/Crystal_Coin"
          },
          {
            "nome": "Energy Bar",
            "qtd": null,
            "sprite": "img/itens/energy-bar.gif",
            "link": "https://www.tibiawiki.com.br/Energy_Bar"
          },
          {
            "nome": "Giant Shimmering Pearl",
            "qtd": null,
            "sprite": "img/itens/giant-shimmering-pearl.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Shimmering_Pearl"
          },
          {
            "nome": "Giant Ruby",
            "qtd": null,
            "sprite": "img/itens/giant-ruby.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Ruby"
          },
          {
            "nome": "Giant Sapphire",
            "qtd": null,
            "sprite": "img/itens/giant-sapphire.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Sapphire"
          },
          {
            "nome": "Gold Ingot",
            "qtd": null,
            "sprite": "img/itens/gold-ingot.gif",
            "link": "https://www.tibiawiki.com.br/Gold_Ingot"
          },
          {
            "nome": "Green Gem",
            "qtd": "0-2",
            "sprite": "img/itens/green-gem.gif",
            "link": "https://www.tibiawiki.com.br/Green_Gem"
          },
          {
            "nome": "Magma Amulet",
            "qtd": null,
            "sprite": "img/itens/magma-amulet.gif",
            "link": "https://www.tibiawiki.com.br/Magma_Amulet"
          },
          {
            "nome": "Magma Coat",
            "qtd": null,
            "sprite": "img/itens/magma-coat.gif",
            "link": "https://www.tibiawiki.com.br/Magma_Coat"
          },
          {
            "nome": "Magma Monocle",
            "qtd": null,
            "sprite": "img/itens/magma-monocle.gif",
            "link": "https://www.tibiawiki.com.br/Magma_Monocle"
          },
          {
            "nome": "Mastermind Potion",
            "qtd": "0-17",
            "sprite": "img/itens/mastermind-potion.gif",
            "link": "https://www.tibiawiki.com.br/Mastermind_Potion"
          },
          {
            "nome": "Mystic Gem",
            "qtd": null,
            "sprite": "img/itens/mystic-gem.gif",
            "link": "https://www.tibiawiki.com.br/Mystic_Gem"
          },
          {
            "nome": "Platinum Coin",
            "qtd": "0-9",
            "sprite": "img/itens/platinum-coin.gif",
            "link": "https://www.tibiawiki.com.br/Platinum_Coin"
          },
          {
            "nome": "Red Gem",
            "qtd": "0-2",
            "sprite": "img/itens/red-gem.gif",
            "link": "https://www.tibiawiki.com.br/Red_Gem"
          },
          {
            "nome": "Royal Star",
            "qtd": "0-142",
            "sprite": "img/itens/royal-star.gif",
            "link": "https://www.tibiawiki.com.br/Royal_Star"
          },
          {
            "nome": "Supreme Health Potion",
            "qtd": "0-20",
            "sprite": "img/itens/supreme-health-potion.gif",
            "link": "https://www.tibiawiki.com.br/Supreme_Health_Potion"
          },
          {
            "nome": "Terra Hood",
            "qtd": null,
            "sprite": "img/itens/terra-hood.gif",
            "link": "https://www.tibiawiki.com.br/Terra_Hood"
          },
          {
            "nome": "Terra Mantle",
            "qtd": null,
            "sprite": "img/itens/terra-mantle.gif",
            "link": "https://www.tibiawiki.com.br/Terra_Mantle"
          },
          {
            "nome": "Terra Rod",
            "qtd": null,
            "sprite": "img/itens/terra-rod.gif",
            "link": "https://www.tibiawiki.com.br/Terra_Rod"
          },
          {
            "nome": "Transcendence Potion",
            "qtd": "0-19",
            "sprite": "img/itens/transcendence-potion.gif",
            "link": "https://www.tibiawiki.com.br/Transcendence_Potion"
          },
          {
            "nome": "Ultimate Mana Potion",
            "qtd": "0-25",
            "sprite": "img/itens/ultimate-mana-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Mana_Potion"
          },
          {
            "nome": "Ultimate Spirit Potion",
            "qtd": "0-20",
            "sprite": "img/itens/ultimate-spirit-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Spirit_Potion"
          },
          {
            "nome": "Violet Gem",
            "qtd": "0-2",
            "sprite": "img/itens/violet-gem.gif",
            "link": "https://www.tibiawiki.com.br/Violet_Gem"
          },
          {
            "nome": "Yellow Gem",
            "qtd": "0-2",
            "sprite": "img/itens/yellow-gem.gif",
            "link": "https://www.tibiawiki.com.br/Yellow_Gem"
          }
        ]
      },
      {
        "raridade": "muito raro",
        "itens": [
          {
            "nome": "Cobra Axe",
            "qtd": null,
            "sprite": "img/itens/cobra-axe.gif",
            "link": "https://www.tibiawiki.com.br/Cobra_Axe"
          },
          {
            "nome": "Cobra Club",
            "qtd": null,
            "sprite": "img/itens/cobra-club.gif",
            "link": "https://www.tibiawiki.com.br/Cobra_Club"
          },
          {
            "nome": "Cobra Bo",
            "qtd": null,
            "sprite": "img/itens/cobra-bo.gif",
            "link": "https://www.tibiawiki.com.br/Cobra_Bo"
          },
          {
            "nome": "Cobra Crossbow",
            "qtd": null,
            "sprite": "img/itens/cobra-crossbow.gif",
            "link": "https://www.tibiawiki.com.br/Cobra_Crossbow"
          },
          {
            "nome": "Cobra Hood",
            "qtd": null,
            "sprite": "img/itens/cobra-hood.gif",
            "link": "https://www.tibiawiki.com.br/Cobra_Hood"
          },
          {
            "nome": "Cobra Rod",
            "qtd": null,
            "sprite": "img/itens/cobra-rod.gif",
            "link": "https://www.tibiawiki.com.br/Cobra_Rod"
          },
          {
            "nome": "Cobra Sword",
            "qtd": null,
            "sprite": "img/itens/cobra-sword.gif",
            "link": "https://www.tibiawiki.com.br/Cobra_Sword"
          },
          {
            "nome": "Cobra Wand",
            "qtd": null,
            "sprite": "img/itens/cobra-wand.gif",
            "link": "https://www.tibiawiki.com.br/Cobra_Wand"
          },
          {
            "nome": "The Cobra Amulet",
            "qtd": null,
            "sprite": "img/itens/the-cobra-amulet.gif",
            "link": "https://www.tibiawiki.com.br/The_Cobra_Amulet"
          }
        ]
      }
    ],
    "lootStatus": "ok",
    "mecanica": [
      "Até 5 jogadores. Ela começa imortal, e atacar fora da hora CURA 5.000. Ela bate forte (Holy Beam): não fique na frente dela; use proteção de terra.",
      "Passo a passo: 1) leve-a ao centro dos 4 espelhos ([[Pillar (Cobra Bastion)|pilares com cobra]]); 2) gire os 4 espelhos para o centro; 3) use a [[Galthen's Chestplate]] (perto do trono) e espere 2s ela parar; 4) afaste-se e só UM jogador ataca uma vez: tira 7.500.",
      "No mesmo instante ela solta Ultimate Poison Explosion (7.500) em volta: ninguém perto dela.",
      "A armadura volta em 30s; enquanto isso, despiste a Scarlett (puxe para a esquerda e corra para a direita) ou bloqueie. 4 ciclos certos matam."
    ],
    "spritesMecanica": {
      "Pillar (Cobra Bastion)": "img/criaturas/pillar-cobra-bastion.gif",
      "Galthen's Chestplate": "img/criaturas/galthens-chestplate.gif"
    },
    "link": "https://www.tibiawiki.com.br/Scarlett_Etzel",
    "pendencias": []
  },
  {
    "nome": "Mitmah Vanguard",
    "local": "Iksupan (Undercity)",
    "grupo": "Avulsos",
    "ordem": 5,
    "quest": "Adventures of Galthen Quest",
    "level": {
      "quest": "Adventures of Galthen Quest",
      "link": "https://www.tibiawiki.com.br/Adventures_of_Galthen_Quest",
      "minimo": "250",
      "recomendado": "300+"
    },
    "hp": "50000",
    "xp": "300000",
    "tipo": "archfoe",
    "sprite": "img/bosses/mitmah-vanguard.gif",
    "elementos": {
      "fisico": "100%",
      "terra": "100%",
      "fogo": "70%",
      "morte": "30%",
      "energia": "105%",
      "sagrado": "100%",
      "gelo": "100%",
      "cura": "100%"
    },
    "imunidades": [
      "Invisibility",
      "Paralysis"
    ],
    "podeSerPuxado": false,
    "empurraObjetos": true,
    "passaPor": [
      "Fire",
      "Energy",
      "Poison"
    ],
    "ataque": {
      "sorcerer": {
        "elementos": [
          "energia",
          "morte"
        ],
        "alternativas": []
      },
      "druid": {
        "elementos": [
          "terra",
          "morte"
        ],
        "alternativas": []
      },
      "paladin": {
        "elementos": [
          "sagrado"
        ],
        "alternativas": [
          "fisico"
        ]
      },
      "knight": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      },
      "monk": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      }
    },
    "defesa": {
      "elementos": [
        "energia"
      ],
      "melee": true,
      "nota": "UE de energia (~6.000): máximo de proteção de energia, Shockwave Amulet e Energy Ring."
    },
    "rotacao": {
      "knight": {
        "passos": [
          {
            "magia": "Annihilation",
            "palavras": "exori gran ico",
            "obs": "sempre que sair da recarga (30s)",
            "icone": "img/magias/annihilation.gif"
          },
          {
            "magia": "Fierce Berserk",
            "palavras": "exori gran",
            "obs": "a cada 6s",
            "icone": "img/magias/fierce-berserk.gif"
          },
          {
            "magia": "Front Sweep",
            "palavras": "exori min",
            "obs": "a cada 6s, alternando com o Fierce Berserk",
            "icone": "img/magias/front-sweep.gif"
          },
          {
            "magia": "Brutal Strike",
            "palavras": "exori ico",
            "obs": "nos intervalos (ou Shield Bash, exori ico scu, se usar escudo)",
            "icone": "img/magias/brutal-strike.gif"
          }
        ],
        "nota": "Físico 100%. Stance: Blood Rage para dano; Protector se for o blocker."
      },
      "paladin": {
        "passos": [
          {
            "magia": "Divine Grenade",
            "palavras": "exevo tempo mas san",
            "obs": "a cada 26s (level 300+)",
            "icone": "img/magias/divine-grenade.gif"
          },
          {
            "magia": "Divine Barrage",
            "palavras": "exori dir san",
            "obs": "a cada 4s",
            "icone": "img/magias/divine-barrage.gif"
          },
          {
            "magia": "Ethereal Barrage",
            "palavras": "exori dir moe",
            "obs": "a cada 4s, alternando com a Divine Barrage",
            "icone": "img/magias/ethereal-barrage.gif"
          },
          {
            "magia": "Divine Missile",
            "palavras": "exori san",
            "obs": "nos intervalos",
            "icone": "img/magias/divine-missile.gif"
          }
        ],
        "nota": "Holy 100%, físico 100%. Ataque básico com arma o tempo todo. Stance: Sharpshooter."
      },
      "sorcerer": {
        "passos": [
          {
            "magia": "Ultimate Energy Strike",
            "palavras": "exori max vis",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-energy-strike.gif"
          },
          {
            "magia": "Great Energy Beam",
            "palavras": "exevo gran vis lux",
            "obs": "a cada 6s, com o boss na reta (wave/beam)",
            "icone": "img/magias/great-energy-beam.gif"
          },
          {
            "magia": "Energy Wave",
            "palavras": "exevo vis hur",
            "obs": "a cada 8s, com o boss na reta (wave/beam)",
            "icone": "img/magias/energy-wave.gif"
          },
          {
            "magia": "Strong Energy Strike",
            "palavras": "exori gran vis",
            "obs": "a cada 8s",
            "icone": "img/magias/strong-energy-strike.gif"
          },
          {
            "magia": "Lightning",
            "palavras": "exori amp vis",
            "obs": "a cada 8s; pula para mais 2 alvos",
            "icone": "img/magias/lightning.gif"
          },
          {
            "magia": "Energy Strike",
            "palavras": "exori vis",
            "obs": "nos intervalos; sem SD neste boss",
            "icone": "img/magias/energy-strike.gif"
          }
        ],
        "nota": "Elemento: energia (105%). Stance: Master of Thunder."
      },
      "druid": {
        "passos": [
          {
            "magia": "Ultimate Ice Strike",
            "palavras": "exori max frigo",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-ice-strike.gif"
          },
          {
            "magia": "Strong Ice Wave",
            "palavras": "exevo gran frigo hur",
            "obs": "a cada 4s, com o boss na reta (wave/beam)",
            "icone": "img/magias/strong-ice-wave.gif"
          },
          {
            "magia": "Strong Ice Strike",
            "palavras": "exori gran frigo",
            "obs": "a cada 8s",
            "icone": "img/magias/strong-ice-strike.gif"
          },
          {
            "magia": "Forked Glacier",
            "palavras": "exevo fur frigo",
            "obs": "a cada 6s; pula para até 6 alvos",
            "icone": "img/magias/forked-glacier.gif"
          },
          {
            "magia": "Ice Strike",
            "palavras": "exori frigo",
            "obs": "nos intervalos; sem SD neste boss",
            "icone": "img/magias/ice-strike.gif"
          }
        ],
        "nota": "Elemento: gelo (100%). Stance: Elemental Synthesis."
      },
      "monk": {
        "passos": [
          {
            "magia": "Thousand Fist Blows",
            "palavras": "exori mas amp pug",
            "obs": "builder, a cada 8s",
            "icone": "img/magias/thousand-fist-blows.gif"
          },
          {
            "magia": "Mystic Repulse",
            "palavras": "exori amp pug",
            "obs": "builder, a cada 8s (alcance 7)",
            "icone": "img/magias/mystic-repulse.gif"
          },
          {
            "magia": "Double Jab",
            "palavras": "exori pug",
            "obs": "builder, a cada 4s, até juntar 5 de Harmony",
            "icone": "img/magias/double-jab.gif"
          },
          {
            "magia": "Devastating Knockout",
            "palavras": "exori gran nia",
            "obs": "spender com 5 de Harmony (a cada 8s, alcance 7)",
            "icone": "img/magias/devastating-knockout.gif"
          },
          {
            "magia": "Forceful Uppercut",
            "palavras": "exori gran pug",
            "obs": "sempre que sair da recarga (60s)",
            "icone": "img/magias/forceful-uppercut.gif"
          }
        ],
        "nota": "Físico 100%. Gaste a Harmony só com 5 pontos (+112% de dano). Abaixo do level 125 use Greater Tiger Clash (exori nia) como spender."
      }
    },
    "tokens": [],
    "lootTiers": [
      {
        "raridade": "comum",
        "itens": [
          {
            "nome": "Gold Coin",
            "qtd": "0-380",
            "sprite": "img/itens/gold-coin.gif",
            "link": "https://www.tibiawiki.com.br/Gold_Coin"
          },
          {
            "nome": "Great Health Potion",
            "qtd": "0-12",
            "sprite": "img/itens/great-health-potion.gif",
            "link": "https://www.tibiawiki.com.br/Great_Health_Potion"
          },
          {
            "nome": "Great Mana Potion",
            "qtd": "0-13",
            "sprite": "img/itens/great-mana-potion.gif",
            "link": "https://www.tibiawiki.com.br/Great_Mana_Potion"
          },
          {
            "nome": "Great Spirit Potion",
            "qtd": "0-9",
            "sprite": "img/itens/great-spirit-potion.gif",
            "link": "https://www.tibiawiki.com.br/Great_Spirit_Potion"
          },
          {
            "nome": "Crystal of the Mitmah",
            "qtd": null,
            "sprite": "img/itens/crystal-of-the-mitmah.gif",
            "link": "https://www.tibiawiki.com.br/Crystal_of_the_Mitmah"
          },
          {
            "nome": "Broken Mitmah Necklace",
            "qtd": null,
            "sprite": "img/itens/broken-mitmah-necklace.gif",
            "link": "https://www.tibiawiki.com.br/Broken_Mitmah_Necklace"
          }
        ]
      },
      {
        "raridade": "incomum",
        "itens": [
          {
            "nome": "White Gem",
            "qtd": null,
            "sprite": "img/itens/white-gem.gif",
            "link": "https://www.tibiawiki.com.br/White_Gem"
          },
          {
            "nome": "Blue Gem",
            "qtd": null,
            "sprite": "img/itens/blue-gem.gif",
            "link": "https://www.tibiawiki.com.br/Blue_Gem"
          },
          {
            "nome": "Platinum Coin",
            "qtd": "0-60",
            "sprite": "img/itens/platinum-coin.gif",
            "link": "https://www.tibiawiki.com.br/Platinum_Coin"
          },
          {
            "nome": "Yellow Gem",
            "qtd": "0-2",
            "sprite": "img/itens/yellow-gem.gif",
            "link": "https://www.tibiawiki.com.br/Yellow_Gem"
          }
        ]
      },
      {
        "raridade": "raro",
        "itens": [
          {
            "nome": "Broken Mitmah Chestplate",
            "qtd": null,
            "sprite": "img/itens/broken-mitmah-chestplate.gif",
            "link": "https://www.tibiawiki.com.br/Broken_Mitmah_Chestplate"
          },
          {
            "nome": "Giant Sapphire",
            "qtd": null,
            "sprite": "img/itens/giant-sapphire.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Sapphire"
          },
          {
            "nome": "Splintered Mitmah Gem",
            "qtd": null,
            "sprite": "img/itens/splintered-mitmah-gem.gif",
            "link": "https://www.tibiawiki.com.br/Splintered_Mitmah_Gem"
          }
        ]
      },
      {
        "raridade": "muito raro",
        "itens": [
          {
            "nome": "Stoic Iks Boots",
            "qtd": null,
            "sprite": "img/itens/stoic-iks-boots.gif",
            "link": "https://www.tibiawiki.com.br/Stoic_Iks_Boots"
          },
          {
            "nome": "Stoic Iks Casque",
            "qtd": null,
            "sprite": "img/itens/stoic-iks-casque.gif",
            "link": "https://www.tibiawiki.com.br/Stoic_Iks_Casque"
          },
          {
            "nome": "Stoic Iks Chestplate",
            "qtd": null,
            "sprite": "img/itens/stoic-iks-chestplate.gif",
            "link": "https://www.tibiawiki.com.br/Stoic_Iks_Chestplate"
          },
          {
            "nome": "Stoic Iks Culet",
            "qtd": null,
            "sprite": "img/itens/stoic-iks-culet.gif",
            "link": "https://www.tibiawiki.com.br/Stoic_Iks_Culet"
          },
          {
            "nome": "Stoic Iks Faulds",
            "qtd": null,
            "sprite": "img/itens/stoic-iks-faulds.gif",
            "link": "https://www.tibiawiki.com.br/Stoic_Iks_Faulds"
          },
          {
            "nome": "Stoic Iks Headpiece",
            "qtd": null,
            "sprite": "img/itens/stoic-iks-headpiece.gif",
            "link": "https://www.tibiawiki.com.br/Stoic_Iks_Headpiece"
          },
          {
            "nome": "Stoic Iks Sandals",
            "qtd": null,
            "sprite": "img/itens/stoic-iks-sandals.gif",
            "link": "https://www.tibiawiki.com.br/Stoic_Iks_Sandals"
          },
          {
            "nome": "Stoic Iks Cuirass",
            "qtd": null,
            "sprite": "img/itens/stoic-iks-cuirass.gif",
            "link": "https://www.tibiawiki.com.br/Stoic_Iks_Cuirass"
          },
          {
            "nome": "Iks Footwraps",
            "qtd": null,
            "sprite": "img/itens/iks-footwraps.gif",
            "link": "https://www.tibiawiki.com.br/Iks_Footwraps"
          },
          {
            "nome": "Stoic Iks Robe",
            "qtd": null,
            "sprite": "img/itens/stoic-iks-robe.gif",
            "link": "https://www.tibiawiki.com.br/Stoic_Iks_Robe"
          }
        ]
      }
    ],
    "lootStatus": "ok",
    "mecanica": [
      "Até 5 jogadores. Vem com [[Iks Yapunac]], [[Mitmah Seer]] e [[Mitmah Scout]]: o knight puxa tudo com exeti/exeta (o Scout não é puxado) e o resto ataca de longe.",
      "O dano principal é um UE de energia (~6.000): entre com o máximo de proteção de energy.",
      "Ao dizer \"FEAR THE CURSE!\": root em todo mundo, teleporte para um ponto aleatório e UE. Tenha [[Shockwave Amulet]], [[Energy Ring]], Magic Shield e Protector prontos.",
      "Ao dizer \"NOW TREMBLE!\": outro UE, sem root nem teleporte. Os pontos de teleporte são sempre os mesmos: alguns lugares da sala são sempre seguros. Ele quebra magic wall e wild growth."
    ],
    "spritesMecanica": {
      "Iks Yapunac": "img/criaturas/iks-yapunac.gif",
      "Mitmah Seer": "img/criaturas/mitmah-seer.gif",
      "Mitmah Scout": "img/criaturas/mitmah-scout.gif",
      "Shockwave Amulet": "img/criaturas/shockwave-amulet.gif",
      "Energy Ring": "img/criaturas/energy-ring.gif"
    },
    "fases": [
      {
        "nome": "Iks Yapunac",
        "dica": "Vem com o boss: fraco a death (120%).",
        "hp": "3125",
        "elementos": {
          "fisico": "85%",
          "terra": "90%",
          "fogo": "90%",
          "morte": "120%",
          "energia": "110%",
          "sagrado": "85%",
          "gelo": "105%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/iks-yapunac.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Death Beam",
              "palavras": "exevo max mort",
              "icone": "img/magias/great-death-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Sudden Death Rune",
              "palavras": "adori gran mort",
              "icone": "img/magias/sudden-death-rune.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "morte"
          ],
          "druid": [
            "morte"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Mitmah Seer",
        "dica": "Vem com o boss: fraco a energia (120%).",
        "hp": "4620",
        "elementos": {
          "fisico": "100%",
          "terra": "105%",
          "fogo": "85%",
          "morte": "85%",
          "energia": "120%",
          "sagrado": "100%",
          "gelo": "95%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/mitmah-seer.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Terra Strike",
              "palavras": "exori max tera",
              "icone": "img/magias/ultimate-terra-strike.gif"
            },
            {
              "magia": "Sudden Death Rune",
              "palavras": "adori gran mort",
              "icone": "img/magias/sudden-death-rune.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "energia"
          ],
          "druid": [
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Mitmah Scout",
        "dica": "Não é puxado pelo exeta: fraco a terra (115%).",
        "hp": "3940",
        "elementos": {
          "fisico": "95%",
          "terra": "115%",
          "fogo": "90%",
          "morte": "85%",
          "energia": "105%",
          "sagrado": "110%",
          "gelo": "85%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/mitmah-scout.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Terra Strike",
              "palavras": "exori max tera",
              "icone": "img/magias/ultimate-terra-strike.gif"
            },
            {
              "magia": "Terra Wave",
              "palavras": "exevo tera hur",
              "icone": "img/magias/terra-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "energia"
          ],
          "druid": [
            "terra"
          ],
          "paladin": [
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      }
    ],
    "link": "https://www.tibiawiki.com.br/Mitmah_Vanguard",
    "pendencias": []
  },
  {
    "nome": "Plagueroot",
    "local": "Dream Scar (abaixo de Greenshore)",
    "grupo": "Dream Courts",
    "subgrupo": "Diários",
    "ordem": 1,
    "quest": "The Dream Courts Quest",
    "level": {
      "quest": "The Dream Courts Quest",
      "link": "https://www.tibiawiki.com.br/The_Dream_Courts_Quest",
      "minimo": "250",
      "recomendado": "350+"
    },
    "hp": "320000",
    "xp": "55000",
    "tipo": "nemesis",
    "sprite": "img/bosses/plagueroot.gif",
    "elementos": {
      "fisico": "100%",
      "terra": "100%",
      "fogo": "100%",
      "morte": "100%",
      "energia": "100%",
      "sagrado": "100%",
      "gelo": "100%",
      "cura": "100%"
    },
    "imunidades": [
      "Invisibility",
      "Paralysis"
    ],
    "podeSerPuxado": false,
    "empurraObjetos": true,
    "passaPor": [
      "Fire",
      "Energy",
      "Poison"
    ],
    "rotacaoAjustes": {
      "semTerra": true,
      "nota": "Não use terra: os summons curam o boss com terra."
    },
    "ataque": {
      "sorcerer": {
        "elementos": [
          "energia"
        ],
        "alternativas": [
          "fogo"
        ]
      },
      "druid": {
        "elementos": [
          "gelo"
        ],
        "alternativas": []
      },
      "paladin": {
        "elementos": [
          "sagrado"
        ],
        "alternativas": [
          "fisico"
        ]
      },
      "knight": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      },
      "monk": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      }
    },
    "defesa": {
      "elementos": [
        "terra"
      ],
      "melee": true,
      "nota": "O \"+\" depois do teleporte é de terra (2.000-3.000)."
    },
    "rotacao": {
      "knight": {
        "passos": [
          {
            "magia": "Annihilation",
            "palavras": "exori gran ico",
            "obs": "sempre que sair da recarga (30s)",
            "icone": "img/magias/annihilation.gif"
          },
          {
            "magia": "Fierce Berserk",
            "palavras": "exori gran",
            "obs": "a cada 6s",
            "icone": "img/magias/fierce-berserk.gif"
          },
          {
            "magia": "Front Sweep",
            "palavras": "exori min",
            "obs": "a cada 6s, alternando com o Fierce Berserk",
            "icone": "img/magias/front-sweep.gif"
          },
          {
            "magia": "Brutal Strike",
            "palavras": "exori ico",
            "obs": "nos intervalos (ou Shield Bash, exori ico scu, se usar escudo)",
            "icone": "img/magias/brutal-strike.gif"
          }
        ],
        "nota": "Físico 100%. Stance: Blood Rage para dano; Protector se for o blocker."
      },
      "paladin": {
        "passos": [
          {
            "magia": "Divine Grenade",
            "palavras": "exevo tempo mas san",
            "obs": "a cada 26s (level 300+)",
            "icone": "img/magias/divine-grenade.gif"
          },
          {
            "magia": "Divine Barrage",
            "palavras": "exori dir san",
            "obs": "a cada 4s",
            "icone": "img/magias/divine-barrage.gif"
          },
          {
            "magia": "Ethereal Barrage",
            "palavras": "exori dir moe",
            "obs": "a cada 4s, alternando com a Divine Barrage",
            "icone": "img/magias/ethereal-barrage.gif"
          },
          {
            "magia": "Divine Missile",
            "palavras": "exori san",
            "obs": "nos intervalos",
            "icone": "img/magias/divine-missile.gif"
          }
        ],
        "nota": "Holy 100%, físico 100%. Ataque básico com arma o tempo todo. Stance: Sharpshooter."
      },
      "sorcerer": {
        "passos": [
          {
            "magia": "Ultimate Energy Strike",
            "palavras": "exori max vis",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-energy-strike.gif"
          },
          {
            "magia": "Great Energy Beam",
            "palavras": "exevo gran vis lux",
            "obs": "a cada 6s, com o boss na reta (wave/beam)",
            "icone": "img/magias/great-energy-beam.gif"
          },
          {
            "magia": "Great Death Beam",
            "palavras": "exevo max mort",
            "obs": "a cada 6s, com o boss na reta (beam)",
            "icone": "img/magias/great-death-beam.gif"
          },
          {
            "magia": "Energy Wave",
            "palavras": "exevo vis hur",
            "obs": "a cada 8s, com o boss na reta (wave/beam)",
            "icone": "img/magias/energy-wave.gif"
          },
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "a cada 2s, sempre que nada mais forte estiver pronto",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Strong Energy Strike",
            "palavras": "exori gran vis",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/strong-energy-strike.gif"
          },
          {
            "magia": "Death Echo",
            "palavras": "exevo mort ora",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/death-echo.gif"
          },
          {
            "magia": "Lightning",
            "palavras": "exori amp vis",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/lightning.gif"
          }
        ],
        "nota": "Elemento: energia (100%). Stance: Master of Thunder."
      },
      "druid": {
        "passos": [
          {
            "magia": "Ultimate Ice Strike",
            "palavras": "exori max frigo",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-ice-strike.gif"
          },
          {
            "magia": "Strong Ice Wave",
            "palavras": "exevo gran frigo hur",
            "obs": "a cada 4s, com o boss na reta (wave/beam)",
            "icone": "img/magias/strong-ice-wave.gif"
          },
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "a cada 2s, sempre que nada mais forte estiver pronto",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Strong Ice Strike",
            "palavras": "exori gran frigo",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/strong-ice-strike.gif"
          },
          {
            "magia": "Forked Glacier",
            "palavras": "exevo fur frigo",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/forked-glacier.gif"
          }
        ],
        "nota": "Elemento: gelo (100%). Stance: Elemental Synthesis."
      },
      "monk": {
        "passos": [
          {
            "magia": "Thousand Fist Blows",
            "palavras": "exori mas amp pug",
            "obs": "builder, a cada 8s",
            "icone": "img/magias/thousand-fist-blows.gif"
          },
          {
            "magia": "Mystic Repulse",
            "palavras": "exori amp pug",
            "obs": "builder, a cada 8s (alcance 7)",
            "icone": "img/magias/mystic-repulse.gif"
          },
          {
            "magia": "Double Jab",
            "palavras": "exori pug",
            "obs": "builder, a cada 4s, até juntar 5 de Harmony",
            "icone": "img/magias/double-jab.gif"
          },
          {
            "magia": "Devastating Knockout",
            "palavras": "exori gran nia",
            "obs": "spender com 5 de Harmony (a cada 8s, alcance 7)",
            "icone": "img/magias/devastating-knockout.gif"
          },
          {
            "magia": "Forceful Uppercut",
            "palavras": "exori gran pug",
            "obs": "sempre que sair da recarga (60s)",
            "icone": "img/magias/forceful-uppercut.gif"
          }
        ],
        "nota": "Físico 100%. Gaste a Harmony só com 5 pontos (+112% de dano). Abaixo do level 125 use Greater Tiger Clash (exori nia) como spender."
      },
      "nota": "Não use terra: os summons curam o boss com terra."
    },
    "tokens": [
      {
        "nome": "Gold Token",
        "qtd": "0-3",
        "raridade": "semi-raro",
        "sprite": "img/itens/gold-token.gif"
      },
      {
        "nome": "Silver Token",
        "qtd": "0-5",
        "raridade": "semi-raro",
        "sprite": "img/itens/silver-token.gif"
      }
    ],
    "lootTiers": [
      {
        "raridade": "comum",
        "itens": [
          {
            "nome": "Platinum Coin",
            "qtd": "0-5",
            "sprite": "img/itens/platinum-coin.gif",
            "link": "https://www.tibiawiki.com.br/Platinum_Coin"
          },
          {
            "nome": "Crystal Coin",
            "qtd": "0-2",
            "sprite": "img/itens/crystal-coin.gif",
            "link": "https://www.tibiawiki.com.br/Crystal_Coin"
          },
          {
            "nome": "Supreme Health Potion",
            "qtd": "0-20",
            "sprite": "img/itens/supreme-health-potion.gif",
            "link": "https://www.tibiawiki.com.br/Supreme_Health_Potion"
          },
          {
            "nome": "Ultimate Mana Potion",
            "qtd": "0-20",
            "sprite": "img/itens/ultimate-mana-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Mana_Potion"
          },
          {
            "nome": "Ultimate Spirit Potion",
            "qtd": "0-20",
            "sprite": "img/itens/ultimate-spirit-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Spirit_Potion"
          }
        ]
      },
      {
        "raridade": "incomum",
        "itens": [
          {
            "nome": "Berserk Potion",
            "qtd": "0-10",
            "sprite": "img/itens/berserk-potion.gif",
            "link": "https://www.tibiawiki.com.br/Berserk_Potion"
          },
          {
            "nome": "Blue Gem",
            "qtd": "0-2",
            "sprite": "img/itens/blue-gem.gif",
            "link": "https://www.tibiawiki.com.br/Blue_Gem"
          },
          {
            "nome": "Bullseye Potion",
            "qtd": "0-10",
            "sprite": "img/itens/bullseye-potion.gif",
            "link": "https://www.tibiawiki.com.br/Bullseye_Potion"
          },
          {
            "nome": "Green Gem",
            "qtd": "0-2",
            "sprite": "img/itens/green-gem.gif",
            "link": "https://www.tibiawiki.com.br/Green_Gem"
          },
          {
            "nome": "Mastermind Potion",
            "qtd": "0-10",
            "sprite": "img/itens/mastermind-potion.gif",
            "link": "https://www.tibiawiki.com.br/Mastermind_Potion"
          },
          {
            "nome": "Royal Star",
            "qtd": "0-100",
            "sprite": "img/itens/royal-star.gif",
            "link": "https://www.tibiawiki.com.br/Royal_Star"
          },
          {
            "nome": "Violet Gem",
            "qtd": "0-2",
            "sprite": "img/itens/violet-gem.gif",
            "link": "https://www.tibiawiki.com.br/Violet_Gem"
          },
          {
            "nome": "Yellow Gem",
            "qtd": "0-2",
            "sprite": "img/itens/yellow-gem.gif",
            "link": "https://www.tibiawiki.com.br/Yellow_Gem"
          },
          {
            "nome": "Collar of Blue Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-blue-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Blue_Plasma"
          },
          {
            "nome": "Collar of Green Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-green-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Green_Plasma"
          },
          {
            "nome": "Collar of Red Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-red-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Red_Plasma"
          },
          {
            "nome": "Energy Bar",
            "qtd": null,
            "sprite": "img/itens/energy-bar.gif",
            "link": "https://www.tibiawiki.com.br/Energy_Bar"
          },
          {
            "nome": "Giant Shimmering Pearl",
            "qtd": null,
            "sprite": "img/itens/giant-shimmering-pearl.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Shimmering_Pearl"
          },
          {
            "nome": "Gold Ingot",
            "qtd": null,
            "sprite": "img/itens/gold-ingot.gif",
            "link": "https://www.tibiawiki.com.br/Gold_Ingot"
          },
          {
            "nome": "Huge Chunk of Crude Iron",
            "qtd": null,
            "sprite": "img/itens/huge-chunk-of-crude-iron.gif",
            "link": "https://www.tibiawiki.com.br/Huge_Chunk_of_Crude_Iron"
          },
          {
            "nome": "Magic Sulphur",
            "qtd": null,
            "sprite": "img/itens/magic-sulphur.gif",
            "link": "https://www.tibiawiki.com.br/Magic_Sulphur"
          },
          {
            "nome": "Mysterious Remains",
            "qtd": null,
            "sprite": "img/itens/mysterious-remains.gif",
            "link": "https://www.tibiawiki.com.br/Mysterious_Remains"
          },
          {
            "nome": "Piggy Bank",
            "qtd": null,
            "sprite": "img/itens/piggy-bank.gif",
            "link": "https://www.tibiawiki.com.br/Piggy_Bank"
          },
          {
            "nome": "Red Gem",
            "qtd": null,
            "sprite": "img/itens/red-gem.gif",
            "link": "https://www.tibiawiki.com.br/Red_Gem"
          },
          {
            "nome": "Ring of Blue Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-blue-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Blue_Plasma"
          }
        ]
      },
      {
        "raridade": "semi-raro",
        "itens": [
          {
            "nome": "Arcane Staff",
            "qtd": null,
            "sprite": "img/itens/arcane-staff.gif",
            "link": "https://www.tibiawiki.com.br/Arcane_Staff"
          },
          {
            "nome": "Chaos Mace",
            "qtd": null,
            "sprite": "img/itens/chaos-mace.gif",
            "link": "https://www.tibiawiki.com.br/Chaos_Mace"
          },
          {
            "nome": "Crunor Idol",
            "qtd": null,
            "sprite": "img/itens/crunor-idol.gif",
            "link": "https://www.tibiawiki.com.br/Crunor_Idol"
          },
          {
            "nome": "Plagueroot Offshoot",
            "qtd": null,
            "sprite": "img/itens/plagueroot-offshoot.gif",
            "link": "https://www.tibiawiki.com.br/Plagueroot_Offshoot"
          },
          {
            "nome": "Pomegranate",
            "qtd": null,
            "sprite": "img/itens/pomegranate.gif",
            "link": "https://www.tibiawiki.com.br/Pomegranate"
          },
          {
            "nome": "Ring of the Sky",
            "qtd": null,
            "sprite": "img/itens/ring-of-the-sky.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_the_Sky"
          },
          {
            "nome": "Skull Staff",
            "qtd": null,
            "sprite": "img/itens/skull-staff.gif",
            "link": "https://www.tibiawiki.com.br/Skull_Staff"
          }
        ]
      },
      {
        "raridade": "raro",
        "itens": [
          {
            "nome": "Living Armor",
            "qtd": null,
            "sprite": "img/itens/living-armor.gif",
            "link": "https://www.tibiawiki.com.br/Living_Armor"
          },
          {
            "nome": "Living Vine Bow",
            "qtd": null,
            "sprite": "img/itens/living-vine-bow.gif",
            "link": "https://www.tibiawiki.com.br/Living_Vine_Bow"
          },
          {
            "nome": "Soul Stone",
            "qtd": null,
            "sprite": "img/itens/soul-stone.gif",
            "link": "https://www.tibiawiki.com.br/Soul_Stone"
          },
          {
            "nome": "Turquoise Tendril Lantern",
            "qtd": null,
            "sprite": "img/itens/turquoise-tendril-lantern.gif",
            "link": "https://www.tibiawiki.com.br/Turquoise_Tendril_Lantern"
          }
        ]
      }
    ],
    "lootStatus": "ok",
    "mecanica": [
      "Vem com 3 [[Plant Attendant|Plant Attendants]]. Não deixe eles pisarem nos [[Focus of Corrupted Nature|Focuses of Corrupted Nature]], senão viram [[Plant Abomination|Plant Abominations]], mais fortes. Se virar, mate que volta a ser Attendant.",
      "Os summons atacam com terra e isso cura o boss: mantenha-os longe dele. Qualquer um pode bloquear os Attendants. Não use terra no boss.",
      "Às vezes o boss teleporta e logo solta um \"+\" grande (2.000-3.000). Shooters atentos; use proteção de terra.",
      "Ele também se cura ao pisar nos Focuses: o blocker não pode deixar."
    ],
    "spritesMecanica": {
      "Plant Attendant": "img/criaturas/plant-attendant.gif",
      "Focus of Corrupted Nature": "img/criaturas/focus-of-corrupted-nature.gif",
      "Plant Abomination": "img/criaturas/plant-abomination.gif"
    },
    "fases": [
      {
        "nome": "Plant Attendant",
        "dica": "Não deixe pisar nos Focuses. Terra cura ela (e os ataques dela curam o boss).",
        "hp": "3900",
        "elementos": {
          "fisico": "100%",
          "terra": "-100%",
          "fogo": "100%",
          "morte": "100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/plant-attendant.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo",
            "morte"
          ],
          "druid": [
            "gelo",
            "morte"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Plant Abomination",
        "dica": "Forma forte do Attendant: mate que ela volta a ser Attendant.",
        "hp": "3900",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/plant-abomination.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo",
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      }
    ],
    "link": "https://www.tibiawiki.com.br/Plagueroot",
    "pendencias": []
  },
  {
    "nome": "Malofur Mangrinder",
    "local": "Dream Scar (abaixo de Greenshore)",
    "grupo": "Dream Courts",
    "subgrupo": "Diários",
    "ordem": 2,
    "quest": "The Dream Courts Quest",
    "level": {
      "quest": "The Dream Courts Quest",
      "link": "https://www.tibiawiki.com.br/The_Dream_Courts_Quest",
      "minimo": "250",
      "recomendado": "350+"
    },
    "hp": "320000",
    "xp": "55000",
    "tipo": "nemesis",
    "sprite": "img/bosses/malofur-mangrinder.gif",
    "elementos": {
      "fisico": "100%",
      "terra": "100%",
      "fogo": "-100%",
      "morte": "100%",
      "energia": "65%",
      "sagrado": "100%",
      "gelo": "100%",
      "cura": "100%"
    },
    "imunidades": [
      "Invisibility",
      "Paralysis"
    ],
    "podeSerPuxado": false,
    "empurraObjetos": true,
    "passaPor": [
      "Fire",
      "Energy",
      "Poison"
    ],
    "ataque": {
      "sorcerer": {
        "elementos": [
          "morte"
        ],
        "alternativas": []
      },
      "druid": {
        "elementos": [
          "gelo"
        ],
        "alternativas": [
          "terra"
        ]
      },
      "paladin": {
        "elementos": [
          "sagrado"
        ],
        "alternativas": [
          "fisico"
        ]
      },
      "knight": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      },
      "monk": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      }
    },
    "defesa": {
      "elementos": [
        "fisico"
      ],
      "melee": true,
      "nota": "O BOOM e as Whirling Blades: Stone Skin Amulet no blocker depois do 3º/4º BOOM."
    },
    "rotacao": {
      "knight": {
        "passos": [
          {
            "magia": "Annihilation",
            "palavras": "exori gran ico",
            "obs": "sempre que sair da recarga (30s)",
            "icone": "img/magias/annihilation.gif"
          },
          {
            "magia": "Fierce Berserk",
            "palavras": "exori gran",
            "obs": "a cada 6s",
            "icone": "img/magias/fierce-berserk.gif"
          },
          {
            "magia": "Front Sweep",
            "palavras": "exori min",
            "obs": "a cada 6s, alternando com o Fierce Berserk",
            "icone": "img/magias/front-sweep.gif"
          },
          {
            "magia": "Brutal Strike",
            "palavras": "exori ico",
            "obs": "nos intervalos (ou Shield Bash, exori ico scu, se usar escudo)",
            "icone": "img/magias/brutal-strike.gif"
          }
        ],
        "nota": "Físico 100%. Stance: Blood Rage para dano; Protector se for o blocker."
      },
      "paladin": {
        "passos": [
          {
            "magia": "Divine Grenade",
            "palavras": "exevo tempo mas san",
            "obs": "a cada 26s (level 300+)",
            "icone": "img/magias/divine-grenade.gif"
          },
          {
            "magia": "Divine Barrage",
            "palavras": "exori dir san",
            "obs": "a cada 4s",
            "icone": "img/magias/divine-barrage.gif"
          },
          {
            "magia": "Ethereal Barrage",
            "palavras": "exori dir moe",
            "obs": "a cada 4s, alternando com a Divine Barrage",
            "icone": "img/magias/ethereal-barrage.gif"
          },
          {
            "magia": "Divine Missile",
            "palavras": "exori san",
            "obs": "nos intervalos",
            "icone": "img/magias/divine-missile.gif"
          }
        ],
        "nota": "Holy 100%, físico 100%. Ataque básico com arma o tempo todo. Stance: Sharpshooter."
      },
      "sorcerer": {
        "passos": [
          {
            "magia": "Great Death Beam",
            "palavras": "exevo max mort",
            "obs": "a cada 6s, com o boss na reta (beam)",
            "icone": "img/magias/great-death-beam.gif"
          },
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "a cada 2s, sempre que nada mais forte estiver pronto",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Ultimate Energy Strike",
            "palavras": "exori max vis",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/ultimate-energy-strike.gif"
          },
          {
            "magia": "Death Echo",
            "palavras": "exevo mort ora",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/death-echo.gif"
          },
          {
            "magia": "Great Energy Beam",
            "palavras": "exevo gran vis lux",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/great-energy-beam.gif"
          },
          {
            "magia": "Energy Wave",
            "palavras": "exevo vis hur",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/energy-wave.gif"
          },
          {
            "magia": "Strong Energy Strike",
            "palavras": "exori gran vis",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/strong-energy-strike.gif"
          },
          {
            "magia": "Lightning",
            "palavras": "exori amp vis",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/lightning.gif"
          }
        ],
        "nota": "Elemento: energia (65%). Stance: Master of Thunder."
      },
      "druid": {
        "passos": [
          {
            "magia": "Ultimate Ice Strike",
            "palavras": "exori max frigo",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-ice-strike.gif"
          },
          {
            "magia": "Strong Ice Wave",
            "palavras": "exevo gran frigo hur",
            "obs": "a cada 4s, com o boss na reta (wave/beam)",
            "icone": "img/magias/strong-ice-wave.gif"
          },
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "a cada 2s, sempre que nada mais forte estiver pronto",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Strong Ice Strike",
            "palavras": "exori gran frigo",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/strong-ice-strike.gif"
          },
          {
            "magia": "Forked Glacier",
            "palavras": "exevo fur frigo",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/forked-glacier.gif"
          }
        ],
        "nota": "Elemento: gelo (100%). Stance: Elemental Synthesis."
      },
      "monk": {
        "passos": [
          {
            "magia": "Thousand Fist Blows",
            "palavras": "exori mas amp pug",
            "obs": "builder, a cada 8s",
            "icone": "img/magias/thousand-fist-blows.gif"
          },
          {
            "magia": "Mystic Repulse",
            "palavras": "exori amp pug",
            "obs": "builder, a cada 8s (alcance 7)",
            "icone": "img/magias/mystic-repulse.gif"
          },
          {
            "magia": "Double Jab",
            "palavras": "exori pug",
            "obs": "builder, a cada 4s, até juntar 5 de Harmony",
            "icone": "img/magias/double-jab.gif"
          },
          {
            "magia": "Devastating Knockout",
            "palavras": "exori gran nia",
            "obs": "spender com 5 de Harmony (a cada 8s, alcance 7)",
            "icone": "img/magias/devastating-knockout.gif"
          },
          {
            "magia": "Forceful Uppercut",
            "palavras": "exori gran pug",
            "obs": "sempre que sair da recarga (60s)",
            "icone": "img/magias/forceful-uppercut.gif"
          }
        ],
        "nota": "Físico 100%. Gaste a Harmony só com 5 pontos (+112% de dano). Abaixo do level 125 use Greater Tiger Clash (exori nia) como spender."
      }
    },
    "tokens": [
      {
        "nome": "Gold Token",
        "qtd": "0-2",
        "raridade": "incomum",
        "sprite": "img/itens/gold-token.gif"
      },
      {
        "nome": "Silver Token",
        "qtd": "0-5",
        "raridade": "incomum",
        "sprite": "img/itens/silver-token.gif"
      }
    ],
    "lootTiers": [
      {
        "raridade": "comum",
        "itens": [
          {
            "nome": "Platinum Coin",
            "qtd": "0-5",
            "sprite": "img/itens/platinum-coin.gif",
            "link": "https://www.tibiawiki.com.br/Platinum_Coin"
          },
          {
            "nome": "Crystal Coin",
            "qtd": "0-2",
            "sprite": "img/itens/crystal-coin.gif",
            "link": "https://www.tibiawiki.com.br/Crystal_Coin"
          },
          {
            "nome": "Supreme Health Potion",
            "qtd": "0-20",
            "sprite": "img/itens/supreme-health-potion.gif",
            "link": "https://www.tibiawiki.com.br/Supreme_Health_Potion"
          },
          {
            "nome": "Ultimate Mana Potion",
            "qtd": "0-20",
            "sprite": "img/itens/ultimate-mana-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Mana_Potion"
          },
          {
            "nome": "Ultimate Spirit Potion",
            "qtd": "0-20",
            "sprite": "img/itens/ultimate-spirit-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Spirit_Potion"
          }
        ]
      },
      {
        "raridade": "incomum",
        "itens": [
          {
            "nome": "Berserk Potion",
            "qtd": "0-10",
            "sprite": "img/itens/berserk-potion.gif",
            "link": "https://www.tibiawiki.com.br/Berserk_Potion"
          },
          {
            "nome": "Bullseye Potion",
            "qtd": "0-10",
            "sprite": "img/itens/bullseye-potion.gif",
            "link": "https://www.tibiawiki.com.br/Bullseye_Potion"
          },
          {
            "nome": "Mastermind Potion",
            "qtd": "0-10",
            "sprite": "img/itens/mastermind-potion.gif",
            "link": "https://www.tibiawiki.com.br/Mastermind_Potion"
          },
          {
            "nome": "Red Gem",
            "qtd": "0-2",
            "sprite": "img/itens/red-gem.gif",
            "link": "https://www.tibiawiki.com.br/Red_Gem"
          },
          {
            "nome": "Royal Star",
            "qtd": "0-100",
            "sprite": "img/itens/royal-star.gif",
            "link": "https://www.tibiawiki.com.br/Royal_Star"
          },
          {
            "nome": "Yellow Gem",
            "qtd": "0-2",
            "sprite": "img/itens/yellow-gem.gif",
            "link": "https://www.tibiawiki.com.br/Yellow_Gem"
          },
          {
            "nome": "Blue Gem",
            "qtd": null,
            "sprite": "img/itens/blue-gem.gif",
            "link": "https://www.tibiawiki.com.br/Blue_Gem"
          },
          {
            "nome": "Collar of Blue Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-blue-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Blue_Plasma"
          },
          {
            "nome": "Collar of Green Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-green-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Green_Plasma"
          },
          {
            "nome": "Collar of Red Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-red-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Red_Plasma"
          },
          {
            "nome": "Energy Bar",
            "qtd": null,
            "sprite": "img/itens/energy-bar.gif",
            "link": "https://www.tibiawiki.com.br/Energy_Bar"
          },
          {
            "nome": "Giant Shimmering Pearl",
            "qtd": null,
            "sprite": "img/itens/giant-shimmering-pearl.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Shimmering_Pearl"
          },
          {
            "nome": "Gold Ingot",
            "qtd": null,
            "sprite": "img/itens/gold-ingot.gif",
            "link": "https://www.tibiawiki.com.br/Gold_Ingot"
          },
          {
            "nome": "Green Gem",
            "qtd": null,
            "sprite": "img/itens/green-gem.gif",
            "link": "https://www.tibiawiki.com.br/Green_Gem"
          },
          {
            "nome": "Huge Chunk of Crude Iron",
            "qtd": null,
            "sprite": "img/itens/huge-chunk-of-crude-iron.gif",
            "link": "https://www.tibiawiki.com.br/Huge_Chunk_of_Crude_Iron"
          },
          {
            "nome": "Mysterious Remains",
            "qtd": null,
            "sprite": "img/itens/mysterious-remains.gif",
            "link": "https://www.tibiawiki.com.br/Mysterious_Remains"
          },
          {
            "nome": "Piggy Bank",
            "qtd": null,
            "sprite": "img/itens/piggy-bank.gif",
            "link": "https://www.tibiawiki.com.br/Piggy_Bank"
          },
          {
            "nome": "Ring of Blue Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-blue-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Blue_Plasma"
          },
          {
            "nome": "Ring of Green Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-green-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Green_Plasma"
          },
          {
            "nome": "Violet Gem",
            "qtd": null,
            "sprite": "img/itens/violet-gem.gif",
            "link": "https://www.tibiawiki.com.br/Violet_Gem"
          }
        ]
      },
      {
        "raridade": "semi-raro",
        "itens": [
          {
            "nome": "Abyss Hammer",
            "qtd": null,
            "sprite": "img/itens/abyss-hammer.gif",
            "link": "https://www.tibiawiki.com.br/Abyss_Hammer"
          },
          {
            "nome": "Chaos Mace",
            "qtd": null,
            "sprite": "img/itens/chaos-mace.gif",
            "link": "https://www.tibiawiki.com.br/Chaos_Mace"
          },
          {
            "nome": "Crunor Idol",
            "qtd": null,
            "sprite": "img/itens/crunor-idol.gif",
            "link": "https://www.tibiawiki.com.br/Crunor_Idol"
          },
          {
            "nome": "Malofur's Lunchbox",
            "qtd": null,
            "sprite": "img/itens/malofurs-lunchbox.gif",
            "link": "https://www.tibiawiki.com.br/Malofur%27s_Lunchbox"
          },
          {
            "nome": "Pomegranate",
            "qtd": null,
            "sprite": "img/itens/pomegranate.gif",
            "link": "https://www.tibiawiki.com.br/Pomegranate"
          },
          {
            "nome": "Ring of the Sky",
            "qtd": null,
            "sprite": "img/itens/ring-of-the-sky.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_the_Sky"
          },
          {
            "nome": "Skull Staff",
            "qtd": null,
            "sprite": "img/itens/skull-staff.gif",
            "link": "https://www.tibiawiki.com.br/Skull_Staff"
          }
        ]
      },
      {
        "raridade": "raro",
        "itens": [
          {
            "nome": "Arcane Staff",
            "qtd": null,
            "sprite": "img/itens/arcane-staff.gif",
            "link": "https://www.tibiawiki.com.br/Arcane_Staff"
          },
          {
            "nome": "Resizer",
            "qtd": null,
            "sprite": "img/itens/resizer.gif",
            "link": "https://www.tibiawiki.com.br/Resizer"
          },
          {
            "nome": "Shoulder Plate",
            "qtd": null,
            "sprite": "img/itens/shoulder-plate.gif",
            "link": "https://www.tibiawiki.com.br/Shoulder_Plate"
          },
          {
            "nome": "Soul Stone",
            "qtd": null,
            "sprite": "img/itens/soul-stone.gif",
            "link": "https://www.tibiawiki.com.br/Soul_Stone"
          },
          {
            "nome": "Turquoise Tendril Lantern",
            "qtd": null,
            "sprite": "img/itens/turquoise-tendril-lantern.gif",
            "link": "https://www.tibiawiki.com.br/Turquoise_Tendril_Lantern"
          }
        ]
      }
    ],
    "lootStatus": "ok",
    "mecanica": [
      "O boss mais perigoso da arena. O blocker leva o boss para o sudeste e trapa a leste do teleporte de saída.",
      "As [[Whirling Blades]] não morrem e batem até 1.700: shooters ficam fora do alcance delas (sobra espaço no sudoeste) e longe do boss.",
      "Ataque \"BOOM\": 5 etapas, a cada 2s, cada uma mais forte e maior; a última pode tirar 5.000 (o blocker pode passar de 6.000 somando tudo). Knight põe [[Stone Skin Amulet]] depois do 3º ou 4º BOOM.",
      "O BOOM faz todos perderem o target: confira se ainda está atacando. Abaixo do level 600, leve 2 druids para curar o blocker."
    ],
    "spritesMecanica": {
      "Whirling Blades": "img/criaturas/whirling-blades.gif",
      "Stone Skin Amulet": "img/criaturas/stone-skin-amulet.gif"
    },
    "fases": [
      {
        "nome": "Whirling Blades",
        "dica": "Imortais (até 1.700 de dano): fique fora do alcance.",
        "hp": "∞",
        "elementos": {
          "fisico": "0%",
          "terra": "0%",
          "fogo": "0%",
          "morte": "0%",
          "energia": "0%",
          "sagrado": "0%",
          "gelo": "0%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/whirling-blades.gif",
        "ataques": {
          "knight": [],
          "paladin": [],
          "sorcerer": [],
          "druid": [],
          "monk": []
        },
        "peso": 0,
        "elemento": {
          "sorcerer": [],
          "druid": [],
          "paladin": [],
          "knight": [],
          "monk": []
        }
      }
    ],
    "link": "https://www.tibiawiki.com.br/Malofur_Mangrinder",
    "pendencias": []
  },
  {
    "nome": "Maxxenius",
    "local": "Dream Scar (abaixo de Greenshore)",
    "grupo": "Dream Courts",
    "subgrupo": "Diários",
    "ordem": 3,
    "quest": "The Dream Courts Quest",
    "level": {
      "quest": "The Dream Courts Quest",
      "link": "https://www.tibiawiki.com.br/The_Dream_Courts_Quest",
      "minimo": "250",
      "recomendado": "350+"
    },
    "hp": "320000",
    "xp": "55000",
    "tipo": "nemesis",
    "sprite": "img/bosses/maxxenius.gif",
    "elementos": {
      "fisico": "100%",
      "terra": "100%",
      "fogo": "100%",
      "morte": "100%",
      "energia": "100%",
      "sagrado": "100%",
      "gelo": "100%",
      "cura": "100%"
    },
    "imunidades": [
      "Invisibility",
      "Paralysis"
    ],
    "podeSerPuxado": false,
    "empurraObjetos": true,
    "passaPor": [
      "Fire",
      "Energy",
      "Poison"
    ],
    "rotacaoAjustes": {
      "semEnergia": true,
      "nota": "Energia cura o boss (a wiki BR mostra energia neutra, mas a wiki em inglês e a mecânica confirmam a cura)."
    },
    "ataque": {
      "sorcerer": {
        "elementos": [
          "fogo"
        ],
        "alternativas": []
      },
      "druid": {
        "elementos": [
          "gelo"
        ],
        "alternativas": [
          "terra"
        ]
      },
      "paladin": {
        "elementos": [
          "sagrado"
        ],
        "alternativas": [
          "fisico"
        ]
      },
      "knight": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      },
      "monk": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      }
    },
    "defesa": {
      "elementos": [
        "energia"
      ],
      "melee": true,
      "nota": "Energy Beam/Wave e a explosão do jogador transformado são de energia."
    },
    "rotacao": {
      "knight": {
        "passos": [
          {
            "magia": "Annihilation",
            "palavras": "exori gran ico",
            "obs": "sempre que sair da recarga (30s)",
            "icone": "img/magias/annihilation.gif"
          },
          {
            "magia": "Fierce Berserk",
            "palavras": "exori gran",
            "obs": "a cada 6s",
            "icone": "img/magias/fierce-berserk.gif"
          },
          {
            "magia": "Front Sweep",
            "palavras": "exori min",
            "obs": "a cada 6s, alternando com o Fierce Berserk",
            "icone": "img/magias/front-sweep.gif"
          },
          {
            "magia": "Brutal Strike",
            "palavras": "exori ico",
            "obs": "nos intervalos (ou Shield Bash, exori ico scu, se usar escudo)",
            "icone": "img/magias/brutal-strike.gif"
          }
        ],
        "nota": "Físico 100%. Stance: Blood Rage para dano; Protector se for o blocker."
      },
      "paladin": {
        "passos": [
          {
            "magia": "Divine Grenade",
            "palavras": "exevo tempo mas san",
            "obs": "a cada 26s (level 300+)",
            "icone": "img/magias/divine-grenade.gif"
          },
          {
            "magia": "Divine Barrage",
            "palavras": "exori dir san",
            "obs": "a cada 4s",
            "icone": "img/magias/divine-barrage.gif"
          },
          {
            "magia": "Ethereal Barrage",
            "palavras": "exori dir moe",
            "obs": "a cada 4s, alternando com a Divine Barrage",
            "icone": "img/magias/ethereal-barrage.gif"
          },
          {
            "magia": "Divine Missile",
            "palavras": "exori san",
            "obs": "nos intervalos",
            "icone": "img/magias/divine-missile.gif"
          }
        ],
        "nota": "Holy 100%, físico 100%. Ataque básico com arma o tempo todo. Stance: Sharpshooter."
      },
      "sorcerer": {
        "passos": [
          {
            "magia": "Ultimate Flame Strike",
            "palavras": "exori max flam",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-flame-strike.gif"
          },
          {
            "magia": "Great Death Beam",
            "palavras": "exevo max mort",
            "obs": "a cada 6s, com o boss na reta (beam)",
            "icone": "img/magias/great-death-beam.gif"
          },
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "a cada 2s, sempre que nada mais forte estiver pronto",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Strong Flame Strike",
            "palavras": "exori gran flam",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/strong-flame-strike.gif"
          },
          {
            "magia": "Death Echo",
            "palavras": "exevo mort ora",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/death-echo.gif"
          },
          {
            "magia": "Great Fire Wave",
            "palavras": "exevo gran flam hur",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/great-fire-wave.gif"
          }
        ],
        "nota": "Elemento: fogo (100%). Stance: Master of Flames."
      },
      "druid": {
        "passos": [
          {
            "magia": "Ultimate Ice Strike",
            "palavras": "exori max frigo",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-ice-strike.gif"
          },
          {
            "magia": "Strong Ice Wave",
            "palavras": "exevo gran frigo hur",
            "obs": "a cada 4s, com o boss na reta (wave/beam)",
            "icone": "img/magias/strong-ice-wave.gif"
          },
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "a cada 2s, sempre que nada mais forte estiver pronto",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Strong Ice Strike",
            "palavras": "exori gran frigo",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/strong-ice-strike.gif"
          },
          {
            "magia": "Forked Glacier",
            "palavras": "exevo fur frigo",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/forked-glacier.gif"
          }
        ],
        "nota": "Elemento: gelo (100%). Stance: Elemental Synthesis."
      },
      "monk": {
        "passos": [
          {
            "magia": "Thousand Fist Blows",
            "palavras": "exori mas amp pug",
            "obs": "builder, a cada 8s",
            "icone": "img/magias/thousand-fist-blows.gif"
          },
          {
            "magia": "Mystic Repulse",
            "palavras": "exori amp pug",
            "obs": "builder, a cada 8s (alcance 7)",
            "icone": "img/magias/mystic-repulse.gif"
          },
          {
            "magia": "Double Jab",
            "palavras": "exori pug",
            "obs": "builder, a cada 4s, até juntar 5 de Harmony",
            "icone": "img/magias/double-jab.gif"
          },
          {
            "magia": "Devastating Knockout",
            "palavras": "exori gran nia",
            "obs": "spender com 5 de Harmony (a cada 8s, alcance 7)",
            "icone": "img/magias/devastating-knockout.gif"
          },
          {
            "magia": "Forceful Uppercut",
            "palavras": "exori gran pug",
            "obs": "sempre que sair da recarga (60s)",
            "icone": "img/magias/forceful-uppercut.gif"
          }
        ],
        "nota": "Físico 100%. Gaste a Harmony só com 5 pontos (+112% de dano). Abaixo do level 125 use Greater Tiger Clash (exori nia) como spender."
      },
      "nota": "Energia cura o boss (a wiki BR mostra energia neutra, mas a wiki em inglês e a mecânica confirmam a cura)."
    },
    "tokens": [
      {
        "nome": "Gold Token",
        "qtd": "0-3",
        "raridade": "incomum",
        "sprite": "img/itens/gold-token.gif"
      },
      {
        "nome": "Silver Token",
        "qtd": "0-5",
        "raridade": "incomum",
        "sprite": "img/itens/silver-token.gif"
      }
    ],
    "lootTiers": [
      {
        "raridade": "comum",
        "itens": [
          {
            "nome": "Platinum Coin",
            "qtd": "0-5",
            "sprite": "img/itens/platinum-coin.gif",
            "link": "https://www.tibiawiki.com.br/Platinum_Coin"
          },
          {
            "nome": "Crystal Coin",
            "qtd": "0-2",
            "sprite": "img/itens/crystal-coin.gif",
            "link": "https://www.tibiawiki.com.br/Crystal_Coin"
          },
          {
            "nome": "Supreme Health Potion",
            "qtd": "0-20",
            "sprite": "img/itens/supreme-health-potion.gif",
            "link": "https://www.tibiawiki.com.br/Supreme_Health_Potion"
          },
          {
            "nome": "Ultimate Mana Potion",
            "qtd": "0-20",
            "sprite": "img/itens/ultimate-mana-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Mana_Potion"
          },
          {
            "nome": "Ultimate Spirit Potion",
            "qtd": "0-20",
            "sprite": "img/itens/ultimate-spirit-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Spirit_Potion"
          }
        ]
      },
      {
        "raridade": "incomum",
        "itens": [
          {
            "nome": "Berserk Potion",
            "qtd": "0-10",
            "sprite": "img/itens/berserk-potion.gif",
            "link": "https://www.tibiawiki.com.br/Berserk_Potion"
          },
          {
            "nome": "Bullseye Potion",
            "qtd": "0-10",
            "sprite": "img/itens/bullseye-potion.gif",
            "link": "https://www.tibiawiki.com.br/Bullseye_Potion"
          },
          {
            "nome": "Transcendence Potion",
            "qtd": "0-18",
            "sprite": "img/itens/transcendence-potion.gif",
            "link": "https://www.tibiawiki.com.br/Transcendence_Potion"
          },
          {
            "nome": "Mastermind Potion",
            "qtd": "0-10",
            "sprite": "img/itens/mastermind-potion.gif",
            "link": "https://www.tibiawiki.com.br/Mastermind_Potion"
          },
          {
            "nome": "Red Gem",
            "qtd": "0-2",
            "sprite": "img/itens/red-gem.gif",
            "link": "https://www.tibiawiki.com.br/Red_Gem"
          },
          {
            "nome": "Royal Star",
            "qtd": "0-100",
            "sprite": "img/itens/royal-star.gif",
            "link": "https://www.tibiawiki.com.br/Royal_Star"
          },
          {
            "nome": "Yellow Gem",
            "qtd": "0-2",
            "sprite": "img/itens/yellow-gem.gif",
            "link": "https://www.tibiawiki.com.br/Yellow_Gem"
          },
          {
            "nome": "Blue Gem",
            "qtd": null,
            "sprite": "img/itens/blue-gem.gif",
            "link": "https://www.tibiawiki.com.br/Blue_Gem"
          },
          {
            "nome": "Collar of Blue Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-blue-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Blue_Plasma"
          },
          {
            "nome": "Collar of Green Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-green-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Green_Plasma"
          },
          {
            "nome": "Collar of Red Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-red-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Red_Plasma"
          },
          {
            "nome": "Energy Bar",
            "qtd": null,
            "sprite": "img/itens/energy-bar.gif",
            "link": "https://www.tibiawiki.com.br/Energy_Bar"
          },
          {
            "nome": "Giant Shimmering Pearl",
            "qtd": null,
            "sprite": "img/itens/giant-shimmering-pearl.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Shimmering_Pearl"
          },
          {
            "nome": "Green Gem",
            "qtd": null,
            "sprite": "img/itens/green-gem.gif",
            "link": "https://www.tibiawiki.com.br/Green_Gem"
          },
          {
            "nome": "Huge Chunk of Crude Iron",
            "qtd": null,
            "sprite": "img/itens/huge-chunk-of-crude-iron.gif",
            "link": "https://www.tibiawiki.com.br/Huge_Chunk_of_Crude_Iron"
          },
          {
            "nome": "Mysterious Remains",
            "qtd": null,
            "sprite": "img/itens/mysterious-remains.gif",
            "link": "https://www.tibiawiki.com.br/Mysterious_Remains"
          },
          {
            "nome": "Piggy Bank",
            "qtd": null,
            "sprite": "img/itens/piggy-bank.gif",
            "link": "https://www.tibiawiki.com.br/Piggy_Bank"
          },
          {
            "nome": "Ring of Blue Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-blue-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Blue_Plasma"
          },
          {
            "nome": "Ring of Green Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-green-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Green_Plasma"
          },
          {
            "nome": "Ring of Red Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-red-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Red_Plasma"
          },
          {
            "nome": "Violet Gem",
            "qtd": null,
            "sprite": "img/itens/violet-gem.gif",
            "link": "https://www.tibiawiki.com.br/Violet_Gem"
          }
        ]
      },
      {
        "raridade": "semi-raro",
        "itens": [
          {
            "nome": "Abyss Hammer",
            "qtd": null,
            "sprite": "img/itens/abyss-hammer.gif",
            "link": "https://www.tibiawiki.com.br/Abyss_Hammer"
          },
          {
            "nome": "Giant Ruby",
            "qtd": null,
            "sprite": "img/itens/giant-ruby.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Ruby"
          },
          {
            "nome": "Ornate Locket",
            "qtd": null,
            "sprite": "img/itens/ornate-locket.gif",
            "link": "https://www.tibiawiki.com.br/Ornate_Locket"
          },
          {
            "nome": "Pomegranate",
            "qtd": null,
            "sprite": "img/itens/pomegranate.gif",
            "link": "https://www.tibiawiki.com.br/Pomegranate"
          },
          {
            "nome": "Ring of the Sky",
            "qtd": null,
            "sprite": "img/itens/ring-of-the-sky.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_the_Sky"
          },
          {
            "nome": "Skull Staff",
            "qtd": null,
            "sprite": "img/itens/skull-staff.gif",
            "link": "https://www.tibiawiki.com.br/Skull_Staff"
          }
        ]
      },
      {
        "raridade": "raro",
        "itens": [
          {
            "nome": "Brain in a Jar",
            "qtd": null,
            "sprite": "img/itens/brain-in-a-jar.gif",
            "link": "https://www.tibiawiki.com.br/Brain_in_a_Jar"
          },
          {
            "nome": "Energized Limb",
            "qtd": null,
            "sprite": "img/itens/energized-limb.gif",
            "link": "https://www.tibiawiki.com.br/Energized_Limb"
          },
          {
            "nome": "Maxxenius Head",
            "qtd": null,
            "sprite": "img/itens/maxxenius-head.gif",
            "link": "https://www.tibiawiki.com.br/Maxxenius_Head"
          },
          {
            "nome": "Purple Tendril Lantern",
            "qtd": null,
            "sprite": "img/itens/purple-tendril-lantern.gif",
            "link": "https://www.tibiawiki.com.br/Purple_Tendril_Lantern"
          }
        ]
      }
    ],
    "lootStatus": "ok",
    "mecanica": [
      "O boss se CURA com energia: ninguém usa dano de energia. Os 3 [[Generator|Generators]] e as bordas da sala soltam energia o tempo todo: trape o boss longe deles (o noroeste é o ideal).",
      "Ele transforma o alvo em [[Massive Energy Elemental]]: ~10s depois o jogador explode (1.000-1.500 em 2 SQMs). O transformado corre para longe do boss.",
      "Com 2 knights: o outro usa exeta res para puxar o boss enquanto o transformado se afasta. Sem 2º knight, um paladin 350+ ou um mago com Magic Shield faz isso."
    ],
    "spritesMecanica": {
      "Generator": "img/criaturas/generator.gif",
      "Massive Energy Elemental": "img/criaturas/massive-energy-elemental.gif"
    },
    "fases": [
      {
        "nome": "Generator",
        "dica": "Explosões de energia curam o boss: deixe-o longe. Imune a energia.",
        "hp": "6500",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "100%",
          "energia": "0%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/generator.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Flame Strike",
              "palavras": "exori max flam",
              "icone": "img/magias/ultimate-flame-strike.gif"
            },
            {
              "magia": "Great Death Beam",
              "palavras": "exevo max mort",
              "icone": "img/magias/great-death-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0,
        "elemento": {
          "sorcerer": [
            "fogo",
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      }
    ],
    "link": "https://www.tibiawiki.com.br/Maxxenius",
    "pendencias": []
  },
  {
    "nome": "Alptramun",
    "local": "Dream Scar (abaixo de Greenshore)",
    "grupo": "Dream Courts",
    "subgrupo": "Diários",
    "ordem": 4,
    "quest": "The Dream Courts Quest",
    "level": {
      "quest": "The Dream Courts Quest",
      "link": "https://www.tibiawiki.com.br/The_Dream_Courts_Quest",
      "minimo": "250",
      "recomendado": "350+"
    },
    "hp": "320000",
    "xp": "55000",
    "tipo": "nemesis",
    "sprite": "img/bosses/alptramun.gif",
    "elementos": {
      "fisico": "100%",
      "terra": "100%",
      "fogo": "100%",
      "morte": "-100%",
      "energia": "97%",
      "sagrado": "100%",
      "gelo": "100%",
      "cura": "100%"
    },
    "imunidades": [
      "Invisibility",
      "Paralysis"
    ],
    "podeSerPuxado": false,
    "empurraObjetos": true,
    "passaPor": [
      "Fire",
      "Energy",
      "Poison"
    ],
    "rotacaoAjustes": {
      "semMorte": true
    },
    "ataque": {
      "sorcerer": {
        "elementos": [
          "energia"
        ],
        "alternativas": []
      },
      "druid": {
        "elementos": [
          "gelo"
        ],
        "alternativas": []
      },
      "paladin": {
        "elementos": [
          "sagrado"
        ],
        "alternativas": [
          "fisico"
        ]
      },
      "knight": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      },
      "monk": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      }
    },
    "defesa": {
      "elementos": [
        "morte"
      ],
      "melee": true,
      "nota": "Lifesteal e summons; a wiki registra pouco do dano. Shooters espalhados."
    },
    "rotacao": {
      "knight": {
        "passos": [
          {
            "magia": "Annihilation",
            "palavras": "exori gran ico",
            "obs": "sempre que sair da recarga (30s)",
            "icone": "img/magias/annihilation.gif"
          },
          {
            "magia": "Fierce Berserk",
            "palavras": "exori gran",
            "obs": "a cada 6s",
            "icone": "img/magias/fierce-berserk.gif"
          },
          {
            "magia": "Front Sweep",
            "palavras": "exori min",
            "obs": "a cada 6s, alternando com o Fierce Berserk",
            "icone": "img/magias/front-sweep.gif"
          },
          {
            "magia": "Brutal Strike",
            "palavras": "exori ico",
            "obs": "nos intervalos (ou Shield Bash, exori ico scu, se usar escudo)",
            "icone": "img/magias/brutal-strike.gif"
          }
        ],
        "nota": "Físico 100%. Stance: Blood Rage para dano; Protector se for o blocker."
      },
      "paladin": {
        "passos": [
          {
            "magia": "Divine Grenade",
            "palavras": "exevo tempo mas san",
            "obs": "a cada 26s (level 300+)",
            "icone": "img/magias/divine-grenade.gif"
          },
          {
            "magia": "Divine Barrage",
            "palavras": "exori dir san",
            "obs": "a cada 4s",
            "icone": "img/magias/divine-barrage.gif"
          },
          {
            "magia": "Ethereal Barrage",
            "palavras": "exori dir moe",
            "obs": "a cada 4s, alternando com a Divine Barrage",
            "icone": "img/magias/ethereal-barrage.gif"
          },
          {
            "magia": "Divine Missile",
            "palavras": "exori san",
            "obs": "nos intervalos",
            "icone": "img/magias/divine-missile.gif"
          }
        ],
        "nota": "Holy 100%, físico 100%. Ataque básico com arma o tempo todo. Stance: Sharpshooter."
      },
      "sorcerer": {
        "passos": [
          {
            "magia": "Ultimate Energy Strike",
            "palavras": "exori max vis",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-energy-strike.gif"
          },
          {
            "magia": "Great Energy Beam",
            "palavras": "exevo gran vis lux",
            "obs": "a cada 6s, com o boss na reta (wave/beam)",
            "icone": "img/magias/great-energy-beam.gif"
          },
          {
            "magia": "Energy Wave",
            "palavras": "exevo vis hur",
            "obs": "a cada 8s, com o boss na reta (wave/beam)",
            "icone": "img/magias/energy-wave.gif"
          },
          {
            "magia": "Strong Energy Strike",
            "palavras": "exori gran vis",
            "obs": "a cada 8s",
            "icone": "img/magias/strong-energy-strike.gif"
          },
          {
            "magia": "Lightning",
            "palavras": "exori amp vis",
            "obs": "a cada 8s; pula para mais 2 alvos",
            "icone": "img/magias/lightning.gif"
          },
          {
            "magia": "Energy Strike",
            "palavras": "exori vis",
            "obs": "nos intervalos; sem SD neste boss",
            "icone": "img/magias/energy-strike.gif"
          }
        ],
        "nota": "Elemento: energia (97%); escolhido pelas waves/beams mais fortes. Stance: Master of Thunder. Nunca use death (SD): o boss se cura."
      },
      "druid": {
        "passos": [
          {
            "magia": "Ultimate Ice Strike",
            "palavras": "exori max frigo",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-ice-strike.gif"
          },
          {
            "magia": "Strong Ice Wave",
            "palavras": "exevo gran frigo hur",
            "obs": "a cada 4s, com o boss na reta (wave/beam)",
            "icone": "img/magias/strong-ice-wave.gif"
          },
          {
            "magia": "Strong Ice Strike",
            "palavras": "exori gran frigo",
            "obs": "a cada 8s",
            "icone": "img/magias/strong-ice-strike.gif"
          },
          {
            "magia": "Forked Glacier",
            "palavras": "exevo fur frigo",
            "obs": "a cada 6s; pula para até 6 alvos",
            "icone": "img/magias/forked-glacier.gif"
          },
          {
            "magia": "Ice Strike",
            "palavras": "exori frigo",
            "obs": "nos intervalos; sem SD neste boss",
            "icone": "img/magias/ice-strike.gif"
          }
        ],
        "nota": "Elemento: gelo (100%). Stance: Elemental Synthesis. Nunca use death (SD): o boss se cura."
      },
      "monk": {
        "passos": [
          {
            "magia": "Thousand Fist Blows",
            "palavras": "exori mas amp pug",
            "obs": "builder, a cada 8s",
            "icone": "img/magias/thousand-fist-blows.gif"
          },
          {
            "magia": "Mystic Repulse",
            "palavras": "exori amp pug",
            "obs": "builder, a cada 8s (alcance 7)",
            "icone": "img/magias/mystic-repulse.gif"
          },
          {
            "magia": "Double Jab",
            "palavras": "exori pug",
            "obs": "builder, a cada 4s, até juntar 5 de Harmony",
            "icone": "img/magias/double-jab.gif"
          },
          {
            "magia": "Devastating Knockout",
            "palavras": "exori gran nia",
            "obs": "spender com 5 de Harmony (a cada 8s, alcance 7)",
            "icone": "img/magias/devastating-knockout.gif"
          },
          {
            "magia": "Forceful Uppercut",
            "palavras": "exori gran pug",
            "obs": "sempre que sair da recarga (60s)",
            "icone": "img/magias/forceful-uppercut.gif"
          }
        ],
        "nota": "Físico 100%. Gaste a Harmony só com 5 pontos (+112% de dano). Abaixo do level 125 use Greater Tiger Clash (exori nia) como spender."
      }
    },
    "tokens": [
      {
        "nome": "Gold Token",
        "qtd": "0-2",
        "raridade": "raro",
        "sprite": "img/itens/gold-token.gif"
      },
      {
        "nome": "Silver Token",
        "qtd": "0-5",
        "raridade": "raro",
        "sprite": "img/itens/silver-token.gif"
      }
    ],
    "lootTiers": [
      {
        "raridade": "comum",
        "itens": [
          {
            "nome": "Platinum Coin",
            "qtd": "0-5",
            "sprite": "img/itens/platinum-coin.gif",
            "link": "https://www.tibiawiki.com.br/Platinum_Coin"
          },
          {
            "nome": "Crystal Coin",
            "qtd": "0-3",
            "sprite": "img/itens/crystal-coin.gif",
            "link": "https://www.tibiawiki.com.br/Crystal_Coin"
          },
          {
            "nome": "Supreme Health Potion",
            "qtd": "0-20",
            "sprite": "img/itens/supreme-health-potion.gif",
            "link": "https://www.tibiawiki.com.br/Supreme_Health_Potion"
          },
          {
            "nome": "Ultimate Mana Potion",
            "qtd": "0-14",
            "sprite": "img/itens/ultimate-mana-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Mana_Potion"
          },
          {
            "nome": "Ultimate Spirit Potion",
            "qtd": "0-20",
            "sprite": "img/itens/ultimate-spirit-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Spirit_Potion"
          },
          {
            "nome": "Green Gem",
            "qtd": "0-2",
            "sprite": "img/itens/green-gem.gif",
            "link": "https://www.tibiawiki.com.br/Green_Gem"
          },
          {
            "nome": "Red Gem",
            "qtd": "0-2",
            "sprite": "img/itens/red-gem.gif",
            "link": "https://www.tibiawiki.com.br/Red_Gem"
          },
          {
            "nome": "Royal Star",
            "qtd": "0-100",
            "sprite": "img/itens/royal-star.gif",
            "link": "https://www.tibiawiki.com.br/Royal_Star"
          },
          {
            "nome": "Blue Gem",
            "qtd": null,
            "sprite": "img/itens/blue-gem.gif",
            "link": "https://www.tibiawiki.com.br/Blue_Gem"
          },
          {
            "nome": "Energy Bar",
            "qtd": null,
            "sprite": "img/itens/energy-bar.gif",
            "link": "https://www.tibiawiki.com.br/Energy_Bar"
          },
          {
            "nome": "Giant Shimmering Pearl",
            "qtd": null,
            "sprite": "img/itens/giant-shimmering-pearl.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Shimmering_Pearl"
          },
          {
            "nome": "Yellow Gem",
            "qtd": null,
            "sprite": "img/itens/yellow-gem.gif",
            "link": "https://www.tibiawiki.com.br/Yellow_Gem"
          }
        ]
      },
      {
        "raridade": "semi-raro",
        "itens": [
          {
            "nome": "Berserk Potion",
            "qtd": "0-10",
            "sprite": "img/itens/berserk-potion.gif",
            "link": "https://www.tibiawiki.com.br/Berserk_Potion"
          },
          {
            "nome": "Bullseye Potion",
            "qtd": "0-10",
            "sprite": "img/itens/bullseye-potion.gif",
            "link": "https://www.tibiawiki.com.br/Bullseye_Potion"
          },
          {
            "nome": "Mastermind Potion",
            "qtd": "0-10",
            "sprite": "img/itens/mastermind-potion.gif",
            "link": "https://www.tibiawiki.com.br/Mastermind_Potion"
          },
          {
            "nome": "Chaos Mace",
            "qtd": null,
            "sprite": "img/itens/chaos-mace.gif",
            "link": "https://www.tibiawiki.com.br/Chaos_Mace"
          },
          {
            "nome": "Collar of Blue Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-blue-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Blue_Plasma"
          },
          {
            "nome": "Collar of Green Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-green-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Green_Plasma"
          },
          {
            "nome": "Collar of Red Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-red-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Red_Plasma"
          },
          {
            "nome": "Gold Ingot",
            "qtd": null,
            "sprite": "img/itens/gold-ingot.gif",
            "link": "https://www.tibiawiki.com.br/Gold_Ingot"
          },
          {
            "nome": "Huge Chunk of Crude Iron",
            "qtd": null,
            "sprite": "img/itens/huge-chunk-of-crude-iron.gif",
            "link": "https://www.tibiawiki.com.br/Huge_Chunk_of_Crude_Iron"
          },
          {
            "nome": "Magic Sulphur",
            "qtd": null,
            "sprite": "img/itens/magic-sulphur.gif",
            "link": "https://www.tibiawiki.com.br/Magic_Sulphur"
          },
          {
            "nome": "Mysterious Remains",
            "qtd": null,
            "sprite": "img/itens/mysterious-remains.gif",
            "link": "https://www.tibiawiki.com.br/Mysterious_Remains"
          },
          {
            "nome": "Piggy Bank",
            "qtd": null,
            "sprite": "img/itens/piggy-bank.gif",
            "link": "https://www.tibiawiki.com.br/Piggy_Bank"
          },
          {
            "nome": "Ring of Blue Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-blue-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Blue_Plasma"
          },
          {
            "nome": "Ring of Green Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-green-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Green_Plasma"
          },
          {
            "nome": "Ring of Red Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-red-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Red_Plasma"
          },
          {
            "nome": "Skull Staff",
            "qtd": null,
            "sprite": "img/itens/skull-staff.gif",
            "link": "https://www.tibiawiki.com.br/Skull_Staff"
          }
        ]
      },
      {
        "raridade": "raro",
        "itens": [
          {
            "nome": "Crunor Idol",
            "qtd": null,
            "sprite": "img/itens/crunor-idol.gif",
            "link": "https://www.tibiawiki.com.br/Crunor_Idol"
          },
          {
            "nome": "Giant Ruby",
            "qtd": null,
            "sprite": "img/itens/giant-ruby.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Ruby"
          },
          {
            "nome": "Pomegranate",
            "qtd": null,
            "sprite": "img/itens/pomegranate.gif",
            "link": "https://www.tibiawiki.com.br/Pomegranate"
          }
        ]
      },
      {
        "raridade": "muito raro",
        "itens": [
          {
            "nome": "Alptramun's Toothbrush",
            "qtd": null,
            "sprite": "img/itens/alptramuns-toothbrush.gif",
            "link": "https://www.tibiawiki.com.br/Alptramun%27s_Toothbrush"
          },
          {
            "nome": "Dream Shroud",
            "qtd": null,
            "sprite": "img/itens/dream-shroud.gif",
            "link": "https://www.tibiawiki.com.br/Dream_Shroud"
          },
          {
            "nome": "Pair of Dreamwalkers",
            "qtd": null,
            "sprite": "img/itens/pair-of-dreamwalkers.gif",
            "link": "https://www.tibiawiki.com.br/Pair_of_Dreamwalkers"
          },
          {
            "nome": "Soul Stone",
            "qtd": null,
            "sprite": "img/itens/soul-stone.gif",
            "link": "https://www.tibiawiki.com.br/Soul_Stone"
          },
          {
            "nome": "Purple Tendril Lantern",
            "qtd": null,
            "sprite": "img/itens/purple-tendril-lantern.gif",
            "link": "https://www.tibiawiki.com.br/Purple_Tendril_Lantern"
          }
        ]
      }
    ],
    "lootStatus": "ok",
    "mecanica": [
      "Provavelmente o boss mais forte da arena. Começa com vários summons; cada um morto vira um mais forte, e alguns curam o boss: [[Unpleasant Dream]], [[Horrible Dream]], [[Nightmarish Dream]] e [[Mind-wrecking Dream]] (o último tipo).",
      "Muita magia de área para matar os summons sem parar. Eles nascem perto do centro e miram o mais próximo: o blocker fica nessa área. O boss troca muito de alvo: use exeta res sempre.",
      "NÃO use SD nem nenhum dano de death: cura o boss.",
      "Fica invisível com frequência: jogue [[Fire Bomb Rune|Fire Bomb]] no chão para revelar. Shooters espalhados e afastados entre si, por causa do lifesteal dele."
    ],
    "spritesMecanica": {
      "Unpleasant Dream": "img/criaturas/unpleasant-dream.gif",
      "Horrible Dream": "img/criaturas/horrible-dream.gif",
      "Nightmarish Dream": "img/criaturas/nightmarish-dream.gif",
      "Mind-wrecking Dream": "img/criaturas/mind-wrecking-dream.gif",
      "Fire Bomb Rune": "img/criaturas/fire-bomb-rune.gif"
    },
    "fases": [
      {
        "nome": "Unpleasant Dream",
        "dica": "Imune a terra.",
        "elementosAjuste": {
          "terra": "0%",
          "energia": "90%"
        },
        "hp": "7600",
        "elementos": {
          "fisico": "100%",
          "terra": "0%",
          "fogo": "100%",
          "morte": "100%",
          "energia": "90%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/unpleasant-dream.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Death Beam",
              "palavras": "exevo max mort",
              "icone": "img/magias/great-death-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "fogo",
            "morte"
          ],
          "druid": [
            "gelo",
            "morte"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Horrible Dream",
        "dica": "Fraca resistência a terra (20%).",
        "elementosAjuste": {
          "terra": "20%",
          "fogo": "70%",
          "energia": "90%"
        },
        "hp": "3800",
        "elementos": {
          "fisico": "100%",
          "terra": "20%",
          "fogo": "70%",
          "morte": "100%",
          "energia": "90%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/horrible-dream.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Death Beam",
              "palavras": "exevo max mort",
              "icone": "img/magias/great-death-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "morte"
          ],
          "druid": [
            "gelo",
            "morte"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Nightmarish Dream",
        "dica": "Fraco a energia (120%).",
        "elementosAjuste": {
          "energia": "120%"
        },
        "hp": "3800",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "100%",
          "energia": "120%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/nightmarish-dream.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "energia"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Mind-wrecking Dream",
        "dica": "Último tipo de summon (não evolui).",
        "hp": "3800",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/mind-wrecking-dream.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo",
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      }
    ],
    "link": "https://www.tibiawiki.com.br/Alptramun",
    "pendencias": []
  },
  {
    "nome": "Izcandar the Banished",
    "local": "Dream Scar (abaixo de Greenshore)",
    "grupo": "Dream Courts",
    "subgrupo": "Diários",
    "ordem": 5,
    "quest": "The Dream Courts Quest",
    "level": {
      "quest": "The Dream Courts Quest",
      "link": "https://www.tibiawiki.com.br/The_Dream_Courts_Quest",
      "minimo": "250",
      "recomendado": "350+"
    },
    "hp": "?",
    "xp": "?",
    "tipo": "nemesis",
    "sprite": "img/bosses/izcandar-the-banished.gif",
    "elementos": {
      "fisico": "100%",
      "terra": "100%",
      "fogo": "0%",
      "morte": "100%",
      "energia": "100%",
      "sagrado": "100%",
      "gelo": "0%",
      "cura": "100%"
    },
    "imunidades": [
      "Invisibility",
      "Paralysis"
    ],
    "podeSerPuxado": false,
    "empurraObjetos": true,
    "passaPor": [
      "Fire",
      "Energy",
      "Poison"
    ],
    "rotacaoAjustes": {
      "nota": "Imune a fogo e gelo; os summons se curam com fogo/gelo. Use terra, energia, holy ou físico."
    },
    "ataque": {
      "sorcerer": {
        "elementos": [
          "energia"
        ],
        "alternativas": []
      },
      "druid": {
        "elementos": [
          "terra"
        ],
        "alternativas": []
      },
      "paladin": {
        "elementos": [
          "sagrado"
        ],
        "alternativas": [
          "fisico"
        ]
      },
      "knight": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      },
      "monk": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      }
    },
    "defesa": {
      "elementos": [
        "fogo",
        "gelo"
      ],
      "melee": true,
      "nota": "Fogo no lado do verão, gelo no lado do inverno (e os summons de cada lado)."
    },
    "rotacao": {
      "knight": {
        "passos": [
          {
            "magia": "Annihilation",
            "palavras": "exori gran ico",
            "obs": "sempre que sair da recarga (30s)",
            "icone": "img/magias/annihilation.gif"
          },
          {
            "magia": "Fierce Berserk",
            "palavras": "exori gran",
            "obs": "a cada 6s",
            "icone": "img/magias/fierce-berserk.gif"
          },
          {
            "magia": "Front Sweep",
            "palavras": "exori min",
            "obs": "a cada 6s, alternando com o Fierce Berserk",
            "icone": "img/magias/front-sweep.gif"
          },
          {
            "magia": "Brutal Strike",
            "palavras": "exori ico",
            "obs": "nos intervalos (ou Shield Bash, exori ico scu, se usar escudo)",
            "icone": "img/magias/brutal-strike.gif"
          }
        ],
        "nota": "Físico 100%. Stance: Blood Rage para dano; Protector se for o blocker."
      },
      "paladin": {
        "passos": [
          {
            "magia": "Divine Grenade",
            "palavras": "exevo tempo mas san",
            "obs": "a cada 26s (level 300+)",
            "icone": "img/magias/divine-grenade.gif"
          },
          {
            "magia": "Divine Barrage",
            "palavras": "exori dir san",
            "obs": "a cada 4s",
            "icone": "img/magias/divine-barrage.gif"
          },
          {
            "magia": "Ethereal Barrage",
            "palavras": "exori dir moe",
            "obs": "a cada 4s, alternando com a Divine Barrage",
            "icone": "img/magias/ethereal-barrage.gif"
          },
          {
            "magia": "Divine Missile",
            "palavras": "exori san",
            "obs": "nos intervalos",
            "icone": "img/magias/divine-missile.gif"
          }
        ],
        "nota": "Holy 100%, físico 100%. Ataque básico com arma o tempo todo. Stance: Sharpshooter."
      },
      "sorcerer": {
        "passos": [
          {
            "magia": "Ultimate Energy Strike",
            "palavras": "exori max vis",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-energy-strike.gif"
          },
          {
            "magia": "Great Energy Beam",
            "palavras": "exevo gran vis lux",
            "obs": "a cada 6s, com o boss na reta (wave/beam)",
            "icone": "img/magias/great-energy-beam.gif"
          },
          {
            "magia": "Great Death Beam",
            "palavras": "exevo max mort",
            "obs": "a cada 6s, com o boss na reta (beam)",
            "icone": "img/magias/great-death-beam.gif"
          },
          {
            "magia": "Energy Wave",
            "palavras": "exevo vis hur",
            "obs": "a cada 8s, com o boss na reta (wave/beam)",
            "icone": "img/magias/energy-wave.gif"
          },
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "a cada 2s, sempre que nada mais forte estiver pronto",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Strong Energy Strike",
            "palavras": "exori gran vis",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/strong-energy-strike.gif"
          },
          {
            "magia": "Death Echo",
            "palavras": "exevo mort ora",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/death-echo.gif"
          },
          {
            "magia": "Lightning",
            "palavras": "exori amp vis",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/lightning.gif"
          }
        ],
        "nota": "Elemento: energia (100%). Stance: Master of Thunder."
      },
      "druid": {
        "passos": [
          {
            "magia": "Ultimate Terra Strike",
            "palavras": "exori max tera",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-terra-strike.gif"
          },
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "a cada 2s, sempre que nada mais forte estiver pronto",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Terra Wave",
            "palavras": "exevo tera hur",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/terra-wave.gif"
          },
          {
            "magia": "Strong Terra Strike",
            "palavras": "exori gran tera",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/strong-terra-strike.gif"
          },
          {
            "magia": "Forked Thorns",
            "palavras": "exevo fur tera",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/forked-thorns.gif"
          }
        ],
        "nota": "Elemento: terra (100%). Stance: Elemental Synthesis."
      },
      "monk": {
        "passos": [
          {
            "magia": "Thousand Fist Blows",
            "palavras": "exori mas amp pug",
            "obs": "builder, a cada 8s",
            "icone": "img/magias/thousand-fist-blows.gif"
          },
          {
            "magia": "Mystic Repulse",
            "palavras": "exori amp pug",
            "obs": "builder, a cada 8s (alcance 7)",
            "icone": "img/magias/mystic-repulse.gif"
          },
          {
            "magia": "Double Jab",
            "palavras": "exori pug",
            "obs": "builder, a cada 4s, até juntar 5 de Harmony",
            "icone": "img/magias/double-jab.gif"
          },
          {
            "magia": "Devastating Knockout",
            "palavras": "exori gran nia",
            "obs": "spender com 5 de Harmony (a cada 8s, alcance 7)",
            "icone": "img/magias/devastating-knockout.gif"
          },
          {
            "magia": "Forceful Uppercut",
            "palavras": "exori gran pug",
            "obs": "sempre que sair da recarga (60s)",
            "icone": "img/magias/forceful-uppercut.gif"
          }
        ],
        "nota": "Físico 100%. Gaste a Harmony só com 5 pontos (+112% de dano). Abaixo do level 125 use Greater Tiger Clash (exori nia) como spender."
      },
      "nota": "Imune a fogo e gelo; os summons se curam com fogo/gelo. Use terra, energia, holy ou físico."
    },
    "tokens": [
      {
        "nome": "Gold Token",
        "qtd": "0-3",
        "raridade": "comum",
        "sprite": "img/itens/gold-token.gif"
      },
      {
        "nome": "Silver Token",
        "qtd": "0-3",
        "raridade": "comum",
        "sprite": "img/itens/silver-token.gif"
      }
    ],
    "lootTiers": [
      {
        "raridade": "comum",
        "itens": [
          {
            "nome": "Platinum Coin",
            "qtd": "0-5",
            "sprite": "img/itens/platinum-coin.gif",
            "link": "https://www.tibiawiki.com.br/Platinum_Coin"
          },
          {
            "nome": "Crystal Coin",
            "qtd": "0-2",
            "sprite": "img/itens/crystal-coin.gif",
            "link": "https://www.tibiawiki.com.br/Crystal_Coin"
          },
          {
            "nome": "Supreme Health Potion",
            "qtd": "0-20",
            "sprite": "img/itens/supreme-health-potion.gif",
            "link": "https://www.tibiawiki.com.br/Supreme_Health_Potion"
          },
          {
            "nome": "Ultimate Mana Potion",
            "qtd": "0-20",
            "sprite": "img/itens/ultimate-mana-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Mana_Potion"
          },
          {
            "nome": "Ultimate Spirit Potion",
            "qtd": "0-20",
            "sprite": "img/itens/ultimate-spirit-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Spirit_Potion"
          },
          {
            "nome": "Energy Bar",
            "qtd": null,
            "sprite": "img/itens/energy-bar.gif",
            "link": "https://www.tibiawiki.com.br/Energy_Bar"
          },
          {
            "nome": "Mysterious Remains",
            "qtd": null,
            "sprite": "img/itens/mysterious-remains.gif",
            "link": "https://www.tibiawiki.com.br/Mysterious_Remains"
          }
        ]
      },
      {
        "raridade": "incomum",
        "itens": [
          {
            "nome": "Berserk Potion",
            "qtd": "0-10",
            "sprite": "img/itens/berserk-potion.gif",
            "link": "https://www.tibiawiki.com.br/Berserk_Potion"
          },
          {
            "nome": "Bullseye Potion",
            "qtd": "0-10",
            "sprite": "img/itens/bullseye-potion.gif",
            "link": "https://www.tibiawiki.com.br/Bullseye_Potion"
          },
          {
            "nome": "Green Gem",
            "qtd": "0-2",
            "sprite": "img/itens/green-gem.gif",
            "link": "https://www.tibiawiki.com.br/Green_Gem"
          },
          {
            "nome": "Mastermind Potion",
            "qtd": "0-10",
            "sprite": "img/itens/mastermind-potion.gif",
            "link": "https://www.tibiawiki.com.br/Mastermind_Potion"
          },
          {
            "nome": "Royal Star",
            "qtd": "0-100",
            "sprite": "img/itens/royal-star.gif",
            "link": "https://www.tibiawiki.com.br/Royal_Star"
          },
          {
            "nome": "Blue Gem",
            "qtd": null,
            "sprite": "img/itens/blue-gem.gif",
            "link": "https://www.tibiawiki.com.br/Blue_Gem"
          },
          {
            "nome": "Chaos Mace",
            "qtd": null,
            "sprite": "img/itens/chaos-mace.gif",
            "link": "https://www.tibiawiki.com.br/Chaos_Mace"
          },
          {
            "nome": "Giant Shimmering Pearl",
            "qtd": null,
            "sprite": "img/itens/giant-shimmering-pearl.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Shimmering_Pearl"
          },
          {
            "nome": "Gold Ingot",
            "qtd": null,
            "sprite": "img/itens/gold-ingot.gif",
            "link": "https://www.tibiawiki.com.br/Gold_Ingot"
          },
          {
            "nome": "Magic Sulphur",
            "qtd": null,
            "sprite": "img/itens/magic-sulphur.gif",
            "link": "https://www.tibiawiki.com.br/Magic_Sulphur"
          },
          {
            "nome": "Piggy Bank",
            "qtd": null,
            "sprite": "img/itens/piggy-bank.gif",
            "link": "https://www.tibiawiki.com.br/Piggy_Bank"
          },
          {
            "nome": "Red Gem",
            "qtd": null,
            "sprite": "img/itens/red-gem.gif",
            "link": "https://www.tibiawiki.com.br/Red_Gem"
          },
          {
            "nome": "Skull Staff",
            "qtd": null,
            "sprite": "img/itens/skull-staff.gif",
            "link": "https://www.tibiawiki.com.br/Skull_Staff"
          },
          {
            "nome": "Violet Gem",
            "qtd": null,
            "sprite": "img/itens/violet-gem.gif",
            "link": "https://www.tibiawiki.com.br/Violet_Gem"
          },
          {
            "nome": "Yellow Gem",
            "qtd": null,
            "sprite": "img/itens/yellow-gem.gif",
            "link": "https://www.tibiawiki.com.br/Yellow_Gem"
          }
        ]
      },
      {
        "raridade": "semi-raro",
        "itens": [
          {
            "nome": "Arcane Staff",
            "qtd": null,
            "sprite": "img/itens/arcane-staff.gif",
            "link": "https://www.tibiawiki.com.br/Arcane_Staff"
          },
          {
            "nome": "Collar of Blue Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-blue-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Blue_Plasma"
          },
          {
            "nome": "Collar of Green Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-green-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Green_Plasma"
          },
          {
            "nome": "Collar of Red Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-red-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Red_Plasma"
          },
          {
            "nome": "Dragon Figurine",
            "qtd": null,
            "sprite": "img/itens/dragon-figurine.gif",
            "link": "https://www.tibiawiki.com.br/Dragon_Figurine"
          },
          {
            "nome": "Giant Sapphire",
            "qtd": null,
            "sprite": "img/itens/giant-sapphire.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Sapphire"
          },
          {
            "nome": "Huge Chunk of Crude Iron",
            "qtd": null,
            "sprite": "img/itens/huge-chunk-of-crude-iron.gif",
            "link": "https://www.tibiawiki.com.br/Huge_Chunk_of_Crude_Iron"
          },
          {
            "nome": "Izcandar's Snow Globe",
            "qtd": null,
            "sprite": "img/itens/izcandars-snow-globe.gif",
            "link": "https://www.tibiawiki.com.br/Izcandar%27s_Snow_Globe"
          },
          {
            "nome": "Izcandar's Sundial",
            "qtd": null,
            "sprite": "img/itens/izcandars-sundial.gif",
            "link": "https://www.tibiawiki.com.br/Izcandar%27s_Sundial"
          },
          {
            "nome": "Pomegranate",
            "qtd": null,
            "sprite": "img/itens/pomegranate.gif",
            "link": "https://www.tibiawiki.com.br/Pomegranate"
          },
          {
            "nome": "Ring of Blue Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-blue-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Blue_Plasma"
          },
          {
            "nome": "Ring of Green Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-green-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Green_Plasma"
          },
          {
            "nome": "Ring of Red Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-red-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Red_Plasma"
          },
          {
            "nome": "Ring of the Sky",
            "qtd": null,
            "sprite": "img/itens/ring-of-the-sky.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_the_Sky"
          }
        ]
      },
      {
        "raridade": "raro",
        "itens": [
          {
            "nome": "Ice Shield",
            "qtd": null,
            "sprite": "img/itens/ice-shield.gif",
            "link": "https://www.tibiawiki.com.br/Ice_Shield"
          },
          {
            "nome": "Ornate Locket",
            "qtd": null,
            "sprite": "img/itens/ornate-locket.gif",
            "link": "https://www.tibiawiki.com.br/Ornate_Locket"
          },
          {
            "nome": "Purple Tendril Lantern",
            "qtd": null,
            "sprite": "img/itens/purple-tendril-lantern.gif",
            "link": "https://www.tibiawiki.com.br/Purple_Tendril_Lantern"
          },
          {
            "nome": "Soul Stone",
            "qtd": null,
            "sprite": "img/itens/soul-stone.gif",
            "link": "https://www.tibiawiki.com.br/Soul_Stone"
          },
          {
            "nome": "Summerblade",
            "qtd": null,
            "sprite": "img/itens/summerblade.gif",
            "link": "https://www.tibiawiki.com.br/Summerblade"
          },
          {
            "nome": "Turquoise Tendril Lantern",
            "qtd": null,
            "sprite": "img/itens/turquoise-tendril-lantern.gif",
            "link": "https://www.tibiawiki.com.br/Turquoise_Tendril_Lantern"
          },
          {
            "nome": "Winterblade",
            "qtd": null,
            "sprite": "img/itens/winterblade.gif",
            "link": "https://www.tibiawiki.com.br/Winterblade"
          }
        ]
      }
    ],
    "lootStatus": "ok",
    "mecanica": [
      "Tem 3 formas: banished, [[Izcandar Champion of Summer|verão]] e [[Izcandar Champion of Winter|inverno]]. Muda conforme o lado da arena, sempre passando pela banished.",
      "Os summons [[The Heat Of Summer]] (fogo) e [[The Cold Of Winter]] (gelo) aparecem sempre e se curam com o próprio elemento: use terra, energia, holy e físico. O boss é imune a fogo e gelo.",
      "O lado onde ele morre define o loot: no inverno pode cair [[Winterblade]], no verão [[Summerblade]].",
      "Troca muito de alvo (exeta res sempre). Dica: tire vida num lado e finalize no outro. Área ajuda a matar os summons."
    ],
    "spritesMecanica": {
      "Izcandar Champion of Summer": "img/criaturas/izcandar-champion-of-summer.gif",
      "Izcandar Champion of Winter": "img/criaturas/izcandar-champion-of-winter.gif",
      "The Heat Of Summer": "img/criaturas/the-heat-of-summer.gif",
      "The Cold Of Winter": "img/criaturas/the-cold-of-winter.gif",
      "Winterblade": "img/criaturas/winterblade.gif",
      "Summerblade": "img/criaturas/summerblade.gif"
    },
    "fases": [
      {
        "nome": "Izcandar Champion of Summer",
        "dica": "Forma do lado do verão: imune a fogo. Pode dar Summerblade.",
        "hp": "320000",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "0%",
          "morte": "100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/izcandar-champion-of-summer.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 1,
        "elemento": {
          "sorcerer": [
            "energia",
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Izcandar Champion of Winter",
        "dica": "Forma do lado do inverno: imune a gelo. Pode dar Winterblade.",
        "hp": "320000",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "0%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/izcandar-champion-of-winter.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Terra Strike",
              "palavras": "exori max tera",
              "icone": "img/magias/ultimate-terra-strike.gif"
            },
            {
              "magia": "Sudden Death Rune",
              "palavras": "adori gran mort",
              "icone": "img/magias/sudden-death-rune.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 1,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo",
            "morte"
          ],
          "druid": [
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "The Heat Of Summer",
        "dica": "Summon de fogo: fogo CURA. Use área de outro elemento.",
        "hp": "3000",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "-100%",
          "morte": "100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/the-heat-of-summer.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "energia",
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "The Cold Of Winter",
        "dica": "Summon de gelo: gelo CURA. Use área de outro elemento.",
        "hp": "3000",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "-100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/the-cold-of-winter.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Terra Strike",
              "palavras": "exori max tera",
              "icone": "img/magias/ultimate-terra-strike.gif"
            },
            {
              "magia": "Sudden Death Rune",
              "palavras": "adori gran mort",
              "icone": "img/magias/sudden-death-rune.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo",
            "morte"
          ],
          "druid": [
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      }
    ],
    "link": "https://www.tibiawiki.com.br/Izcandar_the_Banished",
    "pendencias": [
      "HP não informado (ou incerto) na wiki: ?",
      "XP não informada (ou incerta) na wiki: ?"
    ]
  },
  {
    "nome": "The Nightmare Beast",
    "local": "Dream Scar (abaixo de Greenshore)",
    "grupo": "Dream Courts",
    "subgrupo": "Last DC",
    "ordem": 6,
    "quest": "The Dream Courts Quest",
    "level": {
      "quest": "The Dream Courts Quest",
      "link": "https://www.tibiawiki.com.br/The_Dream_Courts_Quest",
      "minimo": "250",
      "recomendado": "350+"
    },
    "hp": "550000",
    "xp": "75000",
    "tipo": "archfoe",
    "sprite": "img/bosses/the-nightmare-beast.gif",
    "elementos": {
      "fisico": "100%",
      "terra": "100%",
      "fogo": "100%",
      "morte": "100%",
      "energia": "100%",
      "sagrado": "100%",
      "gelo": "100%",
      "cura": "100%"
    },
    "imunidades": [
      "Invisibility",
      "Paralysis"
    ],
    "podeSerPuxado": false,
    "empurraObjetos": true,
    "passaPor": [
      "Fire",
      "Energy",
      "Poison"
    ],
    "ataque": {
      "sorcerer": {
        "elementos": [
          "energia"
        ],
        "alternativas": [
          "fogo"
        ]
      },
      "druid": {
        "elementos": [
          "gelo"
        ],
        "alternativas": [
          "terra"
        ]
      },
      "paladin": {
        "elementos": [
          "sagrado"
        ],
        "alternativas": [
          "fisico"
        ]
      },
      "knight": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      },
      "monk": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      }
    },
    "defesa": {
      "elementos": [
        "morte"
      ],
      "melee": true,
      "nota": "Dano de death (até ~1.000)."
    },
    "rotacao": {
      "knight": {
        "passos": [
          {
            "magia": "Annihilation",
            "palavras": "exori gran ico",
            "obs": "sempre que sair da recarga (30s)",
            "icone": "img/magias/annihilation.gif"
          },
          {
            "magia": "Fierce Berserk",
            "palavras": "exori gran",
            "obs": "a cada 6s",
            "icone": "img/magias/fierce-berserk.gif"
          },
          {
            "magia": "Front Sweep",
            "palavras": "exori min",
            "obs": "a cada 6s, alternando com o Fierce Berserk",
            "icone": "img/magias/front-sweep.gif"
          },
          {
            "magia": "Brutal Strike",
            "palavras": "exori ico",
            "obs": "nos intervalos (ou Shield Bash, exori ico scu, se usar escudo)",
            "icone": "img/magias/brutal-strike.gif"
          }
        ],
        "nota": "Físico 100%. Stance: Blood Rage para dano; Protector se for o blocker."
      },
      "paladin": {
        "passos": [
          {
            "magia": "Divine Grenade",
            "palavras": "exevo tempo mas san",
            "obs": "a cada 26s (level 300+)",
            "icone": "img/magias/divine-grenade.gif"
          },
          {
            "magia": "Divine Barrage",
            "palavras": "exori dir san",
            "obs": "a cada 4s",
            "icone": "img/magias/divine-barrage.gif"
          },
          {
            "magia": "Ethereal Barrage",
            "palavras": "exori dir moe",
            "obs": "a cada 4s, alternando com a Divine Barrage",
            "icone": "img/magias/ethereal-barrage.gif"
          },
          {
            "magia": "Divine Missile",
            "palavras": "exori san",
            "obs": "nos intervalos",
            "icone": "img/magias/divine-missile.gif"
          }
        ],
        "nota": "Holy 100%, físico 100%. Ataque básico com arma o tempo todo. Stance: Sharpshooter."
      },
      "sorcerer": {
        "passos": [
          {
            "magia": "Ultimate Energy Strike",
            "palavras": "exori max vis",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-energy-strike.gif"
          },
          {
            "magia": "Great Energy Beam",
            "palavras": "exevo gran vis lux",
            "obs": "a cada 6s, com o boss na reta (wave/beam)",
            "icone": "img/magias/great-energy-beam.gif"
          },
          {
            "magia": "Great Death Beam",
            "palavras": "exevo max mort",
            "obs": "a cada 6s, com o boss na reta (beam)",
            "icone": "img/magias/great-death-beam.gif"
          },
          {
            "magia": "Energy Wave",
            "palavras": "exevo vis hur",
            "obs": "a cada 8s, com o boss na reta (wave/beam)",
            "icone": "img/magias/energy-wave.gif"
          },
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "a cada 2s, sempre que nada mais forte estiver pronto",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Strong Energy Strike",
            "palavras": "exori gran vis",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/strong-energy-strike.gif"
          },
          {
            "magia": "Death Echo",
            "palavras": "exevo mort ora",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/death-echo.gif"
          },
          {
            "magia": "Lightning",
            "palavras": "exori amp vis",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/lightning.gif"
          }
        ],
        "nota": "Elemento: energia (100%). Stance: Master of Thunder."
      },
      "druid": {
        "passos": [
          {
            "magia": "Ultimate Ice Strike",
            "palavras": "exori max frigo",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-ice-strike.gif"
          },
          {
            "magia": "Strong Ice Wave",
            "palavras": "exevo gran frigo hur",
            "obs": "a cada 4s, com o boss na reta (wave/beam)",
            "icone": "img/magias/strong-ice-wave.gif"
          },
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "a cada 2s, sempre que nada mais forte estiver pronto",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Strong Ice Strike",
            "palavras": "exori gran frigo",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/strong-ice-strike.gif"
          },
          {
            "magia": "Forked Glacier",
            "palavras": "exevo fur frigo",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/forked-glacier.gif"
          }
        ],
        "nota": "Elemento: gelo (100%). Stance: Elemental Synthesis."
      },
      "monk": {
        "passos": [
          {
            "magia": "Thousand Fist Blows",
            "palavras": "exori mas amp pug",
            "obs": "builder, a cada 8s",
            "icone": "img/magias/thousand-fist-blows.gif"
          },
          {
            "magia": "Mystic Repulse",
            "palavras": "exori amp pug",
            "obs": "builder, a cada 8s (alcance 7)",
            "icone": "img/magias/mystic-repulse.gif"
          },
          {
            "magia": "Double Jab",
            "palavras": "exori pug",
            "obs": "builder, a cada 4s, até juntar 5 de Harmony",
            "icone": "img/magias/double-jab.gif"
          },
          {
            "magia": "Devastating Knockout",
            "palavras": "exori gran nia",
            "obs": "spender com 5 de Harmony (a cada 8s, alcance 7)",
            "icone": "img/magias/devastating-knockout.gif"
          },
          {
            "magia": "Forceful Uppercut",
            "palavras": "exori gran pug",
            "obs": "sempre que sair da recarga (60s)",
            "icone": "img/magias/forceful-uppercut.gif"
          }
        ],
        "nota": "Físico 100%. Gaste a Harmony só com 5 pontos (+112% de dano). Abaixo do level 125 use Greater Tiger Clash (exori nia) como spender."
      }
    },
    "tokens": [
      {
        "nome": "Gold Token",
        "qtd": "0-5",
        "raridade": "comum",
        "sprite": "img/itens/gold-token.gif"
      },
      {
        "nome": "Silver Token",
        "qtd": "0-5",
        "raridade": "comum",
        "sprite": "img/itens/silver-token.gif"
      }
    ],
    "lootTiers": [
      {
        "raridade": "comum",
        "itens": [
          {
            "nome": "Platinum Coin",
            "qtd": "0-8",
            "sprite": "img/itens/platinum-coin.gif",
            "link": "https://www.tibiawiki.com.br/Platinum_Coin"
          },
          {
            "nome": "Crystal Coin",
            "qtd": "0-2",
            "sprite": "img/itens/crystal-coin.gif",
            "link": "https://www.tibiawiki.com.br/Crystal_Coin"
          },
          {
            "nome": "Royal Star",
            "qtd": "0-100",
            "sprite": "img/itens/royal-star.gif",
            "link": "https://www.tibiawiki.com.br/Royal_Star"
          },
          {
            "nome": "Supreme Health Potion",
            "qtd": "0-32",
            "sprite": "img/itens/supreme-health-potion.gif",
            "link": "https://www.tibiawiki.com.br/Supreme_Health_Potion"
          },
          {
            "nome": "Ultimate Mana Potion",
            "qtd": "0-20",
            "sprite": "img/itens/ultimate-mana-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Mana_Potion"
          },
          {
            "nome": "Ultimate Spirit Potion",
            "qtd": "0-20",
            "sprite": "img/itens/ultimate-spirit-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Spirit_Potion"
          },
          {
            "nome": "Energy Bar",
            "qtd": null,
            "sprite": "img/itens/energy-bar.gif",
            "link": "https://www.tibiawiki.com.br/Energy_Bar"
          }
        ]
      },
      {
        "raridade": "incomum",
        "itens": [
          {
            "nome": "Berserk Potion",
            "qtd": "0-10",
            "sprite": "img/itens/berserk-potion.gif",
            "link": "https://www.tibiawiki.com.br/Berserk_Potion"
          },
          {
            "nome": "Bullseye Potion",
            "qtd": "0-10",
            "sprite": "img/itens/bullseye-potion.gif",
            "link": "https://www.tibiawiki.com.br/Bullseye_Potion"
          },
          {
            "nome": "Mastermind Potion",
            "qtd": "0-10",
            "sprite": "img/itens/mastermind-potion.gif",
            "link": "https://www.tibiawiki.com.br/Mastermind_Potion"
          },
          {
            "nome": "Transcendence Potion",
            "qtd": "0-11",
            "sprite": "img/itens/transcendence-potion.gif",
            "link": "https://www.tibiawiki.com.br/Transcendence_Potion"
          },
          {
            "nome": "Blue Gem",
            "qtd": null,
            "sprite": "img/itens/blue-gem.gif",
            "link": "https://www.tibiawiki.com.br/Blue_Gem"
          },
          {
            "nome": "Gold Ingot",
            "qtd": null,
            "sprite": "img/itens/gold-ingot.gif",
            "link": "https://www.tibiawiki.com.br/Gold_Ingot"
          },
          {
            "nome": "Green Gem",
            "qtd": null,
            "sprite": "img/itens/green-gem.gif",
            "link": "https://www.tibiawiki.com.br/Green_Gem"
          },
          {
            "nome": "Mysterious Remains",
            "qtd": null,
            "sprite": "img/itens/mysterious-remains.gif",
            "link": "https://www.tibiawiki.com.br/Mysterious_Remains"
          },
          {
            "nome": "Piggy Bank",
            "qtd": null,
            "sprite": "img/itens/piggy-bank.gif",
            "link": "https://www.tibiawiki.com.br/Piggy_Bank"
          },
          {
            "nome": "Red Gem",
            "qtd": "0-2",
            "sprite": "img/itens/red-gem.gif",
            "link": "https://www.tibiawiki.com.br/Red_Gem"
          },
          {
            "nome": "Violet Gem",
            "qtd": null,
            "sprite": "img/itens/violet-gem.gif",
            "link": "https://www.tibiawiki.com.br/Violet_Gem"
          },
          {
            "nome": "Yellow Gem",
            "qtd": null,
            "sprite": "img/itens/yellow-gem.gif",
            "link": "https://www.tibiawiki.com.br/Yellow_Gem"
          }
        ]
      },
      {
        "raridade": "semi-raro",
        "itens": [
          {
            "nome": "Abyss Hammer",
            "qtd": null,
            "sprite": "img/itens/abyss-hammer.gif",
            "link": "https://www.tibiawiki.com.br/Abyss_Hammer"
          },
          {
            "nome": "Arcane Staff",
            "qtd": null,
            "sprite": "img/itens/arcane-staff.gif",
            "link": "https://www.tibiawiki.com.br/Arcane_Staff"
          },
          {
            "nome": "Beast's Nightmare-Cushion",
            "qtd": null,
            "sprite": "img/itens/beasts-nightmare-cushion.gif",
            "link": "https://www.tibiawiki.com.br/Beast%27s_Nightmare-Cushion"
          },
          {
            "nome": "Chaos Mace",
            "qtd": null,
            "sprite": "img/itens/chaos-mace.gif",
            "link": "https://www.tibiawiki.com.br/Chaos_Mace"
          },
          {
            "nome": "Collar of Blue Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-blue-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Blue_Plasma"
          },
          {
            "nome": "Collar of Green Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-green-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Green_Plasma"
          },
          {
            "nome": "Collar of Red Plasma",
            "qtd": null,
            "sprite": "img/itens/collar-of-red-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Collar_of_Red_Plasma"
          },
          {
            "nome": "Dragon Figurine",
            "qtd": null,
            "sprite": "img/itens/dragon-figurine.gif",
            "link": "https://www.tibiawiki.com.br/Dragon_Figurine"
          },
          {
            "nome": "Giant Ruby",
            "qtd": null,
            "sprite": "img/itens/giant-ruby.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Ruby"
          },
          {
            "nome": "Huge Chunk of Crude Iron",
            "qtd": null,
            "sprite": "img/itens/huge-chunk-of-crude-iron.gif",
            "link": "https://www.tibiawiki.com.br/Huge_Chunk_of_Crude_Iron"
          },
          {
            "nome": "Ring of Blue Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-blue-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Blue_Plasma"
          },
          {
            "nome": "Ring of Green Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-green-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Green_Plasma"
          },
          {
            "nome": "Ring of Red Plasma",
            "qtd": null,
            "sprite": "img/itens/ring-of-red-plasma.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Red_Plasma"
          },
          {
            "nome": "Ring of the Sky",
            "qtd": null,
            "sprite": "img/itens/ring-of-the-sky.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_the_Sky"
          },
          {
            "nome": "Skull Staff",
            "qtd": null,
            "sprite": "img/itens/skull-staff.gif",
            "link": "https://www.tibiawiki.com.br/Skull_Staff"
          }
        ]
      },
      {
        "raridade": "raro",
        "itens": [
          {
            "nome": "Dark Vision Bandana",
            "qtd": null,
            "sprite": "img/itens/dark-vision-bandana.gif",
            "link": "https://www.tibiawiki.com.br/Dark_Vision_Bandana"
          },
          {
            "nome": "Dark Whispers",
            "qtd": null,
            "sprite": "img/itens/dark-whispers.gif",
            "link": "https://www.tibiawiki.com.br/Dark_Whispers"
          },
          {
            "nome": "Enchanted Sleep Shawl",
            "qtd": null,
            "sprite": "img/itens/enchanted-sleep-shawl.gif",
            "link": "https://www.tibiawiki.com.br/Enchanted_Sleep_Shawl"
          },
          {
            "nome": "Ice Shield",
            "qtd": null,
            "sprite": "img/itens/ice-shield.gif",
            "link": "https://www.tibiawiki.com.br/Ice_Shield"
          },
          {
            "nome": "Purple Tendril Lantern",
            "qtd": null,
            "sprite": "img/itens/purple-tendril-lantern.gif",
            "link": "https://www.tibiawiki.com.br/Purple_Tendril_Lantern"
          },
          {
            "nome": "Soul Stone",
            "qtd": null,
            "sprite": "img/itens/soul-stone.gif",
            "link": "https://www.tibiawiki.com.br/Soul_Stone"
          },
          {
            "nome": "Turquoise Tendril Lantern",
            "qtd": null,
            "sprite": "img/itens/turquoise-tendril-lantern.gif",
            "link": "https://www.tibiawiki.com.br/Turquoise_Tendril_Lantern"
          },
          {
            "nome": "Unicorn Figurine",
            "qtd": null,
            "sprite": "img/itens/unicorn-figurine.gif",
            "link": "https://www.tibiawiki.com.br/Unicorn_Figurine"
          }
        ]
      }
    ],
    "lootStatus": "ok",
    "mecanica": [
      "Acesso: 5 vitórias na arena (pode ser o mesmo boss 5 vezes; só 1 por server save). Até 10 jogadores. O teleporte fica a sudoeste da arena.",
      "Logo no início um jogador é amaldiçoado: vira [[Spectre]] por 15s e depois [[Phantasm]] por 10s. Se a maldição não sair em 25s, ele é jogado para fora.",
      "Para curar: alguém usa o [[Large Totem Pole|Dream Catcher Pole]] no centro, pega um [[Tribal Mask|Dream Catcher]] e usa no amaldiçoado. A maldição passa para quem usou (ninguém cura a si mesmo).",
      "Pegar e usar a máscara têm cooldown: definam 4-5 jogadores em ordem. O amaldiçoado e o próximo ficam no totem. Dá para esperar a forma Phantasm para ganhar tempo.",
      "As [[Nightmare Tendril|Nightmare Tendrils]] renascem logo: um 2º blocker para elas é recomendado. O boss troca muito de alvo; há um ponto a oeste da sala onde ele fica trapado."
    ],
    "spritesMecanica": {
      "Spectre": "img/criaturas/spectre.gif",
      "Phantasm": "img/criaturas/phantasm.gif",
      "Large Totem Pole": "img/criaturas/large-totem-pole.gif",
      "Tribal Mask": "img/criaturas/tribal-mask.gif",
      "Nightmare Tendril": "img/criaturas/nightmare-tendril.gif"
    },
    "fases": [
      {
        "nome": "Nightmare Tendril",
        "dica": "Renasce logo: um 2º blocker mantém longe do boss.",
        "hp": "8000",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/nightmare-tendril.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo",
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      }
    ],
    "link": "https://www.tibiawiki.com.br/The_Nightmare_Beast",
    "pendencias": []
  },
  {
    "nome": "Vladrukh",
    "local": "Norcferatu Dungeons (Bloody Tusks)",
    "grupo": "Avulsos",
    "ordem": 6,
    "quest": "Bloody Tusks Quest",
    "level": {
      "quest": "Bloody Tusks Quest",
      "link": "https://www.tibiawiki.com.br/Bloody_Tusks_Quest",
      "minimo": "250",
      "recomendado": "600+"
    },
    "hp": "390000",
    "xp": "450000",
    "tipo": "archfoe",
    "sprite": "img/bosses/vladrukh.gif",
    "elementos": {
      "fisico": "100%",
      "terra": "100%",
      "fogo": "100%",
      "morte": "100%",
      "energia": "100%",
      "sagrado": "100%",
      "gelo": "100%",
      "cura": "100%"
    },
    "imunidades": [
      "Invisibility",
      "Paralyse"
    ],
    "podeSerPuxado": false,
    "empurraObjetos": true,
    "passaPor": [
      "Poison",
      "Fire",
      "Energy"
    ],
    "ataque": {
      "sorcerer": {
        "elementos": [
          "energia"
        ],
        "alternativas": [
          "fogo"
        ]
      },
      "druid": {
        "elementos": [
          "gelo"
        ],
        "alternativas": [
          "terra"
        ]
      },
      "paladin": {
        "elementos": [
          "sagrado"
        ],
        "alternativas": [
          "fisico"
        ]
      },
      "knight": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      },
      "monk": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      }
    },
    "defesa": {
      "elementos": [
        "morte",
        "terra"
      ],
      "melee": true,
      "nota": "Boss bate físico, terra e death; Blood Pools e Essences drenam vida."
    },
    "rotacao": {
      "knight": {
        "passos": [
          {
            "magia": "Annihilation",
            "palavras": "exori gran ico",
            "obs": "sempre que sair da recarga (30s)",
            "icone": "img/magias/annihilation.gif"
          },
          {
            "magia": "Fierce Berserk",
            "palavras": "exori gran",
            "obs": "a cada 6s",
            "icone": "img/magias/fierce-berserk.gif"
          },
          {
            "magia": "Front Sweep",
            "palavras": "exori min",
            "obs": "a cada 6s, alternando com o Fierce Berserk",
            "icone": "img/magias/front-sweep.gif"
          },
          {
            "magia": "Brutal Strike",
            "palavras": "exori ico",
            "obs": "nos intervalos (ou Shield Bash, exori ico scu, se usar escudo)",
            "icone": "img/magias/brutal-strike.gif"
          }
        ],
        "nota": "Físico 100%. Stance: Blood Rage para dano; Protector se for o blocker."
      },
      "paladin": {
        "passos": [
          {
            "magia": "Divine Grenade",
            "palavras": "exevo tempo mas san",
            "obs": "a cada 26s (level 300+)",
            "icone": "img/magias/divine-grenade.gif"
          },
          {
            "magia": "Divine Barrage",
            "palavras": "exori dir san",
            "obs": "a cada 4s",
            "icone": "img/magias/divine-barrage.gif"
          },
          {
            "magia": "Ethereal Barrage",
            "palavras": "exori dir moe",
            "obs": "a cada 4s, alternando com a Divine Barrage",
            "icone": "img/magias/ethereal-barrage.gif"
          },
          {
            "magia": "Divine Missile",
            "palavras": "exori san",
            "obs": "nos intervalos",
            "icone": "img/magias/divine-missile.gif"
          }
        ],
        "nota": "Holy 100%, físico 100%. Ataque básico com arma o tempo todo. Stance: Sharpshooter."
      },
      "sorcerer": {
        "passos": [
          {
            "magia": "Ultimate Energy Strike",
            "palavras": "exori max vis",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-energy-strike.gif"
          },
          {
            "magia": "Great Energy Beam",
            "palavras": "exevo gran vis lux",
            "obs": "a cada 6s, com o boss na reta (wave/beam)",
            "icone": "img/magias/great-energy-beam.gif"
          },
          {
            "magia": "Great Death Beam",
            "palavras": "exevo max mort",
            "obs": "a cada 6s, com o boss na reta (beam)",
            "icone": "img/magias/great-death-beam.gif"
          },
          {
            "magia": "Energy Wave",
            "palavras": "exevo vis hur",
            "obs": "a cada 8s, com o boss na reta (wave/beam)",
            "icone": "img/magias/energy-wave.gif"
          },
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "a cada 2s, sempre que nada mais forte estiver pronto",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Strong Energy Strike",
            "palavras": "exori gran vis",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/strong-energy-strike.gif"
          },
          {
            "magia": "Death Echo",
            "palavras": "exevo mort ora",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/death-echo.gif"
          },
          {
            "magia": "Lightning",
            "palavras": "exori amp vis",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/lightning.gif"
          }
        ],
        "nota": "Elemento: energia (100%). Stance: Master of Thunder."
      },
      "druid": {
        "passos": [
          {
            "magia": "Ultimate Ice Strike",
            "palavras": "exori max frigo",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-ice-strike.gif"
          },
          {
            "magia": "Strong Ice Wave",
            "palavras": "exevo gran frigo hur",
            "obs": "a cada 4s, com o boss na reta (wave/beam)",
            "icone": "img/magias/strong-ice-wave.gif"
          },
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "a cada 2s, sempre que nada mais forte estiver pronto",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Strong Ice Strike",
            "palavras": "exori gran frigo",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/strong-ice-strike.gif"
          },
          {
            "magia": "Forked Glacier",
            "palavras": "exevo fur frigo",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/forked-glacier.gif"
          }
        ],
        "nota": "Elemento: gelo (100%). Stance: Elemental Synthesis."
      },
      "monk": {
        "passos": [
          {
            "magia": "Thousand Fist Blows",
            "palavras": "exori mas amp pug",
            "obs": "builder, a cada 8s",
            "icone": "img/magias/thousand-fist-blows.gif"
          },
          {
            "magia": "Mystic Repulse",
            "palavras": "exori amp pug",
            "obs": "builder, a cada 8s (alcance 7)",
            "icone": "img/magias/mystic-repulse.gif"
          },
          {
            "magia": "Double Jab",
            "palavras": "exori pug",
            "obs": "builder, a cada 4s, até juntar 5 de Harmony",
            "icone": "img/magias/double-jab.gif"
          },
          {
            "magia": "Devastating Knockout",
            "palavras": "exori gran nia",
            "obs": "spender com 5 de Harmony (a cada 8s, alcance 7)",
            "icone": "img/magias/devastating-knockout.gif"
          },
          {
            "magia": "Forceful Uppercut",
            "palavras": "exori gran pug",
            "obs": "sempre que sair da recarga (60s)",
            "icone": "img/magias/forceful-uppercut.gif"
          }
        ],
        "nota": "Físico 100%. Gaste a Harmony só com 5 pontos (+112% de dano). Abaixo do level 125 use Greater Tiger Clash (exori nia) como spender."
      }
    },
    "tokens": [],
    "lootTiers": [
      {
        "raridade": "comum",
        "itens": [
          {
            "nome": "Greater Proficiency Catalyst",
            "qtd": null,
            "sprite": "img/itens/greater-proficiency-catalyst.gif",
            "link": "https://www.tibiawiki.com.br/Greater_Proficiency_Catalyst"
          },
          {
            "nome": "Platinum Coins",
            "qtd": "0-168",
            "sprite": "img/itens/platinum-coin.gif",
            "link": "https://www.tibiawiki.com.br/Platinum_Coins"
          },
          {
            "nome": "Crystal Coin",
            "qtd": "0-3",
            "sprite": "img/itens/crystal-coin.gif",
            "link": "https://www.tibiawiki.com.br/Crystal_Coin"
          },
          {
            "nome": "Red Piece of Cloth",
            "qtd": null,
            "sprite": "img/itens/red-piece-of-cloth.gif",
            "link": "https://www.tibiawiki.com.br/Red_Piece_of_Cloth"
          }
        ]
      },
      {
        "raridade": "incomum",
        "itens": [
          {
            "nome": "Red Gem",
            "qtd": "0-2",
            "sprite": "img/itens/red-gem.gif",
            "link": "https://www.tibiawiki.com.br/Red_Gem"
          },
          {
            "nome": "Blue Gem",
            "qtd": "0-2",
            "sprite": "img/itens/blue-gem.gif",
            "link": "https://www.tibiawiki.com.br/Blue_Gem"
          },
          {
            "nome": "Strong Mana Potion",
            "qtd": "0-18",
            "sprite": "img/itens/strong-mana-potion.gif",
            "link": "https://www.tibiawiki.com.br/Strong_Mana_Potion"
          },
          {
            "nome": "Great Mana Potion",
            "qtd": "0-15",
            "sprite": "img/itens/great-mana-potion.gif",
            "link": "https://www.tibiawiki.com.br/Great_Mana_Potion"
          },
          {
            "nome": "Great Spirit Potion",
            "qtd": "0-14",
            "sprite": "img/itens/great-spirit-potion.gif",
            "link": "https://www.tibiawiki.com.br/Great_Spirit_Potion"
          },
          {
            "nome": "Skull Belt",
            "qtd": null,
            "sprite": "img/itens/skull-belt.gif",
            "link": "https://www.tibiawiki.com.br/Skull_Belt"
          },
          {
            "nome": "Supreme Health Potion",
            "qtd": "0-7",
            "sprite": "img/itens/supreme-health-potion.gif",
            "link": "https://www.tibiawiki.com.br/Supreme_Health_Potion"
          },
          {
            "nome": "Ultimate Mana Potion",
            "qtd": "0-32",
            "sprite": "img/itens/ultimate-mana-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Mana_Potion"
          },
          {
            "nome": "Ultimate Spirit Potion",
            "qtd": "0-13",
            "sprite": "img/itens/ultimate-spirit-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Spirit_Potion"
          },
          {
            "nome": "Ultimate Health Potion",
            "qtd": "0-19",
            "sprite": "img/itens/ultimate-health-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Health_Potion"
          },
          {
            "nome": "Blood Preservation",
            "qtd": null,
            "sprite": "img/itens/blood-preservation.gif",
            "link": "https://www.tibiawiki.com.br/Blood_Preservation"
          },
          {
            "nome": "Dark Armor",
            "qtd": null,
            "sprite": "img/itens/dark-armor.gif",
            "link": "https://www.tibiawiki.com.br/Dark_Armor"
          },
          {
            "nome": "Death Ring",
            "qtd": null,
            "sprite": "img/itens/death-ring.gif",
            "link": "https://www.tibiawiki.com.br/Death_Ring"
          },
          {
            "nome": "Greater Garlic Necklace",
            "qtd": null,
            "sprite": "img/itens/greater-garlic-necklace.gif",
            "link": "https://www.tibiawiki.com.br/Greater_Garlic_Necklace"
          },
          {
            "nome": "Orcish Axe",
            "qtd": null,
            "sprite": "img/itens/orcish-axe.gif",
            "link": "https://www.tibiawiki.com.br/Orcish_Axe"
          },
          {
            "nome": "Skull Helmet",
            "qtd": null,
            "sprite": "img/itens/skull-helmet.gif",
            "link": "https://www.tibiawiki.com.br/Skull_Helmet"
          },
          {
            "nome": "Vampire Shield",
            "qtd": null,
            "sprite": "img/itens/vampire-shield.gif",
            "link": "https://www.tibiawiki.com.br/Vampire_Shield"
          },
          {
            "nome": "Yellow Gem",
            "qtd": "0-2",
            "sprite": "img/itens/yellow-gem.gif",
            "link": "https://www.tibiawiki.com.br/Yellow_Gem"
          }
        ]
      },
      {
        "raridade": "semi-raro",
        "itens": [
          {
            "nome": "Giant Amethyst",
            "qtd": null,
            "sprite": "img/itens/giant-amethyst.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Amethyst"
          },
          {
            "nome": "Giant Sapphire",
            "qtd": null,
            "sprite": "img/itens/giant-sapphire.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Sapphire"
          }
        ]
      },
      {
        "raridade": "raro",
        "itens": [
          {
            "nome": "Blood Sceptre",
            "qtd": null,
            "sprite": "img/itens/blood-sceptre.gif",
            "link": "https://www.tibiawiki.com.br/Blood_Sceptre"
          },
          {
            "nome": "Blood Crown",
            "qtd": null,
            "sprite": "img/itens/blood-crown.gif",
            "link": "https://www.tibiawiki.com.br/Blood_Crown"
          }
        ]
      },
      {
        "raridade": "muito raro",
        "itens": [
          {
            "nome": "Norcferatu Bloodhide",
            "qtd": null,
            "sprite": "img/itens/norcferatu-bloodhide.gif",
            "link": "https://www.tibiawiki.com.br/Norcferatu_Bloodhide"
          },
          {
            "nome": "Norcferatu Bloodstrider",
            "qtd": null,
            "sprite": "img/itens/norcferatu-bloodstrider.gif",
            "link": "https://www.tibiawiki.com.br/Norcferatu_Bloodstrider"
          },
          {
            "nome": "Norcferatu Bonecloak",
            "qtd": null,
            "sprite": "img/itens/norcferatu-bonecloak.gif",
            "link": "https://www.tibiawiki.com.br/Norcferatu_Bonecloak"
          },
          {
            "nome": "Norcferatu Bonehood",
            "qtd": null,
            "sprite": "img/itens/norcferatu-bonehood.gif",
            "link": "https://www.tibiawiki.com.br/Norcferatu_Bonehood"
          },
          {
            "nome": "Norcferatu Goretrampers",
            "qtd": null,
            "sprite": "img/itens/norcferatu-goretrampers.gif",
            "link": "https://www.tibiawiki.com.br/Norcferatu_Goretrampers"
          },
          {
            "nome": "Norcferatu Thornwraps",
            "qtd": null,
            "sprite": "img/itens/norcferatu-thornwraps.gif",
            "link": "https://www.tibiawiki.com.br/Norcferatu_Thornwraps"
          },
          {
            "nome": "Norcferatu Tuskplate",
            "qtd": null,
            "sprite": "img/itens/norcferatu-tuskplate.gif",
            "link": "https://www.tibiawiki.com.br/Norcferatu_Tuskplate"
          },
          {
            "nome": "Norcferatu Skullguard",
            "qtd": null,
            "sprite": "img/itens/norcferatu-skullguard.gif",
            "link": "https://www.tibiawiki.com.br/Norcferatu_Skullguard"
          },
          {
            "nome": "Norcferatu Fleshguards",
            "qtd": null,
            "sprite": "img/itens/norcferatu-fleshguards.gif",
            "link": "https://www.tibiawiki.com.br/Norcferatu_Fleshguards"
          },
          {
            "nome": "Norcferatu Fangstompers",
            "qtd": null,
            "sprite": "img/itens/norcferatu-fangstompers.gif",
            "link": "https://www.tibiawiki.com.br/Norcferatu_Fangstompers"
          }
        ]
      }
    ],
    "lootStatus": "ok",
    "mecanica": [
      "Até 15 minutos de luta, em 2 fases que se alternam. Ataca com físico, terra e death.",
      "Fase 1 (~2min20s): o knight trapa o boss num canto, virado para onde não pegue os shooters (ele usa wave toda hora). Surgem 3 [[Blood Pool|Blood Pools]] (só life drain): afaste-as do boss (se a wave dele acertar uma, ele cura ~4.000) e bloqueie-as com [[Demon Skeleton|Demon Skeletons]], imunes a life drain.",
      "Fase 2: o boss some e se cura. Surgem 4 [[Vampiric Essence|Vampiric Essences]] e 4 [[Vampire Bat|Vampire Bats]]. Mate as Essences o mais rápido possível para ele voltar.",
      "Os Bats são imortais, refletem dano, causam drunk e fear e ignoram o exeta, mas não enxergam invisibilidade: Stealth Ring ou utana vid. Nada de área perto deles.",
      "Com vida vermelha ele vira [[Poison Gas]] por alguns segundos: imortal e com muito dano. Fique na defensiva e finalize quando voltar."
    ],
    "spritesMecanica": {
      "Blood Pool": "img/criaturas/blood-pool.gif",
      "Demon Skeleton": "img/criaturas/demon-skeleton.gif",
      "Vampiric Essence": "img/criaturas/vampiric-essence.gif",
      "Vampire Bat": "img/criaturas/vampire-bat.gif",
      "Poison Gas": "img/criaturas/poison-gas.gif"
    },
    "fases": [
      {
        "nome": "Blood Pool",
        "dica": "3 por fase: afaste do boss (a wave dele nelas cura ~4.000) e bloqueie com Demon Skeletons.",
        "hp": "9000",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/blood-pool.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo",
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Vampiric Essence",
        "dica": "Fase 2: matem as 4 o mais rápido possível para o boss voltar.",
        "hp": "20000",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/vampiric-essence.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 1,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo",
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Vampire Bat",
        "dica": "Imortais e refletem dano: não ataque. Não veem invisibilidade.",
        "hp": null,
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/vampire-bat.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo",
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      }
    ],
    "link": "https://www.tibiawiki.com.br/Vladrukh",
    "pendencias": []
  },
  {
    "nome": "The Monster",
    "local": "Ingol (Deeper Ingol)",
    "grupo": "Avulsos",
    "ordem": 7,
    "quest": "The Cradle of Monsters Quest",
    "level": {
      "quest": "The Cradle of Monsters Quest",
      "link": "https://www.tibiawiki.com.br/The_Cradle_of_Monsters_Quest",
      "minimo": "250",
      "recomendado": "400+"
    },
    "hp": "?",
    "xp": "30000",
    "tipo": "archfoe",
    "sprite": "img/bosses/the-monster.gif",
    "elementos": {
      "fisico": "100%",
      "terra": "100%",
      "fogo": "100%",
      "morte": "100%",
      "energia": "100%",
      "sagrado": "100%",
      "gelo": "100%",
      "cura": "100%"
    },
    "imunidades": [
      "Invisibility",
      "Paralysis"
    ],
    "podeSerPuxado": false,
    "empurraObjetos": true,
    "passaPor": [
      "Fire",
      "Energy",
      "Poison"
    ],
    "ataque": {
      "sorcerer": {
        "elementos": [
          "energia"
        ],
        "alternativas": [
          "fogo"
        ]
      },
      "druid": {
        "elementos": [
          "gelo"
        ],
        "alternativas": [
          "terra"
        ]
      },
      "paladin": {
        "elementos": [
          "sagrado"
        ],
        "alternativas": [
          "fisico"
        ]
      },
      "knight": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      },
      "monk": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      }
    },
    "defesa": {
      "elementos": [
        "terra",
        "energia"
      ],
      "melee": true,
      "nota": "Doctor Marrow: terra (Sacred Tree Amulet). The Monster: energia (Lightning Pendant)."
    },
    "rotacao": {
      "knight": {
        "passos": [
          {
            "magia": "Annihilation",
            "palavras": "exori gran ico",
            "obs": "sempre que sair da recarga (30s)",
            "icone": "img/magias/annihilation.gif"
          },
          {
            "magia": "Fierce Berserk",
            "palavras": "exori gran",
            "obs": "a cada 6s",
            "icone": "img/magias/fierce-berserk.gif"
          },
          {
            "magia": "Front Sweep",
            "palavras": "exori min",
            "obs": "a cada 6s, alternando com o Fierce Berserk",
            "icone": "img/magias/front-sweep.gif"
          },
          {
            "magia": "Brutal Strike",
            "palavras": "exori ico",
            "obs": "nos intervalos (ou Shield Bash, exori ico scu, se usar escudo)",
            "icone": "img/magias/brutal-strike.gif"
          }
        ],
        "nota": "Físico 100%. Stance: Blood Rage para dano; Protector se for o blocker."
      },
      "paladin": {
        "passos": [
          {
            "magia": "Divine Grenade",
            "palavras": "exevo tempo mas san",
            "obs": "a cada 26s (level 300+)",
            "icone": "img/magias/divine-grenade.gif"
          },
          {
            "magia": "Divine Barrage",
            "palavras": "exori dir san",
            "obs": "a cada 4s",
            "icone": "img/magias/divine-barrage.gif"
          },
          {
            "magia": "Ethereal Barrage",
            "palavras": "exori dir moe",
            "obs": "a cada 4s, alternando com a Divine Barrage",
            "icone": "img/magias/ethereal-barrage.gif"
          },
          {
            "magia": "Divine Missile",
            "palavras": "exori san",
            "obs": "nos intervalos",
            "icone": "img/magias/divine-missile.gif"
          }
        ],
        "nota": "Holy 100%, físico 100%. Ataque básico com arma o tempo todo. Stance: Sharpshooter."
      },
      "sorcerer": {
        "passos": [
          {
            "magia": "Ultimate Energy Strike",
            "palavras": "exori max vis",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-energy-strike.gif"
          },
          {
            "magia": "Great Energy Beam",
            "palavras": "exevo gran vis lux",
            "obs": "a cada 6s, com o boss na reta (wave/beam)",
            "icone": "img/magias/great-energy-beam.gif"
          },
          {
            "magia": "Great Death Beam",
            "palavras": "exevo max mort",
            "obs": "a cada 6s, com o boss na reta (beam)",
            "icone": "img/magias/great-death-beam.gif"
          },
          {
            "magia": "Energy Wave",
            "palavras": "exevo vis hur",
            "obs": "a cada 8s, com o boss na reta (wave/beam)",
            "icone": "img/magias/energy-wave.gif"
          },
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "a cada 2s, sempre que nada mais forte estiver pronto",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Strong Energy Strike",
            "palavras": "exori gran vis",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/strong-energy-strike.gif"
          },
          {
            "magia": "Death Echo",
            "palavras": "exevo mort ora",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/death-echo.gif"
          },
          {
            "magia": "Lightning",
            "palavras": "exori amp vis",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/lightning.gif"
          }
        ],
        "nota": "Elemento: energia (100%). Stance: Master of Thunder."
      },
      "druid": {
        "passos": [
          {
            "magia": "Ultimate Ice Strike",
            "palavras": "exori max frigo",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-ice-strike.gif"
          },
          {
            "magia": "Strong Ice Wave",
            "palavras": "exevo gran frigo hur",
            "obs": "a cada 4s, com o boss na reta (wave/beam)",
            "icone": "img/magias/strong-ice-wave.gif"
          },
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "a cada 2s, sempre que nada mais forte estiver pronto",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Strong Ice Strike",
            "palavras": "exori gran frigo",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/strong-ice-strike.gif"
          },
          {
            "magia": "Forked Glacier",
            "palavras": "exevo fur frigo",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/forked-glacier.gif"
          }
        ],
        "nota": "Elemento: gelo (100%). Stance: Elemental Synthesis."
      },
      "monk": {
        "passos": [
          {
            "magia": "Thousand Fist Blows",
            "palavras": "exori mas amp pug",
            "obs": "builder, a cada 8s",
            "icone": "img/magias/thousand-fist-blows.gif"
          },
          {
            "magia": "Mystic Repulse",
            "palavras": "exori amp pug",
            "obs": "builder, a cada 8s (alcance 7)",
            "icone": "img/magias/mystic-repulse.gif"
          },
          {
            "magia": "Double Jab",
            "palavras": "exori pug",
            "obs": "builder, a cada 4s, até juntar 5 de Harmony",
            "icone": "img/magias/double-jab.gif"
          },
          {
            "magia": "Devastating Knockout",
            "palavras": "exori gran nia",
            "obs": "spender com 5 de Harmony (a cada 8s, alcance 7)",
            "icone": "img/magias/devastating-knockout.gif"
          },
          {
            "magia": "Forceful Uppercut",
            "palavras": "exori gran pug",
            "obs": "sempre que sair da recarga (60s)",
            "icone": "img/magias/forceful-uppercut.gif"
          }
        ],
        "nota": "Físico 100%. Gaste a Harmony só com 5 pontos (+112% de dano). Abaixo do level 125 use Greater Tiger Clash (exori nia) como spender."
      }
    },
    "tokens": [],
    "lootTiers": [
      {
        "raridade": "comum",
        "itens": [
          {
            "nome": "Platinum Coin",
            "qtd": "0-33",
            "sprite": "img/itens/platinum-coin.gif",
            "link": "https://www.tibiawiki.com.br/Platinum_Coin"
          },
          {
            "nome": "Ultimate Health Potion",
            "qtd": "0-8",
            "sprite": "img/itens/ultimate-health-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Health_Potion"
          },
          {
            "nome": "Ultimate Mana Potion",
            "qtd": "0-7",
            "sprite": "img/itens/ultimate-mana-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Mana_Potion"
          },
          {
            "nome": "Ultimate Spirit Potion",
            "qtd": "0-3",
            "sprite": "img/itens/ultimate-spirit-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Spirit_Potion"
          },
          {
            "nome": "Berserk Potion",
            "qtd": "0-2",
            "sprite": "img/itens/berserk-potion.gif",
            "link": "https://www.tibiawiki.com.br/Berserk_Potion"
          },
          {
            "nome": "Bullseye Potion",
            "qtd": "0-3",
            "sprite": "img/itens/bullseye-potion.gif",
            "link": "https://www.tibiawiki.com.br/Bullseye_Potion"
          },
          {
            "nome": "Mastermind Potion",
            "qtd": "0-3",
            "sprite": "img/itens/mastermind-potion.gif",
            "link": "https://www.tibiawiki.com.br/Mastermind_Potion"
          },
          {
            "nome": "Blue Gem",
            "qtd": "0-3",
            "sprite": "img/itens/blue-gem.gif",
            "link": "https://www.tibiawiki.com.br/Blue_Gem"
          },
          {
            "nome": "Green Gem",
            "qtd": "0-3",
            "sprite": "img/itens/green-gem.gif",
            "link": "https://www.tibiawiki.com.br/Green_Gem"
          },
          {
            "nome": "Red Gem",
            "qtd": "0-3",
            "sprite": "img/itens/red-gem.gif",
            "link": "https://www.tibiawiki.com.br/Red_Gem"
          },
          {
            "nome": "Transcendence Potion",
            "qtd": "0-3",
            "sprite": "img/itens/transcendence-potion.gif",
            "link": "https://www.tibiawiki.com.br/Transcendence_Potion"
          },
          {
            "nome": "Violet Gem",
            "qtd": "0-3",
            "sprite": "img/itens/violet-gem.gif",
            "link": "https://www.tibiawiki.com.br/Violet_Gem"
          },
          {
            "nome": "Yellow Gem",
            "qtd": "0-5",
            "sprite": "img/itens/yellow-gem.gif",
            "link": "https://www.tibiawiki.com.br/Yellow_Gem"
          }
        ]
      },
      {
        "raridade": "semi-raro",
        "itens": [
          {
            "nome": "Giant Amethyst",
            "qtd": null,
            "sprite": "img/itens/giant-amethyst.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Amethyst"
          },
          {
            "nome": "Giant Emerald",
            "qtd": null,
            "sprite": "img/itens/giant-emerald.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Emerald"
          },
          {
            "nome": "Giant Topaz",
            "qtd": null,
            "sprite": "img/itens/giant-topaz.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Topaz"
          }
        ]
      },
      {
        "raridade": "raro",
        "itens": [
          {
            "nome": "Watermelon Tourmaline (Fatia)",
            "qtd": null,
            "sprite": "img/itens/watermelon-tourmaline-fatia.gif",
            "link": "https://www.tibiawiki.com.br/Watermelon_Tourmaline_%28Fatia%29"
          }
        ]
      },
      {
        "raridade": "muito raro",
        "itens": [
          {
            "nome": "Antler-Horn Helmet",
            "qtd": null,
            "sprite": "img/itens/antler-horn-helmet.gif",
            "link": "https://www.tibiawiki.com.br/Antler-Horn_Helmet"
          },
          {
            "nome": "Alchemist's Boots",
            "qtd": null,
            "sprite": "img/itens/alchemists-boots.gif",
            "link": "https://www.tibiawiki.com.br/Alchemist%27s_Boots"
          },
          {
            "nome": "Alchemist's Notepad",
            "qtd": null,
            "sprite": "img/itens/alchemists-notepad.gif",
            "link": "https://www.tibiawiki.com.br/Alchemist%27s_Notepad"
          },
          {
            "nome": "Mutant Bone Boots",
            "qtd": null,
            "sprite": "img/itens/mutant-bone-boots.gif",
            "link": "https://www.tibiawiki.com.br/Mutant_Bone_Boots"
          },
          {
            "nome": "Mutant Bone Kilt",
            "qtd": null,
            "sprite": "img/itens/mutant-bone-kilt.gif",
            "link": "https://www.tibiawiki.com.br/Mutant_Bone_Kilt"
          },
          {
            "nome": "Mutated Skin Armor",
            "qtd": null,
            "sprite": "img/itens/mutated-skin-armor.gif",
            "link": "https://www.tibiawiki.com.br/Mutated_Skin_Armor"
          },
          {
            "nome": "Mutated Skin Legs",
            "qtd": null,
            "sprite": "img/itens/mutated-skin-legs.gif",
            "link": "https://www.tibiawiki.com.br/Mutated_Skin_Legs"
          },
          {
            "nome": "Stitched Mutant Hide Legs",
            "qtd": null,
            "sprite": "img/itens/stitched-mutant-hide-legs.gif",
            "link": "https://www.tibiawiki.com.br/Stitched_Mutant_Hide_Legs"
          },
          {
            "nome": "Mutant Hide Trousers",
            "qtd": null,
            "sprite": "img/itens/mutant-hide-trousers.gif",
            "link": "https://www.tibiawiki.com.br/Mutant_Hide_Trousers"
          }
        ]
      }
    ],
    "lootStatus": "ok",
    "mecanica": [
      "Até 5 jogadores. Entre com [[Might Ring]] e [[Sacred Tree Amulet]]; mages com Magic Shield. [[Doctor Marrow]] dá críticos de até 10.000 e causa drunk, root e fear (contra o fear, [[Magic Wall Rune|Magic Wall]]).",
      "Etapa 1: o knight puxa o Marrow para um canto e joga [[Fire Bomb Rune|Fire Bomb]] no pé dele. O time mata as 4 [[Antenna (Criatura)|Antennas]] primeiro, porque elas curam o boss. Depois bate no Marrow até ~60%: ele foge e solta [[The Monster]].",
      "Etapa 2: o Monster começa imune, com contador 20. Destrua os [[Alchemistical Container|Alchemistical Containers]]: surge uma poça na frente, e cada passada dele por uma poça baixa o contador em 1 (que volta a subir com o tempo). Ele aplica Lesser Hex no blocker.",
      "Use [[Magic Wall Rune|Magic Wall]] e [[Wild Growth Rune|Wild Growth]] para guiá-lo (ele quebra rápido). Evite o ataque em reta e não entre na jaula. Com contador abaixo de ~7, foco total no dano."
    ],
    "spritesMecanica": {
      "Might Ring": "img/criaturas/might-ring.gif",
      "Sacred Tree Amulet": "img/criaturas/sacred-tree-amulet.gif",
      "Doctor Marrow": "img/criaturas/doctor-marrow.gif",
      "Magic Wall Rune": "img/criaturas/magic-wall-rune.gif",
      "Fire Bomb Rune": "img/criaturas/fire-bomb-rune.gif",
      "Antenna (Criatura)": "img/criaturas/antenna-criatura.gif",
      "The Monster": "img/criaturas/the-monster.gif",
      "Alchemistical Container": "img/criaturas/alchemistical-container.gif",
      "Wild Growth Rune": "img/criaturas/wild-growth-rune.gif"
    },
    "fases": [
      {
        "nome": "Doctor Marrow",
        "dica": "Etapa 1: críticos de até 10.000; com ~60% de vida ele foge e solta o Monster.",
        "hp": null,
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/doctor-marrow.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 1,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo",
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Antenna (Criatura)",
        "dica": "Mate as 4 primeiro: curam o Marrow.",
        "hpAjuste": "10000",
        "hp": "10000",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/antenna-criatura.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo",
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Alchemistical Container",
        "dica": "Destrua para criar a poça que baixa o contador do Monster.",
        "hp": "1000",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/alchemistical-container.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo",
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      }
    ],
    "link": "https://www.tibiawiki.com.br/The_Monster",
    "pendencias": [
      "HP não informado (ou incerto) na wiki: ?"
    ]
  },
  {
    "nome": "Magma Bubble",
    "local": "Gnomprona (Sparkling Pools)",
    "grupo": "Avulsos",
    "ordem": 8,
    "quest": "Primal Ordeal Quest",
    "level": {
      "quest": "Primal Ordeal Quest",
      "link": "https://www.tibiawiki.com.br/Primal_Ordeal_Quest",
      "minimo": "250",
      "recomendado": "700"
    },
    "hp": "150000",
    "xp": "80000",
    "tipo": "archfoe",
    "sprite": "img/bosses/magma-bubble.gif",
    "elementos": {
      "fisico": "100%",
      "terra": "0%",
      "fogo": "100%",
      "morte": "100%",
      "energia": "100%",
      "sagrado": "100%",
      "gelo": "100%",
      "cura": "100%"
    },
    "imunidades": [
      "Invisibility",
      "Paralysis"
    ],
    "podeSerPuxado": false,
    "empurraObjetos": true,
    "passaPor": [],
    "rotacaoAjustes": {
      "nota": "Use alvo único no boss na etapa 3; área nas End of Days."
    },
    "ataque": {
      "sorcerer": {
        "elementos": [
          "energia",
          "morte"
        ],
        "alternativas": [
          "fogo"
        ]
      },
      "druid": {
        "elementos": [
          "gelo"
        ],
        "alternativas": []
      },
      "paladin": {
        "elementos": [
          "sagrado"
        ],
        "alternativas": [
          "fisico"
        ]
      },
      "knight": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      },
      "monk": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      }
    },
    "defesa": {
      "elementos": [
        "fogo"
      ],
      "melee": true,
      "nota": "Unchained Fires e o próprio boss: fogo. Na etapa 1 o calor (agony) não tem proteção."
    },
    "rotacao": {
      "knight": {
        "passos": [
          {
            "magia": "Annihilation",
            "palavras": "exori gran ico",
            "obs": "sempre que sair da recarga (30s)",
            "icone": "img/magias/annihilation.gif"
          },
          {
            "magia": "Fierce Berserk",
            "palavras": "exori gran",
            "obs": "a cada 6s",
            "icone": "img/magias/fierce-berserk.gif"
          },
          {
            "magia": "Front Sweep",
            "palavras": "exori min",
            "obs": "a cada 6s, alternando com o Fierce Berserk",
            "icone": "img/magias/front-sweep.gif"
          },
          {
            "magia": "Brutal Strike",
            "palavras": "exori ico",
            "obs": "nos intervalos (ou Shield Bash, exori ico scu, se usar escudo)",
            "icone": "img/magias/brutal-strike.gif"
          }
        ],
        "nota": "Físico 100%. Stance: Blood Rage para dano; Protector se for o blocker."
      },
      "paladin": {
        "passos": [
          {
            "magia": "Divine Grenade",
            "palavras": "exevo tempo mas san",
            "obs": "a cada 26s (level 300+)",
            "icone": "img/magias/divine-grenade.gif"
          },
          {
            "magia": "Divine Barrage",
            "palavras": "exori dir san",
            "obs": "a cada 4s",
            "icone": "img/magias/divine-barrage.gif"
          },
          {
            "magia": "Ethereal Barrage",
            "palavras": "exori dir moe",
            "obs": "a cada 4s, alternando com a Divine Barrage",
            "icone": "img/magias/ethereal-barrage.gif"
          },
          {
            "magia": "Divine Missile",
            "palavras": "exori san",
            "obs": "nos intervalos",
            "icone": "img/magias/divine-missile.gif"
          }
        ],
        "nota": "Holy 100%, físico 100%. Ataque básico com arma o tempo todo. Stance: Sharpshooter."
      },
      "sorcerer": {
        "passos": [
          {
            "magia": "Ultimate Energy Strike",
            "palavras": "exori max vis",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-energy-strike.gif"
          },
          {
            "magia": "Great Energy Beam",
            "palavras": "exevo gran vis lux",
            "obs": "a cada 6s, com o boss na reta (wave/beam)",
            "icone": "img/magias/great-energy-beam.gif"
          },
          {
            "magia": "Great Death Beam",
            "palavras": "exevo max mort",
            "obs": "a cada 6s, com o boss na reta (beam)",
            "icone": "img/magias/great-death-beam.gif"
          },
          {
            "magia": "Energy Wave",
            "palavras": "exevo vis hur",
            "obs": "a cada 8s, com o boss na reta (wave/beam)",
            "icone": "img/magias/energy-wave.gif"
          },
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "a cada 2s, sempre que nada mais forte estiver pronto",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Strong Energy Strike",
            "palavras": "exori gran vis",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/strong-energy-strike.gif"
          },
          {
            "magia": "Death Echo",
            "palavras": "exevo mort ora",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/death-echo.gif"
          },
          {
            "magia": "Lightning",
            "palavras": "exori amp vis",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/lightning.gif"
          }
        ],
        "nota": "Elemento: energia (100%). Stance: Master of Thunder."
      },
      "druid": {
        "passos": [
          {
            "magia": "Ultimate Ice Strike",
            "palavras": "exori max frigo",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-ice-strike.gif"
          },
          {
            "magia": "Strong Ice Wave",
            "palavras": "exevo gran frigo hur",
            "obs": "a cada 4s, com o boss na reta (wave/beam)",
            "icone": "img/magias/strong-ice-wave.gif"
          },
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "a cada 2s, sempre que nada mais forte estiver pronto",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Strong Ice Strike",
            "palavras": "exori gran frigo",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/strong-ice-strike.gif"
          },
          {
            "magia": "Forked Glacier",
            "palavras": "exevo fur frigo",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/forked-glacier.gif"
          }
        ],
        "nota": "Elemento: gelo (100%). Stance: Elemental Synthesis."
      },
      "monk": {
        "passos": [
          {
            "magia": "Thousand Fist Blows",
            "palavras": "exori mas amp pug",
            "obs": "builder, a cada 8s",
            "icone": "img/magias/thousand-fist-blows.gif"
          },
          {
            "magia": "Mystic Repulse",
            "palavras": "exori amp pug",
            "obs": "builder, a cada 8s (alcance 7)",
            "icone": "img/magias/mystic-repulse.gif"
          },
          {
            "magia": "Double Jab",
            "palavras": "exori pug",
            "obs": "builder, a cada 4s, até juntar 5 de Harmony",
            "icone": "img/magias/double-jab.gif"
          },
          {
            "magia": "Devastating Knockout",
            "palavras": "exori gran nia",
            "obs": "spender com 5 de Harmony (a cada 8s, alcance 7)",
            "icone": "img/magias/devastating-knockout.gif"
          },
          {
            "magia": "Forceful Uppercut",
            "palavras": "exori gran pug",
            "obs": "sempre que sair da recarga (60s)",
            "icone": "img/magias/forceful-uppercut.gif"
          }
        ],
        "nota": "Físico 100%. Gaste a Harmony só com 5 pontos (+112% de dano). Abaixo do level 125 use Greater Tiger Clash (exori nia) como spender."
      },
      "nota": "Use alvo único no boss na etapa 3; área nas End of Days."
    },
    "tokens": [],
    "lootTiers": [
      {
        "raridade": "comum",
        "itens": [
          {
            "nome": "Crystal Coin",
            "qtd": "0-4",
            "sprite": "img/itens/crystal-coin.gif",
            "link": "https://www.tibiawiki.com.br/Crystal_Coin"
          },
          {
            "nome": "Ultimate Health Potion",
            "qtd": "0-15",
            "sprite": "img/itens/ultimate-health-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Health_Potion"
          },
          {
            "nome": "Ultimate Mana Potion",
            "qtd": "0-17",
            "sprite": "img/itens/ultimate-mana-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Mana_Potion"
          },
          {
            "nome": "Ultimate Spirit Potion",
            "qtd": "0-14",
            "sprite": "img/itens/ultimate-spirit-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Spirit_Potion"
          },
          {
            "nome": "Berserk Potion",
            "qtd": "0-6",
            "sprite": "img/itens/berserk-potion.gif",
            "link": "https://www.tibiawiki.com.br/Berserk_Potion"
          },
          {
            "nome": "Bullseye Potion",
            "qtd": "0-6",
            "sprite": "img/itens/bullseye-potion.gif",
            "link": "https://www.tibiawiki.com.br/Bullseye_Potion"
          },
          {
            "nome": "Mastermind Potion",
            "qtd": "0-6",
            "sprite": "img/itens/mastermind-potion.gif",
            "link": "https://www.tibiawiki.com.br/Mastermind_Potion"
          },
          {
            "nome": "Transcendence Potion",
            "qtd": "0-7",
            "sprite": "img/itens/transcendence-potion.gif",
            "link": "https://www.tibiawiki.com.br/Transcendence_Potion"
          }
        ]
      },
      {
        "raridade": "semi-raro",
        "itens": [
          {
            "nome": "Giant Amethyst",
            "qtd": "0-3",
            "sprite": "img/itens/giant-amethyst.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Amethyst"
          },
          {
            "nome": "Giant Emerald",
            "qtd": "0-2",
            "sprite": "img/itens/giant-emerald.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Emerald"
          },
          {
            "nome": "Giant Sapphire",
            "qtd": "0-2",
            "sprite": "img/itens/giant-sapphire.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Sapphire"
          },
          {
            "nome": "Giant Topaz",
            "qtd": "0-3",
            "sprite": "img/itens/giant-topaz.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Topaz"
          }
        ]
      },
      {
        "raridade": "raro",
        "itens": [
          {
            "nome": "Fiery Tear",
            "qtd": null,
            "sprite": "img/itens/fiery-tear.gif",
            "link": "https://www.tibiawiki.com.br/Fiery_Tear"
          },
          {
            "nome": "Firefighting Axe",
            "qtd": null,
            "sprite": "img/itens/firefighting-axe.gif",
            "link": "https://www.tibiawiki.com.br/Firefighting_Axe"
          },
          {
            "nome": "Portable Flame",
            "qtd": null,
            "sprite": "img/itens/portable-flame.gif",
            "link": "https://www.tibiawiki.com.br/Portable_Flame"
          },
          {
            "nome": "Smoldering Eye",
            "qtd": null,
            "sprite": "img/itens/smoldering-eye.gif",
            "link": "https://www.tibiawiki.com.br/Smoldering_Eye"
          }
        ]
      },
      {
        "raridade": "muito raro",
        "itens": [
          {
            "nome": "Alicorn Headguard",
            "qtd": null,
            "sprite": "img/itens/alicorn-headguard.gif",
            "link": "https://www.tibiawiki.com.br/Alicorn_Headguard"
          },
          {
            "nome": "Alicorn Quiver",
            "qtd": null,
            "sprite": "img/itens/alicorn-quiver.gif",
            "link": "https://www.tibiawiki.com.br/Alicorn_Quiver"
          },
          {
            "nome": "Alicorn Ring",
            "qtd": null,
            "sprite": "img/itens/alicorn-ring.gif",
            "link": "https://www.tibiawiki.com.br/Alicorn_Ring"
          },
          {
            "nome": "Arboreal Crown",
            "qtd": null,
            "sprite": "img/itens/arboreal-crown.gif",
            "link": "https://www.tibiawiki.com.br/Arboreal_Crown"
          },
          {
            "nome": "Arboreal Tome",
            "qtd": null,
            "sprite": "img/itens/arboreal-tome.gif",
            "link": "https://www.tibiawiki.com.br/Arboreal_Tome"
          },
          {
            "nome": "Arboreal Ring",
            "qtd": null,
            "sprite": "img/itens/arboreal-ring.gif",
            "link": "https://www.tibiawiki.com.br/Arboreal_Ring"
          },
          {
            "nome": "Arcanomancer Folio",
            "qtd": null,
            "sprite": "img/itens/arcanomancer-folio.gif",
            "link": "https://www.tibiawiki.com.br/Arcanomancer_Folio"
          },
          {
            "nome": "Arcanomancer Regalia",
            "qtd": null,
            "sprite": "img/itens/arcanomancer-regalia.gif",
            "link": "https://www.tibiawiki.com.br/Arcanomancer_Regalia"
          },
          {
            "nome": "Arcanomancer Sigil",
            "qtd": null,
            "sprite": "img/itens/arcanomancer-sigil.gif",
            "link": "https://www.tibiawiki.com.br/Arcanomancer_Sigil"
          },
          {
            "nome": "Ethereal Coned Hat",
            "qtd": null,
            "sprite": "img/itens/ethereal-coned-hat.gif",
            "link": "https://www.tibiawiki.com.br/Ethereal_Coned_Hat"
          },
          {
            "nome": "Ethereal Ring",
            "qtd": null,
            "sprite": "img/itens/ethereal-ring.gif",
            "link": "https://www.tibiawiki.com.br/Ethereal_Ring"
          },
          {
            "nome": "Spiritthorn Armor",
            "qtd": null,
            "sprite": "img/itens/spiritthorn-armor.gif",
            "link": "https://www.tibiawiki.com.br/Spiritthorn_Armor"
          },
          {
            "nome": "Spiritthorn Helmet",
            "qtd": null,
            "sprite": "img/itens/spiritthorn-helmet.gif",
            "link": "https://www.tibiawiki.com.br/Spiritthorn_Helmet"
          },
          {
            "nome": "Spiritthorn Ring",
            "qtd": null,
            "sprite": "img/itens/spiritthorn-ring.gif",
            "link": "https://www.tibiawiki.com.br/Spiritthorn_Ring"
          }
        ]
      }
    ],
    "lootStatus": "ok",
    "mecanica": [
      "Até 5 jogadores. Proteja o Gnomish Crystallomancer: se ele morrer, a luta falha.",
      "Etapa 1: destruir 3 [[Magma Crystal|Magma Crystals]], que ficam em zona superaquecida (o fogo tira 60% do HP por segundo, sem mitigação). Para entrar é preciso escudo:",
      "- Bata numa [[The End of Days|End of Days]] até metade da vida: ela se cura e solta Lava Creatures. Ao morrer, elas deixam [[Charged Flame|Charged Flames]].",
      "- Pegue a Charged Flame, use num cristal quando ele ficar verde e pise na chama roxa que surge: +5 pontos de escudo. Junte ~20 pontos em 4 jogadores, entre, quebre o cristal e guarde 5 pontos para sair.",
      "Etapa 2: 6 End of Days (sem cura nem Lava Creatures). Junte as 6 viradas para a parede ou ao sul do cristal central, para os magos usarem wave.",
      "Etapa 3: Magma Bubble (não anda) com 4 [[Unchained Fire|Unchained Fires]] constantes: use alvo único no boss e não deixe os Fires virados para ele (as waves deles curam o boss). Shooters com proteção de fogo e na diagonal."
    ],
    "spritesMecanica": {
      "Magma Crystal": "img/criaturas/magma-crystal.gif",
      "The End of Days": "img/criaturas/the-end-of-days.gif",
      "Charged Flame": "img/criaturas/charged-flame.gif",
      "Unchained Fire": "img/criaturas/unchained-fire.gif"
    },
    "fases": [
      {
        "nome": "Magma Crystal",
        "dica": "Etapa 1: imune a fogo. Só dá para chegar nele com pontos de escudo.",
        "elementosAjuste": {
          "fogo": "0%",
          "energia": "90%"
        },
        "hpAjuste": "22000",
        "hp": "22000",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "0%",
          "morte": "100%",
          "energia": "90%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/magma-crystal.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Death Beam",
              "palavras": "exevo max mort",
              "icone": "img/magias/great-death-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "The End of Days",
        "dica": "Etapas 1 e 2: fogo CURA. Na etapa 2 são 6: junte e use área.",
        "elementosAjuste": {
          "fogo": "-100%",
          "energia": "95%"
        },
        "hpAjuste": "90000",
        "hp": "90000",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "-100%",
          "morte": "100%",
          "energia": "95%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/the-end-of-days.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Death Beam",
              "palavras": "exevo max mort",
              "icone": "img/magias/great-death-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 1,
        "elemento": {
          "sorcerer": [
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Unchained Fire",
        "dica": "Etapa 3: 4 sempre; não deixe virados para o boss (as waves curam ele).",
        "hp": null,
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/unchained-fire.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo",
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      }
    ],
    "link": "https://www.tibiawiki.com.br/Magma_Bubble",
    "pendencias": []
  },
  {
    "nome": "The Pale Worm",
    "local": "Zarganash",
    "grupo": "Avulsos",
    "ordem": 9,
    "quest": "Feaster of Souls Quest",
    "level": {
      "quest": "Feaster of Souls Quest",
      "link": "https://www.tibiawiki.com.br/Feaster_of_Souls_Quest",
      "minimo": "250",
      "recomendado": "350+"
    },
    "hp": "435000",
    "xp": "128000",
    "tipo": "archfoe",
    "sprite": "img/bosses/the-pale-worm.gif",
    "elementos": {
      "fisico": "5%",
      "terra": "5%",
      "fogo": "5%",
      "morte": "5%",
      "energia": "5%",
      "sagrado": "5%",
      "gelo": "5%",
      "cura": "100%"
    },
    "imunidades": [
      "Invisibility",
      "Paralysis"
    ],
    "podeSerPuxado": false,
    "empurraObjetos": false,
    "passaPor": [
      "Fire",
      "Energy",
      "Poison"
    ],
    "rotacaoAjustes": {
      "nota": "Bata no A Weak Spot (andar de baixo): o dano passa para o boss. No boss em si o dano é mínimo (5%)."
    },
    "ataque": {
      "sorcerer": {
        "elementos": [
          "energia"
        ],
        "alternativas": [
          "fogo"
        ]
      },
      "druid": {
        "elementos": [
          "gelo"
        ],
        "alternativas": [
          "terra"
        ]
      },
      "paladin": {
        "elementos": [
          "sagrado"
        ],
        "alternativas": [
          "fisico"
        ]
      },
      "knight": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      },
      "monk": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      }
    },
    "defesa": {
      "elementos": [
        "morte",
        "terra"
      ],
      "melee": true,
      "nota": "Embaixo, death que aumenta a cada turno; as Greed Worms explodem em terra (750)."
    },
    "rotacao": {
      "knight": {
        "passos": [
          {
            "magia": "Annihilation",
            "palavras": "exori gran ico",
            "obs": "sempre que sair da recarga (30s)",
            "icone": "img/magias/annihilation.gif"
          },
          {
            "magia": "Fierce Berserk",
            "palavras": "exori gran",
            "obs": "a cada 6s",
            "icone": "img/magias/fierce-berserk.gif"
          },
          {
            "magia": "Front Sweep",
            "palavras": "exori min",
            "obs": "a cada 6s, alternando com o Fierce Berserk",
            "icone": "img/magias/front-sweep.gif"
          },
          {
            "magia": "Brutal Strike",
            "palavras": "exori ico",
            "obs": "nos intervalos (ou Shield Bash, exori ico scu, se usar escudo)",
            "icone": "img/magias/brutal-strike.gif"
          }
        ],
        "nota": "Físico 5%. Stance: Blood Rage para dano; Protector se for o blocker."
      },
      "paladin": {
        "passos": [
          {
            "magia": "Divine Grenade",
            "palavras": "exevo tempo mas san",
            "obs": "a cada 26s (level 300+)",
            "icone": "img/magias/divine-grenade.gif"
          },
          {
            "magia": "Divine Barrage",
            "palavras": "exori dir san",
            "obs": "a cada 4s",
            "icone": "img/magias/divine-barrage.gif"
          },
          {
            "magia": "Ethereal Barrage",
            "palavras": "exori dir moe",
            "obs": "a cada 4s, alternando com a Divine Barrage",
            "icone": "img/magias/ethereal-barrage.gif"
          },
          {
            "magia": "Divine Missile",
            "palavras": "exori san",
            "obs": "nos intervalos",
            "icone": "img/magias/divine-missile.gif"
          }
        ],
        "nota": "Holy 5%, físico 5%. Ataque básico com arma o tempo todo. Stance: Sharpshooter."
      },
      "sorcerer": {
        "passos": [
          {
            "magia": "Ultimate Energy Strike",
            "palavras": "exori max vis",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-energy-strike.gif"
          },
          {
            "magia": "Great Energy Beam",
            "palavras": "exevo gran vis lux",
            "obs": "a cada 6s, com o boss na reta (wave/beam)",
            "icone": "img/magias/great-energy-beam.gif"
          },
          {
            "magia": "Energy Wave",
            "palavras": "exevo vis hur",
            "obs": "a cada 8s, com o boss na reta (wave/beam)",
            "icone": "img/magias/energy-wave.gif"
          },
          {
            "magia": "Strong Energy Strike",
            "palavras": "exori gran vis",
            "obs": "a cada 8s",
            "icone": "img/magias/strong-energy-strike.gif"
          },
          {
            "magia": "Lightning",
            "palavras": "exori amp vis",
            "obs": "a cada 8s; pula para mais 2 alvos",
            "icone": "img/magias/lightning.gif"
          },
          {
            "magia": "Energy Strike",
            "palavras": "exori vis",
            "obs": "nos intervalos; sem SD neste boss",
            "icone": "img/magias/energy-strike.gif"
          }
        ],
        "nota": "Elemento: energia (5%). Stance: Master of Thunder."
      },
      "druid": {
        "passos": [
          {
            "magia": "Ultimate Ice Strike",
            "palavras": "exori max frigo",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-ice-strike.gif"
          },
          {
            "magia": "Strong Ice Wave",
            "palavras": "exevo gran frigo hur",
            "obs": "a cada 4s, com o boss na reta (wave/beam)",
            "icone": "img/magias/strong-ice-wave.gif"
          },
          {
            "magia": "Strong Ice Strike",
            "palavras": "exori gran frigo",
            "obs": "a cada 8s",
            "icone": "img/magias/strong-ice-strike.gif"
          },
          {
            "magia": "Forked Glacier",
            "palavras": "exevo fur frigo",
            "obs": "a cada 6s; pula para até 6 alvos",
            "icone": "img/magias/forked-glacier.gif"
          },
          {
            "magia": "Ice Strike",
            "palavras": "exori frigo",
            "obs": "nos intervalos; sem SD neste boss",
            "icone": "img/magias/ice-strike.gif"
          }
        ],
        "nota": "Elemento: gelo (5%). Stance: Elemental Synthesis."
      },
      "monk": {
        "passos": [
          {
            "magia": "Thousand Fist Blows",
            "palavras": "exori mas amp pug",
            "obs": "builder, a cada 8s",
            "icone": "img/magias/thousand-fist-blows.gif"
          },
          {
            "magia": "Mystic Repulse",
            "palavras": "exori amp pug",
            "obs": "builder, a cada 8s (alcance 7)",
            "icone": "img/magias/mystic-repulse.gif"
          },
          {
            "magia": "Double Jab",
            "palavras": "exori pug",
            "obs": "builder, a cada 4s, até juntar 5 de Harmony",
            "icone": "img/magias/double-jab.gif"
          },
          {
            "magia": "Devastating Knockout",
            "palavras": "exori gran nia",
            "obs": "spender com 5 de Harmony (a cada 8s, alcance 7)",
            "icone": "img/magias/devastating-knockout.gif"
          },
          {
            "magia": "Forceful Uppercut",
            "palavras": "exori gran pug",
            "obs": "sempre que sair da recarga (60s)",
            "icone": "img/magias/forceful-uppercut.gif"
          }
        ],
        "nota": "Físico 5%. Gaste a Harmony só com 5 pontos (+112% de dano). Abaixo do level 125 use Greater Tiger Clash (exori nia) como spender."
      },
      "nota": "Bata no A Weak Spot (andar de baixo): o dano passa para o boss. No boss em si o dano é mínimo (5%)."
    },
    "tokens": [],
    "lootTiers": [
      {
        "raridade": "comum",
        "itens": [
          {
            "nome": "Crystal Coin",
            "qtd": "0-35",
            "sprite": "img/itens/crystal-coin.gif",
            "link": "https://www.tibiawiki.com.br/Crystal_Coin"
          },
          {
            "nome": "Mastermind Potion",
            "qtd": "0-10",
            "sprite": "img/itens/mastermind-potion.gif",
            "link": "https://www.tibiawiki.com.br/Mastermind_Potion"
          },
          {
            "nome": "Supreme Health Potion",
            "qtd": "0-6",
            "sprite": "img/itens/supreme-health-potion.gif",
            "link": "https://www.tibiawiki.com.br/Supreme_Health_Potion"
          },
          {
            "nome": "Transcendence Potion",
            "qtd": "0-2",
            "sprite": "img/itens/transcendence-potion.gif",
            "link": "https://www.tibiawiki.com.br/Transcendence_Potion"
          },
          {
            "nome": "Ultimate Spirit Potion",
            "qtd": "0-10",
            "sprite": "img/itens/ultimate-spirit-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Spirit_Potion"
          }
        ]
      },
      {
        "raridade": "semi-raro",
        "itens": [
          {
            "nome": "Angel Figurine",
            "qtd": null,
            "sprite": "img/itens/angel-figurine.gif",
            "link": "https://www.tibiawiki.com.br/Angel_Figurine"
          },
          {
            "nome": "Diamond",
            "qtd": null,
            "sprite": "img/itens/diamond.gif",
            "link": "https://www.tibiawiki.com.br/Diamond"
          },
          {
            "nome": "Moonstone",
            "qtd": null,
            "sprite": "img/itens/moonstone.gif",
            "link": "https://www.tibiawiki.com.br/Moonstone"
          },
          {
            "nome": "Pale Worm's Scalp",
            "qtd": null,
            "sprite": "img/itens/pale-worms-scalp.gif",
            "link": "https://www.tibiawiki.com.br/Pale_Worm%27s_Scalp"
          },
          {
            "nome": "Silver Hand Mirror",
            "qtd": null,
            "sprite": "img/itens/silver-hand-mirror.gif",
            "link": "https://www.tibiawiki.com.br/Silver_Hand_Mirror"
          },
          {
            "nome": "White Gem",
            "qtd": null,
            "sprite": "img/itens/white-gem.gif",
            "link": "https://www.tibiawiki.com.br/White_Gem"
          }
        ]
      },
      {
        "raridade": "raro",
        "itens": [
          {
            "nome": "Fabulous Legs",
            "qtd": null,
            "sprite": "img/itens/fabulous-legs.gif",
            "link": "https://www.tibiawiki.com.br/Fabulous_Legs"
          },
          {
            "nome": "Jade Legs",
            "qtd": null,
            "sprite": "img/itens/jade-legs.gif",
            "link": "https://www.tibiawiki.com.br/Jade_Legs"
          },
          {
            "nome": "Ghost Chestplate",
            "qtd": null,
            "sprite": "img/itens/ghost-chestplate.gif",
            "link": "https://www.tibiawiki.com.br/Ghost_Chestplate"
          },
          {
            "nome": "Pair of Nightmare Boots",
            "qtd": null,
            "sprite": "img/itens/pair-of-nightmare-boots.gif",
            "link": "https://www.tibiawiki.com.br/Pair_of_Nightmare_Boots"
          },
          {
            "nome": "Phantasmal Axe",
            "qtd": null,
            "sprite": "img/itens/phantasmal-axe.gif",
            "link": "https://www.tibiawiki.com.br/Phantasmal_Axe"
          },
          {
            "nome": "Ring of Souls",
            "qtd": null,
            "sprite": "img/itens/ring-of-souls.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Souls"
          },
          {
            "nome": "Soulful Legs",
            "qtd": null,
            "sprite": "img/itens/soulful-legs.gif",
            "link": "https://www.tibiawiki.com.br/Soulful_Legs"
          },
          {
            "nome": "Spectral Scrap of Cloth",
            "qtd": null,
            "sprite": "img/itens/spectral-scrap-of-cloth.gif",
            "link": "https://www.tibiawiki.com.br/Spectral_Scrap_of_Cloth"
          }
        ]
      },
      {
        "raridade": "muito raro",
        "itens": [
          {
            "nome": "Ghost Backpack",
            "qtd": null,
            "sprite": "img/itens/ghost-backpack.gif",
            "link": "https://www.tibiawiki.com.br/Ghost_Backpack"
          }
        ]
      }
    ],
    "lootStatus": "ok",
    "mecanica": [
      "Antes: labirinto com 2 Death Tolls por pessoa (gastos ao entrar). Pisar em teia, levar o berserk dos Empties ou passar nas barreiras de energia manda de volta ao início. Magos vão primeiro e deixam [[Demon Skeleton|Demon Skeletons]].",
      "Na sala todos ficam com Greater Hex (HP máximo em 40%, menos dano e cura). Knights e paladins usam a [[Soulforged Lantern]] (anula o Hex na luta toda; 20% de chance de quebrar). Mages não precisam.",
      "Na sala principal o boss é quase imortal: juntem e matem as [[Greed Worm|Greed Worms]] perto dele (cada uma explode com 750 de terra ao morrer) até surgir a [[Hunger Worm]].",
      "Mate a Hunger Worm: abre um buraco por ~10s. Todos descem (knight ou paladin primeiro) e batem no [[A Weak Spot]], que passa o dano ao boss.",
      "Embaixo, o dano de death sobe a cada turno: fiquem 10-15s (até o dano pular de 1k para 2k) e subam pela rampa. Repita. Limite de 25 minutos."
    ],
    "spritesMecanica": {
      "Demon Skeleton": "img/criaturas/demon-skeleton.gif",
      "Soulforged Lantern": "img/criaturas/soulforged-lantern.gif",
      "Greed Worm": "img/criaturas/greed-worm.gif",
      "Hunger Worm": "img/criaturas/hunger-worm.gif",
      "A Weak Spot": "img/criaturas/a-weak-spot.gif"
    },
    "fases": [
      {
        "nome": "Greed Worm",
        "dica": "Junte e mate perto do boss até surgir a Hunger Worm. Explodem com 750 de terra ao morrer.",
        "hp": null,
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/greed-worm.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo",
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Hunger Worm",
        "dica": "Mate: abre um buraco por ~10s para o andar de baixo.",
        "hp": null,
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/hunger-worm.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 0.5,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo",
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "A Weak Spot",
        "dica": "Embaixo: todo o dano aqui vai para o boss. Fique 10-15s e suba.",
        "hp": "435000",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "100%",
          "morte": "100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/a-weak-spot.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 1,
        "elemento": {
          "sorcerer": [
            "energia",
            "fogo",
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      }
    ],
    "link": "https://www.tibiawiki.com.br/The_Pale_Worm",
    "pendencias": []
  },
  {
    "nome": "Urmahlullu the Weakened",
    "local": "Issavi (Kilmaresh, caverna ao sul da cidade)",
    "grupo": "Avulsos",
    "ordem": 99,
    "quest": "Kilmaresh Quest",
    "level": {
      "quest": "Kilmaresh Quest",
      "link": "https://www.tibiawiki.com.br/Kilmaresh_Quest",
      "minimo": null,
      "recomendado": "350+"
    },
    "hp": "500000",
    "xp": "55000",
    "tipo": "archfoe",
    "sprite": "img/bosses/urmahlullu-the-weakened.gif",
    "elementos": {
      "fisico": "100%",
      "terra": "100%",
      "fogo": "0%",
      "morte": "100%",
      "energia": "90%",
      "sagrado": "100%",
      "gelo": "100%",
      "cura": "100%"
    },
    "imunidades": [
      "Invisibility",
      "Paralysis"
    ],
    "podeSerPuxado": false,
    "empurraObjetos": true,
    "passaPor": [
      "Fire",
      "Energy",
      "Poison"
    ],
    "rotacaoAjustes": {
      "nota": "Todas as formas são imunes a fogo; a Wisdom também a death. A wiki BR mostra fogo neutro, mas a wiki em inglês mostra imunidade."
    },
    "ataque": {
      "sorcerer": {
        "elementos": [
          "energia",
          "morte"
        ],
        "alternativas": []
      },
      "druid": {
        "elementos": [
          "gelo"
        ],
        "alternativas": [
          "terra"
        ]
      },
      "paladin": {
        "elementos": [
          "sagrado"
        ],
        "alternativas": [
          "fisico"
        ]
      },
      "knight": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      },
      "monk": {
        "elementos": [
          "fisico"
        ],
        "alternativas": []
      }
    },
    "defesa": {
      "elementos": [],
      "melee": true,
      "nota": "A wiki não registra o elemento do dano (boss corpo a corpo): proteção física no blocker."
    },
    "rotacao": {
      "knight": {
        "passos": [
          {
            "magia": "Annihilation",
            "palavras": "exori gran ico",
            "obs": "sempre que sair da recarga (30s)",
            "icone": "img/magias/annihilation.gif"
          },
          {
            "magia": "Fierce Berserk",
            "palavras": "exori gran",
            "obs": "a cada 6s",
            "icone": "img/magias/fierce-berserk.gif"
          },
          {
            "magia": "Front Sweep",
            "palavras": "exori min",
            "obs": "a cada 6s, alternando com o Fierce Berserk",
            "icone": "img/magias/front-sweep.gif"
          },
          {
            "magia": "Brutal Strike",
            "palavras": "exori ico",
            "obs": "nos intervalos (ou Shield Bash, exori ico scu, se usar escudo)",
            "icone": "img/magias/brutal-strike.gif"
          }
        ],
        "nota": "Físico 100%. Stance: Blood Rage para dano; Protector se for o blocker."
      },
      "paladin": {
        "passos": [
          {
            "magia": "Divine Grenade",
            "palavras": "exevo tempo mas san",
            "obs": "a cada 26s (level 300+)",
            "icone": "img/magias/divine-grenade.gif"
          },
          {
            "magia": "Divine Barrage",
            "palavras": "exori dir san",
            "obs": "a cada 4s",
            "icone": "img/magias/divine-barrage.gif"
          },
          {
            "magia": "Ethereal Barrage",
            "palavras": "exori dir moe",
            "obs": "a cada 4s, alternando com a Divine Barrage",
            "icone": "img/magias/ethereal-barrage.gif"
          },
          {
            "magia": "Divine Missile",
            "palavras": "exori san",
            "obs": "nos intervalos",
            "icone": "img/magias/divine-missile.gif"
          }
        ],
        "nota": "Holy 100%, físico 100%. Ataque básico com arma o tempo todo. Stance: Sharpshooter."
      },
      "sorcerer": {
        "passos": [
          {
            "magia": "Ultimate Energy Strike",
            "palavras": "exori max vis",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-energy-strike.gif"
          },
          {
            "magia": "Great Death Beam",
            "palavras": "exevo max mort",
            "obs": "a cada 6s, com o boss na reta (beam)",
            "icone": "img/magias/great-death-beam.gif"
          },
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "a cada 2s, sempre que nada mais forte estiver pronto",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Great Energy Beam",
            "palavras": "exevo gran vis lux",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/great-energy-beam.gif"
          },
          {
            "magia": "Energy Wave",
            "palavras": "exevo vis hur",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/energy-wave.gif"
          },
          {
            "magia": "Strong Energy Strike",
            "palavras": "exori gran vis",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/strong-energy-strike.gif"
          },
          {
            "magia": "Death Echo",
            "palavras": "exevo mort ora",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/death-echo.gif"
          },
          {
            "magia": "Lightning",
            "palavras": "exori amp vis",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/lightning.gif"
          }
        ],
        "nota": "Elemento: energia (90%). Stance: Master of Thunder."
      },
      "druid": {
        "passos": [
          {
            "magia": "Ultimate Ice Strike",
            "palavras": "exori max frigo",
            "obs": "na recarga (30s)",
            "icone": "img/magias/ultimate-ice-strike.gif"
          },
          {
            "magia": "Strong Ice Wave",
            "palavras": "exevo gran frigo hur",
            "obs": "a cada 4s, com o boss na reta (wave/beam)",
            "icone": "img/magias/strong-ice-wave.gif"
          },
          {
            "magia": "Sudden Death Rune",
            "palavras": "adori gran mort",
            "obs": "a cada 2s, sempre que nada mais forte estiver pronto",
            "icone": "img/magias/sudden-death-rune.gif"
          },
          {
            "magia": "Strong Ice Strike",
            "palavras": "exori gran frigo",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/strong-ice-strike.gif"
          },
          {
            "magia": "Forked Glacier",
            "palavras": "exevo fur frigo",
            "obs": "mais fraca que o SD aqui: só para economizar runa",
            "icone": "img/magias/forked-glacier.gif"
          }
        ],
        "nota": "Elemento: gelo (100%). Stance: Elemental Synthesis."
      },
      "monk": {
        "passos": [
          {
            "magia": "Thousand Fist Blows",
            "palavras": "exori mas amp pug",
            "obs": "builder, a cada 8s",
            "icone": "img/magias/thousand-fist-blows.gif"
          },
          {
            "magia": "Mystic Repulse",
            "palavras": "exori amp pug",
            "obs": "builder, a cada 8s (alcance 7)",
            "icone": "img/magias/mystic-repulse.gif"
          },
          {
            "magia": "Double Jab",
            "palavras": "exori pug",
            "obs": "builder, a cada 4s, até juntar 5 de Harmony",
            "icone": "img/magias/double-jab.gif"
          },
          {
            "magia": "Devastating Knockout",
            "palavras": "exori gran nia",
            "obs": "spender com 5 de Harmony (a cada 8s, alcance 7)",
            "icone": "img/magias/devastating-knockout.gif"
          },
          {
            "magia": "Forceful Uppercut",
            "palavras": "exori gran pug",
            "obs": "sempre que sair da recarga (60s)",
            "icone": "img/magias/forceful-uppercut.gif"
          }
        ],
        "nota": "Físico 100%. Gaste a Harmony só com 5 pontos (+112% de dano). Abaixo do level 125 use Greater Tiger Clash (exori nia) como spender."
      },
      "nota": "Todas as formas são imunes a fogo; a Wisdom também a death. A wiki BR mostra fogo neutro, mas a wiki em inglês mostra imunidade."
    },
    "tokens": [
      {
        "nome": "Silver Token",
        "qtd": "0-5",
        "raridade": "semi-raro",
        "sprite": "img/itens/silver-token.gif"
      }
    ],
    "lootTiers": [
      {
        "raridade": "comum",
        "itens": [
          {
            "nome": "Platinum Coin",
            "qtd": "0-5",
            "sprite": "img/itens/platinum-coin.gif",
            "link": "https://www.tibiawiki.com.br/Platinum_Coin"
          },
          {
            "nome": "Supreme Health Potion",
            "qtd": "0-20",
            "sprite": "img/itens/supreme-health-potion.gif",
            "link": "https://www.tibiawiki.com.br/Supreme_Health_Potion"
          },
          {
            "nome": "Ultimate Mana Potion",
            "qtd": "0-20",
            "sprite": "img/itens/ultimate-mana-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Mana_Potion"
          },
          {
            "nome": "Ultimate Spirit Potion",
            "qtd": "0-10",
            "sprite": "img/itens/ultimate-spirit-potion.gif",
            "link": "https://www.tibiawiki.com.br/Ultimate_Spirit_Potion"
          },
          {
            "nome": "Berserk Potion",
            "qtd": "0-10",
            "sprite": "img/itens/berserk-potion.gif",
            "link": "https://www.tibiawiki.com.br/Berserk_Potion"
          },
          {
            "nome": "Blue Gem",
            "qtd": "0-2",
            "sprite": "img/itens/blue-gem.gif",
            "link": "https://www.tibiawiki.com.br/Blue_Gem"
          },
          {
            "nome": "Bullseye Potion",
            "qtd": "0-10",
            "sprite": "img/itens/bullseye-potion.gif",
            "link": "https://www.tibiawiki.com.br/Bullseye_Potion"
          },
          {
            "nome": "Flash Arrow",
            "qtd": "0-100",
            "sprite": "img/itens/flash-arrow.gif",
            "link": "https://www.tibiawiki.com.br/Flash_Arrow"
          },
          {
            "nome": "Green Gem",
            "qtd": "0-3",
            "sprite": "img/itens/green-gem.gif",
            "link": "https://www.tibiawiki.com.br/Green_Gem"
          },
          {
            "nome": "Mastermind Potion",
            "qtd": "0-10",
            "sprite": "img/itens/mastermind-potion.gif",
            "link": "https://www.tibiawiki.com.br/Mastermind_Potion"
          },
          {
            "nome": "Red Gem",
            "qtd": "0-2",
            "sprite": "img/itens/red-gem.gif",
            "link": "https://www.tibiawiki.com.br/Red_Gem"
          },
          {
            "nome": "Royal Star",
            "qtd": "0-100",
            "sprite": "img/itens/royal-star.gif",
            "link": "https://www.tibiawiki.com.br/Royal_Star"
          },
          {
            "nome": "Yellow Gem",
            "qtd": "0-2",
            "sprite": "img/itens/yellow-gem.gif",
            "link": "https://www.tibiawiki.com.br/Yellow_Gem"
          },
          {
            "nome": "Energy Bar",
            "qtd": null,
            "sprite": "img/itens/energy-bar.gif",
            "link": "https://www.tibiawiki.com.br/Energy_Bar"
          },
          {
            "nome": "Lightning Pendant",
            "qtd": null,
            "sprite": "img/itens/lightning-pendant.gif",
            "link": "https://www.tibiawiki.com.br/Lightning_Pendant"
          },
          {
            "nome": "Magma Coat",
            "qtd": null,
            "sprite": "img/itens/magma-coat.gif",
            "link": "https://www.tibiawiki.com.br/Magma_Coat"
          },
          {
            "nome": "Ring of Secret Thoughts",
            "qtd": null,
            "sprite": "img/itens/ring-of-secret-thoughts.gif",
            "link": "https://www.tibiawiki.com.br/Ring_of_Secret_Thoughts"
          }
        ]
      },
      {
        "raridade": "semi-raro",
        "itens": [
          {
            "nome": "Crystal Coin",
            "qtd": "0-3",
            "sprite": "img/itens/crystal-coin.gif",
            "link": "https://www.tibiawiki.com.br/Crystal_Coin"
          },
          {
            "nome": "Giant Emerald",
            "qtd": null,
            "sprite": "img/itens/giant-emerald.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Emerald"
          },
          {
            "nome": "Giant Ruby",
            "qtd": null,
            "sprite": "img/itens/giant-ruby.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Ruby"
          },
          {
            "nome": "Giant Sapphire",
            "qtd": null,
            "sprite": "img/itens/giant-sapphire.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Sapphire"
          },
          {
            "nome": "Giant Shimmering Pearl",
            "qtd": null,
            "sprite": "img/itens/giant-shimmering-pearl.gif",
            "link": "https://www.tibiawiki.com.br/Giant_Shimmering_Pearl"
          },
          {
            "nome": "Gold Ingot",
            "qtd": null,
            "sprite": "img/itens/gold-ingot.gif",
            "link": "https://www.tibiawiki.com.br/Gold_Ingot"
          },
          {
            "nome": "Magma Monocle",
            "qtd": null,
            "sprite": "img/itens/magma-monocle.gif",
            "link": "https://www.tibiawiki.com.br/Magma_Monocle"
          },
          {
            "nome": "Magma Amulet",
            "qtd": null,
            "sprite": "img/itens/magma-amulet.gif",
            "link": "https://www.tibiawiki.com.br/Magma_Amulet"
          }
        ]
      },
      {
        "raridade": "raro",
        "itens": [
          {
            "nome": "Blister Ring",
            "qtd": null,
            "sprite": "img/itens/blister-ring.gif",
            "link": "https://www.tibiawiki.com.br/Blister_Ring"
          },
          {
            "nome": "Lightning Legs",
            "qtd": null,
            "sprite": "img/itens/lightning-legs.gif",
            "link": "https://www.tibiawiki.com.br/Lightning_Legs"
          },
          {
            "nome": "Urmahlullu's Mane",
            "qtd": null,
            "sprite": "img/itens/urmahlullus-mane.gif",
            "link": "https://www.tibiawiki.com.br/Urmahlullu%27s_Mane"
          },
          {
            "nome": "Urmahlullu's Paw",
            "qtd": null,
            "sprite": "img/itens/urmahlullus-paw.gif",
            "link": "https://www.tibiawiki.com.br/Urmahlullu%27s_Paw"
          },
          {
            "nome": "Urmahlullu's Tail",
            "qtd": null,
            "sprite": "img/itens/urmahlullus-tail.gif",
            "link": "https://www.tibiawiki.com.br/Urmahlullu%27s_Tail"
          }
        ]
      },
      {
        "raridade": "muito raro",
        "itens": [
          {
            "nome": "Blue and Golden Cordon",
            "qtd": null,
            "sprite": "img/itens/blue-and-golden-cordon.gif",
            "link": "https://www.tibiawiki.com.br/Blue_and_Golden_Cordon"
          },
          {
            "nome": "Enchanted Theurgic Amulet",
            "qtd": null,
            "sprite": "img/itens/enchanted-theurgic-amulet.gif",
            "link": "https://www.tibiawiki.com.br/Enchanted_Theurgic_Amulet"
          },
          {
            "nome": "Rainbow Necklace",
            "qtd": null,
            "sprite": "img/itens/rainbow-necklace.gif",
            "link": "https://www.tibiawiki.com.br/Rainbow_Necklace"
          },
          {
            "nome": "Sun Medal",
            "qtd": null,
            "sprite": "img/itens/sun-medal.gif",
            "link": "https://www.tibiawiki.com.br/Sun_Medal"
          },
          {
            "nome": "Sunray Emblem",
            "qtd": null,
            "sprite": "img/itens/sunray-emblem.gif",
            "link": "https://www.tibiawiki.com.br/Sunray_Emblem"
          },
          {
            "nome": "Tagralt Blade",
            "qtd": null,
            "sprite": "img/itens/tagralt-blade.gif",
            "link": "https://www.tibiawiki.com.br/Tagralt_Blade"
          },
          {
            "nome": "Winged Backpack",
            "qtd": null,
            "sprite": "img/itens/winged-backpack.gif",
            "link": "https://www.tibiawiki.com.br/Winged_Backpack"
          },
          {
            "nome": "Winged Boots",
            "qtd": null,
            "sprite": "img/itens/winged-boots.gif",
            "link": "https://www.tibiawiki.com.br/Winged_Boots"
          },
          {
            "nome": "Golden Bijou",
            "qtd": null,
            "sprite": "img/itens/golden-bijou.gif",
            "link": "https://www.tibiawiki.com.br/Golden_Bijou"
          }
        ]
      }
    ],
    "lootStatus": "ok",
    "mecanica": [
      "Até 5 jogadores. Luta simples mas longa: 5 formas em sequência, com vida compartilhada (500k no total).",
      "Ordem: [[Urmahlullu the Immaculate|Immaculate]], [[Wildness of Urmahlullu|Wildness]], [[Urmahlullu the Tamed|Tamed]], [[Wisdom of Urmahlullu|Wisdom]] e [[Urmahlullu the Weakened|Weakened]]. Todas imunes a fogo.",
      "Trape o boss perto do teleporte de saída ou no canto sudoeste.",
      "A Wisdom (4ª forma) ataca de longe e foge do time: trape a Tamed antes de matá-la, para a Wisdom já nascer presa.",
      "Cooldown de 20h. Até entregar a missão, todos ganham um Ring of Secret Thoughts por vitória."
    ],
    "spritesMecanica": {
      "Urmahlullu the Immaculate": "img/criaturas/urmahlullu-the-immaculate.gif",
      "Wildness of Urmahlullu": "img/criaturas/wildness-of-urmahlullu.gif",
      "Urmahlullu the Tamed": "img/criaturas/urmahlullu-the-tamed.gif",
      "Wisdom of Urmahlullu": "img/criaturas/wisdom-of-urmahlullu.gif",
      "Urmahlullu the Weakened": "img/criaturas/urmahlullu-the-weakened.gif"
    },
    "fases": [
      {
        "nome": "Urmahlullu the Immaculate",
        "dica": "Forma 1 (~130k): imune a fogo; energia 60%.",
        "elementosAjuste": {
          "fogo": "0%",
          "energia": "60%"
        },
        "hpAjuste": "130000",
        "hp": "130000",
        "elementos": {
          "fisico": "50%",
          "terra": "100%",
          "fogo": "0%",
          "morte": "100%",
          "energia": "60%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/urmahlullu-the-immaculate.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Great Death Beam",
              "palavras": "exevo max mort",
              "icone": "img/magias/great-death-beam.gif"
            },
            {
              "magia": "Sudden Death Rune",
              "palavras": "adori gran mort",
              "icone": "img/magias/sudden-death-rune.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 1,
        "elemento": {
          "sorcerer": [
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Wildness of Urmahlullu",
        "dica": "Forma 2 (~70k): imune a fogo.",
        "elementosAjuste": {
          "fogo": "0%"
        },
        "hpAjuste": "70000",
        "hp": "70000",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "0%",
          "morte": "100%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/wildness-of-urmahlullu.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 1,
        "elemento": {
          "sorcerer": [
            "energia",
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Urmahlullu the Tamed",
        "dica": "Forma 3 (~100k): imune a fogo; energia 60%. Trape antes de matar.",
        "elementosAjuste": {
          "fogo": "0%",
          "energia": "60%"
        },
        "hpAjuste": "100000",
        "hp": "100000",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "0%",
          "morte": "100%",
          "energia": "60%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/urmahlullu-the-tamed.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Great Death Beam",
              "palavras": "exevo max mort",
              "icone": "img/magias/great-death-beam.gif"
            },
            {
              "magia": "Sudden Death Rune",
              "palavras": "adori gran mort",
              "icone": "img/magias/sudden-death-rune.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 1,
        "elemento": {
          "sorcerer": [
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Wisdom of Urmahlullu",
        "dica": "Forma 4 (~50k): ataca de longe e foge; imune a fogo e death.",
        "elementosAjuste": {
          "fogo": "0%",
          "morte": "0%"
        },
        "hpAjuste": "50000",
        "hp": "50000",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "0%",
          "morte": "0%",
          "energia": "100%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/wisdom-of-urmahlullu.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Energy Beam",
              "palavras": "exevo gran vis lux",
              "icone": "img/magias/great-energy-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 1,
        "elemento": {
          "sorcerer": [
            "energia"
          ],
          "druid": [
            "gelo",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      },
      {
        "nome": "Urmahlullu the Weakened",
        "dica": "Forma 5 (~150k): imune a fogo; energia 90%.",
        "elementosAjuste": {
          "fogo": "0%",
          "energia": "90%"
        },
        "hpAjuste": "150000",
        "hp": "150000",
        "elementos": {
          "fisico": "100%",
          "terra": "100%",
          "fogo": "0%",
          "morte": "100%",
          "energia": "90%",
          "sagrado": "100%",
          "gelo": "100%",
          "cura": "100%"
        },
        "sprite": "img/criaturas/urmahlullu-the-weakened.gif",
        "ataques": {
          "knight": [
            {
              "magia": "Annihilation",
              "palavras": "exori gran ico",
              "icone": "img/magias/annihilation.gif"
            },
            {
              "magia": "Fierce Berserk",
              "palavras": "exori gran",
              "icone": "img/magias/fierce-berserk.gif"
            }
          ],
          "paladin": [
            {
              "magia": "Divine Grenade",
              "palavras": "exevo tempo mas san",
              "icone": "img/magias/divine-grenade.gif"
            },
            {
              "magia": "Divine Barrage",
              "palavras": "exori dir san",
              "icone": "img/magias/divine-barrage.gif"
            }
          ],
          "sorcerer": [
            {
              "magia": "Ultimate Energy Strike",
              "palavras": "exori max vis",
              "icone": "img/magias/ultimate-energy-strike.gif"
            },
            {
              "magia": "Great Death Beam",
              "palavras": "exevo max mort",
              "icone": "img/magias/great-death-beam.gif"
            }
          ],
          "druid": [
            {
              "magia": "Ultimate Ice Strike",
              "palavras": "exori max frigo",
              "icone": "img/magias/ultimate-ice-strike.gif"
            },
            {
              "magia": "Strong Ice Wave",
              "palavras": "exevo gran frigo hur",
              "icone": "img/magias/strong-ice-wave.gif"
            }
          ],
          "monk": [
            {
              "magia": "Thousand Fist Blows",
              "palavras": "exori mas amp pug",
              "icone": "img/magias/thousand-fist-blows.gif"
            },
            {
              "magia": "Mystic Repulse",
              "palavras": "exori amp pug",
              "icone": "img/magias/mystic-repulse.gif"
            }
          ]
        },
        "peso": 1,
        "elemento": {
          "sorcerer": [
            "morte"
          ],
          "druid": [
            "gelo",
            "morte",
            "terra"
          ],
          "paladin": [
            "fisico",
            "sagrado"
          ],
          "knight": [
            "fisico"
          ],
          "monk": [
            "fisico"
          ]
        }
      }
    ],
    "link": "https://www.tibiawiki.com.br/Urmahlullu_the_Weakened",
    "pendencias": [],
    "elementosAjuste": {
      "fogo": "0%",
      "energia": "90%"
    }
  }
];
