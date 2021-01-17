
// Get ToC div
    toc = document.getElementById("ToC");

    //Add a header
    tocHeader = document.createElement("h2");
    tocHeader.innerText="Table of contents";
    toc.appendChild(tocHeader);

    // Create a list for the ToC entries
    tocList = document.createElement("ul");

    // Get the h2 tags - ToC entries
    headers2 = document.getElementsByTagName("h2");

    // For each h2
    for (i = 0; i < headers2.length; i++){

      // Create an id
      name = "h"+i;
      headers2[i].id=name;

      // a list item for the entry
      tocListItem = document.createElement("li");

      // a link for the h3
      tocEntry = document.createElement("a");
      tocEntry.setAttribute("href","#"+name);
      tocEntry.innerText=headers2[i].innerText;

      tocListItem.appendChild(tocEntry);
      tocList.appendChild(tocListItem);
    }

    // Get the h3 tags - ToC entries
    headers3 = document.getElementsByTagName("h3");

    // For each h2
    for (i = 0; i < headers3.length; i++){

      // Create an id
      name = "h"+i;
      headers3[i].id=name;

      // a list item for the entry
      tocListItem = document.createElement("li");

      // a link for the h3
      tocEntry = document.createElement("a");
      tocEntry.setAttribute("href","#"+name);
      tocEntry.innerText=headers3[i].innerText;

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
