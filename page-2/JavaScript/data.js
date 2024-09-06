const heros = [
  {
    name: 'Akai',
    role: 'Tank',
    imgLink: '../icons/tank-icons/Akai.jpg'
  },
  {
    name: 'Atlas',
    role: 'Tank',
    imgLink: '../icons/tank-icons/Atlas.jpg'
  },
  {
    name: 'Barats',
    role: 'Tank',
    imgLink: '../icons/tank-icons/Barats.jpg'
  },
  {
    name: 'Belerick',
    role: 'Tank',
    imgLink: '../icons/tank-icons/Belerick.jpg'
  },
  {
    name: 'Edith',
    role: 'Tank',
    imgLink: '../icons/tank-icons/Edith.jpg'
  },
  {
    name: 'Esmeralda',
    role: 'Tank',
    imgLink: '../icons/tank-icons/Esmeralda.jpg'
  },
  {
    name: 'Franco',
    role: 'Tank',
    imgLink: '../icons/tank-icons/Franco.jpg'
  },
  {
    name: 'Gatotkaca',
    role: 'Tank',
    imgLink: '../icons/tank-icons/Gatotkaca.jpg'
  },
  {
    name: 'Gloo',
    role: 'Tank',
    imgLink: '../icons/tank-icons/Gloo.jpg'
  },
  {
    name: 'Grock',
    role: 'Tank',
    imgLink: '../icons/tank-icons/Grock.jpg'
  },
  {
    name: 'Hylos',
    role: 'Tank',
    imgLink: '../icons/tank-icons/Hylos.jpg'
  },
  {
    name: 'Johnson',
    role: 'Tank',
    imgLink: '../icons/tank-icons/Johnson.jpg'
  },
  {
    name: 'Khufra',
    role: 'Tank',
    imgLink: '../icons/tank-icons/Khufra.jpg'
  },
  {
    name: 'Minotaur',
    role: 'Tank',
    imgLink: '../icons/tank-icons/Minotaur.jpg'
  },
  {
    name: 'Tigreal',
    role: 'Tank',
    imgLink: '../icons/tank-icons/Tigreal.jpg'
  },
  {
    name: 'Uranus',
    role: 'Tank',
    imgLink: '../icons/tank-icons/Uranus.jpg'
  },
  {
    name: 'Aldous',
    role: 'Fighter',
    imgLink: '../icons/fighter-icons/Aldous_infobox.jpg'
  },
  {
    name: 'Alpha',
    role: 'Fighter',
    imgLink: '../icons/fighter-icons/Alpha_infobox.jpg'
  },
  {
    name: 'Alucard',
    role: 'Fighter',
    imgLink: '../icons/fighter-icons/Alucard_infobox.jpg'
  },
  {
    name: 'Argus',
    role: 'Fighter',
    imgLink: '../icons/fighter-icons/Argus_infobox.jpg'
  },
  {
    name: 'Arlott',
    role: 'Fighter',
    imgLink: '../icons/fighter-icons/Arlott_infobox.jpg'
  },
  {
    name: 'Aulus',
    role: 'Fighter',
    imgLink: '../icons/fighter-icons/Aulus_infobox.jpg'
  },
  {
    name: 'Badang',
    role: 'Fighter',
    imgLink: '../icons/fighter-icons/Badang_infobox.jpg'
  },
  {
    name: 'Balmond',
    role: 'Fighter',
    imgLink: '../icons/fighter-icons/Balmond_infobox.jpg'
  },
  {
    name: 'Bane',
    role: 'Fighter',
    imgLink: '../icons/fighter-icons/Bane_infobox.jpg'
  },
  {
    name: 'Baxia',
    role: 'Fighter',
    imgLink: '../icons/fighter-icons/Baxia_Infobox.jpg'
  },
  {
    name: 'Chou',
    role: 'Fighter',
    imgLink: '../icons/fighter-icons/Chou_Infobox.jpg'
  },
  {
    name: 'Cici',
    role: 'Fighter',
    imgLink: '../icons/fighter-icons/Cici_infobox.jpg'
  },
  {
    name: 'Dyrroth',
    role: 'Fighter',
    imgLink: '../icons/fighter-icons/Dyrroth_infobox.jpg'
  },
  {
    name: 'Fredrinn',
    role: 'Fighter',
    imgLink: '../icons/fighter-icons/Fredrinn_infobox.jpg'
  },
  {
    name: 'Freya',
    role: 'Fighter',
    imgLink: '../icons/fighter-icons/Freya_infobox.jpg'
  },
  {
    name: 'Guinevere',
    role: 'Fighter',
    imgLink: '../icons/fighter-icons/Guinevere_infobox.jpg'
  },
  {
    name: 'Hilda',
    role: 'Fighter',
    imgLink: '../icons/fighter-icons/Hilda_infobox.jpg'
  },
  {
    name: 'Jawhead',
    role: 'Fighter',
    imgLink: '../icons/fighter-icons/Jawhead_infobox.jpg'
  },
  {
    name: 'Julian',
    role: 'Fighter',
    imgLink: '../icons/fighter-icons/Julian_infobox.jpg'
  },
  {
    name: 'Lapu-lapu',
    role: 'Fighter',
    imgLink: '../icons/fighter-icons/Lapu-lapu_infobox.png'
  },
  {
    name: 'Leomord',
    role: 'Fighter',
    imgLink: '../icons/fighter-icons/Leomord_infobox.jpg'
  },
  {
    name: 'Martis',
    role: 'Fighter',
    imgLink: '../icons/fighter-icons/Martis_infobox.jpg'
  },
  {
    name: 'Masha',
    role: 'Fighter',
    imgLink: '../icons/fighter-icons/Masha_infobox.jpg'
  },
  {
    name: 'Minsitthar',
    role: 'Fighter',
    imgLink: '../icons/fighter-icons/Minsitthar_infobox.jpg'
  },
  {
    name: 'Paquito',
    role: 'Fighter',
    imgLink: '../icons/fighter-icons/Paquito_infobox.jpg'
  },
  {
    name: 'Phoveus',
    role: 'Fighter',
    imgLink: '../icons/fighter-icons/Phoveus_infobox.jpg'
  },
  {
    name: 'Ruby',
    role: 'Fighter',
    imgLink: '../icons/fighter-icons/Ruby_infobox.jpeg'
  },
  {
    name: 'Silvanna',
    role: 'Fighter',
    imgLink: '../icons/fighter-icons/Silvanna_infobox.jpg'
  },
  {
    name: 'Sun',
    role: 'Fighter',
    imgLink: '../icons/fighter-icons/Sun_Infobox.png'
  },
  {
    name: 'Terizla',
    role: 'Fighter',
    imgLink: '../icons/fighter-icons/Terizla_infobox.jpg'
  },
  {
    name: 'Thamuz',
    role: 'Fighter',
    imgLink: '../icons/fighter-icons/Thamuz_infobox.jpg'
  },
  {
    name: 'X.Borg',
    role: 'Fighter',
    imgLink: '../icons/fighter-icons/X.Borg_infobox.jpg'
  },
  {
    name: 'Yu_Zhong',
    role: 'Fighter',
    imgLink: '../icons/fighter-icons/Yu-Zhong.webp'
  },
  {
    name: 'Yin',
    role: 'Fighter',
    imgLink: '../icons/fighter-icons/Yin_infobox.jpg'
  },
  {
    name: 'Zilong',
    role: 'Fighter',
    imgLink: '../icons/fighter-icons/Zilong_infobox.jpg'
  },
  {
    name: 'Aamon',
    role: 'Assassin',
    imgLink: '../icons/assassin-icons/Aamon_infobox.jpg'
  },
  {
    name: 'Benedetta',
    role: 'Assassin',
    imgLink: '../icons/assassin-icons/Benedetta_infobox.jpg'
  },
  {
    name: 'Fanny',
    role: 'Assassin',
    imgLink: '../icons/assassin-icons/Fanny_infobox.jpg'
  },
  {
    name: 'Gusion',
    role: 'Assassin',
    imgLink: '../icons/assassin-icons/Gusion_infobox.jpg'
  },
  {
    name: 'Hanzo',
    role: 'Assassin',
    imgLink: '../icons/assassin-icons/Hanzo_infobox.jpg'
  },
  {
    name: 'Harley',
    role: 'Assassin',
    imgLink: '../icons/assassin-icons/Harley_infobox.png'
  },
  {
    name: 'Hayabusa',
    role: 'Assassin',
    imgLink: '../icons/assassin-icons/Hayabusa_infobox.jpg'
  },
  {
    name: 'Helcurt',
    role: 'Assassin',
    imgLink: '../icons/assassin-icons/Helcurt_infobox.jpg'
  },
  {
    name: 'Joy',
    role: 'Assassin',
    imgLink: '../icons/assassin-icons/Joy_infobox.jpg'
  },
  {
    name: 'Karina',
    role: 'Assassin',
    imgLink: '../icons/assassin-icons/Karina_infobox.jpg'
  },
  {
    name: 'Khaleed',
    role: 'Assassin',
    imgLink: '../icons/assassin-icons/Khaleed_infobox.jpg'
  },
  {
    name: 'Lancelot',
    role: 'Assassin',
    imgLink: '../icons/assassin-icons/Lancelot_infobox.jpg'
  },
  {
    name: 'Ling',
    role: 'Assassin',
    imgLink: '../icons/assassin-icons/Ling_infobox.jpg'
  },
  {
    name: 'Natalia',
    role: 'Assassin',
    imgLink: '../icons/assassin-icons/Natalia_infobox.jpg'
  },
  {
    name: 'Nolan',
    role: 'Assassin',
    imgLink: '../icons/assassin-icons/Nolan_infobox.jpeg'
  },
  {
    name: 'Saber',
    role: 'Assassin',
    imgLink: '../icons/assassin-icons/Saber_infobox.jpg'
  },
  {
    name: 'Selena',
    role: 'Assassin',
    imgLink: '../icons/assassin-icons/Selena_infobox.jpg'
  },
  {
    name: 'Yi_Sun_Shin',
    role: 'Assassin',
    imgLink: '../icons/assassin-icons/Yi_Sun-Shin_infobox.jpg'
  },
  {
    name: 'Alice',
    role: 'Mage',
    imgLink: '../icons/mage-icons/Alice.jpg'
  },
  {
    name: 'Aurora',
    role: 'Mage',
    imgLink: '../icons/mage-icons/Aurora.png'
  },
  {
    name: 'Cecilion',
    role: 'Mage',
    imgLink: '../icons/mage-icons/Cecilion.jpg'
  },
  {
    name: 'Chang_e',
    role: 'Mage',
    imgLink: '../icons/mage-icons/Chang\'e.jpg'
  },
  {
    name: 'Cyclops',
    role: 'Mage',
    imgLink: '../icons/mage-icons/Cyclops.jpg'
  },
  {
    name: 'Eudora',
    role: 'Mage',
    imgLink: '../icons/mage-icons/Eudora.jpg'
  },
  {
    name: 'Gord',
    role: 'Mage',
    imgLink: '../icons/mage-icons/Gord.jpg'
  },
  {
    name: 'Harith',
    role: 'Mage',
    imgLink: '../icons/mage-icons/Harith.jpg'
  },
  {
    name: 'Kadita',
    role: 'Mage',
    imgLink: '../icons/mage-icons/Kadita.jpg'
  },
  {
    name: 'Kagura',
    role: 'Mage',
    imgLink: '../icons/mage-icons/Kagura.jpg'
  },
  {
    name: 'Lunox',
    role: 'Mage',
    imgLink: '../icons/mage-icons/Lunox.jpg'
  },
  {
    name: 'Luo_Yi',
    role: 'Mage',
    imgLink: '../icons/mage-icons/Luo_Yi.jpg'
  },
  {
    name: 'Lylia',
    role: 'Mage',
    imgLink: '../icons/mage-icons/Lylia.jpg'
  },
  {
    name: 'Nana',
    role: 'Mage',
    imgLink: '../icons/mage-icons/Nana.jpg'
  },
  {
    name: 'Novaria',
    role: 'Mage',
    imgLink: '../icons/mage-icons/Novaria.jpg'
  },
  {
    name: 'Odette',
    role: 'Mage',
    imgLink: '../icons/mage-icons/Odette.png'
  },
  {
    name: 'Pharsa',
    role: 'Mage',
    imgLink: '../icons/mage-icons/Pharsa.jpg'
  },
  {
    name: 'Vale',
    role: 'Mage',
    imgLink: '../icons/mage-icons/Vale.jpg'
  },
  {
    name: 'Valentina',
    role: 'Mage',
    imgLink: '../icons/mage-icons/Valentina.jpg'
  },
  {
    name: 'Valir',
    role: 'Mage',
    imgLink: '../icons/mage-icons/Valir.jpg'
  },
  {
    name: 'Vexana',
    role: 'Mage',
    imgLink: '../icons/mage-icons/Vexana.jpg'
  },
  {
    name: 'Xavier',
    role: 'Mage',
    imgLink: '../icons/mage-icons/Xavier.jpg'
  },
  {
    name: 'Yve',
    role: 'Mage',
    imgLink: '../icons/mage-icons/Yve.jpg'
  },
  {
    name: 'Zhask',
    role: 'Mage',
    imgLink: '../icons/mage-icons/Zhask.png'
  },
  {
    name: 'Zhuxin',
    role: 'Mage',
    imgLink: '../icons/mage-icons/Zhuxin.jpg'
  },
  { 
    name: 'Beatrix',
    role: 'Marksman',
    imgLink: '../icons/marksman-icons/Beatrix_infobox.jpg'
  },
  {
    name: 'Brody',
    role: 'Marksman',
    imgLink: '../icons/marksman-icons/Brody_infobox.jpg'
  },
  {
    name: 'Bruno',
    role: 'Marksman',
    imgLink: '../icons/marksman-icons/Bruno_infobox.jpg'
  },
  {
    name: 'Claude',
    role: 'Marksman',
    imgLink: '../icons/marksman-icons/Claude_infobox.jpg'
  },
  {
    name: 'Clint',
    role: 'Marksman',
    imgLink: '../icons/marksman-icons/Clint_infobox.jpg'
  },
  {
    name: 'Granger',
    role: 'Marksman',
    imgLink: '../icons/marksman-icons/Granger_infobox.jpg'
  },
  {
    name: 'Hanabi',
    role: 'Marksman',
    imgLink: '../icons/marksman-icons/Hanabi_infobox.jpg'
  },
  {
    name: 'Irithel',
    role: 'Marksman',
    imgLink: '../icons/marksman-icons/Irithel_infobox.png'
  },
  {
    name: 'Ixia',
    role: 'Marksman',
    imgLink: '../icons/marksman-icons/Ixia_infobox.jpg'
  },
  {
    name: 'Karrie',
    role: 'Marksman',
    imgLink: '../icons/marksman-icons/Karrie_infobox.png'
  },
  {
    name: 'Kimmy',
    role: 'Marksman',
    imgLink: '../icons/marksman-icons/Kimmy_infobox.jpg'
  },
  {
    name: 'Layla',
    role: 'Marksman',
    imgLink: '../icons/marksman-icons/Layla_infobox.jpg'
  },
  {
    name: 'Lesley',
    role: 'Marksman',
    imgLink: '../icons/marksman-icons/Lesley_infobox.jpg'
  },
  {
    name: 'Melissa',
    role: 'Marksman',
    imgLink: '../icons/marksman-icons/Melissa_infobox.jpg'
  },
  {
    name: 'Miya',
    role: 'Marksman',
    imgLink: '../icons/marksman-icons/Miya_infobox.jpg'
  },
  {
    name: 'Moskov',
    role: 'Marksman',
    imgLink: '../icons/marksman-icons/Moskov_infobox.png'
  },
  {
    name: 'Natan',
    role: 'Marksman',
    imgLink: '../icons/marksman-icons/Natan_infobox.jpg'
  },
  {
    name: 'Popol_and_Kupa',
    role: 'Marksman',
    imgLink: '../icons/marksman-icons/Popol_and_Kupa_infobox.jpg'
  },
  {
    name: 'Roger',
    role: 'Marksman',
    imgLink: '../icons/marksman-icons/Roger_infobox.png'
  },
  {
    name: 'Wanwan',
    role: 'Marksman',
    imgLink: '../icons/marksman-icons/Wanwan_infobox.jpg'
  },
  {
    name: 'Angela',
    role: 'Support',
    imgLink: '../icons/support-icons/Angela_infobox.jpg'
  },
  {
    name: 'Carmilla',
    role: 'Support',
    imgLink: '../icons/support-icons/Carmilla_infobox.jpg'
  },
  {
    name: 'Chip',
    role: 'Support',
    imgLink: '../icons/support-icons/Chip_infobox.jpg'
  },
  {
    name: 'Diggie',
    role: 'Support',
    imgLink: '../icons/support-icons/Diggie_infobox.png'
  },
  {
    name: 'Estes',
    role: 'Support',
    imgLink: '../icons/support-icons/Estes_infobox.png'
  },
  {
    name: 'Faramis',
    role: 'Support',
    imgLink: '../icons/support-icons/Faramis_infobox.jpg'
  },
  {
    name: 'Floryn',
    role: 'Support',
    imgLink: '../icons/support-icons/Floryn_infobox.jpg'
  },
  {
    name: 'Kaja',
    role: 'Support',
    imgLink: '../icons/support-icons/Kaja_infobox.jpg'
  },
  {
    name: 'Lolita',
    role: 'Support',
    imgLink: '../icons/support-icons/Lolita_infobox.jpg'
  },
  {
    name: 'Mathilda',
    role: 'Support',
    imgLink: '../icons/support-icons/Mathilda_infobox.jpg'
  },
  {
    name: 'Rafaela',
    role: 'Support',
    imgLink: '../icons/support-icons/Rafaela_infobox.jpg'
  }
];
