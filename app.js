lines = [
"When you have a dream, you've got to grab it and never let go.",
"Nothing is impossible. ...",
"There is nothing impossible to they who will try.",
"The bad news is time flies. ...",
"Life has got all those twists and turns. ...",
"Keep your face always toward the sunshine, and shadows will fall behind you.",
"The purpose of our lives is to be happy.",
"Life is what happens when you're busy making other plans.",
"Get busy living or get busy dying.",
"You only live once, but if you do it right, once is enough.",
"If you want to live a happy life, tie it to a goal, not to people or things.",
"Never let the fear of striking out keep you from playing the game.",
"Money and success don't change people; they merely amplify what is already there.",
"Not how long, but how well you have lived is the main thing."
]

document.getElementById('footer').innerHTML = lines[Math.floor(Math.random()*lines.length)]

setInterval(()=>{
document.getElementById('footer').innerHTML = lines[Math.floor(Math.random()*lines.length)]
}, 900000);






document.querySelector('#github').onclick =()=>{
    window.open("https://github.com/", '_blank');
}

document.querySelector('#stackblitz').onclick =()=>{
    window.open("https://stackblitz.com/", '_blank');
}

document.querySelector('#mail').onclick =()=>{
    window.open("https://mail.google.com/mail/u/0/?tab=rm#inbox", '_blank');
}

document.querySelector('#livebook').onclick =()=>{
    window.open("https://kalvium.community/", '_blank');
}

document.querySelector('#ums').onclick =()=>{
    window.open("https://ums.lpu.in/lpuums/LoginNew.aspx", '_blank');
}

document.querySelector('#quizr').onclick =()=>{
    window.open("https://kalvium.quizr.in/dashboard", '_blank');
}

document.querySelector('#monkey-type').onclick =()=>{
    window.open("https://monkeytype.com/", '_blank');
}
document.querySelector('#figma').onclick =()=>{
    window.open("https://www.figma.com/files/recent?fuid=1151813918993667054", '_blank');
}
document.querySelector('#disney').onclick =()=>{
    window.open("https://www.hotstar.com/in", '_blank');
}
document.querySelector('#youtube').onclick =()=>{
    window.open("https://www.youtube.com/", '_blank');
}
document.querySelector('#leetcode').onclick =()=>{
    window.open("https://leetcode.com/problemset/all/?sorting=W3t9XQ%3D%3D", '_blank');
}
document.querySelector('#google').onclick =()=>{
    window.open("https://twitter.com/home", '_blank');
}
document.querySelector('#sololearn').onclick =()=>{
    window.open("https://www.sololearn.com/learn", '_blank');
}

document.querySelector('#schedule').onclick =()=>{
    window.open("https://docs.google.com/spreadsheets/d/19ocLHeH6TTbJdLKQJueC-FRASrQ4cdjJNVH2HBQGRjA/edit#gid=0", '_blank');
}
document.querySelector('#google-doc').onclick =()=>{
    window.open("https://docs.google.com/document/u/0/?tgif=d", '_blank');
}
document.querySelector('#assign').onclick =()=>{
    window.open("https://docs.google.com/spreadsheets/d/15tCf18peyzQKQCOJN5cLnyng15RNhj40oPPjANiJY-o/edit#gid=1057540962", '_blank');
}
document.querySelector('#other').onclick =()=>{
    window.open("https://www.linkedin.com/in/arpit-gulati-431158257/", '_blank');
}
document.querySelector('#whattsapp').onclick =()=>{
    window.open("https://web.whatsapp.com/", '_blank');
}
