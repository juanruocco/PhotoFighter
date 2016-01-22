var Config = {
  Characters: {
    tomas: {
      name: 'Tomas',
      folder: 'assets/tomas/',
      states: {
        default: 'wait',
        wait: {
          sprite_sheet: 'walk.png',
          sprite_frame_width: 500,
          sprite_frame_height: 454,
          sprite_frame_xOffset: 0,
          sprite_frame_yOffset: 0,
          frames: 1,
          frameForSecond:30
        },
        walk: {
          sprite_sheet: 'walk.png',
          sprite_frame_width: 500,
          sprite_frame_height: 454,
          sprite_frame_xOffset: 0,
          sprite_frame_yOffset: 0,
          frames:6,
          frameForSecond:30
        },
        light_boxing: {
          sprite_sheet: 'light_boxing.png',
          sprite_frame_width: 279.6875,
          sprite_frame_height: 454,
          sprite_frame_xOffset: 85,
          sprite_frame_yOffset: 0,
          frames:18,
          frameForSecond:60
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
