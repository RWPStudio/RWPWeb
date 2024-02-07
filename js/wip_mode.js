
console.image = (url, width, height) => {
    const style = [
        `padding: ${height / 2}px ${width / 2}px;`,
        `backgound: url(${url}) no-repeat; background-size: 100% 100%;`,
    ].join('')
    console.log("%c ", style)
}

function printGithubAnimate() {
    const anim =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxtYXNrIGlkPSJsaW5lTWRHaXRodWJMb29wMCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB4PSIwIiB5PSIwIj48ZyBmaWxsPSIjZmZmIj48ZWxsaXBzZSBjeD0iOS41IiBjeT0iOSIgcng9IjEuNSIgcnk9IjEiLz48ZWxsaXBzZSBjeD0iMTQuNSIgY3k9IjkiIHJ4PSIxLjUiIHJ5PSIxIi8+PC9nPjwvbWFzaz48ZyBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiPjxwYXRoIHN0cm9rZS1kYXNoYXJyYXk9IjMwIiBzdHJva2UtZGFzaG9mZnNldD0iMzAiIGQ9Ik0xMiA0QzEzLjY2ODMgNCAxNC42MTIyIDQuMzk5OTEgMTUgNC41QzE1LjUyNTUgNC4wNzQ2MyAxNi45Mzc1IDMgMTguNSAzQzE4Ljg0MzggNCAxOC43ODYzIDUuMjE5MjEgMTguNSA2QzE5LjI1IDcgMTkuNSA4IDE5LjUgOS41QzE5LjUgMTEuNjg3NSAxOS4wMTcgMTMuMDgyMiAxOCAxNEMxNi45ODMgMTQuOTE3OCAxNS44ODg3IDE1LjM3NDkgMTQuNSAxNS41QzE1LjE1MDYgMTYuMDM4IDE1IDE3LjM3NDMgMTUgMThDMTUgMTguNzI1NiAxNSAyMSAxNSAyMU0xMiA0QzEwLjMzMTcgNCA5LjM4Nzg0IDQuMzk5OTEgOSA0LjVDOC40NzQ1NSA0LjA3NDYzIDcuMDYyNSAzIDUuNSAzQzUuMTU2MjUgNCA1LjIxMzcxIDUuMjE5MjEgNS41IDZDNC43NSA3IDQuNSA4IDQuNSA5LjVDNC41IDExLjY4NzUgNC45ODMwMSAxMy4wODIyIDYgMTRDNy4wMTY5OSAxNC45MTc4IDguMTExMyAxNS4zNzQ5IDkuNSAxNS41QzguODQ5NDQgMTYuMDM4IDkgMTcuMzc0MyA5IDE4QzkgMTguNzI1NiA5IDIxIDkgMjEiPjxhbmltYXRlIGZpbGw9ImZyZWV6ZSIgYXR0cmlidXRlTmFtZT0ic3Ryb2tlLWRhc2hvZmZzZXQiIGR1cj0iMC42cyIgdmFsdWVzPSIzMDswIi8+PC9wYXRoPjxwYXRoIHN0cm9rZS1kYXNoYXJyYXk9IjEwIiBzdHJva2UtZGFzaG9mZnNldD0iMTAiIGQ9Ik05IDE5Ij48YW5pbWF0ZSBmaWxsPSJmcmVlemUiIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS1kYXNob2Zmc2V0IiBiZWdpbj0iMC43cyIgZHVyPSIwLjJzIiB2YWx1ZXM9IjEwOzAiLz48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJkIiBkdXI9IjNzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgdmFsdWVzPSJNOSAxOWMtMS40MDYgMC0yLjg0NC0uNTYzLTMuNjg4LTEuMTg4QzQuNDcgMTcuMTg4IDQuMjIgMTYuMTU3IDMgMTUuNTtNOSAxOWMtMS40MDYgMC0zLS41LTQtLjUtLjUzMiAwLTEgMC0yLS41O005IDE5Yy0xLjQwNiAwLTIuODQ0LS41NjMtMy42ODgtMS4xODhDNC40NyAxNy4xODggNC4yMiAxNi4xNTcgMyAxNS41Ii8+PC9wYXRoPjwvZz48cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI0IiB4PSI4IiB5PSIxMSIgZmlsbD0iY3VycmVudENvbG9yIiBtYXNrPSJ1cmwoI2xpbmVNZEdpdGh1Ykxvb3AwKSI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ieSIgZHVyPSIxMHMiIGtleVRpbWVzPSIwOzAuNDU7MC40NjswLjU0OzAuNTU7MSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHZhbHVlcz0iMTE7MTE7Nzs3OzExOzExIi8+PC9yZWN0Pjwvc3ZnPg==';
    console.log(
        '%c                                                                       Supported and Code Archived by Github',
        `background: url(${anim}) no-repeat;background-size: 100% 100%;padding: 32px; font-size: 15px; color: #66afe9;`
    );
}

function printRWPLogo() {
    imgToBase64("assets/icons/icon_grayscale_smallest.png" ,x => {
        console.log(
            `%c Copyright by RedWhite Studio`,
            `background: url(${x}) no-repeat;background-size: 64px 64px;padding: 64px; font-size: 20px;`
        );
    });
}

function printwip_message() {
    const wip_mode_style = `
                                    padding: 5px;
                                    background-color: red;
                                    color: white;
                                    font-style: 'ubuntu';
                                    border: 5px solid black;
                                    font-size: 2em;
                                    `;
    console.log("%cProjects In WIP Mode, Don't Depot In Server.", wip_mode_style)
}

function init() {
    printRWPLogo();
    printwip_message();
    printGithubAnimate();
}

init();