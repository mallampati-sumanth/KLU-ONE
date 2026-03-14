document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = function(e) {
  if (e.keyCode === 123) {
    return false; // Disable F12
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) {
    return false; // Disable Ctrl+Shift+I
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode === 'C'.charCodeAt(0)) {
    return false; // Disable Ctrl+Shift+C
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)) {
    return false; // Disable Ctrl+Shift+J
  }
  if (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) {
    return false; // Disable Ctrl+U
  }
  if (e.ctrlKey && e.keyCode === 'S'.charCodeAt(0)) {
    return false; // Disable Ctrl+S (Save web page)
  }
  if (e.ctrlKey && e.keyCode === 'P'.charCodeAt(0)) {
    return false; // Disable Ctrl+P (Print page)
  }
};

// Obfuscate devtools viewing
setInterval(function() {
    var before = new Date().getTime();
    debugger;
    var after = new Date().getTime();
    if (after - before > 100) {
        document.body.innerHTML = '<div style="display:flex;justify-content:center;align-items:center;height:100vh;flex-direction:column;background-color:#000;color:white;text-align:center;"><h1>Developer tools are disabled.</h1><a href="https://imgflip.com/i/amlmzf"><img src="https://i.imgflip.com/amlmzf.jpg" title="made at imgflip.com" style="max-width: 100%; border-radius: 10px; margin-top: 20px;"/></a><div><a href="https://imgflip.com/memegenerator" style="color: #aaa;">from Imgflip Meme Generator</a></div></div>';
    }
}, 100);

