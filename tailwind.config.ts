import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>> {
  theme: {
    extend: {
      width: {
        '100': '30rem',
        '105': '35rem',
        '110': '40rem'
      },
      height: {
        '100': '30rem',
        '105': '35rem',
        '110': '40rem'
      }
    },
  },
  extend: {
    colors: {
      // primary: defaultTheme.colors.green
    }
  }
}