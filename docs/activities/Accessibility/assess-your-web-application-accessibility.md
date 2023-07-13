# Assessing Web Accessibility

All websites, web applications and digital products must achieve WCAG 2.1 AA standards in order to meet CPS Policy,
Governmental accessibility and Legislative requirements.

A text version of the checklist can be found below and when you are ready to record your answers you can download the 
[Excel file](./WCAG-Checklist.xlsm) and complete it before sending through to the accessibility team.

## Perceivable

Web content is made available to the senses - sight, hearing, and/or touch.

### Text Alternatives

Provide text alternatives for any non-text content.

- [ ] Images, form image buttons, and image map hot spots have appropriate, equivalent alternative text.
- [ ] Images that do not convey content, are decorative, or contain content that is already conveyed in text are given
  null alt text (alt="") or implemented as CSS backgrounds. All linked images have descriptive alternative text.
- [ ] Equivalent alternatives to complex images are provided in context or on a separate linked page.
- [ ] Form buttons have a descriptive value.
- [ ] Form inputs have associated text labels.
- [ ] Embedded multimedia is identified via accessible text.
- [ ] Frames and iframes are appropriately titled.

### Time-base Media

Provide alternatives for time-based media.

- [ ] A transcript of relevant content is provided for non-live audio-only (audio podcasts, MP3 files, etc.).
- [ ] A transcript or audio description of relevant content is provided for non-live video-only, unless the video is
  decorative.
- [ ] Synchronized captions are provided for non-live video (YouTube videos, etc.).
- [ ] A transcript or audio description is provided for non-live video. NOTE: Only required if there is relevant visual
  content that is not presented in the audio.
- [ ] Synchronized captions are provided for live media that contains audio (audio-only broadcasts, web casts, video
  conferences, etc.).
- [ ] Audio descriptions are provided for non-live video. NOTE: Only required if there is relevant visual content that
  is not presented in the audio.
- [ ] While not required at Level AA, for optimal accessibility WebAIM recommends transcripts in addition to audio
  descriptions.
- [ ] A sign language video is provided for media that contains audio.
- [ ] When audio description cannot be added to video due to audio timing (e.g., insufficient pauses in the audio), an
  alternative version of the video with pauses that allow audio descriptions is provided.
- [ ] A transcript is provided for pre-recorded media that has a video track. For optimal accessibility, WebAIM strongly
  recommends transcripts for all multimedia.
- [ ] A descriptive text transcript (e.g., the script of the live audio) is provided for live content that has audio.

### Adaptable

Create content that can be presented in different ways (for example simpler layout) without losing information or
structure.

- [ ] Semantic mark-up is used to designate headings (`<h1>`), regions/landmarks, lists (`<ul>`, `<ol>`, and `<dl>`),
  emphasized or special text (`<strong>`, `<code>`, `<abbr>`, `<blockquote>`, for example), etc. Semantic mark-up is
  used appropriately.
- [ ] Tables are used for tabular data and data cells are associated with their headers. Data table captions, if
  present, are associated to data tables.
- [ ] Text labels are associated with form input elements. Related form elements are grouped with fieldset/legend. ARIA
  labelling may be used when standard HTML is insufficient.
