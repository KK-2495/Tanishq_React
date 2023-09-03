import React from 'react';
import "../Components/AllCss/multiProduct.css";
import "../Components/AllCss/Home.css";

const MultipleProduct = () => {
  return (
    <>
          <div className="main">
            <div className="navbar">
                <div>
                    <div className="logo">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Tanishq_Logo.svg/1024px-Tanishq_Logo.svg.png"
                            alt="" />
                    </div>
                    <div className="search">
                        <div>
                            <input type="text" placeholder="Search for Gold Jewellery, Diamond Jewellery and more.." />
                        </div>
                        <div>
                            <i className="fa-solid fa-camera"></i>
                        </div>
                        <div>
                            <i className="fa-solid fa-microphone"></i>
                        </div>
                        <div>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                    <div>
                        <div className="stores">
                            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNi4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyOCAyOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjggMjg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDE0NzkxMzg0Nzg0NTA1MDEwMjA1MDAwMDAwOTgxNjUwODMxODQwMjc0MjcxOV8pO30NCgkuc3Qxe29wYWNpdHk6MC40Njt9DQoJLnN0MntmaWxsOm5vbmU7fQ0KCS5zdDN7ZmlsbDpub25lO3N0cm9rZTojODMyNzI5O3N0cm9rZS1saW5lam9pbjpyb3VuZDt9DQo8L3N0eWxlPg0KPGc+DQoJPGRlZnM+DQoJCTxyZWN0IGlkPSJTVkdJRF8xXyIgd2lkdGg9IjI4IiBoZWlnaHQ9IjI4Ii8+DQoJPC9kZWZzPg0KCTxjbGlwUGF0aCBpZD0iU1ZHSURfMDAwMDAwMjY4NDE4MTM5MjEwNjUyNzkyNzAwMDAwMTIxNjI5NzI0MzkxMDQ1MDMxNzFfIj4NCgkJPHVzZSB4bGluazpocmVmPSIjU1ZHSURfMV8iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4NCgk8L2NsaXBQYXRoPg0KCTxnIGlkPSJTdG9yZV9JY29uX0RlZmF1bHRfU3RhdGVfMSIgc3R5bGU9ImNsaXAtcGF0aDp1cmwoI1NWR0lEXzAwMDAwMDI2ODQxODEzOTIxMDY1Mjc5MjcwMDAwMDEyMTYyOTcyNDM5MTA0NTAzMTcxXyk7Ij4NCgkJPGcgaWQ9ImIiPg0KCQkJPGcgaWQ9ImMiPg0KCQkJCTxnIGlkPSJHcm91cF8xNDIwOSIgY2xhc3M9InN0MSI+DQoJCQkJCTxwYXRoIGlkPSJQYXRoXzEzNjkiIGNsYXNzPSJzdDIiIGQ9Ik0wLDB2MjhoMjhWMEgweiBNMjYuMiwyNi4ySDEuOFYxLjhoMjQuNVYyNi4yeiIvPg0KCQkJCTwvZz4NCgkJCTwvZz4NCgkJCTxnIGlkPSJkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjUwNCAzLjUwNCkiPg0KCQkJCTxnIGlkPSJlIj4NCgkJCQkJPGcgaWQ9Ikdyb3VwXzE0MjExIj4NCgkJCQkJCTxyZWN0IGlkPSJSZWN0YW5nbGVfOTkyNCIgeD0iOC43IiB5PSI4LjciIGNsYXNzPSJzdDMiIHdpZHRoPSIxMS4xIiBoZWlnaHQ9IjExLjkiLz4NCgkJCQkJCTxwYXRoIGlkPSJQYXRoXzEzNzAiIGNsYXNzPSJzdDMiIGQ9Ik0yMSw0LjN2NC4zSDBWNC4zTDMuNSwwaDE0TDIxLDQuM3oiLz4NCgkJCQkJCTxsaW5lIGlkPSJMaW5lXzgzIiBjbGFzcz0ic3QzIiB4MT0iNC45IiB5MT0iOC40IiB4Mj0iNC45IiB5Mj0iNC41Ii8+DQoJCQkJCQk8bGluZSBpZD0iTGluZV84NCIgY2xhc3M9InN0MyIgeDE9IjEwLjUiIHkxPSI4LjQiIHgyPSIxMC41IiB5Mj0iNC41Ii8+DQoJCQkJCQk8bGluZSBpZD0iTGluZV84NSIgY2xhc3M9InN0MyIgeDE9IjE2LjEiIHkxPSI4LjQiIHgyPSIxNi4xIiB5Mj0iNC41Ii8+DQoJCQkJCQk8bGluZSBpZD0iTGluZV84NiIgY2xhc3M9InN0MyIgeDE9IjEuMiIgeTE9IjguNCIgeDI9IjEuMiIgeTI9IjIxIi8+DQoJCQkJCTwvZz4NCgkJCQk8L2c+DQoJCQk8L2c+DQoJCTwvZz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg=="
                                alt="" />
                            <p>STORES</p>
                        </div>
                        <div className="stores">
                            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PGRlZnM+PHN0eWxlPi5ie2ZpbGw6IzgzMjcyOTt9LmN7ZmlsbDpub25lO3N0cm9rZTojZWZlM2UzO3N0cm9rZS13aWR0aDoxLjRweDt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImIiIGQ9Ik0xMywxNS43NWMtMy42NywwLTExLDEuODQtMTEsNS41djIuNzVIMjR2LTIuNzVjMC0zLjY2LTcuMzMtNS41LTExLTUuNVptMC0xMy43NWMtMy4wNCwwLTUuNSwyLjQ2LTUuNSw1LjVzMi40Niw1LjUsNS41LDUuNSw1LjUtMi40Niw1LjUtNS41LTIuNDYtNS41LTUuNS01LjVabTAsMTYuNWMzLjcxLDAsNy45NywxLjc3LDguMjUsMi43NUg0Ljc1Yy4zMi0uOTksNC41NS0yLjc1LDguMjUtMi43NW0wLTEzLjc1YzEuNTEsMCwyLjc1LDEuMjQsMi43NSwyLjc1cy0xLjI0LDIuNzUtMi43NSwyLjc1LTIuNzUtMS4yNC0yLjc1LTIuNzUsMS4yNC0yLjc1LDIuNzUtMi43NSIvPjxwYXRoIGNsYXNzPSJjIiBkPSJNMTMsMTUuNzVjLTMuNjcsMC0xMSwxLjg0LTExLDUuNXYyLjc1SDI0di0yLjc1YzAtMy42Ni03LjMzLTUuNS0xMS01LjVabTAtMTMuNzVjLTMuMDQsMC01LjUsMi40Ni01LjUsNS41czIuNDYsNS41LDUuNSw1LjUsNS41LTIuNDYsNS41LTUuNS0yLjQ2LTUuNS01LjUtNS41Wm0wLDE2LjVjMy43MSwwLDcuOTcsMS43Nyw4LjI1LDIuNzVINC43NWMuMzItLjk5LDQuNTUtMi43NSw4LjI1LTIuNzVtMC0xMy43NWMxLjUxLDAsMi43NSwxLjI0LDIuNzUsMi43NXMtMS4yNCwyLjc1LTIuNzUsMi43NS0yLjc1LTEuMjQtMi43NS0yLjc1LDEuMjQtMi43NSwyLjc1LTIuNzUiLz48L3N2Zz4="
                                alt="" />
                            <p>ACCOUNT</p>
                        </div>
                        <div className="stores">
                            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9ImEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNiAyNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjYgMjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojODMyNzI5O30KCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojRUZFM0UzO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTMuMSwyMC41TDEzLDIwLjZsLTAuMS0wLjFDNy4xLDE1LjQsMy4zLDEyLDMuMyw4LjZjMC0yLjQsMS44LTQuMSw0LjMtNC4xYzEuOSwwLDMuNywxLjIsNC40LDIuOGgyLjMKCQljMC42LTEuNiwyLjUtMi44LDQuMy0yLjhjMi40LDAsNC4zLDEuOCw0LjMsNC4xQzIyLjgsMTIuMSwxOC45LDE1LjQsMTMuMSwyMC41eiBNMTguNSwyLjJjLTIuMSwwLTQuMiwxLTUuNSwyLjUKCQljLTEuMy0xLjUtMy40LTIuNS01LjUtMi41QzMuNywyLjIsMC44LDUsMC44LDguN2MwLDQuNSw0LjEsOC4xLDEwLjQsMTMuNmwxLjgsMS41bDEuOC0xLjZjNi4zLTUuNSwxMC40LTkuMiwxMC40LTEzLjYKCQlDMjUuMiw1LDIyLjIsMi4yLDE4LjUsMi4yeiIvPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTEzLjEsMjAuNUwxMywyMC42bC0wLjEtMC4xQzcuMSwxNS40LDMuMywxMiwzLjMsOC42YzAtMi40LDEuOC00LjEsNC4zLTQuMWMxLjksMCwzLjcsMS4yLDQuNCwyLjhoMi4zCgkJYzAuNi0xLjYsMi41LTIuOCw0LjMtMi44YzIuNCwwLDQuMywxLjgsNC4zLDQuMUMyMi44LDEyLjEsMTguOSwxNS40LDEzLjEsMjAuNXoiLz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xOC41LDIuMmMtMi4xLDAtNC4yLDEtNS41LDIuNWMtMS4zLTEuNS0zLjQtMi41LTUuNS0yLjVDMy43LDIuMiwwLjgsNSwwLjgsOC43YzAsNC41LDQuMSw4LjEsMTAuNCwxMy42CgkJbDEuOCwxLjVsMS44LTEuNmM2LjMtNS41LDEwLjQtOS4yLDEwLjQtMTMuNkMyNS4yLDUsMjIuMiwyLjIsMTguNSwyLjJ6Ii8+CjwvZz4KPC9zdmc+Cg=="
                                alt="" />
                            <p>WISHLIST</p>
                        </div>
                        <div className="stores">
                            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PGRlZnM+PHN0eWxlPi5ie2ZpbGw6IzgzMjcyOTt9LmN7ZmlsbDpub25lO3N0cm9rZTojZWZlM2UzO308L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iYiIgZD0iTTIwLjAyLDIwLjAyYy0xLjI5LDAtMi4zMywxLjA1LTIuMzMsMi4zNHMxLjA0LDIuMzQsMi4zMywyLjM0LDIuMzQtMS4wNSwyLjM0LTIuMzQtMS4wNS0yLjM0LTIuMzQtMi4zNFptLTExLjcsMGMtMS4yOSwwLTIuMzMsMS4wNS0yLjMzLDIuMzRzMS4wNCwyLjM0LDIuMzMsMi4zNCwyLjM0LTEuMDUsMi4zNC0yLjM0LTEuMDUtMi4zNC0yLjM0LTIuMzRabS0uOTgtMTQuMDRoMTQuMjJsLTMuMjMsNS44NUgxMC4xbC0yLjc3LTUuODVabTEwLjk5LDguMTljLjg4LDAsMS42NS0uNDgsMi4wNS0xLjIxbDQuMTktNy41OWMuNDMtLjc3LS4xMy0xLjczLTEuMDItMS43M0g2LjIybC0xLjEtMi4zNEgxLjI5VjMuNjRIMy42M0w3Ljg1LDEyLjUybC0xLjU4LDIuODZjLS44NSwxLjU3LC4yNywzLjQ3LDIuMDUsMy40N2gxNC4wNHYtMi4zNEg4LjMxbDEuMjktMi4zNGg4LjcyWiIvPjxwYXRoIGNsYXNzPSJjIiBkPSJNMjAuMDIsMjAuMDJjLTEuMjksMC0yLjMzLDEuMDUtMi4zMywyLjM0czEuMDQsMi4zNCwyLjMzLDIuMzQsMi4zNC0xLjA1LDIuMzQtMi4zNC0xLjA1LTIuMzQtMi4zNC0yLjM0Wm0tMTEuNywwYy0xLjI5LDAtMi4zMywxLjA1LTIuMzMsMi4zNHMxLjA0LDIuMzQsMi4zMywyLjM0LDIuMzQtMS4wNSwyLjM0LTIuMzQtMS4wNS0yLjM0LTIuMzQtMi4zNFptLS45OC0xNC4wNGgxNC4yMmwtMy4yMyw1Ljg1SDEwLjFsLTIuNzctNS44NVptMTAuOTksOC4xOWMuODgsMCwxLjY1LS40OCwyLjA1LTEuMjFsNC4xOS03LjU5Yy40My0uNzctLjEzLTEuNzMtMS4wMi0xLjczSDYuMjJsLTEuMS0yLjM0SDEuMjlWMy42NEgzLjYzTDcuODUsMTIuNTJsLTEuNTgsMi44NmMtLjg1LDEuNTcsLjI3LDMuNDcsMi4wNSwzLjQ3aDE0LjA0di0yLjM0SDguMzFsMS4yOS0yLjM0aDguNzJaIi8+PC9zdmc+"
                                alt="" />
                            <p>CART</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="title">
                <div className="titleList">
                    <p>ALL JEWELLERY</p>
                </div>
                <div className="titleList">
                    <p>GOLD</p>
                </div>
                <div className="titleList">
                    <p>DIAMOND</p>
                </div>
                <div className="titleList">
                    <p>EARRINGS</p>
                </div>
                <div className="titleList">
                    <p>RINGS</p>
                </div>
                <div className="titleList">
                    <p>MIA</p>
                </div>
                <div className="titleList">
                    <p>COLLECTIONS</p>
                </div>
                <div className="titleList">
                    <p>RIVAAH</p>
                </div>
                <div className="titleList">
                    <p>GOLDEN HARVEST</p>
                </div>
                <div className="titleList">
                    <p>CORPORATE GIFTING</p>
                </div>
                <div className="titleList">
                    <p>MORE</p>
                </div>
            </div>
{/* <!-- ************Filter*************** --> */}
            <div className="filter">
                <div>
                    <div className="filterList">
                        <h4>PRICE</h4>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className="filterList">
                        <h4>JEWELLERY TYPE</h4>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className="filterList">
                        <h4>PRODUCT</h4>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className="filterList">
                        <h4>GENDER</h4>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className="filterList">
                        <h4>METAL COLOR</h4>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className="filterList">
                        <h4>TYPE</h4>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className="filterList">
                        <h4>SEE MORE FILTERS</h4>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>    
                </div>
            </div>
{/* <!-- ****************Store Locator*******************--> */}
            <div className="storeLocator">
                <div>
                    <div>
                        <img src="https://www.tanishq.co.in/wps/wcm/connect/tanishqrt/561145a0-90bc-4819-b68f-83aa6e69e3c9/2.svg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0T6206GQH590V3000-561145a0-90bc-4819-b68f-83aa6e69e3c9-otFknxR" alt="image" />
                        <h5>STORE LOCATOR</h5>
                    </div>
                    <div>
                        <img src="https://www.tanishq.co.in/wps/wcm/connect/tanishqrt/3c7d5d7c-9c8d-4413-9b13-bebdb61e738e/1.svg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0T6206GQH590V3000-3c7d5d7c-9c8d-4413-9b13-bebdb61e738e-otbciiW" alt="image" />
                        <h5>BOOK AN APPOINTMENT</h5>
                    </div>
                    <div>
                        <img src="https://www.tanishq.co.in/wps/wcm/connect/tanishqrt/5694b3ee-507c-4bda-ab50-09b05a0a1949/3.svg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0T6206GQH590V3000-5694b3ee-507c-4bda-ab50-09b05a0a1949-otbcuJM" alt="image" />
                        <h5>LIVE VIDEO CALL</h5>
                    </div>
                </div>
            </div>
{/* <!-- ****************Content*******************--> */}
            <div className="content">
                <div>
                    <p>Home</p>
                    <h4>| Mens Jewellery</h4>
                </div>
                <div>
                    <h2>Mens-Jewellery</h2> 
                    <p>| 1078 DESIGNS</p>
                </div>
                <div>
                    <button>
                        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNvbXBvbmVudF8xNDNfMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IgoJIHk9IjBweCIgdmlld0JveD0iMCAwIDQ0IDQ0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NCA0NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQoJLnN0MXtmaWxsOm5vbmU7fQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiM4MzI3Mjk7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgo8Zz4KCTxjaXJjbGUgaWQ9IkVsbGlwc2VfMiIgY2xhc3M9InN0MCIgY3g9IjIyIiBjeT0iMjIiIHI9IjIyIi8+Cgk8ZyBpZD0iYiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNiA2KSI+CgkJPGcgaWQ9ImMiPgoJCQk8cGF0aCBpZD0iUGF0aF8xMzQyIiBjbGFzcz0ic3QxIiBkPSJNMCwwdjMyaDMyVjBMMCwweiBNMzAsMzBIMlYyaDI4VjMweiIvPgoJCTwvZz4KCQk8ZyBpZD0iZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi4wMDMgMi4wMDIpIj4KCQkJPGcgaWQ9Ikdyb3VwXzE0MTk1Ij4KCQkJCTxjaXJjbGUgaWQ9IkVsbGlwc2VfOCIgY2xhc3M9InN0MiIgY3g9IjE0IiBjeT0iMTQiIHI9IjE0Ii8+CgkJCQk8ZyBpZD0iR3JvdXBfMTQxOTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0LjAwNyA4LjA0NCkiPgoJCQkJCTxwYXRoIGlkPSJQYXRoXzEzNDMiIGNsYXNzPSJzdDIiIGQ9Ik0zLDBMMCwzbDMsMyIvPgoJCQkJCTxsaW5lIGlkPSJMaW5lXzQ2IiBjbGFzcz0ic3QyIiB4MT0iMCIgeTE9IjMiIHgyPSI5IiB5Mj0iMyIvPgoJCQkJPC9nPgoJCQkJPGcgaWQ9Ikdyb3VwXzE0MTk0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LjAwNiAxNC4wNDQpIj4KCQkJCQk8cGF0aCBpZD0iUGF0aF8xMzQ0IiBjbGFzcz0ic3QyIiBkPSJNNiwwbDMsM0w2LDYiLz4KCQkJCQk8bGluZSBpZD0iTGluZV80NyIgY2xhc3M9InN0MiIgeDE9IjkiIHkxPSIzIiB4Mj0iMCIgeTI9IjMiLz4KCQkJCTwvZz4KCQkJPC9nPgoJCTwvZz4KCTwvZz4KPC9nPgo8L3N2Zz4K" alt="image" />
                        COMPARE
                    </button>
                    
                    <select name="SORT BY: BEST SELLER" id="SORT BY: BEST SELLER">
                        <option value="BEST SELLERS">BEST SELLERS</option>
                        <option value="NEW ARRIVALS">NEW ARRIVALS</option>
                        <option value="POPULARITY">POPULARITY</option>
                        <option value="PRICE(Lowest to Highest)">PRICE(Lowest to Highest)</option>
                        <option value="PRICE(Highest to Lowest)">PRICE(Highest to Lowest)</option>
                    </select>                        
                </div>
                {/* <!-- ************Jewellery************* --> */}
                <div className="mensJewel" id="productList">
                     <div className="mensJewelList">
                        <div className="jewelImage">
                            <img src="https://staticimg.titan.co.in/Tanishq/Catalog/512621PHGAAA00.jpg?impolicy=pqmed&imwidth=640" alt="" />
                        </div>
                        <div className="jewelCost">
                            <a href="./SingleProduct.html"><h4>Dashing Men's Laser Cut Pendan</h4>
                            <h4>₹ 40823,<s>₹ 41762</s></h4>
                            <p>Men | Pendant</p></a>
                        </div>
                        <div>
                            <button>Explore Now</button>
                        </div>
                    </div>
                    <div className="mensJewelList">
                        <div className="jewelImage">
                            <img src="https://staticimg.titan.co.in/Tanishq/Catalog/512621PJOAAA00_1.jpg?impolicy=pqmed&imwidth=640" alt="" />
                        </div>
                        <div className="jewelCost">
                            <h4>Rectangular Carved Gold Pendant</h4>
                            <h4>₹ 26974,<s>₹ 27595</s></h4>
                            <p>Men | Pendant</p>
                        </div>
                        <div>
                            <button>Explore Now</button>
                        </div>
                    </div>
                    <div className="mensJewelList">
                        <div className="jewelImage">
                            <img src="https://staticimg.titan.co.in/Tanishq/Catalog/512621PKGAAA00_1.jpg?impolicy=pqmed&imwidth=640" alt="" />
                        </div>
                        <div className="jewelCost">
                            <h4>V Cut Motif Gold Pendant </h4>
                            <h4>₹ 40131,<s>₹ 41053</s></h4>
                            <p>Men | Pendant</p>
                        </div>
                        <div>
                            <button>Explore Now</button>
                        </div>
                    </div>
                    <div className="mensJewelList">
                        <div className="jewelImage">
                            <img src="https://staticimg.titan.co.in/Tanishq/Catalog/512621PKDAAA00_1.jpg?impolicy=pqmed&imwidth=640" alt="" />
                        </div>
                        <div className="jewelCost">
                            <h4>Creative Geometric Gold</h4>
                            <h4>₹ 29938,<s>₹ 30627</s></h4>
                            <p>Men | Pendant</p>
                        </div>
                        <div>
                            <button>Explore Now</button>
                        </div>
                    </div>
                    <div className="mensJewelList">
                        <div className="jewelImage">
                            <img src="https://staticimg.titan.co.in/Tanishq/Catalog/512621PGLAAA00_1.jpg?impolicy=pqmed&imwidth=640" alt="" />
                        </div>
                        <div className="jewelCost">
                            <h4>Chic Modern Men's Laser Cut</h4>
                            <h4>₹ 38706,<s>₹ 39597</s></h4>
                            <p>Men | Pendant</p>
                        </div>
                        <div>
                            <button>Explore Now</button>
                        </div>
                    </div>
                    <div className="mensJewelList">
                        <div className="jewelImage">
                            <img src="https://staticimg.titan.co.in/Tanishq/Catalog/51F1D1FKVAA00.jpg?impolicy=pqmed&imwidth=640" alt="" />
                        </div>
                        <div className="jewelCost">
                            <h4>Glamorous Ridged Gold Ring</h4>
                            <h4>₹ 51081,<s>₹ 52174</s></h4>
                            <p>Men | Pendant</p>
                        </div>
                        <div>
                            <button>Explore Now</button>
                        </div>
                    </div>
                    <div className="mensJewelList">
                        <div className="jewelImage">
                            <img src="https://staticimg.titan.co.in/Tanishq/Catalog/512619FARAA00.jpg?impolicy=pqmed&imwidth=640" alt="" />
                        </div>
                        <div className="jewelCost">
                            <h4>Dapper 22 Karat Yellow Gold</h4>
                            <h4>₹ 47415,<s>₹ 48398</s></h4>
                            <p>Men | Pendant</p>
                        </div>
                        <div>
                            <button>Explore Now</button>
                        </div>
                    </div>
                    <div className="mensJewelList">
                        <div className="jewelImage">
                            <img src="https://staticimg.titan.co.in/Tanishq/Catalog/50G1FBFBOAA00_1.jpg?impolicy=pqmed&imwidth=640" alt="" />
                        </div>
                        <div className="jewelCost">
                            <h4>classNamey Bold Ring for Men</h4>
                            <h4>₹ 28880,<s>₹ 29370</s></h4>
                            <p>Men | Pendant</p>
                        </div>
                        <div>
                            <button>Explore Now</button>
                        </div>
                    </div>
                    <div className="mensJewelList">
                        <div className="jewelImage">
                            <img src="https://staticimg.titan.co.in/Tanishq/Catalog/51F1KPFBCAA00_1.jpg?impolicy=pqmed&imwidth=640" alt="" />
                        </div>
                        <div className="jewelCost">
                            <h4>Majestic Intricate Gold Ring</h4>
                            <h4>₹ 38587,<s>₹ 39523</s></h4>
                            <p>Men | Pendant</p>
                        </div>
                        <div>
                            <button>Explore Now</button>
                        </div>
                    </div>
                    <div className="mensJewelList">
                        <div className="jewelImage">
                            <img src="https://staticimg.titan.co.in/Tanishq/Catalog/51F1KPFOCAA00_1.jpg?impolicy=pqmed&imwidth=640" alt="" />
                        </div>
                        <div className="jewelCost">
                            <h4>Abstract Ring for Men</h4>
                            <h4>₹ 35165,<s>₹ 35974</s></h4>
                            <p>Men | Pendant</p>
                        </div>
                        <div>
                            <button>Explore Now</button>
                        </div>
                    </div>
                    <div className="mensJewelList">
                        <div className="jewelImage">
                            <img src="https://staticimg.titan.co.in/Tanishq/Catalog/513515CHHAA00_1.jpg?impolicy=pqmed&imwidth=640" alt="" />
                        </div>
                        <div className="jewelCost">
                            <h4>Slender Gold Chain for Men</h4>
                            <h4>₹ 56812,<s>₹ 57990</s></h4>
                            <p>Men | Pendant</p>
                        </div>
                        <div>
                            <button>Explore Now</button>
                        </div>
                    </div>
                    <div className="mensJewelList">
                        <div className="jewelImage">
                            <img src="https://staticimg.titan.co.in/Tanishq/Catalog/51F1KPVSP1A00_1.jpg?impolicy=pqmed&imwidth=640" alt="" />
                        </div>
                        <div className="jewelCost">
                            <h4>Striking Gold Bangle For Men</h4>
                            <h4>₹ 185062,<s>₹ 188199</s></h4>
                            <p>Men | Pendant</p>
                        </div>
                        <div>
                            <button>Explore Now</button>
                        </div>
                    </div>
                    <div className="mensJewelList">
                        <div className="jewelImage">
                            <img src="https://staticimg.titan.co.in/Tanishq/Catalog/50F1D1VTD1A02_1.jpg?impolicy=pqmed&imwidth=640" alt="" />
                        </div>
                        <div className="jewelCost">
                            <h4>Sophisticated Gold and Diamond</h4>
                            <h4>₹ 202809,<s>₹ 225343</s></h4>
                            <p>Men | Pendant</p>
                        </div>
                        <div>
                            <button>Explore Now</button>
                        </div>
                    </div>
                    <div className="mensJewelList">
                        <div className="jewelImage">
                            <img src="https://staticimg.titan.co.in/Tanishq/Catalog/50F1D1VSY1A02_1.jpg?impolicy=pqmed&imwidth=640" alt="" />
                        </div>
                        <div className="jewelCost">
                            <h4>Textured Diamond and Gold </h4>
                            <h4>₹ 196684,<s>₹ 231393</s></h4>
                            <p>Men | Pendant</p>
                        </div>
                        <div>
                            <button>Explore Now</button>
                        </div>
                    </div>
                    <div className="mensJewelList">
                        <div className="jewelImage">
                            <img src="https://staticimg.titan.co.in/Tanishq/Catalog/501719POUAAA00.jpg?impolicy=pqmed&imwidth=640" alt="" />
                        </div>
                        <div className="jewelCost">
                            <h4>Artistic Typographic Letter J</h4>
                            <h4>₹ 8076,<s>₹ 82433</s></h4>
                            <p>Men | Pendant</p>
                        </div>
                        <div>
                            <button>Explore Now</button>
                        </div>
                    </div>
                    <div className="mensJewelList">
                        <div className="jewelImage">
                            <img src="https://staticimg.titan.co.in/Tanishq/Catalog/501719PDLAAA00_1.jpg?impolicy=pqmed&imwidth=640" alt="" />
                        </div>
                        <div className="jewelCost">
                            <h4>A Letter Glossy Gold Pendant</h4>
                            <h4>₹ 8284,<s>₹ 8456</s></h4>
                            <p>Men | Pendant</p>
                        </div>
                        <div>
                            <button>Explore Now</button>
                        </div>
                    </div> 

                </div>
                <div className="seeMore">
                    <button>See More Products</button>
                </div>

            </div>

            {/* <!-- ********Footer******* --> */}
            <div className="footer">
                <div className="inner-footer">
                    <div className="topic">
                        <h3>Useful Links</h3>
                        <p>Delivery Information</p>
                        <p>International Shipping</p>
                        <p>Payment Options</p>
                        <p>Track Your Order</p>
                        <p>Returns</p>
                        <p>Find a Store</p>
                    </div>
                    <div className="topic">
                        <h3>Information</h3>
                        <p>Careers</p>
                        <p>Blog</p>
                        <p>Offers and Contest Details</p>
                        <p>Help & FAQS</p>
                        <p>About Tanishq</p>
                    </div>
                    <div className="topic">
                        <h3>Contact Us</h3>
                        <p>Write to Us</p>
                        <p>1800-266-0123</p>
                        <p>Chat with Us</p>
                    </div>
                    <div className="topic">
                        <h4>Download the Tanishq App now</h4>
                        <div className="app-logo">
                            <img src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/apple.svg" alt="" />
                            <img src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/google-play.svg"
                                alt="" />
                        </div>
                        <h4>Follow us On</h4>
                        <div className="social-logo">
                            <i className="fa-brands fa-facebook-f fa-2x"></i>
                            <i className="fa-brands fa-twitter fa-2x"></i>
                            <i className="fa-brands fa-instagram fa-2x"></i>
                        </div>
                    </div>
                </div>

                <div className="bottom-footer">
                    <div className="inner-bottom-footer">
                        <div className="finance">
                            <div className="finance-logo">
                                <img src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/visa.svg" alt="" />
                            </div>
                            <div className="finance-logo">
                                <img src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/master.svg"
                                    alt="" />
                            </div>
                            <div className="finance-logo">
                                <img src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/paypal.svg"
                                    alt="" />
                            </div>
                            <div className="finance-logo">
                                <img src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/maestro.svg"
                                    alt="" />
                            </div>
                            <div className="finance-logo">
                                <img src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/rupay.svg"
                                    alt="" />
                            </div>
                            <div className="finance-logo">
                                <img src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/axis.svg" alt="" />
                            </div>
                            <div className="finance-logo">
                                <img src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/icici.svg"
                                    alt="" />
                            </div>
                            <div className="finance-logo">
                                <img src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/diners.svg"
                                    alt="" />
                            </div>
                            <div className="finance-logo">
                                <img src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/amex.svg" alt="" />
                            </div>
                        </div>
                        <div className="copyright">
                            <div className="policy">
                                <p>2023 Titan Company Limited. All Rights Reserved.</p>
                                <p>Terms and Conditions | Privacy Policy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default MultipleProduct;