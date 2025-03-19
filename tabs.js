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
  const tabButtons = tabsData.map((tab, index) =>
    `<button
      id="tab-${tab.id}"
      aria-controls="panel-${tab.id}"
      aria-selected="${index === 0 ? "true" : "false"}" 
      tabindex="${index === 0 ? "0" : "-1"}"
      role='tab'    
     >${tab.title}</button>`
    ).join("");
   

  const tabPanels = tabsData.map((tab, index) =>
    `<div
      role='tabpanel'
      id="panel-${tab.id}" 
      aria-labelledby="tab-${tab.id}"
      ${index !== 0 ? "hidden" : ""}
     >
      <h2>${tab.content.heading}</h2>
       <p>${tab.content.body}</p>
     </div>`
    ).join("");
    

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
  const tabList = document.querySelector('[role="tablist"]');
  const panels = document.querySelectorAll('[role="tabpanel"]');

  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      switchTab(e.currentTarget);
    });
  });

  tabList.addEventListener("keydown", (e) => {
    const targetTab = e.target;
    const tabArray = Array.from(tabs);
    const index = tabArray.indexOf(targetTab);

    let newTab;

    // Define key actions this will need to be changed for mobile
    switch (e.key) {
      case "ArrowLeft":
        newTab =
          index === 0 ? tabArray[tabArray.length - 1] : tabArray[index - 1];
        break;
      case "ArrowRight":
        newTab =
          index === tabArray.length - 1 ? tabArray[0] : tabArray[index + 1];
        break;
      default:
        return;
    }
    if (newTab) {
      e.preventDefault();
      switchTab(newTab, true);
    }
  });
  function switchTab(newTab, focusTab = false) {
    const activePanelId = newTab.getAttribute("aria-controls");
    const activePanel = document.getElementById(activePanelId);
    tabs.forEach((tab) => {
      tab.setAttribute("aria-selected", "false");
      tab.setAttribute("tabindex", "-1");
    });

    panels.forEach((panel) => {
      panel.hidden = true;
    });
    if (focusTab) {
      newTab.focus();
    }
    newTab.setAttribute("aria-selected", "true");
    newTab.setAttribute("tabindex", "0");
    activePanel.hidden = false;
  }
}

document.querySelector("#app").innerHTML = renderTabs();
