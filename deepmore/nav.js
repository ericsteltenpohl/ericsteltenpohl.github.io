
toc = document.getElementById('ToC');

tocHeader = document.createElement('h2');
tocHeader.innerText = 'Table of contents';
toc.appendChild(tocHeader);

tocList = document.createElement('ul');

headers = document.getElementsByTagName('h3');

for (i = 0; i < headers.length; i++) {
  name = 'h'+i;
  headers[i].id=name;
  tocListItem = document.createElement('li');
  tocEntry = document.createElement('a');
  tocEntry.setAttribute('href','#'+name);
  tocEntry.innerText = headers[i].innerText;
  tocListItem.appendChild(tocEntry);
  tocList.appendChild(tocListItem);
}

toc.appendChild(tocList);

// TOC Tutorial: https://benfrain.com/beginner-js-tutorial-automatically-make-anchor-jump-links-with-javascript/#h-H2_0

/*
function TOC({ appendInto = "#intro", headerScope = "body", containerClass = "toc-Wrapper", linkClass = "toc-Link", hTagsToLink = "h1,h2" } = {}) {
    let jsNav = document.createElement("nav");
    jsNav.classList.add(containerClass);
    let appendArea = document.querySelector(appendInto);
    let hTags = document.querySelector(headerScope).querySelectorAll(hTagsToLink);
    hTags.forEach((el, i) => {
        el.id = `h-${el.tagName}_${i}`;
        let link = document.createElement("a");
        link.setAttribute("href", `#h-${el.tagName}_${i}`);
        link.classList.add(linkClass);
        link.classList.add(`${linkClass}_${el.tagName}`);
        link.textContent = el.textContent;
        jsNav.appendChild(link);
    });
    appendArea.appendChild(jsNav);
}
*/
