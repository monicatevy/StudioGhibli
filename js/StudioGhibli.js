const app = document.getElementById('root');

const navbar = document.createElement('nav');
navbar.setAttribute('id', 'navbar');

const footer = document.createElement('footer');
footer.setAttribute('id', 'footer');

const logo = document.createElement('img');
logo.src = 'images/logo.png';
logo.setAttribute('id', 'logo');

const container_card = document.createElement('div');
container_card.setAttribute('class', 'container-card');

app.appendChild(navbar);
navbar.appendChild(logo);

app.appendChild(container_card);

// Create a request variable and assign a new XMLHttpRequest object to it
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL
request.open('GET', 'https://ghibli.rest/films', true);
request.onload = function () {

  // Begin accessing JSON data
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie =>

      {
        var title_underscore = movie.title.split(' ').join('_');

        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const img_wrapper = document.createElement('div');
        img_wrapper.setAttribute('class', 'img-wrapper');

        const img = document.createElement('img');
        img.setAttribute('src', 'images/'+ movie.title +'.jpeg');
        img.setAttribute('alt', movie.title);
        img.setAttribute('onerror', "this.onerror=null;this.src='images/logo.png';");

        const content_wrapper = document.createElement('div');
        content_wrapper.setAttribute('class', 'content-wrapper');

        const running_time = document.createElement('p');
        running_time.textContent = movie.running_time + " min";
        running_time.setAttribute('class', 'meta');
        running_time.setAttribute('id', 'running_time');

        const original_title_romanised = document.createElement('p');
        original_title_romanised.textContent = movie.original_title_romanised;
        original_title_romanised.setAttribute('class', 'meta');
        original_title_romanised.setAttribute('id', 'original_title_romanised');

        const header = document.createElement('div');
        header.setAttribute('class', 'header');

        const header_titles = document.createElement('div');
        header_titles.setAttribute('class', 'header-titles');

        const heart = document.createElement('div');
        heart.setAttribute('class', 'heart');

        const title = document.createElement('h1');
        title.textContent = movie.title;
        title.setAttribute('id', 'title');

        const original_title = document.createElement('h2');
        original_title.textContent = movie.original_title;
        original_title.setAttribute('id', 'original_title');

        const container_description = document.createElement('div');
        container_description.setAttribute('class', 'container-description');

        const description = document.createElement('p');
        //movie.description = movie.description.substring(0, 325);
        description.textContent = `${movie.description}...`;
        description.setAttribute('id', 'description');

        const other = document.createElement('div');
        other.setAttribute('class', 'other');

        const release_date = document.createElement('p');
        release_date.textContent = "Itinial Release : " + movie.release_date;
        release_date.setAttribute('id', 'release_date');

        const director = document.createElement('p');
        director.textContent = "Director : " + movie.director;
        director.setAttribute('id', 'director');

        const footer_btn = document.createElement('div');
        footer_btn.setAttribute('class', 'footer-btn');

        const read_btn = document.createElement('button');
        read_btn.setAttribute('class', 'btn');
        read_btn.setAttribute('id', 'read-btn');
        card.setAttribute('id', title_underscore);

        const read_ahref = document.createElement('a');
        read_ahref.setAttribute('target', '_blank');
        read_ahref.textContent = "Read more";
        read_ahref.setAttribute('href', 'https://en.wikipedia.org/wiki/' + title_underscore);
        read_ahref.setAttribute('id', title_underscore);

        container_card.appendChild(card);

        img_wrapper.appendChild(img);

        card.appendChild(img_wrapper);
        card.appendChild(content_wrapper);

        content_wrapper.appendChild(running_time);
        content_wrapper.appendChild(original_title_romanised);
        content_wrapper.appendChild(header);
        content_wrapper.appendChild(container_description);
        container_description.appendChild(description);
        content_wrapper.appendChild(other);
        content_wrapper.appendChild(footer_btn);

        header.appendChild(header_titles);
        header.appendChild(heart);

        header_titles.appendChild(title);
        header_titles.appendChild(original_title);

        other.appendChild(release_date);
        other.appendChild(director);

        footer_btn.appendChild(read_btn);
        read_btn.appendChild(read_ahref);
      });

  } else {
    const h3 = document.createElement('h3');
    h3.textContent = "error";

    app.appendChild(h3);
  }
}

const footer_text_ahref = document.createElement('a');
footer_text_ahref.setAttribute('target', '_blank');
footer_text_ahref.setAttribute('href', 'https://github.com/monicatevy/StudioGhibli');

const footer_text = document.createElement('p');
footer_text.textContent = "coded by Monica Tevy モニカによってコード化";

const footer_github_ahref = document.createElement('a');
footer_github_ahref.setAttribute('target', '_blank');
footer_github_ahref.setAttribute('href', 'https://github.com/monicatevy');

const footer_github_icon = document.createElement('i');
footer_github_icon.setAttribute('class', 'fab fa-github');

app.appendChild(footer);

footer.appendChild(footer_text_ahref);
footer_text_ahref.appendChild(footer_text);

footer.appendChild(footer_github_ahref);
footer_github_ahref.appendChild(footer_github_icon);

// Send request
request.send();
