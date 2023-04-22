export interface projectsType {
  find(arg0: (proj: { projectSlug: string; }) => boolean): projectsType;
  techStack: string;
  preview: string;
  gif: string;
  header: string;
  subHeader: string;
  desc1: string;
  desc2: string;
  desc3: string;
  appLink: string;
  githubLink: string;
  projectSlug: string;
  language: string;
  prevSlug: string;
  nextSlug: string;
}

const projects = [
  {
    techStack:
      `NextJS`,
    preview:
      "https://res.cloudinary.com/dkilrhnk7/image/upload/v1682128734/promptgen1_o1zekx.png",
    gif: "https://res.cloudinary.com/dkilrhnk7/image/upload/v1682127649/promptgen2demo_sglngi.gif",
    header: "Simple AI Art Prompt Generator",
    subHeader: "AI",
    desc1: `A tool to generate detailed prompts for programs like Midjourney, Stable Diffusion using only a subject.`,
    desc2: `Generate an idea that you can modify and iterate on.`,
    desc3: `Built on top of the OpenAI nodeJS quickstart project.`,
    appLink: "https://basic-aiart-prompt-generator.vercel.app/",
    githubLink: "https://github.com/berwyntan/basic-aiart-prompt-generator",
    projectSlug: "simpleaiartpromptgen",
    language: "Javascript",
    prevSlug: "chirp",
    nextSlug: "",
  },
  {
    techStack:
      `NextJS, React Query, TailwindCSS, tRPC, mySQL, Prisma`,
    preview:
      "https://res.cloudinary.com/dkilrhnk7/image/upload/v1681809783/chirp_jikzws.png",
    gif: "https://res.cloudinary.com/dkilrhnk7/image/upload/v1681809784/chirpdemo_qvihyv.gif",
    header: "Chirp",
    subHeader: "Twitter Clone",
    desc1: `A simple emoji only Twitter clone.`,
    desc2: `Built using the T3 stack.`,
    desc3: `Based on the T3 stack tutorial.`,
    appLink: "https://t3-tutorial-rho.vercel.app",
    githubLink: "https://github.com/berwyntan/t3-tutorial",
    projectSlug: "chirp",
    language: "Typescript",
    prevSlug: "simplelogin",
    nextSlug: "simpleaiartpromptgen",
  },
  {
    techStack:
      `ReactJS, Zustand, i18next | Spring Boot, Maven, MongoDB, Docker, AWS`,
    preview:
      "https://res.cloudinary.com/dkilrhnk7/image/upload/v1681808758/authjava_xttwbo.png",
    gif: "https://res.cloudinary.com/dkilrhnk7/image/upload/v1681808760/authjavademo_om5sp2.gif",
    header: "Login Page",
    subHeader: "Dual language support",
    desc1: `A simple login app.`,
    desc2: `Validation on both front and back end.`,
    desc3: `Back end stored on a Docker image and hosted on an AWS EC2 instance.`,
    appLink: "https://auth-java-client.vercel.app",
    githubLink: "https://github.com/berwyntan/auth-java-client",
    projectSlug: "simplelogin",
    language: "Javascript, Java",
    prevSlug: "calendar",
    nextSlug: "chirp",
  },
  {
    techStack:
      `ReactJS, Zustand, Papaparse, DayJS, TailwindCSS`,
    preview:
      "https://res.cloudinary.com/dkilrhnk7/image/upload/v1681804898/calendar_rukogp.png",
    gif: "https://res.cloudinary.com/dkilrhnk7/image/upload/v1681805620/calendardemo_tzuoz6.gif",
    header: "Calendar",
    subHeader: "Productivity",
    desc1: `A calendar app in the style of Google Calendar.`,
    desc2: `Events can be filtered based on department, meeting room or status.`,
    desc3: `Any event can be clicked on to see a modal with more details.`,
    appLink: "https://calendar-khaki-six.vercel.app/",
    githubLink: "https://github.com/berwyntan/calendar",
    projectSlug: "calendar",
    language: "Typescript",
    prevSlug: "groupbuy",
    nextSlug: "simplelogin",
  },
  {
    techStack:
      `ReactJS, React Query, TailwindCSS, Vitest, React Testing Library, Mock Service Worker | 
      NodeJS, ExpressJS, PostgreSQL, Sequelize, JWT, Twilio`,
    preview:
      "https://res.cloudinary.com/dkilrhnk7/image/upload/v1672368878/GroupBuyPreview_lsf9xb.png",
    gif: "https://res.cloudinary.com/dkilrhnk7/image/upload/v1681804500/groupbuydemo_jd1qux.gif",
    header: "GroupBuy",
    subHeader: "E-commerce",
    desc1: `Pain point: Groupbuy organizers spend too much time using WhatsApp, 
            Google Sheets and Forms to manage orders, payment and fulfilment.`,
    desc2: `Solution: A customer facing e-commerce store with admin dashboard, automating 
            the workflow originally with Google Sheets and Forms.
            App includes integration with WhatsApp to send preset messages with one click, avoiding repetition.`,
    desc3: `Features: Mobile responsive, 80% test coverage using Vitest, React Testing Library & Mock Service Worker`,
    appLink: "https://confused-puce-cuttlefish.cyclic.app",
    githubLink: "https://github.com/berwyntan/group-buy",
    projectSlug: "groupbuy",
    language: "Javascript",
    prevSlug: "todolistcs50",
    nextSlug: "calendar",
  },
  {
    techStack: "ReactJS, TailwindCSS, Zustand | NodeJS, ExpressJS, PostgreSQL, Sequelize, JWT",
    preview:
      "https://res.cloudinary.com/dkilrhnk7/image/upload/v1672755751/todolist-preview_wlfsqe.gif",
    gif: "https://res.cloudinary.com/dkilrhnk7/image/upload/v1672755752/todolist-gif2_uxlpph.gif",
    header: "ToDoList",
    subHeader: "Productivity",
    desc1: `Pain point: I like to see completed todos get checked off and disappearing, but I would like to reuse them so I do not have to type them again.`,
    desc2: `Solution: An app with two lists: todo and completed. Todos can be ticked off and sent to completed. Completed items can be repeated by sending them back into todos.`,
    desc3: `Features: Mobile responsive, Github/Leetcode style habit tracking heatmap`,
    appLink: "https://plain-tick-jodhpurs.cyclic.app",
    githubLink: "https://github.com/berwyntan/todolist-cs50",
    projectSlug: "todolistcs50",
    language: "Javascript",
    prevSlug: "techbar",
    nextSlug: "groupbuy",
  },
  {
    techStack: "ReactJS, Bootstrap | NodeJS, ExpressJS, MongoDB, Mongoose",
    preview:
      "https://res.cloudinary.com/dkilrhnk7/image/upload/v1672236942/uc_i9fsgt.gif",
    gif: "https://res.cloudinary.com/dkilrhnk7/image/upload/v1672236968/uc_wovjec.gif",
    header: "Techbar",
    subHeader: "E-commerce",
    desc1: `Collaborated as a team to build a MERN stack e-commerce application.`,
    desc2: `Focused on backend, implementing RESTful API. 
            Proactively prevent risk of server failure using validation and error catching.
            Wrote code in modular components using MVC design pattern.`,
    desc3: `Support team to integrate the front and back end API functions.`,
    appLink: "https://sore-blue-turtle-hat.cyclic.app",
    githubLink: "https://github.com/berwyntan/techbar",
    projectSlug: "techbar",
    language: "Javascript",
    prevSlug: "astronomyfullstack",
    nextSlug: "todolistcs50",
  },
  {
    techStack: "ReactJS, TailwindCSS, Cypress | NodeJS, ExpressJS, MongoDB, Mongoose",
    preview:
      "https://res.cloudinary.com/dkilrhnk7/image/upload/v1672237105/uc_hrwqbn.gif",
    gif: "https://res.cloudinary.com/dkilrhnk7/image/upload/v1672237123/uc_lcswl9.gif",
    header: "Astronomy App II",
    subHeader: "Instagram / Pinterest clone",
    desc1: `Image viewer in the style of Instagram & Pinterest using NASA's Astronomy Photo of the Day API.`,
    desc2: `Upgraded Astronomy App to MERN stack, including user authentication and personalised albums stored on a DB.`,
    desc3: `E2E testing with Cypress.`,
    appLink: "https://astronomy-app-2-client.vercel.app",
    githubLink: "https://github.com/berwyntan/astronomy-app-2",
    projectSlug: "astronomyfullstack",
    language: "Javascript",
    prevSlug: "astronomy",
    nextSlug: "techbar",
  },
  {
    techStack: "ReactJS, TailwindCSS, Airtable",
    preview:
      "https://res.cloudinary.com/dkilrhnk7/image/upload/v1672237182/uc_u79j0v.gif",
    gif: "https://res.cloudinary.com/dkilrhnk7/image/upload/v1672237936/chrome-capture_tstqv9.gif",
    header: "Astronomy App",
    subHeader: "Instagram / Pinterest clone",
    desc1:
      `Image viewer in the style of Instagram & Pinterest using NASA's Astronomy Photo of the Day API.`,
    desc2: `Features: infinite scroll, savable likes and albums, desktop responsive design.`,
    desc3: `Front end project using Airtable as backend`,
    appLink: "https://astronomy-photo-app.vercel.app",
    githubLink: "https://github.com/berwyntan/astronomy-photo-app",
    projectSlug: "astronomy",
    language: "Javascript",
    prevSlug: "candycrush",
    nextSlug: "astronomyfullstack",
  },
  {
    techStack: "HTML, CSS, jQuery",
    preview:
      "https://res.cloudinary.com/dkilrhnk7/image/upload/v1672237139/uc_h40jg7.gif",
    gif: "https://res.cloudinary.com/dkilrhnk7/image/upload/v1672237151/uc_ybrc9g.gif",
    header: "Candy Crush Clone",
    subHeader: "Desktop game",
    desc1: `A simple web browser version of the popular game.`,
    desc2: `Drag and drop of candies with Javascript event listeners.`,
    desc3: `Added my own twist to the game.`,
    appLink: "https://candycrushgame-alpha.vercel.app",
    githubLink: "https://github.com/berwyntan/candycrushgame",
    projectSlug: "candycrush",
    language: "Javascript",
    prevSlug: "portfoliov2",
    nextSlug: "astronomy",
  },
  {
    techStack: "ReactJS, TailwindCSS",
    preview:
      "https://res.cloudinary.com/dkilrhnk7/image/upload/v1681810440/portfoliov2_chn1zr.png",
    gif: "https://res.cloudinary.com/dkilrhnk7/image/upload/v1681810442/portfoliov2demo_gf66hs.gif",
    header: "Portfolio V2",
    subHeader: "Portfolio",
    desc1: `My second portfolio.`,
    desc2: `Single page portfolio.`,
    desc3: ``,
    appLink: "https://berwyntanv2.vercel.app/",
    githubLink: "https://github.com/berwyntan/portfolio-v2",
    projectSlug: "portfoliov2",
    language: "Javascript",
    prevSlug: "portfoliov1",
    nextSlug: "candycrush",
  },
  {
    techStack: "ReactJS, MaterialUI",
    preview:
      "https://res.cloudinary.com/dkilrhnk7/image/upload/v1681804011/portfoliov1_gjiwec.png",
    gif: "https://res.cloudinary.com/dkilrhnk7/image/upload/v1681804011/portfoliov1demo_toctmh.gif",
    header: "Portfolio V1",
    subHeader: "Portfolio",
    desc1: `My first portfolio.`,
    desc2: `Added a Youtube style preview where hovering over the tab loads a moving image.`,
    desc3: ``,
    appLink: "https://berwyntanv1.vercel.app/",
    githubLink: "https://github.com/berwyntan/portfolio",
    projectSlug: "portfoliov1",
    language: "Javascript",
    prevSlug: "",
    nextSlug: "portfoliov2",
  },
];

export default projects;
