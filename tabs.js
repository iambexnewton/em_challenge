export const tabsData = [
    {
        id: 1,
        title: "First Tab",
        content: {
            heading: "First Heading",
            body: "First body",
        },
    },
    {
        id: 2,
        title: "Second Tab",
        content: {
            heading: "Second Heading",
            body: "Second body",
        },
    },
    {
        id: 3,
        title: "Third Tab",
        content: {
            heading: "Third Heading",
            body: "Third body",
        },
    },
];

export function renderTabs() {
    const tabButtons = tabsData
        .map(
            (tab, index) =>
                `<button
            id="tab-${tab.id}"
        aria-selected="${index === 0 ? 'true' : 'false'}" 
        tabindex="${index === 0 ? '0' : '-1'}"
     role='tab'
     >${tab.title}</button>`
        )
        .join("");

    const tabPanels = tabsData
        .map(
            (tab) =>
                `<div
     role='tabpanel'
     id="panel-${tab.id}" 
        aria-labelledby="tab-${tab.id}"
     >
    
     <h2>${tab.content.heading}</h2>
     <p>${tab.content.body}</p></div>`
        )
        .join("");

    return `
<div class="container">
  <div class="tabs" role="tablist">
    ${tabButtons}
  </div>
  <div class="panels">
    ${tabPanels}
  </div>
</div>
`;
}

export function tabFunctionality() {
    const tabs = document.querySelectorAll('[role="tab"]');
    const panels = document.querySelectorAll('[role="tabpanel"]');

    tabs.forEach((tab) => {
        tab.addEventListener("click", (e) => {
            console.log("tab clicked", e);
            console.log("tab clicked", e.currentTarget);
            e.preventDefault();
            switchTab(e.currentTarget);
        });
    });

    function switchTab(newTab) {

        tabs.forEach(tab => {
            tab.setAttribute('aria-selected', 'false');
            tab.setAttribute('tabindex', '-1');
        });
        newTab.setAttribute('aria-selected', 'true');
        newTab.setAttribute('tabindex', '0');

    }
}

document.querySelector("#app").innerHTML = renderTabs(tabsData);
