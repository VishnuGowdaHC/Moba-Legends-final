const herosData = [
  {
    name: 'Akai',
    role: 'Tank',
    heroImg: './pfp-icons/Akai.jpg',
    desc: `Once there was a panda in Stream Valley named Akai. With the dream of becoming a hero, he was always eager to offer help, but often ended up causing more trouble instead. He worked hard to pursue his dream and although he'd once wandered off right the path. In the end, he recalled his original intention and become a true hero.`,
    passive: {
      passiveImg: './skills-icons/Tai_Chi.webp',
      passiveName: 'Tai Chi',
      buff: 'Buff',
      debuff: '',
      aoe: '',
      cc: '',
      mobility: '',
      passiveInfo: `Akai gains a 25 (+5% Total HP) shield for 4 seconds on each skill cast and can marks enemy heroes and Creeps hit by his skills.Akai's Basic Attacks deal 25 (+5% Total HP) extra Physical Damage to marked enemies.`
    },
    skillOne: {
      skiilImg: './skills-icons/Headbutt.webp',
      skillName: 'HeadButt',
      debuff: '',
      buff: '',
      aoe: '',
      cc: 'CC',
      mobility: '',
      skillInfo: `Akai charges in the target direction, dealing 300–400 (+50% Total Physical Attack) Physical Damage to enemies along the away. If Akai hits an enemy hero during this process, he'll knocked them airborne for 0.5 seconds and be able to roll in the Joystick's direction once.Akai can cast Headbutt during  Heavy Spin to quickly adjust his position.`

    },
    skillTwo: {
      skiilImg: './skills-icons/Body_Slam.webp',
      skillName: 'Body Slam',
      buff: '',
      debuff: '',
      aoe: 'AOE',
      cc: '',
      mobility: '',
      skillInfo: `Akai smashes the ground with his body, dealing 270–420 (+6% Total HP) Physical Damage to nearby enemies and slowing them by 45% for 2 seconds.`
    },
    ultimate: {
      ultimateImg: './skills-icons/Heavy_Spin.webp',
      ultimateName: 'Heavy Spin',
      buff: '',
      debuff: '',
      aoe: 'AOE',
      cc: 'CC',
      mobility: '',
      ultimateInfo: `Akai removes all debuffs on him and spins for 4 seconds, gaining Slow Immunity while continuously dealing 200–450 (+100% Extra Physical Attack) Physical Damage to nearby enemies and knocking them back. Enemies heroes knocked back will knock back other heroes they collide with during the process.Akai also gradually increases his Movement Speed to 70% over the duration. This skill can only be interrupted by Suppression and Morph effects.`             
    },
    wcounters: [
    {
      counterName: 'Diggie',
      imgLink: './pfp-icons/Diggie_infobox.png'
    },
    {
      counterName: 'Odette',
      imgLink: './pfp-icons/Odette.png'
    },
    {
      counterName: 'Valir',
      imgLink: './pfp-icons/Valir.jpg'
    },
    {
      counterName: 'Valentina',
      imgLink: './pfp-icons/Valentina.jpg'
    },
    {
      counterName: 'Karrie',
      imgLink: './pfp-icons/Karrie_infobox.png'
    }
    ],
    scounters: [
      {
        counterName: 'Gord',
        imgLink: './pfp-icons/Gord.jpg'
      },
      {
        counterName: 'Alice',
        imgLink: './pfp-icons/Alice.jpg'
      },
      {
        counterName: 'Nana',
        imgLink: './pfp-icons/Nana.jpg'
      },
      {
        counterName: 'Clint',
        imgLink: './pfp-icons/Clint_infobox.jpg'
      },
      {
        counterName: 'Zilong',
        imgLink: './pfp-icons/Zilong_infobox.jpg'
      }
      ]
  },
  {
    name: 'Atlas',
    role: 'Tank',
    heroImg: './pfp-icons/Atlas.jpg',
    desc: `Atlas is one of the ancient Abysmal Sea creature, sealed in the deep sea by the Ancient Ones. Atlas found the Mecha built by Iceland Golems in the Abysmal Sea in the past. By integrating with the Mecha, Atlas escaped the Abysmal Sea and came to the seas around the world to absorb knowledge. It looks forward to the day when it is able to break the prohibition, so that is own kind can be free.`,
    passive: {
      passiveImg: './skills-icons/Frigid_Breath.webp',
      passiveName: 'Frigid Breath',
      buff: 'Buff',
      debuff: 'Debuff',
      aoe: '',
      cc: '',
      mobility: '',
      passiveInfo: `Atlas generates Frigid Breath around him for 5 seconds each time he casts a skill. Enemies who stay in the area over 1.5 seconds will have their Movement Speed gradually reduced until they are frozen for 0.5 seconds.
      Atlas gains 16-30 extra Physical and Magic Defense when Frigid Breath is present.`
    },
    skillOne: {
      skiilImg: './skills-icons/Annihilate.webp',
      skillName: 'Annihilate',
      buff: '',
      debuff: '',
      aoe: 'AOE',
      cc: '',
      mobility: '',
      skillInfo: `Atlas smashes the ground and causes 3 explosions. Each explosion deals 230–430 (+60% Total Magic Power) Magic Damage to enemies.
      Ejected State: If Atlas has ejected from his Mecha Sentry, both himself  and his Mecha will cast Annihilate.`

    },
    skillTwo: {
      skiilImg: './skills-icons/Perfect_Match.webp',
      skillName: 'Perfect Match',
      buff: '',
      debuff: '',
      aoe: '',
      cc: 'CC',
      mobility: 'Mobility',
      skillInfo: `Atlas enters Ejected State, gaining 40% Movement Speed and immunity to slow effects. In this state, the Mecha Sentry will follow the pilot at an increasing speed (can only be controlled by Suppression). Once they meet, Atlas will return to the Mecha, dealing 320–420 (+80% Total Magic Power) Magic Damage to enemies nearby and stunning them for 1 second.
      Ejected State: Atlas and his Mecha share the same HP bar and reduce 50% of the damage taken in this state.`

    },
    ultimate: {
      ultimateImg: './skills-icons/Fatal_Links.webp',
      ultimateName: 'Fatal Links',
      buff: '',
      debuff: '',
      aoe: 'AOE',
      cc: 'CC',
      mobility: '',
      ultimateInfo: `Atlas hurls chains around and starts to channel (can only be interrupted by suppressing), dealing 225–475 (+75% Total Magic Power) Magic Damage to enemy heroes hit and slowing them by 40% for 3 seconds.
      Use this skill again while channeling: Atlas will drag the targets toward him and plunk them down on the designated location, dealing 360–760 (+180% Total Magic Power) Magic Damage.
      Use this skill in Ejected State: The Mecha Sentry will return to Atlas immediately, but the stun effect will be replaced by 40% slow effect.`             
    },
    wcounters: [
    {
      counterName: 'Diggie',
      imgLink: './pfp-icons/Diggie_infobox.png'
    },
    {
      counterName: 'Akai',
      imgLink: './pfp-icons/Akai.jpg'
    },
    {
      counterName: 'Valir',
      imgLink: './pfp-icons/Valir.jpg'
    },
    {
      counterName: 'Kaja',
      imgLink: './pfp-icons/Kaja_infobox.jpg'
    },
    {
      counterName: 'Karrie',
      imgLink: './pfp-icons/Karrie_infobox.png'
    }
    ],
    scounters: [
      {
        counterName: 'Silvanna',
        imgLink: './pfp-icons/Silvanna_infobox.jpg'
      },
      {
        counterName: 'Ling',
        imgLink: './pfp-icons/Ling_infobox.jpg'
      },
      {
        counterName: 'Kimmy',
        imgLink: './pfp-icons/Nana.jpg'
      },
      {
        counterName: 'Masha',
        imgLink: './pfp-icons/Kimmy_infobox.jpg'
      },
      {
        counterName: 'Kadita',
        imgLink: './pfp-icons/Kadita.jpg'
      }
      ]
  }
]