- [ ] The reading and navigation order (determined by code order) is logical and intuitive.
- [ ] Instructions do not rely upon shape, size, or visual location (e.g., "Click the square icon to continue" or "
  Instructions are in the right-hand column").
- [ ] Instructions do not rely upon sound (e.g., "A beeping sound indicates you may continue.").
- [ ] Orientation of web content is not restricted to only portrait or landscape, unless a specific orientation is
  necessary.
- [ ] Input fields that collect certain types of user information have an appropriate autocomplete attribute defined.
- [ ] HTML5 regions or ARIA landmarks are used to identify page regions.
- [ ] ARIA is used, where appropriate, to enhance HTML semantics to better identify the purpose of interface components.

### Distinguishable

Make it easier for users to see and hear content including separating foreground from background

- [ ] Colour is not used as the sole method of conveying content or distinguishing visual elements.
- [ ] Colour alone is not used to distinguish links from surrounding text unless the contrast ratio between the link and
  the surrounding text is at least 3:1 and an additional distinction (e.g., it becomes underlined) is provided when the
  link is hovered over and receives focus.
- [ ] A mechanism is provided to stop, pause, mute, or adjust volume for audio that automatically plays on a page for
  more than 3 seconds.
- [ ] Text and images of text have a contrast ratio of at least 4.5:1.
- [ ] Large text - at least 18 point (typically 24px) or 14 point (typically 18.66px) and bold - has a contrast ratio of
  at least 3:1.
- [ ] The page is readable and functional when the page is zoomed to 200%. NOTE: 1.4.10 (below) introduces a much higher
  requirement for zoomed content.
- [ ] If the same visual presentation can be made using text alone, an image is not used to present that text.
- [ ] No loss of content or functionality occurs and horizontal scrolling is avoided when content is presented at a
  width of 320 pixels. This requires responsive design for most web sites. This is best tested by setting the browser
  window to 1280 pixels wide and then zooming the page content to 400%.
- [ ] Content that requires horizontal scrolling, such as data tables, complex images (such as maps and charts),
  toolbars, etc. are exempted.
- [ ] A contrast ratio of at least 3:1 is present for differentiating graphical objects (such as icons and components of
  charts or graphs) and author-customized interface components (such as buttons, form controls, and focus
  indicators/outlines).
- [ ] At least 3:1 contrast must be provided in the various states (focus, hover, active, etc.) of author-customized
  interactive components.
- [ ] No loss of content or functionality occurs when the user adapts paragraph spacing to 2 times the font size, text
  line height/spacing to 1.5 times the font size, word spacing to .16 times the font size, and letter spacing to .12
  times the font size.
- [ ] This is best supported by avoiding pixel height definitions for elements that contain text.
- [ ] When additional content is presented on hover or keyboard focus:
- [ ] The newly revealed content can be dismissed (generally via the Esc key) without moving the pointer or keyboard
  focus, unless the content presents an input error or does not obscure or interfere with other page content.
- [ ] The pointer can be moved to the new content without the content disappearing.
- [ ] The new content must remain visible until the pointer or keyboard focus is moved away from the triggering control,
  the new content is dismissed, or the new content is no longer relevant.

## Operable

Interface forms, controls, and navigation are operable

### Keyboard Accessible

Make all functionality available from a keyboard.

- [ ] All page functionality is available using the keyboard, unless the functionality cannot be accomplished in any
  known way using a keyboard (e.g., free hand drawing).
- [ ] Page-specified shortcut keys and access keys (access key should typically be avoided) do not conflict with
  existing browser and screen reader shortcuts.
- [ ] Keyboard focus is never locked or trapped at one particular page element. The user can navigate to and from all
  navigable page elements using only a keyboard.
- [ ] If a keyboard shortcut uses printable character keys, then the user must be able to disable the key command,
  change the defined key to a non-printable key (Ctrl, Alt, etc.), or only activate the shortcut when an associated
  interface component or button is focused.

### Enough Time

Provide users enough time to read and use content.

- [ ] If a page or application has a time limit, the user is given options to turn off, adjust, or extend that time
  limit. This is not a requirement for real-time events (e.g., an auction), where the time limit is absolutely required,
  or if the time limit is longer than 20 hours.
- [ ] Automatically moving, blinking, or scrolling content (such as carousels, marquees, or animations) that lasts
  longer than 5 seconds can be paused, stopped, or hidden by the user.
- [ ] Automatically updating content (e.g., a dynamically-updating news ticker, chat messages, etc.) can be paused,
  stopped, or hidden by the user or the user can manually control the timing of the updates.

### Seizures and Physical Reactions

Do not design content in a way that is known to cause seizures or physical reactions.

- [ ] No page content flashes more than 3 times per second unless that flashing content is sufficiently small and the
  flashes are of low contrast and do not contain too much red. (See general flash and red flash thresholds).

### Navigable

Provide ways to help users navigate, find content, and determine where they are.

- [ ] A link is provided to skip navigation and other page elements that are repeated across web pages.
- [ ] A proper heading structure and/or identification of page regions/landmarks may be considered a sufficient
  technique. Because navigating by headings or regions is not supported in most browsers, WebAIM recommends a "skip"
  link (in addition to headings and regions) to best support sighted keyboard users.
- [ ] The web page has a descriptive and informative page title.
- [ ] The navigation order of links, form elements, etc. is logical and intuitive.
- [ ] The purpose of each link (or form image button or image map hotspot) can be determined from the link text alone,
  or from the link text and its context (e.g., surrounding text, list item, previous heading, or table headers).
- [ ] Links (or form image buttons) with the same text that go to different locations are readily distinguishable.
- [ ] Multiple ways are available to find other web pages on the site - at least two of: a list of related pages, table
  of contents, site map, site search, or list of all available web pages.
- [ ] Page headings and labels for form and interactive controls are informative. Avoid duplicating heading (e.g., "More
  Details") or label text (e.g., "First Name") unless the structure provides adequate differentiation between them.
- [ ] It is visually apparent which page element has the current keyboard focus (i.e., as you tab through the page, you
  can see where you are).

### Input Modalities

Make it easier for users to operate functionality through various inputs beyond keyboard.

- [ ] If multipoint or path-based gestures (such as pinching, swiping, or dragging across the screen) are not essential
  to the functionality, then the functionality can also be performed with a single point activation (such as activating
  a button).
- [ ] To help avoid inadvertent activation of controls, avoid non-essential down-event (e.g., onmousedown) activation
  when clicking, tapping, or long pressing the screen. Use onclick, onmouseup, or similar instead. If onmouseup (or
  similar) is used, you must provide a mechanism to abort or undo the action performed.
- [ ] If an interface component (link, button, etc.) presents text (or images of text), the accessible name (label,
  alternative text, aria-label, etc.) for that component must include the visible text.
- [ ] Functionality that is triggered by moving the device (such as shaking or panning a mobile device) or by user
  movement (such as waving to a camera) can be disabled and equivalent functionality is provided via standard controls
  like buttons.

## Understandable

### Readable

Make text content readable and understandable.

- [ ] The language of the page is identified using the HTML lang attribute (e.g., `<html lang="en">`).
- [ ] The language of page content that is in a different language is identified using the lang attribute (
  e.g., `<blockquote lang="es">`).

### Predictable

Make Web pages appear and operate in predictable ways.

- [ ] When a page element receives focus, it does not result in a substantial change to the page, the spawning of a
  pop-up window, an additional change of keyboard focus, or any other change that could confuse or disorient the user.
- [ ] When a user inputs information or interacts with a control, it does not result in a substantial change to the
  page, the spawning of a pop-up window, an additional change of keyboard focus, or any other change that could confuse
  or disorient the user unless the user is informed of the change ahead of time.
- [ ] Navigation links that are repeated on web pages do not change order when navigating through the site.
- [ ] Elements that have the same functionality across multiple web pages are consistently identified. For example, a
  search box at the top of the site should always be labelled the same way.

### Input Assistance

Help users avoid and correct mistakes.

- [ ] Required form elements or form elements that require a specific format, value, or length provide this information
  within the element's label.
- [ ] Form validation errors are efficient, intuitive, and accessible. The error is clearly identified, quick access to
  the problematic element is provided, and the user can easily fix the error and resubmit the form.
- [ ] Sufficient labels, cues, and instructions for required interactive elements are provided via instructions,
  examples, properly positioned form labels, and/or fieldsets/legends.
- [ ] If an input error is detected (via client-side or server-side validation), suggestions are provided for fixing the
  input in a timely and accessible manner.
- [ ] If the user can change or delete legal, financial, or test data, the changes/deletions can be reversed, verified,
  or confirmed.

## Robust

Content must be robust enough that it can be interpreted by a wide variety of user agents, including assistive
technologies.

### Compatible

Maximize compatibility with current and future user agents, including assistive technologies.

- [ ] Significant HTML/XHTML validation/parsing errors are avoided. Check at http://validator.w3.org/
- [ ] Mark-up is used in a way that facilitates accessibility. This includes following the HTML/XHTML specifications and
  using forms, form labels, frame titles, etc. appropriately.
- [ ] ARIA is used appropriately to enhance accessibility when HTML is not sufficient.
- [ ] If an important status message is presented and focus is not set to that message, the message must be announced to
  screen reader users, typically via an ARIA alert or live region.
