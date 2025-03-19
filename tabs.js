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
        aria-selected="${index === 0 ? 'true' : 'false'}" 
     role='tab'
     >${tab.title}</button>`
        )
        .join("");

    const tabPanels = tabsData
        .map(
            (tab) =>
                `<div
     role='tabpanel'
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

    tabs.forEach((tab) => {
        tab.addEventListener("click", (e) => {
            console.log("tab clicked", e);
            console.log("tab clicked", e.currentTarget);
            e.preventDefault();
        });
    });
}

document.querySelector("#app").innerHTML = renderTabs(tabsData);
