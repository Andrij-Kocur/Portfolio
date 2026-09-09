/*
  HOW TO ADD A NEW PROJECT
  ------------------------
  1. Copy one of the { ... } blocks below (including the curly braces).
  2. Paste it right after the opening "const projects = [" line, so it appears at the top of the list.
  3. Fill in your own title, date, description, tags, and link.
  4. Save the file. That's it — no other file needs to change.

  Fields:
    title       - project name, shown as the heading
    date        - shown as-is, e.g. "Sep 2026" or "2026-09-06"
    description - one or two sentences about what it is / what you did (shown in the list)
    tags        - a list of short labels used for filtering, e.g. ["SQL", "Automation"]
    link        - (optional) URL to the live project, repo, or write-up. Leave as "" if there's nothing to link to.
    image       - (optional) filename of an image to show, e.g. "project1.jpg". Put the image
                  file in this same folder, next to index.html, then reference its filename here.
                  Leave as "" to show no image.
    details     - (optional) the full write-up, shown behind a "Full project details" toggle
                  so the list stays clean. It's a list of sections, each with a heading and
                  bullet points:
                    details: [
                      { heading: "Hardware Used", points: ["Item one", "Item two"] },
                      { heading: "What Was Achieved", points: ["Result one", "Result two"] }
                    ]
                  Leave as [] (empty) if you don't need a detailed write-up for that project.

  Site links (email, LinkedIn, etc.) are set separately below, in "siteLinks".
*/

