
// Get ToC div
    toc = document.getElementById("ToC");


    //Add a header
    /*
    tocHeader = document.createElement("h2");
    tocHeader.innerText="Deepmore";
    toc.appendChild(tocHeader);
    */

    // Create a list for the ToC entries
    tocList = document.createElement("ul");

    // Get the h1 tags - ToC entries
    headers1 = document.getElementsByTagName("h1");

    // Get the h2 tags - ToC entries
    headers2 = document.getElementsByTagName("h2");

    // Get the h3 tags - ToC entries
    headers3 = document.getElementsByTagName("h3");

    // For each h1
    for (e = 0; e < headers1.length; e++){

      // Create an id
      name = "h"+e;
      headers1[e].id=name;

      // a list item for the entry
      tocHeader1 = document.createElement("p");
      tocHeader1.className='tocHeader1';

      // a link for the h1
      tocHeader1Entry = document.createElement("a");
      tocHeader1Entry.setAttribute("href","#"+name);
      tocHeader1Entry.innerText=headers1[e].innerText;

      tocHeader1.appendChild(tocHeader1Entry);
      toc.appendChild(tocHeader1);
    }

    // For each h2
    for (i = 0; i < headers2.length; i++){

      // Create an id
      name = "h"+i;
      headers2[i].id=name;

      // a list item for the entry
      tocHeader2 = document.createElement("li");
      tocHeader2.className='tocHeader2';

      // a link for the h2
      tocHeader2Entry = document.createElement("a");
      tocHeader2Entry.setAttribute("href","#"+name);
      tocHeader2Entry.innerText=headers2[i].innerText;

      tocHeader2.appendChild(tocHeader2Entry);
      tocList.appendChild(tocHeader2);

      // For each h3
      /*
      for (a = 0; a < headers3.length; a++){

        // Create an id
        name = "h"+a;
        headers3[a].id=name;

        // a list item for the entry
        tocHeader3 = document.createElement("li");
        tocHeader3.className='tocHeader3';

        // a link for the h3
        tocHeader3Entry = document.createElement("a");
        tocHeader3Entry.setAttribute("href","#"+name);
        tocHeader3Entry.innerText=headers3[a].innerText;

        tocHeader3.appendChild(tocHeader3Entry);
        tocList.appendChild(tocHeader3);
      }
      */
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
