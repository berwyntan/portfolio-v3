export interface projectsType {
  techStack: string;
  preview: string;
  gif: string;
  header: string,
  subHeader: string;
  description: string;
  appLink: string;
  githubLink: string;
  projectSlug: string;
  language: string;
}

const projects = [
  {
    techStack:
      "PostgreSQL, ExpressJS, ReactJS, React Query, TailwindCSS, Twilio, JWT, Vitest, Mock Service Worker",
    preview:
      "https://res.cloudinary.com/dkilrhnk7/image/upload/v1672368878/GroupBuyPreview_lsf9xb.png",
    gif: "https://res.cloudinary.com/dkilrhnk7/image/upload/v1672368879/GroupBuyGif_plrika.gif",
    header: "GroupBuy",
    subHeader: "E-commerce",
    description: `Pain point: Groupbuy organizers spend too much time using WhatsApp, Google Forms to manage orders, payment and fulfilment.
            Proposed solution: A mobile/desktop responsive customer facing e-commerce storefront with admin dashboard to manage listings, orders, payment, fulfilment and collection.
            App includes integration with WhatsApp to send preset messages with one click, avoiding repetition and saving time.
            Carried out automated testing with Vitest for this project.
            `,
    appLink: "https://confused-puce-cuttlefish.cyclic.app",
    githubLink: "https://github.com/berwyntan/group-buy",
    projectSlug: "groupbuy",
    language: "Javascript"
  },
  {
    techStack: "PostgreSQL, ExpressJS, ReactJS, TailwindCSS, JWT",
    preview:
      "https://res.cloudinary.com/dkilrhnk7/image/upload/v1672755751/todolist-preview_wlfsqe.gif",
    gif: "https://res.cloudinary.com/dkilrhnk7/image/upload/v1672755752/todolist-gif2_uxlpph.gif",
    header: "ToDoList",
    subHeader: "Productivity",
    description: `Pain point: I like to see completed todos get checked off and disappearing, but I would like to reuse them so I do not have to type them again.
            Proposed solution: A mobile/desktop responsive app with two lists: todo and completed. Completed items can be repeated by sending them back into todos.
            Includes tracking of repeated todos in the style of Github.
            `,
    appLink: "https://plain-tick-jodhpurs.cyclic.app",
    githubLink: "https://github.com/berwyntan/todolist-cs50",
    projectSlug: "todolistcs50",
    language: "Javascript"
  },
  {
    techStack: "MongoDB, ExpressJS, ReactJS, Bootstrap",
    preview:
      "https://res.cloudinary.com/dkilrhnk7/image/upload/v1672236942/uc_i9fsgt.gif",
    gif: "https://res.cloudinary.com/dkilrhnk7/image/upload/v1672236968/uc_wovjec.gif",
    header: "Techbar",
    subHeader: "E-commerce",
    description: `Collaborate as a team to build a MERN stack e-commerce application.
            Focused on backend, implementing RESTful API. 
            Proactively prevent risk of server failure using validation and error catching.
            Wrote code in modular components using MVC design pattern.
            Support team to integrate the front and back end API functions.`,
    appLink: "https://sore-blue-turtle-hat.cyclic.app",
    githubLink: "https://github.com/berwyntan/techbar",
    projectSlug: "techbar",
    language: "Javascript"
  },
  {
    techStack: "MongoDB, ExpressJS, ReactJS, Cypress, TailwindCSS",
    preview:
      "https://res.cloudinary.com/dkilrhnk7/image/upload/v1672237105/uc_hrwqbn.gif",
    gif: "https://res.cloudinary.com/dkilrhnk7/image/upload/v1672237123/uc_lcswl9.gif",
    header: "Astronomy App II",
    subHeader: "Image viewer",
    description: `Image viewer in the style of Instagram & Pinterest using NASA's Astronomy Photo of the Day API.
            Converted app to fullstack (MERN), enabling user authentication and personalised albums.
            Test with Cypress (end-to-end).`,
    appLink: "https://astronomy-app-2-client.vercel.app",
    githubLink: "https://github.com/berwyntan/astronomy-app-2",
    projectSlug: "astronomyfullstack",
    language: "Javascript"
  },
  {
    techStack: "ReactJS, TailwindCSS, Airtable",
    preview:
      "https://res.cloudinary.com/dkilrhnk7/image/upload/v1672237182/uc_u79j0v.gif",
    gif: "https://res.cloudinary.com/dkilrhnk7/image/upload/v1672237936/chrome-capture_tstqv9.gif",
    header: "Astronomy App",
    subHeader: "Image viewer",
    description:
      "Frontend image viewer using Airtable as backend. Features: infinite scroll, savable likes and albums (on Airtable), desktop responsive design",
    appLink: "https://astronomy-photo-app.vercel.app",
    githubLink: "https://github.com/berwyntan/astronomy-photo-app",
    projectSlug: "astronomy",
    language: "Javascript"
  },
  {
    techStack: "HTML, CSS, jQuery",
    preview:
      "https://res.cloudinary.com/dkilrhnk7/image/upload/v1672237139/uc_h40jg7.gif",
    gif: "https://res.cloudinary.com/dkilrhnk7/image/upload/v1672237151/uc_ybrc9g.gif",
    header: "Candy Crush Clone",
    subHeader: "Desktop game",
    description: `A simple web browser version of the popular game.
        Implement drag and drop of candies.`,
    appLink: "https://candycrushgame-alpha.vercel.app",
    githubLink: "https://github.com/berwyntan/candycrushgame",
    projectSlug: "candycrush",
    language: "Javascript"
  },
];

export default projects;
