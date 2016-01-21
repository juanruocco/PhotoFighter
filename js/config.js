var Config = {
  Characters: {
    tomas: {
      name: 'Tomas',
      folder: 'assets/tomas/',
      states: {
        default: 'wait',
        wait: {
          sprite_sheet: 'wait.png',
          frames: 1
        },
        walk: {
          sprite_sheet: 'walk.png',
          frames:6
        }
      },
      keyMap: {
        mapping: {
          '65': 'a',
          '83': 's',
          '68': 'd',
          '87': 'w',
          '85': 'u',
          '73': 'i',
          '74': 'j',
          '75': 'k'
        },
        move: {
          'w': 'jump',
          'a': 'back',
          'd': 'forward',
          's': 'crouch'
        },
        attack: {
          special: {
            'crouch,light_boxing': 'crouch_light_boxing'
          },
          normal: {
            'j': 'light_boxing',
            'k': 'heavy_boxing',
            'u': 'light_kick',
            'i': 'heavy_kick'
          }
        }
      }
    }
  }
}
