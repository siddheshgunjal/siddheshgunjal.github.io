// ============================================================
//  Portfolio Projects — Single Source of Truth
//  Each project is keyed by its slug (filename without .html).
//  The order of entries below is the order they appear on the
//  portfolio grid in the front-end. To add, remove, reorder, or
//  edit a project, modify only this file.
//  The detail page is rendered by js/animating.js (renderProject).
//  The grid tiles are rendered by js/main.js (renderPortfolioGrid).
//
//  Media: provide exactly one of:
//    video:  'https://...'   — embedded video (YouTube, Drive, etc.)
//    images: ['img/...']     — image carousel (owlCarousel)
//  Optional: links: [{ icon, label, href }] — extra info links
// ============================================================
window.PROJECTS = {
  tokenflow: {
    slug: "tokenflow",
    title: "TokenFlow",
    category: "Desktop Application",
    thumbnail: "img/portfolio/tokenflow_logo.jpg",
    groups: ["category_all", "category_open"],
    video: "/videos/tokenflow_demo.mp4",
    links: [
      { icon: "globe", label: "Website", href: "https://token-flow.xyz" },
      {
        icon: "github",
        label: "Github",
        href: "https://github.com/siddheshgunjal/TokenFlow",
      },
    ],
    description: [
      "TokenFlow is a private dashboard for Ollama and DeepSeek usage. Analyse your Local AI usage and DeepSeek balance history without uploading your usage data anywhere.",
      '<ul class="text-justify"><li><span>&#8226;</span> Built with Rust</li><li><span>&#8226;</span> No telemetry</li><li><span>&#8226;</span> Local Processing</li><li><span>&#8226;</span> Keychain Protection</li></ul>',
      "",
      "Unlike other tools, TokenFlow stays put! TokenFlow is built with Rust for a small footprint (~30 MB after install) and lower memory overhead (~60 MB while running).",
      "It also uses the system keychain for secure storage of your API keys.",
    ],
    tags: ["Rust", "Tauri", "Axum", "Tailwind CSS", "Framer Motion"],
  },
  fluxtest: {
    slug: "fluxtest",
    title: "FluxTest",
    category: "Docker Application",
    thumbnail: "img/portfolio/fluxtest_logo.jpg",
    groups: ["category_all", "category_open"],
    video: "/videos/fluxtest_demo.mp4",
    links: [
      { icon: "globe", label: "Website", href: "https://flux-test.com" },
      {
        icon: "github",
        label: "Github",
        href: "https://github.com/siddheshgunjal/flux-test",
      },
    ],
    description: [
      "FluxTest is a self-hosted server network diagnosis tool that measures:",
      '<ul class="text-justify"><li><span>&#8226;</span> Latency (round-trip time)</li><li><span>&#8226;</span> Jitter (RTT consistency)</li><li><span>&#8226;</span> Download throughput</li><li><span>&#8226;</span> Upload throughput</li><li><span>&#8226;</span> Bufferbloat (latency under load)</li></ul>',
      "",
      "After each test, FluxTest generates an overall A–F network score with per-metric diagnosis and actionable recommendations. Results can be exported as a branded PNG report card.",
    ],
    tags: ["Python", "Flask", "React", "Tailwind CSS", "Docker"],
  },

  slackker: {
    slug: "slackker",
    title: "Slackker",
    category: "Python Package",
    thumbnail: "img/portfolio/slackker-logo.jpg",
    groups: ["category_all", "category_open"],
    video: "/videos/slackker_demo.mp4",
    links: [
      { icon: "globe", label: "Website", href: "https://slackker.com" },
      {
        icon: "github",
        label: "Github",
        href: "https://github.com/siddheshgunjal/slackker",
      },
    ],
    description: [
      "Slackker sends real-time notifications for any Python script, data pipeline, ML training run, or automation workflow — complete with metrics, outputs, and optional plots.",
      '<p class="text-justify">Key Features:</p><ul class="text-justify"><li><span>&#8226;</span> Easy integration</li><li><span>&#8226;</span> Real-time Updates</li><li><span>&#8226;</span> Plots for training</li><li><span>&#8226;</span> Customizable notifications</li></ul>',
      "",
      "Stop babysitting terminal. Slackker keeps you informed so you can stay heads-down on what actually matters.",
    ],
    tags: ["Python", "HTTPX", "GraphAPI", "AsyncIO", "AIOHTTP"],
  },

  emodetect: {
    slug: "emodetect",
    title: "Emo-Detect",
    category: "Desktop Application",
    thumbnail: "img/portfolio/emo-detect.jpg",
    groups: ["category_all", "category_ml"],
    video:
      "https://www.youtube-nocookie.com/embed/bszI8bzNLAQ?si=jcLxVxueDw0v-ZlW",
    description:
      "Emo-Detect is a standalone (Windows/MacOS) application with the capability to track user's emotions in the background with specified interval throughout the day/session. Admin can later visualise the emotion distribution for particular user through admin portal in the app itself. This app is optimized to run in the background with minimal CPU usage.",
    tags: [
      "Python",
      "TensorFlow",
      "OpenCV",
      "Kalman Face Tracker",
      "CustomTkinter",
    ],
  },

  aicam: {
    slug: "aicam",
    title: "AI assisted CCTV",
    category: "Desktop Application",
    thumbnail: "img/portfolio/cctv-system.jpg",
    groups: ["category_all", "category_ml"],
    video:
      "https://www.youtube-nocookie.com/embed/uZbm7H9Fg7c?si=dG9s-WlXX6vvs06U",
    description:
      "This application will track all the faces that CCTV captures in realtime. It will track all the faces from all camera feeds and saves the best position and assigns unique UUID to each face tracked and saved in database. This can be later combined with face clustering algorithm to track the person's movement.",
    tags: [
      "Python",
      "TensorFlow",
      "Multi-Task CNN",
      "OpenCV",
      "Kalman Face Tracker",
    ],
  },

  spatialarweb: {
    slug: "spatialarweb",
    title: "Spatial AR on Web",
    category: "WebAR",
    thumbnail: "img/portfolio/spatial-ar.jpg",
    groups: ["category_all", "category_ar", "category_open"],
    video:
      "https://www.youtube-nocookie.com/embed/j-Byh7Og2Ks?si=w3kHCPd1XtJQoEQi",
    links: [
      {
        icon: "github",
        label: "Github",
        href: "https://github.com/siddheshgunjal/html_surface_tracking",
      },
      {
        icon: "html5",
        label: "Live WebApp",
        href: "https://siddheshgunjal.github.io/html_surface_tracking/",
      },
    ],
    description:
      "This WebApp utilizes WebXR API to communicate with Android's ARCore for spatial computing of the surroundings to detect planes and objects. This WebApp aims to provide an innovative and engaging way for you to explore and learn about places, things, etc. leading to increased engagement and improved customer satisfaction.",
    tags: ["ThreeJS", "WebXR", "HTML5", "CSS3", "JavaScript"],
  },

  tableqa: {
    slug: "tableqa",
    title: "TableQA (Contributor)",
    category: "NLP",
    thumbnail: "img/portfolio/tableQA.jpg",
    groups: ["category_all", "category_open", "category_ml"],
    images: [
      "img/portfolio/tableQA.jpg",
      "img/portfolio/full/tableqa1.jpg",
      "img/portfolio/full/tableqa2.jpg",
    ],
    links: [
      {
        icon: "github",
        label: "Github",
        href: "https://github.com/abhijithneilabraham/tableQA",
      },
    ],
    description:
      "AI Tool for querying natural language on tabular data. Built using QA models from transformers. No additional training required. Unlike other table querying tools like TAPAS, In2sql, etc, This tool does not have any limit on data size. In addition to loading from mulitple CSVs it also supports databases - SQLite, Postgresql, MySQL, Amazon RDS (Postgresql, MySQL). You can also add manual schema of your database for customized experience and better performance.",
    tags: ["Python", "Transformers", "NLP", "SQL", "GraphQL"],
  },

  ayadata: {
    slug: "ayadata",
    title: "Aya 101 (Contributor)",
    category: "NLP",
    thumbnail: "img/portfolio/aya.jpg",
    groups: ["category_all", "category_open", "category_ml"],
    images: [
      "img/portfolio/full/aya_sid.jpg",
      "img/portfolio/full/aya_expanse.jpg",
      "img/portfolio/full/aya_fig.jpg",
    ],
    links: [
      {
        icon: "database",
        label: "Aya Dataset",
        href: "https://huggingface.co/datasets/CohereForAI/aya_dataset",
      },
      {
        icon: "cube",
        label: "Aya 101 Model",
        href: "https://huggingface.co/CohereForAI/aya-101",
      },
      {
        icon: "cube",
        label: "Aya Expanse Model",
        href: "https://huggingface.co/blog/ariG23498/cohere-aya-expanse",
      },
    ],
    description:
      "The Aya Dataset is a multilingual instruction fine-tuning dataset curated by an open-science community via Aya Annotation Platform from Cohere For AI. The dataset contains a total of 204k human-annotated prompt-completion pairs along with the demographics data of the annotators. This dataset can be used to train, finetune, and evaluate multilingual LLMs.",
    tags: ["Python", "Transformers", "NLP"],
  },

  webarmenu: {
    slug: "webarmenu",
    title: "WebAR Menu",
    category: "WebAR",
    thumbnail: "img/portfolio/webar_menu.jpg",
    groups: ["category_all", "category_ar"],
    video:
      "https://www.youtube-nocookie.com/embed/5fK7VdjRMZ4?si=9KZ0T6NUmjpjClgT",
    description:
      "This is WebAR application can be integrated into any website. This AR menu will allow website visitors to interact with the menu items in an immersive and interactive way using their handheld devices. The menu is compatible with all handheld devices, and it will allow users to view and interact with 3D models of the products or services.",
    tags: ["TensoFlowJS", "OpenCV", "ThreeJS", "JavaScript", "HTML5", "CSS3"],
  },

  arbrochure: {
    slug: "arbrochure",
    title: "Interactive Brochure",
    category: "WebAR",
    thumbnail: "img/portfolio/ar_brochure.jpg",
    groups: ["category_all", "category_ar"],
    video: "https://youtube.com/embed/7uZQcP882ms?si=PpeeaC6gibjvldtY",
    description:
      "The goal was to develop a WebAR application that can be integrated with any brochure for a real estate company. This AR enabled brochure will provide an immersive and interactive experience for potential buyers to explore properties in a unique and engaging way. This will allow users to view 3D models of properties and explore floor plans of the properties.",
    tags: ["TensorFlowJS", "OpenCV", "ThreeJS", "JavaScript", "HTML5", "CSS3"],
  },

  arpackaging: {
    slug: "arpackaging",
    title: "AR enabled Packaging",
    category: "WebAR",
    thumbnail: "img/portfolio/ar_pack.jpg",
    groups: ["category_all", "category_ar"],
    video:
      "https://www.youtube-nocookie.com/embed/XuBst0Be_rY?si=h58OeZhLwJTeATq2",
    description:
      "AR packaging is WebAR product packaging solution for a companies that wants to provide an immersive and interactive experience for their customers. The WebAR product packaging will be designed to showcase the product's features, benefits, and even provide instructions on how to use the product,",
    tags: ["TensoFlowJS", "OpenCV", "ThreeJS", "JavaScript", "HTML5", "CSS3"],
  },

  virtualtour: {
    slug: "virtualtour",
    title: "Virtual Tour on Web",
    category: "AR",
    thumbnail: "img/portfolio/virtual_tour.jpg",
    groups: ["category_all", "category_ar"],
    video:
      "https://drive.google.com/file/d/10WRbkFX2U8T9pJqLeJ7l-W9ioEx4aMlk/preview",
    links: [
      {
        icon: "html5",
        label: "Live WebApp",
        href: "https://siddheshgunjal.github.io/house-virtual-tour/",
      },
    ],
    description:
      "This WebApp utilizes ThreeJS & WebVR API to create interactive 3D tours for any screen (Desktop/Mobile/VR device). Integrate any 360 Panorama, 360 Video, 3D model, photos, floorplans and more into your virtual tour. This WebApp aims to provide an innovative and engaging way for you to explore and learn about places, things, etc. leading to increased engagement and improved customer satisfaction.",
    tags: ["ThreeJS", "WebVR", "HTML5", "CSS3", "JavaScript"],
  },

  arcarshowroom: {
    slug: "arcarshowroom",
    title: "AR Car Showroom",
    category: "AR",
    thumbnail: "img/portfolio/ar_car.jpg",
    groups: ["category_all", "category_ar"],
    video:
      "https://www.youtube-nocookie.com/embed/551ibTofbUU?si=MwY6itpRkAmr7S9m",
    description:
      "The AR car showroom solution will allow customers to access the showroom through their mobile devices and interact with Digital-Twin of the cars. Customers will be able to explore the exterior and interior of cars, customize the colors, features and learn about the car's specifions.",
    tags: ["Unity Engine", "C#", "Blender", "Substance Painter"],
  },

  dental3d: {
    slug: "dental3d",
    title: "Dental 3D",
    category: "Web3D",
    thumbnail: "img/portfolio/dental3d.jpg",
    groups: ["category_all", "category_ar"],
    video:
      "https://www.youtube-nocookie.com/embed/mUJFGz3Vu08?si=mmY_JDSfgcNfrFSi",
    description:
      "Dental 3D is a WebApp that provides an interactive experience for patients to explore and learn about dental procedures and their dental structure. It uses 3D modeling and optimised rendering technology to create realistic and detailed simulation of dental procedures, allowing better patient engagement and understanding of dental procedures.",
    tags: ["ThreeJS", "HTML5", "CSS3", "JavaScript", "jQuery", "Ajax", "PHP5"],
  },

  covidwarrior: {
    slug: "covidwarrior",
    title: "Covid Warrior - MR Game",
    category: "Mixed Reality",
    thumbnail: "img/portfolio/covid_warriro.jpg",
    groups: ["category_all", "category_ar"],
    video:
      "https://www.youtube-nocookie.com/embed/meqyERsP1bQ?si=dMXzavqrwJ2v-T64",
    description:
      "Covid Warrior is a Multiplayer Game build for Mixed reality devices such as Microsoft Hololens 2, XReal Air 2 Ultra, Magic Leap One, Apple Vision Pro, etc. To initiate the game we can either scan nearby area for flat surface or scan the target image to initiate game at that exact location. Maximum of 3 players can join the same arena. Our target in the game is to survive Covid-19 waves without any one dying.",
    tags: [
      "C#",
      "Unity Engine",
      "Mixed Reality Toolkit (MRTK)",
      "Blender",
      "Substance Painter",
    ],
  },

  diamoncount: {
    slug: "diamoncount",
    title: "Diamond Count",
    category: "Computer Vision",
    thumbnail: "img/portfolio/diamond.jpg",
    groups: ["category_all", "category_ml"],
    video:
      "https://www.youtube-nocookie.com/embed/L-vLROB_AvA?si=nxjx_R0EUC8oDJmT",
    description:
      "This application will be able to count all the diamonds in the frame in realtime with ~98% accuracy. This application used a fine-tunned version of MobileNetV2 for optimized performance on handheld device. This application was later compiled with Flutter for on-device deployment on Android/iOS devices.",
    tags: ["Python", "TensorFlow", "OpenCV", "Flutter", "Dart"],
  },

  invoicevision: {
    slug: "invoicevision",
    title: "Invoice Vision",
    category: "Computer Vision",
    thumbnail: "img/portfolio/invoice.jpg",
    groups: ["category_all", "category_ml"],
    video:
      "https://www.youtube-nocookie.com/embed/IoO_VuaIVoA?si=hunXDbdrPBjjuo4Y",
    description:
      "Invoice vision is a WebApp that uses computer vision to automatically detect and extract relevant information from invoices, such as the vendor name, invoice number, date, particulars, their amount and total amount. This will streamline the invoicing process, reducing the need for manual data entry and saving time and resources for businesses.",
    tags: ["Python", "TensorFlow", "OpenCV", "Flask", "HTML5", "CSS"],
  },

  mybash: {
    slug: "mybash",
    title: "Mybash (Contributor)",
    category: "Linux Customization",
    thumbnail: "img/portfolio/mybash.jpg",
    groups: ["category_all", "category_open"],
    images: ["img/portfolio/mybash.jpg", "img/portfolio/full/mybash.png"],
    links: [
      {
        icon: "github",
        label: "Github",
        href: "https://github.com/christitustech/mybash",
      },
    ],
    description:
      "My Bash profile - Highly customized Starship Theme - Just imagine Powerlevel10k and Nord Theme had a baby. It is used to configure the shell session, set up aliases, define functions, and more, making the terminal easier to use and more powerful. It provides a comprehensive setup that enhances the shell experience with useful features and caters to different user needs and system types.",
    tags: ["Shell", "Linux"],
  },

  motioncontrol: {
    slug: "motioncontrol",
    title: "Motion Controlled Hologram",
    category: "Computer Vision",
    thumbnail: "img/portfolio/motion_control.jpg",
    groups: ["category_all", "category_ml", "category_ar"],
    video:
      "https://www.youtube-nocookie.com/embed/DBZbqVMPRYo?si=mO7jO4bHEx7jBQvm",
    description:
      "This Application will allow us to interact with any 3D environment (Hologram, Mixed Reality object, etc.) with natural human motions/gestures. The motion control system for holograms can be used in many places such as Museums, historical places, etc. to provide an intuitive and immersive experience for users, allowing them to interact with hologran in a unique and engaging way.",
    tags: ["Python", "C#", "TensorFlow", "OpenCV", "Unity Engine"],
  },

  ratlab: {
    slug: "ratlab",
    title: "RatLab",
    category: "VR",
    thumbnail: "img/portfolio/ratlab.jpg",
    groups: ["category_all", "category_ar"],
    video:
      "https://www.youtube-nocookie.com/embed/lW6YZQ-ygdU?si=WvPNJwsHuERHMhjM",
    description:
      "RatLab is a VR based body dissection tool for education, allowing students to learn about rat anatomy, physiology and get and hands on experience to conduct an operation. This will help students to get an idea of correct procedure to follow during and actual dissection/operation and build their confidence to get ready to conduct an operation in real life.",
    tags: ["Unity Engine", "C#", "Blender", "Substance Painter", "Oculus"],
  },

  damoverflow: {
    slug: "damoverflow",
    title: "Dam OverFlow Prediction",
    category: "Machine Learning",
    thumbnail: "img/portfolio/dam.jpg",
    groups: ["category_all", "category_ml"],
    video:
      "https://drive.google.com/file/d/1Zl7HcLk70atXId38uP6dGRPKqofO79oK/preview",
    description:
      "The goal of this project was to predict the overflow from dam in india for the 4 month of rainy season. This could be useful in the villages near Dam area. This could potentially save a lot of lives. The above graph of prediction was the final output from the model showing predictions for dam water level from May 2019 - August 2019",
    tags: ["Python", "TensorFlow", "IBM Watson"],
  },

  nuceisegment: {
    slug: "nuceisegment",
    title: "Nuclei Detect",
    category: "Computer Vision",
    thumbnail: "img/portfolio/nuclei_detect.jpg",
    groups: ["category_all", "category_ml"],
    images: [
      "img/portfolio/full/nucleus1.png",
      "img/portfolio/full/nucleus2.png",
      "img/portfolio/full/nucleus3.png",
    ],
    description:
      "The objective was to detect and segment the Nuclei from the microscopic images of cells and organisms. This project later served as a backbone for Breast Cancer cells detection. Model was first tested with ResNet 50. After the successful implementation of application ResNet 101 was used as a Backbone to achieve higher accuracy and precision. After successful training and deployment of model it was performing great was achieving score ~92%.",
    tags: ["Python", "TensorFlow", "OpenCV", "ResNet"],
  },

  flappydeeprl: {
    slug: "flappydeeprl",
    title: "Flappy Bird - AI",
    category: "Reinforcement Learning",
    thumbnail: "img/portfolio/flappy_ai.jpg",
    groups: ["category_all", "category_ml"],
    video:
      "https://drive.google.com/file/d/1F4IqvoS-QW0pkWuswPQ-NPq7C5GC4WtE/preview",
    description:
      "Objective of the project was to make a flappy bird Agent game which can learn to play the game itself and break my high score (which is 93).<br><br>Conclusion: After the Agent was trained properly it was able to beat my high score and reach the highest score of 268.",
    tags: [
      "Python",
      "TensorFlow",
      "Reinforcement Learning",
      "Deep Q-learning Networks",
      "PyGame",
    ],
  },

  twittersentiment: {
    slug: "twittersentiment",
    title: "Twitter Sentiment",
    category: "NLP",
    thumbnail: "img/portfolio/sentiment.jpg",
    groups: ["category_all", "category_ml"],
    images: [
      "img/portfolio/full/twitter2.png",
      "img/portfolio/full/twitter3.png",
      "img/portfolio/full/twitter4.png",
      "img/portfolio/full/twitter5.png",
    ],
    description:
      "Objective of this project was to understand and predict the Sentiment for a particular Sentence. For the initial training and testing tweeter data was used for 2 different case studies.<br><br>CASE STUDY 1: Sentiment analysis for tweets in the year 2008 (When tweeter actually got famous)<br>CASE STUDY 2: Sentiment analysis and prediction for tweet in the period of Trump election in US.<br><br>For both case studies tweets were analyzed for most common words in +ve & -ve tweets also Hashtag analysis was done to understand the most common hashtag trends in the period. Predictions were done using different Methods including CNN, LSTM, CNN with word2vec, LSTM with word2vec.",
    tags: ["Python", "TensorFlow", "NLTK", "LSTM", "CNN"],
  },

  selfdriving: {
    slug: "selfdriving",
    title: "Self Driving Car",
    category: "Computer Vision",
    thumbnail: "img/portfolio/self_driving.jpg",
    groups: ["category_all", "category_ml", "category_open"],
    video:
      "https://www.youtube-nocookie.com/embed/ILDuh4AG-ik?si=OQqgeZhZlnFZs7pu",
    links: [
      {
        icon: "github",
        label: "Github",
        href: "https://github.com/siddheshgunjal/self-driving-car-unity-simulator",
      },
    ],
    description:
      "The Objective of this project was to build a custom Convolutional Neural Network for Self Driving car. This was achieved with a Computer Vision and Tensorflow to build a neural network backend. A simple 9 layer CNN is used to develop this model. After successful training, the car(agent) was able to complete multiple laps of the track without a single mistake. To simulate the environment of Car driving, I used Udacity's Car Simulator.",
    tags: ["Python", "TensorFlow", "CNN", "OpenCV", "Unity Engine"],
  },
};
