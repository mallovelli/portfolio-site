// Upload files in static/ So any file static/file.pdf -> /file.pdf is accessible at root

export default {
  name: 'Mokutmfon Okon',
  domain: 'mallovelli.live', // add without https:// , used in meta tags and share urls
  image: '/images/Bigheadmallovelli2.png',
  email: 'mokut.okon4@gmail.com',
  googleAnalyticsV4: {
    enabled: false,
    id: 'G-MNDKB1HST9'
  },
  plausibleAnalytics: {
    enabled: false,
    domain: 'template.karngyan.com',
    trackLocalhost: false,
    // leave it empty if plausible is not self hosted
    apiHost: 'https://plausible.io' // default: https://plausible.io
  },
  // enable if you want comments and likes on posts
  // see how it looks on karngyan.com
  firebase: {
    enabled: false
  },
  social: {
    github: 'mallovelli',
    linkedin: 'linkedin.com/in/mokutmfon-okon-ab5255116',
    //facebook: 'Malloy Okon',
    twitter: 'mallovelli',
    //instagram: 'mancshaft_',
    codestats: 'Mallovelli' // https://codestats.net make a profile if you dont already have one.
  },
  buyMeACoffee: {
    enabled: true,
    url: 'https://www.buymeacoffee.com/mokutokon4g'
  },
  projects: {
    enabled: true,
  },
  blog: {
    enabled: false,
  },
  resume: {
    enabled: true,
    pdfUrl: '/MainResume (2).pdf' // add files in static folder
  },
  uses: {
    enabled: false,
    //meta: [
      //{title: 'OS', value: 'Windows 10 pro'},
      //{title: 'Memory', value: '16 GB 2667 MHz DDR4'},
      //{title: 'Keyboard', value: 'Keychron K2 - Gateron Brown Keys'},
      //{title: 'Mouse', value: 'Logitech Silent Pebble'},
      //{title: 'Monitor', value: 'LG QHD (2560 x 1440) 27 Inch IPS Display'},
      //{title: 'Laptop • Processor • Graphics', value: 'MacBook Pro (16-inch, 2019) • 2.6 GHz 6-Core Intel Core i7 • AMD Radeon Pro 5300M 4 GB + Intel UHD Graphics 630 1536 MB'}
    //]
  },
  workedAt: {
    // add logos in static and at max add 3/4
    enabled: false,
    meta: [
      { name: 'SendPost', src: '/images/sendpost.png', url: 'https://sendpost.io' },
      { name: 'Amazon', src: '/images/amazon.png', url: 'https://amazon.in' },
      { name: 'InterviewReady', src: '/images/interviewready-io.png', url: 'https://get.interviewready.io' },
      { name: 'CrioDo', src: '/images/crio.png', url: 'https://crio.do' },
    ]
  },
  recommendations: {
    enabled: false,
    meta: [
      { name: 'Varun Jain', designation: 'Founder, SendX & SendPost', image: '/images/varun.jpeg', linkedin: 'https://www.linkedin.com/in/varun-jain-582b0215/', content: 'Gyan interned with SendX and SendPost for around 6 months. He is a very strong full-stack engineer who can create pixel perfect frontend while being able to work on backend pieces sending millions of emails per day. He is a quick learner, a great team player and, has a very strong work ethic. You can rely on him that things will be done with utmost quality. He also has pretty good product instincts and can think from the user\'s perspective.' },
      { name: 'Gaurav Sen', designation: 'Founder, InterviewReady', image: '/images/gaurav.jpeg', linkedin: 'https://www.linkedin.com/in/gkcs/', content: 'Karn is an extraordinarily talented, diligent and foresighted individual. He is gifted at building products from paper to code, and has a knack of finding efficient solutions to complex problems. In my experience, I have rarely seen such a mixture of talent and passion put together. At InterviewReady, Karn exceeded our expectations. If you are considering working with him: congratulations, you are going to have a great time!' },
    ]
  },
  loadingIndicator: {
    name: 'pulse'
    // https://tobiasahlin.com/spinkit/
    // circle
    // cube-grid
    // fading-circle
    // folding-cube
    // chasing-dots
    // nuxt
    // pulse
    // rectangle-bounce
    // rotating-plane
    // three-bounce
    // wandering-cubes
  },
  laguageSwitcher: {
    enabled: true,
  },
  strings: {
    en_US: {
      download: 'download',
      nav: {
        home: 'home',
        blog: 'blog',
        projects: 'projects',
        uses: 'uses',
        resume: 'résumé',
        buyMeACoffee: 'buy me a beer',
        //signIn: 'sign in',
        //signOut: 'sign out'
      },
      hero: {
        iBlogTech: 'I write about my travels',
        haveALook: 'have a look',
        friendlyNeighborhood: 'Hi, you can call me Malloy',
        description: 'Im a UI/UX designer with some background in front-end development. My passion for novel exploration inspires me to make designs empathetically, to promote the social integration of people, while matching the rapid technological development. I’m always excited to work with a team of multiple personalities to facilitate authenticity of products.',
        words: ['UI designer', 'UX designer', 'Visual designer', 'Web designer', 'Product designer', 'Developer', 'UI engineer'],
      },
      githubCalendar: {
        header: 'contributions',
        subtext: 'github calendar heatmap'
      },
      blog: {
        header: 'blog',
        subtext: 'I try to write as often as I can'
      },
      recentBlog: {
        header: 'recent blogs',
        subtext: 'it takes a lot of time to write man'
      },
      uses: {
        header: 'uses',
        subtext: 'some codestats.net flex'
      },
      projects: {
        header: 'projects',
        subtext: 'This page lists some of my certification projects, work projects and personal projects. Every project has some story, click on the title to view'
      },
      recommendations: {
        header: 'recommendations',
        subtext: 'what do my mentors say'
      }
    }
  }
}
