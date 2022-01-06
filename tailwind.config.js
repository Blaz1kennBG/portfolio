module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {   
       animation: {
      fadeIn: 'fadeIn 1s ease-in-out',
      fadeOut: "fadeOut 4s ease-in-out",
      fadeOutAnim: "fadeOutAnim 2s ease-out",
      'fade-in-down': 'fade-in-down 2s ease-out',
      'fade-out-down': 'fade-out-down 2s ease-out',
      'fade-in-up': 'fade-in-up 2s ease-out',
      'fade-out-up': 'fade-out-up 2s ease-out',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: ('0') },
        '100%': { opacity: ('100') },
      },
      fadeOut: {
        '100%': { opacity: ('100') },
        '0%': { opacity: ('0') },
      },
      fadeOutAnim: {
        '100%' : { opacity: "100"},
        "0%" : {opacity : "0"}
      },
      'fade-in-down': {
        '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
        },
        '100%': {
            opacity: '1',
            transform: 'translateY(0)'
        },
    },
    'fade-out-down': {
        'from': {
            opacity: '1',
            transform: 'translateY(0px)'
        },
        'to': {
            opacity: '0',
            transform: 'translateY(10px)'
        },
    },
    'fade-in-up': {
        '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
        },
        '100%': {
            opacity: '1',
            transform: 'translateY(0)'
        },
    },
    'fade-out-up': {
        'from': {
            opacity: '1',
            transform: 'translateY(0px)'
        },
        'to': {
            opacity: '0',
            transform: 'translateY(10px)'
        },
    }
    },
   },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
    },

  },
  plugins: [],
}
