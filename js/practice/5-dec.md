JavaScript Visualized - Promise Execution
https://youtu.be/Xs1EMmBLpn4


JS Runtime components

# Event Loop
Prioritize micro task

# Call stack
# Web APIs

  Callback based web api get pushed to task queue (geolocation,setTimeout)

  Promise based get pushed to micro task queue (then, catch, finally)

# Task Queue /callback  queue => Macro Task?
  Handle Web APIs callback & event handler to get executed at future

  Wait until call stack is empty before executed

# Micro Task queue

These component allow us to do async task in non blocking way in JS that is single threaded
(single call stack)

JavaScript Visualized - Event Loop, Web APIs, (Micro)
https://youtu.be/eiC58R16hb8

