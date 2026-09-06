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
    description - one or two sentences about what it is / what you did
    tags        - a list of short labels used for filtering, e.g. ["SQL", "Automation"]
    link        - (optional) URL to the live project, repo, or write-up. Leave as "" if there's nothing to link to.
    image       - (optional) filename of an image to show, e.g. "project1.jpg". Put the image
                  file in this same folder, next to index.html, then reference its filename here.
                  Leave as "" to show no image.

  Site links (email, LinkedIn, etc.) are set separately below, in "siteLinks".
*/

const projects = [
  {
    title: "Contact list cleanup pipeline",
    date: "Sep 2026",
    description: "Built a repeatable process for turning messy multi-location contact exports into clean, Excel-ready files — standardising phone formats and flagging missing data across dozens of company records.",
    tags: ["Excel", "Data cleanup", "SQL Server"],
    link: "",
    image: ""
  },
  {
    title: "SQL Server reporting query",
    date: "Aug 2026",
    description: "Wrote a query against a companies/contacts table to pull structured location and contact data for reporting, replacing a manual export-and-edit workflow.",
    tags: ["SQL Server", "Reporting"],
    link: "",
    image: ""
  },
  {
    title: "Example: your next project",
    date: "—",
    description: "Delete this entry, or copy it as a starting point for the next one you add. Add an image by putting a file in this folder and setting its filename below.",
    tags: ["Example"],
    link: "",
    image: ""
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
