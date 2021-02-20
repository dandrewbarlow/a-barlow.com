// html content for navigation bar
navContent = `
        <ul>
			<li><a href="index.html">Home</a></li>
			<li><a href="about-me.html">About Me</a></li>
			<li><a href="art.html">Art</a></li>
			<li><a href="projects.html">My Projects</a></li>
        </ul>
        `;

nav = $('nav:first');
nav.html(navContent);