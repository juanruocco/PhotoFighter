var Config = {
  Characters: {
    tomas: {
      name: 'Tomas',
      states: {
        default: 'wait',
        wait: {
          bg: 'wait',
          framesNum: 6
        },
        walk: {
          bg: 'walk',
          framesNum:6
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
