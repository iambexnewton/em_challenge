
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

  export function renderData(){
    const appContainer = document.querySelector("#app")
    const renderData = tabsData.map((tab, index) => 
      `<div id=${index}>
       <h2>${tab.content.heading}</h2>
       </div>`  
   )
    console.log(renderData)
    appContainer.innerHTML = `<div> ${renderData}</div>`
  }