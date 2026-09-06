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
    title: "Autonomous Vehicle Convoy System",
    date: "2026",
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
    date: "Sep 2026",
    description: "Built a repeatable process for turning messy multi-location contact exports into clean, Excel-ready files — standardising phone formats and flagging missing data across dozens of company records.",
    tags: ["Excel", "Data cleanup", "SQL Server"],
    link: "",
    image: "",
    details: []
  },
  {
    title: "SQL Server reporting query",
    date: "Aug 2026",
    description: "Wrote a query against a companies/contacts table to pull structured location and contact data for reporting, replacing a manual export-and-edit workflow.",
    tags: ["SQL Server", "Reporting"],
    link: "",
    image: "",
    details: []
  },
  {
    title: "Example: your next project",
    date: "—",
    description: "Delete this entry, or copy it as a starting point for the next one you add. Add an image by putting a file in this folder and setting its filename below.",
    tags: ["Example"],
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
  { label: "Email", href: "mailto:you@example.com" },
  { label: "LinkedIn", href: "" },
  { label: "GitHub", href: "" }
];