const projects = [
  {
    title: "Pip-Boy Information and Character Management System",
    date: "2026 Dec",
    description: "Built a Pip-Boy-inspired character and game information management application in LabVIEW, with editable player stats, inventory, weapons and armour data all synced to CSV files.",
    tags: ["LabVIEW", "CSV", "Application Development"],
    link: "",
    image: "",
    details: [
      {
        heading: "Technologies Used",
        points: [
          "LabVIEW for application development, user interface design and program logic.",
          "SubVIs for modular development, with separate functionality for individual Pip-Boy sections.",
          "Event Structures, Case Structures and While Loops for user interaction and application control.",
          "Custom images edited and adapted specifically for the application interface.",
          "Multiple CSV files for structured data storage, including inventory, weapons, armour, weather and radio stations."
        ]
      },
      {
        heading: "What Was Achieved",
        points: [
          "Developed a functional Pip-Boy-inspired information and character management application.",
          "Designed and implemented the complete graphical interface and navigation system.",
          "Created separate interfaces for player statistics, general statistics and S.P.E.C.I.A.L. attributes.",
          "Implemented detailed inventory, weapon and armour information.",
          "Displayed weapon characteristics such as physical, radiation and energy damage.",
          "Included functionality for quests, companions, radio stations, maps, weather and enemy information.",
          "Enabled selected player information to be edited and automatically recorded in the relevant CSV files.",
          "Designed the application primarily to provide detailed character and game information through an interactive interface.",
          "Improved practical understanding of LabVIEW programming, modular application design and user-interface development while maintaining a fully functional application."
        ]
      }
    ]
  },
  {
    title: "AFK Arena Game Information Website",
    date: "2024 Dec",
    description: "Built a multi-page website centralising AFK Arena game information into one reference platform, with custom CSS layouts and interactive JavaScript-driven navigation and animations.",
    tags: ["HTML", "CSS", "JavaScript", "Web Development"],
    link: "",
    image: "",
    details: [
      {
        heading: "Technologies Used",
        points: [
          "HTML for website structure and content.",
          "CSS for page design, layout and element positioning.",
          "Vanilla JavaScript for interactive behaviour and animations.",
          "Custom multi-page website architecture.",
          "Mouse, hover, scroll and navigation-based interactions."
        ]
      },
      {
        heading: "What Was Achieved",
        points: [
          "Developed a multi-page, desktop-focused information website for AFK Arena.",
          "Centralised game information into a single, organised reference platform.",
          "Created dedicated sections for heroes, factions, events and game updates.",
          "Developed guides for the Labyrinth, Maze, Faction Towers and Campaign progression.",
          "Included campaign team recommendations and detailed faction hero information.",
          "Designed all page layouts, graphical positioning and visual elements using CSS.",
          "Implemented interactive JavaScript behaviour including hover effects, navigation events and scrolling interactions.",
          "Created animated elements including fading bars, changing headings and animated backgrounds.",
          "Developed interactive emoticons that changed behaviour depending on user actions.",
          "Delivered a static offline website providing detailed AFK Arena information in one location."
        ]
      }
    ]
  },
  {
    title: "Address Book Application",
    date: "2026 Jan",
    description: "Built a LabVIEW customer address book application with search, edit and delete functionality, automatically syncing every change to a CSV-based customer database.",
    tags: ["LabVIEW", "CSV", "Application Development"],
    link: "",
    image: "",
    details: [
      {
        heading: "Technologies Used",
        points: [
          "LabVIEW for the user interface and application logic.",
          "CSV files for customer data storage.",
          "Customer search, edit and delete functionality."
        ]
      },
      {
        heading: "What Was Achieved",
        points: [
          "Developed a functional customer address book application.",
          "Enabled users to search, view, edit and delete customer records.",
          "Automatically updated the CSV database immediately when customer information was modified.",
          "Developed both the graphical interface and underlying application logic in LabVIEW."
        ]
      }
    ]
  },
  {
    title: "Automill Board — Configurable Sequence Control System",
    date: "2026 Feb",
    description: "Designed a configurable PLC-based sequence control system supporting up to 12 steps, with a custom HMI for configuration and real-time LED feedback on a live Allen-Bradley PLC.",
    tags: ["PLC", "Allen-Bradley", "FactoryTalk", "Automation"],
    link: "",
    image: "",
    details: [
      {
        heading: "Technologies Used",
        points: [
          "Allen-Bradley 1758 PLC for live PLC implementation.",
          "Rockwell Studio 5000 for PLC programming.",
          "FactoryTalk View for HMI development.",
          "Function blocks, timers and event-triggered sequence logic.",
          "Physical LED outputs for sequence indication."
        ]
      },
      {
        heading: "What Was Achieved",
        points: [
          "Developed a configurable control system supporting up to 12 sequence steps.",
          "Deployed and tested the PLC program on a live Allen-Bradley PLC.",
          "Physically indicated the active sequence step using LED outputs.",
          "Allowed users to configure timer durations for individual functions.",
          "Developed an HMI allowing users to configure and execute available functions.",
          "Provided real-time visual feedback of sequence progression."
        ]
      }
    ]
  },
  {
    title: "Statistical Analysis and System Performance Evaluation",
    date: "2024 Nov",
    description: "Analysed roughly one million data samples in Python to evaluate randomness, distribution and six-sigma performance characteristics, and proposed improvements based on the findings.",
    tags: ["Python", "Statistics", "Data Analysis"],
    link: "",
    image: "",
    details: [
      {
        heading: "Technologies Used",
        points: [
          "Python for data processing and statistical analysis.",
          "Analysis of approximately 1 million data samples.",
          "NIST randomness tests.",
          "Logarithmic data normalisation and visualisation.",
          "Six Sigma and Gaussian distribution analysis."
        ]
      },
      {
        heading: "What Was Achieved",
        points: [
          "Analysed the statistical behaviour of approximately one million data samples.",
          "Evaluated data randomness and distribution characteristics.",
          "Visualised six-sigma intervals and variations across the dataset.",
          "Identified Gaussian distribution characteristics and system performance trends.",
          "Proposed potential software and hardware improvements based on the analysis."
        ]
      }
    ]
  },
  {
    title: "Motor Control System for Helicopter Steering",
    date: "2020 Jun",
    description: "Developed the hardware and embedded software for a helicopter directional control subsystem, implementing proportional motor control on a PIC18F45K20 microcontroller with a custom PCB.",
    tags: ["Embedded Systems", "PCB Design", "C++", "Control Systems"],
    link: "",
    image: "",
    details: [
      {
        heading: "Technologies Used",
        points: [
          "PIC18F45K20 microcontroller.",
          "C++ for embedded control software.",
          "Proportional (P) control for motor control.",
          "Altium Designer for PCB design.",
          "Electronic hardware design and subsystem integration."
        ]
      },
      {
        heading: "What Was Achieved",
        points: [
          "Developed hardware and software for a helicopter directional control subsystem.",
          "Implemented proportional motor control using embedded software.",
          "Designed the associated electronic PCB hardware.",
          "Integrated the subsystem with the wider mechanical engineering system.",
          "Collaborated within a multidisciplinary engineering team."
        ]
      }
    ]
  },
  {
    title: "Sensor Integration and Pilot Monitoring System",
    date: "2021 Jan",
    description: "Built a multi-sensor monitoring system integrating temperature, RPM and photodiode inputs into a single embedded platform, with real-time seven-segment and graphical displays.",
    tags: ["Embedded Systems", "Sensors", "C++", "PCB Assembly"],
    link: "",
    image: "",
    details: [
      {
        heading: "Technologies Used",
        points: [
          "PIC18F45K20 microcontroller.",
          "C++ for embedded software development.",
          "Thermocouple for temperature measurement.",
          "Motor RPM sensing.",
          "Photodiode-based sensing.",
          "Seven-segment displays for real-time status indication.",
          "Graphical display for system monitoring and verification.",
          "PCB assembly, soldering and electronic component integration."
        ]
      },
      {
        heading: "What Was Achieved",
        points: [
          "Developed a system to acquire and process multiple environmental and mechanical sensor inputs.",
          "Integrated temperature, RPM and photodiode measurements into a single monitoring system.",
          "Displayed real-time information using multiple seven-segment displays.",
          "Implemented a graphical display for monitoring and verifying sensor data.",
          "Designed and assembled the electronic hardware required for the monitoring subsystem.",
          "Developed a prototype suitable for integration into a pilot monitoring environment."
        ]
      }
    ]
  },
  {
    title: "Autonomous Vehicle Convoy System",
    date: "2024 Nov",
    description: "Designed and built an autonomous vehicle convoy system where a follower vehicle tracks and maintains a controlled distance from a lead vehicle, combining wireless positioning, sensor fusion, and autonomous control across predefined waypoints.",
    tags: ["Robotics", "Embedded Systems", "Python", "Control Systems"],
    link: "",
    image: "",
    details: [
      {
        heading: "Project Overview",
        points: [
          "Designed and developed an autonomous vehicle convoy system capable of navigating through predefined waypoints.",
          "Focused on enabling a follower vehicle to track and maintain a controlled distance from a lead vehicle.",
          "Combined wireless positioning, sensor data, orientation tracking, and autonomous control principles."
        ]
      },
      {
        heading: "Hardware & Technologies Used",
        points: [
          "Makerfabs DW3000 Ultra-Wideband (UWB) modules for high-accuracy relative distance and positioning measurements.",
          "BNO085 IMU for orientation, heading, acceleration and motion sensing.",
          "VL53L0X Time-of-Flight sensors for short-range distance and obstacle detection.",
          "HC-SR04 Ultrasonic sensors for additional distance measurement and obstacle detection.",
          "IR sensors for environmental and proximity sensing.",
          "Microcontroller-based embedded hardware for sensor integration and vehicle control."
        ]
      },
      {
        heading: "Software & Engineering Tools",
        points: [
          "Python for algorithm development, data processing and system logic.",
          "MATLAB for engineering analysis, modelling and algorithm development.",
          "Arduino IDE for embedded programming and microcontroller development.",
          "Custom-developed control algorithms for waypoint navigation and convoy behaviour.",
          "Sensor integration and data processing techniques to combine information from multiple sensors."
        ]
      },
      {
        heading: "Control & Navigation Features",
        points: [
          "Developed a 25 x 25 metre navigation environment.",
          "Implemented support for multiple waypoints to define a vehicle route.",
          "Developed waypoint tracking logic to guide vehicles along a predefined path.",
          "Implemented convoy-following behaviour between vehicles.",
          "Designed the system to maintain a configurable following distance of approximately 10 to 50 cm.",
          "Targeted a vehicle speed of approximately 25 cm/s.",
          "Used sensor feedback to support vehicle positioning, orientation and obstacle awareness."
        ]
      },
      {
        heading: "What Was Achieved",
        points: [
          "Successfully developed an integrated prototype combining electronics, embedded systems, wireless communication and control engineering.",
          "Demonstrated the practical application of UWB positioning technology for vehicle convoy tracking.",
          "Created a foundation for autonomous leader-follower vehicle behaviour and waypoint navigation.",
          "Integrated multiple sensor technologies into a single autonomous control system.",
          "Applied engineering principles across electronics, control systems, robotics, programming and data processing.",
          "Developed a scalable concept that could be expanded with improved sensor fusion, autonomous decision-making and advanced navigation algorithms."
        ]
      }
    ]
  },
  {
    title: "Contact list cleanup pipeline",
    date: "2026 Sept",
    description: "Built a repeatable process for turning messy multi-location contact exports into clean, Excel-ready files — standardising phone formats and flagging missing data across dozens of company records.",
    tags: ["Excel", "Data cleanup", "SQL Server"],
    link: "",
    image: "",
    details: []
  },
  {
    title: "SQL Server reporting query",
    date: "2026 Mar",
    description: "Wrote a query against a companies/contacts table to pull structured location and contact data for reporting, replacing a manual export-and-edit workflow.",
    tags: ["SQL Server", "Reporting"],
    link: "",
    image: "",
    details: []
  }
];

/*
  SITE LINKS
  ----------
  Shown at the top of the page. Add, remove, or edit entries as needed.
  Set "href" to "" to leave a link out entirely.
*/
const siteLinks = [
  { label: "Email", href: "mailto:kocur.an@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/andrij-kocur/" },
  { label: "GitHub", href: "https://github.com/Andrij-Kocur/Portfolio" }
];
