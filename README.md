# pockpol

This is a prototype for Pocket Politics, a mobile app for promoting political engagement among local communities of young people.

Code Base Structure
-------------------
- | pocket_politics (front-end codebase)
    - | android (android-specific build mechanism)
    - | ios (ios-specific build mechanism)
    - | js (where the views, styles and assets live)
        - | components (smaller view modules)
            - % ConvoContainer.js (handles single topic rendering and state maintenance including topic text, claps, callins and comments)
            - % InputPopup.js (renders pencil icon and handles text input for topic creation)
        - | img (image assets folder)
    - % App.js (main view container for front-end app, loads other views)
    - % Index.js (registers App.js as main view container for app)
- | PocketPolitics (back-end codebase hosted on Microsoft Azure platform)


Cleanup and Present Errors
--------------------------
### Front-end
- Clean up unnecessary css declarations and styles
- Topic colors are randomly generated
- Not sure how autorefresh works for new comments/topics/claps/callins added by other users when this user has not updated anything themselves triggering such - investigate
- Right now, App.js does too much work. Should be turned into a navigator which in turn handles component pages made up of header, feed (ConvoContainers list), and InputPopup; as well as profile and other types as they are added

### Back-end
- Tighten up security - triple check that Express.js does in fact sanitize inputs automatically
- Look into known npm dependency security vulnerability
- Add content monitoring

Future Plans
------------
### Logistical
- Change the name, it is already taken by another app with Youtube ads T_T
- Dive deeper into the data I collected and resources I found
- Usability Testing
- Set up data collecting methodology and define initial trial population
- Learn and iterate
- Release into the world

### Functional - Feed View
- Add 2 additional feeds for popular and debate, as well as swipe gesture and header click functionality for navigating between them
- Make writing tool more obvious as input cancelation button
- Add animation for input topic popup functionality -> slide left from pencil icon
- Add commenting view - tap on topic anywhere but clap/callin zone to extend drawer with comments
- Each comment is a mini topic with claps/callins, but no comments of its own
- Add callin + comment requirement - don't just downvote ppl, explain how what they wrote made you feel it was problematic
- Give icons (especially bandaid) some Photoshop love

### Functional - Profile/User Center
- Add profile a la Pocket Politics v1/iSideWith.com
- Implement logins
- Topic colors are not randomly generated, but chosen as user's profile identity, which user can switch up at anytime
- Add many more colors
- No usernames, no friends, keep anonymous but localized like yik-yak
- Add quizzes
- Add voting info
- Add candidate comparisons
- Integrate Google Civic API
- Integrate OpenStates.org API
- How much of this info can users see about each other? User chosen permissions?

### Funtional - Community Organizing
- Make community organizing a straightforward and gamified experience
- Create new campaign
- Invite other users
- Use leaderboards, stats and goals to promote engagement and excitement




